"use client"

import { useEffect, useState } from "react"
import { getAvailableSlots } from "../../lib/availability"

type TimeSlotPickerProps = {
  duration: number // minutes
  onSelect: (isoTime: string) => void
}

export function TimeSlotPicker({
  duration,
  onSelect,
}: TimeSlotPickerProps) {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return today
  })

  const [slots, setSlots] = useState<string[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  useEffect(() => {
    const available = getAvailableSlots(
      selectedDate,
      9,   // start hour
      18,  // end hour
      duration
    )

    setSlots(available)
    setSelectedSlot(null)
  }, [selectedDate, duration])

  function handleSelect(slot: string) {
    setSelectedSlot(slot)
    onSelect(slot)
  }

  return (
    <div className="space-y-4">
      {/* Date picker */}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Select a date
        </label>
        <input
          type="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => {
            const date = new Date(e.target.value)
            date.setHours(0, 0, 0, 0)
            setSelectedDate(date)
          }}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
        />
      </div>

      {/* Time slots */}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">
          Available times
        </p>

        {slots.length === 0 ? (
          <p className="text-sm text-slate-500">
            No availability for this date.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => {
              const isSelected = slot === selectedSlot

              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleSelect(slot)}
                  className={[
                    "rounded-lg border px-3 py-2 text-sm transition",
                    isSelected
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-emerald-500",
                  ].join(" ")}
                >
                  {new Date(slot).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
