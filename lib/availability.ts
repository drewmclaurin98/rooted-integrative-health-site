// lib/availability.ts
import { hourInTimezone } from "./timezone"
import { PRACTITIONER_TIMEZONE } from "./config"

export function getAvailableSlots(
  dateStr: string,
  startHour = 9,
  endHour = 17,
  durationMinutes = 60
) {
  const slots: string[] = []

  // Compute UTC timestamps for business hours in the practitioner's timezone
  const startUTC = hourInTimezone(dateStr, startHour, 0, PRACTITIONER_TIMEZONE)
  const endUTC = hourInTimezone(dateStr, endHour, 0, PRACTITIONER_TIMEZONE)

  const durationMs = durationMinutes * 60_000
  let current = startUTC.getTime()

  while (current + durationMs <= endUTC.getTime()) {
    slots.push(new Date(current).toISOString())
    current += durationMs
  }

  return slots
}
