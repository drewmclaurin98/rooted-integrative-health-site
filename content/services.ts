/**
 * Single source of truth for services / pricing.
 * Consumed by the homepage services preview, the /services page, and the booking flow.
 * The Stripe checkout is keyed on `name` + `price`, so keep those stable once live.
 */

export type Service = {
  id: string
  name: string
  price: number
  duration: number // minutes
  shortDescription: string
  forWho: string
  includes: string[]
}

export const services: Service[] = [
  {
    id: "initial-nis",
    name: "Initial NIS Session",
    price: 150,
    duration: 60,
    shortDescription: "For new clients beginning their NIS experience.",
    forWho: "For new clients beginning their NIS experience.",
    includes: [
      "Initial health history",
      "Neurological assessment",
      "NIS session",
      "Discussion of next steps",
    ],
  },
  {
    id: "follow-up-nis",
    name: "Follow-Up NIS Session",
    price: 100,
    duration: 45,
    shortDescription: "For returning clients continuing their NIS sessions.",
    forWho: "For returning clients continuing their NIS sessions.",
    includes: [
      "Reassessment",
      "NIS session",
      "Review of your experience",
      "Discussion of next steps",
    ],
  },
]

export const getServiceById = (id?: string | null): Service | undefined =>
  id ? services.find((s) => s.id === id) : undefined
