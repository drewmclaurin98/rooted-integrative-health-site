'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* -----------------------------
   Navigation config
------------------------------ */

const NAV_LINKS = [
  { href: '/about-nis', label: 'About NIS' },
  { href: '/services', label: 'Services' },
]

const CTA_LINK = {
  href: '/booking',
  label: 'Book Appointment',
}

const INSTAGRAM_URL = 'https://www.instagram.com/rootedintegrative'

/* -----------------------------
   Shared styles
------------------------------ */

const linkBase =
  'block px-3 py-2 rounded-md font-medium transition-colors duration-200 whitespace-nowrap'

const linkDefault =
  `${linkBase} text-gray-700 hover:text-primary hover:bg-background-page`

const linkCTA =
  'block w-full text-center px-3 py-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors duration-200'

/* -----------------------------
   Icons
------------------------------ */

function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.3 3.5 3.5 5.3 3.5 7.75v8.5c0 2.45 1.8 4.25 4.25 4.25h8.5c2.45 0 4.25-1.8 4.25-4.25v-8.5c0-2.45-1.8-4.25-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
    </svg>
  )
}

/* -----------------------------
   Reusable link group
------------------------------ */

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {NAV_LINKS.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={linkDefault}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}

      <Link
        href={CTA_LINK.href}
        className={linkCTA}
        onClick={onClick}
      >
        {CTA_LINK.label}
      </Link>
    </>
  )
}

/* -----------------------------
   Main navigation component
------------------------------ */

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/rih-square-no-title.png"
              alt="Rooted Integrative Health"
              width={48}
              height={48}
            />
            <span className="ml-3 text-md font-semibold text-gray-800 hidden sm:inline">
              Rooted Integrative Health
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavLinks />

            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center px-2 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page transition"
            >
              <InstagramIcon />
            </Link>
          </div>

          {/* Mobile header controls */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center px-2 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-page transition"
            >
              <InstagramIcon />
            </Link>

            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-background-surface transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <NavLinks onClick={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  )
}
