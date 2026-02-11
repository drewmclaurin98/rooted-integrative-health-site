import { useState, useEffect } from "react"
import { BookingService } from "./bookingWidget"

type Props = {
  service: BookingService
  selectedTime: string | null
  onSelect: (time: string) => void
  mockBookedSlots?: string[]
}

export function TimeSlotPicker({ service, selectedTime, onSelect, mockBookedSlots }: Props) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([])

  useEffect(() => {
    const slots = Array.from({ length: 8 }, (_, i) => `${9 + i}:00`) // 9AM–5PM
    const booked = mockBookedSlots || []
    setAvailableSlots(slots.filter((s) => !booked.includes(s)))
  }, [service, mockBookedSlots])

  return (
    <div className="space-y-2">
      <label className="text-lg font-medium">Select a time:</label>
      <div className="flex flex-wrap gap-2">
        {availableSlots.map((slot) => (
          <button
            key={slot}
            className={`px-3 py-1 border rounded ${
              selectedTime === slot
                ? "bg-emerald-600 text-white"
                : "bg-white border-slate-300 hover:bg-emerald-50"
            }`}
            onClick={() => onSelect(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  )
}
