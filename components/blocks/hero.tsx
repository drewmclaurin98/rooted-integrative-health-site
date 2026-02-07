'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-12 sm:py-20">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-sm font-medium text-accent-dark">Welcome to Wellness</span>
        </div>

        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Holistic Health Care
          <span className="block text-accent-main mt-2">For Your Whole Self</span>
        </h1>

        <p className="mb-8 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Experience integrative medicine that combines the best of conventional and natural healing. 
          Our compassionate practitioners work with you to address the root causes of health challenges 
          and support your body's natural ability to heal.
        </p>

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
      </div> */}
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <Image
                src="/steve.jpeg"
                alt="Patient Testimonial"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl object-cover w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-main rounded-full opacity-20 blur-2xl" />
            </div>
          </div>

          {/* Right: Testimonial */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center w-fit">
              <span className="text-accent-main font-semibold text-sm">⭐ Patient Testimonial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Patient of the Year: Steve's Story
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Steve has been our #1 fan since day one. When he discovered RIH's commitment to eastern medicine, he jumped at the opportunity to come in weekly and experience our care. His dedication has been remarkable—his caring wife drives him to every appointment despite his initial challenges with mobility, speech, and writing.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Through the healing power of NIS (Neural Integration System), Steve has made incredible progress. What started as a humble patient who could barely walk has transformed into someone approaching his goal of driving again. His dream is for his child to become an NIS practitioner in Racine, and he generously donates to our clinic every week.
            </p>

            <p className="text-accent-main font-semibold mb-8">
              "We celebrate not just Steve's progress, but his wife's unwavering support. Together, they've shown us what's possible when dedication meets compassionate care. Steve, we commit to helping you achieve ultimate health through NIS."
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-main hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
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
          </div>
        </div>
      </div>
    </section>
  )
}