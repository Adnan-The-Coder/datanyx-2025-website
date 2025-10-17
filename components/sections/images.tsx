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
                { src: "/assets/datanyx2k24/3.JPG" },
                // { src: "/assets/datanyx2k24/4.JPG" },
                { src: "/assets/datanyx2k24/5.JPG" },
                { src: "/assets/datanyx2k24/6.JPG" },
                { src: "/assets/datanyx2k24/7.JPG" },
                // { src: "/assets/datanyx2k24/8.JPG" },
                { src: "/assets/datanyx2k24/9.JPG" },
                { src: "/assets/datanyx2k24/10.JPG" },
                // { src: "/assets/datanyx2k24/11.JPG" },
                { src: "/assets/datanyx2k24/12.JPG" },
                { src: "/assets/datanyx2k24/13.JPG" },
                { src: "/assets/datanyx2k24/14.JPG" },
                { src: "/assets/datanyx2k24/15.JPG" },
                { src: "/assets/datanyx2k24/16.JPG" },
                { src: "/assets/datanyx2k24/17.JPG" },  
              ],
              direction: "left",
              speed: "slow",
            },
            {
              items:[
              { src: "/assets/datanyx2k24/17.JPG" },
              { src: "/assets/datanyx2k24/16.JPG" },
              { src: "/assets/datanyx2k24/15.JPG" },
              { src: "/assets/datanyx2k24/14.JPG" },
              { src: "/assets/datanyx2k24/13.JPG" },
              { src: "/assets/datanyx2k24/12.JPG" },
              // { src: "/assets/datanyx2k24/11.JPG" },
              { src: "/assets/datanyx2k24/10.JPG" },
              { src: "/assets/datanyx2k24/9.JPG" },
              // { src: "/assets/datanyx2k24/8.JPG" },
              { src: "/assets/datanyx2k24/7.JPG" },
              { src: "/assets/datanyx2k24/6.JPG" },
              { src: "/assets/datanyx2k24/5.JPG" },
              // { src: "/assets/datanyx2k24/4.JPG" },
              { src: "/assets/datanyx2k24/3.JPG" },
              { src: "/assets/datanyx2k24/2.jpg" },
              { src: "/assets/datanyx2k24/1.jpg" }
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
