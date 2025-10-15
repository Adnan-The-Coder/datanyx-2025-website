'use client'

import { useEffect, useRef, useState } from 'react'

export default function FullscreenPreloader({
  logoSrc = "/assets/DATANYX'25 LOGO.png",
  durationMs = 2800,
  onDone,
}: {
  logoSrc?: string
  durationMs?: number
  onDone: () => void
}) {
  const [pct, setPct] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'fading'>('loading')
  const rafRef = useRef<number | null>(null)
  const fadeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setPct(Math.round(eased * 100))
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setPhase('fading')
        // schedule completion after fade
        fadeTimeoutRef.current = window.setTimeout(() => {
          onDone()
        }, 320)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      if (fadeTimeoutRef.current !== null) clearTimeout(fadeTimeoutRef.current)
    }
  }, [durationMs, onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 320ms ease',
        willChange: 'opacity',
      }}
    >
      <style jsx>{`
        .pre-logo {
          width: clamp(240px, 62vw, 760px);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.25));
        }
      `}</style>

      <img src={logoSrc} alt="DATANYX Logo" className="pre-logo" />

      <div className="mt-8 w-[72vw] max-w-[520px] min-w-[240px]">
        <div className="h-2 rounded-full bg-white/12 overflow-hidden">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${pct}%`, transition: 'width 100ms linear' }}
          />
        </div>
        <div className="mt-2 text-center text-sm sm:text-base text-white/85 font-medium tabular-nums">
          {pct}%
        </div>
      </div>
    </div>
  )
}
