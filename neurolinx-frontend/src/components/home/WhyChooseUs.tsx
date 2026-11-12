import React from 'react';

export function WhyChooseUs() {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20 lg:py-24 relative z-10 border-t border-white/10 overflow-hidden">
      {/* Subtle ambient crimson nebula glow matching hero section */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-red/[0.08] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Side: Heading and description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs sm:text-[13px]">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-display font-black text-white mb-4 sm:mb-6 leading-tight">
              Smart Solutions, Strong Reasons to Choose Neurolinx
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mb-6 sm:mb-8">
              We don't just build electronics; we engineer the future. Partner with us to experience unparalleled quality and global scale.
            </p>
          </div>

          {/* Right Side: Enhanced Spacious Card Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            
            {/* Left Column of Grid (Holds 01, 03, 04) */}
            <div className="flex flex-col gap-5 sm:gap-6 justify-between">
              
              {/* Card 01: Advanced Engineering (Larger, more spacious) */}
              <div className="bg-[#111114] border border-[#3A3A40] shadow-lg shadow-black/40 p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[36px] relative overflow-hidden group cursor-pointer hover:border-brand-red/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex-1 min-h-[185px] sm:min-h-[200px] flex flex-col justify-between">
                <span className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 z-0 text-[46px] sm:text-[56px] lg:text-[66px] font-black text-[#CBD5E1]/30 group-hover:text-[#CBD5E1]/50 transition-colors leading-none pointer-events-none select-none">
                  01
                </span>
                
                <div className="relative z-10 max-w-[80%]">
                  <div className="w-11 sm:w-12 h-11 sm:h-12 bg-white/5 border border-[#3A3A40] rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-red mb-3.5 group-hover:bg-brand-red/15 group-hover:border-brand-red/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-2 group-hover:text-brand-red transition-colors">
                    Advanced Engineering
                  </h3>
                  <p className="text-[#E5E7EB] text-sm sm:text-[15px] leading-relaxed font-medium">
                    State-of-the-art automation, robotics, and chip-level design.
                  </p>
                </div>
              </div>

              {/* Bottom Row inside Left Column (Holds 03 & 04 - Increased height and breathing room) */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 min-h-[255px] sm:min-h-[275px]">
                
                {/* Card 03: 100% Quality */}
                <div className="bg-[#111114] border border-[#3A3A40] shadow-lg shadow-black/40 p-5 sm:p-6 rounded-2xl sm:rounded-3xl lg:rounded-[36px] relative overflow-hidden group cursor-pointer hover:border-brand-red/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between">
                  {/* Content Top */}
                  <div className="relative z-10">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 bg-white/5 border border-[#3A3A40] rounded-xl flex items-center justify-center text-brand-red mb-3.5 group-hover:bg-brand-red/15 group-hover:border-brand-red/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-2 group-hover:text-brand-red transition-colors">
                      100% Quality
                    </h3>
                    <p className="text-[#E5E7EB] text-xs sm:text-[13.5px] leading-relaxed font-medium">
                      Rigorous testing from our fab foundry to final product.
                    </p>
                  </div>

                  {/* Dedicated Bottom Right Area for Number 03 (Zero text mix) */}
                  <div className="flex justify-end items-end pt-3 mt-auto relative z-10 pointer-events-none select-none">
                    <span className="text-[38px] sm:text-[44px] lg:text-[50px] font-black text-[#CBD5E1]/35 group-hover:text-[#CBD5E1]/55 transition-colors leading-none tracking-tight">
                      03
                    </span>
                  </div>
                </div>

                {/* Card 04: Sustainable */}
                <div className="bg-[#111114] border border-[#3A3A40] shadow-lg shadow-black/40 p-5 sm:p-6 rounded-2xl sm:rounded-3xl lg:rounded-[36px] relative overflow-hidden group cursor-pointer hover:border-brand-red/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between">
                  {/* Content Top */}
                  <div className="relative z-10">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 bg-white/5 border border-[#3A3A40] rounded-xl flex items-center justify-center text-brand-red mb-3.5 group-hover:bg-brand-red/15 group-hover:border-brand-red/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-2 group-hover:text-brand-red transition-colors">
                      Sustainable
                    </h3>
                    <p className="text-[#E5E7EB] text-xs sm:text-[13.5px] leading-relaxed font-medium">
                      Efficient energy systems designed to minimize impact.
                    </p>
                  </div>

                  {/* Dedicated Bottom Right Area for Number 04 (Zero text mix) */}
                  <div className="flex justify-end items-end pt-3 mt-auto relative z-10 pointer-events-none select-none">
                    <span className="text-[38px] sm:text-[44px] lg:text-[50px] font-black text-[#CBD5E1]/35 group-hover:text-[#CBD5E1]/55 transition-colors leading-none tracking-tight">
                      04
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column of Grid (Holds 02) */}
            <div className="bg-brand-red p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl lg:rounded-[36px] relative overflow-hidden group cursor-pointer shadow-2xl shadow-brand-red/25 border border-white/10 hover:shadow-brand-red/40 transition-all duration-300 h-full min-h-[480px] sm:min-h-[515px] flex flex-col justify-between">
              {/* Decorative Number 02 */}
              <span className="absolute top-4 sm:top-5 right-4 sm:right-6 z-0 text-[56px] sm:text-[68px] xl:text-[80px] font-black text-[#FFE4E6]/30 group-hover:text-[#FFE4E6]/45 transition-colors leading-none pointer-events-none select-none">
                02
              </span>
              
              <div className="relative z-10">
                <div className="w-12 sm:w-13 h-12 sm:h-13 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#FFFFFF] mb-3 leading-tight">
                  Global <br/> Supply Chain
                </h3>
              </div>
              
              <p className="text-[#FFFFFF] text-sm sm:text-[14.5px] leading-relaxed font-medium relative z-10 mt-8 sm:mt-12 lg:mt-auto">
                Rapid, secure deployment of smart solutions to partners worldwide, with zero delays.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
