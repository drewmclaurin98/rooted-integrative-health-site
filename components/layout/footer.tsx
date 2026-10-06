import Link from 'next/link'
import { site } from '@/content/site'
import { footerNav } from '@/content/navigation'

// Compact footer: name + location, page links, contact, then a single legal row.
// The full wellness disclaimer lives on /disclaimer (linked below).
export function Footer() {
  const linkClass = 'hover:text-white transition-colors'

  return (
    <footer className="border-t border-white/10 bg-deep-dark text-sm text-white/75">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Practice */}
          <div>
            <p className="font-heading text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-1">
              {site.location.city}, {site.location.regionName} · {site.location.hours}
            </p>
          </div>

          {/* Pages */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <ul className="space-y-1">
            <li>
              <a href={`mailto:${site.contact.email}`} className={linkClass}>{site.contact.email}</a>
            </li>
            <li>
              <a href={`tel:+1${site.contact.phone.replace(/[^0-9]/g, '')}`} className={linkClass}>{site.contact.phone}</a>
            </li>
            <li>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-white"
                aria-label="Follow Rooted Integrative Health on Instagram (opens in a new tab)"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Legal row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-4">
            <Link href="/privacy" className={linkClass}>Privacy Policy</Link>
            <Link href="/disclaimer" className={linkClass}>Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
