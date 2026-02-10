import type { Meta, StoryObj } from "@storybook/react"
import { BookingWidget, BookingService } from "../../components/booking/bookingWidget"

const mockService: BookingService = {
  name: "Initial Consultation",
  price: 150,
  duration: 60,
}

const meta: Meta<typeof BookingWidget> = {
  title: "Booking/BookingWidget",
  component: BookingWidget,
  argTypes: {
    service: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof BookingWidget>

// Default story with wrapper
export const Default: Story = {
  args: {
    service: mockService,
  },
  render: (args) => (
    <div className="bg-emerald-50 min-h-screen flex items-center justify-center p-8">
      <BookingWidget {...args} />
    </div>
  ),
}
