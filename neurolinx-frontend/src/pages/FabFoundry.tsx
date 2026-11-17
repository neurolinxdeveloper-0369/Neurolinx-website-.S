import React from 'react';

export function FabFoundry() {
  return (
    <div className="w-full min-h-[85vh] bg-white text-slate-900 flex flex-col items-center justify-center font-body selection:bg-brand-red selection:text-white px-4 pt-16 pb-24">
      <div className="text-center max-w-lg mx-auto flex flex-col items-center justify-center -translate-y-8 sm:-translate-y-12">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-brand-red text-xs font-bold tracking-widest uppercase mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span>Fab Foundry</span>
        </div>

        {/* Centered Launching Soon Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-slate-900 tracking-tight leading-tight">
          Launching <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Soon</span>
        </h1>
      </div>
    </div>
  );
}

export default FabFoundry;
