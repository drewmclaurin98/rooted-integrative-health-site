export function Conditions() {
  const conditions = [
    'Chronic Fatigue',
    'Digestive Concerns',
    'Hormonal Imbalance',
    'Stress-Related Symptoms',
    'Persistent Musculoskeletal Discomfort',
    'Brain Fog',
  ]

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro + Headline */}
        <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
          Clients often seek NIS support for:
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight">
          Conditions Commonly Addressed
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-200 px-4 py-4"
            >
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
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
              <span className="text-sm font-medium text-gray-800">{condition}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
          NIS does not diagnose or treat medical conditions. Sessions are intended to support neurological function and the body&apos;s regulatory processes.
        </p>
      </div>
    </section>
  )
}
