import { prisma } from "@/lib/prisma"
import Stripe from "stripe"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const body = await req.json()
    const { serviceName, price, bookingTime, customerEmail } = body

    if (!serviceName || !price || !bookingTime)
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 })

    if (isNaN(new Date(bookingTime).getTime()))
      return NextResponse.json({ error: "Invalid booking time" }, { status: 400 })

    // Check if slot already booked
    const existing = await prisma.booking.findFirst({
      where: { bookingTime: new Date(bookingTime), serviceName, status: "confirmed" },
    })
    if (existing) return NextResponse.json({ error: "Slot already booked" }, { status: 400 })

    // Create pending booking
    const booking = await prisma.booking.create({
      data: { serviceName, price, bookingTime: new Date(bookingTime), customerEmail },
    })

    // Stripe checkout
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ url: "https://checkout.stripe.com/mock_session" })
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: customerEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: serviceName },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      metadata: { bookingId: String(booking.id) },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error("Checkout error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
