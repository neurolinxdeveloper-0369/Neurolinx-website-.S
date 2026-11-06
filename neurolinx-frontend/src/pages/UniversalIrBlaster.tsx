import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Wifi, 
  ArrowRight, 
  Sparkles,
  Smartphone,
  Mic,
  Tv,
  Volume2,
  Wind,
  Power,
  ChevronRight,
  Zap,
  Radio,
  Cast
} from 'lucide-react';
import { Link } from 'react-router-dom';


export function UniversalIrBlaster() {

  // Active Appliance Tab for Slide 2
  const [activeAppliance, setActiveAppliance] = useState<'ac' | 'tv' | 'stb' | 'projector' | 'audio'>('ac');

  // Interactive Remote Simulator State
  const [acTemp, setAcTemp] = useState<number>(24);
  const [acPower, setAcPower] = useState<boolean>(true);
  const [acMode, setAcMode] = useState<'Cool' | 'Auto' | 'Dry' | 'Fan'>('Cool');
  
  const [tvPower, setTvPower] = useState<boolean>(true);
  const [tvVolume, setTvVolume] = useState<number>(25);
  const [tvChannel, setTvChannel] = useState<number>(101);

  const [audioVolume, setAudioVolume] = useState<number>(45);
  const [audioMode, setAudioMode] = useState<'Movie' | 'Music' | 'Voice' | 'Night'>('Movie');

  // Contact Inquiry Form State (Slide 5)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Universal IR Blaster Setup',
    projectType: 'New Building',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // 5 Connected Appliance Categories with Dedicated 4K Image Assets
  const appliances = [
    {
      id: 'ac',
      name: 'Air Conditioner',
      brand: 'Daikin, Voltas, LG, Samsung, Blue Star, Panasonic, Hitachi, Carrier, Lloyd',
      tagline: 'Precision Climate Control & Smart Scheduling',
      desc: 'Control cooling, fan speed, swing, and eco mode from anywhere in the world. Set circadian night curves so temperature climbs to 26°C by 4 AM for optimal sleep and 35% lower electricity bills.',
      image: '/media/ir_blaster_ac_bedroom.jpg',
      icon: Wind,
      badgeColor: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
      highlights: [
        'Set temperature from 16°C to 30°C with 0.5°C fine adjustment',
        'Auto, Cool, Dry, and Fan speed modes supported',
        'Geo-fencing: pre-cools room 10 minutes before you arrive home',
        'Compatible with all split, window, and cassette ACs'
      ]
    },
    {
      id: 'tv',
      name: 'Smart Television',
      brand: 'Sony Bravia, Samsung, LG OLED, Mi, TCL, OnePlus, Panasonic, Vu',
      tagline: 'Unified Media Navigation & Source Switching',
      desc: 'Power on/off, change channels, regulate sound volume, toggle mute, and switch between HDMI 1 (PlayStation), HDMI 2 (Apple TV), and Set-top box with a single voice command.',
      image: '/media/ir_blaster_home_theatre.jpg',
      icon: Tv,
      badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      highlights: [
        'Full D-Pad directional navigation and OK button',
        'Direct numeric keypad & instant channel bookmarks',
        'HDMI 1 / HDMI 2 / AV / OTT quick input toggles',
        'Voice ready: "Alexa, turn on Sony TV and set volume to 20"'
      ]
    },
    {
      id: 'stb',
      name: 'Set-top Box',
      brand: 'Tata Play, Airtel Digital TV, Dish TV, Sun Direct, JioFiber STB, Hathway',
      tagline: 'DTH Guide, Numbers & Multimedia Control',
      desc: 'Navigate DTH electronic program guides (EPG), jump to your favorite sports or news channels by direct number, and operate your set-top box without hunting for missing plastic remotes.',
      image: '/media/ir_remotes.jpg',
      icon: Cast,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      highlights: [
        'Electronic Program Guide (EPG) & Info triggers',
        'Custom channel favorites grouped by sports, movies, news',
        'Consolidate TV and STB onto one unified screen in app',
        'Zero line-of-sight needed — works inside wooden cabinets'
      ]
    },
    {
      id: 'projector',
      name: 'Home Projector',
      brand: 'BenQ, Epson, Optoma, ViewSonic, XGIMI, Sony, Nebula, LG CineBeam',
      tagline: 'Cinematic Theatre Lamp & Screen Automation',
      desc: 'Transform your room into an authentic IMAX home theatre. Turn on the projector lamp, toggle 16:9 widescreen format, and simultaneously drop motorized projection screens with one button.',
      image: '/media/universal_ir_alexa_control.jpg',
      icon: Radio,
      badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      highlights: [
        'Lamp power on/standby with smart cooldown protection',
        'Keystone & Aspect Ratio (16:9 / 4:3 / CinemaScope)',
        'HDMI / Optical audio source selection',
        'Automated "Movie Scene" linked with room dimming'
      ]
    },
    {
      id: 'audio',
      name: 'Sound System & Theatre',
      brand: 'Bose, Sony, JBL, Yamaha, Denon, Marantz, Marshall, Philips, Sonos',
      tagline: 'Surround Sound, Equalizer & Multi-Room Audio',
      desc: 'Fine-tune master decibel levels, mute commercials with one touch, switch between Bluetooth, Optical, and AUX modes, and activate surround sound equalization presets instantly.',
      image: '/media/voice_integration.jpg',
      icon: Volume2,
      badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
      highlights: [
        'Master volume slider and one-touch mute',
        'Surround modes: Movie, Music, Dialogue, Night',
        'Source selection: Bluetooth, Optical, AUX, HDMI eARC',
        'Synchronized multi-room ambient sound routines'
      ]
    }
  ];

  const currentAppliance = appliances.find(a => a.id === activeAppliance) || appliances[0];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Only That One Image (Full-Width Edge-to-Edge Clean Architecture) ── */}
      <div className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24 border-b border-gray-100">
        <div className="relative w-full max-w-[1920px] mx-auto">
          <img 
            src="/media/universal_ir_blaster_hero.jpg" 
            alt="Universal IR Blaster - Control Your IR Devices, Smartly"
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block shadow-2xl"
          />
        </div>
      </div>

      {/* ── Slide 2: Interactive Appliance Ecosystem with Dedicated 4K Photography ── */}
      <div id="appliances" className="w-full bg-[#F8F9FA] py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Multi-Appliance Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              One Device to Control <span className="text-brand-red">Every Appliance</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Click any appliance below to see high-resolution photography, dedicated features, supported Indian brands, and an interactive remote control simulator.
            </p>
          </div>

          {/* 5 Appliance Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12">
            {appliances.map((app) => {
              const Icon = app.icon;
              const isActive = activeAppliance === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveAppliance(app.id as any)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col items-start justify-between cursor-pointer ${
                    isActive 
                      ? 'bg-white border-brand-red shadow-lg shadow-brand-red/10 ring-2 ring-brand-red/20 -translate-y-1' 
                      : 'bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 shadow-xs'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isActive ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                      isActive ? 'text-brand-red' : 'text-slate-900'
                    }`}>
                      {app.name}
                    </h3>
                    <span className="text-[11px] text-gray-500 line-clamp-1 block mt-0.5">
                      {app.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Appliance Showcase 2-Tone Card: Left 4K Photo & Features + Right Live Interactive Remote */}
          <div className="bg-white rounded-[28px] sm:rounded-[36px] overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left 7 Columns: 4K Appliance Photo & Features */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* 4K Appliance Image Banner */}
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8 shadow-md">
                  <img 
                    src={currentAppliance.image} 
                    alt={currentAppliance.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 block">Active Device</span>
                      <h4 className="text-xl sm:text-2xl font-black">{currentAppliance.name} Control</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium border border-white/20">
                      360° IR Linked
                    </span>
                  </div>
                </div>

                {/* Brands Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gray-100 text-slate-800">
                  <span className="text-brand-red">Tested Brands:</span>
                  <span className="text-gray-600 font-normal">{currentAppliance.brand}</span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentAppliance.desc}
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                  {currentAppliance.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100/80">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-slate-700 font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                <a
                  href="#slide-4"
                  className="px-6 py-3 bg-brand-red text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-red-700 transition-all shadow-md shadow-brand-red/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#coverage-360"
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-slate-800 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Explore 360� Coverage
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Real-Time Remote Simulator */}
            <div className="lg:col-span-5 bg-[#0B0F19] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 relative overflow-hidden">
              
              {/* Cyan Glow Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header with Live Indicator */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00E5FF]" />
                    <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 font-bold">
                      IR Blaster Live Remote
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono">
                    38KHz Active
                  </span>
                </div>

                {/* Device-Specific Simulator Controls */}
                {activeAppliance === 'ac' && (
                  <div className="space-y-6">
                    <div className="text-center py-5 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Target Climate</span>
                      <div className="text-5xl sm:text-6xl font-black font-display text-white">
                        {acTemp}<span className="text-cyan-400 text-3xl font-light">°C</span>
                      </div>
                      <span className="text-xs text-cyan-300 font-mono mt-2 inline-block">
                        Mode: {acMode} • Fan: Turbo Speed
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={() => setAcTemp(t => Math.max(16, t - 1))}
                        className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xl flex items-center justify-center transition-all cursor-pointer"
                        title="Decrease Temperature"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setAcPower(!acPower)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-lg ${
                          acPower ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/30' : 'bg-red-500/20 text-red-400'
                        }`}
                        title="Toggle AC Power"
                      >
                        <Power className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={() => setAcTemp(t => Math.min(30, t + 1))}
                        className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xl flex items-center justify-center transition-all cursor-pointer"
                        title="Increase Temperature"
                      >
                        +
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {(['Cool', 'Auto', 'Dry', 'Fan'] as const).map(mode => (
                        <button
                          key={mode}
                          onClick={() => setAcMode(mode)}
                          className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            acMode === mode ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeAppliance === 'tv' && (
                  <div className="space-y-6">
                    <div className="text-center py-5 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-around">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Current Channel</span>
                        <span className="text-3xl font-black text-cyan-400">CH {tvChannel}</span>
                      </div>
                      <div className="w-[1px] h-10 bg-white/10" />
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Volume Level</span>
                        <span className="text-3xl font-black text-white">{tvVolume}%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col items-center gap-2">
                        <span className="text-xs text-gray-400">Channel</span>
                        <button 
                          onClick={() => setTvChannel(c => c + 1)}
                          className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          ▲ CH +
                        </button>
                        <button 
                          onClick={() => setTvChannel(c => Math.max(1, c - 1))}
                          className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          ▼ CH -
                        </button>
                      </div>

                      <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col items-center gap-2">
                        <span className="text-xs text-gray-400">Volume</span>
                        <button 
                          onClick={() => setTvVolume(v => Math.min(100, v + 2))}
                          className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          ▲ VOL +
                        </button>
                        <button 
                          onClick={() => setTvVolume(v => Math.max(0, v - 2))}
                          className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          ▼ VOL -
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <button 
                        onClick={() => setTvPower(!tvPower)}
                        className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                          tvPower ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-white/10 text-gray-400'
                        }`}
                      >
                        <Power className="w-4 h-4" />
                        <span>Power</span>
                      </button>
                      <button 
                        onClick={() => setTvVolume(0)}
                        className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-gray-200 cursor-pointer"
                      >
                        Mute
                      </button>
                    </div>
                  </div>
                )}

                {activeAppliance === 'stb' && (
                  <div className="space-y-4">
                    <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest block">DTH Receiver Active</span>
                      <span className="text-xl font-bold text-cyan-400">Tata Play HD • Live TV</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'Guide', 0, 'Back'].map((btn, i) => (
                        <button
                          key={i}
                          className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white font-semibold text-xs active:scale-95 transition-all cursor-pointer"
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeAppliance === 'projector' && (
                  <div className="space-y-5">
                    <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Home Cinema Projector</span>
                      <span className="text-2xl font-bold text-purple-400">16:9 Cinema Mode</span>
                      <span className="text-xs text-gray-400 block mt-1">Laser Lamp: Eco 100%</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold cursor-pointer">
                        Source: HDMI 1
                      </button>
                      <button className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold cursor-pointer">
                        Source: HDMI 2
                      </button>
                      <button className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold cursor-pointer">
                        Format 16:9
                      </button>
                      <button className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold cursor-pointer">
                        Format 4:3
                      </button>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-brand-red text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-red/20">
                      <Sparkles className="w-4 h-4" />
                      <span>Activate Full Cinema Scene</span>
                    </button>
                  </div>
                )}

                {activeAppliance === 'audio' && (
                  <div className="space-y-6">
                    <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Dolby Atmos Surround Master</span>
                      <div className="text-4xl font-black text-rose-400">{audioVolume} dB</div>
                      <span className="text-xs text-gray-300 font-mono mt-1 inline-block">Preset: {audioMode}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-gray-400" />
                      <input 
                        type="range"
                        min="0"
                        max="100"
                        value={audioVolume}
                        onChange={(e) => setAudioVolume(Number(e.target.value))}
                        className="w-full accent-rose-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {(['Movie', 'Music', 'Voice', 'Night'] as const).map(m => (
                        <button
                          key={m}
                          onClick={() => setAudioMode(m)}
                          className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            audioMode === m ? 'bg-rose-500 text-white font-bold' : 'bg-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Footer Note */}
              <div className="mt-8 pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] text-gray-400 flex items-center justify-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Real-time Wi-Fi &amp; Alexa Voice Synchronization</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── Slide 3: 360° Omnidirectional Coverage Architectural Showcase ── */}
      <div className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 6 Columns: 4K 360° Living Room Coverage Photo */}
            <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="/media/ir_blaster_360_coverage.jpg" 
                alt="360 Degree Smart IR Coverage in Living Room"
                className="w-full h-auto object-cover object-center hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/60 text-cyan-300 text-xs font-mono font-semibold mb-2 backdrop-blur-md">
                  <span>SPHERICAL EMISSION MATRIX</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">12 Meters Full Room Coverage</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Infrared signals reflect off ceilings and walls, ensuring devices respond even behind cabinet doors or furniture.
                </p>
              </div>
            </div>

            {/* Right 6 Columns: 360° Benefits & Hardware Highlights */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
                <Radio className="w-3.5 h-3.5 text-brand-red" />
                <span>Zero Aiming Required</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                Complete <span className="text-brand-red">360° Omnidirectional</span> Infrared Freedom
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Conventional remotes require direct line-of-sight aiming. The Neurolinx Universal IR Blaster features an array of 7 high-power infrared transmitters arranged in a spherical dome, bouncing carrier waves across ceilings and walls for reliable trigger response.
              </p>

              <div className="space-y-4 w-full mb-8">
                {[
                  {
                    title: "Universal 38 KHz Multi-Carrier Frequency",
                    desc: "Compatible with over 99.4% of all consumer electronics sold across India and worldwide."
                  },
                  {
                    title: "High-Gain Wide-Angle Transmitters",
                    desc: "Reaches up to 12 meters (39 feet) unobstructed with instantaneous signal delivery under 200 milliseconds."
                  },
                  {
                    title: "Smart Cloud Database & DIY Learning",
                    desc: "8,000+ preloaded appliance remote profiles. Custom DIY learning allows cloning any rare or vintage remote."
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

              <a
                href="#slide-4"
                className="px-7 py-3.5 rounded-xl bg-black hover:bg-brand-red text-white font-bold text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Order Universal IR Blaster</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

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
                        automationFor: 'Universal IR Blaster Setup',
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
                        <option>Universal IR Blaster Setup</option>
                        <option>Complete Home Theatre Integration</option>
                        <option>Full Apartment Smart Automation</option>
                        <option>Villa / Independent House</option>
                        <option>Office / Commercial Space</option>
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
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Appliances to Control</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Air Conditioner (AC)',
                        'Smart TV & Streaming Box',
                        'Set-Top Box (DTH)',
                        'Home Theatre & Audio System',
                        'Cinema Projector',
                        'Lighting & Scene Control'
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

export default UniversalIrBlaster;
