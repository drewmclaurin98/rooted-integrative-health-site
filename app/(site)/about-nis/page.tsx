'use client'

import Link from "next/link"

export default function AboutNISPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Practice</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Is Neurological Integration System (NIS)?
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A gentle, non-invasive approach to healthcare that restores the brain&apos;s ability to communicate
            with every cell in your body — so your body can do what it was designed to do.
          </p>
        </div>
      </section>

      {/* Core Explanation */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Foundation</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                NIS — developed by Dr. Allan K. Phillips D.O. through Neurolink — is a system of investigation
                designed to isolate and correct faults in the cellular signaling process. At its core, NIS works
                with the body&apos;s <strong>action potential</strong>: the electrical signal that allows the brain
                to communicate with every cell, tissue, and organ system.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your brain governs everything — not just conscious functions like thought and memory, but also the
                automatic processes that keep you alive: heart rate, blood pressure, body temperature, respiration,
                hormonal regulation, and much more. Your sense of wellness is, in large part, a direct expression
                of how fully your brain is aware of and coordinating all of these systems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When that communication breaks down — due to physical stress, illness, emotional trauma, or
                accumulated life demands — symptoms develop. NIS works to identify exactly where those signaling
                faults exist and, through specific neurological input, prompts the brain to re-establish those
                communication pathways.
              </p>
            </div>

            {/* Callout box */}
            <div className="bg-gradient-to-br from-gradient-primary-start to-gradient-primary-end rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">NIS in a Nutshell</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Brain-centered:</strong> The brain controls every function in the body. NIS works with that innate intelligence rather than around it.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Non-invasive:</strong> Sessions use light touch only — no needles, no forceful adjustments, no medication.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Systematic:</strong> Every session follows a structured assessment protocol to identify and address signaling faults before any correction is applied.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Restorative:</strong> The goal is to restore the body&apos;s own regulatory ability — not to override it or compensate for it.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Science Behind NIS</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            NIS is grounded in two established principles of neuroscience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Action Potential */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Action Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                The action potential is the electrical signal that allows the brain to send instructions
                to every cell in the body. Think of it as the body&apos;s communication network. When this
                signaling process is disrupted — even slightly — the brain may lose awareness of a
                particular system or function, and that area can begin to underperform or develop symptoms
                over time. NIS identifies exactly where those disruptions exist.
              </p>
            </div>

            {/* Neuroplasticity */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neuroplasticity</h3>
              <p className="text-gray-600 leading-relaxed">
                Neuroplasticity is the brain&apos;s well-documented ability to change and reorganize itself
                throughout life — forming new neural connections in response to new information and
                experiences. NIS leverages neuroplasticity as its mechanism for change. By presenting
                the brain with precise, targeted neurological input during a session, the practitioner
                prompts the brain to &quot;rewire&quot; — restoring signaling pathways that had gone offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a Session Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How a Session Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            Each NIS session follows a consistent, systematic protocol from start to finish.
          </p>
          <div className="space-y-6">

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  The practitioner uses a muscle-testing technique (a form of neuromuscular biofeedback) to
                  systematically check each area of the body and brain&apos;s integration. This identifies exactly
                  which circuits are not firing correctly — before anything else is done.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once a fault is identified, the practitioner applies a gentle tap to specific points on the
                  skull (the cortex). This light stimulus is the neurological input that prompts the brain to
                  re-establish the disrupted signaling pathway — essentially reminding the brain of what it
                  had stopped monitoring.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Restoration</h3>
                <p className="text-gray-600 leading-relaxed">
                  With communication restored, the body is empowered to regulate itself more effectively.
                  Because the correction happens at the level of the brain, changes can affect multiple body
                  systems simultaneously — without targeting any single symptom in isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gradient-to-br from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">See NIS in Action</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Watch this overview to see how an NIS session is conducted and what you can expect.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7TjqGKlbc1c"
              title="What is NIS - Neurological Integration System"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Who Can Benefit?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Because NIS works at the level of brain-body communication rather than targeting specific
            diagnoses, it can support a wide range of people and presentations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Chronic pain or fatigue',
              'Hormonal imbalances',
              'Digestive issues',
              'Immune dysregulation',
              'Stress & anxiety',
              'Sleep disturbances',
              'Musculoskeletal complaints',
              'Post-illness recovery',
              'General wellness & prevention',
            ].map((condition) => (
              <div key={condition} className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-center gap-3 shadow-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience NIS?</h2>
          <p className="text-lg mb-8 text-white/90">
            Book a session and see how restoring brain-body communication can support your health.
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
