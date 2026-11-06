import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  Sun, 
  Layers, 
  ArrowRight,
  Database,
  Check,
  Phone,
  Mail
} from 'lucide-react';

export function RmsSmartMetering() {
  const solutions = [
    {
      title: "Wind Energy Monitoring",
      desc: "Collect and view data from connected wind energy equipment.",
      icon: Wind,
      badge: "Wind Energy",
      highlight: "Centralized monitoring interface for connected wind equipment",
    },
    {
      title: "Solar Energy Monitoring",
      desc: "Collect and view data from connected solar energy equipment.",
      icon: Sun,
      badge: "Solar Energy",
      highlight: "Centralized monitoring interface for connected solar equipment",
    },
    {
      title: "Hardware Support",
      desc: "Support for the hardware used in data collection and communication.",
      icon: Layers,
      badge: "Hardware",
      highlight: "Assistance for on-site data collection and transmission hardware",
    },
    {
      title: "Software Support",
      desc: "Support for the software used to receive, display, and monitor collected data.",
      icon: Database,
      badge: "Software",
      highlight: "Assistance for centralized monitoring software and interfaces",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">
      
      {/* ── 1. Hero Showcase Section ── */}
      <section className="w-full bg-white relative overflow-hidden pt-28 sm:pt-32 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero Visual Card: Seamless White Showcase */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white transition-all">
            <img 
              src="/media/remote_monitoring_system_hero.jpg" 
              alt="Remote Monitoring Systems (RMS) - Wind & Solar Data in One Dashboard"
              className="w-full h-auto block object-contain"
            />
          </div>

        </div>
      </section>

      {/* ── 2. Project Overview Section ── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-brand-red/20 bg-red-50 text-brand-red font-semibold text-xs uppercase tracking-wider">
            <span>Project Overview</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-brand-charcoal mb-4 sm:mb-5 leading-tight">
            Remote Monitoring for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
              Wind &amp; Solar Energy
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed">
            Integrated hardware and software solutions to collect, transmit, and monitor your renewable energy data.
          </p>
        </div>

        {/* Detailed Overview Card */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-100 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Our Remote Monitoring System brings wind and solar energy data together in one software platform. Hardware collects data from connected equipment and transfers it to our software, helping users monitor their installations remotely. We provide hardware and software support to keep the monitoring solution running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Our Solutions Section ── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-gray-100">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-brand-red/20 bg-red-50 text-brand-red font-semibold text-xs uppercase tracking-wider">
            <span>Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-charcoal mb-4">
            Our Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Comprehensive monitoring solutions and dependable assistance tailored for wind and solar operations.
          </p>
        </div>

        {/* 2x2 Grid with Interactive Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-red-50 text-gray-700 group-hover:text-brand-red flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {item.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2.5">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                  <Check className="w-4 h-4 text-brand-red shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. Integrated Hardware & Software Synergy Banner ── */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-white shadow-lg border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">
                Integrated Approach
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Hardware &amp; Software Working Together
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We combine field hardware for reliable data collection with intuitive software for centralized monitoring, backed by complete assistance across both systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-xs font-semibold text-red-300 block mb-1">Hardware Support</span>
                <p className="text-xs text-gray-300">Support for hardware used in data collection and communication.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-xs font-semibold text-red-300 block mb-1">Software Support</span>
                <p className="text-xs text-gray-300">Support for software used to receive, display, and monitor data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Call To Action Section ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="w-full bg-[#0F172A] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-2">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Discuss Your RMS Requirements
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Connect with our team to discuss hardware and software monitoring solutions for your renewable energy equipment.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-300">
              <a href="tel:+917013486961" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>+91 7013486961</span>
              </a>
              <span className="text-gray-600">•</span>
              <a href="mailto:support@neurolinx.in" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <span>support@neurolinx.in</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full bg-brand-red hover:bg-red-700 text-white text-sm font-semibold transition-all shadow-lg shadow-brand-red/30 flex items-center gap-2 hover:scale-105 cursor-pointer"
            >
              <span>Discuss Your RMS Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
