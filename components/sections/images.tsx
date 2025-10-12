"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const About = () => {
  return (
    <section className="relative w-full text-white py-16 overflow-hidden">
      {/* Full-width infinite moving cards */}
      <div className="w-full">
        <InfiniteMovingCards
          rows={[
            {
              items: [
                { src: "/images/1.jpg" },
                { src: "/images/2.jpg" },
                { src: "/images/3.jpg" },
                { src: "/images/4.jpg" },
                { src: "/images/1.jpg" },
                { src: "/images/2.jpg" },
              ],
              direction: "left",
              speed: "fast",
            },
            {
              items: [
                { src: "/images/5.jpg" },
                { src: "/images/6.jpg" },
                { src: "/images/7.jpg" },
                { src: "/images/8.jpg" },
                { src: "/images/5.jpg" },
                { src: "/images/6.jpg" },
              ],
              direction: "right",
              speed: "normal",
            },
          ]}
          pauseOnHover={true}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default About;
