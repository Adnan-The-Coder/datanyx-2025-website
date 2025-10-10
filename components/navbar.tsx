"use client";
import React, { useState, useEffect } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const smoothScrollTo = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 120;
    
    // Try native smooth scrolling first
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback for browsers that don't support smooth scrolling
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start: number;

      function animation(currentTime: number) {
        if (start === undefined) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  };

  const handleNavClick = (hash: string) => {
    smoothScrollTo(hash);
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (hash: string) => {
    smoothScrollTo(hash);
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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');
        
        .navbar-container {
          position: fixed;
          top: 10px;
          left: 50%;
          z-index: 1000;
          width: 98%;
          max-width: 1800px;
          padding: 0 15px;
          transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out, transform 0.8s ease-in-out;
        }
        
        .navbar {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          border-radius: 50px;
          padding: 8px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-right: 32px;
        }
        
        .navbar-logo img {
          height: 48px;
          width: auto;
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(7, 208, 248, 0.4));
          transition: all 0.3s ease;
        }
        
        .navbar-logo img:hover {
          filter: brightness(1.5) drop-shadow(0 0 12px rgba(7, 208, 248, 0.8));
          transform: scale(1.05);
        }
        
        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: nowrap;
          justify-content: center;
          flex: 1;
          margin-left: 8px;
          margin-right: 8px;
        }
        
        .nav-button {
          background: transparent;
          border: none;
          color: white;
          font-family: 'Space Age', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 10px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
          white-space: nowrap;
          flex-shrink: 0;
          text-shadow: 0 0 5px rgba(7, 208, 248, 0.3);
        }
        
        .nav-button:hover {
          color: #07d0f8ff;
          background: rgba(255, 255, 255, 0.1);
          text-shadow: 0 0 10px rgba(7, 208, 248, 0.8), 0 0 20px rgba(7, 208, 248, 0.4);
          transform: translateY(-1px);
        }

        /* Hamburger menu button */
        .hamburger-button {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
          flex-direction: column;
          gap: 5px;
        }

        .hamburger-line {
          width: 25px;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 0 5px rgba(7, 208, 248, 0.5);
        }

        .hamburger-button.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger-button.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-button.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Mobile menu overlay */
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .mobile-menu-overlay.active {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu-button {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-family: 'Space Age', monospace;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 16px 32px;
          margin: 10px 0;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px rgba(7, 208, 248, 0.3);
          min-width: 250px;
          text-align: center;
        }

        .mobile-menu-button:hover {
          color: #07d0f8ff;
          background: rgba(255, 255, 255, 0.1);
          border-color: #07d0f8ff;
          text-shadow: 0 0 10px rgba(7, 208, 248, 0.8), 0 0 20px rgba(7, 208, 248, 0.4);
          transform: scale(1.05);
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .navbar-container {
            top: 20px;
            width: auto;
            max-width: none;
            padding: 0 20px;
          }
          
          .navbar {
            padding: 16px 40px;
            width: auto;
            min-width: 1100px;
          }
          
          .navbar-menu {
            gap: 28px;
            flex-wrap: nowrap;
          }
          
          .navbar-logo {
            margin-right: 60px;
          }
          
          .navbar-logo img {
            height: 56px;
          }
          
          .navbar-menu {
            margin-left: 32px;
          }
          
          .nav-button {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.2px;
            padding: 8px 18px;
            border-radius: 25px;
          }
        }
        
        /* Extra large desktop styles */
        @media (min-width: 1280px) {
          .navbar {
            padding: 16px 48px;
            min-width: 1200px;
          }
          
          .navbar-menu {
            gap: 32px;
          }
          
          .navbar-logo {
            margin-right: 80px;
          }
          
          .nav-button {
            padding: 8px 20px;
          }
        }

        /* Tablet styles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .navbar-container {
            top: 15px;
            width: 90%;
          }
          
          .navbar {
            padding: 14px 24px;
          }
          
          .navbar-menu {
            gap: 16px;
          }
          
          .navbar-logo {
            margin-right: 32px;
          }
          
          .navbar-logo img {
            height: 50px;
          }
          
          .navbar-menu {
            margin-left: 16px;
          }
          
          .nav-button {
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 1px;
            padding: 7px 14px;
          }
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .navbar-container {
            top: 10px;
            width: 95%;
            padding: 0 10px;
          }
          
          .navbar {
            padding: 12px 20px;
            border-radius: 30px;
          }
          
          .navbar-menu {
            display: none;
          }
          
          .hamburger-button {
            display: flex;
          }
          
          .navbar-logo {
            margin-right: auto;
          }
          
          .navbar-logo img {
            height: 45px;
          }
        }

        /* Very small mobile */
        @media (max-width: 480px) {
          .navbar-container {
            top: 8px;
            width: 96%;
          }
          
          .navbar {
            padding: 10px 16px;
          }
          
          .navbar-logo img {
            height: 40px;
          }
        }
      `}</style>
      
      <div 
        className={`navbar-container ${isVisible ? 'visible' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-20px)'
        }}
      >
        <nav className="navbar">
          {/* Logo on the left */}
          <div className="navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/Navbar logo  FIANL(400 x 200 px).png" 
              alt="DATANYX Logo"
            />
          </div>
          
          {/* Navigation menu in the center */}
          <div className="navbar-menu">
            <button className="nav-button" onClick={() => handleSmoothScroll('#home')}>HOME</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#about')}>ABOUT</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#domains')}>DOMAINS</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#schedule')}>SCHEDULE</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#prizes')}>PRIZES</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#sponsors')}>SPONSORS</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#faqs')}>FAQS</button>
          </div>

          {/* Hamburger menu button for mobile */}
          <button 
            className={`hamburger-button ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#home')}>HOME</button>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#about')}>ABOUT</button>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#domains')}>DOMAINS</button>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#schedule')}>SCHEDULE</button>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#prizes')}>PRIZES</button>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#sponsors')}>SPONSORS</button>
        <button className="mobile-menu-button" onClick={() => handleNavClick('#faqs')}>FAQS</button>
      </div>
    </>
  );
}

export default Navbar;
