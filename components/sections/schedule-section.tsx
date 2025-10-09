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
    <section id="schedule" aria-labelledby="schedule-title" className="scroll-mt-24 py-24 md:py-36 relative">
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
          <h2 id="schedule-title" className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Journey to DATANYX 2025
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-green-400 to-transparent ml-4 rounded-full"></div>
        </div>
        
        {/* Timeline Container */}
        <div className="mt-20 relative py-32"> {/* Added padding to make room for cards */}
          {/* Horizontal Line */}
          <div className="absolute h-1 bg-gradient-to-r from-green-500 to-emerald-500 top-1/2 left-0 right-0 transform -translate-y-1/2 glow-line"></div>
          
          {/* Dotted Line Overlay */}
          <div className="absolute h-1 top-1/2 left-0 right-0 transform -translate-y-1/2" 
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.3) 50%, transparent 50%)',
              backgroundSize: '20px 1px',
              backgroundRepeat: 'repeat-x',
              mixBlendMode: 'overlay'
            }}>
          </div>
          
          {/* Start and End labels */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
            <div className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded">Start</div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
            <div className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded">End</div>
          </div>

          {/* Timeline Events */}
          <div className="grid grid-cols-6 gap-4 relative">
            {TIMELINE_EVENTS.map((event, index) => {
              const isTop = event.position === 'top';
              
              return (
                <div key={index} className="relative">
                  {/* Marker/Node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg glow-marker">
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`${isTop ? 'mb-24' : 'mt-24'}`}>
                    <div 
                      className={`relative mx-auto w-[90%] md:w-[80%]`}
                      style={{
                        marginTop: isTop ? '-140px' : '30px',
                        marginBottom: isTop ? '30px' : '-140px'
                      }}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                        <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-green-500/30">
                          <div className="inline-block px-3 py-1 rounded-full bg-green-600 text-xs font-semibold text-black mb-2">
                            {event.date}
                          </div>
                          <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                          <p className="text-gray-300 text-sm">{event.description}</p>
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
          height: 3px;
        }
        
        .glow-marker {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.8);
        }
      `}</style>
    </section>
  )
}

export default ScheduleSection
