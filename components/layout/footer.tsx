import Link from 'next/link'

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
                <Link href="/about-nis" className="hover:text-primary">
                  About NIS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Center Column: Contact Information & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
            <p className="mb-2">Hours: TBD</p>
            <p className="mb-4">Location: TBD</p>
          </div>

          {/* Right Column: Social Media Links */}
          <div>
            <h4 className="text-sm font-medium mb-2">Connect</h4>
            <a
              href="https://instagram.com/rootedintegrative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
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
        <div className="text-sm text-gray-500 text-center">© {new Date().getFullYear()} Rooted Integrative Health</div>
      </div>
    </footer>
  )
}