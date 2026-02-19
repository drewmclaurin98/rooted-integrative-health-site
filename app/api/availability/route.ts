import { NextResponse } from "next/server"
import { getAvailableSlots } from "@/lib/availability"
import { prisma } from "@/lib/prisma"
import { midnightInTimezone } from "@/lib/timezone"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const dateStr = searchParams.get("date")
  const duration = Number(searchParams.get("duration")) || 60

  if (!dateStr) {
    return NextResponse.json({ error: "Missing date parameter" }, { status: 400 })
  }

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 })
  }

  const allSlots = getAvailableSlots(dateStr, 9, 17, duration)

  // Compute day boundaries in the practitioner's timezone
  const startOfDay = midnightInTimezone(dateStr, PRACTITIONER_TIMEZONE)

  // End of day = next day's midnight
  const [year, month, day] = dateStr.split("-").map(Number)
  const nextDay = new Date(Date.UTC(year, month - 1, day + 1))
  const nextDayStr = nextDay.toISOString().split("T")[0]
  const endOfDay = midnightInTimezone(nextDayStr, PRACTITIONER_TIMEZONE)

  const existingBookings = await prisma.booking.findMany({
    where: {
      bookingTime: { gte: startOfDay, lt: endOfDay },
      OR: [
        { status: "confirmed" },
        { status: "pending", expiresAt: { gt: new Date() } },
      ],
    },
    select: { bookingTime: true },
  })

  const bookedTimes = new Set(
    existingBookings.map((b) => b.bookingTime.toISOString())
  )

  const now = new Date().toISOString()
  const available = allSlots
    .filter((slot) => !bookedTimes.has(slot))
    .filter((slot) => slot > now)

  return NextResponse.json({ slots: available })
}
