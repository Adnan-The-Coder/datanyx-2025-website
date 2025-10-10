import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQS = [
  { q: "What is a Datathon?", a: "A Datathon is a competitive event where participants leverage data science, machine learning, and analytics to solve real-world problems using large datasets. Teams work within a fixed timeframe to analyze data, build models, and present actionable insights or solutions." },
  { q: "What is Datanyx 2.0?", a: "Datanyx 2.0 is a 24-hour Datathon organized by IEEE SMC MJCET in collaboration with AWS Cloud Club MJCET. The event challenges participants to apply their data-driven creativity and technical expertise to develop innovative and impactful solutions" },
  { q: "How can we register for Datanyx 2.0?", a: "Registration is simple. Click the Register button on our website and fill in your team details. Make sure all members’ information is accurate before submitting the form" },
  {
    q: "Will food and accommodation be provided?transportation available?",
    a: "Yes, food will be provided throughout the event. Participants will stay in designated halls under faculty supervision. However, transportation will not be provided; participants are required to manage their own commute.",
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
          <h2 id="faqs-title" className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Space Age, monospace'}}>
            FAQs
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-blue-400 to-transparent ml-4 rounded-full"></div>
        </div>
        
        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300" style={{fontFamily: 'Orbitron, monospace'}}>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqsSection
