/**
 * Minimal Google Calendar client for the "RIH Office Hours" calendar.
 *
 * Auth is a Google Cloud service account (not "Sign in with Google"): Caitlin shares the
 * calendar with the service account's email ("Make changes to events"), and the server signs
 * its own short-lived token. No extra npm packages; it uses Node's crypto and fetch.
 *
 * Env: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY (the PEM, "\n" escapes are fine),
 *      GOOGLE_CALENDAR_ID (Calendar settings → Integrate calendar → Calendar ID).
 */
import { createSign } from "node:crypto"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"

const SCOPE = "https://www.googleapis.com/auth/calendar.events"
const TOKEN_URL = "https://oauth2.googleapis.com/token"
const API = "https://www.googleapis.com/calendar/v3"

export type CalendarEvent = {
  id: string
  status?: string
  summary?: string
  start?: { date?: string; dateTime?: string }
  end?: { date?: string; dateTime?: string }
  extendedProperties?: { private?: Record<string, string> }
}

const env = () => ({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  calendarId: process.env.GOOGLE_CALENDAR_ID,
})

export const isCalendarConfigured = () => {
  const { email, key, calendarId } = env()
  return Boolean(email && key && calendarId)
}

// ---- Auth (service-account JWT → access token, cached until shortly before expiry) ----

let token: { value: string; expires: number } | null = null
const b64url = (s: string) => Buffer.from(s).toString("base64url")

async function accessToken(): Promise<string> {
  if (token && token.expires > Date.now() + 60_000) return token.value
  const { email, key } = env()
  const now = Math.floor(Date.now() / 1000)
  const unsigned =
    b64url(JSON.stringify({ alg: "RS256", typ: "JWT" })) +
    "." +
    b64url(JSON.stringify({ iss: email, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 }))
  const signature = createSign("RSA-SHA256").update(unsigned).sign(key!, "base64url")

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Google token request failed: ${res.status} ${await res.text()}`)
  const data = (await res.json()) as { access_token: string; expires_in: number }
  token = { value: data.access_token, expires: Date.now() + data.expires_in * 1000 }
  return token.value
}

async function calendarFetch(path: string, init: RequestInit = {}) {
  const calendarId = encodeURIComponent(env().calendarId!)
  return fetch(`${API}/calendars/${calendarId}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  })
}

// ---- Reading events (short in-memory cache so the booking page doesn't hit Google on every load) ----

const CACHE_MS = 60_000
const cache = new Map<string, { at: number; events: CalendarEvent[] }>()

export async function listCalendarEvents(
  from: Date,
  to: Date,
  { fresh = false }: { fresh?: boolean } = {}
): Promise<CalendarEvent[]> {
  const key = `${from.toISOString()}|${to.toISOString()}`
  const hit = cache.get(key)
  if (!fresh && hit && Date.now() - hit.at < CACHE_MS) return hit.events

  const events: CalendarEvent[] = []
  let pageToken: string | undefined
  do {
    const q = new URLSearchParams({
      timeMin: from.toISOString(),
      timeMax: to.toISOString(),
      singleEvents: "true", // expands recurring events into individual days
      orderBy: "startTime",
      maxResults: "250",
      fields: "nextPageToken,items(id,status,summary,start,end,extendedProperties)",
    })
    if (pageToken) q.set("pageToken", pageToken)
    const res = await calendarFetch(`/events?${q}`)
    if (!res.ok) throw new Error(`Google Calendar list failed: ${res.status} ${await res.text()}`)
    const data = (await res.json()) as { items?: CalendarEvent[]; nextPageToken?: string }
    events.push(...(data.items ?? []))
    pageToken = data.nextPageToken
  } while (pageToken)

  if (cache.size > 20) cache.clear()
  cache.set(key, { at: Date.now(), events })
  return events
}

// ---- Writing booked appointments back to the calendar ----

type BookingLike = {
  id: number
  bookingTime: Date
  serviceName: string
  customerEmail: string | null
}

/**
 * Deterministic Google event id for a booking (Google allows base32hex: 0-9 and a-v).
 * A retried webhook can't create a duplicate, and a refund can find the event without
 * storing anything extra in the database.
 */
export const bookingEventId = (b: Pick<BookingLike, "id" | "bookingTime">) =>
  `rihb${b.id}t${b.bookingTime.getTime().toString(32)}`

/** Adds a paid booking to the Office Hours calendar. Marked so it's never read as office hours. */
export async function addBookingEvent(b: BookingLike, durationMinutes: number): Promise<void> {
  if (!isCalendarConfigured()) return
  const end = new Date(b.bookingTime.getTime() + durationMinutes * 60_000)
  const res = await calendarFetch("/events", {
    method: "POST",
    body: JSON.stringify({
      id: bookingEventId(b),
      summary: `${b.serviceName}: ${b.customerEmail ?? "client"}`,
      description: [
        `Booked and paid on rootedintegrativehealth.com (booking #${b.id}).`,
        b.customerEmail ? `Client email: ${b.customerEmail}` : null,
        "To cancel, refund the payment in Stripe; the time reopens automatically.",
      ]
        .filter(Boolean)
        .join("\n"),
      start: { dateTime: b.bookingTime.toISOString(), timeZone: PRACTITIONER_TIMEZONE },
      end: { dateTime: end.toISOString(), timeZone: PRACTITIONER_TIMEZONE },
      colorId: "2", // sage green, so client appointments stand out from office-hours blocks
      extendedProperties: { private: { rihBookingId: String(b.id) } },
    }),
  })
  if (res.status === 409) return // already on the calendar (webhook retry)
  if (!res.ok) throw new Error(`Google Calendar insert failed: ${res.status} ${await res.text()}`)
  cache.clear()
}

/** Removes a booking's event (e.g. after a full refund). Missing events are fine. */
export async function removeBookingEvent(b: Pick<BookingLike, "id" | "bookingTime">): Promise<void> {
  if (!isCalendarConfigured()) return
  const res = await calendarFetch(`/events/${bookingEventId(b)}`, { method: "DELETE" })
  if (!res.ok && res.status !== 404 && res.status !== 410)
    throw new Error(`Google Calendar delete failed: ${res.status} ${await res.text()}`)
  cache.clear()
}
