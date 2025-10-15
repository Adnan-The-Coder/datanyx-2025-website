"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  rows,
  pauseOnHover = true,
  className,
}: {
  rows: {
    items: { src: string; alt?: string }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
  }[];
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-4 w-full", 
        className
      )}
    >
      {rows.map((row, idx) => (
        <InfiniteMovingRow
          key={idx}
          items={row.items}
          direction={row.direction}
          speed={row.speed}
          pauseOnHover={pauseOnHover}
        />
      ))}
    </div>
  );
};

const InfiniteMovingRow = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover,
}: {
  items: { src: string; alt?: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    
    // Duplicate items multiple times for seamless infinite scroll
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current!.appendChild(duplicatedItem);
    });
    
    // Add one more set for ultra-smooth looping
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current!.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "30s" : speed === "normal" ? "50s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-3",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[200px] h-[130px] md:w-[280px] md:h-[180px] shrink-0 overflow-hidden rounded-xl border border-zinc-700/50 dark:border-zinc-800/50"
          >
            <img
              src={item.src}
              alt={item.alt || `Image ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
