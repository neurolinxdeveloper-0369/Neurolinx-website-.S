import React, { useState } from 'react';
import { 
  Navigation, 
  ShieldCheck, 
  Radio, 
  Volume2, 
  Eye, 
  Sliders, 
  Database, 
  Activity, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  BatteryCharging, 
  Layers, 
  Cpu, 
  Compass, 
  Download, 
  PhoneCall, 
  Mail, 
  Info, 
  MapPin, 
  Lock, 
  RefreshCw, 
  Gauge, 
  Sparkles,
  Check,
  ChevronRight,
  ChevronDown,
  PlusCircle,
  FileText,
  WifiOff,
  Train
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function FogPass() {
  // Device view toggle (FogPASS V2.0 device vs Locomotive Cab deployment view)
  const [activeDeviceView, setActiveDeviceView] = useState<'v2' | 'cab'>('v2');

  // Contact / Information Request Form State
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    designation: '',
    organization: 'Indian Railways / Zonal Division',
    email: '',
    phone: '',
    zone: 'Northern Railway (NR)',
    interestType: 'Technical Specification & RDSO Benchmark Evaluation',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Hero Banner (Indian Railways Locomotive Cab with Cyan Tech Typography) ── */}
      <div 
        id="hero"
        style={{ minHeight: 'calc(100vh + 1.5cm)' }}
        className="relative w-full overflow-hidden text-white flex items-center min-h-[calc(100vh+1.5cm)] pt-24 pb-16"
      >
        {/* Real Indian Railways Locomotive Cab Background - High Visibility & Extra Brightness */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/fogpass_hero_4k.jpg"
            alt="Modern Indian Railways locomotive cutting through dense winter fog"
            className="w-full h-full object-cover object-center opacity-100 brightness-110 contrast-105 filter"
          />
          {/* Subtle soft directional gradient to make the cyan & white typography pop with 100% clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Container Matching the User's Screenshot Exactly */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl flex flex-col items-start text-left">
            
            {/* Pill Badge: RAILWAY SAFETY · NAVIGATION · GPS */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/60 bg-cyan-950/40 text-[#00E5FF] text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.25)]">
              <span>RAILWAY SAFETY</span>
              <span className="text-cyan-400/60">•</span>
              <span>NAVIGATION</span>
              <span className="text-cyan-400/60">•</span>
              <span>GPS</span>
            </div>

            {/* Heading: FogPASS in White + Details in Vivid Neon Cyan */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight mb-5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="text-white">FogPASS </span>
              <span className="text-[#00C2FF] drop-shadow-[0_0_25px_rgba(0,194,255,0.45)]">Details</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              FogPASS is a GPS-based navigation and safety assistance system designed to support locomotive pilots during dense fog weather conditions and improve operational safety across railway routes.
            </p>

            {/* Glowing Cyan Carousel / Scroll Indicator as seen in screenshot */}
            <div className="flex items-center gap-3 mb-8">
              <a 
                href="#about-fogpass" 
                aria-label="Scroll to About FogPASS"
                className="w-8 h-8 rounded-full border-2 border-cyan-400/80 flex items-center justify-center bg-cyan-950/60 backdrop-blur-sm hover:scale-110 transition-transform group cursor-pointer shadow-[0_0_12px_rgba(0,229,255,0.4)]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] group-hover:animate-ping"></span>
              </a>
              <span className="text-xs text-cyan-300 font-mono tracking-wide">Loco Pilot Navigation Assistance</span>
            </div>

          </div>
        </div>

        {/* Floating Bottom Down-Arrow Pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center">
          <a
            href="#about-fogpass"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-105"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          </a>
        </div>
      </div>

      {/* ── Slide 2: About FogPASS (Complete Architecture & Tablet Showcase) ── */}
      <div 
        id="about-fogpass"
        className="relative w-full overflow-hidden text-slate-900 bg-white py-20 lg:py-24 px-6 lg:px-8 border-b border-slate-200"
      >
        {/* Subtle light ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: FogPASS Version 2.0 Card (matching reference design with white background) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xl">
                
                {/* Top Badge & View Switcher */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                    <span>{activeDeviceView === 'v2' ? 'FogPASS V2.0 Unit' : 'Loco Cab Mounting'}</span>
                  </div>

                  <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[10px] font-bold text-slate-600">
                    <button
                      onClick={() => setActiveDeviceView('v2')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'v2' ? 'bg-white text-slate-900 shadow-xs font-black' : 'hover:text-slate-900'
                      }`}
                    >
                      V2.0 Device
                    </button>
                    <button
                      onClick={() => setActiveDeviceView('cab')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'cab' ? 'bg-white text-slate-900 shadow-xs font-black' : 'hover:text-slate-900'
                      }`}
                    >
                      Cab View
                    </button>
                  </div>
                </div>

                {/* Inbuilt Image Container with exact same size */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center p-2 border border-slate-200 shadow-inner">
                  {activeDeviceView === 'v2' ? (
                    <img
                      src="/media/fogpass_v2_pure.png?v=neurolinx"
                      alt="Neurolinx FogPASS Version 2.0 Device Hardware"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <img
                      src="/media/fog_pass.png"
                      alt="Neurolinx FogPASS In-Cab Locomotive Mounting"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                {/* Card Text matching user screenshot as-is with white colour background */}
                <div className="mt-5 text-left">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight leading-snug">
                    FogPASS VERSION 2.0
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-bold text-[#00A3FF] mt-1 mb-2.5">
                    (Fog Pilot Assistance System for Safety Version 2.0)
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The Fog Pass device is a GPS-based navigation tool which aids locomotive pilots in ensuring smooth rail traffic operations during dense fog weather conditions.
                  </p>

                  <div className="flex items-center gap-3 mb-5">
                    <a
                      href="#how-it-works"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00A3FF] to-[#00D4FF] hover:brightness-105 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-slate-950" />
                      <span>Read More</span>
                    </a>
                  </div>
                </div>

                {/* Hardware Spec Badges (preserved without deleting) */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Weight</span>
                    <span className="text-xs font-black text-slate-900">&le; 800 g</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Display</span>
                    <span className="text-xs font-black text-slate-900">7&Prime; Touch</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Ingress</span>
                    <span className="text-xs font-black text-slate-900">IP65 / IK10</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-600 flex items-center justify-center gap-1.5 font-medium">
                    <Radio className="w-3.5 h-3.5 text-emerald-600" />
                    <span>L1/L5 NavIC &amp; GPS Dual Constellation Engine</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Best Highlights & Operational Capabilities (Clear, Practical, No Theory) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red text-xs font-bold tracking-wider uppercase mb-4">
                <Navigation className="w-3.5 h-3.5 text-brand-red" />
                <span>Zero-Visibility Rail Navigation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-3 tracking-tight leading-tight">
                Real-Time Track Vision in Dense Fog &amp; Extreme Weather.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                FogPASS acts as an intelligent virtual co-pilot inside the locomotive cab. It predicts approaching signals, level crossings, and track hazards with pinpoint satellite accuracy—enabling drivers to run safely on schedule during near-zero visibility.
              </p>

              {/* 4 Key Performance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-2">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">500 m</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Advance Voice Alert</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-2">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">NavIC + GPS</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Dual Satellite Fix</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">18+ Hrs</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">LiFePO4 Battery</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">100%</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Standalone Unit</div>
                </div>
              </div>

              {/* 4 Practical High-Impact Highlights (No heavy theory) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-7">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Prevents SPAD &amp; Overshoots</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Loud bilingual (Hindi + English) audio callouts ensure drivers never miss a distant or stop signal.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Maintains Normal Train Speeds</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Eliminates blind crawling during North Indian winter fog, drastically reducing passenger train delays.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">3-Landmark Distance Ladder</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Continuously counts down meters to upcoming signals, level crossing gates, neutral sections, and turnouts.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Anti-Glare Day &amp; Night Screen</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      High-visibility sunlight-readable display with automatic dimming to eliminate driver eye-strain at night.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full">
                <a
                  href="#how-it-works"
                  className="px-6 py-3 bg-brand-red text-white rounded-xl font-bold shadow-lg shadow-brand-red/20 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group cursor-pointer text-xs sm:text-sm"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#features"
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xl font-semibold shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <Sliders className="w-4 h-4 text-brand-red" />
                  <span>Smart Features</span>
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-semibold shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm sm:ml-auto"
                >
                  <span>Request Specs</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Section 3: Smart Functional Features ── */}
      <div id="features" className="w-full bg-white py-20 px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
              Operational Technology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
              Smart Functional Features.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed around the operational realities of locomotive cabs to maximize situational awareness without driver distraction.
            </p>
          </div>

          {/* 8 Responsive Feature Cards with Premium 4K Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: GPS/GNSS and NavIC */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_gnss_navic.jpg" 
                    alt="GPS/GNSS & NavIC Navigation Receiver in Locomotive Cab" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-brand-red flex items-center justify-center border border-white/20 shadow-md">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-emerald-400 font-bold border border-white/10">
                    L1/L5 NavIC
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    GPS/GNSS &amp; NavIC Navigation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dual-frequency L1/L5 multi-constellation satellite receiver tracking NavIC (IRNSS), GPS, and GLONASS with a &ge;10 Hz update rate for centimeter/sub-meter chainage positioning.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Multi-Constellation Satellite Lock</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 2: Advance Landmark Warnings */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_signals_warning.jpg" 
                    alt="Railway Trackside Color Light Signals in Dense Fog" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-[#1E6FD9] flex items-center justify-center border border-white/20 shadow-md">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-amber-400 font-bold border border-white/10">
                    Signal &amp; LC Pre-Warning
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    Advance Landmark Warnings
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Real-time distance countdown alerts for home signals, distant signals, starter signals, manned/unmanned level crossing gates, neutral sections, and speed caution boards.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Audio-Visual Countdown</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 3: English/Hindi Voice Announcements */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_audio_voice.jpg" 
                    alt="Locomotive Cockpit Loudspeaker Bilingual Voice Announcement" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-amber-500 flex items-center justify-center border border-white/20 shadow-md">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-red-400 font-bold border border-white/10">
                    &gt;85 dB Loudspeaker
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    English &amp; Hindi Announcements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clear synthetic digitized speech announcements broadcast through an integrated high-output loudspeaker exceeding 85 dB @ 1 meter, audible over locomotive engine noise.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Bilingual Pilot Alerts</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 4: Automatic and Manual Route Selection */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_route_select.jpg" 
                    alt="Loco Pilot Route Confirmation Touchscreen Console" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-emerald-500 flex items-center justify-center border border-white/20 shadow-md">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-emerald-400 font-bold border border-white/10">
                    Pilot Touchscreen Handshake
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    Auto &amp; Manual Route Selection
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automatic route matching based on satellite coordinates and travel direction, requiring explicit Loco Pilot confirmation on the touchscreen before landmark alerts activate.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Mandatory Pilot Handshake</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 5: Foggy and Non-Foggy Modes */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_foggy_mode.jpg" 
                    alt="Locomotive Headlight Visibility in Clear Weather vs Dense Fog" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-purple-500 flex items-center justify-center border border-white/20 shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-amber-300 font-bold border border-white/10">
                    500m / 900m Dual Range
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    Foggy &amp; Non-Foggy Modes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tailored operational thresholds: Foggy Mode triggers alerts at 500 meters for immediate caution, while Non-Foggy Mode extends early alert previews out to 900 meters.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>500 m / 900 m Thresholds</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 6: Upcoming Landmark Display */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_landmark_ladder.jpg" 
                    alt="Cab Windshield HUD Approaching 3 Landmarks Queue" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-teal-500 flex items-center justify-center border border-white/20 shadow-md">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-cyan-300 font-bold border border-white/10">
                    3-Asset Predictive Queue
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    Upcoming Landmark Ladder
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Real-time graphical queue presenting the next 3 approaching landmarks consecutively, with type indicators, distance in meters, and trackside position (left/right).
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Predictive 3-Asset Queue</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 7: Event Logging and Data Management */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_data_logging.jpg" 
                    alt="Ruggedized USB Event Log Download 15-Day Storage" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-orange-500 flex items-center justify-center border border-white/20 shadow-md">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-amber-400 font-bold border border-white/10">
                    15-Day Encrypted Memory
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    Event Logging &amp; Data
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Internal non-volatile circular memory logging 15+ days of continuous operational history: speed, timestamped satellite fixes, pilot alert snoozes, and self-checks.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>15-Day Tamper-Proof Audit</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

            {/* Card 8: Self-Diagnostics and Simulation Mode */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="/media/feature_simulation_diag.jpg" 
                    alt="Locomotive Driver Simulation and Diagnostic Test Suite" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-brand-red flex items-center justify-center border border-white/20 shadow-md">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-mono text-emerald-400 font-bold border border-white/10">
                    POST &amp; Yard Training
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    Diagnostics &amp; Simulation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automatic power-on self-test (POST) verifying GNSS antenna, memory integrity, and speaker status, paired with a simulation mode for pilot route rehearsal in yards.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>POST &amp; Virtual Training</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Section: Why FogPASS Matters (Full Slide with Premium 4K Railway Background) ── */}
      <div 
        id="why-fogpass-matters" 
        style={{ minHeight: '100vh' }}
        className="relative w-full overflow-hidden bg-[#050B14] min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-8 border-b border-cyan-950/40"
      >
        {/* Premium 4K Cinematic Electrified Railway Corridor Background in Fog - High Clarity & Extra Brightness */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/why_fogpass_bg.jpg"
            alt="Electrified railway corridor with reflective rails and signal lamps in dense winter fog"
            className="w-full h-full object-cover object-center opacity-100 brightness-125 contrast-110 filter"
          />
          {/* Subtle soft gradient ensuring the background tracks & signals shine through clearly while keeping text crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Ambient Cyan & Blue Radial Light Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-12 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/60 backdrop-blur-md text-xs font-mono font-bold text-[#00A3FF] uppercase tracking-widest mb-4 shadow-[0_0_12px_rgba(0,163,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse"></span>
              <span>KEY HIGHLIGHTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Why FogPASS Matters
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]">
              FogPASS strengthens railway safety by assisting pilots with dependable route awareness during dense fog conditions where visibility is significantly reduced.
            </p>
          </div>

          {/* 4 Feature Cards Grid with Glassmorphic Styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: GPS Based */}
            <div className="bg-[#081220]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 rounded-2xl p-7 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_0_25px_rgba(0,163,255,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0C1A2E]/90 border border-white/10 flex items-center justify-center text-[#00A3FF] mb-6 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-inner">
                <Radio className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                GPS Based
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Reliable route positioning and navigation support through GPS-based operation.
              </p>
            </div>

            {/* Card 2: Offline Working */}
            <div className="bg-[#081220]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 rounded-2xl p-7 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_0_25px_rgba(0,163,255,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0C1A2E]/90 border border-white/10 flex items-center justify-center text-[#00A3FF] mb-6 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-inner">
                <WifiOff className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                Offline Working
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Operates without internet, making it practical for remote and difficult rail sections.
              </p>
            </div>

            {/* Card 3: Audio Alerts */}
            <div className="bg-[#081220]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 rounded-2xl p-7 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_0_25px_rgba(0,163,255,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0C1A2E]/90 border border-white/10 flex items-center justify-center text-[#00A3FF] mb-6 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-inner">
                <Volume2 className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                Audio Alerts
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Provides visual and audio-based indications for better pilot awareness and decision support.
              </p>
            </div>

            {/* Card 4: Railway Proven */}
            <div className="bg-[#081220]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 rounded-2xl p-7 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_0_25px_rgba(0,163,255,0.15)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0C1A2E]/90 border border-white/10 flex items-center justify-center text-[#00A3FF] mb-6 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-inner">
                <Train className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                Railway Proven
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Widely deployed and aligned for practical usage across Indian railway operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 4: How FogPASS Works ── */}
      <div id="how-it-works" className="w-full bg-slate-50 py-20 px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-widest border border-slate-300">
              Operational Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
              How FogPASS Works.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A streamlined four-step pipeline transforming satellite coordinates into real-time locomotive cab situational alerts.
            </p>
          </div>

          {/* Clean 4-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white font-black text-sm flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Route Data Loaded</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The pilot places the portable FogPASS unit into the cab bracket. The system accesses the onboard database storing over 2,000 route-kilometers of track assets, signals, and speed restrictions.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-red">
                <Check className="w-3.5 h-3.5" /> 2,000+ Route-km Database
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white font-black text-sm flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Location Identified</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The dual-frequency L1/L5 NavIC &amp; GNSS receiver locks onto satellite constellations at &ge;10 Hz, calculating locomotive velocity (up to 160 km/h) and exact chainage location.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-red">
                <Check className="w-3.5 h-3.5" /> 10 Hz NavIC Positioning
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white font-black text-sm flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Landmark Calculated</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The processing engine correlates coordinates against the confirmed route database. Distance to the next three consecutive landmarks is continuously computed in real time.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-red">
                <Check className="w-3.5 h-3.5" /> Dynamic Queue Generation
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-red text-white font-black text-sm flex items-center justify-center mb-4 shadow-md">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Warning Delivered</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  At the pre-set threshold (500m in foggy mode, 900m in non-foggy mode), bilingual voice announcements speak in English &amp; Hindi while the 7-inch screen flashes visual countdowns.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-red">
                <Check className="w-3.5 h-3.5" /> Audio-Visual Broadcast
              </div>
            </div>

          </div>

          {/* Critical Operational Safeguard Callout */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-300 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold block text-sm mb-0.5">Loco Pilot Route Confirmation Safeguard:</strong>
                Automatic route detection requires explicit touchscreen confirmation by the Loco Pilot before landmark alert sequences commence.
              </div>
            </div>
            <a
              href="#advanced-capabilities"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
            >
              Explore Capabilities
            </a>
          </div>

        </div>
      </div>

      {/* ── Section 5: Advanced Operational Capabilities ── */}
      <div id="advanced-capabilities" className="w-full bg-white py-20 px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-blue-50 text-[#1E6FD9] font-bold text-xs uppercase tracking-widest border border-blue-200">
              Locomotive Cockpit Integration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
              Advanced Operational Capabilities.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprehensive operational features delivering end-to-end reliability for drivers, maintenance staff, and railway inspection officers.
            </p>
          </div>

          {/* 9 Professional Operational Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Capability 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Next Three Approaching Landmarks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simultaneously displays the upcoming 3 landmarks in progressive order with dynamic distance readouts and left/right track side identifiers, giving the driver foresight of signal spacing.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5 text-[#1E6FD9]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Configurable Warning Distances</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alert trigger distances can be configured per divisional track rules to accommodate high-speed sections, steep ruling gradients, and complex junction yards.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Signal &amp; Level-Crossing Warnings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distinct audio tones and synthetic vocal announcements differentiate stop signals, permissive signals, manned gates, and unmanned level crossing approaches.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Radio className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">GPS Signal-Quality Monitoring</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous real-time tracking of satellite count and Dilution of Precision (DOP), triggering an immediate visual warning if satellite lock degrades below operational accuracy.
              </p>
            </div>

            {/* Capability 5 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Password-Protected Route Editing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-tier encrypted password access restricts track coordinate modifications and firmware updates strictly to authorized shed engineers and technical depot officers.
              </p>
            </div>

            {/* Capability 6 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Download className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">USB Transfer &amp; Event-Log Download</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast industrial USB interface enables depot crews to upload newly commissioned track routes and extract comprehensive 15-day event logs in seconds.
              </p>
            </div>

            {/* Capability 7 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Volume2 className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Voice-Announcement Snooze</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Allows Loco Pilots to acknowledge and temporarily mute voice repetitions under specified train-stopped or yard waiting conditions without disabling visual distance displays.
              </p>
            </div>

            {/* Capability 8 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Simulation &amp; Diagnostic Functions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Built-in demonstration and test mode simulates complete section journeys offline for Loco Pilot route training, crew evaluation, and depot pre-trip verification.
              </p>
            </div>

            {/* Capability 9 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Signal &amp; Caution Reminders</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Configurable reminder notifications for approaching neutral sections, temporary engineering speed restrictions, and critical station yard limits.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ── Railway Electronics Solutions Callout Banner (Matching Reference Design) ── */}
      <div className="w-full bg-[#030B1C] py-16 px-6 lg:px-8 border-t border-b border-cyan-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#071329] to-[#040D1F] border border-cyan-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
            
            {/* Ambient cyan glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top pill/label: — NEED MORE INFORMATION? */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#00E5FF] text-xs font-mono font-semibold tracking-widest uppercase">
                — NEED MORE INFORMATION?
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-4 tracking-tight">
              Explore More Railway Electronics Solutions
            </h2>

            {/* Subtitle with Surya Electronics replaced by Neurolinx Global Pvt. Ltd. */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Contact Neurolinx Global Pvt. Ltd. to learn more about FogPASS deployments, railway safety products and integrated passenger information systems.
            </p>

            {/* Buttons Row with Glowing Cyan Dot */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A3FF] to-[#00D4FF] hover:brightness-110 text-slate-950 font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>CONTACT US</span>
              </Link>

              <Link
                to="/railways"
                className="px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-950/70 text-[#00E5FF] font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all shadow-md"
              >
                <Layers className="w-4 h-4 text-[#00E5FF]" />
                <span>VIEW ALL PRODUCTS</span>
              </Link>

              <div className="w-8 h-8 rounded-full border border-cyan-400/50 flex items-center justify-center bg-cyan-950/40 ml-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Section 6: Documentation and Technical Enquiry ── */}
      <div id="enquiry" className="w-full bg-white py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-slate-100/60 p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-100 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
                Documentation &amp; Technical Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 mb-3 tracking-tight">
                Request Product Information &amp; Technical Data.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with the Neurolinx Railway Division for detailed RDSO specification reviews, technical datasheets, and demonstration requests.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#advanced-capabilities"
                className="px-6 py-3 rounded-xl bg-[#0B132B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <Sliders className="w-4 h-4 text-brand-red" />
                <span>Explore Capabilities</span>
              </a>

              <a
                href="mailto:support@neurolinx.in?subject=FogPASS%20Technical%20Information%20Request"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#1E6FD9]" />
                <span>Request Product Information</span>
              </a>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-brand-red/20 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Neurolinx</span>
              </Link>
            </div>

            {/* Direct Inquiry Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Railway Division Inquiry Form
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Submit your official zonal division or technical query directly to our railway systems engineering team.
              </p>

              {inquirySubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold mb-1">Inquiry Submitted Successfully</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you. Our railway engineering team will review your request and get in touch with the technical datasheet and specification details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Designation / Role *</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.designation}
                        onChange={(e) => setInquiryForm({...inquiryForm, designation: e.target.value})}
                        placeholder="e.g. Senior Section Engineer / Loco Pilot"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="name@railnet.gov.in"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Railway Zone / Division</label>
                      <select 
                        value={inquiryForm.zone}
                        onChange={(e) => setInquiryForm({...inquiryForm, zone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 cursor-pointer"
                      >
                        <option>Northern Railway (NR)</option>
                        <option>North Central Railway (NCR)</option>
                        <option>North Eastern Railway (NER)</option>
                        <option>Eastern Railway (ER)</option>
                        <option>East Central Railway (ECR)</option>
                        <option>Western Railway (WR)</option>
                        <option>Central Railway (CR)</option>
                        <option>South Central Railway (SCR)</option>
                        <option>Southern Railway (SR)</option>
                        <option>Other Zonal Railway / PSU</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Purpose</label>
                      <select 
                        value={inquiryForm.interestType}
                        onChange={(e) => setInquiryForm({...inquiryForm, interestType: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 cursor-pointer"
                      >
                        <option>Technical Specification &amp; RDSO Benchmark Evaluation</option>
                        <option>Tender &amp; Procurement Documentation</option>
                        <option>Driver Advisory System Trial Demonstration</option>
                        <option>Depot Maintenance &amp; Route Loading Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Technical Requirements / Remarks</label>
                    <textarea 
                      rows={3}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      placeholder="Please mention any specific division requirements, route lengths, or procurement details..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Direct contact: <a href="tel:+917013486961" className="text-brand-red font-semibold hover:underline">+91 7013486961</a>
                    </span>
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-brand-red/20 cursor-pointer"
                    >
                      Submit Technical Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Regulatory Disclaimer Notice as required by Step 4 */}
            <div className="mt-8 text-center text-[11px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
              <strong>Regulatory Advisory:</strong> FogPASS is an auxiliary, portable, non-vital assistance system designed to aid Loco Pilots in identifying approaching landmarks. It does not replace prescribed railway operating rules, fixed trackside signals, or the General &amp; Subsidiary Rules (G&amp;SR) of Indian Railways.
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
export default FogPass;
