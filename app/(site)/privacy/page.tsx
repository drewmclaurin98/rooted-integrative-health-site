import type { Metadata } from 'next'
import { site } from '@/content/site'

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy Policy | Rooted Integrative Health',
  description: 'How Rooted Integrative Health collects and uses your information.',
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 leading-relaxed">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          This is a starting template. Please have it reviewed before launch to ensure it accurately reflects
          your practices and complies with applicable law.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
          <p>
            When you book a session, we collect the information you provide &mdash; such as your name, email
            address, and appointment selection &mdash; in order to schedule and confirm your appointment.
            Payments are processed securely by our payment provider (Stripe); we do not store your full card
            details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Your Information</h2>
          <p>
            We use your information to schedule appointments, send booking confirmations, respond to your
            inquiries, and provide our services. We do not sell your personal information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h2>
          <p>
            This site uses privacy-conscious analytics to understand how visitors use the site so we can improve
            it. This data is aggregated and not used to identify you personally.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions about this policy can be directed to Rooted Integrative Health
            {site.contact.email ? ` at ${site.contact.email}` : ''}.
          </p>
        </div>
      </div>
    </section>
  )
}
