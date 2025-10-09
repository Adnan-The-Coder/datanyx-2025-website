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
    <section id="faqs" aria-labelledby="faqs-title" className="scroll-mt-24 py-16 md:py-24 relative">
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-1 h-1 rounded-full bg-blue-300 animate-ping"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 rounded-full bg-purple-300 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-cyan-300 animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-8">
          <div className="h-1 w-8 bg-blue-400 mr-4 rounded-full"></div>
          <h2 id="faqs-title" className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            FAQs
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-blue-400 to-transparent ml-4 rounded-full"></div>
        </div>
        
        <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqsSection
