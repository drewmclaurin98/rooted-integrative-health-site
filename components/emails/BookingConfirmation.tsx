// emails/BookingConfirmation.tsx
import { PRACTITIONER_TIMEZONE } from "@/lib/config"

export function BookingConfirmation({
  name,
  service,
  time,
}: {
  name: string
  service: string
  time: string
}) {
  return (
    <div>
      <h1>Booking Confirmed</h1>
      <p>{service}</p>
      <p>
        {new Date(time).toLocaleString("en-US", {
          timeZone: PRACTITIONER_TIMEZONE,
          dateStyle: "full",
          timeStyle: "short",
        })}
      </p>
    </div>
  )
}
