import { Hero } from "../../components/blocks/hero"
import { WhatIsNIS } from "../../components/blocks/what-is-nis"
import { Feature } from "../../components/blocks/feature"
import { Conditions } from "../../components/blocks/conditions"
import { WhatToExpect } from "../../components/blocks/what-to-expect"
import { FAQ } from "../../components/blocks/faq"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end">
      <Hero />
      <WhatIsNIS />
      <Feature />
      <Conditions />
      <WhatToExpect />
      <FAQ />
    </div>
  )
}
