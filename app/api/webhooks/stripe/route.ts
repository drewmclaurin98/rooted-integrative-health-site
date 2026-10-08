import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendAutoRefundEmails, sendBookingEmails, sendCancellationEmails } from "@/lib/emails"
import { addBookingEvent, removeBookingEvent } from "@/lib/googleCalendar"
import { MAX_DURATION_MINUTES, activeBookingWhere, conflicts, durationFor } from "@/lib/booking"
import { SCHEDULE } from "@/lib/schedule"
import { getServiceById } from "@/content/services"
import { Prisma } from "@prisma/client"

/**
 * A paid checkout whose hold no longer exists. Re-creates the booking (same id, so refunds and
 * the calendar event still match) when the time is still free; otherwise refunds in full.
 */
async function recoverPaidBooking(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  bookingId: number,
  email: string | null
) {
  const service = getServiceById(session.metadata?.serviceId)
  const start = session.metadata?.bookingTime ? new Date(session.metadata.bookingTime) : null

  if (service && start && !isNaN(start.getTime()) && start.getTime() > Date.now()) {
    const buffer = SCHEDULE.bufferMinutes
    const nearby = await prisma.booking.findMany({
      where: {
        bookingTime: {
          gt: new Date(start.getTime() - (MAX_DURATION_MINUTES + buffer) * 60_000),
          lt: new Date(start.getTime() + (service.duration + buffer) * 60_000),
        },
        ...activeBookingWhere(),
      },
      select: { bookingTime: true, serviceName: true },
    })
    const free = !nearby.some((b) =>
      conflicts(start, service.duration, b.bookingTime, durationFor(b.serviceName), buffer)
    )
    if (free) {
      try {
        const booking = await prisma.booking.create({
          data: {
            id: bookingId,
            serviceName: service.name,
            price: service.price,
            bookingTime: start,
            customerEmail: email,
            status: "confirmed",
          },
        })
        await sendBookingEmails(booking)
        await addBookingEvent(booking, service.duration).catch((err) =>
          console.error("Could not add booking to Google Calendar:", bookingId, err)
        )
        console.log("Paid after the hold was released; booking re-created:", bookingId)
        return
      } catch (err) {
        if (!(err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002")) throw err
        // Someone took the time (or the id) a moment ago: fall through to the refund.
      }
    }
  }

  const paymentIntent =
    typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id
  if (!paymentIntent) {
    console.error("Paid checkout for a missing booking, and no payment intent to refund:", session.id)
    return
  }
  // The idempotency key means a retried webhook can never refund twice.
  await stripe.refunds.create({ payment_intent: paymentIntent }, { idempotencyKey: `rih-auto-refund-${session.id}` })
  await sendAutoRefundEmails({
    serviceName: service?.name ?? "your session",
    bookingTime: start && !isNaN(start.getTime()) ? start : null,
    price: service?.price ?? (session.amount_total ?? 0) / 100,
    customerEmail: email,
  })
  console.warn("Paid checkout for a time that was no longer available; refunded:", session.id)
}

/* Stripe webhook: confirms paid bookings (and emails both sides), releases expired holds,
   and frees the time slot when a payment is fully refunded. */
export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const body = await req.text()
  const sig = (await headers()).get("stripe-signature")

  if (!sig) return new NextResponse("Missing Stripe signature", { status: 400 })

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Webhook signature verification failed:", message)
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = Number(session.metadata?.bookingId)
    if (session.payment_status === "paid" && bookingId) {
      const email = session.customer_details?.email ?? session.customer_email ?? null

      // Only the first delivery of this event flips pending → confirmed, so a retried
      // webhook never sends the emails twice.
      const { count } = await prisma.booking.updateMany({
        where: { id: bookingId, status: "pending" },
        data: { status: "confirmed", expiresAt: null, ...(email ? { customerEmail: email } : {}) },
      })

      if (count === 1) {
        const booking = await prisma.booking.findUnique({ where: { id: bookingId } })
        if (booking) {
          await sendBookingEmails(booking)
          // Put the appointment on Caitlin's Office Hours calendar. Never fail the webhook over it.
          await addBookingEvent(booking, durationFor(booking.serviceName)).catch((err) =>
            console.error("Could not add booking to Google Calendar:", bookingId, err)
          )
        }
        console.log("Booking confirmed:", bookingId)
      } else {
        // Already confirmed = a retried delivery; nothing to do. Missing = the hold was released
        // before payment finished (cancelled or expired): rebook it if the time is still free,
        // otherwise refund automatically and tell both sides.
        const existing = await prisma.booking.findUnique({ where: { id: bookingId } })
        if (!existing) await recoverPaidBooking(stripe, session, bookingId, email)
      }
    }
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = Number(session.metadata?.bookingId)
    if (bookingId) {
      // Only remove it if it is still an unpaid hold.
      await prisma.booking.deleteMany({ where: { id: bookingId, status: "pending" } })
    }
  }

  if (event.type === "charge.refunded") {
    const charge = event.data.object as Stripe.Charge
    // Only a full refund cancels the appointment; a partial refund (e.g. a discount) keeps it.
    const paymentIntent =
      typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id
    if (charge.refunded && paymentIntent) {
      const sessions = await stripe.checkout.sessions.list({ payment_intent: paymentIntent, limit: 1 })
      const bookingId = Number(sessions.data[0]?.metadata?.bookingId)
      if (bookingId) {
        // Delete rather than mark cancelled: bookingTime is unique, so a leftover row would
        // keep the slot blocked. Stripe keeps the payment and refund history.
        const booking = await prisma.booking.findUnique({ where: { id: bookingId } })
        if (booking) {
          await removeBookingEvent(booking).catch((err) =>
            console.error("Could not remove refunded booking from Google Calendar:", bookingId, err)
          )
        }
        const { count } = await prisma.booking.deleteMany({ where: { id: bookingId } })
        console.log(count ? "Booking refunded and removed:" : "Refund for already-removed booking:", bookingId)
        // Only the delivery that actually removed the booking emails, so retries never send twice.
        // (Automatic refunds have no booking left at this point, so they don't send this email.)
        if (count === 1 && booking?.status === "confirmed") {
          await sendCancellationEmails(booking, charge.amount_refunded / 100)
        }
      } else {
        console.error("Refund with no matching booking:", charge.id)
      }
    }
  }

  return NextResponse.json({ received: true })
}
