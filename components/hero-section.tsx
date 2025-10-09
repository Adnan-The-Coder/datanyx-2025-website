"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { Badge } from "./ui/badge"
import GalaxyParticles from "./three/galaxy-particles"
import WireframeSphere from "./three/wireframe-sphere"

function useCountdown(targetISO: string) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [remaining, setRemaining] = useState(target - Date.now())

  useEffect(() => {
    const id = setInterval(() => setRemaining(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const clamp = Math.max(0, remaining)
  const d = Math.floor(clamp / (1000 * 60 * 60 * 24))
  const h = Math.floor((clamp / (1000 * 60 * 60)) % 24)
  const m = Math.floor((clamp / (1000 * 60)) % 60)
  const s = Math.floor((clamp / 1000) % 60)
  return { d, h, m, s, done: clamp <= 0 }
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0")
  return (
    <div className="grid grid-cols-1 text-center">
      <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">{v}</span>
      <span className="text-[11px] md:text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export function HeroSection() {
  const { d, h, m, s, done } = useCountdown("2025-12-15T10:00:00Z")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate scroll progress (0 to 1) - disappear after half viewport height
  const halfViewportHeight = typeof window !== 'undefined' ? window.innerHeight / 2 : 400
  const scrollProgress = Math.min(scrollY / halfViewportHeight, 1)
  
  // Calculate sphere and image position and opacity
  const sphereTransformY = scrollProgress * -100 // Move up 100vh
  const sphereOpacity = 1 - scrollProgress // Fade out completely

  return (
    <section id="home" aria-labelledby="datanyx-hero-title" className="relative w-full py-24 md:py-36 overflow-hidden min-h-screen">
      {/* Galaxy Background - Fixed */}
      <GalaxyParticles />
      
      {/* Wireframe Sphere - Scroll animated */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
          transform: `translateY(${sphereTransformY}vh)`,
          opacity: sphereOpacity,
          transition: scrollProgress === 0 ? 'none' : 'opacity 0.1s ease-out',
          pointerEvents: 'none'
        }}
      >
        <WireframeSphere />
      </div>
      
      {/* Center Image - Scroll animated on top of the sphere */}
      <div 
        className="fixed pointer-events-none"
        style={{ 
          zIndex: 10,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, calc(-50% + ${sphereTransformY}vh))`,
          opacity: sphereOpacity,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: scrollProgress === 0 ? 'none' : 'opacity 0.1s ease-out'
        }}
      >
        <img 
          src="/assets/datanyx-logo.png"
          alt="DATANYX Logo"
          style={{
            width: '56vw',
            height: 'auto',
            minWidth: '420px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 40px rgba(190, 255, 255, 0.2))',
            marginBottom: '2rem'
          }}
        />
        
        {/* Countdown Timer Below Logo */}
        <div
          aria-label="Event countdown"
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/60 px-5 py-3 backdrop-blur mb-6"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'
          }}
        >
          {done ? (
            <span className="text-sm md:text-base text-foreground font-medium">Hackathon is live now!</span>
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

      <div className="container mx-auto px-4 text-center" style={{ 
        position: 'relative',
        zIndex: 20,
        opacity: scrollProgress,
        transform: `translateY(${(1 - scrollProgress) * 50}px)`,
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        visibility: scrollProgress > 0.1 ? 'visible' : 'hidden'
      }}>
      </div>
    </section>
  )
}

export default HeroSection
