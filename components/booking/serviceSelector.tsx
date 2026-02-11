import { BookingService } from "./bookingWidget"

type Props = {
  services: BookingService[]
  selectedService: BookingService | null
  onSelect: (service: BookingService) => void
}

export function ServiceSelector({ services, selectedService, onSelect }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-lg font-medium">Select a service:</label>
      <div className="flex flex-col gap-2">
        {services.map((s) => (
          <button
            key={s.name}
            className={`px-4 py-2 rounded-lg border ${
              selectedService?.name === s.name
                ? "bg-emerald-600 text-white border-emerald-700"
                : "bg-white border-slate-300 hover:bg-emerald-50"
            }`}
            onClick={() => onSelect(s)}
          >
            {s.name} — ${s.price} ({s.duration} min)
          </button>
        ))}
      </div>
    </div>
  )
}
