export function AboutSection() {
  const stats = [
    { label: "Participants", value: "500+" },
    { label: "Hours", value: "48" },
    { label: "Projects", value: "200+" },
    { label: "Prizes", value: "$50k+" },
  ]

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-balance mb-4 text-foreground">
          About the Event
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A weekend of rapid prototyping to build real, impactful products. Meet collaborators, ship polished projects,
          and compete for top prizes.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/60 bg-background/60 p-4 text-center backdrop-blur"
            >
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
