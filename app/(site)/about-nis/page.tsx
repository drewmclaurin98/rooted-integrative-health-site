'use client'

import Link from "next/link"

export default function AboutNISPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About RIH
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dedicated to providing integrative healthcare that honors the whole person—body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Resilient Integrative Health, we believe that true wellness comes from addressing the root causes of health challenges, not just treating symptoms. Our mission is to guide each patient toward their optimal health by combining the best of conventional medicine with time-tested natural therapies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We create a healing partnership with our patients, empowering them to take an active role in their health journey and achieve lasting wellness.
              </p>
            </div>
            <div className="bg-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <p className="text-center text-gray-600 font-medium">
                Healing Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V8M10.5 1.5v5h5M10.5 1.5L15.5 6.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Individuality</h3>
              <p className="text-gray-700">
                Each patient is unique. We develop personalized treatment plans tailored to your specific needs, goals, and constitution.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-1H4a1 1 0 110-2h1v-2H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V5a2 2 0 012-2h1V2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-700">
                We integrate the latest scientific research with traditional healing wisdom to provide the most effective treatments.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic View</h3>
              <p className="text-gray-700">
                We treat the whole person—addressing physical, emotional, mental, and spiritual aspects of health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Mitchell</h3>
              <p className="text-primary font-medium mb-3">MD, Acupuncturist, Herbalist</p>
              <p className="text-gray-700">
                15+ years of experience in integrative medicine with special focus on chronic pain management and women's health.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">James Chen, LAc</h3>
              <p className="text-primary font-medium mb-3">Licensed Acupuncturist</p>
              <p className="text-gray-700">
                Specializing in traditional Chinese medicine, acupuncture, and cupping therapy for athletic performance and injury recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary-light/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose RIH?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Personalized treatment plans designed specifically for you',
              'Combination of evidence-based conventional and natural therapies',
              'Compassionate practitioners who listen and care',
              'Comprehensive approach addressing root causes, not just symptoms',
              'Convenient appointment scheduling and flexible hours',
              'Insurance accepted for many services'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
            <p className="text-lg mb-8 text-white/90">
                Schedule a consultation with one of our practitioners today.
            </p>
            <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
                Book an Appointment
            </Link>
        </div>
      </section>
    </div>
  )
}
