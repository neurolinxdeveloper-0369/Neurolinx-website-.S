import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';

export function NotFound() {
  return (
    <div className="w-full min-h-[85vh] bg-black text-white flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative z-10 max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-brand-red shadow-xl">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-brand-red font-semibold">
            Error 404
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed pt-1">
            The page you are looking for doesn't exist, has been relocated, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-[#b00015] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-red/25"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/10"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
