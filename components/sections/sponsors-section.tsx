const SPONSORS = [
  {
    name: "AWS",
    src: "/image.png",
    tier: "Platinum Sponsor"
  },
  {
    name: "Kaggle",
    src: `/kaggle.png`,
    tier: "Platinum Sponsor"
  },
  {
    name: "Sponsor 3",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%203`,
    tier: "Gold Sponsor"
  },
  {
    name: "Sponsor 4",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%204`,
    tier: "Silver Sponsor"
  },
  {
    name: "Sponsor 5",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%205`,
    tier: "Silver Sponsor"
  },
  {
    name: "Sponsor 6",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%206`,
    tier: "Silver Sponsor"
  },
  {
    name: "Sponsor 7",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%207`,
    tier: "Bronze Sponsor"
  },
  {
    name: "Sponsor 8",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%208`,
    tier: "Bronze Sponsor"
  },
  {
    name: "Sponsor 9",
    src: `/placeholder.svg?height=64&width=160&query=Sponsor%20Logo%209`,
    tier: "Bronze Sponsor"
  }
]

export function SponsorsSection() {
  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="scroll-mt-24 py-16 md:py-24 relative">
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-30 right-1/5 w-1 h-1 rounded-full bg-pink-300 animate-ping"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 rounded-full bg-fuchsia-300 animate-ping" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 rounded-full bg-rose-300 animate-ping" style={{ animationDelay: '0.7s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-8">
          <div className="h-1 w-8 bg-pink-400 mr-4 rounded-full"></div>
          <h2 id="sponsors-title" className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
            Sponsors
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-pink-400 to-transparent ml-4 rounded-full"></div>
        </div>
        
        <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6 border border-pink-500/20 shadow-lg shadow-pink-500/5">
          {/* Group sponsors by tier */}
          <div className="space-y-10">
            {/* Platinum Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">Platinum Sponsors</h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter(s => s.tier === "Platinum Sponsor").map((s, i) => (
                  <div
                    key={s.name}
                    className="rounded-xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm hover:border-pink-500/30 transition-colors flex flex-col items-center"
                    style={{ 
                      boxShadow: "0 0 20px rgba(236, 72, 153, 0.1)",
                      animation: `float ${3 + i % 2}s ease-in-out infinite ${i * 0.2}s`
                    }}
                  >
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img
                        src={s.src || "/placeholder.svg"}
                        alt={`${s.name} logo`}
                        className="max-h-24 max-w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-medium text-white">{s.name}</h4>
                      <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 text-xs font-semibold text-black">
                        {s.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gold Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">Platinum Sponsors</h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter(s => s.tier === "Gold Sponsor").map((s, i) => (
                  <div
                    key={s.name}
                    className="rounded-xl border border-white/10 bg-black/60 p-5 backdrop-blur-sm hover:border-yellow-500/30 transition-colors flex flex-col items-center"
                    style={{ 
                      boxShadow: "0 0 20px rgba(245, 158, 11, 0.1)",
                      animation: `float ${3 + i % 2}s ease-in-out infinite ${i * 0.2}s`
                    }}
                  >
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img
                        src={s.src || "/placeholder.svg"}
                        alt={`${s.name} logo`}
                        className="max-h-24 max-w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-medium text-white">{s.name}</h4>
                      <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-xs font-semibold text-black">
                        {s.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Silver Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">Platinum Sponsors</h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter(s => s.tier === "Silver Sponsor").map((s, i) => (
                  <div
                    key={s.name}
                    className="rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-sm hover:border-gray-400/30 transition-colors flex flex-col items-center"
                    style={{ 
                      boxShadow: "0 0 15px rgba(148, 163, 184, 0.1)",
                      animation: `float ${3 + i % 2}s ease-in-out infinite ${i * 0.2}s`
                    }}
                  >
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img
                        src={s.src || "/placeholder.svg"}
                        alt={`${s.name} logo`}
                        className="max-h-24 max-w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-base font-medium text-white">{s.name}</h4>
                      <span className="inline-block mt-1 px-2 py-1 rounded-full bg-gradient-to-r from-gray-400 to-slate-300 text-xs font-semibold text-black">
                        {s.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bronze Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">Platinum Sponsors</h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter(s => s.tier === "Bronze Sponsor").map((s, i) => (
                  <div
                    key={s.name}
                    className="rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-sm hover:border-amber-700/30 transition-colors flex flex-col items-center"
                    style={{ 
                      boxShadow: "0 0 15px rgba(180, 83, 9, 0.1)",
                      animation: `float ${3 + i % 2}s ease-in-out infinite ${i * 0.2}s`
                    }}
                  >
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img
                        src={s.src || "/placeholder.svg"}
                        alt={`${s.name} logo`}
                        className="max-h-24 max-w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-white">{s.name}</h4>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 text-xs font-semibold text-black">
                        {s.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}</style>
      </div>
    </section>
  )
}

export default SponsorsSection
