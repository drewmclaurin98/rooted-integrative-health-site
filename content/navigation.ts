/**
 * Single source of truth for site navigation.
 * Primary nav order (blueprint): Home (logo) | What is NIS? | Services | About | FAQ | [Book]
 */

export type NavLink = { href: string; label: string; ariaLabel?: string }

export const primaryNav: NavLink[] = [
  { href: "/about-nis", label: "What is NIS?", ariaLabel: "Learn about NIS" },
  { href: "/services", label: "Services", ariaLabel: "View services and pricing" },
  { href: "/about", label: "About", ariaLabel: "About Caitlin McLaurin" },
  { href: "/faq", label: "FAQ", ariaLabel: "Frequently asked questions" },
]

export const bookingCta: NavLink = {
  href: "/booking",
  label: "Book an Appointment",
  ariaLabel: "Book an appointment",
}

export const footerNav: NavLink[] = [
  { href: "/about-nis", label: "What is NIS?" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/booking", label: "Book" },
]

export const legalNav: NavLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
]
