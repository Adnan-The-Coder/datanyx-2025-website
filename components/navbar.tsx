"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const smoothScrollTo = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 120;
    
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
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
        
        * {
          box-sizing: border-box;
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
          transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out, transform 0.8s ease-in-out;
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
          max-width: 1400px;
          gap: 24px;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          cursor: pointer;
        }
        
        .navbar-logo img {
          height: 52px;
          width: auto;
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(7, 208, 248, 0.4));
          transition: all 0.3s ease;
        }
        
        .navbar-logo img:hover {
          filter: brightness(1.5) drop-shadow(0 0 12px rgba(7, 208, 248, 0.8));
          transform: scale(1.05);
        }
        
        .navbar-menu {
          display: none;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: center;
          max-width: 900px;
        }
        
        .nav-button {
          background: transparent;
          border: none;
          color: white;
          font-family: 'Space Age', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 10px 16px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
          white-space: nowrap;
          text-shadow: 0 0 5px rgba(7, 208, 248, 0.3);
          position: relative;
        }
        
        .nav-button:hover {
          color: #07d0f8ff;
          background: rgba(7, 208, 248, 0.1);
          text-shadow: 0 0 10px rgba(7, 208, 248, 0.8), 0 0 20px rgba(7, 208, 248, 0.4);
          transform: translateY(-2px);
        }

        .nav-button:active {
          transform: translateY(0);
        }

        .hamburger-button {
          display: flex;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1002;
          flex-direction: column;
          gap: 5px;
          flex-shrink: 0;
          position: relative;
        }

        .hamburger-line {
          width: 28px;
          height: 3px;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px rgba(7, 208, 248, 0.5);
          border-radius: 2px;
        }

        .hamburger-button:hover .hamburger-line {
          background: #07d0f8ff;
          box-shadow: 0 0 12px rgba(7, 208, 248, 0.8);
        }

        .hamburger-button.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger-button.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-button.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        .mobile-menu-overlay {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.97);
          backdrop-filter: blur(10px);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 20px 40px 20px;
          overflow-y: auto;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 100%;
          max-width: 400px;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-button {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-family: 'Space Age', monospace;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 18px 40px;
          border-radius: 35px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px rgba(7, 208, 248, 0.3);
          width: 100%;
          text-align: center;
        }

        .mobile-menu-button:hover,
        .mobile-menu-button:active {
          color: #07d0f8ff;
          background: rgba(7, 208, 248, 0.15);
          border-color: #07d0f8ff;
          text-shadow: 0 0 10px rgba(7, 208, 248, 0.8), 0 0 20px rgba(7, 208, 248, 0.4);
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(7, 208, 248, 0.3);
        }

        /* Desktop - Large screens */
        @media (min-width: 1200px) {
          .navbar-container {
            padding: 24px 30px 0 30px;
          }

          .navbar {
            padding: 16px 48px;
            gap: 32px;
          }

          .navbar-logo img {
            height: 56px;
          }

          .navbar-menu {
            display: flex;
            gap: 12px;
          }

          .nav-button {
            font-size: 14px;
            padding: 10px 20px;
            letter-spacing: 1px;
          }

          .hamburger-button {
            display: none;
          }
        }

        /* Desktop - Medium screens */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .navbar-container {
            padding: 20px 24px 0 24px;
          }

          .navbar {
            padding: 14px 40px;
            gap: 24px;
          }

          .navbar-logo img {
            height: 52px;
          }

          .navbar-menu {
            display: flex;
            gap: 6px;
          }

          .nav-button {
            font-size: 13px;
            padding: 9px 16px;
          }

          .hamburger-button {
            display: none;
          }
        }

        /* Tablet landscape */
        @media (min-width: 900px) and (max-width: 1023px) {
          .navbar-container {
            padding: 18px 20px 0 20px;
          }

          .navbar {
            padding: 14px 32px;
            gap: 20px;
          }

          .navbar-logo img {
            height: 50px;
          }

          .navbar-menu {
            display: flex;
            gap: 4px;
          }

          .nav-button {
            font-size: 12px;
            padding: 8px 14px;
            letter-spacing: 0.6px;
          }

          .hamburger-button {
            display: none;
          }
        }

        /* Tablet portrait */
        @media (min-width: 768px) and (max-width: 899px) {
          .navbar-container {
            padding: 16px 20px 0 20px;
          }

          .navbar {
            padding: 12px 28px;
          }

          .navbar-logo img {
            height: 48px;
          }

          .mobile-menu-overlay {
            padding: 120px 30px 50px 30px;
          }

          .mobile-menu-content {
            gap: 18px;
          }
        }

        /* Mobile large */
        @media (min-width: 480px) and (max-width: 767px) {
          .navbar-container {
            padding: 14px 16px 0 16px;
          }

          .navbar {
            padding: 12px 24px;
            border-radius: 40px;
          }

          .navbar-logo img {
            height: 44px;
          }

          .mobile-menu-overlay {
            padding: 110px 24px 40px 24px;
          }

          .mobile-menu-content {
            gap: 16px;
            max-width: 350px;
          }

          .mobile-menu-button {
            font-size: 15px;
            padding: 16px 36px;
          }
        }

        /* Mobile small */
        @media (max-width: 479px) {
          .navbar-container {
            padding: 12px 12px 0 12px;
          }

          .navbar {
            padding: 10px 20px;
            border-radius: 35px;
          }

          .navbar-logo img {
            height: 40px;
          }

          .hamburger-line {
            width: 26px;
            height: 2.5px;
          }

          .mobile-menu-overlay {
            padding: 100px 20px 30px 20px;
          }

          .mobile-menu-content {
            gap: 14px;
            max-width: 320px;
          }

          .mobile-menu-button {
            font-size: 14px;
            padding: 15px 32px;
            letter-spacing: 1.5px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .navbar-container {
            padding: 10px 10px 0 10px;
          }

          .navbar {
            padding: 8px 16px;
            border-radius: 30px;
          }

          .navbar-logo img {
            height: 36px;
          }

          .mobile-menu-button {
            font-size: 13px;
            padding: 14px 28px;
          }
        }
      `}</style>
      
      <div 
        className="navbar-container"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
        }}
      >
        <nav className="navbar">
          <div className="navbar-logo" onClick={() => handleSmoothScroll('#home')}>
            <Image 
              src="/assets/Navbar logo  FIANL(400 x 200 px).png" 
              width={160}
              height={80}
              alt="DATANYX Logo"
            />
          </div>
          
          <div className="navbar-menu">
            <button className="nav-button" onClick={() => handleSmoothScroll('#home')}>HOME</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#about')}>ABOUT</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#domains')}>DOMAINS</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#schedule')}>SCHEDULE</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#prizes')}>PRIZES</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#sponsors')}>SPONSORS</button>
            <button className="nav-button" onClick={() => handleSmoothScroll('#faqs')}>FAQS</button>
          </div>

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

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <button className="mobile-menu-button" onClick={() => handleNavClick('#home')}>HOME</button>
          <button className="mobile-menu-button" onClick={() => handleNavClick('#about')}>ABOUT</button>
          <button className="mobile-menu-button" onClick={() => handleNavClick('#domains')}>DOMAINS</button>
          <button className="mobile-menu-button" onClick={() => handleNavClick('#schedule')}>SCHEDULE</button>
          <button className="mobile-menu-button" onClick={() => handleNavClick('#prizes')}>PRIZES</button>
          <button className="mobile-menu-button" onClick={() => handleNavClick('#sponsors')}>SPONSORS</button>
          <button className="mobile-menu-button" onClick={() => handleNavClick('#faqs')}>FAQS</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;