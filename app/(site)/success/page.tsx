import type { Metadata } from "next"
import Link from "next/link"
import Stripe from "stripe"
import { prisma } from "@/lib/prisma"
import { site } from "@/content/site"
import { durationFor, formatBookingTime } from "@/lib/booking"
import { buttonClasses } from "@/components/ui/button"
import { DetailList, ResultCard } from "@/components/booking/resultCard"
import { RefreshWhilePending } from "@/components/booking/refreshWhilePending"

export const metadata: Metadata = {
  title: "Booking | Rooted Integrative Health",
  robots: { index: false },
}
export const dynamic = "force-dynamic"

type Outcome =
  | { kind: "confirmed"; serviceName: string; bookingTime: Date; price: number; customerEmail: string | null }
  | { kind: "processing" }
  | { kind: "refunded"; amount: number }
  | { kind: "unknown" }

/** Works out what actually happened to this checkout, from Stripe and the booking table. */
async function getOutcome(sessionId?: string): Promise<Outcome> {
  if (!sessionId?.startsWith("cs_")) return { kind: "unknown" }
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent.latest_charge"],
    })
    if (session.payment_status !== "paid") return { kind: "unknown" }

    const bookingId = Number(session.metadata?.bookingId)
    const booking = bookingId ? await prisma.booking.findUnique({ where: { id: bookingId } }) : null
    if (booking?.status === "confirmed") return { kind: "confirmed", ...booking }

    const pi = session.payment_intent as Stripe.PaymentIntent | null
    const charge = pi?.latest_charge as Stripe.Charge | null | undefined
    if (charge && charge.amount_refunded > 0) return { kind: "refunded", amount: charge.amount_refunded / 100 }

    // Paid, but the webhook hasn't finished confirming yet (usually a second or two).
    return { kind: "processing" }
  } catch (err) {
    console.error("Success page lookup failed:", err)
    return { kind: "unknown" }
  }
}

const contactLine = (
  <p className="text-center text-sm text-gray-600">
    Questions? Email{" "}
    <a className="text-primary underline" href={`mailto:${site.contact.email}`}>
      {site.contact.email}
    </a>{" "}
    or call{" "}
    <a className="whitespace-nowrap text-primary underline" href={`tel:+1${site.contact.phone.replace(/\D/g, "")}`}>
      {site.contact.phone}
    </a>
    .
  </p>
)

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams
  const outcome = await getOutcome(session_id)

  if (outcome.kind === "confirmed") {
    return (
      <ResultCard tone="success" eyebrow="Booking confirmed" title="You're all set">
        <p className="text-center">
          Thank you for booking with {site.practitioner.name}. A confirmation with a calendar invite is on its way
          {outcome.customerEmail ? (
            <>
              {" "}to <strong className="break-all">{outcome.customerEmail}</strong>
            </>
          ) : null}
          .
        </p>
        <DetailList
          rows={[
            ["Session", outcome.serviceName],
            ["When", formatBookingTime(outcome.bookingTime)],
            ["Length", `${durationFor(outcome.serviceName)} minutes`],
            ["Paid", `$${outcome.price}`],
          ]}
        />
        <p className="text-center text-sm">{site.location.note}</p>
        <p className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
          <strong className="text-gray-900">Cancellation policy:</strong> {site.policies.cancellation}
        </p>
        <div className="text-center">
          <Link href="/" className={buttonClasses("primary", "md")}>
            Back to home
          </Link>
        </div>
        {contactLine}
      </ResultCard>
    )
  }

  if (outcome.kind === "processing") {
    return (
      <ResultCard tone="pending" eyebrow="Payment received" title="Finishing your booking…">
        <RefreshWhilePending />
        <p className="text-center">
          Your payment went through and we&apos;re confirming your appointment. This page updates on its own in a few
          seconds, and you&apos;ll also get a confirmation email.
        </p>
        {contactLine}
      </ResultCard>
    )
  }

  if (outcome.kind === "refunded") {
    return (
      <ResultCard tone="notice" eyebrow="Not booked" title="Your payment was refunded">
        <p className="text-center">
          This appointment isn&apos;t booked, and your ${outcome.amount} payment has been refunded in full. It can take
          5–10 days to appear on your statement. This usually means another client took the same time just before your
          payment finished. Please check your email for details.
        </p>
        <div className="text-center">
          <Link href="/booking" className={buttonClasses("primary", "md")}>
            Choose another time
          </Link>
        </div>
        {contactLine}
      </ResultCard>
    )
  }

  return (
    <ResultCard tone="notice" eyebrow="Booking" title="We couldn't find this booking">
      <p className="text-center">
        If you just paid, check your email for a confirmation. If nothing arrives in a few minutes, please get in touch
        and we&apos;ll sort it out.
      </p>
      <div className="text-center">
        <Link href="/booking" className={buttonClasses("secondary", "md")}>
          Go to booking
        </Link>
      </div>
      {contactLine}
    </ResultCard>
  )
}
