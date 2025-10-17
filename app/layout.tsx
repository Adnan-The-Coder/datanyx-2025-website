import type { Metadata } from 'next'
import Background from '@/components/ui/background'
import './globals.css'
import {ReactLenis} from "@/utils/lenis"
import { SmoothCursor } from "@/components/ui/cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.datanyx.in"),
  applicationName: "Datanyx 2.0",
  title: "Datanyx 2.0 | Telangana's Premier 24-Hour National Datathon",
  description:
    "Datanyx 2.0 is a national-level 24-hour Datathon organized by IEEE SMC MJCET & AWS Cloud Club MJCET. Join undergraduate teams across India to solve real-world problems using data science, machine learning, and AI. Registration open now!",
  keywords: [
    "Datanyx 2.0",
    "Datanyx",
    "datathon India",
    "24-hour datathon",
    "national datathon",
    "data science competition",
    "machine learning hackathon",
    "AI competition",
    "IEEE SMC MJCET",
    "AWS Cloud Club MJCET",
    "Telangana datathon",
    "student datathon",
    "data analytics competition",
    "undergraduate hackathon",
    "tech competition India",
    "MJCET events",
    "Hyderabad datathon",
  ],
  authors: [
    { name: "IEEE SMC MJCET", url: "https://www.datanyx.in" },
    { name: "AWS Cloud Club MJCET", url: "https://www.datanyx.in" },
  ],
  creator: "IEEE SMC MJCET & AWS Cloud Club MJCET",
  publisher: "IEEE SMC MJCET",
  referrer: "origin-when-cross-origin",
  themeColor: "#1E3A8A",
  formatDetection: { email: true, address: true, telephone: true },
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.datanyx.in",
    languages: {
      "en-IN": "https://www.datanyx.in",
    },
  },
  verification: {
    google: "/* your-google-site-verification-code */",
    yandex: "/* optional */",
  },
  openGraph: {
    title: "Datanyx 2.0 | National 24-Hour Datathon - Data Science Competition",
    description:
      "Join Datanyx 2.0, Telangana's premier national-level datathon! 24 hours of data-driven innovation, AI challenges, and real-world problem solving. Organized by IEEE SMC MJCET & AWS Cloud Club MJCET. Register your team now!",
    url: "https://www.datanyx.in",
    siteName: "Datanyx 2.0",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/assets/datanyx25logo.png",
        width: 1200,
        height: 630,
        alt: "Datanyx 2.0 - National 24-Hour Datathon",
      },
      {
        url: "/assets/datanyx25logo.png",
        width: 1200,
        height: 1200,
        alt: "Datanyx 2.0 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DatanyxEvent",
    creator: "@IEEESMCMJCET",
    title: "Datanyx 2.0 | National 24-Hour Datathon - Register Now",
    description:
      "Telangana's premier 24-hour datathon is back! Solve real-world problems with data science, ML & AI. Teams of 2-4 undergraduates. Prizes, mentorship & certificates await!",
    images: ["/assets/datanyx25logo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/assets/favicon.png"],
    other: [
      { rel: "mask-icon", url: "/assets/safari-pinned-tab.svg", color: "#1E3A8A" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "event:type": "datathon",
    "event:duration": "24 hours",
    "event:registration": "open",
    "event:level": "national",
    "event:team-size": "2-4 members",
  },
};

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
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
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
