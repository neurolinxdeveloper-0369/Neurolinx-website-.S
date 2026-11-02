import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FlipCardProps {
  title: string;
  desc: string;
  img: string;
  features: string[];
  linkUrl: string;
  buttonText: string;
}

export function FlipCard({ title, desc, img, features, linkUrl, buttonText }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Accessible click handler for mobile tapping
  const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
    // Only toggle on mobile if clicking the container itself (not links)
    const target = e.target as HTMLElement;
    if (!target.closest('a') && !target.closest('button')) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="group relative h-[390px] sm:h-[400px] w-full rounded-[32px] cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      onClick={handleToggle}
    >
      <div 
        className="w-full h-full transition-transform duration-700 ease-out"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden shadow-lg border border-white/10 bg-zinc-950"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img 
            src={img} 
            alt={title} 
            className={`w-full h-full object-cover opacity-90 transition-transform duration-700 ${isFlipped ? 'scale-110' : 'scale-100'}`} 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md">{title}</h3>
            
            {/* Mobile Tap Target (Visual Hint) */}
            <button 
              className="lg:hidden w-9 h-9 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFlipped(true); }}
              aria-label="Flip to details"
              tabIndex={-1}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden shadow-2xl border border-white/15 bg-zinc-900/95 backdrop-blur-xl p-6 flex flex-col justify-between"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{title}</h3>
              <button 
                className="lg:hidden p-1.5 -mr-1.5 -mt-1.5 text-gray-400 hover:text-brand-red shrink-0"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFlipped(false); }}
                aria-label="Return to image"
                tabIndex={-1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">{desc}</p>
            
            <ul className="space-y-2.5">
              {features.map((f, i) => (
                <li key={i} className="flex items-start text-xs sm:text-sm text-gray-200">
                  <svg className="w-4 h-4 text-brand-red shrink-0 mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to={linkUrl} 
            tabIndex={isFlipped ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
            className="w-full block text-center py-3 mt-4 rounded-full bg-white/10 hover:bg-brand-red text-white border border-white/20 hover:border-brand-red text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
