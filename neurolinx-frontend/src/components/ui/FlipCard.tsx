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
      className="group relative h-[420px] w-full rounded-[40px] cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      // For accessibility keyboard navigation
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
          className="absolute inset-0 w-full h-full rounded-[40px] overflow-hidden shadow-lg border border-white/10 bg-zinc-950"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img 
            src={img} 
            alt={title} 
            className={`w-full h-full object-cover opacity-90 transition-transform duration-700 ${isFlipped ? 'scale-110' : 'scale-100'}`} 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">{title}</h3>
            
            {/* Mobile Tap Target (Visual Hint) */}
            <button 
              className="lg:hidden w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFlipped(true); }}
              aria-label="Flip to details"
              tabIndex={-1}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-white/15 bg-zinc-900/95 backdrop-blur-xl p-8 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex justify-between items-start mb-6">
             <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
             <button 
              className="lg:hidden p-2 -mr-2 -mt-2 text-gray-400 hover:text-brand-red shrink-0"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsFlipped(false); }}
              aria-label="Return to image"
              tabIndex={-1}
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </button>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">{desc}</p>
          
          <div className="flex-1">
             <ul className="space-y-3">
               {features.map((f, i) => (
                 <li key={i} className="flex items-start text-sm md:text-base text-gray-200">
                    <svg className="w-5 h-5 text-brand-red shrink-0 mr-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="font-medium">{f}</span>
                 </li>
               ))}
             </ul>
          </div>
          
          <Link 
            to={linkUrl} 
            tabIndex={isFlipped ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
            className="w-full block text-center py-4 mt-6 rounded-full bg-white/10 hover:bg-brand-red text-white border border-white/20 hover:border-brand-red font-medium transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
