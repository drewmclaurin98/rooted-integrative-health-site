import { useState, useEffect } from "react"
import { BookingService } from "./bookingWidget"

type Props = {
  service: BookingService
  selectedTime: string | null
  onSelect: (time: string) => void
  mockBookedSlots?: string[]
}

function formatTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
}

function todayString(): string {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function getTimezoneAbbr(): string {
  return new Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
    .formatToParts(new Date())
    .find((p) => p.type === "timeZoneName")?.value || ""
}

export function TimeSlotPicker({ service, selectedTime, onSelect, mockBookedSlots }: Props) {
  const [selectedDate, setSelectedDate] = useState("")
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const tzAbbr = getTimezoneAbbr()

  useEffect(() => {
    if (mockBookedSlots) {
      // Storybook / test mode: generate mock slots
      const slots = Array.from({ length: 8 }, (_, i) => `${9 + i}:00`)
      setAvailableSlots(slots.filter((s) => !mockBookedSlots.includes(s)))
      return
    }

    if (!selectedDate) {
      setAvailableSlots([])
      return
    }

    setLoading(true)
    fetch(`/api/availability?date=${selectedDate}&duration=${service.duration}`)
      .then((res) => res.json())
      .then((data) => setAvailableSlots(data.slots || []))
      .catch(() => setAvailableSlots([]))
      .finally(() => setLoading(false))
  }, [selectedDate, service, mockBookedSlots])

  return (
    <div className="space-y-3">
      {!mockBookedSlots && (
        <div>
          <label className="block text-sm font-medium text-[#5F6160] mb-1">Select a date:</label>
          <input
            type="date"
            min={todayString()}
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value)
              onSelect("") // reset time when date changes
            }}
            className="border border-border rounded-lg px-3 py-2 w-full focus:border-border-focus focus:outline-none"
          />
        </div>
      )}

      {(selectedDate || mockBookedSlots) && (
        <div>
          <label className="block text-sm font-medium text-[#5F6160] mb-1">Select a time ({tzAbbr}):</label>
          {loading ? (
            <p className="text-background-muted text-sm">Loading available times...</p>
          ) : availableSlots.length === 0 ? (
            <p className="text-background-muted text-sm">No available times for this date.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  className={`px-3 py-1 border rounded ${
                    selectedTime === slot
                      ? "bg-primary text-white"
                      : "bg-white border-border hover:bg-gradient-primary-start"
                  }`}
                  onClick={() => onSelect(slot)}
                >
                  {mockBookedSlots ? slot : formatTime(slot)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
