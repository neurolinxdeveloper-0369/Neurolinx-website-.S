import React from 'react';
import { 
  Wind, 
  Sun, 
  Layers, 
  Database 
} from 'lucide-react';

export function RmsSmartMetering() {
  const solutions = [
    {
      title: "Wind Energy Monitoring",
      desc: "Collect and view data from connected wind energy equipment.",
      icon: Wind,
      badge: "Wind Energy",
    },
    {
      title: "Solar Energy Monitoring",
      desc: "Collect and view data from connected solar energy equipment.",
      icon: Sun,
      badge: "Solar Energy",
    },
    {
      title: "Hardware Support",
      desc: "Support for the hardware used in data collection and communication.",
      icon: Layers,
      badge: "Hardware Support",
    },
    {
      title: "Software Support",
      desc: "Support for the software used to receive, display, and monitor collected data.",
      icon: Database,
      badge: "Software Support",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 flex flex-col font-body selection:bg-brand-red selection:text-white">
      
      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC HERO BANNER                                          */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <img 
          src="/media/rms_hero_banner.jpg" 
          alt="Neurolinx RMS Application - Wind & Solar Data in One Dashboard"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: PROJECT OVERVIEW (MATCHING POS SECTION 2 LAYOUT)               */}
      {/* ========================================================================= */}
      <section id="overview" className="w-full py-20 sm:py-24 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center">
            {/* Header Accent Line */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">PROJECT OVERVIEW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 leading-tight">
              Remote Monitoring for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
                Wind &amp; Solar Energy
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-4">
              Integrated hardware and software solutions to collect, transmit, and monitor your renewable energy data.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our Remote Monitoring System brings wind and solar energy data together in one software platform. Hardware collects data from connected equipment and transfers it to our software, helping users monitor their installations remotely. We provide hardware and software support to keep the monitoring solution running smoothly.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: OUR SOLUTIONS                                                  */}
      {/* ========================================================================= */}
      <section id="solutions" className="w-full py-20 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center space-x-2 text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
              Our Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Dedicated monitoring solutions and dependable assistance tailored for wind and solar operations.
            </p>
          </div>

          {/* 4 Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 font-display">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
