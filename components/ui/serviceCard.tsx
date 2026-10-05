import type { Service } from "@/content/services"
import { BookingCTA } from "./bookingCTA"
import { CheckIcon } from "./icons"

type Props = {
  service: Service
  ctaText?: string
}

export function ServiceCard({ service, ctaText }: Props) {
  return (
    <div data-reveal className="lift flex flex-col bg-white rounded-2xl border border-gray-200 p-8 shadow-sm h-full">
      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-gray-900">${service.price}</span>
        <span className="text-sm text-gray-500">{service.duration} minutes</span>
      </div>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.forWho}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <BookingCTA
          service={service.id}
          text={ctaText ?? `Book ${service.name.replace(" NIS Session", "")}`}
          size="md"
          className="w-full"
        />
      </div>
    </div>
  )
}
