const SPONSORS = new Array(9).fill(0).map((_, i) => ({
  name: `Sponsor ${i + 1}`,
  src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%20${i + 1}`,
}))

export function SponsorsSection() {
  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 id="sponsors-title" className="text-3xl md:text-4xl font-bold text-balance mb-6 text-foreground">
          Sponsors
        </h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SPONSORS.map((s) => (
            <div
              key={s.name}
              className="aspect-[4/1] rounded-xl border border-border/60 bg-background/60 p-3 backdrop-blur flex items-center justify-center"
            >
              <img
                src={s.src || "/placeholder.svg"}
                alt={`${s.name} logo`}
                className="opacity-80 hover:opacity-100 transition-opacity"
                height={64}
                width={160}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection
