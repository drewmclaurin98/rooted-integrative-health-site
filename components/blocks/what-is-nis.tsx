export function WhatIsNIS() {
  return (
    <section id="what-is-nis" className="py-12 sm:py-20 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          What Is Neurological Integrative Systems (NIS)?
        </h2>

        {/* Body */}
        <p className="text-md text-gray-700 leading-relaxed mb-12 max-w-3xl">
          Neurological Integrative Systems (NIS) is a non-invasive, assessment-based approach developed by Dr. Allan Phillips. NIS evaluates neurological communication pathways within the body to identify areas where signaling may be disrupted. When the brain is no longer able to maintain optimal communication with a particular system or function, symptoms can develop over time. Through a structured assessment and gentle neurological input, NIS sessions aim to restore those communication pathways and support the body&apos;s natural regulatory processes.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Non-Invasive</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              No needles, no adjustments, no medication. Sessions involve light touch neurological assessments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Assessment-Based</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each session systematically evaluates neurological communication before any input is applied.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Supports Self-Regulation</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The goal is to restore the body&apos;s own ability to regulate and maintain healthy function.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
