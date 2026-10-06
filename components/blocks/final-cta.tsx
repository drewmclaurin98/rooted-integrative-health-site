import Link from 'next/link'
import { BookingCTA } from '@/components/ui/bookingCTA'
import { DeepBackdrop } from '@/components/ui/deepBackdrop'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-deep to-deep-light text-white pt-20 pb-40 sm:pt-24 sm:pb-44">
      <DeepBackdrop focus="roots" className="opacity-50" />
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 data-reveal className="text-3xl sm:text-4xl font-semibold mb-4">Ready to Book Your First Session?</h2>
        <p data-reveal style={{ ["--reveal-delay" as string]: "90ms" }} className="text-lg mb-8 text-white/90">
          Take the first step toward a more personalized approach to your wellness.
        </p>
        <div data-reveal style={{ ["--reveal-delay" as string]: "180ms" }} className="flex justify-center">
          <BookingCTA service="initial-nis" text="Book Your First Session" variant="white" withArrow />
        </div>
        <p className="mt-6 text-sm text-white/90">
          Questions before booking?{' '}
          <Link href="/contact" className="underline hover:text-white">
            Contact Caitlin
          </Link>
        </p>
      </div>
    </section>
  )
}
