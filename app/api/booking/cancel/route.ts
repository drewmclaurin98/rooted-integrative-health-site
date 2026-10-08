import Stripe from "stripe"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { isValidCancelToken } from "@/lib/cancelToken"

/**
 * Called by /cancel when a client leaves Stripe Checkout via "back".
 * Closes the Stripe payment page FIRST (so it can't be paid later for a released time),
 * then releases the hold. If the session was already paid, the booking is kept.
 */
export async function POST(req: Request) {
  try {
    const { bookingId: rawId, token } = (await req.json()) ?? {}
    const bookingId = Number(rawId)
    if (!isValidCancelToken(bookingId, token)) {
      return NextResponse.json({ error: "Invalid cancel link" }, { status: 403 })
    }

    const booking = await prisma.booking.findUnique({ where: { id: bookingId } })
    if (!booking || booking.status !== "pending") {
      return NextResponse.json({ success: true, alreadyReleased: true })
    }

    // Find this hold's checkout session (recent, matched by metadata) and expire it.
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const sessions = await stripe.checkout.sessions.list({
      limit: 25,
      created: { gte: Math.floor(booking.createdAt.getTime() / 1000) - 120 },
    })
    for (const s of sessions.data.filter((s) => s.metadata?.bookingId === String(bookingId))) {
      if (s.status === "complete") {
        // Paid after all (e.g. paid in another tab): keep the booking; the webhook confirms it.
        return NextResponse.json({ success: false, paid: true })
      }
      if (s.status === "open") await stripe.checkout.sessions.expire(s.id)
    }

    await prisma.booking.deleteMany({ where: { id: bookingId, status: "pending" } })
    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error("Cancel booking error:", err)
    return NextResponse.json({ error: "Could not cancel the booking" }, { status: 500 })
  }
}
