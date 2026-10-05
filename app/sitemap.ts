import type { MetadataRoute } from "next"
import { site } from "@/content/site"

// Public, indexable pages. Privacy/Disclaimer are noindex; success/cancel are booking-flow pages.
const pages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/about-nis", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/booking", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
