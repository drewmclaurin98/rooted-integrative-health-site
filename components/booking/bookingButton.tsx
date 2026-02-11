"use client"

import { useState } from "react"
import { BookingService } from "./bookingWidget"

type Props = {
  service: BookingService
  time: string | null
  mockStripe?: boolean
}

export function BookButton({ service, time, mockStripe }: Props) {
  const [loading, setLoading] = useState(false)

  const handleBooking = async () => {
    if (!time) return
    setLoading(true)

    try {
      if (mockStripe) {
        alert(`Mock Stripe redirect for ${service.name} at ${time}`)
        return
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceName: service.name, price: service.price, bookingTime: time }),
      })

      const data = await res.json()
      if (!data.url) throw new Error("No checkout URL returned")
      window.location.href = data.url
    } catch (err: any) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBooking}
      disabled={!time || loading}
      className="w-full rounded-lg px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400"
    >
      {loading ? "Processing..." : `Book & Pay $${service.price}`}
    </button>
  )
}
