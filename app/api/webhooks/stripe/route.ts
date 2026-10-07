import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendBookingEmails } from "@/lib/emails"

/* Stripe webhook: confirms paid bookings (and emails both sides) and releases expired holds. */
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
        if (booking) await sendBookingEmails(booking)
        console.log("Booking confirmed:", bookingId)
      } else {
        // Paid, but the hold was already gone (e.g. it expired). Needs a manual look / refund.
        const existing = await prisma.booking.findUnique({ where: { id: bookingId } })
        if (!existing) console.error("Paid checkout for a missing booking — refund or rebook manually:", session.id)
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

  return NextResponse.json({ received: true })
}
