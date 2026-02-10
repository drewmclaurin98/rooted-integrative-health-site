"use client"

import { useState } from "react"
import { BookingService } from "./bookingWidget"

type ServiceSelectorProps = {
  services: BookingService[]
  selectedService: BookingService | null
  onSelect: (service: BookingService) => void
}

export function ServiceSelector({
  services,
  selectedService,
  onSelect,
}: ServiceSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-lg font-medium">Select a service:</label>
      <div className="flex flex-col gap-2">
        {services.map((service) => (
          <button
            key={service.name}
            className={[
              "px-4 py-2 rounded-lg border transition",
              selectedService?.name === service.name
                ? "bg-emerald-600 text-white border-emerald-700"
                : "bg-white border-slate-300 hover:bg-emerald-50",
            ].join(" ")}
            onClick={() => onSelect(service)}
          >
            {service.name} — ${service.price} ({service.duration} min)
          </button>
        ))}
      </div>
    </div>
  )
}
