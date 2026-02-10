import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { BookingConfirmation } from "../../../../components/emails/BookingConfirmation"

/* Webhook to handle Stripe events */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const headerList = await headers()
  const sig = headerList.get("stripe-signature")

  if (!sig) {
    return new NextResponse("Missing Stripe signature", { status: 400 })
  }

  const event = stripe.webhooks.constructEvent(
    body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET!
  )

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    console.log("Payment confirmed:", session.id)
    // TODO: save booking, email, calendar
  }

  return NextResponse.json({ received: true })
}

/* Webhook to handle Resend email */

const resend = new Resend(process.env.RESEND_API_KEY!)

await resend.emails.send({
  from: process.env.FROM_EMAIL!,
  to: customerEmail,
  subject: "Your appointment is confirmed",
  react: BookingConfirmation({
    name,
    service,
    time,
  }),
})