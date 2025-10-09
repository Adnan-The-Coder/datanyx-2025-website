"use client"

import { useEffect, useMemo, useState } from "react"
import { Badge } from "./ui/badge"
import { ParticleBackground } from "./three/particle-background"
import { FloatingShapes } from "./three/floating-shapes"

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

  return (
    <section id="home" aria-labelledby="datanyx-hero-title" className="relative w-full py-24 md:py-36 overflow-hidden">
      {/* Background 3D */}
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <FloatingShapes />
      </div>

      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          DATANYX Hackathon
        </Badge>

        <h1
          id="datanyx-hero-title"
          className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
        >
          DATANYX 2025
        </h1>

        <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
          Build, innovate, and ship at the DataNyx 2025 Hackathon. Join creators, developers, and designers for a
          weekend of rapid prototyping and polished launches.
        </p>

        {/* Countdown */}
        <div
          aria-label="Event countdown"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-background/60 px-5 py-3 backdrop-blur"
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
      </div>
    </section>
  )
}

export default HeroSection
