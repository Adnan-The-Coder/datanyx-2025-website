"use client"
import { CometCard } from "@/components/ui/comet-card"

const DOMAINS = [
  { key: "fintech", title: "FinTech", image: "assets/domain-pics/IMG_2818.JPG", badge: "Finance" },
  { key: "medtech", title: "MedTech", image: "assets/domain-pics/IMG_2816.JPG", badge: "Healthcare" },
  { key: "agrotech", title: "AgroTech", image: "assets/domain-pics/IMG_2817.JPG", badge: "Agriculture" },
  { key: "edtech", title: "EdTech", image: "assets/domain-pics/IMG_2815.JPG", badge: "Education" },
]

function DomainCard({
  title,
  image,
  badge,
}: {
  title: string
  image: string
  badge: string
}) {
  return (
    <CometCard className="w-full">
      <div
        className="my-2 flex w-full flex-col items-stretch rounded-[16px] bg-card p-2 md:p-4"
        aria-label={`${title} domain`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-muted object-cover contrast-100"
              alt={`${title} illustration`}
              src={image || "/placeholder.svg"}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4">
          <div className="text-sm font-semibold text-foreground" style={{fontFamily: 'Orbitron, monospace'}}>{title}</div>
          <div className="text-xs text-muted-foreground" style={{fontFamily: 'Orbitron, monospace'}}>{badge}</div>
        </div>
      </div>
    </CometCard>
  )
}

export function DomainsSection() {
  return (
    <section id="domains" aria-labelledby="domains-title" className="scroll-mt-24 py-8 md:py-12 relative">

      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-30 left-1/5 w-1 h-1 rounded-full bg-cyan-300 animate-ping"></div>
        <div className="absolute top-80 right-1/4 w-1 h-1 rounded-full bg-blue-300 animate-ping" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-30 left-1/2 w-1 h-1 rounded-full bg-purple-300 animate-ping" style={{ animationDelay: '0.7s' }}></div>
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
          DOMAINS
        </h1>
        
        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOMAINS.map((d) => (
              <DomainCard key={d.key} title={d.title} image={d.image} badge={d.badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainsSection
