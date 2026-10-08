"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/** Re-checks the booking every few seconds while the payment webhook is still finishing. */
export function RefreshWhilePending({ everyMs = 3000, maxTries = 10 }: { everyMs?: number; maxTries?: number }) {
  const router = useRouter()
  useEffect(() => {
    let tries = 0
    const id = setInterval(() => {
      tries += 1
      if (tries > maxTries) clearInterval(id)
      else router.refresh()
    }, everyMs)
    return () => clearInterval(id)
  }, [router, everyMs, maxTries])
  return null
}
