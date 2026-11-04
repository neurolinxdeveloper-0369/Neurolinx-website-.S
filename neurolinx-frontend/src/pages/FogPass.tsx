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

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Apartment',
    projectType: 'New Building',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);


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
                  href="#features"
                  className="px-6 py-3 bg-brand-red text-white rounded-xl font-bold shadow-lg shadow-brand-red/20 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group cursor-pointer text-xs sm:text-sm"
                >
                  <Sliders className="w-4 h-4 text-white" />
                  <span>Smart Features</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#slide-4"
                  className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-semibold shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm sm:ml-auto"
                >
                  <span>Have Questions?</span>
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

          {/* 6 Clean Feature Cards with 4K Visuals and Titles Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: GPS/GNSS and NavIC */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/feature_gnss_navic.jpg" 
                  alt="GPS/GNSS & NavIC Navigation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-brand-red flex items-center justify-center border border-white/20 shadow-md">
                  <Compass className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  GPS/GNSS &amp; NavIC Navigation
                </h3>
              </div>
            </div>

            {/* Card 2: Advance Landmark Warnings */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/feature_signals_warning.jpg" 
                  alt="Advance Landmark Warnings" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-[#1E6FD9] flex items-center justify-center border border-white/20 shadow-md">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Advance Landmark Warnings
                </h3>
              </div>
            </div>

            {/* Card 3: English/Hindi Voice Announcements */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/feature_audio_voice.jpg" 
                  alt="English & Hindi Announcements" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-amber-500 flex items-center justify-center border border-white/20 shadow-md">
                  <Volume2 className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  English &amp; Hindi Announcements
                </h3>
              </div>
            </div>

            {/* Card 4: Automatic and Manual Route Selection */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/feature_route_select.jpg" 
                  alt="Auto & Manual Route Selection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-emerald-500 flex items-center justify-center border border-white/20 shadow-md">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Auto &amp; Manual Route Selection
                </h3>
              </div>
            </div>

            {/* Card 5: Foggy and Non-Foggy Modes */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/feature_foggy_mode.jpg" 
                  alt="Foggy & Non-Foggy Modes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-purple-500 flex items-center justify-center border border-white/20 shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Foggy &amp; Non-Foggy Modes
                </h3>
              </div>
            </div>

            {/* Card 6: Upcoming Landmark Display */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/feature_landmark_ladder.jpg" 
                  alt="Upcoming Landmark Ladder" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-teal-500 flex items-center justify-center border border-white/20 shadow-md">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Upcoming Landmark Ladder
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>


{/* ── Slide 4: Have Questions? Consultation & Contact Form (Compact Attached Layout) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container matching 2nd image */}
          <div className="rounded-[32px] md:rounded-[36px] border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
            
            {/* Left Panel: Pure White Background (Snug & Attached to Form) */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-white px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100/80">
              
              <div>
                {/* Title colored in brand Red and Blue like Neurolinx logo */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] mb-5 tracking-tight">
                  Have<br />
                  <span className="text-brand-red">Question</span><span className="text-[#1A09FA]">s?</span>
                </h2>
                
                <p className="text-sm sm:text-base font-bold text-slate-800 mb-9 tracking-tight">
                  “Let’s make a Smarter World together”
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+919390584000" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 9390584***</span>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@neurolinx.in" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">info@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-relaxed">
                      NEUROLINX GLOBAL PRIVATE LIMITED, C12/A, Industrial Area, Kushaiguda, Hyderabad, Secunderabad, Telangana 500062
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Emblem at the divider seam rotating slowly */}
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <img 
                  src="/media/logo.png" 
                  alt="Neurolinx" 
                  style={{ animation: 'spin 18s linear infinite' }}
                  className="w-12 h-12 object-contain drop-shadow-sm" 
                />
              </div>

            </div>

            {/* Right Panel: Soft Light Gray Background */}
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex-1">
              {inquirySubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    We have received your details. Our smart automation team will review your requirements and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Apartment',
                        projectType: 'New Building',
                        controlOptions: [],
                        contactNumber: '',
                        city: '',
                        captchaInput: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-brand-red transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySubmitted(true);
                  }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                      <input 
                        type="email" 
                        required 
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                  </div>

                  {/* Row 2: Automation For & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Automation For</label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>Apartment</option>
                        <option>Villa / Independent House</option>
                        <option>Office / Commercial Space</option>
                        <option>Hotel / Hospitality</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Project Type</label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({...inquiryForm, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>New Building</option>
                        <option>Existing / Renovation</option>
                        <option>Under Construction</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Control For (multiple options) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      Control For ( you can select multiple option )
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Lighting & Scene Control',
                        'Safety & Security Control',
                        'Curtain & Appliances Control',
                        'Home Theatre System'
                      ].map((option) => {
                        const isChecked = inquiryForm.controlOptions.includes(option);
                        return (
                          <label 
                            key={option} 
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none"
                          >
                            <input 
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {
                                const next = isChecked 
                                  ? inquiryForm.controlOptions.filter(o => o !== option)
                                  : [...inquiryForm.controlOptions, option];
                                setInquiryForm({...inquiryForm, controlOptions: next});
                              }}
                              className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 accent-black cursor-pointer bg-white"
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Contact Number & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Contact Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={inquiryForm.contactNumber}
                        onChange={(e) => setInquiryForm({...inquiryForm, contactNumber: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">City</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.city}
                        onChange={(e) => setInquiryForm({...inquiryForm, city: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                  </div>

                  {/* Disclaimer text */}
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                    By submitting this form, you agree that we may use your information for marketing purposes and to send you announcements
                  </p>

                  {/* Captcha */}
                  <div>
                    <div className="font-serif tracking-widest text-lg font-bold text-gray-700 select-none mb-1.5 px-1">
                      F M4 B
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter Captcha"
                      value={inquiryForm.captchaInput}
                      onChange={(e) => setInquiryForm({...inquiryForm, captchaInput: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="px-9 py-3 rounded-lg bg-black text-white font-semibold text-sm hover:bg-brand-red transition-colors shadow-sm cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default FogPass;
