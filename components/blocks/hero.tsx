'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-12 sm:py-20">

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Featured Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="bg-accent-light/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <p className="text-center text-gray-600 font-medium">
                  Image Placeholder
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-main rounded-full opacity-20 blur-2xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <Image
                src="/logo-v3-no-bg-with-text.png"
                alt="RIH Logo"
                width={100}
                height={56}
                className="rounded-lg"
              />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Neurological Integrative Systems
            </h1>

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
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-main hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
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
        </div>
      </div>
    </section>
  )
}