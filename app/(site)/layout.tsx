import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from "next";
import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://rootedintegrativehealth.com"),
  title: "Rooted Integrative Health - NIS",
  description: "Experience integrative medicine that combines the best of conventional and natural healing. We will work with you to address the root causes of health challenges and support your body's natural ability to heal.",
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
    title: "Rooted Integrative Health - NIS",
    description: "Experience integrative medicine that combines the best of conventional and natural healing. We will work with you to address the root causes of health challenges and support your body's natural ability to heal.",
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
    title: "Rooted Integrative Health - NIS",
    description: "Experience integrative medicine that combines the best of conventional and natural healing. We will work with you to address the root causes of health challenges and support your body's natural ability to heal.",
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
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  )
}
