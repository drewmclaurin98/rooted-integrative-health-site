'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/rih-square-no-title.png" alt="Rooted Integrative Health" width={48} height={48} />
            <span className="ml-3 text-md font-semibold text-gray-800 hidden sm:inline">
              Rooted Integrative Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/about-nis"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              About NIS
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/booking"
              className="block w-full text-center px-3 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>

            <Link
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              className="flex items-center px-2 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.3 3.5 3.5 5.3 3.5 7.75v8.5c0 2.45 1.8 4.25 4.25 4.25h8.5c2.45 0 4.25-1.8 4.25-4.25v-8.5c0-2.45-1.8-4.25-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex gap-4">
            <Link
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              className="flex items-center px-2 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.3 3.5 3.5 5.3 3.5 7.75v8.5c0 2.45 1.8 4.25 4.25 4.25h8.5c2.45 0 4.25-1.8 4.25-4.25v-8.5c0-2.45-1.8-4.25-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
              </svg>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-surface transition-colors duration-200"
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
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about-nis"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              About NIS
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page font-medium transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/booking"
              className="block w-full text-center px-3 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors duration-200"
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
