import HeroSection from "../components/hero-section"
import Navbar from "../components/navbar"
import AboutSection from "../components/sections/about-section"
import DomainsSection from "../components/sections/domains-section"
import ScheduleSection from "../components/sections/schedule-section"
import PrizesSection from "../components/sections/prizes-section"
import SponsorsSection from "../components/sections/sponsors-section"
import FaqsSection from "../components/sections/faqs-section"

export default function Page() {
  return (
    <main className="min-h-dvh scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <ScheduleSection />
      <PrizesSection />
      <SponsorsSection />
      <FaqsSection />
    </main>
  )
}
