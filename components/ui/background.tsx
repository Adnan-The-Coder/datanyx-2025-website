"use client";

import Particles from "@/components/ui/Particles";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={700}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default Background;
