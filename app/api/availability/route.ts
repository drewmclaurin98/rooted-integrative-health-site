import { NextResponse } from "next/server"
import { getAvailableSlots } from "@/lib/availability"
import { prisma } from "@/lib/prisma"
import { midnightInTimezone } from "@/lib/timezone"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"
import {
  CLOSE_HOUR,
  MAX_DURATION_MINUTES,
  OPEN_HOUR,
  activeBookingWhere,
  durationFor,
  overlaps,
} from "@/lib/booking"
import { services } from "@/content/services"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const dateStr = searchParams.get("date")
  const requested = Number(searchParams.get("duration"))
  // Only durations of real services are allowed (the browser can't ask for odd lengths).
  const duration = services.some((s) => s.duration === requested) ? requested : MAX_DURATION_MINUTES

  if (!dateStr) {
    return NextResponse.json({ error: "Missing date parameter" }, { status: 400 })
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 })
  }

  const allSlots = getAvailableSlots(dateStr, OPEN_HOUR, CLOSE_HOUR, duration)

  // Day boundaries in the practitioner's time zone, widened by the longest service so a
  // booking that starts just before midnight (or earlier the same day) is still considered.
  const startOfDay = midnightInTimezone(dateStr, PRACTITIONER_TIMEZONE)
  const [year, month, day] = dateStr.split("-").map(Number)
  const nextDayStr = new Date(Date.UTC(year, month - 1, day + 1)).toISOString().split("T")[0]
  const endOfDay = midnightInTimezone(nextDayStr, PRACTITIONER_TIMEZONE)

  const existing = await prisma.booking.findMany({
    where: {
      bookingTime: {
        gte: new Date(startOfDay.getTime() - MAX_DURATION_MINUTES * 60_000),
        lt: endOfDay,
      },
      ...activeBookingWhere(),
    },
    select: { bookingTime: true, serviceName: true },
  })

  const now = Date.now()
  // A slot is free only if it doesn't overlap ANY active booking, whatever the service.
  const available = allSlots.filter((slot) => {
    const start = new Date(slot)
    if (start.getTime() <= now) return false
    return !existing.some((b) => overlaps(start, duration, b.bookingTime, durationFor(b.serviceName)))
  })

  return NextResponse.json({ slots: available })
}
