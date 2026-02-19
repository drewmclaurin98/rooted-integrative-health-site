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
                Neurological Integrative Systems
              </h1>
            </div>

            {/* Subtext */}
            <p className="mb-8 text-lg sm:text-lg text-gray-700 leading-relaxed">
              Experience integrative medicine that combines the best of conventional and natural healing. 
              We will work with you to address the root causes of health challenges 
              and support your body's natural ability to heal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book Appointment
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
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="w-full">
            <Image
              src="/nis-color.jpg"
              alt="Neurological Integrative Systems illustration"
              width={400}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}