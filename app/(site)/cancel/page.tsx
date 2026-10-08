"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { buttonClasses } from "@/components/ui/button"
import { ResultCard } from "@/components/booking/resultCard"

function CancelContent() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")
  const token = searchParams.get("token")
  // The cancel API reports "paid" if the payment actually completed (e.g. in another tab).
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    if (!bookingId || !token) return
    fetch("/api/booking/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId, token }),
    })
      .then((r) => r.json())
      .then((data) => setPaid(Boolean(data?.paid)))
      .catch((err) => console.error("Failed to cancel booking:", err))
  }, [bookingId, token])

  if (paid) {
    return (
      <ResultCard tone="success" eyebrow="Payment received" title="Your payment went through">
        <p className="text-center">
          It looks like this booking was paid after all, so your time is still reserved. Check your email for the
          confirmation.
        </p>
        <div className="text-center">
          <Link href="/" className={buttonClasses("primary", "md")}>
            Back to home
          </Link>
        </div>
      </ResultCard>
    )
  }

  return (
    <ResultCard tone="notice" eyebrow="Checkout cancelled" title="No payment was made">
      <p className="text-center">
        Your booking wasn&apos;t completed and you haven&apos;t been charged. The time you picked has been released, so
        you can choose it again or pick another.
      </p>
      <div className="text-center">
        <Link href="/booking" className={buttonClasses("primary", "md")} aria-label="Try booking again">
          Choose a time
        </Link>
      </div>
    </ResultCard>
  )
}

export default function CancelPage() {
  return (
    <Suspense>
      <CancelContent />
    </Suspense>
  )
}
