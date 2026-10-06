import type { Metadata } from 'next'
import { services } from '@/content/services'
import { ServiceCard } from '@/components/ui/serviceCard'
import { FinalCta } from '@/components/blocks/final-cta'
import { DeepBackdrop } from '@/components/ui/deepBackdrop'

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
  title: 'NIS Services & Pricing | Rooted Integrative Health',
  description:
    'NIS session options and pricing with Caitlin McLaurin, RN in St. Paul, Minnesota. Initial sessions are $150 (60 min); follow-up sessions are $100 (45 min).',
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-deep to-deep-light pt-20 pb-36 sm:pt-24 sm:pb-44">
        <DeepBackdrop focus="roots" className="opacity-60" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Simple, Personalized Sessions</h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Every session is one-on-one and tailored to you. Choose the option that fits where you are in your
            NIS experience.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500 text-center max-w-2xl mx-auto">
            NIS sessions are provided as a wellness service and are not a substitute for medical diagnosis or
            treatment.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
