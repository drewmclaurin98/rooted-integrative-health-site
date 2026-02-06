'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-sm font-medium text-accent-dark">Welcome to Wellness</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Holistic Health Care
          <span className="block text-accent-main mt-2">For Your Whole Self</span>
        </h1>

        {/* Subtext */}
        <p className="mb-8 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Experience integrative medicine that combines the best of conventional and natural healing. 
          Our compassionate practitioners work with you to address the root causes of health challenges 
          and support your body's natural ability to heal.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-main hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Your Visit
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
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-gray-900 font-semibold rounded-lg transition-colors duration-200 backdrop-blur-sm border border-white/30">
            Learn More
          </button>
        </div>

        {/* Stats/Trust indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div>
            <p className="text-3xl font-bold text-accent-main">15+</p>
            <p className="text-gray-700">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent-main">2000+</p>
            <p className="text-gray-700">Patients Treated</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent-main">98%</p>
            <p className="text-gray-700">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}