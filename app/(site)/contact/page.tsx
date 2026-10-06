import type { Metadata } from 'next'
import { site } from '@/content/site'
import { BookingCTA } from '@/components/ui/bookingCTA'
import { NisPathways } from '@/components/blocks/nis-pathways'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact | Rooted Integrative Health',
  description:
    'Get in touch with Rooted Integrative Health in St. Paul, Minnesota, or book an NIS session with Caitlin McLaurin, RN.',
}

export default function ContactPage() {
  const { contact, location } = site
  const linkClass = 'text-primary-light underline-offset-4 hover:text-white hover:underline'

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-gradient-to-b from-deep to-deep-light">
      {/* Background: the animated NIS drawing from the homepage hero (decorative) */}
      <NisPathways className="absolute inset-0 -z-10 h-full w-full opacity-70 sm:opacity-100" />

      <div className="relative mx-auto w-full max-w-2xl px-4 pt-20 pb-36 text-center sm:px-6 sm:pt-24 sm:pb-44 lg:px-8">
        {/* Soft dark glow keeps the text readable over the line work */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-16 inset-y-8 -z-10 bg-[radial-gradient(closest-side,rgba(31,50,54,0.92),rgba(31,50,54,0.75)_60%,rgba(31,50,54,0))]"
        />

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">Contact</p>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Get in Touch</h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80">
          Have a question before booking? Reach out and Caitlin will be happy to help.
        </p>

        <dl className="mx-auto grid max-w-xl gap-6 rounded-2xl bg-white/5 p-6 text-left ring-1 ring-white/10 backdrop-blur-sm sm:grid-cols-2 sm:p-8">
          {contact.email && (
            <div>
              <dt className="text-sm font-semibold text-white">Email</dt>
              <dd className="mt-1 break-words">
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  {contact.email}
                </a>
              </dd>
            </div>
          )}
          {contact.phone && (
            <div>
              <dt className="text-sm font-semibold text-white">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:+1${contact.phone.replace(/[^0-9]/g, '')}`} className={linkClass}>
                  {contact.phone}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-semibold text-white">Instagram</dt>
            <dd className="mt-1">
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {contact.instagramHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-white">Location</dt>
            <dd className="mt-1 text-white/75">{location.note}</dd>
          </div>
        </dl>

        <div className="mt-10 flex justify-center">
          <BookingCTA service="initial-nis" text="Book an Appointment" variant="white" withArrow />
        </div>
      </div>
    </section>
  )
}
