import type { Metadata } from 'next'
import { site } from '@/content/site'
import { BookingCTA } from '@/components/ui/bookingCTA'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact | Rooted Integrative Health',
  description:
    'Get in touch with Rooted Integrative Health in St. Paul, Minnesota, or book an NIS session with Caitlin McLaurin, RN.',
}

export default function ContactPage() {
  const { contact, location } = site
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Have a question before booking? Reach out and Caitlin will be happy to help.
        </p>

        <dl className="space-y-6">
          {contact.email && (
            <div>
              <dt className="text-sm font-semibold text-gray-900">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </dd>
            </div>
          )}
          {contact.phone && (
            <div>
              <dt className="text-sm font-semibold text-gray-900">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:+1${contact.phone.replace(/[^0-9]/g, '')}`} className="text-primary hover:underline">
                  {contact.phone}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-semibold text-gray-900">Instagram</dt>
            <dd className="mt-1">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {contact.instagramHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-gray-900">Location</dt>
            <dd className="mt-1 text-gray-700">{location.note}</dd>
          </div>
        </dl>

        <div className="mt-12">
          <BookingCTA service="initial-nis" text="Book an Appointment" withArrow />
        </div>
      </div>
    </section>
  )
}
