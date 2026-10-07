/**
 * Booking rules shared by /api/availability, /api/checkout and the Stripe webhook.
 * Services, prices and durations always come from content/services.ts on the server,
 * never from the browser.
 */
import { services, type Service } from "@/content/services"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"
import { getAvailableSlots } from "@/lib/availability"

/** Business hours used to generate bookable start times (practitioner's local time). */
export const OPEN_HOUR = 9
export const CLOSE_HOUR = 17

/** How long an unpaid checkout holds a time slot (Stripe's minimum session expiry is 30 min). */
export const HOLD_MINUTES = 30

/** Longest service, used to widen overlap queries so a booking that started earlier is still caught. */
export const MAX_DURATION_MINUTES = Math.max(...services.map((s) => s.duration))

export const getServiceByName = (name: string): Service | undefined =>
  services.find((s) => s.name === name)

/** Duration of a stored booking, looked up by its service name (falls back to the longest service). */
export const durationFor = (serviceName: string): number =>
  getServiceByName(serviceName)?.duration ?? MAX_DURATION_MINUTES

/** True when [startA, startA+durA) and [startB, startB+durB) overlap. */
export function overlaps(startA: Date, durA: number, startB: Date, durB: number): boolean {
  const a0 = startA.getTime()
  const a1 = a0 + durA * 60_000
  const b0 = startB.getTime()
  const b1 = b0 + durB * 60_000
  return a0 < b1 && b0 < a1
}

/** Prisma `where` for bookings that currently block a time: confirmed, or pending and not yet expired. */
export const activeBookingWhere = () => ({
  OR: [{ status: "confirmed" }, { status: "pending", expiresAt: { gt: new Date() } }],
})

/** "YYYY-MM-DD" of a UTC instant in the practitioner's time zone. */
export function localDateString(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PRACTITIONER_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}

/** True when `start` is one of the bookable start times for this service on its day. */
export function isValidStartTime(start: Date, service: Service): boolean {
  const slots = getAvailableSlots(localDateString(start), OPEN_HOUR, CLOSE_HOUR, service.duration)
  return slots.includes(start.toISOString())
}

/** Formats a booking time for people, in the practitioner's time zone. */
export function formatBookingTime(date: Date): string {
  return date.toLocaleString("en-US", {
    timeZone: PRACTITIONER_TIMEZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  })
}
