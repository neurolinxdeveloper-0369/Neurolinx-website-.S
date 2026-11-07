import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Radio, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Network, 
  Server, 
  Activity,
  Phone,
  Mail
} from 'lucide-react';

export function InternetOfThings() {
  const capabilities = [
    {
      icon: Radio,
      title: "Edge Telemetry Gateways",
      desc: "Multi-protocol edge devices supporting Cellular (4G/5G/NB-IoT), LoRaWAN, and Zigbee with zero-downtime offline caching.",
      badge: "Edge Hardware"
    },
    {
      icon: Network,
      title: "Sensor Mesh Networks",
      desc: "Ultra-low-power wireless sensor nodes engineered for industrial vibration, ambient climate, pressure, and energy auditing.",
      badge: "Sensor Infrastructure"
    },
    {
      icon: Cloud,
      title: "Real-Time Cloud Pipelines",
      desc: "High-throughput MQTT and WebSocket ingestion processing millions of device telemetry events per second with low latency.",
      badge: "Cloud Architecture"
    },
    {
      icon: ShieldCheck,
      title: "Hardware-Level Security",
      desc: "End-to-end cryptographic encryption with TLS 1.3, hardware root of trust (RoT), secure boot, and authenticated firmware.",
      badge: "Cybersecurity"
    },
    {
      icon: Activity,
      title: "Predictive Analytics & AI",
      desc: "Automated anomaly detection, predictive equipment maintenance schedules, and dynamic threshold alerting in real time.",
      badge: "Analytics"
    },
    {
      icon: Server,
      title: "OTA Firmware Management",
      desc: "Centralized device fleet orchestration, health monitoring, remote diagnostics, and fail-safe over-the-air firmware updates.",
      badge: "Fleet Operations"
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC HERO BANNER                                          */}
      {/* ========================================================================= */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-black" style={{ minHeight: '60vh' }}>
        <img 
          src="/media/smart_home_hero_iot.jpg" 
          alt="Internet of Things (IoT) Solutions"
          className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-20 pb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-brand-red/50 bg-brand-red/20 text-white font-medium text-xs tracking-wider uppercase backdrop-blur-md shadow-md">
            <Wifi className="w-3.5 h-3.5 text-brand-red" />
            Connected Intelligence &amp; Telemetry
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
            Internet of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">Things</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl font-light drop-shadow-md mb-8">
            Enterprise IoT ecosystems, edge computing gateways, smart sensor telemetry, and secure cloud pipelines engineered for mission-critical operations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#capabilities" 
              className="px-7 py-3.5 rounded-full bg-brand-red hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link 
              to="/contact" 
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: ARCHITECTURE OVERVIEW                                          */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-24 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">END-TO-END CONNECTIVITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 leading-tight">
              Bridging Field Hardware with <br className="hidden sm:block" />
              Cloud Intelligence
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-4">
              Neurolinx delivers fully integrated Internet of Things solutions that span custom edge hardware, ultra-reliable field communication protocols, and cloud-native ingestion engines.
            </p>
          </div>

          {/* Architecture 3-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">Layer 01</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">Field Edge &amp; Sensing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Precision sensors, micro-controllers, and smart metering devices capturing real-world environmental and electrical data.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6">
                  <Radio className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">Layer 02</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">Secure Gateways &amp; Mesh</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Industrial telemetry gateways providing failover routing across 4G LTE, NB-IoT, Ethernet, and local LoRaWAN clusters.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">Layer 03</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">Cloud Ingestion &amp; UI</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Massively scalable telemetry backends powering sub-second live dashboards, predictive alerts, and enterprise API hooks.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: CORE CAPABILITIES                                              */}
      {/* ========================================================================= */}
      <section id="capabilities" className="w-full py-24 sm:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-2 text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
              Comprehensive IoT Architecture
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Engineered to operate reliably in demanding utility, commercial, and industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 rounded-2xl bg-[#F8F9FA] border border-gray-200 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
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

      {/* ========================================================================= */}
      {/* SECTION 4: CALL TO ACTION BANNER                                          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="w-full bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-2">
              BUILD CONNECTED HARDWARE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Deploy Your IoT Solution with Neurolinx
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Connect with our IoT engineering team to discuss custom hardware design, gateway protocols, and enterprise telemetry integration.
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
              <span>Discuss IoT Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
