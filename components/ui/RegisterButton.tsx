import React from 'react';

interface RegisterButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({ 
  href = "https://unstop.com/hackathons/datanyx-muffakham-jah-college-of-engineering-technology-1188761",
  onClick,
  className = ""
}) => {
  const ButtonContent = () => (
    <>
      {/* 3D Effect Layer */}
      <span 
        className="absolute inset-0 rounded-2xl px-6 py-3 text-base font-semibold
                   shadow-[inset_0_-8px_10px_#0000001f]
                   dark:shadow-[inset_0_-8px_10px_#ffffff1f]
                   transform transition-all duration-300 ease-in-out
                   group-hover:shadow-[inset_0_-6px_10px_#0000003f]
                   dark:group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]
                   group-active:shadow-[inset_0_-10px_10px_#0000003f]
                   dark:group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-green-400 transition-transform duration-300 group-hover:scale-110" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-white font-bold tracking-wide">
          Register Now
        </span>
        <span className="text-green-400 group-hover:translate-x-1 transition-transform duration-200 text-xl font-bold">
          →
        </span>
      </span>
    </>
  );

  const buttonClasses = `
    group relative
    px-6 py-3
    bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-600/20
    hover:from-green-500/30 hover:via-blue-500/30 hover:to-purple-600/30
    rounded-2xl
    border border-white/20
    backdrop-blur-xl
    overflow-hidden
    transition-all duration-300
    hover:scale-105
    active:scale-95
    shadow-[0_0_20px_rgba(34,197,94,0.3)]
    hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={onClick}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      <ButtonContent />
    </button>
  );
};

export default RegisterButton;
