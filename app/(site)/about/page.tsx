import type { Metadata } from 'next'
import Image from 'next/image'
import { site } from '@/content/site'
import { BookingCTA } from '@/components/ui/bookingCTA'

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About Caitlin McLaurin, RN | Rooted Integrative Health',
  description:
    'Meet Caitlin McLaurin, RN, Certified NIS Practitioner at Rooted Integrative Health in St. Paul, Minnesota, offering a gentle, client-centered approach to wellness.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
              <Image
                src="/caitlin-headshot.jpeg"
                alt={`${site.practitioner.name}, ${site.practitioner.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {site.practitioner.name}, {site.practitioner.credential}
              </h1>
              <p className="mt-2 text-lg text-gray-600">{site.practitioner.title}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-700 leading-relaxed">
          <p>
            Rooted Integrative Health was created to provide a calm, individualized space where clients can
            explore a gentle approach to wellness. With a background in nursing and specialized training in
            Neurological Integrative Systems, Caitlin brings a thoughtful, client-centered approach to every
            session.
          </p>
          <p>
            Caitlin trained through the Neurolink Institute, founded by Dr. Allan Phillips. Having experienced
            the benefits of NIS firsthand throughout her own health journey, she was inspired to pursue formal
            training and bring this assessment approach to her community.
          </p>
          <p>
            Her goal is to create an environment where clients feel heard, comfortable, and informed throughout
            their experience &mdash; supporting the body&apos;s natural ability to self-regulate.
          </p>
          <p className="text-sm text-gray-500">
            Caitlin McLaurin is a Registered Nurse and Certified NIS practitioner. NIS is a wellness service and
            is not a substitute for medical diagnosis or treatment.
          </p>
          <div className="pt-4">
            <BookingCTA service="initial-nis" text="Book Your First Session" withArrow />
          </div>
        </div>
      </section>
    </>
  )
}
