"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { Badge } from "./ui/badge"
import GalaxyParticles from "./three/galaxy-particles"
import WireframeSphere from "./three/wireframe-sphere"

function useCountdown(targetISO: string) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [remaining, setRemaining] = useState(0) // Initialize with 0 to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setRemaining(target - Date.now())
    const id = setInterval(() => setRemaining(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const clamp = Math.max(0, remaining)
  const d = Math.floor(clamp / (1000 * 60 * 60 * 24))
  const h = Math.floor((clamp / (1000 * 60 * 60)) % 24)
  const m = Math.floor((clamp / (1000 * 60)) % 60)
  const s = Math.floor((clamp / 1000) % 60)
  return { d, h, m, s, done: clamp <= 0, isClient }
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0")
  return (
    <div className="grid grid-cols-1 text-center">
      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground tabular-nums">{v}</span>
      <span className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export function HeroSection() {
  const { d, h, m, s, done, isClient } = useCountdown("2025-11-22T10:00:00Z")
  const sphereRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    let currentScrollY = 0
    let targetScrollY = 0
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
    
    const updateScroll = () => {
      // Smooth interpolation for even smoother animation
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.1)
      
      const halfViewportHeight = window.innerHeight / 2
      const scrollProgress = Math.min(currentScrollY / halfViewportHeight, 1)
      
      // Ultra-smooth easing function
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      const smoothProgress = easeOutQuart(scrollProgress)
      
      const sphereTransformY = smoothProgress * -100
      const sphereOpacity = 1 - smoothProgress
      
      // Direct DOM manipulation for maximum smoothness
      if (sphereRef.current) {
        sphereRef.current.style.transform = `translate3d(0, ${sphereTransformY}vh, 0)`
        sphereRef.current.style.opacity = sphereOpacity.toString()
      }
      
      if (logoRef.current) {
        logoRef.current.style.transform = `translate3d(-50%, calc(-50% + ${sphereTransformY}vh), 0)`
        logoRef.current.style.opacity = sphereOpacity.toString()
      }
      
      if (bottomRef.current) {
        bottomRef.current.style.opacity = smoothProgress.toString()
        bottomRef.current.style.transform = `translate3d(0, ${(1 - smoothProgress) * 20}px, 0)`
        bottomRef.current.style.visibility = scrollProgress > 0 ? 'visible' : 'hidden'
      }
      
      // Continue animation if still scrolling or if there's still interpolation happening
      if (Math.abs(targetScrollY - currentScrollY) > 0.1 || scrollProgress < 1) {
        rafId = requestAnimationFrame(updateScroll)
      } else {
        rafId = 0 // Reset rafId when animation stops
      }
    }
    
    const handleScroll = () => {
      targetScrollY = window.scrollY
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll)
      }
    }
    
    // Initialize with current scroll position
    targetScrollY = window.scrollY
    currentScrollY = window.scrollY
    
    // Start initial animation
    rafId = requestAnimationFrame(updateScroll)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <section id="home" aria-labelledby="datanyx-hero-title" className="relative w-full py-24 md:py-36 overflow-hidden min-h-screen">
      {/* Galaxy Background - Fixed */}
      <GalaxyParticles />
      
      {/* Wireframe Sphere - Scroll animated */}
      <div
        ref={sphereRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <WireframeSphere />
      </div>
      
      {/* Center Image - Scroll animated on top of the sphere */}
      <div 
        ref={logoRef}
        className="fixed pointer-events-none"
        style={{ 
          zIndex: 10,
          top: '50%',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      >
        <img 
          src="/assets/datanyx-logo.png"
          alt="DATANYX Logo"
          className="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[65vw] max-w-[800px] min-w-[320px] h-auto"
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 40px rgba(190, 255, 255, 0.2))',
            marginBottom: '-5rem'
          }}
        />
        
        {/* Countdown Timer Below Logo */}
        <div
          aria-label="Event countdown"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border border-border/60 bg-background/60 px-3 sm:px-4 md:px-5 py-2 sm:py-3 backdrop-blur mb-6"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'
          }}
        >
          {!isClient ? (
            <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">Loading...</span>
          ) : done ? (
            <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">Hackathon is live now!</span>
          ) : (
            <>
              <TimeBlock label="Days" value={d} />
              <span aria-hidden="true" className="text-muted-foreground">
                :
              </span>
              <TimeBlock label="Hours" value={h} />
              <span aria-hidden="true" className="text-muted-foreground">
                :
              </span>
              <TimeBlock label="Minutes" value={m} />
              <span aria-hidden="true" className="text-muted-foreground">
                :
              </span>
              <TimeBlock label="Seconds" value={s} />
            </>
          )}
        </div>
        
        {/* Register Now Button */}
        <a 
          href="https://unstop.com/hackathons/datanyx-muffakham-jah-college-of-engineering-technology-1188761" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <button 
              className="relative px-8 py-3 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
            >
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="pr-2 text-gray-100 font-semibold">Register Now</span>
              </span>
              <span className="pl-2 text-green-400 group-hover:text-green-300 transition duration-200">→</span>
            </button>
          </div>
        </a>
      </div>

      <div 
        ref={bottomRef}
        className="container mx-auto px-4 text-center" 
        style={{ 
          position: 'relative',
          zIndex: 20,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          visibility: 'hidden'
        }}
      >
      </div>
    </section>
  )
}

export default HeroSection
