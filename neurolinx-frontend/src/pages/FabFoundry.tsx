import React from 'react';

export function FabFoundry() {
  return (
    <div className="w-full min-h-screen bg-brand-charcoal flex flex-col font-body selection:bg-brand-red selection:text-white">
      {/* Cinematic Hero with Cleanroom Fabrication Background */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Fab Foundry"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 py-20 mt-12 sm:mt-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-red/50 bg-brand-red/20 text-white font-medium text-xs sm:text-sm tracking-wide uppercase backdrop-blur-md">
            Semiconductor Fabrication
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
            <span className="text-white">Launching</span>{' '}
            <span className="text-brand-red">Soon</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light drop-shadow-md leading-relaxed">
            State-of-the-art cleanroom manufacturing, wafer processing, and precision silicon fabrication are currently under development.
          </p>
        </div>
      </div>
    </div>
  );
}
