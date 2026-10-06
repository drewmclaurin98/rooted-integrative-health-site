import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Lato, Lora } from "next/font/google";
import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"
import { site } from "@/content/site"
import { RevealInit } from "@/components/blocks/reveal-init"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

// Fonts: Lora for headings (h1–h3 via globals.css), Lato for body text (Tailwind font-sans).
const lora = Lora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-heading", display: "swap" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body", display: "swap" })

const SITE_TITLE = "Rooted Integrative Health | NIS Practitioner in St. Paul, MN"
const DEFAULT_DESCRIPTION =
  "Gentle, non-invasive Neurological Integrative Systems (NIS) wellness sessions in St. Paul, Minnesota with Caitlin McLaurin, RN, Certified NIS Practitioner."

// Site-wide defaults. Each page sets its own title, description and canonical URL
// (a canonical here would point every page at the homepage).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: SITE_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/rih-square-no-title.png",
    apple: "/rih-square-no-title.png",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/rih-square-no-title.png", width: 200, height: 200, alt: `${site.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/rih-square-no-title.png"],
  },
}

// LocalBusiness structured data for Google. Street address, phone and email are
// added automatically once they're filled in content/site.ts.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  url: site.url,
  description: DEFAULT_DESCRIPTION,
  image: `${site.url}/rih-square-no-title.png`,
  areaServed: { "@type": "City", name: "St. Paul, Minnesota" },
  address: {
    "@type": "PostalAddress",
    ...(site.location.address ? { streetAddress: site.location.address } : {}),
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: "US",
  },
  ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
  ...(site.contact.email ? { email: site.contact.email } : {}),
  sameAs: [site.contact.instagram],
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  // suppressHydrationWarning: the inline script below adds "reveal-ready" to <html> before React loads.
  return (
    <html lang="en" className={`${lora.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="flex min-h-svh flex-col font-sans text-gray-900">
        {/* Set the reveal flag before first paint so marked elements start hidden (no flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-ready')}}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {/* flex-1 keeps the footer at the bottom on short pages; pages can use flex-1 to stretch their background */}
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <RevealInit />
      </body>
    </html>
  )
}
