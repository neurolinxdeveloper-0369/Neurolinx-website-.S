import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Wifi, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Droplets, 
  ChevronRight, 
  Gauge, 
  Waves, 
  ShieldCheck, 
  Activity, 
  Radio, 
  Cpu, 
  Power, 
  AlertTriangle, 
  Phone, 
  Mail, 
  MapPin, 
  RefreshCw 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function SmartWaterControl() {
  // Active System Mode Tab: 'oht' | 'sump'
  const [activeTab, setActiveTab] = useState<'oht' | 'sump'>('oht');

  // Interactive Live Water Telemetry Simulator State
  const [pumpMode, setPumpMode] = useState<'auto' | 'manual' | 'off'>('auto');
  const [pumpRunning, setPumpRunning] = useState<boolean>(true);
  const [overheadLevel, setOverheadLevel] = useState<number>(76); // percentage
  const [sumpLevel, setSumpLevel] = useState<number>(88); // percentage
  const [waterDrawActive, setWaterDrawActive] = useState<boolean>(false);

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Smart Water Control System',
    projectType: 'Residential Villa / Apartment',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Dynamic Telemetry Calculations
  const telemetry = useMemo(() => {
    const isDryRunRisk = sumpLevel < 15;
    const isAutoOn = pumpMode === 'auto' && overheadLevel < 85 && !isDryRunRisk;
    const isManualOn = pumpMode === 'manual' && !isDryRunRisk;
    const isMotorActive = (pumpMode !== 'off') && (isAutoOn || isManualOn);

    const motorPowerKw = 1.5; // 2 HP standard monoblock / submersible
    const motorCurrentAmps = isMotorActive ? 6.8 : 0.0;
    const flowRateLpm = isMotorActive ? 52 : 0;
    const waterTds = 138; // ppm clean drinking/soft water
    const ohtLitres = Math.round((overheadLevel / 100) * 2000);
    const sumpLitres = Math.round((sumpLevel / 100) * 5000);

    return {
      isMotorActive,
      isDryRunRisk,
      motorPowerKw,
      motorCurrentAmps,
      flowRateLpm,
      waterTds,
      ohtLitres,
      sumpLitres,
      voltage: 232.0,
      frequency: 50.0
    };
  }, [pumpMode, overheadLevel, sumpLevel]);

  // System Configurations
  const systems = [
    {
      id: 'oht',
      name: 'Overhead Tank (OHT) Automation',
      subtitle: 'Smart Automatic Pump & Motor Controller',
      modelNumber: 'Neurolinx WCS-OHT Pro',
      tagline: 'Automated Tank-to-Sump Automation & Dry-Run Protection',
      desc: 'Intelligent pump controller that automates overhead tank and underground sump water cycles with complete motor protection.',
      image: '/media/smart_water_controller_hardware.jpg',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
      specs: [
        { label: 'Motor Capacity', val: 'Up to 3 HP / 5 HP (Single & 3-Phase)' },
        { label: 'Sensing Technology', val: 'Non-Contact Ultrasonic & Stainless Probes' },
        { label: 'Protection', val: 'Dry-Run, Voltage Fluctuation & Thermal Cut-off' },
        { label: 'Connectivity', val: 'Wi-Fi, Mobile App & Manual Bypass Switch' }
      ],
      highlights: [
        { title: 'Fully Automated Pumping', detail: 'Starts when tank is low, stops automatically when full' },
        { title: 'Dry-Run Guard', detail: 'Protects motor from burnout by sensing water absence instantly' },
        { title: 'Live Tank Telemetry', detail: 'Real-time % water level display and smartphone remote control' }
      ]
    },
    {
      id: 'sump',
      name: 'Underground Sump & Borewell Logic',
      subtitle: 'Dual-Tank Cascading Interlock & Borewell Guard',
      modelNumber: 'Neurolinx WCS-Dual Pro',
      tagline: 'Zero-Dry-Run Interlock & Municipal Supply Intake Automation',
      desc: 'Multi-tank controller that coordinates municipal supply inflow, underground sumps, and borewells without dry-run risk.',
      image: '/media/smart_water_tank_architecture.jpg',
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      specs: [
        { label: 'Tank Coordination', val: 'Cascading Sump-to-OHT Interlock' },
        { label: 'Pump Support', val: 'Submersible, Jet & Monoblock Motors' },
        { label: 'Phase & Voltage Guard', val: '160V–270V Cut-off & Phase Reversal' },
        { label: 'Manual Override', val: 'Emergency Physical Bypass Toggle' }
      ],
      highlights: [
        { title: 'Cascading Sump Lock', detail: 'Guarantees pump never starts when underground sump is empty' },
        { title: 'Smart Supply Intake', detail: 'Automatically captures municipal inflow without manual valves' },
        { title: 'Surge & Phase Safety', detail: 'Shields 1-phase & 3-phase motors from burnout and voltage spikes' }
      ]
    }
  ];

  const currentSystem = systems.find(s => s.id === activeTab) || systems[0];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Full-Bleed Smart Water Control System 4K UHD Panoramic Hero Banner (3840 x 1280, matching 3:1 Retrofit & Touch Panel container) ── */}
      <div
        id="hero"
        className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24 border-none"
      >
        <div className="relative w-full max-w-[2172px] mx-auto">
          <img
            src="/media/smart_water_control_hero_4k.jpg?v=uhd4kCleanWall"
            alt="Smart Water Control System - Automated Water Level & Pump Controller - Neurolinx"
            width={3840}
            height={1280}
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block"
          />

          {/* Subtle Ambient Scrim for Clean Text Readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Centered Title Positioned in the Calm Twilight Window (~1 cm shifted left) */}
          <div className="absolute top-[26%] sm:top-[25%] left-0 right-0 -translate-y-1/2 -translate-x-4 sm:-translate-x-7 md:-translate-x-10 flex justify-center pointer-events-none z-10 px-4 text-center">
            <h1 className="whitespace-nowrap text-sm sm:text-2xl md:text-[34px] lg:text-[42px] xl:text-5xl font-bold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              <span className="text-white">Smart Water </span>
              <span className="text-brand-red drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] relative inline-block pb-1">
                Control System
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red/90 rounded-full" />
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Slide 2: Interactive System Selector & Live Water Telemetry Simulator ── */}
      <div id="systems" className="w-full bg-[#F8F9FA] py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Droplets className="w-3.5 h-3.5 text-cyan-600" />
              <span>Autonomous Water Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Autonomous Management for <span className="text-brand-red">Overhead Tanks</span> &amp; <span className="text-cyan-600">Sumps</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Eliminate daily water anxiety, roof overflows, and motor burnouts with intelligent ultrasonic non-contact sensing and automated dual-tank pump control.
            </p>

            {/* Model Toggle Buttons */}
            <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-gray-200/80 mt-8 gap-2">
              {systems.map((sys) => {
                const isActive = activeTab === sys.id;
                return (
                  <button
                    key={sys.id}
                    type="button"
                    onClick={() => setActiveTab(sys.id as 'oht' | 'sump')}
                    className={`px-6 sm:px-9 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-black text-white shadow-md scale-100'
                        : 'text-slate-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <Waves className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                    <span>{sys.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Split: Left Product Showcase + Right Live Water Telemetry Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Product Hardware Showcase & Specifications */}
            <div className="lg:col-span-7 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
              
              <div>
                {/* Badge & Model Number */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-gray-500 uppercase tracking-wider">
                      {currentSystem.modelNumber}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${currentSystem.badgeColor}`}>
                      IP65 Weatherproof
                    </span>
                  </div>
                  <span className="text-xs font-bold text-cyan-600 flex items-center gap-1.5 bg-cyan-50 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Ultrasonic Non-Contact Certified</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-2.5">
                  {currentSystem.subtitle}
                </h3>
                <p className="text-brand-red font-semibold text-sm sm:text-base mb-5">
                  {currentSystem.tagline}
                </p>

                {/* 4K Studio Hardware Image */}
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100 bg-[#0B0F19]">
                  <img 
                    src={currentSystem.image} 
                    alt={currentSystem.subtitle} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-cyan-400 font-semibold border border-white/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Ultrasonic Sonar Active</span>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentSystem.desc}
                </p>

                {/* Core Specifications (2x2 Grid) */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-red" />
                  <span>Core Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {currentSystem.specs.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                      <span className="text-[11px] font-medium text-gray-500">{item.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-3 mb-6">
                  {currentSystem.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        <strong className="text-slate-900 font-bold">{feat.title}:</strong> {feat.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100">
                <a
                  href="#slide-4"
                  className="px-6 py-3.5 bg-brand-red text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-red-700 transition-all shadow-md shadow-brand-red/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Water Automation Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#dual-tank-system"
                  className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-slate-800 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Waves className="w-4 h-4 text-cyan-600" />
                  <span>Explore Dual-Tank Architecture</span>
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Interactive Real-Time Water Telemetry Simulator */}
            <div className="lg:col-span-5 h-fit lg:self-start bg-[#0C101A] text-white p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] flex flex-col border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Cyan Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 font-bold tracking-widest uppercase block">
                      SIMULATOR
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
                      Live Water Telemetry
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Digital LCD Dual-Tank Gauge Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/70 border border-cyan-500/30 shadow-[inset_0_2px_12px_rgba(6,182,212,0.15)] mb-5 font-mono">
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/10 pb-3 mb-4">
                    <span>{currentSystem.modelNumber}</span>
                    <span className={`font-bold ${telemetry.isMotorActive ? 'text-cyan-400' : 'text-gray-400'}`}>
                      PUMP: {telemetry.isMotorActive ? 'RUNNING (2.0 HP)' : 'STANDBY'}
                    </span>
                  </div>

                  {/* Overhead Tank Visual Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-400">OVERHEAD TANK (OHT)</span>
                      <span className="text-white font-bold">{overheadLevel}% ({telemetry.ohtLitres} L)</span>
                    </div>
                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 relative"
                        style={{ width: `${overheadLevel}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Underground Sump Visual Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-gray-400">UNDERGROUND SUMP</span>
                      <span className="text-white font-bold">{sumpLevel}% ({telemetry.sumpLitres} L)</span>
                    </div>
                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${sumpLevel}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Electrical & Flow Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-white/10 text-xs">
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-gray-400 block">FLOW RATE</span>
                      <span className="text-sm font-bold text-cyan-400">{telemetry.flowRateLpm} LPM</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-gray-400 block">MOTOR AMPS</span>
                      <span className="text-sm font-bold text-white">{telemetry.motorCurrentAmps} A</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-gray-400 block">WATER TDS</span>
                      <span className="text-sm font-bold text-emerald-400">{telemetry.waterTds} ppm</span>
                    </div>
                  </div>

                </div>

                {/* Interactive Controls & Usage Simulator */}
                <div className="space-y-3 mb-5">
                  
                  {/* Mode Selector */}
                  <div className="flex items-center justify-between gap-2 p-1.5 bg-white/5 rounded-xl border border-white/10">
                    {(['auto', 'manual', 'off'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setPumpMode(mode)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                          pumpMode === mode 
                            ? 'bg-cyan-500 text-black shadow-md' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {mode === 'auto' ? 'Auto Pilot' : mode === 'manual' ? 'Manual ON' : 'Pump Off'}
                      </button>
                    ))}
                  </div>

                  {/* Simulate Heavy Water Usage (Shower / Garden) */}
                  <button
                    type="button"
                    onClick={() => {
                      setOverheadLevel(prev => Math.max(18, prev - 25));
                    }}
                    className="w-full p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      <span>Simulate Water Usage (-25% Level)</span>
                    </div>
                    <span className="text-[10px] text-gray-400">Trigger Auto-Fill</span>
                  </button>

                  {/* Refill / Restore Sump Level */}
                  <button
                    type="button"
                    onClick={() => {
                      setOverheadLevel(85);
                      setSumpLevel(90);
                    }}
                    className="w-full p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <RefreshCw className="w-4 h-4 text-emerald-400" />
                      <span>Reset Reservoir Levels to Full</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">100% OK</span>
                  </button>

                </div>

                {/* Safety Shield Status Alert */}
                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-gray-300 text-[11px] leading-snug">
                    <strong className="text-white">Active Dry-Run Safeguard:</strong> Sump is monitored continuously; motor trips within 8 seconds if supply stops.
                  </span>
                </div>

              </div>

              {/* Bottom Quick Order Button */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href="#slide-4"
                  className="w-full py-3.5 bg-brand-red hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-brand-red/20 text-center block cursor-pointer"
                >
                  Configure My Smart Water System
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── Slide 3: 360° Architectural & Dual-Tank Infrastructure Showcase ── */}
      <div id="dual-tank-system" className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 6 Columns: 4K Architectural Water Infrastructure Photo */}
            <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden shadow-xl border border-gray-100 bg-[#0B0F19]">
              <img 
                src="/media/smart_water_tank_architecture.jpg" 
                alt="Neurolinx Smart Water Control System Installed in Modern Villa Infrastructure" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block text-sm">Villa Water Infrastructure</span>
                  <span className="text-gray-400 text-[11px]">Autonomous Sump-to-Overhead Management</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-400 font-mono font-bold">
                  <span>ZERO OVERFLOW</span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Core Capabilities & Intelligence */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
                  <Waves className="w-3.5 h-3.5" />
                  <span>Zero Wastage • 100% Hands-Free</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                  Intelligent Dual-Tank Coordination &amp; <span className="text-brand-red">Motor Protection</span>
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  Never worry about overflowing rooftop tanks or hearing a dry-running motor grinding itself to destruction. Neurolinx Smart Water Control System delivers seamless, worry-free water availability 24 hours a day.
                </p>
              </div>

              {/* 4 Feature Callout Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: "Ultrasonic Non-Contact Tech",
                    desc: "Zero corroded probes or stuck mechanical floats. High-frequency soundwave radar measures exact water distance from above."
                  },
                  {
                    title: "Active Dry-Run Protection",
                    desc: "Monitors pump water delivery continuously. Shuts off motor power in 8 seconds if borewell or municipal line runs dry."
                  },
                  {
                    title: "Dual-Tank Interlock",
                    desc: "Ensures the overhead tank only draws when the underground sump has sufficient supply, preventing pump airlocks."
                  },
                  {
                    title: "Leak & Pipe Burst Alarms",
                    desc: "Detects continuous uncharacteristic water drops or running toilets and alerts your smartphone immediately."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="#slide-4"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black hover:bg-brand-red text-white font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <span>Order Smart Water Control System</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

            </div>

          </div>

          {/* Downside Option: Download Brochure */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-100 flex justify-center">
            <a
              href="/media/smart_home_automation_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-black"
            >
              Download Brochure
            </a>
          </div>

        </div>
      </div>

      {/* ── Slide 4: Have Questions? Consultation & Contact Form (Matching Official Layout) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container */}
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
                    href="mailto:support@neurolinx.in" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">support@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-relaxed">
                      C12/A, Industrial Area, Kushaiguda,<br />
                      Hyderabad, Secunderabad,<br />
                      Telangana 500062
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Copyright Brand mark */}
              <div className="pt-8 mt-8 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                  Neurolinx Automation Systems
                </span>
                <span className="text-xs text-gray-500">ISO 9001:2015 &amp; CE Certified</span>
              </div>

            </div>

            {/* Right Panel: Light Grey Background Consultation Form */}
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-10 lg:px-12 py-9 sm:py-12 lg:py-14">
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Get an Instant Water Automation Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-8">
                Share your tank capacity and pump details, and our certified fluid automation engineer will assist you within 24 hours.
              </p>

              {inquirySubmitted ? (
                <div className="p-8 rounded-2xl bg-white border border-cyan-500/30 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{inquiryForm.name}</span>. Our fluid automation specialist will contact you shortly at <span className="font-semibold text-slate-900">{inquiryForm.contactNumber}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Smart Water Control System',
                        projectType: 'Residential Villa / Apartment',
                        controlOptions: [],
                        contactNumber: '',
                        city: '',
                        captchaInput: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-brand-red transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (inquiryForm.captchaInput.trim() !== '8') {
                      alert('Captcha validation incorrect. Please answer 5 + 3 = 8');
                      return;
                    }
                    setInquirySubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        placeholder="e.g. Suresh Varma" 
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        placeholder="suresh@gmail.com" 
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* System Configuration */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Water System Setup
                      </label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, automationFor: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      >
                        <option value="Overhead Tank Only (Ultrasonic Kit)">Overhead Tank Only (Ultrasonic Kit)</option>
                        <option value="Dual Tank (Overhead Tank + Sump Interlock)">Dual Tank (Overhead Tank + Sump Interlock)</option>
                        <option value="Borewell + Overhead Tank Setup">Borewell + Overhead Tank Setup</option>
                        <option value="Commercial Apartment Booster Pump Panel">Commercial Apartment Booster Pump Panel</option>
                        <option value="Multi-Tank Gated Community Water SCADA">Multi-Tank Gated Community Water SCADA</option>
                      </select>
                    </div>

                    {/* Property / Project Type */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Property Type
                      </label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      >
                        <option value="Independent Luxury Villa / Duplex">Independent Luxury Villa / Duplex</option>
                        <option value="Apartment Building (Multi-Floor)">Apartment Building (Multi-Floor)</option>
                        <option value="Commercial Complex / Hospital">Commercial Complex / Hospital</option>
                        <option value="Industrial Manufacturing Facility">Industrial Manufacturing Facility</option>
                        <option value="Farmhouse / Agricultural Borewell">Farmhouse / Agricultural Borewell</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Number & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Contact Number <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={inquiryForm.contactNumber}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, contactNumber: e.target.value })}
                        placeholder="+91 98765 43210" 
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        City / Location <span className="text-brand-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={inquiryForm.city}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, city: e.target.value })}
                        placeholder="e.g. Hyderabad / Bengaluru" 
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Desired Features Checkboxes */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Required Automation Features (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'Ultrasonic Non-Contact Level Sensors',
                        'Active Dry-Run Pump Protection',
                        'Mobile App Tank Level Monitoring (Wi-Fi)',
                        'Underground Sump-to-Overhead Interlock',
                        'Automatic Municipal Supply Detection',
                        'Three-Phase Motor Protection (Phase Drop)'
                      ].map((feature, idx) => {
                        const isSelected = inquiryForm.controlOptions.includes(feature);
                        return (
                          <label 
                            key={idx}
                            className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer select-none transition-colors ${
                              isSelected 
                                ? 'bg-white border-brand-red text-slate-900 font-semibold shadow-xs' 
                                : 'bg-white/60 border-gray-200 text-gray-600 hover:bg-white'
                            }`}
                          >
                            <input 
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {
                                setInquiryForm(prev => ({
                                  ...prev,
                                  controlOptions: isSelected
                                    ? prev.controlOptions.filter(f => f !== feature)
                                    : [...prev.controlOptions, feature]
                                }));
                              }}
                              className="accent-brand-red rounded"
                            />
                            <span>{feature}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Math Captcha Verification */}
                  <div className="pt-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Security Verification: <span className="font-mono text-brand-red">5 + 3 = ?</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={inquiryForm.captchaInput}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, captchaInput: e.target.value })}
                      placeholder="Enter the sum" 
                      className="w-32 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-brand-red shadow-xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-brand-red/20 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Water Control Inquiry</span>
                      <ChevronRight className="w-4 h-4" />
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

export default SmartWaterControl;
