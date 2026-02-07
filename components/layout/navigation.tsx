'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/rih-square-no-title.png" alt="Rooted Integrative Health" width={48} height={48} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about-nis"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-accent-main hover:bg-gray-50 font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              About NIS
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-accent-main hover:bg-gray-50 font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/booking"
              className="block w-full text-center px-3 py-2 bg-accent-main hover:bg-accent-dark text-white font-medium rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-accent-main hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about-nis"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-accent-main hover:bg-gray-50 font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              About NIS
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-accent-main hover:bg-gray-50 font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/booking"
              className="block w-full text-center px-3 py-2 bg-accent-main hover:bg-accent-dark text-white font-medium rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
