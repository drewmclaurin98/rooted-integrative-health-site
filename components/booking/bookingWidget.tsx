"use client"

import { useState } from "react"
import { TimeSlotPicker } from "./timeSlotPicker"
import { BookButton } from "./bookingButton"

export type BookingService = {
  name: string
  price: number
  duration: number // minutes
}

type BookingWidgetProps = {
  service: BookingService
}

export function BookingWidget({ service }: BookingWidgetProps) {
  const [time, setTime] = useState<string | null>(null)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          {service.name}
        </h2>
        <p className="text-slate-600">
          {service.duration} minutes · ${service.price}
        </p>
      </div>

      <TimeSlotPicker
        duration={service.duration}
        onSelect={setTime}
      />

      <BookButton
        service={service}
        time={time}
        disabled={!time}
      />
    </div>
  )
}
