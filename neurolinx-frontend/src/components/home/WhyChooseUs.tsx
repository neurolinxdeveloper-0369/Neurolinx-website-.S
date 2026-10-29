import React from 'react';

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f7f2f2] py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Heading */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-1 bg-brand-red rounded-full"></div>
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-charcoal mb-6 leading-tight">
              Smart Solutions, Strong Reasons to Choose Neurolinx
            </h2>
            
            <p className="text-gray-500 leading-relaxed font-light mb-8">
              We don't just build electronics; we engineer the future. Partner with us to experience unparalleled quality and global scale.
            </p>
          </div>

          {/* Right Side: Exact Layout from Image */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column of Grid (Holds 01, 03, 04) */}
            <div className="flex flex-col gap-6">
              
              {/* Card 01: Advanced Engineering (Wide Rectangle) */}
              <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-[40px] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 flex-1">
                <span className="absolute bottom-0 right-4 text-[120px] font-black text-gray-200 leading-none pointer-events-none">01</span>
                <div className="w-12 h-12 bg-[#f7f2f2] rounded-xl flex items-center justify-center text-brand-red mb-4 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2 relative z-10">Advanced Engineering</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10 max-w-[80%]">
                  State-of-the-art automation, robotics, and chip-level design.
                </p>
              </div>

              {/* Bottom Row inside Left Column (Holds 03 & 04) */}
              <div className="grid grid-cols-2 gap-6 h-[220px]">
                
                {/* Card 03: 100% Quality (Small Square) */}
                <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-[40px] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <span className="absolute bottom-0 right-4 text-[100px] font-black text-gray-200 leading-none pointer-events-none">03</span>
                  <div className="w-10 h-10 bg-[#f7f2f2] rounded-xl flex items-center justify-center text-brand-red mb-4 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal mb-2 relative z-10">100% Quality</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light relative z-10">
                    Rigorous testing from our fab foundry to final product.
                  </p>
                </div>

                {/* Card 04: Sustainable (Small Square) */}
                <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-[40px] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <span className="absolute bottom-0 right-4 text-[100px] font-black text-gray-200 leading-none pointer-events-none">04</span>
                  <div className="w-10 h-10 bg-[#f7f2f2] rounded-xl flex items-center justify-center text-brand-red mb-4 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal mb-2 relative z-10">Sustainable</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light relative z-10">
                    Efficient energy systems designed to minimize impact.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column of Grid (Holds 02) */}
            <div className="bg-brand-red p-10 rounded-[40px] relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
              <span className="absolute top-4 right-4 text-[180px] font-black text-black/15 leading-none pointer-events-none">02</span>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-4xl font-black text-white mb-4 leading-tight">Global <br/> Supply Chain</h3>
              </div>
              
              <p className="text-white/90 text-sm leading-relaxed font-medium relative z-10 mt-20">
                Rapid, secure deployment of smart solutions to partners worldwide, with zero delays.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
