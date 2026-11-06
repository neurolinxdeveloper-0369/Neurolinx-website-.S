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
            className="w-full h-full object-cover object-center opacity-100 brightness-115 contrast-105 filter"
          />
          {/* Subtle light directional gradient so the left side remains bright while text pops */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent"></div>
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Content Container Matching the User's Screenshot Exactly */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl flex flex-col items-start text-left">
            
            {/* Pill Badge: RAILWAY SAFETY · NAVIGATION · GPS */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm">
              <span>RAILWAY SAFETY</span>
              <span className="text-white/70">•</span>
              <span>NAVIGATION</span>
              <span className="text-white/70">•</span>
              <span>GPS</span>
            </div>

            {/* Heading: FogPASS in White + Details in Vivid Neon Cyan */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight mb-5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="text-white">FogPASS </span>
              <span className="text-brand-red drop-shadow-[0_0_25px_rgba(224,0,27,0.45)]">Details</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              FogPASS is a GPS-based navigation and safety assistance system designed to support locomotive pilots during dense fog weather conditions and improve operational safety across railway routes.
            </p>
          </div>
        </div>

        {/* Floating Bottom Down-Arrow Pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center">
          <a
            href="#about-fogpass"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-105"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-red animate-bounce" />
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
                  
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1 mb-2.5">
                    (Fog Pilot Assistance System for Safety Version 2.0)
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The Fog Pass device is a GPS-based navigation tool which aids locomotive pilots in ensuring smooth rail traffic operations during dense fog weather conditions.
                  </p>

                  <div className="flex items-center gap-3 mb-5">
                    <a
                      href="#slide-4"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-xs shadow-md shadow-black/10 transition-all cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-white" />
                      <span>Inquire Now</span>
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

              {/* 3 Key Option Boxes (Matching Reference Information) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full mb-7">
                {/* Box 1: Local Materials */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-2">
                      100% Indigenous
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      Manufactured with Local Materials
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      We manufacture FogPASS devices and auxiliary electronics using certified indigenous components and domestic metallurgy, ensuring rapid spare availability, rugged longevity, and complete self-reliance.
                    </p>
                  </div>
                </div>

                {/* Box 2: 24/7 Services */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E6FD9] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-2">
                      Round-The-Clock
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      24/7 Support &amp; Field Services
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Our dedicated railway engineering team provides continuous 24/7 technical hotline support, on-site loco shed commissioning, software calibration, and rapid field assistance across all zonal divisions.
                    </p>
                  </div>
                </div>

                {/* Box 3: Low Prices */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-2">
                      Market Leading Value
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      Highly Competitive Pricing
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      By streamlining in-house design, software integration, and direct domestic manufacturing, we deliver top-tier RDSO-compliant railway systems at prices substantially lower than prevailing market rates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full">
                <a
                  href="#slide-4"
                  className="px-6 py-3 bg-brand-red text-white rounded-xl font-bold shadow-lg shadow-brand-red/20 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group cursor-pointer text-xs sm:text-sm"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#slide-4"
                  className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-semibold shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm sm:ml-auto"
                >
                  <span>Have Questions?</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

          </div>

          {/* Downside Option: Download Brochure - Opens uploaded 11-page FogPASS PDF in a new tab */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-100 flex justify-center">
            <a
              href="/media/neurolinx_railway_systems_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-black"
            >
              Download Brochure
            </a>
          </div>

        </div>
      </div>

      {/* ── Slide 3: Have Questions? Consultation & Contact Form (Compact Attached Layout) ── */}
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
                    href="tel:+917013486961" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 7013486961</span>
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
