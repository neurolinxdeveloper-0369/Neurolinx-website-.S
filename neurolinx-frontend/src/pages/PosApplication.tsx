import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Smartphone, ShieldCheck, Cpu, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export function PosApplication() {
  const features = [
    { 
      title: "Embedded Terminal Software", 
      desc: "High-performance POS application runtime optimized for Android POS, Linux micro-terminals, and standalone payment hardware.", 
      img: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Omnichannel Transaction Engine", 
      desc: "Unified processing for EMV chip cards, contactless NFC, BharatQR, UPI, and digital wallet payment rails with sub-second latency.", 
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "PCI-PTS & End-to-End Encryption", 
      desc: "Bank-grade HSM tokenization, DUKPT key management, and PCI-DSS compliance built into the core firmware architecture.", 
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Cloud Fleet & Terminal Management", 
      desc: "Over-the-air (OTA) remote application updates, real-time telemetry diagnostics, and centralized multi-store reconciliation.", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body">
      {/* Cinematic Hero */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-brand-charcoal" style={{ minHeight: '60vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="POS Application"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/55"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-20 pb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-brand-red/50 bg-brand-red/20 text-white font-medium text-xs tracking-wider uppercase backdrop-blur-md">
            <CreditCard className="w-3.5 h-3.5 text-brand-red" />
            Fintech & Retail Hardware Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl">
            Intelligent POS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              Applications.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl font-light drop-shadow-md">
            Secure, PCI-compliant embedded terminal software and cloud reconciliation engines engineered for next-gen point-of-sale hardware.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal mb-4 leading-tight">
            Enterprise Payment & Terminal Infrastructure
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-16 max-w-2xl">
            Custom embedded POS applications engineered for high transaction concurrency, offline resilience, and multi-protocol flexibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full text-left">
            {features.map((item, i) => (
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
              <h3 className="text-2xl font-bold mb-2">Deploying POS Terminals or Payment Hubs?</h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Partner with Neurolinx for custom firmware porting, payment kernel certification, and cloud terminal management.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-3.5 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-red-700 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Request POS Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
