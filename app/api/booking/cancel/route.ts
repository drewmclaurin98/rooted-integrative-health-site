import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { bookingId } = await req.json()

    if (!bookingId) {
      return NextResponse.json({ error: "Missing bookingId" }, { status: 400 })
    }

    const booking = await prisma.booking.findUnique({
      where: { id: Number(bookingId) },
    })

    if (!booking || booking.status !== "pending") {
      return NextResponse.json({ error: "Booking not found or already confirmed" }, { status: 404 })
    }

    await prisma.booking.delete({
      where: { id: Number(bookingId) },
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Cancel booking error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
