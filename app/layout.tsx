import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Header } from "../components/layout/header"
import { Footer } from "../components/layout/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://rootedintegrativehealth.com"),
  title: "RIH | Integrative Health - Holistic Wellness Care",
  description: "Experience integrative medicine combining conventional and natural healing. Personalized treatment plans for your whole self. Schedule your wellness visit today.",
  icons: {
    icon: "/rih-square-no-title.png",
    apple: "/rih-square-no-title.png",
  },
  keywords: ["integrative medicine", "holistic health", "acupuncture", "herbal medicine", "wellness", "natural healing"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "RIH | Integrative Health - Holistic Wellness Care",
    description: "Experience integrative medicine combining the best of conventional and natural healing.",
    type: "website",
    locale: "en_US",
    url: "https://rootedintegrativehealth.com",
    siteName: "Resilient Integrative Health",
    images: [
      {
        url: "/rih-square-no-title.png",
        width: 200,
        height: 200,
        alt: "RIH Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIH | Integrative Health - Holistic Wellness Care",
    description: "Experience integrative medicine combining conventional and natural healing.",
    images: ["/rih-square-no-title.png"],
  },
  alternates: {
    canonical: "https://rootedintegrativehealth.com",
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
