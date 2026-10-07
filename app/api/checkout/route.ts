import { prisma } from "@/lib/prisma"
import Stripe from "stripe"
import { NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import { getServiceById } from "@/content/services"
import {
  HOLD_MINUTES,
  MAX_DURATION_MINUTES,
  activeBookingWhere,
  durationFor,
  formatBookingTime,
  getServiceByName,
  isValidStartTime,
  overlaps,
} from "@/lib/booking"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SLOT_TAKEN = "That time was just booked. Please choose another time."

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { serviceId, serviceName, bookingTime, customerEmail } = body ?? {}

    // 1. Service, price and duration come from the server's service list. Any price the
    //    browser sends is ignored. (serviceName is accepted only for older cached pages.)
    const service = getServiceById(serviceId) ?? (serviceName ? getServiceByName(serviceName) : undefined)
    if (!service) return NextResponse.json({ error: "Unknown service" }, { status: 400 })

    const start = new Date(bookingTime)
    if (!bookingTime || isNaN(start.getTime()))
      return NextResponse.json({ error: "Invalid booking time" }, { status: 400 })
    if (start <= new Date())
      return NextResponse.json({ error: "Cannot book a time in the past" }, { status: 400 })
    // Only real start times inside business hours for this service can be booked.
    if (!isValidStartTime(start, service))
      return NextResponse.json({ error: "That time isn't available for this service" }, { status: 400 })

    const email = typeof customerEmail === "string" && EMAIL_RE.test(customerEmail) ? customerEmail : null

    // 2. Hold the slot. Expired holds are cleared first so they never block a time.
    //    The unique index on bookingTime stops two holds for the same start time;
    //    the overlap check below covers different start times (e.g. 9:00 vs 9:45).
    const expiresAt = new Date(Date.now() + HOLD_MINUTES * 60 * 1000)
    // (5-minute grace so a payment finishing right at the deadline can still be confirmed.)
    await prisma.booking.deleteMany({
      where: { status: "pending", expiresAt: { lte: new Date(Date.now() - 5 * 60_000) } },
    })

    const nearby = () =>
      prisma.booking.findMany({
        where: {
          bookingTime: {
            gt: new Date(start.getTime() - MAX_DURATION_MINUTES * 60_000),
            lt: new Date(start.getTime() + service.duration * 60_000),
          },
          ...activeBookingWhere(),
        },
        select: { id: true, bookingTime: true, serviceName: true },
      })

    const clash = (rows: { bookingTime: Date; serviceName: string }[]) =>
      rows.some((b) => overlaps(start, service.duration, b.bookingTime, durationFor(b.serviceName)))

    if (clash(await nearby())) return NextResponse.json({ error: SLOT_TAKEN }, { status: 409 })

    let booking
    try {
      booking = await prisma.booking.create({
        data: {
          serviceName: service.name,
          price: service.price,
          bookingTime: start,
          customerEmail: email,
          status: "pending",
          expiresAt,
        },
      })
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
        return NextResponse.json({ error: SLOT_TAKEN }, { status: 409 })
      }
      throw err
    }

    // 3. Re-check after inserting: if two overlapping holds were created at the same moment,
    //    the earlier one (lower id) wins and this one is released.
    const after = (await nearby()).filter((b) => b.id !== booking.id)
    if (after.some((b) => b.id < booking.id && overlaps(start, service.duration, b.bookingTime, durationFor(b.serviceName)))) {
      await prisma.booking.delete({ where: { id: booking.id } })
      return NextResponse.json({ error: SLOT_TAKEN }, { status: 409 })
    }

    const origin = req.headers.get("origin")
    const host = req.headers.get("host")
    const baseUrl =
      origin || (host ? `https://${host}` : null) || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        customer_email: email ?? undefined,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: service.name,
                description: `${service.duration} minutes · ${formatBookingTime(start)}`,
              },
              unit_amount: service.price * 100,
            },
            quantity: 1,
          },
        ],
        metadata: { bookingId: String(booking.id), serviceId: service.id },
        expires_at: Math.floor(expiresAt.getTime() / 1000),
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/cancel?bookingId=${booking.id}`,
      })
      return NextResponse.json({ url: session.url })
    } catch (err) {
      // Stripe failed: release the hold so the time isn't blocked for 30 minutes.
      await prisma.booking.delete({ where: { id: booking.id } }).catch(() => {})
      throw err
    }
  } catch (err: unknown) {
    console.error("Checkout error:", err)
    return NextResponse.json({ error: "Something went wrong starting checkout. Please try again." }, { status: 500 })
  }
}
