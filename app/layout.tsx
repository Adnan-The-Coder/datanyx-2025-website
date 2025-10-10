import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Datanyx 2025 - 24-Hour Datathon',
  description: 'Telangana\'s flagship 24-hour datathon organized by IEEE SMC MJCET and AWS Cloud Club MJCET',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body { 
              opacity: 1 !important; 
              visibility: visible !important; 
              background: #000 !important;
            }
          `
        }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} dark bg-black`}>
        {children}
      </body>
    </html>
  )
}
