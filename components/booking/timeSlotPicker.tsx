"use client"

import { useEffect, useState } from "react"
import { BookingService } from "./bookingWidget"
import { PRACTITIONER_TIMEZONE } from "@/lib/config"
import { site } from "@/content/site"

type Props = {
  service: BookingService
  selectedTime: string | null
  onSelect: (time: string) => void
  mockBookedSlots?: string[]
}

type DaySlots = { date: string; slots: string[] }

// Times are always shown in the practice's time zone (the appointment is in person in St. Paul).
const timeFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: PRACTITIONER_TIMEZONE,
  hour: "numeric",
  minute: "2-digit",
})
const tzLabel =
  new Intl.DateTimeFormat("en-US", { timeZone: PRACTITIONER_TIMEZONE, timeZoneName: "short" })
    .formatToParts(new Date())
    .find((p) => p.type === "timeZoneName")?.value ?? "Central"

/** "2026-10-16" → { weekday: "Thu", label: "Oct 16" } (a calendar date, so format it in UTC). */
function dayLabel(date: string) {
  const d = new Date(date + "T12:00:00Z")
  return {
    weekday: d.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }),
    label: d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" }),
  }
}

// "(206) 715-8708" → "206-715-8708" for display, "2067158708" for the tel: link.
const phoneDigits = site.contact.phone.replace(/\D/g, "")
const phoneDisplay = phoneDigits.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3")

function mockDays(booked: string[]): DaySlots[] {
  const today = new Date().toISOString().slice(0, 10)
  return [{ date: today, slots: Array.from({ length: 8 }, (_, i) => `${9 + i}:00`).filter((s) => !booked.includes(s)) }]
}

export function TimeSlotPicker({ service, selectedTime, onSelect, mockBookedSlots }: Props) {
  // Results are keyed by service length, so switching services shows "Loading…" until its times arrive.
  const key = mockBookedSlots ? "mock" : String(service.duration)
  const [result, setResult] = useState<{ key: string; days: DaySlots[]; error: string | null } | null>(null)
  const [picked, setPicked] = useState<{ key: string; date: string } | null>(null)

  useEffect(() => {
    if (mockBookedSlots) return
    let cancelled = false
    fetch(`/api/availability?duration=${service.duration}`, { cache: "no-store" })
      .then(async (res) => {
        const data = await res.json()
        if (!cancelled)
          setResult({ key, days: data.days || [], error: res.ok ? null : data.error || "Couldn't load available times." })
      })
      .catch(() => {
        if (!cancelled) setResult({ key, days: [], error: "Couldn't load available times." })
      })
    return () => {
      cancelled = true
    }
  }, [key, service.duration, mockBookedSlots])

  const current = mockBookedSlots
    ? { days: mockDays(mockBookedSlots), error: null }
    : result?.key === key
      ? result
      : null
  const loading = current === null
  const error = current?.error ?? null
  const days = current?.days ?? []
  const selectedDate =
    picked?.key === key && days.some((d) => d.date === picked.date) ? picked.date : (days[0]?.date ?? null)
  const setSelectedDate = (date: string) => setPicked({ key, date })

  const contactLine = (
    <>
      Questions? Email{" "}
      <a className="text-primary underline" href={`mailto:${site.contact.email}`}>
        {site.contact.email}
      </a>
      , Call:{" "}
      <a className="text-primary underline whitespace-nowrap" href={`tel:+1${phoneDigits}`}>
        {phoneDisplay}
      </a>
      .
    </>
  )

  if (loading) return <p className="text-sm text-gray-600">Loading available times…</p>

  if (error)
    return (
      <div className="rounded-lg border border-border bg-gray-50 p-4 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">{error}</p>
        <p className="mt-1">Please try again in a few minutes. {contactLine}</p>
      </div>
    )

  if (days.length === 0)
    return (
      <div className="rounded-lg border border-border bg-gray-50 p-4 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">No open appointments right now.</p>
        <p className="mt-1">New dates are added each month, so please check back soon. {contactLine}</p>
      </div>
    )

  const slots = days.find((d) => d.date === selectedDate)?.slots ?? []

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 block text-sm font-medium text-gray-700">Available days:</p>
        <div className="flex flex-wrap gap-2">
          {days.map(({ date }) => {
            const { weekday, label } = dayLabel(date)
            const active = date === selectedDate
            return (
              <button
                key={date}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelectedDate(date)
                  onSelect("") // reset time when the day changes
                }}
                className={`flex min-w-[4.5rem] flex-col items-center rounded-lg border px-3 py-2 text-sm transition-colors ${
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-gray-800 hover:bg-gradient-primary-start"
                }`}
              >
                <span className={`text-xs font-semibold uppercase tracking-wide ${active ? "text-white/80" : "text-gray-500"}`}>
                  {weekday}
                </span>
                <span className="font-semibold">{label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {selectedDate && (
        <div>
          <p className="mb-2 block text-sm font-medium text-gray-700">Available times ({tzLabel}):</p>
          <div className="flex flex-wrap gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                aria-pressed={selectedTime === slot}
                onClick={() => onSelect(slot)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  selectedTime === slot
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-gray-800 hover:bg-gradient-primary-start"
                }`}
              >
                {mockBookedSlots ? slot : timeFmt.format(new Date(slot))}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
