"use client"
import { CometCard } from "@/components/ui/comet-card"

const DOMAINS = [
  { key: "fintech", title: "FinTech", image: "/fintech-illustration.jpg", badge: "Finance" },
  { key: "medtech", title: "MedTech", image: "/medical-technology-illustration.png", badge: "Healthcare" },
  { key: "agrotech", title: "AgroTech", image: "/agriculture-technology-illustration.jpg", badge: "Agriculture" },
  { key: "edtech", title: "EdTech", image: "/education-technology.png", badge: "Education" },
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
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <div className="text-xs text-muted-foreground">{badge}</div>
        </div>
      </div>
    </CometCard>
  )
}

export function DomainsSection() {
  return (
    <section id="domains" aria-labelledby="domains-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 id="domains-title" className="text-3xl md:text-4xl font-bold text-balance mb-8 text-foreground">
          Domains
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((d) => (
            <DomainCard key={d.key} title={d.title} image={d.image} badge={d.badge} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DomainsSection
