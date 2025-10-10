export function Footer() {
  return (
    <footer className="relative bg-black/80 border-t border-gray-800 py-12 mt-16">
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-1/4 w-1 h-1 rounded-full bg-blue-300 animate-ping"></div>
        <div className="absolute top-40 left-1/3 w-1 h-1 rounded-full bg-cyan-300 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 rounded-full bg-purple-300 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/datanyx-logo.png" 
                alt="Datanyx Logo" 
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Space Age, monospace'}}>
                DATANYX 2.0
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed max-w-md" style={{fontFamily: 'Orbitron, monospace'}}>
              Telangana's flagship 24-hour datathon. Join us for an exciting journey of data science, machine learning, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4" style={{fontFamily: 'Space Age, monospace'}}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>About</a></li>
              <li><a href="#domains" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Domains</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Schedule</a></li>
              <li><a href="#prizes" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Prizes</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Sponsors</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>FAQs</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4" style={{fontFamily: 'Space Age, monospace'}}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span style={{fontFamily: 'Orbitron, monospace'}}>datanyx2k24@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div style={{fontFamily: 'Orbitron, monospace'}} className="text-sm leading-relaxed">
                  <div className="font-medium">Ghulam Ahmed Hall</div>
                  <div>Muffakham Jah College of Engineering and Technology</div>
                  <div>Mount Pleasant, 8-2-249, Rd Number 3</div>
                  <div>Venkateshwara Hills, Banjara Hills</div>
                  <div>Hyderabad, Telangana 500034</div>
                </div>
              </div>
              <div className="flex items-start text-gray-400">
                <svg className="w-5 h-5 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div style={{fontFamily: 'Orbitron, monospace'}}>
                  <div>Vahaj: +91 8897022603</div>
                  <div className="mt-1">Nameera: +91 8125134015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0" style={{fontFamily: 'Orbitron, monospace'}}>
              © 2025 DATANYX 2.0. All rights reserved. Organized by IEEE SMC MJCET & AWS Cloud Club MJCET.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" style={{fontFamily: 'Orbitron, monospace'}}>Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer