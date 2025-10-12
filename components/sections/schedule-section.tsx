const TIMELINE_EVENTS = [
  { 
    date: "Oct 25", 
    title: "Registrations Start", 
    description: "Begin your journey to DATANYX 2025"
  },
  { 
    date: "Nov 10", 
    title: "Registration Closes", 
    description: "Last chance to secure your spot"
  },
  { 
    date: "Nov 14", 
    title: "Shortlisting Announcement", 
    description: "Selected teams announced"
  },
  { 
    date: "Nov 15", 
    title: "Waitlist Announcement", 
    description: "Waitlisted teams notified"
  },
  { 
    date: "Nov 18", 
    title: "Final RSVP", 
    description: "Confirm your participation"
  },
  { 
    date: "Nov 22", 
    title: "Let's Hack!", 
    description: "The hackathon begins"
  },
]

export function ScheduleSection() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&display=swap');
        
        @font-face {
          font-family: 'Space Age';
          src: url('/fonts/space age.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .glow-line {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4);
        }
        
        .glow-marker {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.9), 0 0 40px rgba(16, 185, 129, 0.5);
        }

        .timeline-card-hover {
          transition: all 0.3s ease;
        }

        .timeline-card-hover:hover {
          transform: translateY(-4px);
        }

        /* Desktop Layout (1024px+) */
        @media (min-width: 1024px) {
          .timeline-container {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .timeline-event {
            margin-bottom: 4rem;
          }

          .timeline-line {
            width: 3px;
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-marker {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-content-left {
            width: calc(50% - 2.5rem);
            padding-right: 2rem;
            text-align: right;
          }

          .timeline-content-right {
            width: calc(50% - 2.5rem);
            padding-left: 2rem;
            margin-left: auto;
            text-align: left;
          }

          .timeline-arrow-left {
            right: -1rem;
          }

          .timeline-arrow-right {
            left: -1rem;
          }
        }

        /* Tablet Layout (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .timeline-container {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .timeline-event {
            margin-bottom: 3rem;
          }

          .timeline-line {
            width: 2px;
            left: 2.5rem;
          }

          .timeline-marker {
            left: 2.5rem;
            transform: translateX(-50%);
          }

          .timeline-content-left,
          .timeline-content-right {
            width: calc(100% - 5rem);
            margin-left: 5rem;
            padding-left: 0;
            padding-right: 1rem;
            text-align: left;
          }

          .timeline-arrow-left,
          .timeline-arrow-right {
            left: -0.875rem;
          }
        }

        /* Mobile Layout (< 768px) */
        @media (max-width: 767px) {
          .timeline-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .timeline-event {
            margin-bottom: 2.5rem;
          }

          .timeline-line {
            width: 2px;
            left: 1.5rem;
          }

          .timeline-marker {
            left: 1.5rem;
            transform: translateX(-50%);
          }

          .timeline-content-left,
          .timeline-content-right {
            width: calc(100% - 4rem);
            margin-left: 4rem;
            padding-left: 0;
            padding-right: 0.75rem;
            text-align: left;
          }

          .timeline-arrow-left,
          .timeline-arrow-right {
            left: -0.75rem;
          }

          .timeline-marker-size {
            width: 1.75rem;
            height: 1.75rem;
          }

          .timeline-marker-inner {
            width: 1.25rem;
            height: 1.25rem;
          }

          .timeline-marker-dot {
            width: 0.875rem;
            height: 0.875rem;
          }
        }

        /* Extra Small Mobile (< 480px) */
        @media (max-width: 479px) {
          .timeline-event {
            margin-bottom: 2rem;
          }

          .section-title-text {
            font-size: 1.5rem;
          }

          .timeline-card-padding {
            padding: 1rem;
          }
        }
      `}</style>

      <section 
        id="schedule" 
        aria-labelledby="schedule-title" 
        className="scroll-mt-24 py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #000000, #0a0a0a)' }}
      >
        {/* Space-themed background effects */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
          <div className="absolute top-40 right-1/4 w-1 h-1 rounded-full bg-green-300 animate-ping" />
          <div className="absolute top-20 left-1/3 w-1 h-1 rounded-full bg-emerald-300 animate-ping" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-40 right-1/3 w-1 h-1 rounded-full bg-teal-300 animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-60 left-1/4 w-1 h-1 rounded-full bg-green-400 animate-ping" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="flex items-center mb-12 md:mb-16 lg:mb-20">
            <div className="h-1 w-6 md:w-8 lg:w-10 bg-green-400 mr-3 md:mr-4 rounded-full flex-shrink-0" />
            <h2 
              id="schedule-title" 
              className="section-title-text text-2xl md:text-3xl lg:text-4xl font-bold text-balance bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap" 
              style={{ fontFamily: 'Space Age, monospace' }}
            >
              Journey to DATANYX 2025
            </h2>
            <div className="h-1 flex-grow bg-gradient-to-r from-green-400 to-transparent ml-3 md:ml-4 rounded-full" />
          </div>
          
          {/* Timeline Container */}
          <div className="timeline-container relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="timeline-line absolute bg-gradient-to-b from-green-500 via-emerald-500 to-green-500 top-0 bottom-0 glow-line" />
            
            {/* Start Label */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 md:-translate-y-12 hidden lg:block">
              <div 
                className="bg-green-500 text-black text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg" 
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                START
              </div>
            </div>
            
            {/* End Label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 md:translate-y-12 hidden lg:block">
              <div 
                className="bg-green-500 text-black text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg" 
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                END
              </div>
            </div>

            {/* Timeline Events */}
            <div>
              {TIMELINE_EVENTS.map((event, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className="timeline-event relative flex items-center">
                    {/* Marker/Node */}
                    <div className="timeline-marker absolute z-20">
                      <div className="timeline-marker-size w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-green-500 flex items-center justify-center glow-marker">
                        <div className="timeline-marker-inner w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-black flex items-center justify-center">
                          <div className="timeline-marker-dot w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 rounded-full bg-green-400 animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`${isLeft ? 'timeline-content-left' : 'timeline-content-right'}`}>
                      <div className="relative group timeline-card-hover">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
                        <div className="relative bg-black/40 backdrop-blur-md timeline-card-padding p-4 md:p-5 lg:p-6 rounded-xl border border-green-500/40 shadow-xl">
                          {/* Date Badge */}
                          <div 
                            className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-green-500 text-xs md:text-sm font-bold text-black mb-3 md:mb-4" 
                            style={{ fontFamily: 'Orbitron, monospace' }}
                          >
                            {event.date}
                          </div>
                          
                          {/* Title */}
                          <h4 
                            className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight" 
                            style={{ fontFamily: 'Orbitron, monospace' }}
                          >
                            {event.title}
                          </h4>
                          
                          {/* Description */}
                          <p 
                            className="text-gray-300 text-sm md:text-base leading-relaxed" 
                            style={{ fontFamily: 'Orbitron, monospace' }}
                          >
                            {event.description}
                          </p>
                          
                          {/* Arrow pointing to timeline */}
                          <div className={`absolute top-1/2 transform -translate-y-1/2 hidden lg:block ${
                            isLeft ? 'timeline-arrow-left' : 'timeline-arrow-right'
                          }`}>
                            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rotate-45 shadow-lg" />
                          </div>
                          
                          {/* Mobile/Tablet Arrow - positioned outside card */}
                          <div className="absolute top-1/2 transform -translate-y-1/2 block lg:hidden timeline-arrow-left timeline-arrow-right">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rotate-45 shadow-lg" />
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
      </section>
    </>
  )
}

export default ScheduleSection