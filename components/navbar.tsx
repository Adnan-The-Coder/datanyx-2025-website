"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSmoothScroll = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'Space Age';
          src: url('/fonts/space age.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 20px 20px 0 20px;
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
        }

        .navbar {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          border-radius: 50px;
          padding: 14px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1600px;
          gap: 20px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .navbar:hover {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.4), 0 8px 32px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .navbar-logo {
          flex-shrink: 0;
        }

        .navbar-logo img {
          height: 52px;
          width: auto;
          filter: brightness(1.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .navbar-logo img:hover {
          transform: scale(1.05);
        }

        .navbar-menu {
          display: none;
        }

        .hamburger-button {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .hamburger-line {
          width: 28px;
          height: 3px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger-button:hover .hamburger-line {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .hamburger-button.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .hamburger-button.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .hamburger-button.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.97);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          z-index: 998;
          padding: 40px 20px;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 500px;
        }

        .mobile-menu-button {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-family: 'Space Age', sans-serif;
          font-size: 16px;
          letter-spacing: 0.05em;
          padding: 18px 40px;
          border-radius: 35px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-transform: uppercase;
          width: 100%;
          text-align: center;
        }

        .mobile-menu-button:hover,
        .mobile-menu-button:active {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Extra small mobile */
        @media (max-width: 479px) {
          .navbar-container {
            padding: 12px 12px 0 12px;
          }

          .navbar {
            padding: 10px 20px;
            gap: 12px;
          }

          .navbar-logo img {
            height: 36px;
          }

          .hamburger-line {
            width: 24px;
            height: 2.5px;
          }

          .mobile-menu-overlay {
            padding: 30px 16px;
          }

          .mobile-menu-content {
            gap: 12px;
            max-width: 100%;
          }

          .mobile-menu-button {
            font-size: 14px;
            padding: 16px 32px;
          }
        }

        /* Mobile small */
        @media (min-width: 480px) and (max-width: 767px) {
          .navbar-container {
            padding: 14px 16px 0 16px;
          }

          .navbar {
            padding: 12px 24px;
            gap: 16px;
          }

          .navbar-logo img {
            height: 40px;
          }

          .hamburger-line {
            width: 26px;
            height: 2.5px;
          }

          .mobile-menu-overlay {
            padding: 35px 20px;
          }

          .mobile-menu-content {
            gap: 14px;
          }

          .mobile-menu-button {
            font-size: 15px;
            padding: 17px 36px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .navbar-container {
            padding: 16px 20px 0 20px;
          }

          .navbar {
            padding: 12px 28px;
            gap: 20px;
          }

          .navbar-logo img {
            height: 48px;
          }

          .mobile-menu-overlay {
            padding: 40px 30px;
          }

          .mobile-menu-content {
            gap: 16px;
          }

          .mobile-menu-button {
            font-size: 16px;
            padding: 18px 40px;
          }
        }

        /* Desktop - Show tabs, hide hamburger */
        @media (min-width: 1024px) {
          .navbar {
            gap: 80px;
          }

          .navbar-menu {
            display: flex;
            flex: 1;
            justify-content: center;
            max-width: 100%;
          }
          
          .hamburger-button {
            display: none !important;
          }
        }

        /* Large desktop */
        @media (min-width: 1440px) {
          .navbar-container {
            padding: 24px 30px 0 30px;
          }

          .navbar {
            padding: 16px 40px;
          }

          .navbar-logo img {
            height: 56px;
          }
        }
      `}</style>

      <div
        className="navbar-container"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <nav className="navbar">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => handleSmoothScroll("#home")}>
            <Image
              src="/assets/Navbar logo  FIANL(400 x 200 px).png"
              width={160}
              height={80}
              alt="DATANYX Logo"
              priority
            />
          </div>

          {/* Desktop Menu with Sliding Tabs */}
          <div className="navbar-menu">
            <SlideTabs
              items={["HOME", "ABOUT", "DOMAINS", "SCHEDULE", "PRIZES", "SPONSORS", "FAQS"]}
              onItemClick={handleSmoothScroll}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger-button ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          {["HOME", "ABOUT", "DOMAINS", "SCHEDULE", "PRIZES", "SPONSORS", "FAQS"].map((item) => (
            <button
              key={item}
              className="mobile-menu-button"
              onClick={() => {
                handleSmoothScroll(`#${item.toLowerCase()}`);
                setIsMobileMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- Sliding Tabs Component ---------- */

type Position = { left: number; width: number; opacity: number };

const SlideTabs = ({
  items,
  onItemClick,
}: {
  items: string[];
  onItemClick: (hash: string) => void;
}) => {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ul
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        setIsHovered(false);
      }}
      className="relative flex rounded-full border bg-black/90 backdrop-blur-md"
      style={{ 
        justifyContent: 'space-between',
        padding: '16px 24px',
        width: '100%',
        maxWidth: '100%',
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)',
        boxShadow: isHovered 
          ? '0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)' 
          : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      {items.map((item) => (
        <Tab key={item} label={item} setPosition={setPosition} onClick={onItemClick} />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  label,
  setPosition,
  onClick,
}: {
  label: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  onClick: (hash: string) => void;
}) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      onClick={() => onClick(`#${label.toLowerCase()}`)}
      className="relative z-10 cursor-pointer text-white mix-blend-difference transition-all"
      style={{ 
        fontFamily: "'Space Age', sans-serif",
        letterSpacing: '0.05em',
        fontSize: '16px',
        padding: '10px 12px',
        textTransform: 'uppercase'
      }}
    >
      {label}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => (
  <motion.li
    animate={{ ...position }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="absolute z-0 rounded-full bg-white"
    style={{ height: 'calc(100% - 8px)', top: '4px' }}
  />
);
