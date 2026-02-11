// lib/availability.ts
export function getAvailableSlots(
  date: Date,
  startHour = 9,
  endHour = 17,
  durationMinutes = 60
) {
  const slots: string[] = []
  const current = new Date(date)
  current.setHours(startHour, 0, 0, 0)

  while (current.getHours() + durationMinutes / 60 <= endHour) {
    slots.push(current.toISOString())
    current.setMinutes(current.getMinutes() + durationMinutes)
  }

  return slots
}
