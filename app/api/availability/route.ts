import { NextResponse } from "next/server"
import { MAX_DURATION_MINUTES } from "@/lib/booking"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"
import { ScheduleUnavailableError, getOpenSlots } from "@/lib/schedule"
import { services } from "@/content/services"

export const dynamic = "force-dynamic"

/**
 * GET /api/availability?duration=60
 * Every open start time for that service length, grouped by date, read from Caitlin's
 * "RIH Office Hours" calendar (see lib/schedule.ts). Days without office hours are absent.
 */
export async function GET(req: Request) {
  const requested = Number(new URL(req.url).searchParams.get("duration"))
  // Only durations of real services are allowed (the browser can't ask for odd lengths).
  const duration = services.some((s) => s.duration === requested) ? requested : MAX_DURATION_MINUTES

  try {
    const days = await getOpenSlots(duration)
    return NextResponse.json({ days, timeZone: PRACTITIONER_TIMEZONE })
  } catch (err) {
    if (err instanceof ScheduleUnavailableError) {
      return NextResponse.json({ error: err.message, days: [] }, { status: 503 })
    }
    console.error("Availability error:", err)
    return NextResponse.json({ error: "Couldn't load available times.", days: [] }, { status: 500 })
  }
}
