"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { Badge } from "./ui/badge"
// import GalaxyParticles from "./three/galaxy-particles"
import Particles from '@/components/ui/Particles';
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
      {/* <GalaxyParticles /> */}

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={700}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      
      {/* Wireframe Sphere - Scroll animated */}
      {/* <div
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
      > */}
        {/* <WireframeSphere /> */}
      {/* </div> */}
      
      {/* Center Image - Scroll animated on top of the sphere */}
      <div 
        ref={logoRef}
        className="fixed pointer-events-none"
        style={{ 
          zIndex: 600,
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


// "use client"

// import { useEffect, useMemo, useState, useRef } from "react"
// import GalaxyParticles from "./three/galaxy-particles"
// import WireframeSphere from "./three/wireframe-sphere"
// import Particles from '@/components/ui/Particles';
// import Link from "next/link"
// import Image from "next/image"

// function useCountdown(targetISO: string) {
//   const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
//   const [remaining, setRemaining] = useState(0)
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//     setRemaining(target - Date.now())
//     const id = setInterval(() => setRemaining(target - Date.now()), 1000)
//     return () => clearInterval(id)
//   }, [target])

//   const clamp = Math.max(0, remaining)
//   const d = Math.floor(clamp / (1000 * 60 * 60 * 24))
//   const h = Math.floor((clamp / (1000 * 60 * 60)) % 24)
//   const m = Math.floor((clamp / (1000 * 60)) % 60)
//   const s = Math.floor((clamp / 1000) % 60)
//   return { d, h, m, s, done: clamp <= 0, isClient }
// }

// function TimeBlock({ label, value }: { label: string; value: number }) {
//   const v = String(value).padStart(2, "0")
//   return (
//     <div className="flex flex-col items-center">
//       <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tabular-nums leading-none">
//         {v}
//       </span>
//       <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400 mt-1 uppercase tracking-wider">
//         {label}
//       </span>
//     </div>
//   )
// }

// export function HeroSection() {
//   const { d, h, m, s, done, isClient } = useCountdown("2025-11-22T10:00:00Z")
//   const sphereRef = useRef<HTMLDivElement>(null)
//   const logoRef = useRef<HTMLDivElement>(null)
//   const bottomRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     let rafId: number
//     let currentScrollY = 0
//     let targetScrollY = 0
//     const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
    
//     const updateScroll = () => {
//       currentScrollY = lerp(currentScrollY, targetScrollY, 0.1)
      
//       const halfViewportHeight = window.innerHeight / 2
//       const scrollProgress = Math.min(currentScrollY / halfViewportHeight, 1)
      
//       const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
//       const smoothProgress = easeOutQuart(scrollProgress)
      
//       const sphereTransformY = smoothProgress * -100
//       const sphereOpacity = 1 - smoothProgress
      
//       if (sphereRef.current) {
//         sphereRef.current.style.transform = `translate3d(0, ${sphereTransformY}vh, 0)`
//         sphereRef.current.style.opacity = sphereOpacity.toString()
//       }
      
//       if (logoRef.current) {
//         logoRef.current.style.transform = `translate3d(-50%, calc(-50% + ${sphereTransformY}vh), 0)`
//         logoRef.current.style.opacity = sphereOpacity.toString()
//       }
      
//       if (bottomRef.current) {
//         bottomRef.current.style.opacity = smoothProgress.toString()
//         bottomRef.current.style.transform = `translate3d(0, ${(1 - smoothProgress) * 20}px, 0)`
//         bottomRef.current.style.visibility = scrollProgress > 0 ? 'visible' : 'hidden'
//       }
      
//       if (Math.abs(targetScrollY - currentScrollY) > 0.1 || scrollProgress < 1) {
//         rafId = requestAnimationFrame(updateScroll)
//       } else {
//         rafId = 0
//       }
//     }
    
//     const handleScroll = () => {
//       targetScrollY = window.scrollY
//       if (!rafId) {
//         rafId = requestAnimationFrame(updateScroll)
//       }
//     }
    
//     targetScrollY = window.scrollY
//     currentScrollY = window.scrollY
//     rafId = requestAnimationFrame(updateScroll)
    
//     window.addEventListener('scroll', handleScroll, { passive: true })
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       if (rafId) {
//         cancelAnimationFrame(rafId)
//       }
//     }
//   }, [])

//   return (
//     <section id="home" aria-labelledby="datanyx-hero-title" className="relative w-full py-24 md:py-36 overflow-hidden min-h-screen">
//       {/* Galaxy Background - Fixed */}
//       {/* <GalaxyParticles /> */}

//       <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//          <Particles
//            particleColors={['#ffffff', '#ffffff']}
//            particleCount={700}
//           particleSpread={10}
//           speed={0.2}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//      </div>
      
//       {/* Wireframe Sphere - Scroll animated */}
//       <div
//         ref={sphereRef}
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           width: '100%',
//           maxWidth: '100%',
//           height: '100vh',
//           zIndex: 2,
//           willChange: 'transform, opacity',
//           backfaceVisibility: 'hidden',
//           pointerEvents: 'none'
//         }}
//       >
//         <WireframeSphere />
//       </div>
      
//       {/* Center Content - Scroll animated on top of the sphere */}
//       <div 
//         ref={logoRef}
//         className="fixed pointer-events-none w-full"
//         style={{ 
//           zIndex: 10,
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           willChange: 'transform, opacity',
//           backfaceVisibility: 'hidden',
//           padding: '0 1rem',
//           maxWidth: '100%',
//           boxSizing: 'border-box',
//           gap: 'clamp(1.5rem, 3vw, 3rem)'
//         }}
//       >
//         {/* Logo */}
//         <div className="w-full flex justify-center">
//           <Image 
//             src="/assets/datanyx-logo.png"
//             alt="DATANYX Logo"
//             width={800}
//             height={400}
//             priority
//             className="w-full h-auto"
//             style={{
//               objectFit: 'contain',
//               filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 40px rgba(190, 255, 255, 0.2))',
//               maxWidth: 'min(95vw, 800px)',
//               minWidth: '240px'
//             }}
//           />
//         </div>
        
//         {/* Countdown Timer */}
//         <div
//           aria-label="Event countdown"
//           className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/70 backdrop-blur-xl mx-auto shadow-2xl"
//           style={{
//             padding: 'clamp(0.75rem, 2vw, 1.75rem) clamp(1.25rem, 3vw, 3rem)',
//             gap: 'clamp(0.75rem, 2vw, 2rem)',
//             boxShadow: '0 0 40px rgba(255, 255, 255, 0.15), 0 0 80px rgba(7, 208, 248, 0.1), inset 0 0 30px rgba(255, 255, 255, 0.05)',
//             maxWidth: '95%',
//             border: '1px solid rgba(255, 255, 255, 0.2)'
//           }}
//         >
//           {!isClient ? (
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium">Loading...</span>
//           ) : done ? (
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium">Hackathon is live now!</span>
//           ) : (
//             <>
//               <TimeBlock label="Days" value={d} />
//               <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-500 leading-none">:</span>
//               <TimeBlock label="Hours" value={h} />
//               <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-500 leading-none">:</span>
//               <TimeBlock label="Minutes" value={m} />
//               <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-500 leading-none">:</span>
//               <TimeBlock label="Seconds" value={s} />
//             </>
//           )}
//         </div>
        
//         {/* Register Now Button */}
//         <Link 
//           href="https://unstop.com/hackathons/datanyx-muffakham-jah-college-of-engineering-technology-1188761" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="pointer-events-auto"
//         >
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
//             <button 
//               className="relative bg-black rounded-xl leading-none flex items-center border border-white/10"
//               style={{
//                 padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(2rem, 4vw, 3rem)'
//               }}
//             >
//               <span className="flex items-center gap-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide">
//                   Register Now
//                 </span>
//                 <span className="text-green-400 group-hover:text-green-300 transition duration-200 text-lg sm:text-xl md:text-2xl font-bold">
//                   →
//                 </span>
//               </span>
//             </button>
//           </div>
//         </Link>
//       </div>

//       <div 
//         ref={bottomRef}
//         className="container mx-auto px-4 text-center" 
//         style={{ 
//           position: 'relative',
//           zIndex: 20,
//           willChange: 'transform, opacity',
//           backfaceVisibility: 'hidden',
//           visibility: 'hidden'
//         }}
//       >
//       </div>
//     </section>
//   )
// }

// export default HeroSection