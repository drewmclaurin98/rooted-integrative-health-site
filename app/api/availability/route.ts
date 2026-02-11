import { NextResponse } from "next/server"
import { getAvailableSlots } from "@/lib/availability"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const dateStr = searchParams.get("date")
  const duration = Number(searchParams.get("duration")) || 60

  if (!dateStr) {
    return NextResponse.json({ error: "Missing date parameter" }, { status: 400 })
  }

  const date = new Date(dateStr + "T00:00:00")
  if (isNaN(date.getTime())) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 })
  }

  const allSlots = getAvailableSlots(date, 9, 17, duration)

  // Query existing bookings for this date
  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)
  const endOfDay = new Date(date)
  endOfDay.setHours(23, 59, 59, 999)

  const existingBookings = await prisma.booking.findMany({
    where: {
      bookingTime: { gte: startOfDay, lte: endOfDay },
      status: { in: ["pending", "confirmed"] },
    },
    select: { bookingTime: true },
  })

  const bookedTimes = new Set(
    existingBookings.map((b) => b.bookingTime.toISOString())
  )

  const available = allSlots.filter((slot) => !bookedTimes.has(slot))

  return NextResponse.json({ slots: available })
}
