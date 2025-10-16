'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import StarBorder from '@/components/ui/StarBorder_button'
// import WireframeSphere from './three/wireframe-sphere'

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

function TimeBlock({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, '0')
  return (
    <div className="grid grid-cols-1 text-center">
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tabular-nums">
        {v}
      </span>
      <span className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function HeroSection() {
  const { d, h, m, s, done, isClient } = useCountdown('2025-11-22T10:00:00Z')
  const sphereRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0 as number
    let currentScrollY = window.scrollY
    let targetScrollY = window.scrollY

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

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
        sphereRef.current.style.opacity = String(sphereOpacity)
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(-50%, calc(-50% + ${sphereTransformY}vh), 0)`
        contentRef.current.style.opacity = String(sphereOpacity)
      }

      if (bottomRef.current) {
        if (scrollProgress > 0) bottomRef.current.style.visibility = 'visible'
        bottomRef.current.style.opacity = String(smoothProgress)
        bottomRef.current.style.transform = `translate3d(0, ${(1 - smoothProgress) * 20}px, 0)`
      }

      if (Math.abs(targetScrollY - currentScrollY) > 0.1 || scrollProgress < 1) {
        rafId = requestAnimationFrame(updateScroll)
      } else {
        rafId = 0
      }
    }

    const handleScroll = () => {
      targetScrollY = window.scrollY
      if (!rafId) rafId = requestAnimationFrame(updateScroll)
    }

    // Kick off one frame and attach listener
    rafId = requestAnimationFrame(updateScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
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
          width: 82vw;         /* larger on mobile */
          max-width: 560px;    /* sensible cap */
          min-width: 260px;    /* ensure visibility on very small screens */
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.3));
        }

        @media (min-width: 640px) { /* sm */
          .logo-image {
            width: 72vw;
            max-width: 640px;
          }
        }

        @media (min-width: 768px) { /* md */
          .logo-image {
            width: 60vw;
            max-width: 760px;
          }
        }

        @media (min-width: 1024px) { /* lg */
          .logo-image {
            width: 42vw;
            max-width: 850px;
          }
        }

        @media (min-width: 1536px) { /* 2xl */
          .logo-image {
            width: 34vw;
            max-width: 1000px;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            top: 50% !important; /* bring content slightly higher on tiny phones */
          }
        }
      `}</style>

      {/* Wireframe Sphere placeholder with correct initial paint */}
      <div
        ref={sphereRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
          transform: 'translate3d(0, 0, 0)',   // default so no flash
          opacity: 1,                           // default so no flash
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* <WireframeSphere /> */}
      </div>

      {/* Logo + Countdown + Button - with initial centered transform */}
      <div
        ref={contentRef}
        className="fixed hero-content"
        style={{
          zIndex: 600,
          top: '52%',                            // slightly higher default
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)', // default so no flash
          opacity: 1,                               // default
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Logo */}
          <img
            src="/assets/datanyx25logo.png"
            alt="DATANYX Logo"
            className="logo-image"
          />

          {/* Countdown Timer Below Logo */}
          <div
            aria-label="Event countdown"
            className="inline-flex items-center justify-center gap-3 sm:gap-3 rounded-xl border border-border/60 bg-background/60 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3.5 backdrop-blur"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))' }}
          >
            {!isClient ? (
              <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                Loading...
              </span>
            ) : done ? (
              <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                Hackathon is live now!
              </span>
            ) : (
              <>
                <TimeBlock label="Days" value={d} />
                <span aria-hidden="true" className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                  :
                </span>
                <TimeBlock label="Hours" value={h} />
                <span aria-hidden="true" className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                  :
                </span>
                <TimeBlock label="Minutes" value={m} />
                <span aria-hidden="true" className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                  :
                </span>
                <TimeBlock label="Seconds" value={s} />
              </>
            )}
          </div>

          {/* Register Now Button */}
          <div className="pointer-events-auto">
            <StarBorder
              as="a"
              href="https://unstop.com/hackathons/datanyx-muffakham-jah-college-of-engineering-technology-1188761"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              speed="6s"
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
          visibility: 'hidden',
        }}
      />
    </section>
  )
}

export default HeroSection
