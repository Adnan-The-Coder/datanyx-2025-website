import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQS = [
  { q: "Who can participate?", a: "Anyone—students, professionals, and makers. Solo or in teams up to 4." },
  { q: "What is the cost?", a: "Free to participate. Registration required." },
  { q: "What should I build?", a: "Anything impactful in the listed domains with a polished demo." },
  {
    q: "Is it remote or in-person?",
    a: "Hybrid—remote participation is supported, with in-person venues in select cities.",
  },
]

export function FaqsSection() {
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 id="faqs-title" className="text-3xl md:text-4xl font-bold text-balance mb-6 text-foreground">
          FAQs
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FaqsSection
