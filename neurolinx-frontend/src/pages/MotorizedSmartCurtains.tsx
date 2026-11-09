import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Wifi, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  ChevronRight, 
  Sliders, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Activity, 
  Radio, 
  Cpu, 
  Volume2, 
  Compass, 
  Layers, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function MotorizedSmartCurtains() {
  // Active Track Type Tab: 'drapery' | 'roller'
  const [activeTrackTab, setActiveTrackTab] = useState<'drapery' | 'roller'>('drapery');

  // Interactive Live Curtain Simulator State
  const [curtainPercent, setCurtainPercent] = useState<number>(70); // 0 = fully closed, 100 = fully open
  const [sheerPercent, setSheerPercent] = useState<number>(100); // inner sheer curtain
  const [isDualTrack, setIsDualTrack] = useState<boolean>(true);
  const [motorMoving, setMotorMoving] = useState<boolean>(false);

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Motorized Smart Curtains & Drapery',
    projectType: 'Luxury Villa / Master Bedroom',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Dynamic Telemetry Calculations
  const telemetry = useMemo(() => {
    const soundDecibels = motorMoving ? 23.5 : 0;
    const daylightPercentage = Math.round((curtainPercent * 0.7) + (sheerPercent * 0.3));
    const uvGlareBlocked = Math.round(100 - (daylightPercentage * 0.65));
    const estimatedMotorTorque = activeTrackTab === 'drapery' ? 1.2 : 0.8; // Nm

    return {
      soundDecibels,
      daylightPercentage,
      uvGlareBlocked,
      estimatedMotorTorque,
      voltage: 230.0,
      powerConsumption: motorMoving ? 45 : 0.8 // Watts
    };
  }, [curtainPercent, sheerPercent, motorMoving, activeTrackTab]);

  const handleSliderChange = (newVal: number) => {
    setMotorMoving(true);
    setCurtainPercent(newVal);
    setTimeout(() => {
      setMotorMoving(false);
    }, 400);
  };

  // Preset Scenes Handler
  const applyPresetScene = (blackout: number, sheer: number) => {
    setMotorMoving(true);
    setCurtainPercent(blackout);
    setSheerPercent(sheer);
    setTimeout(() => {
      setMotorMoving(false);
    }, 600);
  };

  // Track Models Definition
  const trackModels = [
    {
      id: 'drapery',
      name: 'Motorized Drapery Tracks',
      subtitle: 'Concealed Dual-Track Architectural Drapery System',
      modelNumber: 'Neurolinx CurtainDrive Pro-60',
      tagline: 'Whisper-Quiet <25dB Motor, Heavy-Duty 60kg Load & Gentle-Pull Trigger',
      desc: 'Architectural-grade motorized curtain rails designed for luxury penthouses, master bedrooms, and home theatres. Accommodates heavy pinch pleat, ripple-fold, and motorized curved 90-degree bay windows. Features high-tensile rubber drive belts, smooth roller bearings, and gentle-pull auto-activation.',
      image: '/media/smart_curtains_drapery_track.jpg',
      badgeColor: 'bg-brand-red/10 text-brand-red border-brand-red/20',
      specs: [
        { label: 'Maximum Load Capacity', val: 'Up to 60 kg Fabric Weight' },
        { label: 'Acoustic Sound Level', val: '< 24.5 dB (Practically Silent)' },
        { label: 'Track Lengths', val: 'Customizable up to 12 Meters' },
        { label: 'Track Configurations', val: 'Straight, 90° Corner, Curved Bay' },
        { label: 'Gentle-Pull Function', val: 'Tug 5cm to Auto Open/Close' },
        { label: 'Manual Operation', val: 'Smooth Manual Glide during Outages' },
        { label: 'Control Protocols', val: 'Wi-Fi, RF 433MHz, RS485 & Dry Contact' },
        { label: 'Voice Platforms', val: 'Amazon Alexa, Google Home & Siri' }
      ],
      highlights: [
        'Whisper-quiet motor (<25dB) operates silently without disturbing sleep',
        'Gentle touch pull-to-start: gently tug fabric 5cm and motor automatically glides',
        'Dual-track support for independent sheer privacy and blackout velvet drapes',
        'Emergency manual operation ensures curtains always open smoothly during power cuts'
      ]
    },
    {
      id: 'roller',
      name: 'Motorized Roller & Zebra Blinds',
      subtitle: 'Precision Tubular Motor for Blackout & Zebra Roller Shades',
      modelNumber: 'Neurolinx TubularRoll Pro-35',
      tagline: 'Lithium Battery or Wired 230V, Millimeter Limit Setting & Solar Charging',
      desc: 'Sleek motorized roller blind automation for floor-to-ceiling glass facades, executive boardrooms, and modern minimalist living rooms. Features silent electronic limit memory, multi-channel RF remote control, and optional built-in rechargeable lithium-ion battery with solar trickle charging.',
      image: '/media/smart_curtains_luxury_villa.jpg',
      badgeColor: 'bg-[#1A09FA]/10 text-[#1A09FA] border-[#1A09FA]/20',
      specs: [
        { label: 'Torque Output', val: '1.2 Nm (Handles blinds up to 4.5m height)' },
        { label: 'Operating Noise', val: '< 28 dB Ultra-Quiet Precision Motor' },
        { label: 'Power Supply Options', val: '230V AC Hardwired or 12V Li-ion Battery' },
        { label: 'Battery Endurance', val: 'Up to 6 Months per Charge (Solar Ready)' },
        { label: 'Fabric Compatibility', val: '100% Blackout, Sunscreen & Zebra Blinds' },
        { label: 'Limit Precision', val: 'Digital Electronic Limit via Mobile App' },
        { label: 'Multi-Blind Sync', val: 'Synchronized alignment across 10+ windows' },
        { label: 'Integration', val: 'Matter, Zigbee, Wi-Fi & Smart Switchboards' }
      ],
      highlights: [
        'Precision synchronized alignment: multiple roller blinds raise and lower in perfect unison',
        'Available in 100% wire-free rechargeable lithium battery version (6-month battery life)',
        'Circadian sunrise scheduling opens blinds progressively as morning light increases',
        'Smart glare reduction automatically lowers shades during peak harsh afternoon sun'
      ]
    }
  ];

  const currentTrack = trackModels.find(t => t.id === activeTrackTab) || trackModels[0];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: High Impact Visual Hero Banner (Full-Width Edge-to-Edge Clean Architecture) ── */}
      <div className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24 border-b border-gray-100">
        <div className="relative w-full">
          <img 
            src="/media/smart_curtains_hero.jpg?v=2" 
            alt="Motorized Smart Curtains - Effortless Control | Comfort | Energy Efficient" 
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block shadow-2xl"
          />
        </div>
      </div>

      {/* ── Slide 2: Interactive Track Selector & Live Curtain Slider Simulator ── */}
      <div id="tracks" className="w-full bg-[#F8F9FA] py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Company Logo Colors (Red & Blue) */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Architectural Window Automation</span>
            </div>
            
            {/* Title styled with Company Logo Colors: Brand Red & Brand Blue */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Precision Automated <span className="text-brand-red">Smart Drapery</span> &amp; <span className="text-[#1A09FA]">Roller Blinds</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whisper-quiet motorized tracks with gentle-pull manual triggers, circadian sunrise rhythm synchronization, and percentage slider control from your smartphone and touch glass panels.
            </p>

            {/* Model Toggle Buttons */}
            <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-gray-200/80 mt-8 gap-2">
              {trackModels.map((track) => {
                const isActive = activeTrackTab === track.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setActiveTrackTab(track.id as 'drapery' | 'roller')}
                    className={`px-6 sm:px-9 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-black text-white shadow-md scale-100'
                        : 'text-slate-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <Sliders className={`w-4 h-4 ${isActive ? 'text-brand-red' : 'text-gray-400'}`} />
                    <span>{track.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Split: Left Product Showcase + Right Live Curtain Slider Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 7 Columns: Product Hardware Showcase & Specifications */}
            <div className="lg:col-span-7 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
              
              <div>
                {/* Badge & Model Number with Company Logo Colors */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-gray-500 uppercase tracking-wider">
                      {currentTrack.modelNumber}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${currentTrack.badgeColor}`}>
                      Whisper-Quiet &lt;25dB
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand-red flex items-center gap-1.5 bg-brand-red/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                    <span>Gentle-Pull Touch Certified</span>
                  </span>
                </div>

                {/* Title & Tagline with Company Logo Colors */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
                  {currentTrack.subtitle}
                </h3>
                <p className="text-brand-red font-semibold text-sm sm:text-base mb-6">
                  {currentTrack.tagline}
                </p>

                {/* 4K Studio Hardware Image */}
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-sm border border-gray-100 bg-[#0B0F19]">
                  <img 
                    src={currentTrack.image} 
                    alt={currentTrack.subtitle} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 font-semibold border border-white/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Dual-Motor Drive Ready</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {currentTrack.desc}
                </p>

                {/* Technical Specifications Grid */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-red" />
                  <span>Track Hardware &amp; Drive Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentTrack.specs.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                      <span className="text-[11px] font-medium text-gray-500">{item.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  {currentTrack.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Company Colors */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100">
                <a
                  href="#slide-4"
                  className="px-6 py-3.5 bg-brand-red text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-red-700 transition-all shadow-md shadow-brand-red/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Track Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#architectural-showcase"
                  className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-slate-800 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Sun className="w-4 h-4 text-[#1A09FA]" />
                  <span>Explore Architectural Showcase</span>
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Interactive Real-Time Curtain Slider Simulator */}
            <div className="lg:col-span-5 bg-[#0C101A] text-white p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[36px] flex flex-col justify-between border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Cyan / Blue Accent Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#1A09FA]/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono text-brand-red font-bold tracking-widest uppercase block">
                      SIMULATOR
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
                      Live Smart Curtain Controller
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Interactive Graphical Animated Curtain Preview */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/80 border border-white/10 shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] mb-6 relative overflow-hidden">
                  
                  {/* Window Frame Background simulating scenic outside view */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-sky-400/30 via-amber-200/20 to-sky-600/30 flex items-center justify-center">
                    
                    {/* Outside Sun & Landscape Simulation */}
                    <div className="absolute top-4 right-8 w-10 h-10 rounded-full bg-amber-300 shadow-[0_0_25px_#F59E0B] opacity-80"></div>
                    <span className="text-[10px] font-mono text-white/50 tracking-widest z-0">
                      NATURAL DAYLIGHT: {telemetry.daylightPercentage}%
                    </span>

                    {/* Left Curtain Fabric Panel (Animated Width based on 100 - curtainPercent) */}
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-r-2 border-amber-500/50 transition-all duration-300 shadow-2xl z-10 flex flex-col justify-between p-2"
                      style={{ width: `${Math.max(5, (100 - curtainPercent) / 2)}%` }}
                    >
                      <div className="w-full flex justify-between px-1">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="w-1 h-full bg-black/40 rounded-full"></span>
                        ))}
                      </div>
                      <span className="text-[8px] font-mono text-gray-400 rotate-90 origin-left">
                        {curtainPercent < 15 ? 'CLOSED' : ''}
                      </span>
                    </div>

                    {/* Right Curtain Fabric Panel (Animated Width based on 100 - curtainPercent) */}
                    <div 
                      className="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900 border-l-2 border-amber-500/50 transition-all duration-300 shadow-2xl z-10 flex flex-col justify-between p-2"
                      style={{ width: `${Math.max(5, (100 - curtainPercent) / 2)}%` }}
                    >
                      <div className="w-full flex justify-between px-1">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="w-1 h-full bg-black/40 rounded-full"></span>
                        ))}
                      </div>
                      <span className="text-[8px] font-mono text-gray-400 -rotate-90 origin-right">
                        {curtainPercent < 15 ? 'CLOSED' : ''}
                      </span>
                    </div>

                    {/* Track Indicator Bar at Top */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 border-b border-black z-20"></div>

                  </div>

                  {/* Readout Metrics */}
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 mt-2 border-t border-white/10 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-brand-red" />
                      <span>Sound: {motorMoving ? '< 24 dB (Moving)' : '< 18 dB (Silent)'}</span>
                    </span>
                    <span className="text-white font-bold">
                      Position: <strong className="text-brand-red">{curtainPercent}%</strong> Open
                    </span>
                  </div>

                </div>

                {/* Primary Interactive Drag Slider */}
                <div className="space-y-4 mb-6">
                  
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-300 font-bold flex items-center gap-2">
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        <span>Blackout Curtain Position</span>
                      </span>
                      <span className="text-brand-red font-mono font-bold">{curtainPercent}%</span>
                    </div>
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={curtainPercent}
                      onChange={(e) => handleSliderChange(Number(e.target.value))}
                      className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-red"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                      <span>0% (Closed)</span>
                      <span>50% (Ambient)</span>
                      <span>100% (Full Day)</span>
                    </div>
                  </div>

                  {/* Quick Preset Scene Buttons */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                      One-Touch Preset Scenes
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      
                      <button
                        type="button"
                        onClick={() => applyPresetScene(100, 100)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between font-bold transition-all cursor-pointer ${
                          curtainPercent === 100 
                            ? 'bg-brand-red/20 border-brand-red text-white' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                          <span>Sunrise Wakeup</span>
                        </span>
                        <span className="text-[10px] font-mono">100%</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => applyPresetScene(0, 0)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between font-bold transition-all cursor-pointer ${
                          curtainPercent === 0 
                            ? 'bg-brand-red/20 border-brand-red text-white' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Moon className="w-3.5 h-3.5 text-blue-400" />
                          <span>Night Sleep</span>
                        </span>
                        <span className="text-[10px] font-mono">0%</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => applyPresetScene(25, 100)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between font-bold transition-all cursor-pointer ${
                          curtainPercent === 25 
                            ? 'bg-brand-red/20 border-brand-red text-white' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Privacy Sheer</span>
                        </span>
                        <span className="text-[10px] font-mono">25%</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => applyPresetScene(0, 100)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between font-bold transition-all cursor-pointer ${
                          curtainPercent === 0 && sheerPercent === 100
                            ? 'bg-brand-red/20 border-brand-red text-white' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#1A09FA]" />
                          <span>Cinema Mode</span>
                        </span>
                        <span className="text-[10px] font-mono">Dark</span>
                      </button>

                    </div>
                  </div>

                </div>

                {/* Real-Time Glare & Acoustic Status */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-gray-400 block">UV GLARE BLOCKED</span>
                    <span className="text-sm font-bold text-emerald-400">{telemetry.uvGlareBlocked}%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-gray-400 block">MOTOR TORQUE</span>
                    <span className="text-sm font-bold text-white">{telemetry.estimatedMotorTorque} Nm Smooth</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Order Button */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <a
                  href="#slide-4"
                  className="w-full py-3.5 bg-brand-red hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-brand-red/20 text-center block cursor-pointer"
                >
                  Configure My Motorized Curtains
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── Slide 3: 360° Architectural Luxury Living Showcase ── */}
      <div id="architectural-showcase" className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 6 Columns: 4K Architectural Panorama Photo */}
            <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden shadow-xl border border-gray-100 bg-[#0B0F19]">
              <img 
                src="/media/smart_curtains_luxury_villa.jpg" 
                alt="Neurolinx Motorized Smart Curtains in Luxury Villa Master Suite" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block text-sm">Penthouse Master Suite</span>
                  <span className="text-gray-400 text-[11px]">Circadian Sunrise Sync &amp; Dual Sheer Automation</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-red/20 text-brand-red font-mono font-bold">
                  <span>&lt; 25 dB WHISPER QUIET</span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Core Capabilities with Company Logo Colors */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
                  <Sun className="w-3.5 h-3.5 text-brand-red" />
                  <span>Effortless Comfort Living</span>
                </div>

                {/* Heading with Company Logo Colors: Brand Red & Brand Blue */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                  Architectural <span className="text-brand-red">Sunlight</span> &amp; <span className="text-[#1A09FA]">Privacy Automation</span>
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  Wake up naturally to golden morning light and protect your designer furniture from harsh UV rays without leaving your bed. Neurolinx Motorized Smart Curtains bring effortless elegance, whisper-quiet motion, and intelligent comfort to luxury spaces.
                </p>
              </div>

              {/* 4 Feature Callout Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: "Whisper-Quiet <25dB Motor",
                    desc: "Helical sound-dampened gears and high-tensile rubber belts ensure motorized motion is virtually inaudible."
                  },
                  {
                    title: "Gentle-Pull Touch Trigger",
                    desc: "Tug the curtain fabric by 5cm in either direction; internal optical sensors engage the motor automatically."
                  },
                  {
                    title: "Circadian Astronomical Sync",
                    desc: "Synchronizes automatically with your city's local sunrise and sunset times to open and close hands-free."
                  },
                  {
                    title: "Voice & Touch Panel Integration",
                    desc: "Set curtain percentages by voice ('Alexa, open bedroom sheer to 60%') or through Neurolinx glass touch switchboards."
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
                  <span>Order Motorized Smart Curtains</span>
                  <ChevronRight className="w-4 h-4 text-brand-red" />
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

      {/* ── Slide 4: Have Questions? Consultation & Contact Form (Matching Official Layout with Company Logo Colors) ── */}
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
                Get an Instant Motorized Curtains Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-8">
                Share your window dimensions and drapery preferences, and our smart interior automation consultant will assist you within 24 hours.
              </p>

              {inquirySubmitted ? (
                <div className="p-8 rounded-2xl bg-white border border-brand-red/30 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{inquiryForm.name}</span>. Our motorized curtain specialist will contact you shortly at <span className="font-semibold text-slate-900">{inquiryForm.contactNumber}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Motorized Smart Curtains & Drapery',
                        projectType: 'Luxury Villa / Master Bedroom',
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
                        placeholder="e.g. Vikram Reddy" 
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
                        placeholder="vikram@example.com" 
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Track Type */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Motorized System Type
                      </label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, automationFor: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      >
                        <option value="Dual-Track (Blackout + Sheer Drapery)">Dual-Track (Blackout + Sheer Drapery)</option>
                        <option value="Single Motorized Drapery Track">Single Motorized Drapery Track</option>
                        <option value="Motorized Roller Blinds (Blackout)">Motorized Roller Blinds (Blackout)</option>
                        <option value="Zebra / Dual-Shade Motorized Blinds">Zebra / Dual-Shade Motorized Blinds</option>
                        <option value="Curved 90-Degree Bay Window System">Curved 90-Degree Bay Window System</option>
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
                        <option value="Luxury Villa / Duplex">Luxury Villa / Duplex</option>
                        <option value="High-Rise Apartment / Penthouse">High-Rise Apartment / Penthouse</option>
                        <option value="Home Cinema / Entertainment Room">Home Cinema / Entertainment Room</option>
                        <option value="Corporate Executive Boardroom">Corporate Executive Boardroom</option>
                        <option value="Luxury Hotel Suite">Luxury Hotel Suite</option>
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
                      Desired Automation Features (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'Gentle-Pull Touch Auto-Start',
                        'Whisper-Quiet <25dB Motor',
                        'Smartphone App Percentage Sliders',
                        'Circadian Sunrise / Sunset Sync',
                        'Voice Control (Alexa & Google Assistant)',
                        'Integration with Touch Glass Switchboards'
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
                      <span>Submit Motorized Curtains Inquiry</span>
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

export default MotorizedSmartCurtains;
