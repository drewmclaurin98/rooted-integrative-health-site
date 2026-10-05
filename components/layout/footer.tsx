import Link from 'next/link'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-background-surface text-gray-700">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content: 3-column layout (Navigation, Contact, Social) */}
        <div className="flex flex-col text-center sm:text-left sm:flex-row justify-between gap-8 pb-4">
          {/* Left Column: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-nis" className="hover:text-primary" aria-label="Learn about NIS treatment">
                  About NIS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary" aria-label="View our services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary" aria-label="About Caitlin McLaurin">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary" aria-label="Contact Rooted Integrative Health">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary" aria-label="Book an appointment">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Center Column: Contact Information & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
            <p className="mb-2">{site.location.hours}</p>
            <p className="mb-4">{site.location.city}, {site.location.regionName}</p>
            <p className="mb-2">
              <a href={`mailto:${site.contact.email}`} className="hover:text-primary">{site.contact.email}</a>
            </p>
            <p>
              <a href={`tel:+1${site.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary">{site.contact.phone}</a>
            </p>
          </div>

          {/* Right Column: Social Media Links */}
          <div>
            <h4 className="text-sm font-medium mb-2">Connect</h4>
            <a
              href="https://instagram.com/rootedintegrative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              aria-label="Follow Rooted Integrative Health on Instagram (opens in a new tab)"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Divider: Separates menu sections from disclaimer */}
        <div className="border-t border-border"></div>
        
        {/* Disclaimer Section */}
        <div>
          <p className="text-sm text-gray-600">
            Caitlin McLaurin is a Registered Nurse and Certified NIS practitioner, not a doctor, and as such is not a substitute for diagnosis and treatment by a qualified, licensed, medical professional. The purpose of NIS is to help restore normal physiological function, and is not intended to diagnose, treat, cure, or prevent any disease. Any information given is offered as personal opinion and suggestion, not diagnosis. Any nutritional supplements, dietary advice, and/or home care suggestions are offered as personal recommendations, not a prescription. Caitlin McLaurin is not a doctor, and makes no claims for any cures and/or diagnosis either stated or implied and assumes no liability for the use of any information disclosed. The above disclaimer applies to information discussed during an office visit, via phone or email correspondence, or correspondence via any other media or means.
          </p>
        </div>

        {/* Copyright Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Rooted Integrative Health</span>
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-primary">Disclaimer</Link>
        </div>
      </div>
    </footer>
  )
}