'use client'

import { BookingService, BookingWidget } from "../../../components/booking/bookingWidget"

const services: BookingService[] = [
  { name: "Initial Consultation", price: 150, duration: 60 },
  { name: "Follow-Up Session", price: 100, duration: 45 },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end py-20">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-4">[Test Environment WIP]</h1>
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-2">Book an Appointment</h1>
        <p className="text-gray-700 text-center mb-8">Choose a service, pick a date & time, and pay securely.</p>
        <BookingWidget services={services} />
      </div>
    </div>
  )
}
