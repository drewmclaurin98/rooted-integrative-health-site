import "./globals.css";
import type { Metadata } from "next";
import { Header } from "../components/layout/header"
import { Footer } from "../components/layout/footer"

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
