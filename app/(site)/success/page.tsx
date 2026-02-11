import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end py-20">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your payment was successful and your session has been booked. You will receive a confirmation email shortly.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
