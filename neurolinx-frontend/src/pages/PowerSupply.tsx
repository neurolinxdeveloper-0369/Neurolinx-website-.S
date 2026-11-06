import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Sparkles,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  Gauge,
  BatteryCharging,
  Compass,
  Volume2,
  RefreshCw,
  Eye,
  Flame,
  Radio,
  Clock,
  PhoneCall,
  Mail,
  MapPin,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function PowerSupply() {
  // Device view toggle (DIN-Rail SMPS Unit vs Control Panel Cabinet Deployment)
  const [activeDeviceView, setActiveDeviceView] = useState<'smps' | 'cabinet'>('smps');

  // Interactive Technical Rating Selector
  const [selectedVoltage, setSelectedVoltage] = useState<'12v' | '24v' | '48v'>('24v');
  const [selectedWattage, setSelectedWattage] = useState<'120w' | '240w' | '480w' | '960w'>('240w');

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Industrial Power Supply & Drivers Setup',
    projectType: 'Industrial / Commercial Facility',
    controlOptions: ['Industrial AC-DC DIN-Rail SMPS', '10kV Lightning Surge Protection'] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Technical Specs matrix based on selected voltage and wattage
  const specMatrix: Record<string, { current: string; efficiency: string; ripple: string; holdUp: string }> = {
    '12v-120w': { current: '10.0 A', efficiency: '92.5%', ripple: '< 50 mVp-p', holdUp: '> 25 ms' },
    '12v-240w': { current: '20.0 A', efficiency: '93.8%', ripple: '< 60 mVp-p', holdUp: '> 28 ms' },
    '12v-480w': { current: '40.0 A', efficiency: '94.2%', ripple: '< 70 mVp-p', holdUp: '> 30 ms' },
    '12v-960w': { current: '80.0 A', efficiency: '94.8%', ripple: '< 80 mVp-p', holdUp: '> 32 ms' },
    '24v-120w': { current: '5.0 A', efficiency: '93.5%', ripple: '< 40 mVp-p', holdUp: '> 26 ms' },
    '24v-240w': { current: '10.0 A', efficiency: '94.6%', ripple: '< 45 mVp-p', holdUp: '> 30 ms' },
    '24v-480w': { current: '20.0 A', efficiency: '95.2%', ripple: '< 50 mVp-p', holdUp: '> 32 ms' },
    '24v-960w': { current: '40.0 A', efficiency: '95.5%', ripple: '< 60 mVp-p', holdUp: '> 35 ms' },
    '48v-120w': { current: '2.5 A', efficiency: '94.0%', ripple: '< 40 mVp-p', holdUp: '> 28 ms' },
    '48v-240w': { current: '5.0 A', efficiency: '95.0%', ripple: '< 45 mVp-p', holdUp: '> 32 ms' },
    '48v-480w': { current: '10.0 A', efficiency: '95.5%', ripple: '< 50 mVp-p', holdUp: '> 35 ms' },
    '48v-960w': { current: '20.0 A', efficiency: '95.8%', ripple: '< 55 mVp-p', holdUp: '> 38 ms' },
  };

  const activeSpecs = specMatrix[`${selectedVoltage}-${selectedWattage}`] || specMatrix['24v-240w'];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Hero Banner (Industrial Power Electronics Lab with Company Colors) ── */}
      <div 
        id="hero"
        style={{ minHeight: 'calc(100vh + 1.5cm)' }}
        className="relative w-full overflow-hidden text-white flex items-center min-h-[calc(100vh+1.5cm)] pt-24 pb-16"
      >
        {/* Real 4K Industrial Cleanroom Electronics & Power Test Bench Background */}
        {/* Real 4K Industrial Cleanroom Electronics & Power Test Bench Background (Natural Unmirrored Orientation) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/power_supply_drivers_hero_4k.jpg?v=natural"
            alt="Neurolinx Industrial Switched Mode Power Supply and Precision Drivers Lab"
            className="w-full h-full object-cover object-center opacity-100 brightness-115 contrast-105 filter"
          />
          {/* Subtle directional gradient to ensure text readability on the left while highlighting the SMPS hardware on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Container Positioned to the Left Side of the Image */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl flex flex-col items-start text-left">
            
            {/* Pill Badge: INDUSTRIAL POWER · CONVERTERS · PRECISION DRIVERS */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/60 bg-red-950/40 text-red-400 text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(224,0,27,0.25)]">
              <span>INDUSTRIAL POWER</span>
              <span className="text-brand-red">•</span>
              <span>CONVERTERS</span>
              <span className="text-brand-red">•</span>
              <span>PRECISION DRIVERS</span>
            </div>

            {/* Heading: POWER SUPPLY in White + & DRIVERS in Brand Red & Blue Accents */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight mb-5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="text-white">POWER SUPPLY </span>
              <span className="text-brand-red drop-shadow-[0_0_25px_rgba(224,0,27,0.45)]">&amp; DRIVERS</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Ultra-reliable industrial SMPS, galvanically isolated DC-DC converters, and flicker-free precision LED drivers engineered to withstand extreme voltage fluctuations, harsh transients, and continuous 24/7 mission-critical operations.
            </p>

            {/* Glowing Red Carousel / Scroll Indicator matching FogPass */}
            <div className="flex items-center gap-3 mb-8">
              <a 
                href="#about-powersupply" 
                aria-label="Scroll to About Power Supply & Drivers"
                className="w-8 h-8 rounded-full border-2 border-brand-red/80 flex items-center justify-center bg-red-950/60 backdrop-blur-sm hover:scale-110 transition-transform group cursor-pointer shadow-[0_0_12px_rgba(224,0,27,0.4)]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red shadow-[0_0_10px_#E0001B] group-hover:animate-ping"></span>
              </a>
              <span className="text-xs text-red-300 font-mono tracking-wide">Mission-Critical Power Architecture</span>
            </div>

          </div>
        </div>

        {/* Floating Bottom Down-Arrow Pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center">
          <a
            href="#about-powersupply"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-105"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-red animate-bounce" />
          </a>
        </div>
      </div>

      {/* ── Slide 2: About Power Supply & Drivers (Complete Hardware & Cabinet Showcase) ── */}
      <div 
        id="about-powersupply"
        className="relative w-full overflow-hidden text-slate-900 bg-white py-20 lg:py-24 px-6 lg:px-8 border-b border-slate-200"
      >
        {/* Subtle light ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Power Supply Hardware Card (matching FogPass reference with view switcher) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xl">
                
                {/* Top Badge & View Switcher */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                    <span>{activeDeviceView === 'smps' ? 'DIN-Rail SMPS Unit' : 'Control Cabinet Panel'}</span>
                  </div>

                  <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[10px] font-bold text-slate-600">
                    <button
                      onClick={() => setActiveDeviceView('smps')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'smps' ? 'bg-white text-slate-900 shadow-xs font-black' : 'hover:text-slate-900'
                      }`}
                    >
                      SMPS Unit
                    </button>
                    <button
                      onClick={() => setActiveDeviceView('cabinet')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'cabinet' ? 'bg-white text-slate-900 shadow-xs font-black' : 'hover:text-slate-900'
                      }`}
                    >
                      Cabinet View
                    </button>
                  </div>
                </div>

                {/* Inbuilt Image Container with exact FogPass proportions */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center p-2 border border-slate-200 shadow-inner">
                  {activeDeviceView === 'smps' ? (
                    <img
                      src="/media/power_supply_smps_unit.jpg"
                      alt="Neurolinx Industrial DIN-Rail SMPS Unit with Heavy Anodized Heat Sink"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <img
                      src="/media/power_supply_panel_cabinet.jpg"
                      alt="Neurolinx Industrial Control Panel Enclosure Deployment"
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                {/* Card Text matching user reference design */}
                <div className="mt-5 text-left">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight leading-snug">
                    NEUROLINX POWERTECH V4.0
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1 mb-2.5">
                    (Industrial DIN-Rail Switched Mode Power Supply &amp; Driver Matrix)
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The Neurolinx PowerTech series delivers ripple-free, galvanically isolated power conversion engineered for industrial automation panels, locomotive cabins, and demanding outdoor lighting infrastructure.
                  </p>

                  <div className="flex items-center gap-3 mb-5">
                    <a
                      href="#features"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-xs shadow-md shadow-black/10 transition-all cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-white" />
                      <span>Explore Technical Features</span>
                    </a>
                  </div>
                </div>

                {/* Hardware Spec Badges matching FogPass layout */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Efficiency</span>
                    <span className="text-xs font-black text-slate-900">&ge; 95.5%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Isolation</span>
                    <span className="text-xs font-black text-slate-900">3000V DC</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Surge Rating</span>
                    <span className="text-xs font-black text-slate-900">10kV / 5kA</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-600 flex items-center justify-center gap-1.5 font-medium">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Active PFC &gt; 0.98 · EN 50155 &amp; EN 61000-6-2 Certified</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Operational Capabilities & Performance Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-brand-red text-xs font-bold tracking-wider uppercase mb-4">
                <Zap className="w-3.5 h-3.5 text-brand-red" />
                <span>Heavy Industrial &amp; Railway Grade Power</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-3 tracking-tight leading-tight">
                Ultra-Reliable Power Conversion Under Grid Fluctuations &amp; Surges.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Neurolinx Power Supply &amp; Driver modules safeguard sensitive microcontrollers and high-wattage equipment against heavy brownouts, inductive voltage spikes, and sudden lightning strikes—ensuring uninterrupted operation 24 hours a day.
              </p>

              {/* 4 Key Performance Metrics matching FogPass */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-2">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">95.5%</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Peak Efficiency</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">10 kV</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Surge Clamping</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">&gt; 1.2M Hrs</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">MTBF Reliability</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left hover:border-brand-red/40 transition-colors shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-lg sm:text-xl font-display font-black text-slate-900 leading-none mb-1">0.99</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Active PFC Factor</div>
                </div>
              </div>

              {/* 4 Practical High-Impact Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-7">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Zero Acoustic Hum &amp; Ripple</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Advanced LLC resonant topologies eliminate transformer coil whine and reduce DC output ripple to under 50mVp-p.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Railway Grade EN 50155 Tested</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Reinforced potting and heavy-gauge mechanical mounting withstand severe rolling stock vibrations and shock loads.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Self-Healing Protection Matrix</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Continuous auto-recovery protects against output short circuits, continuous over-voltage, and thermal overloads.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Wide Universal Voltage Envelope</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Full rated continuous output delivered smoothly from 85V AC severe brownouts to 305V AC heavy industrial swells.
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
                  <ChevronRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Section 3: Smart Functional Features & Technical Categories (Matching FogPass) ── */}
      <div id="features" className="w-full bg-white py-20 px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
              Power Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">
              Smart Functional Features.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered around the demanding realities of industrial control cabinets, railway rolling stock, and continuous architectural deployments.
            </p>
          </div>

          {/* 6 Clean Feature Cards with 4K Visuals and Titles matching FogPass */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Card 1: Industrial AC-DC DIN-Rail SMPS */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/power_supply_smps_unit.jpg" 
                  alt="Industrial AC-DC DIN-Rail SMPS Unit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-brand-red flex items-center justify-center border border-white/20 shadow-md">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Industrial AC-DC DIN-Rail SMPS
                </h3>
              </div>
            </div>

            {/* Card 2: High-Rel Railway & Telecom DC-DC Converters */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/powersupply_hero.jpg" 
                  alt="High-Rel Railway & Telecom DC-DC Converters" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-[#1E6FD9] flex items-center justify-center border border-white/20 shadow-md">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  High-Rel Railway &amp; Telecom DC-DC Converters
                </h3>
              </div>
            </div>

            {/* Card 3: Precision Architectural & Streetlight LED Drivers */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/precision_led_drivers.jpg" 
                  alt="Precision Architectural & Streetlight LED Drivers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-amber-500 flex items-center justify-center border border-white/20 shadow-md">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Precision Architectural &amp; Streetlight LED Drivers
                </h3>
              </div>
            </div>

            {/* Card 4: 10kV Lightning Surge & Transient Suppressors */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/power_supply_surge_lab.jpg" 
                  alt="10kV Heavy Lightning Surge & Transient Suppressors" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-emerald-500 flex items-center justify-center border border-white/20 shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  10kV Heavy Lightning Surge &amp; Transient Suppressors
                </h3>
              </div>
            </div>

            {/* Card 5: Intelligent Battery Chargers & Float Rectifiers */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/power_management.jpg" 
                  alt="Intelligent Battery Chargers & Float Rectifiers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-purple-500 flex items-center justify-center border border-white/20 shadow-md">
                  <BatteryCharging className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Intelligent Battery Chargers &amp; Float Rectifiers
                </h3>
              </div>
            </div>

            {/* Card 6: Dual-Input N+1 Redundancy & Oring Modules */}
            <div className="bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-red/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img 
                  src="/media/power_supply_panel_cabinet.jpg" 
                  alt="Dual-Input N+1 Redundancy & Oring Modules" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md text-teal-500 flex items-center justify-center border border-white/20 shadow-md">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Dual-Input N+1 Redundancy &amp; Oring Modules
                </h3>
              </div>
            </div>

          </div>

          {/* Interactive Technical Voltage & Wattage Dimensioning Tool */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="w-full lg:w-1/2 text-left">
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3 inline-block">
                  Live Technical Dimensioning
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-3 tracking-tight">
                  Configure Your Industrial Power Output.
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Select your regulated bus voltage and total power capacity to preview live efficiency, max current, and hold-up time for your control panel deployment.
                </p>

                {/* Voltage Selector */}
                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Regulated Bus Voltage:
                  </label>
                  <div className="flex items-center gap-2">
                    {(['12v', '24v', '48v'] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVoltage(v)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                          selectedVoltage === v 
                            ? 'bg-black text-white border-black shadow-sm' 
                            : 'bg-white hover:bg-gray-100 text-slate-700 border-gray-200'
                        }`}
                      >
                        {v.toUpperCase()} DC
                      </button>
                    ))}
                  </div>
                </div>

                {/* Wattage Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Rated Wattage Capacity:
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {(['120w', '240w', '480w', '960w'] as const).map((w) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWattage(w)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                          selectedWattage === w 
                            ? 'bg-brand-red text-white border-brand-red shadow-sm' 
                            : 'bg-white hover:bg-gray-100 text-slate-700 border-gray-200'
                        }`}
                      >
                        {w.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Live Telemetry Card */}
              <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-brand-red" />
                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                      Selected Model: NLX-{selectedVoltage.toUpperCase()}-{selectedWattage.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Industrial Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">Max Continuous Current</span>
                    <span className="text-xl font-display font-black text-slate-900">{activeSpecs.current}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">Conversion Efficiency</span>
                    <span className="text-xl font-display font-black text-emerald-600">{activeSpecs.efficiency}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">Output Voltage Ripple</span>
                    <span className="text-xl font-display font-black text-slate-900">{activeSpecs.ripple}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">Grid Loss Hold-Up Time</span>
                    <span className="text-xl font-display font-black text-slate-900">{activeSpecs.holdUp}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Overload Mode: Constant Current Limiting + Hiccup Restart</span>
                  <a 
                    href="#slide-4" 
                    className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                  >
                    <span>Request Engineering Specsheet</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Slide 4: Have Questions? Consultation & Contact Form (Matching FogPass) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container matching FogPass */}
          <div className="rounded-[32px] md:rounded-[36px] border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
            
            {/* Left Panel: Pure White Background (Snug & Attached to Form) */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-white px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100/80">
              
              <div>
                {/* Title colored in company logo Red and Blue */}
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
                    We have received your power engineering requirements. Our technical team will review your specifications and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Industrial Power Supply & Drivers Setup',
                        projectType: 'Industrial / Commercial Facility',
                        controlOptions: ['Industrial AC-DC DIN-Rail SMPS'],
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

                  {/* Row 2: Application / Sector & Deployment Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Application / Sector</label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>Industrial Power Supply &amp; Drivers Setup</option>
                        <option>Railway Rolling Stock &amp; Cabin Systems</option>
                        <option>Commercial Control Panels &amp; PLC Systems</option>
                        <option>Precision Architectural &amp; Streetlight LED</option>
                        <option>Defense, Aerospace &amp; Telecom Systems</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Deployment Type</label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({...inquiryForm, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>Industrial / Commercial Facility</option>
                        <option>Railway Rolling Stock</option>
                        <option>OEM Custom System Integration</option>
                        <option>Existing Retrofit / Panel Upgrade</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Product Subsystems (multiple options) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      Subsystems Required ( you can select multiple option )
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Industrial AC-DC DIN-Rail SMPS',
                        'Isolated Railway DC-DC Converters',
                        'Precision Constant Current LED Drivers',
                        '10kV Heavy Lightning Surge Suppressors'
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
                    By submitting this form, you agree that we may use your information for engineering consultations and technical updates.
                  </p>

                  {/* Captcha */}
                  <div>
                    <div className="font-serif tracking-widest text-lg font-bold text-gray-700 select-none mb-1.5 px-1">
                      P W 9 R
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

export default PowerSupply;
