import type { Metadata } from 'next'
import { site } from '@/content/site'

export const metadata: Metadata = {
  alternates: { canonical: '/disclaimer' },
  title: 'Disclaimer | Rooted Integrative Health',
  description:
    'Wellness disclaimer for Rooted Integrative Health. NIS is a wellness service and is not a substitute for medical diagnosis or treatment.',
  robots: { index: false, follow: true },
}

export default function DisclaimerPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        <p className="text-gray-700 leading-relaxed">{site.disclaimerFull}</p>
      </div>
    </section>
  )
}
