import { Button } from "./button"
import { bookingCta } from "@/content/navigation"

type Props = {
  /** Preselect a service in the booking flow, e.g. "initial-nis". */
  service?: string
  text?: string
  variant?: "primary" | "secondary" | "white"
  size?: "md" | "lg"
  withArrow?: boolean
  className?: string
}

export function BookingCTA({
  service,
  text,
  variant = "primary",
  size = "lg",
  withArrow = false,
  className,
}: Props) {
  const href = service ? `/booking?service=${service}` : bookingCta.href
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      withArrow={withArrow}
      className={className}
      ariaLabel={bookingCta.ariaLabel}
    >
      {text ?? bookingCta.label}
    </Button>
  )
}
