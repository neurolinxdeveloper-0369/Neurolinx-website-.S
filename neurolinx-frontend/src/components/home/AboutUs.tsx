import React from 'react';

export function AboutUs() {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative z-10 overflow-hidden">
      {/* Subtle ambient crimson nebula glow matching hero section */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/[0.08] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 xl:gap-20 items-center relative z-10">
        
        {/* Left Side: Image / Graphics */}
        <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[580px]">
          <img 
            src="/media/about_us_lab.jpg" 
            alt="Neurolinx Electronics Lab" 
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
          />
          
          {/* Subtle red tint overlay to match brand */}
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-start">
          
          {/* Section Label */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">About Us</span>
            <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-display font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            Engineered for the <br/> Next Generation.
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed font-light">
            Welcome to <strong className="text-white font-semibold">Neurolinx Global Private Limited</strong>. We are a pioneering technology firm dedicated to delivering the best electronics, automation, and AI robotics systems to industries worldwide.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            From smart home automation and advanced railways to non-UV disinfection lighting, chip-level designing, and fab foundry services, our mission is to push the boundaries of modern innovation while prioritizing sustainability, safety, and uncompromising quality.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full border-t border-white/10 pt-6 sm:pt-8 lg:pt-10">
            <div className="group cursor-pointer">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-brand-red transition-colors">100%</p>
              <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">Quality Assured</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-brand-red transition-colors">24/7</p>
              <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">Active Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
