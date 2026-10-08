/**
 * Caitlin's booking schedule (Option A: the "RIH Office Hours" Google Calendar).
 *
 * The booking page is CLOSED by default. Clients can only book start times that fit
 * entirely inside an event on that calendar:
 *   - a timed event (e.g. Thu 9:00–3:00) opens exactly those hours;
 *   - an all-day event opens SCHEDULE.allDayStartHour–allDayEndHour;
 *   - no event that day means nothing is bookable.
 * Paid bookings are written back to the same calendar (marked with a private property,
 * so they're never mistaken for office hours).
 */
import { prisma } from "@/lib/prisma"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"
import { hourInTimezone, midnightInTimezone } from "@/lib/timezone"
import { isCalendarConfigured, listCalendarEvents, type CalendarEvent } from "@/lib/googleCalendar"
import { MAX_DURATION_MINUTES, activeBookingWhere, conflicts, durationFor, localDateString } from "@/lib/booking"

/** Caitlin's settings. Change these here; they apply to the booking page and checkout. */
export const SCHEDULE = {
  /** Room reset time kept free between clients. */
  bufferMinutes: 15,
  /** Clients can't book sooner than this. */
  minNoticeHours: 24,
  /** How far ahead the calendar is read (clients still only see days she's added). */
  horizonDays: 90,
  /** Hours used when she adds an all-day event. */
  allDayStartHour: 9,
  allDayEndHour: 17,
}

export class ScheduleUnavailableError extends Error {}

type Window = { start: Date; end: Date }
export type DaySlots = { date: string; slots: string[] }

const MINUTE = 60_000

const addDays = (dateStr: string, n: number) => {
  const [y, m, d] = dateStr.split("-").map(Number)
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10)
}

/** Turns calendar events into merged office-hours windows (booked appointments are skipped). */
export function officeWindows(events: CalendarEvent[]): Window[] {
  const raw: Window[] = []
  for (const e of events) {
    if (e.status === "cancelled" || e.extendedProperties?.private?.rihBookingId) continue
    if (e.start?.dateTime && e.end?.dateTime) {
      raw.push({ start: new Date(e.start.dateTime), end: new Date(e.end.dateTime) })
    } else if (e.start?.date && e.end?.date) {
      // All-day events: the end date is exclusive.
      for (let d = e.start.date; d < e.end.date; d = addDays(d, 1)) {
        raw.push({
          start: hourInTimezone(d, SCHEDULE.allDayStartHour, 0, PRACTITIONER_TIMEZONE),
          end: hourInTimezone(d, SCHEDULE.allDayEndHour, 0, PRACTITIONER_TIMEZONE),
        })
      }
    }
  }
  raw.sort((a, b) => a.start.getTime() - b.start.getTime())
  const merged: Window[] = []
  for (const w of raw) {
    const last = merged[merged.length - 1]
    if (last && w.start <= last.end) {
      if (w.end > last.end) last.end = w.end
    } else merged.push({ ...w })
  }
  return merged
}

/** Local development without Google credentials: weekdays 9–5 so the flow can be tested. */
function devWindows(fromDate: string, days: number): Window[] {
  const out: Window[] = []
  for (let i = 0; i < days; i++) {
    const d = addDays(fromDate, i)
    const weekday = new Date(d + "T12:00:00Z").getUTCDay()
    if (weekday === 0 || weekday === 6) continue
    out.push({
      start: hourInTimezone(d, 9, 0, PRACTITIONER_TIMEZONE),
      end: hourInTimezone(d, 17, 0, PRACTITIONER_TIMEZONE),
    })
  }
  return out
}

async function loadWindows(fresh: boolean): Promise<Window[]> {
  // Read from local midnight today so the cache key is stable for the whole day.
  const today = localDateString(new Date())
  const from = midnightInTimezone(today, PRACTITIONER_TIMEZONE)
  const to = midnightInTimezone(addDays(today, SCHEDULE.horizonDays), PRACTITIONER_TIMEZONE)

  if (!isCalendarConfigured()) {
    if (process.env.NODE_ENV !== "production") return devWindows(today, SCHEDULE.horizonDays)
    console.error("Booking schedule: Google Calendar env vars are missing; booking is closed.")
    throw new ScheduleUnavailableError("Online booking isn't set up yet.")
  }
  try {
    return officeWindows(await listCalendarEvents(from, to, { fresh }))
  } catch (err) {
    console.error("Booking schedule: could not read the Office Hours calendar:", err)
    throw new ScheduleUnavailableError("Online booking is temporarily unavailable.")
  }
}

type Busy = { start: Date; minutes: number }

/**
 * Bookable start times, packed back to back: the first starts when office hours open, and each
 * next one starts after the session plus the room-reset buffer. When an existing booking is in the
 * way, the chain restarts right after it (its end + buffer), so no unusable gaps are left.
 * E.g. 9:00–3:00 with a 15-min buffer: Initial (60) → 9:00, 10:15, 11:30, 12:45;
 * Follow-up (45) → 9:00, 10:00, 11:00, 12:00, 1:00, 2:00.
 */
export function slotsFor(windows: Window[], busy: Busy[], duration: number, now = new Date()): DaySlots[] {
  const earliest = now.getTime() + SCHEDULE.minNoticeHours * 60 * MINUTE
  const dur = duration * MINUTE
  const buf = SCHEDULE.bufferMinutes * MINUTE
  const byDate = new Map<string, string[]>()

  for (const w of windows) {
    let t = w.start.getTime()
    while (t + dur <= w.end.getTime()) {
      const start = new Date(t)
      const clash = busy.find((b) => conflicts(start, duration, b.start, b.minutes, SCHEDULE.bufferMinutes))
      if (clash) {
        t = Math.max(t + MINUTE, clash.start.getTime() + clash.minutes * MINUTE + buf)
        continue
      }
      if (t >= earliest) {
        const date = localDateString(start)
        if (!byDate.has(date)) byDate.set(date, [])
        byDate.get(date)!.push(start.toISOString())
      }
      t += dur + buf
    }
  }
  return [...byDate].map(([date, slots]) => ({ date, slots }))
}

/** Open start times for a service length, grouped by local date (soonest first). */
export async function getOpenSlots(duration: number, { fresh = false } = {}): Promise<DaySlots[]> {
  const windows = await loadWindows(fresh)
  if (windows.length === 0) return []

  const pad = (MAX_DURATION_MINUTES + SCHEDULE.bufferMinutes) * MINUTE
  const bookings = await prisma.booking.findMany({
    where: {
      bookingTime: {
        gte: new Date(windows[0].start.getTime() - pad),
        lt: new Date(windows[windows.length - 1].end.getTime() + pad),
      },
      ...activeBookingWhere(),
    },
    select: { bookingTime: true, serviceName: true },
  })
  const busy = bookings.map((b) => ({ start: b.bookingTime, minutes: durationFor(b.serviceName) }))
  return slotsFor(windows, busy, duration)
}

/** Checkout's server-side check: re-reads the calendar (no cache) so a just-deleted day can't be booked. */
export async function isBookableStart(start: Date, duration: number): Promise<boolean> {
  const days = await getOpenSlots(duration, { fresh: true })
  const iso = start.toISOString()
  return days.some((d) => d.slots.includes(iso))
}
