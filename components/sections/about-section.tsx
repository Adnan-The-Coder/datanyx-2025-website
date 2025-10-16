
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import About from '@/components/sections/images'

type Stat = { label: string; value: string }

function parseNumeric(value: string) {
  const match = value.match(/^([^0-9]*)([\d,]+)(.*)$/) // capture any currency prefix
  if (!match) return { prefix: '', num: 0, suffix: '' }
  const prefix = match[1] ?? ''
  const num = parseInt((match[2] || '0').replace(/,/g, ''), 10) || 0
  const suffix = match[3] ?? ''
  return { prefix, num, suffix }
}

function indianFormat(n: number) {
  // Format with Indian grouping (e.g., 100000 -> 1,00,000)
  return n.toLocaleString('en-IN')
}

function useInView<T extends HTMLElement>({
  threshold = 0.25,
  root = null,
  rootMargin = '0px',
}: {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold, root, rootMargin }
    )
    io.observe(el)
    return () => io.unobserve(el)
  }, [threshold, root, rootMargin])

  return { ref, inView }
}

function CountUp({
  to,
  duration = 2200, // medium-slow ms
  formatter = (n: number) => n.toLocaleString('en-IN'),
  className,
  prefix = '',
  suffix = '',
  play = true,
}: {
  to: number
  duration?: number
  formatter?: (n: number) => string
  className?: string
  prefix?: string
  suffix?: string
  play?: boolean
}) {
  const [value, setValue] = useState(0)
  const started = useRef(false)
  const startRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!play || started.current) return
    started.current = true
    const start = performance.now()
    startRef.current = start

    const tick = (t: number) => {
      const elapsed = t - (startRef.current || start)
      const p = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      const current = Math.round(eased * to)
      setValue(current)
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [to, duration, play])

  return (
    <span className={className}>
      {prefix}
      {formatter(value)}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  // Blue-only accents, prize pool explicitly set to ₹100,000+
  const stats: Stat[] = [
    { label: 'Participants', value: '300+' },
    { label: 'Hours', value: '24' },
    { label: 'Projects', value: '100+' },
    { label: 'Prize pool', value: '₹100,000+' }, // explicitly 100k with Indian grouping after animate
    { label: 'Venue', value: 'Ghulam Ahmed Hall, MJCET' },
    { label: 'Mode', value: 'OFFLINE' },
  ]

  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.25 })

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 py-8 md:py-12 relative"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent"></div>
        <div className="absolute top-10 right-1/4 w-1 h-1 rounded-full bg-blue-300 animate-ping"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 rounded-full bg-blue-300/80 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 rounded-full bg-blue-300/70 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1
          className="text-center text-white font-black tracking-wide mb-8 sm:mb-10"
          style={{
            fontFamily: 'Space Age, monospace',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.1,
            color: '#fff',
            textShadow: 'none',
            WebkitTextFillColor: 'initial',
            background: 'none',
          }}
        >
          ABOUT THE EVENT
        </h1>

        <div className="backdrop-blur-sm bg-black/10 rounded-xl p-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
          <div className="space-y-4 max-w-7xl" style={{ fontFamily: 'Orbitron, monospace' }}>
            <p className="text-gray-300 text-lg leading-relaxed">
              Building on the success of its first edition, <span className="text-blue-300 font-semibold">Datanyx 2.0</span> is Telangana&apos;s flagship 24-hour datathon, organized by <span className="text-blue-300">IEEE SMC MJCET</span> and the <span className="text-blue-300">AWS Cloud Club MJCET</span> in collaboration with the Department of CS &amp; AI, MJCET.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This offline high-energy event challenges participants to analyze complex datasets, build machine learning models, and solve real-world problems in a competitive yet collaborative environment.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The thrill begins as problem statements are revealed on the spot, testing creativity, speed, and technical skills. Teams will have <span className="text-blue-300 font-semibold">24 hours</span> to transform ideas into actionable, data-driven solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stats.map((s, i) => {
              const { prefix, num, suffix } = parseNumeric(s.value)
              const isNumeric = /\d/.test(s.value)
              const isPrize = s.label.toLowerCase().includes('prize')
              const isVenue = s.label.toLowerCase().includes('venue')
              const isMode = s.label.toLowerCase().includes('mode')
              const target = isPrize ? 100000 : num // force 100k for prize
              const effectivePrefix = isPrize ? '₹' : prefix
              const effectiveSuffix = suffix || (isPrize ? '+' : '')

              return (
                <div
                  key={s.label}
                  className={`rounded-xl border border-white/10 bg-black/10 p-3 sm:p-4 text-center backdrop-blur-sm hover:border-blue-500/30 transition-colors ${
                    (isVenue || isMode) ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                  style={{
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.10)', // blue-500
                    animation: `pulse 3s infinite ${i * 0.5}s`,
                  }}
                >
                  {isNumeric ? (
                    <div
                      className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      <CountUp
                        to={target}
                        duration={2400} // a bit slower for prize + others
                        formatter={indianFormat}
                        prefix={effectivePrefix}
                        suffix={effectiveSuffix}
                        play={inView} // only start when section is in view
                      />
                    </div>
                  ) : (
                    <div
                      className={`font-bold text-blue-300 ${
                        isVenue ? 'text-sm sm:text-xl leading-tight' : 
                        isMode ? 'text-lg sm:text-2xl' : 
                        'text-xl sm:text-2xl'
                      }`}
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      {s.value}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {s.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
        `}</style>
      </div>
      {/* <About /> */}
    </section>
  )
}

export default AboutSection