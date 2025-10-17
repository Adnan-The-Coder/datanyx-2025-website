'use client'

import React from 'react'
import Head from 'next/head'

const CodeOfConductPage = () => {
  return (
    <>
      <Head>
        <title>DATANYX’25 - Code of Conduct</title>
      </Head>

      <div className="min-h-screen bg-[url('/bg-pattern.png')] bg-cover bg-center flex justify-center items-start py-12 px-4 ">
        <div className="w-full max-w-4xl z-1100
                        backdrop-blur-xl bg-white/10 border border-white/30 
                        rounded-3xl p-8 shadow-2xl space-y-6">
          
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-space-age text-white text-center">
            DATANYX’25 – Code of Conduct & Guidelines
          </h1>

          {/* Intro */}
          <p className="font-orbitron text-white">
            DATANYX’25 proudly advances Telangana’s first 24-hour datathon with expanded challenges, datasets, and stronger industry collaboration. Following the success of DATANYX’24, this edition emphasizes deployable innovation, technical excellence, and collaborative breakthroughs.
          </p>
          <p className="font-orbitron text-white">
            To ensure a safe, productive, and respectful environment, all participants are expected to follow these guidelines.
          </p>

          {/* Sections */}
          <h2 className="text-3xl font-space-age text-white mt-6">1. Code of Conduct</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1">
            <li>Maintain respectful and professional behavior at all times.</li>
            <li>Harassment, offensive language, or inappropriate behavior will not be tolerated.</li>
            <li>Interact courteously with fellow participants, mentors, judges, volunteers, and organizers.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">2. Attendance & Timings</h2>
          <p className="font-orbitron text-white">
            Teams must arrive on time and adhere to the event schedule communicated by organizers.
          </p>

          <h2 className="text-3xl font-space-age text-white mt-6">3. Team Collaboration</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1">
            <li>Work collaboratively within teams and maintain a cooperative attitude toward staff and mentors.</li>
            <li>Disruptive or uncooperative behavior may lead to disciplinary action.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">4. Intellectual Property</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1">
            <li>All ideas, strategies, and solutions developed during DATANYX’25 remain the property of the respective teams.</li>
            <li>Participants are responsible for any damage to venue property, equipment, or resources.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">5. Venue Regulations</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1">
            <li>Restricted areas are off-limits.</li>
            <li>Stay within designated event zones unless prior approval is given.</li>
            <li>Dispose of waste properly in designated bins.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">6. Identification</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1">
            <li>Valid college ID card</li>
            <li>Additional proof of identity (Aadhaar, Driving License, or equivalent)</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">7. Packing Essentials</h2>
          <p className="font-orbitron text-white font-semibold mt-2">Personal Items:</p>
          <p className="font-orbitron text-white">
            Notebook, pen, water bottle, face wash, sanitizer, tissues, small pillow, jacket/hoodie, personal medication, cash, portable Wi-Fi (if needed)
          </p>
          <p className="font-orbitron text-white font-semibold mt-2">Electronics & Accessories:</p>
          <p className="font-orbitron text-white">
            Extension box (mandatory), laptop & charger, phone charger & power bank, headphones, Ethernet cable, adapters
          </p>

          <h2 className="text-3xl font-space-age text-white mt-6">8. Communication & Support</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1">
            <li>Seek help from mentors, volunteers, or organizers whenever needed.</li>
            <li>Maintain open and respectful communication for a smooth experience.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">9. Ethical Standards</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1" style={{ fontFamily: 'Orbitron, monospace' }}>
            <li>Uphold honesty, transparency, and fair play.</li>
            <li>Plagiarism, cheating, or unethical conduct will result in disqualification.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">10. Health & Safety</h2>
          <ul className="list-disc list-inside font-orbitron text-white space-y-1" style={{ fontFamily: 'Orbitron, monospace' }}>
            <li>Stay hydrated, take breaks, and prioritize your well-being.</li>
            <li>First aid facilities are available on-site. Report any health concerns immediately.</li>
          </ul>

          <h2 className="text-3xl font-space-age text-white mt-6">11. Compliance</h2>
          <p className=" text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            Failure to comply may result in disciplinary action, including removal from the event. These guidelines ensure a safe, respectful, and enriching experience for all participants.
          </p>

          <h2 className="text-3xl font-space-age text-white mt-6">Contact</h2>
          <p className=" text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
            For questions or concerns, reach out to the organizing team during the event.
          </p>
          
        </div>
      </div>
    </>
  )
}

export default CodeOfConductPage
