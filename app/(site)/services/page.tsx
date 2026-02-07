'use client'

import Link from "next/link"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* TODO: Add STRIPE booking support */}
          <div className="col-span-3 text-center py-12 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service options and prices coming soon</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
