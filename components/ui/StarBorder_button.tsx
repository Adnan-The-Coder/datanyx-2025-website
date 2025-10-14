import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
  textSpeed?: string;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '5s',
  thickness = 3,
  textSpeed = '12s',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        @keyframes star-movement-bottom {
        0% { transform: translateX(0%); opacity: 1; }
        50% { transform: translateX(-100%); opacity: 0.7; }
        100% { transform: translateX(0%); opacity: 1; }
        }

        @keyframes star-movement-top {
        0% { transform: translateX(0%); opacity: 1; }
        50% { transform: translateX(100%); opacity: 0.7; }
        100% { transform: translateX(0%); opacity: 1; }
        }

        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .star-bottom {
          animation: star-movement-bottom ${speed} linear infinite alternate;
        }
        
        .star-top {
          animation: star-movement-top ${speed} linear infinite alternate;
        }
        
        .scroll-text {
          animation: scroll-left ${textSpeed} linear infinite;
        }

        .star-border-button {
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .star-border-button:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        .bullet-point {
          filter: none !important;
          text-shadow: none !important;
        }
      `}</style>

      <Component
        className={`relative inline-block overflow-hidden ${className}`}
        {...(rest as any)}
        style={{
          padding: `${thickness}px`,
          borderRadius: '12px',
          ...(rest as any).style
        }}
      >
        {/* Bottom Star */}
        <div
          className="star-bottom"
          style={{
            position: 'absolute',
            width: '300%',
            height: `${thickness * 8}px`,
            opacity: 0.8,
            bottom: `-${thickness * 2}px`,
            right: '-250%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color}, transparent 15%)`,
            zIndex: 0
          }}
        />
        
        {/* Top Star */}
        <div
          className="star-top"
          style={{
            position: 'absolute',
            width: '300%',
            height: `${thickness * 8}px`,
            opacity: 0.8,
            top: `-${thickness * 2}px`,
            left: '-250%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color}, transparent 15%)`,
            zIndex: 0
          }}
        />
        
        {/* Button Content with Infinite Scrolling Text */}
        <div
            className="star-border-button"
            style={{
            position: 'relative',
            zIndex: 1,
            background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
            border: '1px solid #333',
            color: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            width: '200px' 
        }}
>
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div 
              className="scroll-text"
              style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                padding: '14px 20px',
                gap: '16px'
              }}
            >
              {/* Repeat text 8 times for seamless loop */}
              {Array(8).fill(null).map((_, i) => (
                <React.Fragment key={i}>
                  <span style={{ 
                    fontSize: '16px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {children}
                  </span>
                  <span 
                    className="bullet-point"
                    style={{ 
                      fontSize: '20px', 
                      fontFamily: "'Orbitron', sans-serif",
                      filter: 'none',
                      textShadow: 'none'
                    }}
                  >
                    •
                  </span>
                </React.Fragment>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div 
              className="scroll-text"
              style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                padding: '14px 20px',
                gap: '16px'
              }}
            >
              {Array(8).fill(null).map((_, i) => (
                <React.Fragment key={i}>
                  <span style={{ 
                    fontSize: '16px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {children}
                  </span>
                  <span 
                    className="bullet-point"
                    style={{ 
                      fontSize: '20px', 
                      fontFamily: "'Orbitron', sans-serif",
                      filter: 'none',
                      textShadow: 'none'
                    }}
                  >
                    •
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Component>
    </>
  );
};

export default StarBorder;
