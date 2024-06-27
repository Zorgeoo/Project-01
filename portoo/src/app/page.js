"use client";
import styles from "./page.module.css";
import { LandingPage } from "./components/LandingPage";
import { SecondSection } from "./components/SecondSection";
import { SkillsSection } from "./components/SkillsSection";
import { Experience } from "./components/Experience";
import { WorkSection } from "./components/WorkSection";
import { Footer } from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark);
    console.log("Hi");
  };
  return (
    <div className={isDark ? "dark" : ""}>
      <container className="dark:text-white">
        <LandingPage toggleDarkMode={handleClick} isDark={isDark} />
        <SecondSection />
        <SkillsSection />
        <Experience />
        <WorkSection />
        <Footer />
      </container>
    </div>
  );
}
