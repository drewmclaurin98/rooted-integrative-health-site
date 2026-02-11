import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/* Webhook to handle Stripe events */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const headerList = await headers()
  const sig = headerList.get("stripe-signature")

  if (!sig) {
    return new NextResponse("Missing Stripe signature", { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Webhook signature verification failed:", message)
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = session.metadata?.bookingId

    if (bookingId) {
      await prisma.booking.update({
        where: { id: Number(bookingId) },
        data: { status: "confirmed" },
      })
    }

    console.log("Payment confirmed:", session.id)
  }

  return NextResponse.json({ received: true })
}

/* Webhook to handle Resend email */

// const resend = new Resend(process.env.RESEND_API_KEY!)

// await resend.emails.send({
//   from: process.env.FROM_EMAIL!,
//   to: customerEmail,
//   subject: "Your appointment is confirmed",
//   react: BookingConfirmation({
//     name,
//     service,
//     time,
//   }),
// })