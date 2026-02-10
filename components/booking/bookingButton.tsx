"use client"

import { useState } from "react"
import { BookingService } from "./bookingWidget"
import { stripePromise } from "@/lib/stripe"

type BookButtonProps = {
  service: BookingService
  time: string | null
  disabled?: boolean
}

export function BookButton({ service, time, disabled }: BookButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleBooking() {
    if (!time) return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceName: service.name,
          price: service.price,
          bookingTime: time,
        }),
      })

      const data = await res.json()

      if (window.location.hostname === "localhost") {
        alert(`Mock redirect to Stripe: ${data.url}`)
        return
      }

      if (!data.url) {
        throw new Error("No checkout URL returned")
      }

      const stripe = await stripePromise
      if (!stripe) throw new Error("Stripe failed to load")

      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleBooking}
        disabled={disabled || loading}
        className={[
          "w-full rounded-lg px-6 py-3 text-white text-lg font-medium transition",
          disabled || loading
            ? "bg-slate-400 cursor-not-allowed"
            : "bg-emerald-600 hover:bg-emerald-700",
        ].join(" ")}
      >
        {loading ? "Processing..." : `Book & Pay $${service.price}`}
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}
