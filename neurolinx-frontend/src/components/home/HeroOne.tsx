import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sun, 
  Moon, 
  Tv, 
  Sliders, 
  Thermometer, 
  Droplets, 
  Train, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  CheckCircle2,
  Wifi,
  Power
} from 'lucide-react';

export function HeroOne() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      kicker: "Discover the Ease of Smart Living",
      titlePrefix: "Neurolinx's ",
      highlightWord: "User-Friendly",
      highlightColor: "text-emerald-400 underline decoration-emerald-400 decoration-2 underline-offset-8",
      titleSuffix: " Mobile App",
      desc: "With Neurolinx's user-friendly app, managing your home is not only smart, it's made to fit your routine.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      secondaryText: "Explore Solutions",
      secondaryLink: "/home-automation",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop",
      type: "home"
    },
    {
      id: 1,
      kicker: "Mission-Critical Indian Rail Infrastructure",
      titlePrefix: "Next-Gen ",
      highlightWord: "Fog Pass & Signaling",
      highlightColor: "text-brand-red underline decoration-brand-red decoration-2 underline-offset-8",
      titleSuffix: " Systems",
      desc: "RDSO-compliant driver audio-visual navigation, collision prevention, and fail-safe rolling stock LED lighting.",
      buttonText: "View Railway Systems",
      buttonLink: "/railways",
      secondaryText: "Fog Pass v2.0 & v3.0",
      secondaryLink: "/railways#fog-pass-section",
      bgImage: "/media/railways_hero.jpg",
      type: "railways"
    },
    {
      id: 2,
      kicker: "100% Human-Safe Bio-Photonic Sterilization",
      titlePrefix: "Continuous ",
      highlightWord: "Non-UV Disinfection",
      highlightColor: "text-cyan-400 underline decoration-cyan-400 decoration-2 underline-offset-8",
      titleSuffix: " Light",
      desc: "Active 405nm clinical decontamination destroying 99.9% of bacteria and viruses continuously while people are present.",
      buttonText: "Discover Non-UV Light",
      buttonLink: "/non-uv-disinfection",
      secondaryText: "Hospital Models",
      secondaryLink: "/non-uv-disinfection#models-section",
      bgImage: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      type: "non-uv"
    },
    {
      id: 3,
      kicker: "Aerospace & Heavy Industrial Reliability",
      titlePrefix: "Precision ",
      highlightWord: "Power Supply",
      highlightColor: "text-amber-400 underline decoration-amber-400 decoration-2 underline-offset-8",
      titleSuffix: " & LED Drivers",
      desc: "Universal 85-305V AC-DC SMPS, 3kV isolated DC-DC converters, and 10kV surge-immune precision LED drivers.",
      buttonText: "Explore Power Products",
      buttonLink: "/power-supply",
      secondaryText: "Custom OEM Design",
      secondaryLink: "/power-supply#products-grid",
      bgImage: "/media/powersupply_hero.jpg",
      type: "power"
    }
  ];

  // Auto advance slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-[#0B0F19] text-white font-body min-h-screen flex items-center">
      
      {/* Background Slides with Cross-Fade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.bgImage}
            alt={slide.titlePrefix + slide.highlightWord}
            className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in-105 duration-1000"
          />
          {/* SmartNode Style Seamless Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/95 via-[#0B0F19]/80 to-[#0B0F19]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Main Slide Content: 2-Column Composition (Directly Matching SmartNode Image 2) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full min-h-screen flex items-center pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Headlines & Actions (Matching SmartNode Typography) */}
          <div className="lg:col-span-7 text-left">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-wide text-gray-300 drop-shadow">
              <span>{active.kicker}</span>
            </div>

            {/* Hero Headline with SmartNode Stylish Accent Underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight text-white mb-6 leading-[1.12] drop-shadow-2xl">
              {active.titlePrefix}
              <span className={active.highlightColor}>
                {active.highlightWord}
              </span>
              {active.titleSuffix}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-md">
              {active.desc}
            </p>

            {/* Action Buttons (White Clean Button from SmartNode Image 2) */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={active.buttonLink}
                className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all text-sm shadow-lg text-center"
              >
                {active.buttonText}
              </Link>

              <Link
                to={active.secondaryLink}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold rounded-xl transition-all text-sm text-center flex items-center gap-2"
              >
                <span>{active.secondaryText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Prominent Visual Mockup (Matching SmartNode Image 2's Smartphone in Hand) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {active.type === 'home' && (
              /* Smart Home Phone Mockup (Directly Replicating Image 2) */
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] bg-slate-900/90 rounded-[44px] p-4 border-[6px] border-slate-700 shadow-2xl shadow-black/90 backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-500">
                {/* Phone Notch / Island */}
                <div className="w-28 h-5 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-900/40"></div>
                </div>

                {/* In-App Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 px-1">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">Neurolinx Living</span>
                    <span className="text-sm font-bold text-white">Good Morning, Welcome</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></div>
                </div>

                {/* Quick Scene Chips */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[11px] font-bold text-white">Morning</div>
                      <div className="text-[9px] text-gray-400">Lights 70%</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[11px] font-bold text-emerald-300">Relax</div>
                      <div className="text-[9px] text-emerald-400/80">Active Scene</div>
                    </div>
                  </div>
                </div>

                {/* Room Card: Living Room */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">Living Room Board (8-Gang)</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">Online</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-1 border-t border-white/5">
                      <span className="text-[11px] text-gray-300">Cove Lighting</span>
                      <span className="w-7 h-4 bg-emerald-500 rounded-full flex items-center px-0.5 justify-end">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-t border-white/5">
                      <span className="text-[11px] text-gray-300">Ceiling Fan (Hum-Free)</span>
                      <span className="w-7 h-4 bg-emerald-500 rounded-full flex items-center px-0.5 justify-end">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-t border-white/5">
                      <span className="text-[11px] text-gray-300">Smart Curtains</span>
                      <span className="text-[10px] text-gray-400 font-semibold">Open 80%</span>
                    </div>
                  </div>
                </div>

                {/* Bottom App Tab Indicator */}
                <div className="text-[10px] text-center text-gray-400 py-1">
                  100% Offline Mesh &amp; Cloud Voice Sync
                </div>
              </div>
            )}

            {active.type === 'railways' && (
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-slate-900/90 border border-white/15 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in duration-500">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">RDSO Rail System</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">GPS Synced</span>
                </div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
                  <img src="/media/fog_pass.png" alt="Fog Pass v3.0" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Fog Pass Device v3.0</h4>
                <p className="text-xs text-gray-400">Centimeter-level GNSS driver assistance alert for dense fog navigation.</p>
              </div>
            )}

            {active.type === 'non-uv' && (
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-slate-900/90 border border-white/15 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in duration-500">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Clinical Cleanroom</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">IEC 62471 Safe</span>
                </div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
                  <img src="/media/continuous_sterilization.jpg" alt="Non-UV Disinfection" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">2x2 Antimicrobial Ceiling Panel</h4>
                <p className="text-xs text-gray-400">Continuous 405nm disinfection destroying 99.9% of bacteria while room is occupied.</p>
              </div>
            )}

            {active.type === 'power' && (
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-slate-900/90 border border-white/15 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in duration-500">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Industrial Power</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold">94% Efficiency</span>
                </div>
                <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
                  <img src="/media/industrial_smps.jpg" alt="Industrial SMPS" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Industrial AC-DC SMPS &amp; Drivers</h4>
                <p className="text-xs text-gray-400">Universal 85-305V AC input with 10kV lightning surge protection.</p>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Circular Left Arrow (From SmartNode Image 2) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-xl"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Circular Right Arrow (From SmartNode Image 2) */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-xl"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-8 left-8 sm:left-14 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide 
                ? 'w-8 h-2.5 bg-white shadow-lg' 
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </div>
  );
}
