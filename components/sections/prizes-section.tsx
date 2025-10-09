import { BackgroundGradient } from "../ui/background-gradient"

export function PrizesSection() {
  return (
    <section id="prizes" aria-labelledby="prizes-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 id="prizes-title" className="sr-only">
          Prizes
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BackgroundGradient className="rounded-2xl bg-card text-card-foreground p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">1st Prize</h3>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-2xl bg-card text-card-foreground p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">2nd Prize</h3>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-2xl bg-card text-card-foreground p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">3rd Prize</h3>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  )
}

export default PrizesSection
