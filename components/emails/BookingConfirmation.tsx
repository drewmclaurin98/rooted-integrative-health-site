// emails/BookingConfirmation.tsx
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
      <p>{new Date(time).toLocaleString()}</p>
    </div>
  )
}
