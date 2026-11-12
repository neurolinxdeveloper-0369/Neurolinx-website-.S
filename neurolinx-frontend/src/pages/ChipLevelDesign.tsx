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
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-[#08090D] pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-[#292A32]/80">
        
        {/* Subtle dark-red radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#E5092C]/[0.08] rounded-full blur-[150px] pointer-events-none"></div>

        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Chip-Level Designing"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[#08090D]/50 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 sm:px-6">
          <div className="reveal-item section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
            <span>Silicon Precision</span>
          </div>

          <h1 className="reveal-item font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white tracking-tight leading-[1.12] mb-5">
            Chip-Level Designing <br />
            <span className="text-[#E5092C] inline-block">
              Architecture.
            </span>
          </h1>

          <p className="reveal-item section-desc max-w-2xl mx-auto">
            From custom ASIC layouts to multi-layered high-density PCBs, we architect silicon and board-level solutions.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full bg-[#101116] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#292A32]/80 relative">
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
                  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Chip-Level Designing" 
                  className="w-full object-cover h-[450px] sm:h-[550px] filter grayscale hover:grayscale-0 transition-all duration-500" 
                />
                
                <div className="absolute bottom-6 left-6 right-6 bg-[#17181E]/95 backdrop-blur-md p-5 rounded-2xl border border-[#292A32] flex items-center space-x-4 shadow-2xl">
                  <div className="w-12 h-12 bg-[#E5092C]/15 border border-[#E5092C]/30 text-[#E5092C] rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base sm:text-lg text-white leading-tight">Nanometer Precision</div>
                    <div className="font-body text-xs text-[#A1A1AA] uppercase tracking-wider font-semibold mt-0.5">Industry Certified</div>
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
