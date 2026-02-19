'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="py-12 sm:py-20">

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Logo + Headline */}
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/logo-v3-no-bg-with-text.png"
                alt="RIH Logo"
                width={120}
                height={120}
                className="rounded-lg flex-shrink-0"
              />

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Supporting Neurological Balance for Lasting Health
              </h1>
            </div>

            {/* Subtext */}
            <p className="mb-8 text-md text-gray-700 leading-relaxed">
              Certified Neurological Integrative Systems (NIS) Practitioner providing in-person sessions in St. Paul, MN.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule an Appointment
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg transition-colors duration-200 hover:bg-primary/10"
              >
                What Is NIS?
              </Link>
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
            <Image
              src="/nis-color.jpg"
              alt="Neurological Integrative Systems illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}