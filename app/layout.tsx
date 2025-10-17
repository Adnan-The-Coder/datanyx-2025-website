import type { Metadata } from 'next'
import Background from '@/components/ui/background'
import './globals.css'
import {ReactLenis} from "@/utils/lenis"
import { SmoothCursor } from "@/components/ui/cursor";

export const metadata: Metadata = {
  title: 'Datanyx 2025 - 24-Hour Datathon',
  description:
    "Telangana's flagship 24-hour datathon organized by IEEE SMC MJCET and AWS Cloud Club MJCET",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <ReactLenis root>
      <head>

        <style
          
          dangerouslySetInnerHTML={{
            __html: `
              /* Black background immediately */
              html, body { background:#000; }
              /* Hide all content until we flag 'mounted' */
              html:not([data-mounted="true"]) body > * {
                opacity: 0 !important;
              }
              html[data-mounted="true"] body > * {
                opacity: 1;
                transition: opacity 200ms ease;
              }
            `,
          }}
        />
       <script
          dangerouslySetInnerHTML={{
            __html: `
              // Mark as mounted ASAP (runs before React hydration)
              document.documentElement.setAttribute('data-mounted','true');
            `,
          }}
        />
      </head>
      <body className="relative">
        <Background />
         <SmoothCursor
          size={17}
          color="black"
          showTrail={false}
          trailLength={8}
          magneticDistance={60}
          magneticElements="[data-magnetic]"
          springConfig={{
          damping: 50,
          stiffness: 450,
          mass: 0.8,
          restDelta: 0.001
          }}
        />
        {children}
      </body>
      </ReactLenis>
    </html>
  )
}
