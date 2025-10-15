import About from "@/components/sections/images"
export function AboutSection() {
  const stats = [
    { label: "Participants", value: "300+" },
    { label: "Hours", value: "24" },
    { label: "Projects", value: "100+" },
    { label: "Prize pool", value: "₹1,00,000+" },
    { label: "Venue", value: "Ghulam Ahmed Hall, MJCET" },
    { label: "Mode", value: "OFFLINE" },

  ]

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-8 md:py-12 relative">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-10 right-1/4 w-1 h-1 rounded-full bg-purple-300 animate-ping"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 rounded-full bg-blue-300 animate-ping" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 rounded-full bg-cyan-300 animate-ping" style={{ animationDelay: "2s" }}></div>
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
          ABOUT THE EVENT
        </h1>
        
        <div className="backdrop-blur-sm bg-black/10 rounded-xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/5">
          <div className="space-y-4 max-w-7xl" style={{fontFamily: "Orbitron, monospace"}}>
            <p className="text-gray-300 text-lg leading-relaxed">
              Building on the success of its first edition, <span className="text-red-300 font-semibold">Datanyx 2.0</span> is Telangana's flagship 24-hour datathon, organized by <span className="text-blue-300">IEEE SMC MJCET</span> and the <span className="text-purple-300">AWS Cloud Club MJCET</span> in collaboration with the Department of CS & AI, MJCET.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              This offline high-energy event challenges participants to analyze complex datasets, build machine learning models, and solve real-world problems in a competitive yet collaborative environment.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              The thrill begins as problem statements are revealed on the spot, testing creativity, speed, and technical skills. Teams will have <span className="text-cyan-300 font-semibold">24 hours</span> to transform ideas into actionable, data-driven solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-black/10 p-4 text-center backdrop-blur-sm hover:border-purple-500/30 transition-colors"
                style={{ 
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.1)",
                  animation: `pulse 3s infinite ${i * 0.5}s`
                }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: "Orbitron, monospace"}}>{s.value}</div>
                <div className="text-xs text-gray-400" style={{fontFamily: "Orbitron, monospace"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
        `}</style>
      </div>
      <About />
    </section>
  )
}

export default AboutSection
