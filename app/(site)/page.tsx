import type { Metadata } from "next"
import { Hero } from "../../components/blocks/hero"
import { WhatIsNIS } from "../../components/blocks/what-is-nis"
import { Feature } from "../../components/blocks/feature"
import { Conditions } from "../../components/blocks/conditions"
import { WhatToExpect } from "../../components/blocks/what-to-expect"
import { FAQ } from "../../components/blocks/faq"
import { FinalCta } from "../../components/blocks/final-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsNIS />
      {/* One continuous soft teal → sage → off-white wash behind the middle of the page */}
      <div className="bg-gradient-to-b from-gradient-primary-start via-gradient-sage to-gradient-primary-end">
        <Feature />
        <Conditions />
        <WhatToExpect />
        <FAQ />
      </div>
      <FinalCta />
    </>
  )
}
