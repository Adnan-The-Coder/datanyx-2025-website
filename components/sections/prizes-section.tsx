import { EvervaultCard, Icon } from "../ui/evervault-card";

export function PrizesSection() {
  return (
    <section id="prizes" aria-labelledby="prizes-title" className="scroll-mt-24 py-8 md:py-12 relative">
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/3 w-1 h-1 rounded-full bg-yellow-300 animate-ping" />
        <div className="absolute top-60 left-1/4 w-1 h-1 rounded-full bg-amber-300 animate-ping" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-20 right-1/2 w-1 h-1 rounded-full bg-orange-300 animate-ping" style={{ animationDelay: "1.3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-8">
          <div className="h-1 w-8 bg-yellow-400 mr-4 rounded-full" />
          <h2
            id="prizes-title"
            className="text-3xl md:text-4xl font-bold text-balance text-foreground bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Orbitron Light, monospace" }}
          >
            Prizes Per Domain
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-yellow-400 to-transparent ml-4 rounded-full" />
        </div>

        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/5">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
            {/* First Prize */}
            <div className="border border-yellow-400/20 dark:border-yellow-400/20 flex flex-col items-center w-full p-4 relative h-[28rem] bg-black/40 rounded-2xl backdrop-blur-sm">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-yellow-400" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-yellow-400" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-yellow-400" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-yellow-400" />

              <div className="w-full h-full flex flex-col items-center justify-center relative">
                <EvervaultCard text="🥇" className="w-full flex-1" />

                {/* Text overlay inside the card */}
                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                  <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "Orbitron Light, monospace" }}>
                    Grand Prize
                  </h3>
                  <p className="text-lg font-bold text-yellow-400" style={{ fontFamily: "Orbitron Light, monospace" }}>
                    ₹12,000
                  </p>
                </div>
              </div>
            </div>

            {/* Second Prize */}
            <div className="border border-gray-400/20 dark:border-gray-400/20 flex flex-col items-center w-full p-4 relative h-[28rem] bg-black/40 rounded-2xl backdrop-blur-sm">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-gray-400" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-gray-400" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-gray-400" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-gray-400" />

              <div className="w-full h-full flex flex-col items-center justify-center relative">
                <EvervaultCard text="🥈" className="w-full flex-1" />

                {/* Text overlay inside the card */}
                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                  <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "Orbitron Light, monospace" }}>
                    Runner Up
                  </h3>
                  <p className="text-lg font-bold text-gray-300" style={{ fontFamily: "Orbitron Light, monospace" }}>
                    ₹8,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default PrizesSection;
