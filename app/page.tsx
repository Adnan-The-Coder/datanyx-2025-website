"use client"

import { useEffect, useState } from "react"
import HeroSection from "../components/hero-section"
import Navbar from "../components/navbar"
import AboutSection from "../components/sections/about-section"
import DomainsSection from "../components/sections/domains-section"
import ScheduleSection from "../components/sections/schedule-section"
import PrizesSection from "../components/sections/prizes-section"
import SponsorsSection from "../components/sections/sponsors-section"
import FaqsSection from "../components/sections/faqs-section"
import Organizers from "@/components/sections/organizers"
import Footer from "../components/footer"
import { DoubleStairsPreloader } from '@/components/ui/Preload'

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ensure page starts at top on refresh/load
  useEffect(() => {
    // Clear any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    // Scroll to top
    window.scrollTo(0, 0)
  }, [])

  // Calculate scroll progress (0 to 1) - disappear after half viewport height
  const halfViewportHeight = typeof window !== 'undefined' ? window.innerHeight / 2 : 400
  const scrollProgress = Math.min(scrollY / halfViewportHeight, 1)

  return (
    <>
     {/* <DoubleStairsPreloader /> */}
    <main className="min-h-dvh scroll-smooth dark">
      <Navbar />
      <HeroSection />
      
      {/* Content sections with fade-in effect */}
      <div 
        className="relative z-10"
        style={{ 
          opacity: scrollProgress,
          transition: 'opacity 0.3s ease-out',
          visibility: scrollProgress > 0.1 ? 'visible' : 'hidden'
        }}
      >
        {/* Gradient background overlay for sections */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 pointer-events-none" />
        
        <AboutSection />
        <DomainsSection />
        <ScheduleSection />
        <PrizesSection />
        <SponsorsSection />
        <FaqsSection />
        <Organizers/>
        <Footer />
      </div>
    </main>
    </>
  )
}
