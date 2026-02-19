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
          <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
            <Image
              src="/nis-gray.jpg"
              alt="Neurological Integrative Systems illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Caitlin McLaurin | Certified NIS Practitioner
            </h1>
            {/* Subtext */}
            <p className="mb-8 text-md text-gray-700 leading-relaxed">
              Caitlin McLaurin is a certified Neurological Integrative Systems (NIS) practitioner trained through the Neurolink Institute, founded by Dr. Allan Phillips in New Zealand. Having experienced the benefits of NIS firsthand throughout her own health journey, she was inspired by her mentor and practitioner Dan Lane to pursue formal training and bring this assessment approach to her community. Caitlin&apos;s practice focuses on identifying disruptions in neurological communication that may be contributing to a range of health concerns — and supporting the body&apos;s ability to self-regulate. She has worked with clients presenting a variety of complex conditions for which conventional medicine provided limited solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}