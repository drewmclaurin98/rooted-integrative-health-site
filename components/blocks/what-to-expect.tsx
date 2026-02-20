export function WhatToExpect() {
  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight">
          What to Expect
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Initial Visit */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Initial Visit</h3>
            <ul className="space-y-3">
              {[
                'Health history discussion',
                'Full neurological assessment',
                'First corrective session (if appropriate)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow-Up Sessions */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Follow-Up Sessions</h3>
            <ul className="space-y-3">
              {[
                'Reassessment of priority areas',
                'Targeted neurological corrections',
                'Care plan and session frequency recommendations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
