import React from 'react';

export function Robotics() {
  return (
    <div className="w-full bg-[#08090D] text-white flex flex-col font-body selection:bg-[#E5092C] selection:text-white min-h-screen">
      
      {/* Cinematic Hero with Launching Soon */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Robotics Image */}
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Robotics & AI"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

        {/* Centered Launching Soon Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto px-4 flex flex-col items-center justify-center -translate-y-4 sm:-translate-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-brand-red text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span>Robotics &amp; AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight leading-tight drop-shadow-2xl">
            Launching <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Soon</span>
          </h1>
        </div>

      </div>

    </div>
  );
}

export default Robotics;
