import React from 'react';

export function WhyChooseUs() {
  return (
    <section className="w-full bg-transparent py-16 sm:py-20 lg:py-24 relative z-10 border-t border-white/10 overflow-hidden">
      {/* Subtle ambient crimson nebula glow matching hero section */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-red/[0.08] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Side: Heading and description with increased size */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* WHY CHOOSE US label (13-14px, red, original style) */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-[13px] sm:text-[14px]">
                Why Choose Us
              </span>
            </div>
            
            {/* Main heading: 48-54px desktop, font-extrabold, #FFFFFF, leading 1.15 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-display font-extrabold text-[#FFFFFF] mb-5 sm:mb-6 leading-[1.15] tracking-tight">
              Smart Solutions, Strong Reasons to Choose Neurolinx
            </h2>
            
            {/* Description: 18-20px, #D1D5DB, leading 1.6 */}
            <p className="text-[#D1D5DB] text-base sm:text-lg lg:text-[19px] xl:text-[20px] leading-[1.6] font-normal mb-8 sm:mb-10 max-w-xl">
              We don't just build electronics; we engineer the future. Partner with us to experience unparalleled quality and global scale.
            </p>
          </div>

          {/* Right Side: Exact Layout with Dedicated Number Space (Zero Overlap) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Left Column of Grid (Holds 01, 03, 04) */}
            <div className="flex flex-col gap-5 sm:gap-6">
              
              {/* Card 01: Advanced Engineering (Wide Rectangle) */}
              <div className="bg-[#111114] border border-[#3A3A40] shadow-lg shadow-black/40 p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[40px] relative overflow-hidden group cursor-pointer hover:border-brand-red/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 min-h-[185px] sm:min-h-[195px] flex flex-col justify-between">
                {/* Dedicated Decorative Number 01: silver-gray (#8B8D95), bottom-right corner */}
                <span className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 z-0 text-[65px] sm:text-[78px] lg:text-[88px] font-black text-[#8B8D95] leading-none pointer-events-none select-none tracking-tight">
                  01
                </span>
                
                {/* Content Layer: pr-4 / max-w-[72%] ensures a guaranteed 20px+ gap from number 01 */}
                <div className="relative z-10 max-w-[72%] sm:max-w-[74%] pr-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/5 border border-[#3A3A40] rounded-xl flex items-center justify-center text-brand-red mb-3.5 sm:mb-4 group-hover:bg-brand-red/15 group-hover:border-brand-red/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-2 group-hover:text-brand-red transition-colors">
                    Advanced Engineering
                  </h3>
                  <p className="text-[#E5E7EB] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] font-medium">
                    State-of-the-art automation, robotics, and chip-level design.
                  </p>
                </div>
              </div>

              {/* Bottom Row inside Left Column (Holds 03 & 04) */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 min-h-[260px] sm:min-h-[280px]">
                
                {/* Card 03: 100% Quality (Small Square) */}
                <div className="bg-[#111114] border border-[#3A3A40] shadow-lg shadow-black/40 p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl lg:rounded-[40px] relative overflow-hidden group cursor-pointer hover:border-brand-red/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between">
                  {/* Content Top */}
                  <div className="relative z-10">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/5 border border-[#3A3A40] rounded-xl flex items-center justify-center text-brand-red mb-3 group-hover:bg-brand-red/15 group-hover:border-brand-red/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF] mb-1.5 group-hover:text-brand-red transition-colors">
                      100% Quality
                    </h3>
                    <p className="text-[#E5E7EB] text-[13px] sm:text-[14px] leading-[1.5] font-medium">
                      Rigorous testing from our fab foundry to final product.
                    </p>
                  </div>

                  {/* Dedicated Bottom Area for Number: Separate row ensures zero overlap */}
                  <div className="flex justify-end items-end pt-3 mt-auto relative z-10 pointer-events-none select-none">
                    <span className="text-[44px] sm:text-[50px] lg:text-[56px] font-black text-[#8B8D95] leading-none tracking-tight">
                      03
                    </span>
                  </div>
                </div>

                {/* Card 04: Sustainable (Small Square) */}
                <div className="bg-[#111114] border border-[#3A3A40] shadow-lg shadow-black/40 p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl lg:rounded-[40px] relative overflow-hidden group cursor-pointer hover:border-brand-red/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between">
                  {/* Content Top */}
                  <div className="relative z-10">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/5 border border-[#3A3A40] rounded-xl flex items-center justify-center text-brand-red mb-3 group-hover:bg-brand-red/15 group-hover:border-brand-red/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF] mb-1.5 group-hover:text-brand-red transition-colors">
                      Sustainable
                    </h3>
                    <p className="text-[#E5E7EB] text-[13px] sm:text-[14px] leading-[1.5] font-medium">
                      Efficient energy systems designed to minimize impact.
                    </p>
                  </div>

                  {/* Dedicated Bottom Area for Number: Separate row ensures zero overlap */}
                  <div className="flex justify-end items-end pt-3 mt-auto relative z-10 pointer-events-none select-none">
                    <span className="text-[44px] sm:text-[50px] lg:text-[56px] font-black text-[#8B8D95] leading-none tracking-tight">
                      04
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column of Grid (Holds 02) */}
            <div className="bg-brand-red p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[40px] relative overflow-hidden group cursor-pointer shadow-2xl shadow-brand-red/25 border border-white/10 hover:shadow-brand-red/40 transition-all duration-300 h-full min-h-[475px] sm:min-h-[505px] flex flex-col justify-between">
              {/* Dedicated Decorative Number 02: light red (#FF6B7A), top-right corner */}
              <span className="absolute top-4 sm:top-6 right-4 sm:right-7 z-0 text-[85px] sm:text-[105px] lg:text-[120px] font-black text-[#FF6B7A] leading-none pointer-events-none select-none tracking-tight">
                02
              </span>
              
              {/* Top Content: pr-2 / max-w-[62%] ensures minimum 20px gap from number 02 */}
              <div className="relative z-10 max-w-[62%] sm:max-w-[65%] pr-2">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 leading-tight">
                  Global <br/> Supply Chain
                </h3>
              </div>
              
              {/* Bottom Description: separated by 200px+ vertically from number 02 */}
              <p className="text-[#FFFFFF] text-[15px] sm:text-base leading-[1.5] font-medium relative z-10 mt-8 sm:mt-12 lg:mt-auto pt-6">
                Rapid, secure deployment of smart solutions to partners worldwide, with zero delays.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
