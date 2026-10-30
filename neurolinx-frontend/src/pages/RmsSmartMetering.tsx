import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Activity, Radio, Database, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function RmsSmartMetering() {
  const capabilities = [
    { 
      title: "Remote Monitoring Systems (RMS)", 
      desc: "Industrial-grade edge telemetry controllers providing real-time health diagnostics, power tracking, and predictive fault monitoring.", 
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Smart Metering Analytics", 
      desc: "Cloud-native analytics engines processing 1-phase & 3-phase AMR/AMI meter data for peak load forecasting and loss reduction.", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Railway Utility Telemetry", 
      desc: "RDSO-compliant railway substation automation, SCADA integration, and catenary power monitoring interfaces.", 
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Edge Gateway & DLMS Protocol", 
      desc: "DLMS/COSEM certified IoT gateways with cellular, NB-IoT, and LoRaWAN fallback for zero-downtime data pipelines.", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body">
      {/* Cinematic Hero */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-brand-charcoal" style={{ minHeight: '60vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="RMS and Smart Metering Analytics"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-20 pb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-brand-red/50 bg-brand-red/20 text-white font-medium text-xs tracking-wider uppercase backdrop-blur-md">
            <Gauge className="w-3.5 h-3.5 text-brand-red" />
            Utility & Railway Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
            RMS & Smart Metering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              Analytics.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl font-light drop-shadow-md">
            Advanced remote monitoring systems, DLMS/COSEM smart grid data pipelines, and predictive telemetry analytics engineered for utility infrastructure.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mb-4 leading-tight">
            Comprehensive Telemetry & Metering Intelligence
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-16 max-w-2xl">
            End-to-end telemetry solutions integrating embedded hardware gateways with cloud-native predictive data pipelines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full text-left">
            {capabilities.map((item, i) => (
              <div key={i} className="flex flex-col bg-white overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="h-52 w-full overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-1 bg-gray-50/50">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-red transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation CTA */}
          <div className="w-full bg-[#0F172A] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Custom RMS or Metering Architecture?</h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Our engineering team designs custom DLMS smart gateways, edge telemetry protocols, and SCADA analytics platforms.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-3.5 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-red-700 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
