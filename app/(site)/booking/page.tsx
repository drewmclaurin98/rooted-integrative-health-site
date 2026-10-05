import type { Metadata } from "next"
import { services } from "@/content/services"
import { BookingWidget, type BookingService } from "@/components/booking/bookingWidget"

export const metadata: Metadata = {
  alternates: { canonical: '/booking' },
  title: "Book an Appointment | Rooted Integrative Health",
  description:
    "Book a Neurological Integrative Systems (NIS) session with Caitlin McLaurin, RN in St. Paul, Minnesota. Choose a service, pick a time, and pay securely.",
}

const bookingServices: BookingService[] = services.map((s) => ({
  id: s.id,
  name: s.name,
  price: s.price,
  duration: s.duration,
  description: s.shortDescription,
}))

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>
}) {
  const { service } = await searchParams

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3">
          Book an Appointment
        </h1>
        <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Choose a service, pick a date and time, and pay securely. No account required.
        </p>
        <BookingWidget services={bookingServices} initialServiceId={service} />
      </div>
    </div>
  )
}
