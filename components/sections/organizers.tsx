'use client'

import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

type Organizer = {
  name: string
  image: string
  socials?: {
    linkedin?: string
    instagram?: string
  }
}

const organizers: Organizer[] = [
  {
    name: 'IEEE SMC',
    image: '/assets/smc-logo.png',
    socials: {
      linkedin: 'https://www.linkedin.com/company/ieeesmcmjcet/posts/?feedView=all',
      instagram: ' https://www.instagram.com/ieeesmcmjcet?utm_source=ig_web_button_share_sheet&igsh=NzRncGoxZHJhcndn',

    },
  },
  {
    name: 'AWS Club',
    image: '/assets/aws_logo.png',
    socials: {
      linkedin: 'https://www.linkedin.com/company/aws-cloud-club-mjcet/posts/?feedView=all',
      instagram: ' https://www.instagram.com/awsclub.mjcet?utm_source=ig_web_button_share_sheet&igsh=MWhmZ2FlbTJkYXRrYw==',
    },
  },
]

function OrganizerCard({ org }: { org: Organizer }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_12px_50px_rgba(0,0,0,0.35)]">
      {/* Shine accent */}
      <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-xl" />
      </div>

      {/* Inner content */}
      <div className="relative px-4 sm:px-6 py-6">
        {/* Logo area */}
        <div className="relative mx-auto w-[min(92vw,720px)] sm:w-[min(46vw,560px)] lg:w-[min(38vw,640px)] xl:w-[520px] 2xl:w-[560px] aspect-[5/2.2] rounded-xl bg-white/0">
          <Image
            alt={org.name}
            src={org.image}
            fill
            sizes="(max-width:640px) 92vw, (max-width:1024px) 46vw, (max-width:1536px) 38vw, 520px"
            className="object-contain p-6 sm:p-8"
            quality={90}
            priority
          />
        </div>

        {/* Name */}
        <p
          className="mt-4 text-center text-white/90 text-base sm:text-lg"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          {org.name}
        </p>

        {/* Social links inside same box (LinkedIn + Instagram only) */}
        {org.socials && (org.socials.linkedin || org.socials.instagram) && (
          <div className="mt-4 flex items-center justify-center gap-5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            {org.socials.linkedin && (
              <a
                href={org.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-white/85 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {org.socials.instagram && (
              <a
                href={org.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-white/85 hover:text-white transition-colors"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Organizers() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1
          className="text-center text-white font-black tracking-wide mb-8 sm:mb-10"
          style={{
            fontFamily: 'Space Age, monospace',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.1,
            color: '#fff',
            textShadow: 'none',
            WebkitTextFillColor: 'initial',
            background: 'none',
          }}
        >
          ORGANIZERS
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {organizers.map((org) => (
            <OrganizerCard key={org.name} org={org} />
          ))}
        </div>
      </div>
    </section>
  )
}
