import { BackgroundGradient } from "../ui/background-gradient"

export function PrizesSection() {
  return (
    <section id="prizes" aria-labelledby="prizes-title" className="scroll-mt-24 py-16 md:py-24 relative">
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 rounded-full bg-yellow-300 animate-ping"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 rounded-full bg-amber-300 animate-ping" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-20 right-1/2 w-1 h-1 rounded-full bg-orange-300 animate-ping" style={{ animationDelay: '1.3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-8">
          <div className="h-1 w-8 bg-yellow-400 mr-4 rounded-full"></div>
          <h2 id="prizes-title" className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Prizes
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-yellow-400 to-transparent ml-4 rounded-full"></div>
        </div>
        
        <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <BackgroundGradient className="relative rounded-2xl bg-black/70 text-card-foreground p-6 md:p-8 border border-yellow-500/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center">
                    <span className="text-black font-bold text-xl">1st</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-center text-white">Grand Prize</h3>
                <p className="text-center text-gray-300 mt-2">₹12,000</p>
              </BackgroundGradient>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-slate-300 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <BackgroundGradient className="relative rounded-2xl bg-black/70 text-card-foreground p-6 md:p-8 border border-gray-500/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-slate-400 flex items-center justify-center">
                    <span className="text-black font-bold text-xl">2nd</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-center text-white">Runner Up</h3>
                <p className="text-center text-gray-300 mt-2">₹8,000</p>
              </BackgroundGradient>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-700 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <BackgroundGradient className="relative rounded-2xl bg-black/70 text-card-foreground p-6 md:p-8 border border-amber-700/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-700 to-orange-600 flex items-center justify-center">
                    <span className="text-black font-bold text-xl">3rd</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-center text-white">Third Place</h3>
                <p className="text-center text-gray-300 mt-2">₹5,000</p>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrizesSection
