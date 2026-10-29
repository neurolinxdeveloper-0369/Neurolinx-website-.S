import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Train, 
  Lightbulb, 
  Radio, 
  Activity, 
  Zap, 
  ArrowRight, 
  FileText, 
  PhoneCall, 
  Award, 
  Clock, 
  Layers,
  Eye,
  AlertTriangle,
  Sliders
} from 'lucide-react';

export function Railways() {
  // Fog Pass version toggle
  const [fogPassVersion, setFogPassVersion] = useState<'v2' | 'v3'>('v3');
  
  // Category filter
  const [filterCategory, setFilterCategory] = useState<'all' | 'signaling' | 'lighting' | 'loco'>('all');

  const railwayProducts = [
    {
      id: "fog-pass",
      category: "signaling",
      number: "01",
      title: "Fog Pass Device (Version 2.0 & 3.0)",
      tagline: "RDSO-Compliant Driver Audio-Visual Navigation",
      desc: "Critical onboard safety device providing loco pilots with real-time audio and visual alerts for approaching signals, level crossing gates, and track landmarks during dense fog and low-visibility weather.",
      img: "/media/fog_pass.png",
      badge: "Flagship Safety System",
      hasVersions: true,
      specs: [
        "Centimeter-Level Multi-Constellation GNSS",
        "High-Contrast Sunlight-Readable OLED Display",
        "Audio Voice Warnings in Regional Languages",
        "Tested for RDSO Specification Compliance"
      ]
    },
    {
      id: "signal-exchangers",
      category: "signaling",
      number: "02",
      title: "Signal Exchangers",
      tagline: "Fail-Safe Optical & Electronic Interlocking",
      desc: "Heavy-duty digital and relay signal exchangers engineered for railway trackside interlocking, track circuits, and station master control cabins. Ensures zero signal degradation across vast rail yards.",
      img: "/media/signaling_systems.jpg",
      badge: "Trackside Interlocking",
      specs: [
        "Galvanic Optical Isolation (>3kV)",
        "Redundant Dual-Channel Architecture",
        "Lightning & Inrush Surge Suppressors",
        "Vibration Proof to IEC 61373 Standards"
      ]
    },
    {
      id: "foot-lamps",
      category: "lighting",
      number: "03",
      title: "Foot Lamps",
      tagline: "Ruggedized Passenger Footstep Illumination",
      desc: "MIL-SPEC stainless-steel footstep lighting fixtures mounted at passenger coach entryways. Prevents boarding slips and withstands extreme ballast vibration, dust, and pressure washing.",
      img: "/media/foot_lamps.png",
      badge: "Coach Hardware",
      specs: [
        "IP66 / IP67 Ingress Water & Dust Proof",
        "Cast Stainless Steel Enclosure",
        "Vibration & Ballast Stone Impact Tolerant",
        "110V DC Direct Railway Coach Supply"
      ]
    },
    {
      id: "indirect-lighting",
      category: "lighting",
      number: "04",
      title: "Indirect Coach Lighting",
      tagline: "Glare-Free Ambient LED Cove Systems",
      desc: "Premium indirect architectural LED lighting designed for Vande Bharat, Tejas, and modern Rajdhani coaches. Delivers soft, uniform illumination without glare or visible hotspots.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&q=80&auto=format&fit=crop",
      badge: "Interior Aesthetics",
      specs: [
        "Continuous Aluminum Extrusion Coves",
        "Flicker-Free Constant Current Drivers",
        "High CRI (>85) Warm & Cool Tuning",
        "Harmonic Distortion (THD) < 10%"
      ]
    },
    {
      id: "loco-headlight",
      category: "loco",
      number: "05",
      title: "LED LOCO Head Light",
      tagline: "High-Intensity Twin-Beam Front Illuminator",
      desc: "Ruggedized locomotive front headlight providing a razor-sharp high-intensity beam exceeding 500 meters. Features twin sealed LED light engines with independent power drivers for fail-safe redundancy.",
      img: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?w=800&q=80&auto=format&fit=crop",
      badge: "Locomotive Exterior",
      specs: [
        ">500,000 Candela Peak Intensity",
        "Twin Sealed Optical Engines",
        "Active Thermal De-Icing & Defogging",
        "Wide Input Voltage: 72V to 140V DC"
      ]
    },
    {
      id: "flasher-light",
      category: "loco",
      number: "06",
      title: "LED Flasher Light",
      tagline: "Amber Emergency Warning Beacon",
      desc: "Critical locomotive emergency warning system emitting a high-intensity flashing amber strobe visible in daylight, dense fog, and torrential rain to alert oncoming trains of emergency stops.",
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80&auto=format&fit=crop",
      badge: "Emergency Signalling",
      specs: [
        "Amber High-Intensity Strobe Pattern (60-80 FPM)",
        "Fail-Safe Dual Driver Redundancy",
        "Ultra-High Visibility (>2 Kilometers)",
        "Weatherproof Die-Cast Aluminum Housing"
      ]
    },
    {
      id: "marker-light",
      category: "loco",
      number: "07",
      title: "LED Marker Light",
      tagline: "Red & White Identification Indicators",
      desc: "Dual-color (Red & White) identification marker lights mounted on the front and rear of locomotives and inspection coaches. Signals train position and travel direction to track personnel and station cabins.",
      img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80&auto=format&fit=crop",
      badge: "Position Indicator",
      specs: [
        "Independent Red & White Sealed Optic Modules",
        "Anti-Glare Collimator Lenses",
        "Ultra-Low Power Consumption (<15W)",
        "Long Life: >100,000 Hours Continuous"
      ]
    }
  ];

  const filteredProducts = railwayProducts.filter(p => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Top Trust Announcement Bar ── */}
      <div className="bg-[#0B0F19] text-slate-300 pt-24 pb-2 px-4 text-xs font-medium border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-white font-semibold">Indian Railways Qualified</span>
            <span className="text-slate-500">•</span>
            <span>RDSO Compliant Engineering</span>
            <span className="text-slate-500">•</span>
            <span>Tested to IEC 61373 & IEC 60571</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-400">
            <a href="tel:+917013486961" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-red" />
              <span>Tender & Technical Queries: +91 7013486961</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Cinematic Hero ── */}
      <div className="relative w-full overflow-hidden bg-[#0B0F19] text-white pt-2 pb-16 md:pt-3 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/media/railways_hero.jpg"
            alt="Advanced Railway Electronics"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 text-red-300 font-semibold text-xs tracking-wider uppercase mb-6 backdrop-blur-md">
                <Train className="w-3.5 h-3.5 text-brand-red" />
                Railway Signaling & Rolling Stock Electronics
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6 leading-[1.12]">
                Advanced Railway <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-orange-400">
                  Electronics & Signaling.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
                Engineering mission-critical electronic systems for Indian Railways. From <strong className="text-white font-semibold">Fog Pass Devices (v2.0 & v3.0)</strong> and <strong className="text-white font-semibold">Signal Exchangers</strong> to <strong className="text-white font-semibold">LED LOCO Head Lights</strong> and <strong className="text-white font-semibold">Indirect Coach Illumination</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a 
                  href="#railway-products"
                  className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Explore 7 Railway Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#fog-pass-section"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 text-brand-red" />
                  <span>Fog Pass v2.0 vs v3.0</span>
                </a>
              </div>

              {/* Compliance Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span>RDSO</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Specification Compliant</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Zap className="w-5 h-5 shrink-0" />
                    <span>IEC 61373</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Vibration & Shock Tolerant</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Award className="w-5 h-5 shrink-0" />
                    <span>IP66 / IP67</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Heavy Ingress Protection</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Clock className="w-5 h-5 shrink-0" />
                    <span>100K+ Hrs</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Operating Reliability</span>
                </div>
              </div>
            </div>

            {/* Right Hero Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse"></div>
                    <span className="text-xs tracking-wider uppercase font-semibold text-gray-300">Loco Pilot Dashboard</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                    Active Rail Telemetry
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden mb-6 h-56 w-full group">
                  <img
                    src="/media/fog_pass.png"
                    alt="Fog Pass Device"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">Fog Pass Next-Gen v3.0</span>
                    <span className="text-brand-red font-bold">Signal Approaching: 500m</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 text-[10px] block uppercase">Head Light Status</span>
                    <span className="text-white font-bold">Twin Beam 110V Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 text-[10px] block uppercase">Signal Telemetry</span>
                    <span className="text-emerald-400 font-bold">Clear Green Verified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Feature Deep Dive: Fog Pass Version 2.0 vs Version 3.0 ── */}
      <div id="fog-pass-section" className="w-full bg-gray-50 py-24 px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-100 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
              Loco Pilot Navigation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Fog Pass Device: Version 2.0 & Version 3.0
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Designed specifically for harsh Northern and Eastern railway winter conditions where fog limits visibility to near zero.
            </p>

            {/* Version Toggle */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setFogPassVersion('v2')}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${
                  fogPassVersion === 'v2'
                    ? 'bg-[#0F172A] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                Fog Pass Version 2.0 (Field Proven)
              </button>

              <button
                onClick={() => setFogPassVersion('v3')}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${
                  fogPassVersion === 'v3'
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                Fog Pass Version 3.0 (Next-Gen AI & Telemetry)
              </button>
            </div>
          </div>

          {/* Version Comparison Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
            {fogPassVersion === 'v2' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase mb-3">
                    Standard Fleet Deployment
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Fog Pass Version 2.0</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Ruggedized GPS-based standalone driver advisory system. Reads pre-mapped landmark coordinates (signals, LC gates, turnouts) and provides clear multi-lingual voice calls and distance-to-signal countdowns.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 mb-6">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> 50-Channel High Sensitivity GPS Receiver</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Audio Alerts in English, Hindi & Regional</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Internal Li-Ion Battery Backup (18+ Hours)</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> USB Port for Route Landmark Updates</div>
                  </div>

                  <a 
                    href="#rfq-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-bold text-xs hover:bg-black transition-colors"
                  >
                    <span>Request Version 2.0 Datasheet</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img src="/media/fog_pass.png" alt="Fog Pass v2.0" className="w-full h-full object-cover" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-brand-red text-xs font-bold uppercase mb-3">
                    Next-Generation Innovation
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Fog Pass Version 3.0 (Cloud & AI Powered)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Enhanced with dual-frequency multi-constellation GNSS (GPS + NavIC / IRNSS + GLONASS), integrated 4G/LTE cloud telemetry, speed profile monitoring, and automated over-the-air route updates.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 mb-6">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> NavIC + Multi-GNSS Sub-Meter Precision</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Real-time Cloud Telemetry & Live Fleet Map</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> High-Resolution 7-Inch OLED Sunlight Display</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> OTA Route Synchronization via 4G/LTE</div>
                  </div>

                  <a 
                    href="#rfq-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red text-white font-bold text-xs hover:bg-red-700 shadow-md shadow-brand-red/30 transition-all"
                  >
                    <span>Request Version 3.0 Tech Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img src="/media/fog_pass.png" alt="Fog Pass v3.0" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── 7 Railway Products Catalog ── */}
      <div id="railway-products" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
            Railway Product Line
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Complete Rolling Stock & Signaling Portfolio.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            All 7 product lines built strictly to Indian Railway standards, RDSO specifications, and ruggedized for extreme field longevity.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 7 Railway Products' },
              { id: 'signaling', label: 'Signaling & Fog Pass' },
              { id: 'lighting', label: 'Coach Lighting & Foot Lamps' },
              { id: 'loco', label: 'Locomotive Exterior Lights' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  filterCategory === tab.id
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id} 
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20">
                  {prod.badge}
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-red text-white font-black text-xs flex items-center justify-center shadow-lg">
                  {prod.number}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="text-xs font-bold text-brand-red tracking-wider uppercase mb-1">
                  {prod.tagline}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {prod.desc}
                </p>

                {/* Sub-features list */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {prod.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Technical Tender & RFQ Form Strip ── */}
      <div id="rfq-form" className="w-full bg-[#0F172A] text-white py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-red/20 text-red-300 font-bold text-xs uppercase tracking-widest border border-brand-red/40">
            Tender & Procurement
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Request Railway Technical Specifications & Quotations
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Contact our railway engineering division for RDSO compliance documents, tender participation, and factory acceptance test (FAT) reports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+917013486961"
              className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-red-700 text-white rounded-full font-bold text-sm shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Railway Division: +91 7013486961</span>
            </a>
            <a
              href="mailto:support@neurolinx.in?subject=Railway%20Tender%20Inquiry"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-brand-red" />
              <span>Email Technical Tender Inquiries</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
