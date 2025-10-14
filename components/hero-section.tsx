"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import WireframeSphere from "./three/wireframe-sphere"
import StarBorder from "@/components/ui/StarBorder_button"

function useCountdown(targetISO: string) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [remaining, setRemaining] = useState(0)
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

export function HeroSection() {
  const { d, h, m, s, done, isClient } = useCountdown("2025-11-22T10:00:00Z")
  const sphereRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    let currentScrollY = 0
    let targetScrollY = 0
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
    
    const updateScroll = () => {
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.1)
      
      const halfViewportHeight = window.innerHeight / 2
      const scrollProgress = Math.min(currentScrollY / halfViewportHeight, 1)
      
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      const smoothProgress = easeOutQuart(scrollProgress)
      
      const sphereTransformY = smoothProgress * -100
      const sphereOpacity = 1 - smoothProgress
      
      if (sphereRef.current) {
        sphereRef.current.style.transform = `translate3d(0, ${sphereTransformY}vh, 0)`
        sphereRef.current.style.opacity = sphereOpacity.toString()
      }
      
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(-50%, calc(-50% + ${sphereTransformY}vh), 0)`
        contentRef.current.style.opacity = sphereOpacity.toString()
      }
      
      if (bottomRef.current) {
        bottomRef.current.style.opacity = smoothProgress.toString()
        bottomRef.current.style.transform = `translate3d(0, ${(1 - smoothProgress) * 20}px, 0)`
        bottomRef.current.style.visibility = scrollProgress > 0 ? 'visible' : 'hidden'
      }
      
      if (Math.abs(targetScrollY - currentScrollY) > 0.1 || scrollProgress < 1) {
        rafId = requestAnimationFrame(updateScroll)
      } else {
        rafId = 0
      }
    }
    
    const handleScroll = () => {
      targetScrollY = window.scrollY
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll)
      }
    }
    
    targetScrollY = window.scrollY
    currentScrollY = window.scrollY
    
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
    <section 
      id="home" 
      aria-labelledby="datanyx-hero-title" 
      className="relative w-full py-24 md:py-36 overflow-hidden min-h-screen"
    >
      <style jsx>{`
        .logo-image {
          width: 98vw;
          max-width: 98vw;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
        }
        
        @media (min-width: 1024px) {
          .logo-image {
            width: 65vw;
            max-width: 1800px;
          }
        }
        
        @media (min-width: 1920px) {
          .logo-image {
            width: 50vw;
            max-width: 2000px;
          }
        }
      `}</style>

      {/* Logo + Button Container - Animates Together */}
      <div 
        ref={contentRef}
        className="fixed"
        style={{ 
          zIndex: 600,
          top: '50%',
          left: '50%',
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Logo */}
          <img 
            src="/assets/datanyx-logo.png"
            alt="DATANYX Logo"
            className="logo-image"
          />
          
          {/* StarBorder Button */}
          <div className="pointer-events-auto">
            <StarBorder
              as="a"
              href="https://unstop.com/hackathons/datanyx-muffakham-jah-college-of-engineering-technology-1188761"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              speed="6s"
              textSpeed="10s"
              className="cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              Register Now
            </StarBorder>
          </div>
        </div>
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
