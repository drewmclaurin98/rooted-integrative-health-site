import type { Meta, StoryObj } from "@storybook/react"
import { BookingWidget, BookingService } from "../../components/booking/bookingWidget"

const services: BookingService[] = [
  { name: "Initial Consultation", price: 150, duration: 60 },
  { name: "Follow-Up Session", price: 100, duration: 45 },
]

const meta: Meta<typeof BookingWidget> = {
  title: "Booking/Widget",
  component: BookingWidget,
}

export default meta
type Story = StoryObj<typeof BookingWidget>

export const Default: Story = {
  args: {
    services,
    mockStripe: true, // enable mock for Storybook
  },
}
