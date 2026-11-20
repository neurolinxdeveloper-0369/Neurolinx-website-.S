import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ExperienceView() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-body relative overflow-hidden flex items-center justify-center selection:bg-brand-red selection:text-white">
      {/* Background Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Breadcrumb */}
      <div className="absolute top-20 sm:top-28 left-4 sm:left-10 z-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Centered Launching Soon Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-4 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-red text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span>Experience View</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight leading-tight drop-shadow-2xl">
          Launching <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Soon</span>
        </h1>
      </div>
    </div>
  );
}

export default ExperienceView;
