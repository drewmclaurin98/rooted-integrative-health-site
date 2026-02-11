"use client"

import { useState } from "react"
import { ServiceSelector } from "./serviceSelector"
import { TimeSlotPicker } from "./timeSlotPicker"
import { BookButton } from "./bookingButton"

export type BookingService = {
  name: string
  price: number
  duration: number
}

type Props = {
  services: BookingService[]
  mockStripe?: boolean
}

export function BookingWidget({ services, mockStripe }: Props) {
  const [selectedService, setSelectedService] = useState<BookingService | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [customerEmail, setCustomerEmail] = useState("")

  return (
    <div className="space-y-4 p-4 rounded-xl bg-white shadow max-w-md">
      <ServiceSelector
        services={services}
        selectedService={selectedService}
        onSelect={(s) => {
          setSelectedService(s)
          setSelectedTime(null)
        }}
      />

      {selectedService && (
        <>
          <TimeSlotPicker
            service={selectedService}
            selectedTime={selectedTime}
            onSelect={setSelectedTime}
            mockBookedSlots={mockStripe ? ["10:00", "13:00"] : undefined}
          />

          {selectedTime && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your email:</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2 w-full"
              />
            </div>
          )}

          <BookButton
            service={selectedService}
            time={selectedTime}
            customerEmail={customerEmail}
            mockStripe={mockStripe}
          />
        </>
      )}
    </div>
  )
}
