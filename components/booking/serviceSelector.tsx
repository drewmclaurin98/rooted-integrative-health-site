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
      <div className="flex flex-col md:flex-row gap-3">
        {services.map((s) => (
          <button
            key={s.name}
            className={`rounded-xl border p-4 cursor-pointer text-left w-full transition-all ${
              selectedService?.name === s.name
                ? "bg-gradient-primary-start border-primary ring-2 ring-primary/20"
                : "bg-white border-border hover:border-primary hover:bg-gradient-primary-start"
            }`}
            onClick={() => onSelect(s)}
          >
            <p className="text-base font-semibold text-[#2F3231]">{s.name}</p>
            {s.description && (
              <p className="text-sm text-background-muted mt-0.5">{s.description}</p>
            )}
            <p className="text-sm font-medium text-primary mt-3">
              ${s.price} &middot; {s.duration} min
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
