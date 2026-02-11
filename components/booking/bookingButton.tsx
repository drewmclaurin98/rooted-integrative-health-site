"use client"

import { useState } from "react"
import { BookingService } from "./bookingWidget"

type Props = {
  service: BookingService
  time: string | null
  customerEmail?: string
  mockStripe?: boolean
}

export function BookButton({ service, time, customerEmail, mockStripe }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleBooking = async () => {
    if (!time) return
    setLoading(true)
    setError(null)

    try {
      if (mockStripe) {
        alert(`Mock Stripe redirect for ${service.name} at ${time}`)
        return
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceName: service.name,
          price: service.price,
          bookingTime: time,
          customerEmail: customerEmail || undefined,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Something went wrong")
        return
      }
      if (!data.url) {
        setError("No checkout URL returned")
        return
      }
      window.location.href = data.url
    } catch {
      setError("Failed to connect. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleBooking}
        disabled={!time || loading}
        className="w-full rounded-lg px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400"
      >
        {loading ? "Processing..." : `Book & Pay $${service.price}`}
      </button>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  )
}
