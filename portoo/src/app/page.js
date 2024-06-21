
import styles from "./page.module.css"
import { LandingPage } from "./components/LandingPage"
import { SecondSection } from "./components/SecondSection"
export default function Home() {
  return (
    <div>
      <container>
        <LandingPage />
        <SecondSection />
      </container>
    </div>
  )
}
