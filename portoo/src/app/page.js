
import styles from "./page.module.css"
import { LandingPage } from "./components/LandingPage"
import { SecondSection } from "./components/SecondSection"
import { SkillsSection } from "./components/SkillsSection"
import { Experience } from "./components/Experience"
import { WorkSection } from "./components/WorkSection"
import { Footer } from "./components/Footer"
export default function Home() {
  return (
    <div>
      <container>
        <LandingPage />
        <SecondSection />
        <SkillsSection />
        <Experience />
        <WorkSection />
        <Footer />
      </container>
    </div>
  )
}
