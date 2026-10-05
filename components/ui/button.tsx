import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/cn"
import { ArrowRightIcon } from "./icons"

type Variant = "primary" | "secondary" | "white"
type Size = "md" | "lg"

const base =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200"

const variants: Record<Variant, string> = {
  primary: "bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl",
  secondary: "border-2 border-primary text-primary hover:bg-primary/10",
  white: "bg-white text-primary hover:bg-gray-100",
}

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
}

export function buttonClasses(variant: Variant = "primary", size: Size = "lg", className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

type Props = {
  href?: string
  children: ReactNode
  variant?: Variant
  size?: Size
  withArrow?: boolean
  className?: string
  external?: boolean
  ariaLabel?: string
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  withArrow = false,
  className,
  external = false,
  ariaLabel,
}: Props) {
  const classes = buttonClasses(variant, size, className)
  const content = (
    <>
      {children}
      {withArrow && <ArrowRightIcon className="ml-2 w-5 h-5" />}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <span className={classes} aria-label={ariaLabel}>
      {content}
    </span>
  )
}
