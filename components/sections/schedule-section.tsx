'use client'

import React, { useEffect, useRef, useState } from 'react'

const TIMELINE_EVENTS = [
  { date: 'Oct 25', title: 'Registrations Start', description: 'Begin your journey to DATANYX 2025' },
  { date: 'Nov 10', title: 'Registration Closes', description: 'Last chance to secure your spot' },
  { date: 'Nov 14', title: 'Shortlisting Announcement', description: 'Selected teams announced' },
  { date: 'Nov 15', title: 'Waitlist Announcement', description: 'Waitlisted teams notified' },
  { date: 'Nov 18', title: 'Final RSVP', description: 'Confirm your participation' },
  { date: 'Nov 22', title: "Let's Hack!", description: 'The hackathon begins' },
]

export default function ScheduleSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [windowWidth, setWindowWidth] = useState<number>(1024)

  // New state to store stars data
  const [stars, setStars] = useState<
    { top: number; left: number; animationDelay: number; animationDuration: number }[]
  >([])

  // Set window width and generate stars once on client
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const onResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', onResize)

    const generatedStars = [...Array(30)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: 3 + Math.random() * 3,
    }))
    setStars(generatedStars)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const winH = window.innerHeight
      const sectionTop = rect.top
      const sectionH = rect.height
      const startPoint = winH - 100
      const endPoint = -sectionH * 0.5
      const total = startPoint - endPoint
      const current = startPoint - sectionTop
      const pct = Math.max(0, Math.min(100, (current / total) * 100))
      setScrollProgress(pct)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&display=swap');

        /* Prevent SSR window usage by relying on CSS breakpoints */
        .timeline-spine {
          background: linear-gradient(to bottom, rgba(55, 65, 81, 0.3) 0%, rgba(75, 85, 99, 0.4) 50%, rgba(55, 65, 81, 0.3) 100%);
          width: 3px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
        }
        .pulse-rail {
          position: absolute;
          width: 3px;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 1023px) {
          .timeline-spine,
          .pulse-rail,
          .timeline-marker {
            left: 2.5rem;
            transform: translateX(-50%);
          }
        }
        @media (max-width: 767px) {
          .timeline-spine,
          .pulse-rail {
            width: 2px;
            left: 1.5rem;
          }
          .timeline-marker {
            left: 1.5rem;
            transform: translateX(-50%);
          }
        }

        .pulse-fill {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.5) 100%
          );
          filter: blur(1px);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          transition: height 0.1s linear;
        }
        .pulse-glow {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 30%,
            rgba(255, 255, 255, 0.4) 60%,
            transparent 100%
          );
          filter: blur(6px);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.5), 0 0 90px rgba(255, 255, 255, 0.3);
          animation: pulse-breathe 2s ease-in-out infinite;
        }
        @keyframes pulse-breathe {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scale(1.3);
            opacity: 0.7;
          }
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          animation: particle-rise 3s linear infinite;
          opacity: 0;
        }
        @keyframes particle-rise {
          0% {
            opacity: 0;
            transform: translateY(0) scale(1);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.3);
          }
        }

        .timeline-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .timeline-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .timeline-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(255, 255, 255, 0.2);
        }

        .gradient-halo {
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.4),
            rgba(147, 197, 253, 0.4),
            rgba(196, 181, 253, 0.4),
            rgba(255, 255, 255, 0.4)
          );
          background-size: 300% 300%;
          animation: gradient-shift 4s ease infinite;
        }
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .marker-reveal {
          opacity: 0;
          transform: scale(0);
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .marker-reveal.active {
          opacity: 1;
          transform: scale(1);
        }

        .marker-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2);
          animation: marker-pulse 2s ease-in-out infinite;
        }
        @keyframes marker-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6);
          }
        }

        .energy-ring {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: energy-expand 2s ease-out infinite;
        }
        @keyframes energy-expand {
          0% {
            width: 100%;
            height: 100%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            width: 200%;
            height: 200%;
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }

        .title-glitch {
          position: relative;
          animation: title-flicker 5s infinite;
        }
        @keyframes title-flicker {
          0%,
          100% {
            opacity: 1;
          }
          98% {
            opacity: 1;
          }
          99% {
            opacity: 0.7;
          }
          99.5% {
            opacity: 1;
          }
        }

        .bg-stars {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 4s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="schedule"
        className="scroll-mt-24 py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: 'transparent', minHeight: '100vh' }}
      >
        {/* Background stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="bg-stars"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          {/* Header */}
          <div className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20">
            <div className="relative group">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center tracking-wider px-4"
                style={{
                  fontFamily: 'Space Age, monospace',
                  color: '#fff',
                  textShadow: 'none',
                  WebkitTextFillColor: 'initial',
                  background: 'none'
                }}
              >
                Datanyx 2K25
              </h2>

            </div>
            <p
              className="mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 text-center tracking-[0.3em] font-light opacity-80"
              style={{ fontFamily: 'Orbitron, monospace', textShadow: '0 0 10px rgba(255, 255, 255, 0.3)', animation: 'pulse 3s ease-in-out infinite' }}
            >
              Create. Adapt. Dominate
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            {/* Spine */}
            <div className="timeline-spine" />

            {/* Pulse */}
            <div className="pulse-rail">
              <div className="pulse-fill" style={{ height: `${scrollProgress}%` }} />
              <div
                className="pulse-glow"
                style={{ top: `${scrollProgress}%`, display: scrollProgress > 0 && scrollProgress < 100 ? 'block' : 'none' }}
              />
              {scrollProgress > 5 &&
                [...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{ left: '50%', bottom: 0, animationDelay: `${i * 0.6}s`, animationDuration: `${2 + Math.random()}s` }}
                  />
                ))}
            </div>

            {/* Labels */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 md:-translate-y-12 hidden lg:block z-30">
              <div
                className="text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg"
                style={{ fontFamily: 'Orbitron, monospace', backgroundColor: '#ffffff', color: '#000', boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
              >
                START
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 md:translate-y-12 hidden lg:block z-30">
              <div
                className="text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg"
                style={{ fontFamily: 'Orbitron, monospace', backgroundColor: '#ffffff', color: '#000', boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
              >
                END
              </div>
            </div>

            {/* Events */}
            <div>
              {TIMELINE_EVENTS.map((event, index) => {
                const isLeft = index % 2 === 0
                const eventProgress = (index / (TIMELINE_EVENTS.length - 1)) * 100
                const isVisible = scrollProgress >= eventProgress - 15
                const isActive = scrollProgress >= eventProgress - 8
                return (
                  <div key={index} className="relative flex items-center" style={{ marginBottom: '4rem' }}>
                    {/* Marker */}
                    <div className="timeline-marker z-20">
                      <div
                        className={`marker-reveal ${isActive ? 'active' : ''} relative`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {hoveredIndex === index && (
                          <>
                            <div className="energy-ring" style={{ top: '50%', left: '50%', animationDelay: '0s' }} />
                            <div className="energy-ring" style={{ top: '50%', left: '50%', animationDelay: '0.5s' }} />
                            <div className="energy-ring" style={{ top: '50%', left: '50%', animationDelay: '1s' }} />
                          </>
                        )}
                        <div
                          className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center marker-glow"
                          style={{
                            transition: 'all 0.3s ease',
                            transform: hoveredIndex === index ? 'scale(1.2) rotate(180deg)' : 'scale(1) rotate(0deg)',
                          }}
                        >
                          <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-black flex items-center justify-center">
                            <div className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 rounded-full bg-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`${isLeft ? 'timeline-content-left' : 'timeline-content-right'}`}
                      style={{
                        width:
                          windowWidth >= 1024
                            ? 'calc(50% - 2.5rem)'
                            : windowWidth >= 768
                            ? 'calc(100% - 5rem)'
                            : 'calc(100% - 4rem)',
                        paddingRight: windowWidth >= 1024 && isLeft ? '2rem' : '0rem',
                        paddingLeft: windowWidth >= 1024 && !isLeft ? '2rem' : '0rem',
                        marginLeft: windowWidth >= 1024 ? (isLeft ? '0' : 'auto') : windowWidth >= 768 ? '5rem' : '4rem',
                        textAlign: windowWidth >= 1024 ? (isLeft ? 'right' : 'left') : 'left',
                      }}
                    >
                      <div className={`timeline-card ${isVisible ? 'visible' : ''} relative group`}>
                        <div className="absolute -inset-0.5 gradient-halo rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
                        <div
                          className="relative backdrop-blur-md p-4 md:p-5 lg:p-6 rounded-xl border border-white/40 shadow-xl"
                          style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(12px)' }}
                        >
                          <div
                            className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white text-xs md:text-sm font-bold text-black mb-3 md:mb-4"
                            style={{ fontFamily: 'Orbitron, monospace', boxShadow: '0 0 15px rgba(255,255,255,0.4)' }}
                          >
                            {event.date}
                          </div>
                          <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
                            {event.title}
                          </h4>
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Orbitron, monospace' }}>
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
