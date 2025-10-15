"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const About = () => {
  return (
    <section className="relative w-full text-white py-16 overflow-hidden">
      <div className="w-full">
        <InfiniteMovingCards
          rows={[
            {
              items: [
                { src: "/assets/datanyx2k24/1.jpg" },
                { src: "/assets/datanyx2k24/2.jpg" },
                { src: "/assets/datanyx2k24/4.jpg" },
                { src: "/assets/datanyx2k24/5.jpg" },
                { src: "/assets/datanyx2k24/6.jpg" },
                { src: "/assets/datanyx2k24/7.JPG" },
                { src: "/assets/datanyx2k24/8.JPG" },
                { src: "/assets/datanyx2k24/9.JPG" },
                { src: "/assets/datanyx2k24/14.JPG" },
                { src: "/assets/datanyx2k24/15.JPG" },
                { src: "/assets/datanyx2k24/16.JPG" },
                { src: "/assets/datanyx2k24/17.JPG" },
                { src: "/assets/datanyx2k24/18.JPG" },
                { src: "/assets/datanyx2k24/19.JPG" },
                { src: "/assets/datanyx2k24/23.JPG" },
                { src: "/assets/datanyx2k24/24.JPG" },
                { src: "/assets/datanyx2k24/25.JPG" },
                { src: "/assets/datanyx2k24/26.JPG" },
                { src: "/assets/datanyx2k24/27.JPG" },
                { src: "/assets/datanyx2k24/28.JPG" },
                { src: "/assets/datanyx2k24/29.JPG" },
                { src: "/assets/datanyx2k24/30.JPG" },
                { src: "/assets/datanyx2k24/31.JPG" },
                { src: "/assets/datanyx2k24/32.JPG" },
                { src: "/assets/datanyx2k24/33.JPG" },
                { src: "/assets/datanyx2k24/35.JPG" },
                { src: "/assets/datanyx2k24/36.JPG" },
                { src: "/assets/datanyx2k24/37.JPG" },
                { src: "/assets/datanyx2k24/38.JPG" },
                { src: "/assets/datanyx2k24/39.JPG" },
                { src: "/assets/datanyx2k24/40.JPG" },
                { src: "/assets/datanyx2k24/41.JPG" },
                { src: "/assets/datanyx2k24/43.JPG" },
                { src: "/assets/datanyx2k24/44.JPG" },
                { src: "/assets/datanyx2k24/45.JPG" },
                { src: "/assets/datanyx2k24/46.JPG" },
                { src: "/assets/datanyx2k24/47.JPG" },
                { src: "/assets/datanyx2k24/48.JPG" },
                { src: "/assets/datanyx2k24/49.JPG" },
                { src: "/assets/datanyx2k24/50.JPG" },
                { src: "/assets/datanyx2k24/51.JPG" },
                { src: "/assets/datanyx2k24/52.JPG" },
              ],
              direction: "left",
              speed: "slow",
            },
            {
              items: [
                { src: "/assets/datanyx2k24/52.JPG" },
                { src: "/assets/datanyx2k24/51.JPG" },
                { src: "/assets/datanyx2k24/50.JPG" },
                { src: "/assets/datanyx2k24/49.JPG" },
                { src: "/assets/datanyx2k24/48.JPG" },
                { src: "/assets/datanyx2k24/47.JPG" },
                { src: "/assets/datanyx2k24/46.JPG" },
                { src: "/assets/datanyx2k24/45.JPG" },
                { src: "/assets/datanyx2k24/44.JPG" },
                { src: "/assets/datanyx2k24/43.JPG" },
                { src: "/assets/datanyx2k24/41.JPG" },
                { src: "/assets/datanyx2k24/40.JPG" },
                { src: "/assets/datanyx2k24/39.JPG" },
                { src: "/assets/datanyx2k24/38.JPG" },
                { src: "/assets/datanyx2k24/37.JPG" },
                { src: "/assets/datanyx2k24/36.JPG" },
                { src: "/assets/datanyx2k24/35.JPG" },
                { src: "/assets/datanyx2k24/33.JPG" },
                { src: "/assets/datanyx2k24/32.JPG" },
                { src: "/assets/datanyx2k24/31.JPG" },
                { src: "/assets/datanyx2k24/30.JPG" },
                { src: "/assets/datanyx2k24/29.JPG" },
                { src: "/assets/datanyx2k24/28.JPG" },
                { src: "/assets/datanyx2k24/27.JPG" },
                { src: "/assets/datanyx2k24/26.JPG" },
                { src: "/assets/datanyx2k24/25.JPG" },
                { src: "/assets/datanyx2k24/24.JPG" },
                { src: "/assets/datanyx2k24/19.JPG" },
                { src: "/assets/datanyx2k24/18.JPG" },
                { src: "/assets/datanyx2k24/17.JPG" },
                { src: "/assets/datanyx2k24/16.JPG" },
                { src: "/assets/datanyx2k24/15.JPG" },
                { src: "/assets/datanyx2k24/14.JPG" },
                { src: "/assets/datanyx2k24/9.JPG" },
                { src: "/assets/datanyx2k24/8.JPG" },
                { src: "/assets/datanyx2k24/7.JPG" },
                { src: "/assets/datanyx2k24/6.jpg" },
                { src: "/assets/datanyx2k24/5.jpg" },
                { src: "/assets/datanyx2k24/4.jpg" },
                { src: "/assets/datanyx2k24/2.jpg" },
                { src: "/assets/datanyx2k24/1.jpg" },
              ],
              direction: "right",
              speed: "slow",
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
