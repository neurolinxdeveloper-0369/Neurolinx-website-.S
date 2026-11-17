import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ChipLevelDesign() {
  const products = [
    { title: "Custom ASIC Layouts", desc: "Optimized for ultra-low power consumption" },
    { title: "High-Speed PCB Design", desc: "Impedance-matched RF & digital routing" },
    { title: "FPGA Prototyping", desc: "Rapid verification before silicon fabrication" },
    { title: "Thermal Modeling", desc: "Advanced FEA simulation for thermal relief" }
  ];

  return (
    <div className="w-full bg-[#08090D] text-white flex flex-col font-body selection:bg-[#E5092C] selection:text-white min-h-screen">
      
      {/* Cinematic Hero */}
      <div className="relative w-full min-h-[65vh] sm:min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-16">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Chip-Level Designing"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-black/60 to-black/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-400 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
            <span>Semiconductors & VLSI Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
            Precision Silicon &amp; <span className="text-[#E5092C]">Chip-Level Design</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Accelerating silicon engineering from RTL architecture and UVM verification to physical synthesis, tapeout, and impedance-matched HDI PCB layouts.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#E5092C] hover:bg-[#c00724] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E5092C]/25"
            >
              Inquire for Project
            </Link>
            <a
              href="#capabilities"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="capabilities" className="w-full bg-[#101116] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#292A32]/80 relative">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="reveal-item section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
                <span>Core Capabilities</span>
              </div>

              <h2 className="reveal-item section-heading">
                Microscopic Engineering.
              </h2>

              <p className="reveal-item section-desc">
                Accelerate your hardware development with our world-class VLSI and PCB design capabilities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {products.map((product, i) => (
                  <div 
                    key={i} 
                    className="reveal-card flex flex-col bg-[#17181E] rounded-2xl p-5 sm:p-6 border border-[#292A32] hover:border-[#E5092C]/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#101116] border border-[#292A32] flex items-center justify-center mb-4 group-hover:bg-[#E5092C]/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#E5092C]" />
                    </div>
                    <h3 className="card-title text-base sm:text-lg mb-1.5">{product.title}</h3>
                    <p className="card-desc">{product.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="font-body inline-flex items-center gap-2 px-7 py-3.5 bg-[#E5092C] hover:bg-[#d00827] text-white rounded-full font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#E5092C]/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-6 relative sticky top-[120px]">
              <div className="rounded-3xl overflow-hidden border border-[#292A32] shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Chip-Level Designing" 
                  className="w-full object-cover h-[450px] sm:h-[550px] filter grayscale hover:grayscale-0 transition-all duration-500" 
                />
                
                <div className="absolute bottom-6 left-6 right-6 bg-[#17181E]/95 backdrop-blur-md p-5 rounded-2xl border border-[#292A32] flex items-center space-x-4 shadow-2xl">
                  <div className="w-12 h-12 bg-[#E5092C]/15 border border-[#E5092C]/30 text-[#E5092C] rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base sm:text-lg text-white leading-tight">IPC-A-610 Class 3</div>
                    <div className="font-body text-xs text-[#A1A1AA] uppercase tracking-wider font-semibold mt-0.5">High Reliability Assembly</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ChipLevelDesign;
