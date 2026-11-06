import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  Sliders, 
  Layers, 
  ChevronRight, 
  ChevronDown, 
  PlusCircle, 
  Lock, 
  Sparkles, 
  Sun, 
  Activity, 
  Radio
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function LocoHeadlight() {
  // Device view toggle (Twin-Beam Hardware vs Loco Front Mounting View)
  const [activeDeviceView, setActiveDeviceView] = useState<'hardware' | 'mounting'>('hardware');

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    procurementFor: 'Loco Production Unit (CLW / BLW / DLW)',
    locoClass: 'WAP-7 / WAG-9 Electric Locomotive',
    equipmentScope: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Hero Banner (Indian Railways Twin-Beam LED LOCO Headlight) ── */}
      <div 
        id="hero"
        style={{ minHeight: 'calc(100vh + 1.5cm)' }}
        className="relative w-full overflow-hidden text-white flex items-center min-h-[calc(100vh+1.5cm)] pt-24 pb-16"
      >
        {/* Real Indian Railways Locomotive Front Headlight Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/railway_loco_headlight.jpg"
            alt="Modern Indian Railways WAP-7 electric locomotive with high-intensity twin-beam LED headlight"
            className="w-full h-full object-cover object-center opacity-100 brightness-110 contrast-105 filter"
          />
          {/* Subtle light directional gradient so text pops while headlight details remain clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Container Matching FogPASS Page Exactly */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl flex flex-col items-start text-left">
            
            {/* Frosted Glass Pill Badge: ROLLING STOCK · LOCOMOTIVE EXTERIOR · HIGH-LUMEN OPTICS */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm">
              <span>ROLLING STOCK</span>
              <span className="text-white/70">•</span>
              <span>LOCOMOTIVE EXTERIOR</span>
              <span className="text-white/70">•</span>
              <span>HIGH-LUMEN OPTICS</span>
            </div>

            {/* Heading: LED LOCO Head Light in White + Details in Brand Red */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="text-white">LED LOCO Head Light </span>
              <span className="text-brand-red drop-shadow-[0_0_25px_rgba(224,0,27,0.45)]">Details</span>
            </h1>
          </div>
        </div>

        {/* Floating Bottom Down-Arrow Pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center">
          <a
            href="#about-headlight"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-105"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-red animate-bounce" />
          </a>
        </div>
      </div>

      {/* ── Slide 2: About LED LOCO Head Light (Architecture & Hardware Showcase) ── */}
      <div 
        id="about-headlight"
        className="relative w-full overflow-hidden text-slate-900 bg-white py-20 lg:py-24 px-6 lg:px-8 border-b border-slate-200"
      >
        {/* Subtle light ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Product Card with Interactive Switcher (matching FogPASS reference design) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xl">
                
                {/* Top Badge & View Switcher */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                    <span>{activeDeviceView === 'hardware' ? 'Twin-Beam Hardware Unit' : 'Loco Front Mounting'}</span>
                  </div>

                  <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[10px] font-bold text-slate-600">
                    <button
                      onClick={() => setActiveDeviceView('hardware')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'hardware' ? 'bg-white text-slate-900 shadow-xs font-black' : 'hover:text-slate-900'
                      }`}
                    >
                      Twin-Beam Unit
                    </button>
                    <button
                      onClick={() => setActiveDeviceView('mounting')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'mounting' ? 'bg-white text-slate-900 shadow-xs font-black' : 'hover:text-slate-900'
                      }`}
                    >
                      Loco Front
                    </button>
                  </div>
                </div>

                {/* Inbuilt Image Container with exact FogPASS dimensions */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center p-2 border border-slate-200 shadow-inner">
                  {activeDeviceView === 'hardware' ? (
                    <img
                      src="/media/loco_headlight_hardware.jpg"
                      alt="Neurolinx High-Intensity Twin-Beam LED Locomotive Headlight Hardware"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <img
                      src="/media/railway_loco_headlight.jpg"
                      alt="WAP-7 Locomotive Front Headlight In-Service Installation"
                      className="max-h-full max-w-full object-cover filter drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                {/* Card Text matching FogPASS format with white background */}
                <div className="mt-5 text-left">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight leading-snug">
                    TWIN-BEAM LED LOCO HEADLIGHT
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1 mb-2.5">
                    (RDSO/2017/EL/SPEC/0134 &amp; IEC 61373 Compliant Front Illuminator)
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Engineered to illuminate railway trackbeds up to 500 meters ahead under zero-ambient darkness. Incorporates two sealed high-power optical modules with independent solid-state electronic power supplies for fail-safe redundancy.
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

                {/* Hardware Spec Badges (matching FogPASS layout) */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Peak Lux</span>
                    <span className="text-xs font-black text-slate-900">&gt; 500k cd</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Beam Throw</span>
                    <span className="text-xs font-black text-slate-900">&gt; 500 m</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Ingress</span>
                    <span className="text-xs font-black text-slate-900">IP66 / Cast Al</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-600 flex items-center justify-center gap-1.5 font-medium">
                    <Radio className="w-3.5 h-3.5 text-emerald-600" />
                    <span>RDSO Compliant &bull; 72V to 140V DC Wide Supply &bull; Built-in Defogger</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Operational Capabilities & Performance Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red text-xs font-bold tracking-wider uppercase mb-4">
                <Sun className="w-3.5 h-3.5 text-brand-red" />
                <span>High-Intensity Locomotive Track Illumination</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-3 tracking-tight leading-tight">
                500-Meter Night Track Visibility &amp; Fail-Safe Redundant Optics.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Provides loco pilots with razor-sharp forward clarity at high speeds (130 to 160 km/h). Designed with dual optical beams, cab-controlled high/low beam dimmers, and an active front glass defogger to guarantee uncompromised sight lines in all weather conditions.
              </p>

              {/* 4 Key Performance Metrics (matching FogPASS structure) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">&gt; 500k cd</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Peak Intensity</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-2">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">&gt; 500 m</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Track Throw</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">100%</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Dual Redundant</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">72-140V</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Direct DC Bus</div>
                </div>
              </div>

              {/* 4 Practical High-Impact Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-7">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Dual Independent Optical Engines</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Two isolated LED banks with separate constant-current drivers ensure continuous illumination if one channel faults.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Active Thermal Glass Defogger</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Integrated heating circuit on toughened borosilicate glass prevents winter frost, ice, and fog condensation.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Cab-Operated High/Low Dimmer Control</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Smooth electronic switching between 100% full beam and dimmed mode prevents blinding oncoming drivers in rail yards.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Heavy Cast Aluminum Vibration Armor</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      IP66 housing tested to IEC 61373 Category 1 Class B withstands flying ballast stone strikes and continuous locomotive bogie shock.
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
        </div>
      </div>

      {/* ── Slide 3: Have Questions? Consultation & Contact Form (Compact Attached Layout matching FogPASS) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container matching FogPASS exactly */}
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
                    We have received your locomotive headlight specifications. Our rolling stock engineering team will review your requirements and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        procurementFor: 'Loco Production Unit (CLW / BLW / DLW)',
                        locoClass: 'WAP-7 / WAG-9 Electric Locomotive',
                        equipmentScope: [],
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

                  {/* Row 2: Procurement Unit & Loco Class */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Procurement / Agency</label>
                      <select 
                        value={inquiryForm.procurementFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, procurementFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>Loco Production Unit (CLW / BLW / DLW)</option>
                        <option>Electric Loco Shed (ELS) Depot</option>
                        <option>Diesel Loco Shed (DLS) Depot</option>
                        <option>Zonal Workshop / POH Modernization</option>
                        <option>RDSO Tender Compliance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Locomotive Class</label>
                      <select 
                        value={inquiryForm.locoClass}
                        onChange={(e) => setInquiryForm({...inquiryForm, locoClass: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>WAP-7 / WAP-5 High-Speed Electric</option>
                        <option>WAG-9 / WAG-12 Heavy Freight</option>
                        <option>WDP-4D / WDG-4D Diesel Electric</option>
                        <option>Vande Bharat Driving Trailer Coach (DTC)</option>
                        <option>EMU / MEMU Driving Power Car</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Equipment Scope (multiple options) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      Equipment Scope ( you can select multiple option )
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Twin-Beam Complete Headlight Assembly',
                        'Dual Constant-Current Power Supply Unit',
                        'Active Front Glass De-Icing Defogger',
                        'Cab Dimmer Switch Control Panel'
                      ].map((option) => {
                        const isChecked = inquiryForm.equipmentScope.includes(option);
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
                                  ? inquiryForm.equipmentScope.filter(o => o !== option)
                                  : [...inquiryForm.equipmentScope, option];
                                setInquiryForm({...inquiryForm, equipmentScope: next});
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
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">City / Loco Shed Base</label>
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
                    By submitting this form, you agree that we may use your information for railway headlight engineering consultation and tender specifications.
                  </p>

                  {/* Captcha */}
                  <div>
                    <div className="font-serif tracking-widest text-lg font-bold text-gray-700 select-none mb-1.5 px-1">
                      B E A M
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

export default LocoHeadlight;
