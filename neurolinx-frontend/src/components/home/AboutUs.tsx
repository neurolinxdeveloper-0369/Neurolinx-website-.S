import React from 'react';

export function AboutUs() {
  return (
    <section className="w-full bg-white py-32 relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Image / Graphics */}
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[600px]">
          <img 
            // Using the user's custom lab image
            src="/media/about_us_lab.jpg" 
            alt="Neurolinx Electronics Lab" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-pointer"
          />
          
          {/* Subtle red tint overlay to match brand */}
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-start">
          
          {/* Section Label */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-1 bg-brand-red rounded-full"></div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">About Us</span>
            <div className="w-10 h-1 bg-brand-red rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-black text-brand-charcoal mb-8 leading-[1.1] tracking-tight">
            Engineered for the <br/> Next Generation.
          </h2>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
            Welcome to <strong className="text-brand-charcoal font-semibold">Neurolinx Global Private Limited</strong>. We are a pioneering technology firm dedicated to delivering the best electronics, automation, and AI robotics systems to industries worldwide.
          </p>
          
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            From smart home automation and advanced railways to non-UV disinfection lighting, chip-level designing, and fab foundry services, our mission is to push the boundaries of modern innovation while prioritizing sustainability, safety, and uncompromising quality.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-12 w-full border-t border-gray-200 pt-10">
            <div className="group cursor-pointer">
              <p className="text-4xl font-black text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">100%</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Quality Assured</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-4xl font-black text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">24/7</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Active Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
