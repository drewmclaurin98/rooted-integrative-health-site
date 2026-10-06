import Link from 'next/link'
import { NisPathways } from '@/components/blocks/nis-pathways'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-gradient-to-b from-deep to-deep-light">
      {/* Background: nervous system drawn as a rooted tree (decorative) */}
      <NisPathways className="absolute inset-0 -z-10 h-full w-full opacity-70 sm:opacity-100" />

      <div className="relative mx-auto w-full max-w-3xl px-4 pt-24 pb-36 text-center sm:px-6 sm:py-32 lg:px-8">
        {/* Soft dark glow keeps the text readable over the line work at any width */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-16 inset-y-12 -z-10 bg-[radial-gradient(closest-side,rgba(31,50,54,0.9),rgba(31,50,54,0.7)_55%,rgba(31,50,54,0))]"
        />

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
          NIS · St. Paul, MN
        </p>
        <h1 className="mb-6 text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Supporting Neurological Balance for Lasting Health
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80">
          Certified Neurological Integrative Systems (NIS) Practitioner providing in-person sessions in St. Paul, MN.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-primary font-semibold rounded-lg transition-[color,background-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 shadow-lg hover:shadow-xl"
            aria-label="Schedule an appointment"
          >
            Schedule an Appointment
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="#what-is-nis"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white font-semibold rounded-lg transition-[color,background-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 hover:bg-white/10 focus-visible:outline-white"
            aria-label="Jump to What Is NIS section"
          >
            What Is NIS?
          </Link>
        </div>
      </div>
    </section>
  )
}
