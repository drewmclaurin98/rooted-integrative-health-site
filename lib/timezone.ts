/**
 * Returns the UTC offset (in minutes) for a given timezone at a specific UTC timestamp.
 * Uses Intl.DateTimeFormat to get the correct offset including DST.
 */
function getTimezoneOffsetMinutes(timeZone: string, utcDate: Date): number {
  // Format the date in the target timezone to extract its components
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })

  const parts = formatter.formatToParts(utcDate)
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0)

  // Build a Date using the timezone's local components (interpreted as UTC)
  const tzTime = Date.UTC(
    get("year"),
    get("month") - 1,
    get("day"),
    get("hour") === 24 ? 0 : get("hour"),
    get("minute"),
    get("second")
  )

  // The difference between the "local-as-UTC" timestamp and the real UTC timestamp
  // gives us the offset
  return (tzTime - utcDate.getTime()) / 60_000
}

/**
 * Returns a UTC Date representing midnight of the given date string in the specified timezone.
 * @param dateStr - "YYYY-MM-DD" format
 * @param timeZone - IANA timezone string (e.g., "America/Chicago")
 */
export function midnightInTimezone(dateStr: string, timeZone: string): Date {
  // Start with a rough UTC guess: midnight UTC on that date
  const rough = new Date(dateStr + "T00:00:00Z")

  // Get the timezone's offset at that moment
  const offsetMin = getTimezoneOffsetMinutes(timeZone, rough)

  // Midnight in the target timezone = midnight UTC minus the offset
  return new Date(rough.getTime() - offsetMin * 60_000)
}

/**
 * Returns a UTC Date representing a specific hour:minute of the given date in the specified timezone.
 * Handles DST transitions correctly.
 * @param dateStr - "YYYY-MM-DD" format
 * @param hour - Hour in 24h format (0-23)
 * @param minute - Minute (0-59)
 * @param timeZone - IANA timezone string (e.g., "America/Chicago")
 */
export function hourInTimezone(
  dateStr: string,
  hour: number,
  minute: number,
  timeZone: string
): Date {
  // Start with a rough UTC guess
  const rough = new Date(dateStr + `T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00Z`)

  // Get the offset at that rough time
  const offsetMin = getTimezoneOffsetMinutes(timeZone, rough)

  // The desired local time in UTC = rough UTC minus the offset
  const adjusted = new Date(rough.getTime() - offsetMin * 60_000)

  // Re-check offset at the adjusted time (handles DST edge cases)
  const offsetMin2 = getTimezoneOffsetMinutes(timeZone, adjusted)
  if (offsetMin !== offsetMin2) {
    return new Date(rough.getTime() - offsetMin2 * 60_000)
  }

  return adjusted
}
