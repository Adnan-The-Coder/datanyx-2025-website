'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const stairsCount = 5; // number of steps per staircase

export const DoubleStairsPreloader = () => {
  const [show, setShow] = useState(true);

  const topStairsRefs = useRef<HTMLDivElement[]>([]);
  const bottomStairsRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // helper to add refs dynamically
  const addTopRef = (el: HTMLDivElement) => {
    if (el && !topStairsRefs.current.includes(el)) topStairsRefs.current.push(el);
  };
  const addBottomRef = (el: HTMLDivElement) => {
    if (el && !bottomStairsRefs.current.includes(el)) bottomStairsRefs.current.push(el);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.inOut" },
      onComplete: () => {
        // fade out container after hold
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setShow(false),
        });
      },
    });

    // Entry animation for top stairs
    tl.from(
      topStairsRefs.current,
      { y: "-100%", opacity: 0, stagger: 0.1 },
      0
    );

    // Entry animation for bottom stairs
    tl.from(
      bottomStairsRefs.current,
      { y: "100%", opacity: 0, stagger: 0.1 },
      0
    );

    // Hold for 2.5 seconds
    tl.to({}, { duration: 2.5 });

  }, []);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen z-[9999] flex flex-col justify-between items-center bg-black"
    >
      {/* Top stairs */}
      <div className="flex flex-col gap-2 mt-10">
        {Array.from({ length: stairsCount }).map((_, i) => (
          <div
            key={`top-${i}`}
            ref={addTopRef}
            className="w-16 h-4 bg-white rounded-sm"
          />
        ))}
      </div>

      {/* Bottom stairs */}
      <div className="flex flex-col gap-2 mb-10">
        {Array.from({ length: stairsCount }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            ref={addBottomRef}
            className="w-16 h-4 bg-white rounded-sm"
          />
        ))}
      </div>
    </div>
  );
};
