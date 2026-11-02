import React from 'react';

const BRAND_LETTERS = [
  { char: 'N', isRed: false },
  { char: 'e', isRed: false },
  { char: 'u', isRed: false },
  { char: 'r', isRed: false },
  { char: 'o', isRed: false },
  { char: 'l', isRed: true },
  { char: 'i', isRed: true },
  { char: 'n', isRed: true },
  { char: 'x', isRed: true },
];

export function HeroOne() {
  return (
    <div className="relative w-full min-h-screen flex items-center pointer-events-none select-none z-10 overflow-hidden">
      <style>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.92);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }
        @keyframes paragraphReveal {
          0% {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
            filter: blur(0px);
          }
        }
        @keyframes ambientGlowPulse {
          0%, 100% {
            opacity: 0.16;
            transform: scale(1);
          }
          50% {
            opacity: 0.28;
            transform: scale(1.08);
          }
        }
        .hero-letter-reveal {
          display: inline-block;
          opacity: 0;
          will-change: transform, opacity, filter;
          animation: letterReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-para-reveal {
          opacity: 0;
          will-change: transform, opacity, filter;
          animation: paragraphReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen">
        <div className="relative max-w-md lg:max-w-lg xl:max-w-xl text-left pointer-events-auto select-text pt-20 sm:pt-0 sm:translate-x-4 lg:translate-x-8 xl:translate-x-12">
          {/* Subtle ambient red/crimson glow behind the wordmark */}
          <div 
            className="absolute -left-12 -top-10 w-80 h-80 bg-[#FF1C36]/20 rounded-full blur-[110px] pointer-events-none -z-10"
            style={{ animation: 'ambientGlowPulse 5s ease-in-out infinite' }}
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight font-display mb-3 sm:mb-4 lg:mb-5 leading-none">
            {BRAND_LETTERS.map((item, idx) => (
              <span
                key={idx}
                className={`hero-letter-reveal ${item.isRed ? 'text-[#FF1C36]' : 'text-white'}`}
                style={{
                  animationDelay: `${180 + idx * 70}ms`,
                }}
              >
                {item.char}
              </span>
            ))}
          </h1>
          <p 
            className="hero-para-reveal text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-body max-w-sm sm:max-w-md lg:max-w-lg"
            style={{ animationDelay: '920ms' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
