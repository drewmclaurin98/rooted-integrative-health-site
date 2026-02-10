import { Hero } from "../../components/blocks/hero"
import { Feature } from "../../components/blocks/feature"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gradient-primary-start via-gradient-primary-middle to-gradient-primary-end">
      <Hero />
      <Feature />
    </div>
  )
}
