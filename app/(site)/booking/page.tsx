'use client'

import Link from "next/link"
import { BookingWidget } from "../../../components/booking/bookingWidget"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* TODO: Add STRIPE booking support */}
          <div className="col-span-3 text-center py-12 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Widget Coming Soon</h2>
            <p className="text-gray-700">
              Our integrated booking system is under development. Please check back soon!
            </p>
          </div>
          {/* <BookingWidget service={{
            name: "Initial Consultation",
            price: 90,
            duration: 90
          }} />
          <BookingWidget service={{
            name: "Regular 20-minute Appointment",
            price: 60,
            duration: 20
          }} /> */}
        </div>
      </div>
    </div>
  )
}
