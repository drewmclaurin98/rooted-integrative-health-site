/**
 * Signed token for the "back to site" cancel link Stripe shows on its checkout page.
 * Without it, anyone could release someone else's in-progress hold by guessing a booking id.
 * Server-only: signed with the Stripe secret key, which never reaches the browser.
 */
import { createHmac, timingSafeEqual } from "node:crypto"

export function cancelToken(bookingId: number): string {
  return createHmac("sha256", process.env.STRIPE_SECRET_KEY!)
    .update(`rih-cancel:${bookingId}`)
    .digest("base64url")
    .slice(0, 32)
}

export function isValidCancelToken(bookingId: number, token: unknown): boolean {
  if (typeof token !== "string" || !Number.isInteger(bookingId)) return false
  const expected = Buffer.from(cancelToken(bookingId))
  const given = Buffer.from(token)
  return given.length === expected.length && timingSafeEqual(given, expected)
}
