'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Feature() {
  return (
    <section className="py-12 sm:py-20">
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Caitlin McLaurin | NIS Practioner
            </h1>
            {/* Subtext */}
            <p className="mb-8 text-lg sm:text-lg text-gray-700 leading-relaxed">
              TODO: Add qaulifications and experience here.
            </p>
          </div>

          {/* Right: Featured Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="bg-background-muted rounded-lg p-8 h-96 flex items-center justify-center">
                <p className="text-center text-gray-600 font-medium">
                  Image Placeholder
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}