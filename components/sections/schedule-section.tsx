const EVENTS = [
  { time: "Day 1 - 10:00", title: "Opening Ceremony", desc: "Kickoff and briefing" },
  { time: "Day 1 - 12:00", title: "Team Formation", desc: "Find teammates and register" },
  { time: "Day 1 - 13:00", title: "Hacking Starts", desc: "Begin building your project" },
  { time: "Day 2 - 18:00", title: "Project Freeze", desc: "Code freeze and submit" },
  { time: "Day 2 - 19:00", title: "Demos & Judging", desc: "Present to judges" },
  { time: "Day 2 - 21:00", title: "Awards & Closing", desc: "Winners announced" },
]

export function ScheduleSection() {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 id="schedule-title" className="text-3xl md:text-4xl font-bold text-balance mb-6 text-foreground">
          Schedule
        </h2>
        <ol className="space-y-3">
          {EVENTS.map((e, idx) => (
            <li key={idx} className="rounded-xl border border-border/60 bg-background/60 p-4 backdrop-blur">
              <details>
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-sm text-muted-foreground">{e.time}</span>
                    <span className="text-foreground font-medium">{e.title}</span>
                  </div>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ScheduleSection
