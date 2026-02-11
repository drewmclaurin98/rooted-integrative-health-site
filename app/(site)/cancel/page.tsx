import Link from "next/link"

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-20">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Cancelled</h1>
          <p className="text-gray-600 mb-6">
            Your payment was not completed. No charges were made. You can try booking again whenever you are ready.
          </p>
          <Link
            href="/booking"
            className="inline-block rounded-lg px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  )
}
