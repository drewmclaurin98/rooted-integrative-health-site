import Link from 'next/link'
import { BookingCTA } from '@/components/ui/bookingCTA'

export function FinalCta() {
  return (
    <section className="bg-primary text-white py-16 sm:py-20">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 text-white/90">
          Take the first step toward a more personalized approach to your wellness.
        </p>
        <div className="flex justify-center">
          <BookingCTA service="initial-nis" text="Book Your First Session" variant="white" withArrow />
        </div>
        <p className="mt-6 text-sm text-white/80">
          Questions before booking?{' '}
          <Link href="/contact" className="underline hover:text-white">
            Contact Caitlin
          </Link>
        </p>
      </div>
    </section>
  )
}
