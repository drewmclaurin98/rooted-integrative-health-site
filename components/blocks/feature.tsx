'use client'

import Image from 'next/image'

export function Feature() {
  return (
    <section className="py-12 sm:py-20">
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Featured Image */}
          <div data-reveal="left" className="relative w-full h-[380px] sm:h-[480px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
            <Image
              src="/caitlin-headshot.jpeg"
              alt="Caitlin McLaurin, Certified NIS Practitioner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          {/* Right: Content */}
          <div data-reveal="right" style={{ ["--reveal-delay" as string]: "120ms" }} className="flex flex-col justify-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
              Meet Caitlin McLaurin, RN
            </h2>
            {/* Credentials */}
            <ul className="mb-6 flex flex-wrap gap-2" aria-label="Credentials">
              {['Registered Nurse (RN)', 'Certified NIS Practitioner', 'Neurolink Institute Trained'].map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                >
                  {c}
                </li>
              ))}
            </ul>

            {/* Bio */}
            <div className="space-y-4 text-md text-gray-700 leading-relaxed">
              <p>
                Caitlin experienced the benefits of NIS firsthand during her own health journey. Inspired by her
                mentor and practitioner Dan Lane, she pursued formal training through the Neurolink Institute,
                founded by Dr. Allan Phillips in New Zealand, to bring this approach to her community.
              </p>
              <p>
                Her practice focuses on identifying disruptions in neurological communication that may be
                contributing to a range of health concerns, and supporting the body&apos;s ability to self-regulate.
                She has worked with clients with a variety of complex conditions for which conventional medicine
                offered limited solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}