// "use client";

// import React from "react";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// const About = () => {
//   return (
//     <section className="relative w-full text-white py-16 overflow-hidden">
//       {/* Full-width infinite moving cards */}
//       <div className="w-full">
//         <InfiniteMovingCards
//           rows={[
//             {
//               items: [
//                 { src: "/assets/datanyx2k24/1.jpg" },
//                 { src: "/assets/datanyx2k24/2.jpg" },
//                 { src: "/assets/datanyx2k24/3.jpg" },
//                 { src: "/assets/datanyx2k24/4.jpg" },
//                 { src: "/assets/datanyx2k24/5.jpg" },
//                 { src: "/assets/datanyx2k24/6.jpg" },
//                 { src: "/assets/datanyx2k24/7.jpg" },
//                 { src: "/assets/datanyx2k24/8.jpg" },
//                 { src: "/assets/datanyx2k24/9.jpg" },
//                 { src: "/assets/datanyx2k24/14.jpg" },
//                 { src: "/assets/datanyx2k24/15.jpg" },
//                 { src: "/assets/datanyx2k24/16.jpg" },
//                 { src: "/assets/datanyx2k24/17.jpg" },
//                 { src: "/assets/datanyx2k24/18.jpg" },
//                 { src: "/assets/datanyx2k24/19.jpg" },
//                 { src: "/assets/datanyx2k24/20.jpg" },
//                 { src: "/assets/datanyx2k24/21.jpg" },
//                 { src: "/assets/datanyx2k24/22.jpg" },
//                 { src: "/assets/datanyx2k24/23.jpg" },
//                 { src: "/assets/datanyx2k24/24.jpg" },
//                 { src: "/assets/datanyx2k24/25.jpg" },
//                 { src: "/assets/datanyx2k24/26.jpg" },
//                 { src: "/assets/datanyx2k24/27.jpg" },
//                 { src: "/assets/datanyx2k24/28.jpg" },
//                 { src: "/assets/datanyx2k24/29.jpg" },
//                 { src: "/assets/datanyx2k24/30.jpg" },
//                 { src: "/assets/datanyx2k24/31.jpg" },
//                 { src: "/assets/datanyx2k24/32.jpg" },
//                 { src: "/assets/datanyx2k24/33.jpg" },
//                 { src: "/assets/datanyx2k24/34.jpg" },
//                 { src: "/assets/datanyx2k24/35.jpg" },
//                 { src: "/assets/datanyx2k24/36.jpg" },
//                 { src: "/assets/datanyx2k24/37.jpg" },
//                 { src: "/assets/datanyx2k24/38.jpg" },
//                 { src: "/assets/datanyx2k24/39.jpg" },
//                 { src: "/assets/datanyx2k24/40.jpg" },
//                 { src: "/assets/datanyx2k24/41.jpg" },
//                 { src: "/assets/datanyx2k24/42.jpg" },
//                 { src: "/assets/datanyx2k24/43.jpg" },
//                 { src: "/assets/datanyx2k24/44.jpg" },
//                 { src: "/assets/datanyx2k24/45.jpg" },
//                 { src: "/assets/datanyx2k24/46.jpg" },
//                 { src: "/assets/datanyx2k24/47.jpg" },
//                 { src: "/assets/datanyx2k24/48.jpg" },
//                 { src: "/assets/datanyx2k24/49.jpg" },
//                 { src: "/assets/datanyx2k24/50.jpg" },
//                 { src: "/assets/datanyx2k24/51.jpg" },
//                 { src: "/assets/datanyx2k24/52.jpg" },
//               ],
//               direction: "left",
//               speed: "fast",
//             },
//             {
//               items: [
//                 { src: "/assets/datanyx2k24/52.jpg" },
//                 { src: "/assets/datanyx2k24/51.jpg" },
//                 { src: "/assets/datanyx2k24/50.jpg" },
//                 { src: "/assets/datanyx2k24/49.jpg" },
//                 { src: "/assets/datanyx2k24/48.jpg" },
//                 { src: "/assets/datanyx2k24/47.jpg" },
//                 { src: "/assets/datanyx2k24/46.jpg" },
//                 { src: "/assets/datanyx2k24/45.jpg" },
//                 { src: "/assets/datanyx2k24/44.jpg" },
//                 { src: "/assets/datanyx2k24/43.jpg" },
//                 { src: "/assets/datanyx2k24/42.jpg" },
//                 { src: "/assets/datanyx2k24/41.jpg" },
//                 { src: "/assets/datanyx2k24/40.jpg" },
//                 { src: "/assets/datanyx2k24/39.jpg" },
//                 { src: "/assets/datanyx2k24/38.jpg" },
//                 { src: "/assets/datanyx2k24/37.jpg" },
//                 { src: "/assets/datanyx2k24/36.jpg" },
//                 { src: "/assets/datanyx2k24/35.jpg" },
//                 { src: "/assets/datanyx2k24/34.jpg" },
//                 { src: "/assets/datanyx2k24/33.jpg" },
//                 { src: "/assets/datanyx2k24/32.jpg" },
//                 { src: "/assets/datanyx2k24/31.jpg" },
//                 { src: "/assets/datanyx2k24/30.jpg" },
//                 { src: "/assets/datanyx2k24/29.jpg" },
//                 { src: "/assets/datanyx2k24/28.jpg" },
//                 { src: "/assets/datanyx2k24/27.jpg" },
//                 { src: "/assets/datanyx2k24/26.jpg" },
//                 { src: "/assets/datanyx2k24/25.jpg" },
//                 { src: "/assets/datanyx2k24/24.jpg" },
//                 { src: "/assets/datanyx2k24/23.jpg" },
//                 { src: "/assets/datanyx2k24/22.jpg" },
//                 { src: "/assets/datanyx2k24/21.jpg" },
//                 { src: "/assets/datanyx2k24/20.jpg" },
//                 { src: "/assets/datanyx2k24/19.jpg" },
//                 { src: "/assets/datanyx2k24/18.jpg" },
//                 { src: "/assets/datanyx2k24/17.jpg" },
//                 { src: "/assets/datanyx2k24/16.jpg" },
//                 { src: "/assets/datanyx2k24/15.jpg" },
//                 { src: "/assets/datanyx2k24/14.jpg" },
//                 { src: "/assets/datanyx2k24/9.jpg" },
//                 { src: "/assets/datanyx2k24/8.jpg" },
//                 { src: "/assets/datanyx2k24/7.jpg" },
//                 { src: "/assets/datanyx2k24/6.jpg" },
//                 { src: "/assets/datanyx2k24/5.jpg" },
//                 { src: "/assets/datanyx2k24/4.jpg" },
//                 { src: "/assets/datanyx2k24/3.jpg" },
//                 { src: "/assets/datanyx2k24/2.jpg" },
//                 { src: "/assets/datanyx2k24/1.jpg" },
//               ],
//               direction: "right",
//               speed: "normal",
//             },
//           ]}
//           pauseOnHover={true}
//           className="w-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default About;


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
                { src: "/assets/datanyx2k24/7.jpg" },
                { src: "/assets/datanyx2k24/8.jpg" },
                { src: "/assets/datanyx2k24/9.jpg" },
                { src: "/assets/datanyx2k24/14.jpg" },
                { src: "/assets/datanyx2k24/15.jpg" },
                { src: "/assets/datanyx2k24/16.jpg" },
                { src: "/assets/datanyx2k24/17.jpg" },
                { src: "/assets/datanyx2k24/18.jpg" },
                { src: "/assets/datanyx2k24/19.jpg" },
                { src: "/assets/datanyx2k24/20.jpg" },
                { src: "/assets/datanyx2k24/21.jpg" },
                { src: "/assets/datanyx2k24/22.jpg" },
                { src: "/assets/datanyx2k24/23.jpg" },
                { src: "/assets/datanyx2k24/24.jpg" },
                { src: "/assets/datanyx2k24/25.jpg" },
                { src: "/assets/datanyx2k24/26.jpg" },
                { src: "/assets/datanyx2k24/27.jpg" },
                { src: "/assets/datanyx2k24/28.jpg" },
                { src: "/assets/datanyx2k24/29.jpg" },
                { src: "/assets/datanyx2k24/30.jpg" },
                { src: "/assets/datanyx2k24/31.jpg" },
                { src: "/assets/datanyx2k24/32.jpg" },
                { src: "/assets/datanyx2k24/33.jpg" },
                { src: "/assets/datanyx2k24/35.jpg" },
                { src: "/assets/datanyx2k24/36.jpg" },
                { src: "/assets/datanyx2k24/37.jpg" },
                { src: "/assets/datanyx2k24/38.jpg" },
                { src: "/assets/datanyx2k24/39.jpg" },
                { src: "/assets/datanyx2k24/40.jpg" },
                { src: "/assets/datanyx2k24/41.jpg" },
                { src: "/assets/datanyx2k24/43.jpg" },
                { src: "/assets/datanyx2k24/44.jpg" },
                { src: "/assets/datanyx2k24/45.jpg" },
                { src: "/assets/datanyx2k24/46.jpg" },
                { src: "/assets/datanyx2k24/47.jpg" },
                { src: "/assets/datanyx2k24/48.jpg" },
                { src: "/assets/datanyx2k24/49.jpg" },
                { src: "/assets/datanyx2k24/50.jpg" },
                { src: "/assets/datanyx2k24/51.jpg" },
                { src: "/assets/datanyx2k24/52.jpg" },
              ],
              direction: "left",
              speed: "slow",
            },
            {
              items: [
                { src: "/assets/datanyx2k24/52.jpg" },
                { src: "/assets/datanyx2k24/51.jpg" },
                { src: "/assets/datanyx2k24/50.jpg" },
                { src: "/assets/datanyx2k24/49.jpg" },
                { src: "/assets/datanyx2k24/48.jpg" },
                { src: "/assets/datanyx2k24/47.jpg" },
                { src: "/assets/datanyx2k24/46.jpg" },
                { src: "/assets/datanyx2k24/45.jpg" },
                { src: "/assets/datanyx2k24/44.jpg" },
                { src: "/assets/datanyx2k24/43.jpg" },
                { src: "/assets/datanyx2k24/41.jpg" },
                { src: "/assets/datanyx2k24/40.jpg" },
                { src: "/assets/datanyx2k24/39.jpg" },
                { src: "/assets/datanyx2k24/38.jpg" },
                { src: "/assets/datanyx2k24/37.jpg" },
                { src: "/assets/datanyx2k24/36.jpg" },
                { src: "/assets/datanyx2k24/35.jpg" },
                { src: "/assets/datanyx2k24/33.jpg" },
                { src: "/assets/datanyx2k24/32.jpg" },
                { src: "/assets/datanyx2k24/31.jpg" },
                { src: "/assets/datanyx2k24/30.jpg" },
                { src: "/assets/datanyx2k24/29.jpg" },
                { src: "/assets/datanyx2k24/28.jpg" },
                { src: "/assets/datanyx2k24/27.jpg" },
                { src: "/assets/datanyx2k24/26.jpg" },
                { src: "/assets/datanyx2k24/25.jpg" },
                { src: "/assets/datanyx2k24/24.jpg" },
                { src: "/assets/datanyx2k24/23.jpg" },
                { src: "/assets/datanyx2k24/22.jpg" },
                { src: "/assets/datanyx2k24/21.jpg" },
                { src: "/assets/datanyx2k24/20.jpg" },
                { src: "/assets/datanyx2k24/19.jpg" },
                { src: "/assets/datanyx2k24/18.jpg" },
                { src: "/assets/datanyx2k24/17.jpg" },
                { src: "/assets/datanyx2k24/16.jpg" },
                { src: "/assets/datanyx2k24/15.jpg" },
                { src: "/assets/datanyx2k24/14.jpg" },
                { src: "/assets/datanyx2k24/9.jpg" },
                { src: "/assets/datanyx2k24/8.jpg" },
                { src: "/assets/datanyx2k24/7.jpg" },
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
