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

  return (
    <div className="space-y-4 p-4 rounded-xl bg-white shadow max-w-md">
      <ServiceSelector
        services={services}
        selectedService={selectedService}
        onSelect={setSelectedService}
      />

      {selectedService && (
        <>
          <TimeSlotPicker
            service={selectedService}
            selectedTime={selectedTime}
            onSelect={setSelectedTime}
            mockBookedSlots={["10:00", "13:00"]} // Storybook demo
          />
          <BookButton service={selectedService} time={selectedTime} mockStripe={mockStripe} />
        </>
      )}
    </div>
  )
}
