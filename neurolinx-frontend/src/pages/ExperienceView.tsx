import React from 'react';

export function ExperienceView() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-body flex items-center justify-center relative overflow-hidden select-none">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Centered Launching Soon Heading Only */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight">
          Launching <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Soon</span>
        </h1>
      </div>

    </div>
  );
}
