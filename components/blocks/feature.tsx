'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Feature() {
  return (
    <section className="py-12 sm:py-20">
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Featured Image */}
          <div className="w-full">
            <Image
              src="/nis-gray.jpg"
              alt="Neurological Integrative Systems illustration"
              width={600}
              height={800}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Caitlin McLaurin | NIS Practioner
            </h1>
            {/* Subtext */}
            <p className="mb-8 text-lg sm:text-lg text-gray-700 leading-relaxed">
              Caitlin has been a patient of NIS growing up. NIS has helped both Caitlin and her family members on many health problems throughout the years. She was inspired by her Mentor and NIS practitioner Dan Lane. NIS (Neurolink) is a technique developed by Dr. Alan Phillips in New Zealand. Caitlin loves the fact that NIS can work to heal different conditions that modern medicine has no answer to. The goal with NIS is to find functions in the body that seem to be not running as they have been or should, there must be a disconnect between your brain, nerves, and area of function, so my goal is to reconnect the function. I have seen NIS work to identify and fix health related issues for people who have spent time and money at multiple healthcare providers attempting to help treat their condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}