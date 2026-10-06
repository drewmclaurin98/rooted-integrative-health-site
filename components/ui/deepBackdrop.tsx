/**
 * Faint, static NIS pathways drawing for deep-teal bands (page headers, the closing
 * call to action, the footer). One cached SVG file shared by every page; the animated
 * version lives only in the homepage hero (components/blocks/nis-pathways.tsx).
 * Place inside a `relative isolate overflow-hidden` section.
 */
/** Which part of the drawing each band shows, so pages share the colour but not the picture. */
const FOCUS = {
  /** The full crown of pathways (About NIS). */
  canopy: "object-cover object-[50%_30%]",
  /** Roots spreading below the ground line (closing CTA bands, Services). */
  roots: "object-cover object-bottom",
  /** A close-up of one limb of the canopy on the left, behind the photo (About). */
  branch: "object-cover object-[0%_15%] origin-top-left scale-[1.9]",
} as const

type Props = {
  focus?: keyof typeof FOCUS
  className?: string
}

export function DeepBackdrop({ focus = "canopy", className = "" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/nis-pathways.svg"
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full select-none ${FOCUS[focus]} ${className}`}
    />
  )
}
