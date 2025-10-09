"use client"

import { useEffect, useState, CSSProperties } from "react"

const links = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#domains", label: "DOMAINS" },
  { href: "#schedule", label: "SCHEDULE" },
  { href: "#prizes", label: "PRIZES" },
  { href: "#sponsors", label: "SPONSORS" },
  { href: "#faqs", label: "FAQS" },
]

interface NavbarProps {
  style?: CSSProperties;
}

export function Navbar({ style }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center" style={style}>
      <nav
        role="navigation"
        aria-label="Primary"
        className={`max-w-5xl mx-auto rounded-full border px-4 py-2 md:px-6 md:py-3 
          backdrop-blur transition-all duration-300
          ${scrolled ? "bg-background/80 border-border/60 shadow" : "bg-background/60 border-border/40"}`}
      >
        <ul className="flex items-center gap-3 md:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs md:text-sm text-foreground/80 hover:text-foreground font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2 py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
