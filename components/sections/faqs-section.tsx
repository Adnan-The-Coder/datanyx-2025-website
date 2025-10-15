import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQS = [
  { q: "What is a Datathon?", a: "A Datathon is a competitive event where participants leverage data science, machine learning, and analytics to solve real-world problems using large datasets. Teams work within a fixed timeframe to analyze data, build models, and present actionable insights or solutions." },
  { q: "What is Datanyx 2.0?", a: "Datanyx 2.0 is a 24-hour Datathon organized by IEEE SMC MJCET in collaboration with AWS Cloud Club MJCET. The event challenges participants to apply their data-driven creativity and technical expertise to develop innovative and impactful solutions" },
  { q: "How can we register for Datanyx 2.0?", a: "Registration is simple. Click the Register button on our website and fill in your team details. Make sure all members’ information is accurate before submitting the form" },
  {
    q: "Will food and accommodation be provided?transportation available?",
    a: "Yes, food will be provided throughout the event. Participants will stay in designated halls under faculty supervision. However, transportation will not be provided; participants are required to manage their own commute.",
  },
  {q:"What are the eligibility criteria for participating?",a:" Datanyx 2.0 is open to undergraduate students. Each team must consist of 2 to 4 members from the same or different institutions."},
  {q:" Is there a participation fee?",a:" Registration is completely free of cost. However, teams that are shortlisted for the final 24-hour Datathon will be required to pay a participation fee of ₹800."},
  {q:" Can we submit more than one problem statement?",a:"No, each team is allowed to work on and submit only one problem statement during Datanyx 2.0."},
  {q:" Can beginners participate?",a:" Absolutely! Datanyx 2.0 welcomes beginners. Mentorship sessions and a pre-Datathon workshop will be conducted to help participants understand the fundamentals of data science and problem-solving."},
  {q:"Will teams get to choose their problem statements?",a:"No, problem statements will be assigned randomly on the day of the event. Once assigned, teams must work on that statement for the duration of the Datathon."},
  {q:"What should we bring for the Datathon?",a:"Participants must bring their laptops, chargers, valid college ID cards, and any other required accessories. Internet access and power points will be provided at the venue."},
  {q:"Can students from different colleges form a team?",a:" Yes! Inter-college teams are allowed and encouraged to promote collaboration and diversity of ideas."},
  {q:"What are the judging criteria?",a:"Projects will be evaluated based on innovation, novelty, technical implementation, relevance to the problem statement, creativity, and presentation quality."},
  {q:"Will there be prizes for winners?",a:" Yes, attractive cash prizes, goodies, and certificates will be awarded to the top-performing teams."},
  {q:" How many teams will be shortlisted and waitlisted?",a:": Out of all registered teams, 15 teams will be shortlisted for the final 24-hour Datathon based on the quality and completeness of registration details. An additional 10 teams will be waitlisted and may be allowed to participate if slots become available."},
  {q:"Will certificates be provided to all participants?",a:"Yes, certificates of participation will be given to all teams that take part in the Datathon, and certificates of excellence will be awarded to winners."},
  {q:"Who can we contact for queries or assistance?",a:"For any questions or support, participants can reach out through the contact form on the website or connect with the organizing team via email or social media handles provided below."},

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
          FAQ'S
        </h1>
        
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
