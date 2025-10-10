const TIMELINE_EVENTS = [
  { 
    date: "Oct 25", 
    title: "Registrations Start", 
    description: "Begin your journey to DATANYX 2025",
    position: "bottom"
  },
  { 
    date: "Nov 10", 
    title: "Registration Closes", 
    description: "Last chance to secure your spot",
    position: "top"
  },
  { 
    date: "Nov 14", 
    title: "Shortlisting Announcement", 
    description: "Selected teams announced",
    position: "bottom"
  },
  { 
    date: "Nov 15", 
    title: "Waitlist Announcement", 
    description: "Waitlisted teams notified",
    position: "top"
  },
  { 
    date: "Nov 18", 
    title: "Final RSVP", 
    description: "Confirm your participation",
    position: "bottom"
  },
  { 
    date: "Nov 22", 
    title: "Let's Hack!", 
    description: "The hackathon begins",
    position: "top"
  },
]

export function ScheduleSection() {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="scroll-mt-24 py-8 md:py-12 relative">
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-40 right-1/4 w-1 h-1 rounded-full bg-green-300 animate-ping"></div>
        <div className="absolute top-20 left-1/3 w-1 h-1 rounded-full bg-emerald-300 animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 rounded-full bg-teal-300 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 mt-12">
        <div className="flex items-center mb-16">
          <div className="h-1 w-8 bg-green-400 mr-4 rounded-full"></div>
          <h2 id="schedule-title" className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" style={{fontFamily: 'Space Age, monospace'}}>
            Journey to DATANYX 2025
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-green-400 to-transparent ml-4 rounded-full"></div>
        </div>
        
        {/* Vertical Timeline Container */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute w-1 bg-gradient-to-b from-green-500 to-emerald-500 top-0 bottom-0 left-1/2 transform -translate-x-1/2 glow-line"></div>
          
          {/* Start label */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded" style={{fontFamily: 'Orbitron, monospace'}}>Start</div>
          </div>
          
          {/* End label */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
            <div className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded" style={{fontFamily: 'Orbitron, monospace'}}>End</div>
          </div>

          {/* Timeline Events */}
          <div className="space-y-12 py-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex items-center">
                  {/* Marker/Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg glow-marker">
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card - Alternating Left/Right */}
                  <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8 ml-auto'}`}>
                    <div className={`relative group ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                      <div className="relative bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-green-500/30">
                        <div className={`inline-block px-3 py-1 rounded-full bg-green-600 text-xs font-semibold text-black mb-3 ${isLeft ? '' : ''}`} style={{fontFamily: 'Orbitron, monospace'}}>
                          {event.date}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Orbitron, monospace'}}>{event.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Orbitron, monospace'}}>{event.description}</p>
                        
                        {/* Arrow pointing to center line */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                          isLeft 
                            ? 'right-0 translate-x-full' 
                            : 'left-0 -translate-x-full'
                        }`}>
                          <div className={`w-4 h-4 bg-green-500 rotate-45 ${
                            isLeft ? '-mr-2' : '-ml-2'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .glow-line {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.9);
          width: 3px;
        }
        
        .glow-marker {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.8);
        }
        
        @media (max-width: 768px) {
          .timeline-card {
            width: 100% !important;
            margin-left: 0 !important;
            padding-left: 2rem !important;
            padding-right: 1rem !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ScheduleSection
