import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Wifi, 
  Smartphone, 
  Mic, 
  Sun, 
  Moon, 
  Tv, 
  Droplets, 
  Sliders, 
  Layers, 
  Home, 
  Building2, 
  Hotel, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Award, 
  Clock, 
  Lock, 
  Flame,
  Sparkles,
  Gauge,
  Thermometer,
  Radio,
  Activity
} from 'lucide-react';

export function HomeAutomation() {
  // Switch toggle: Retrofit vs Gang Toughened Glass Touch Switches
  const [switchType, setSwitchType] = useState<'retrofit' | 'gang'>('retrofit');

  // Switch gang filter
  const [activeGangTab, setActiveGangTab] = useState<'all' | 'compact' | 'standard' | 'master'>('all');
  
  // Space tab
  const [activeSpaceTab, setActiveSpaceTab] = useState<'apartments' | 'villas' | 'offices' | 'hotels'>('apartments');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Estimator State
  const [homeType, setHomeType] = useState<'2bhk' | '3bhk' | '4bhk' | 'villa'>('3bhk');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'switches', 'ir', 'meters', 'water', 'temperature', 'curtains'
  ]);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) ? prev.filter(f => f !== featureId) : [...prev, featureId]
    );
  };

  // 6 Core Product Categories from Official Specification
  const coreProducts = [
    {
      id: "smart-switches",
      number: "01",
      title: "Smart Switches",
      tagline: "Feather-Touch Glass & Concealed Modules",
      desc: "Available as ultra-compact retrofit modules that fit behind standard Indian switchboards without rewiring, or as ultra-luxury toughened glass feather-touch panels (1, 2, 4, 8, 10, 16 gang).",
      img: "/media/touch_board_premium.jpg",
      badge: "Core Hardware",
      features: [
        "100% Retrofit: Zero wall damage or rewiring",
        "Available in 1, 2, 4, 8, 10, 16 Gang Touch Panels",
        "Dual Control: Retains normal physical switch operations",
        "Works 100% offline via local home mesh network"
      ]
    },
    {
      id: "ir-blaster",
      number: "02",
      title: "Universal IR Blaster",
      tagline: "360° Smart Infrared Controller",
      desc: "Consolidate 10+ remote controls into your smartphone and voice. Control all your Air Conditioners, Televisions, Set-Top Boxes, and Home Theatres with omnidirectional 360° infrared coverage.",
      img: "/media/ir_remotes.jpg?v=2",
      badge: "Universal Remote",
      features: [
        "360° high-power omnidirectional infrared emission",
        "Voice commands via Amazon Alexa & Google Assistant"
      ]
    },
    {
      id: "energy-meters",
      number: "03",
      title: "1-ϕ & 3-ϕ Smart Energy Meters",
      tagline: "Single & Three-Phase Monitoring",
      desc: "Industrial-grade precision smart power meters for residential villas, commercial panels, and apartments. Monitor real-time voltage, current, power factor, and cumulative kWh consumption.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80&auto=format&fit=crop",
      badge: "Power Intelligence",
      features: [
        "Single-Phase (1-ϕ) and Three-Phase (3-ϕ) models",
        "Real-time voltage, current (Amps), and active power (kW)",
        "Overload, low power factor, and voltage spike alerts",
        "Exportable daily/monthly consumption analytics & bill predictor"
      ]
    },
    {
      id: "water-control",
      number: "04",
      title: "Smart Water Control System",
      tagline: "Tank Level & Automatic Pump Controller",
      desc: "Fully automated overhead tank and sump water management. Features ultrasonic non-contact water level sensing, dry-run pump protection, and automatic high/low level motor triggering.",
      img: "/media/smart_water_tank.jpg",
      badge: "Automated Utility",
      features: [
        "Ultrasonic non-contact overhead & underground sump sensing",
        "Auto-switch pump ON at low level, OFF at full capacity",
        "Built-in dry run protection prevents motor coil burnout",
        "Zero water overflow with real-time tank level % on mobile app"
      ]
    },
    {
      id: "temp-monitor",
      number: "05",
      title: "Temperature Monitor & Alert Systems",
      tagline: "Environmental Sensors & Trigger Engine",
      desc: "High-precision ambient climate sensors monitoring room temperature and relative humidity. Automatically trigger AC cooling, dehumidifiers, or send instant heat-spike safety notifications.",
      img: "/media/climate_energy.jpg",
      badge: "Climate & Safety",
      features: [
        "Precision Swiss temperature and relative humidity sensors",
        "Automated rules: Turn AC on when room exceeds set temperature",
        "Real-time safety alerts for sudden heat spikes or fire risk",
        "Server room & wine cellar continuous temperature logging"
      ]
    },
    {
      id: "smart-curtains",
      number: "06",
      title: "Motorized Smart Curtains",
      tagline: "Automated Sunlight & Privacy Control",
      desc: "Ultra-quiet motorized curtain rails and roller blind controllers. Automatically harvest natural daylight by opening at sunrise and closing at dusk, or control slider percentages from anywhere.",
      img: "/media/smart_curtains.jpg",
      badge: "Comfort Living",
      features: [
        "Whisper-quiet dual motor drives (<25dB operation)",
        "Circadian rhythm schedules linked with local sunrise/sunset",
        "Manual gentle pull trigger activates motor automatically",
        "Percentage slider control (e.g., 'Open Curtains 40%')"
      ]
    }
  ];

  const switchModules = [
    {
      gang: 1,
      category: 'compact',
      label: "Single Switch Modular",
      type: "Retrofit & Glass Touch",
      power: "Single 10A / 16A Channel",
      desc: "Single-channel smart switch node. Perfect for isolated geysers, balcony lighting, or heavy appliance control.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
      specs: ["10A / 16A Heavy Relay", "1-Module Backbox Fit", "Offline Local Control", "Voice Ready"]
    },
    {
      gang: 2,
      category: 'compact',
      label: "Double Switch Modular",
      type: "Retrofit & Glass Touch",
      power: "Dual Channel (2 x 650W)",
      desc: "Dual-channel smart controller. Control two independent light circuits or a split living room chandelier.",
      img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&auto=format&fit=crop",
      specs: ["2 Independent Relays", "Surge Protected", "2-Way Switch Compatible", "Wi-Fi 2.4GHz Direct"]
    },
    {
      gang: 4,
      category: 'standard',
      label: "Four Switch Modular",
      type: "Retrofit & Glass Touch",
      power: "4 Light Channels or 3 Light + 1 Fan",
      desc: "Our flagship module. Upgrades standard 4-gang bedroom boards with hum-free 5-step electronic fan dimming.",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop",
      specs: ["Built-in Fan Dimmer", "4 Relays", "Retains Physical Switches", "Local Mesh Protocol"]
    },
    {
      gang: 8,
      category: 'standard',
      label: "Eight Switch Modular",
      type: "Retrofit & Glass Touch",
      power: "8 Full Channels (Multi-Zone)",
      desc: "High-density multi-circuit switchboard for open living rooms, conference halls, and master suites.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop",
      specs: ["8 x 650W Outputs", "Scene Trigger Compatible", "Fits 8-Module Plates", "Instant 20ms Response"]
    },
    {
      gang: 10,
      category: 'master',
      label: "Ten Switch Modular",
      type: "Retrofit & Glass Touch",
      power: "10 Channels + Heavy Power Node",
      desc: "Master suite controller managing downlights, cove lights, wall sconces, fan, and an integrated heavy AC relay.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
      specs: ["10 Custom Channels", "1 x 25A Heavy Load Relay", "Multi-User Permissions", "Energy Diagnostics"]
    },
    {
      gang: 16,
      category: 'master',
      label: "Sixteen Switch Modular",
      type: "Retrofit & Glass Touch",
      power: "Full Floor / Villa Distribution Unit",
      desc: "Heavy-duty commercial & villa central distribution module. Consolidates entire floor lighting into one intelligent panel.",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80&auto=format&fit=crop",
      specs: ["16 Heavy-Duty Relays", "DIN-Rail / Box Mount", "Dual Microcontroller Safety", "Enterprise Grade Security"]
    }
  ];

  const filteredModules = switchModules.filter(m => {
    if (activeGangTab === 'all') return true;
    return m.category === activeGangTab;
  });

  const faqs = [
    {
      q: "Do I need to break walls, change existing wiring, or repaint?",
      a: "No! Neurolinx smart modules are 100% retrofit. They are engineered specifically to slip neatly behind your existing switch plates inside standard Indian electrical backboxes. The entire installation takes just 15 minutes per board with zero damage."
    },
    {
      q: "Can my family or elderly parents still use the normal physical switches?",
      a: "Absolutely. Neurolinx operates in parallel with your physical switches. If someone flips the physical wall switch, the light turns on or off instantly. When you use the app or voice, the physical switch status updates automatically."
    },
    {
      q: "Will my automation work if the internet or Wi-Fi goes down?",
      a: "Yes! All Neurolinx hardware communicates locally across your home network. You can control your switches via touch panels and local Wi-Fi without needing an active internet connection. Only remote control outside home requires internet."
    },
    {
      q: "How does the Smart Water Control System prevent dry run?",
      a: "Our system continuously reads water levels at both the underground sump and overhead tank. If the sump water drops below the safety threshold, the controller automatically locks out the pump, preventing motor burnout, and notifies you immediately on your phone."
    },
    {
      q: "What is the difference between 1-ϕ and 3-ϕ Smart Energy Meters?",
      a: "The 1-Phase (1-ϕ) meter is designed for standard apartments and individual electrical circuits, while the 3-Phase (3-ϕ) meter is built for luxury villas, commercial offices, and industrial setups with three-phase power supplies to measure voltage balance, current per phase, and total power."
    },
    {
      q: "What warranty and service support do you offer?",
      a: "We back every Neurolinx smart automation product with a 5-Year Replacement Warranty and comprehensive local engineer support across major cities."
    }
  ];

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
            <span className="text-white font-semibold">100% Made In India</span>
            <span className="text-slate-500">•</span>
            <span>5-Year Replacement Warranty</span>
            <span className="text-slate-500">•</span>
            <span>Zero Wall Chipping Retrofit</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-400">
            <a href="tel:+917013486961" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-red" />
              <span>Free Consultation: +91 7013486961 / +91 8074067851</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero Section (SmartNode Style) ── */}
      <div className="relative w-full overflow-hidden bg-[#0B0F19] text-white pt-2 pb-16 md:pt-3 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Smart Home Automation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 text-red-300 font-semibold text-xs tracking-wider uppercase mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                Comprehensive Smart Home Ecosystem
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6 leading-[1.12]">
                Smart Home Automation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-orange-400">
                  Engineered for Luxury & Precision.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
                Upgrade any home into an intelligent living space. Featuring <strong className="text-white font-semibold">Retrofit & Gang Switches</strong>, <strong className="text-white font-semibold">Universal IR Blaster</strong>, <strong className="text-white font-semibold">1-ϕ & 3-ϕ Energy Meters</strong>, <strong className="text-white font-semibold">Smart Water Control</strong>, <strong className="text-white font-semibold">Temperature Alerts</strong>, and <strong className="text-white font-semibold">Motorized Curtains</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a 
                  href="#products-catalog"
                  className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Explore 6 Product Lines</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#cost-estimator"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Gauge className="w-4 h-4 text-brand-red" />
                  <span>Get Custom Quote</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span>5 Years</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Replacement Warranty</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Clock className="w-5 h-5 shrink-0" />
                    <span>15 Mins</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Retrofit Installation</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Wifi className="w-5 h-5 shrink-0" />
                    <span>Offline</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Works Without Internet</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Award className="w-5 h-5 shrink-0" />
                    <span>100%</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Made in India Tech</span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Card / Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse"></div>
                    <span className="text-xs tracking-wider uppercase font-semibold text-gray-300">Neurolinx Master Hub</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 font-medium border border-green-500/30">
                    All Nodes Online
                  </span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-52 w-full group">
                  <img 
                    src="/media/touch_board_premium.jpg" 
                    alt="Touch Switches & Mobile App" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">Smart Switchboards & IR Blaster</span>
                    <span className="text-brand-red font-bold">1 to 16 Channels</span>
                  </div>
                </div>

                {/* Status Nodes Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">Water Tank</div>
                        <div className="text-[10px] text-gray-400">85% Full • Pump OFF</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">3-ϕ Meter</div>
                        <div className="text-[10px] text-gray-400">238V • Normal Load</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">Temp Sensor</div>
                        <div className="text-[10px] text-gray-400">24.5°C • AC Optimal</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4 text-indigo-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">Smart Curtains</div>
                        <div className="text-[10px] text-gray-400">Auto Close @ Sunset</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-center text-gray-400 pt-1">
                  Alexa • Google Assistant • Apple Siri • Offline Mesh
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 6 Core Product Lines Catalog (Directly from Customer Notes) ── */}
      <div id="products-catalog" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
            Core Product Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Engineered For Comprehensive Home Automation.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Every product is manufactured with aerospace-grade durability, Indian voltage surge protection, and effortless retrofit compatibility.
          </p>
        </div>

        {/* 6 Core Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreProducts.map((prod) => (
            <div 
              key={prod.id} 
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
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
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Detailed Smart Switches: Retrofit Modules vs Gang Switches (1, 2, 4, 8, 10, 16) ── */}
      <div className="w-full bg-gray-50 py-24 px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-100 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
              Product Deep-Dive
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Smart Switches: Retrofit & Gang Touch Panels.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Choose between concealed retrofit nodes that stay hidden behind your current switchboard, or replace plates with our toughened glass feather-touch switches.
            </p>

            {/* Switch Architecture Selector */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setSwitchType('retrofit')}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  switchType === 'retrofit'
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Concealed Retrofit Modules (Behind Switchboard)</span>
              </button>

              <button
                onClick={() => setSwitchType('gang')}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                  switchType === 'gang'
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Feather-Touch Glass Switchboards (1 to 16 Gang)</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: 'all', label: 'All (1, 2, 4, 8, 10, 16 Gang)' },
                { id: 'compact', label: 'Compact (1 & 2 Gang)' },
                { id: 'standard', label: 'Standard (4 & 8 Gang)' },
                { id: 'master', label: 'Master Units (10 & 16 Gang)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGangTab(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeGangTab === tab.id
                      ? 'bg-[#0F172A] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Switch Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((mod, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-brand-red/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={mod.img}
                    alt={mod.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg leading-none">{mod.gang}</span>
                    <span className="text-[10px] text-gray-300 uppercase font-semibold mt-0.5">Gang</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-wider uppercase shadow">
                    {switchType === 'retrofit' ? 'Concealed Node' : 'Glass Touch'}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-7">
                  <div className="text-xs font-bold text-gray-400 mb-1">
                    {mod.power}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-red transition-colors">
                    {mod.label}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {mod.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
                    {mod.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span className="truncate">{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Applications / Spaces Showcase ── */}
      <div className="w-full bg-white py-24 px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
              Applications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Automation Tailored to Every Space.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Whether you are automating an urban apartment, a luxury bungalow, or an enterprise workspace, we deliver turnkey solutions.
            </p>

            {/* Space Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {[
                { id: 'apartments', label: 'Apartments & Flats', icon: Home },
                { id: 'villas', label: 'Luxury Villas & Bungalows', icon: Star },
                { id: 'offices', label: 'Commercial Offices', icon: Building2 },
                { id: 'hotels', label: 'Hotels & Hospitality', icon: Hotel }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSpaceTab(tab.id as any)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                      activeSpaceTab === tab.id
                        ? 'bg-[#0F172A] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-brand-red" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Space Content */}
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
            {activeSpaceTab === 'apartments' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Apartment Solution</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Smart Living for 2 BHK, 3 BHK & Penthouses</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Retrofit switches, IR blaster for TV & AC, smart water tank controller, and 1-ϕ energy metering for optimal power efficiency.
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> 1-day non-invasive installation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> 1-ϕ Energy Meter tracks high-power geyser & AC loads</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Master "All Off" button right by the front door</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop" alt="Smart Apartment" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeSpaceTab === 'villas' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Villa & Bungalow Solution</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Multi-Floor Centralized Villa Control</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    3-Phase energy meter panel integration, 16-gang central hubs, motorized curtains, and automated sump/borewell water pump management.
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> 3-ϕ power meter monitoring per floor</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Dual ultrasonic overhead and sump pump automation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Perimeter facade lighting and motorized curtain sync</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop" alt="Smart Villa" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeSpaceTab === 'offices' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Enterprise Solution</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Offices, Boardrooms & Co-Working Spaces</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Cut office electricity bills by up to 35%. IR Blasters automate conference projectors and ACs, with 3-Phase meters identifying peak power drains.
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Scheduled business-hours power cut-offs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Universal IR blaster triggers boardroom presentation mode</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Server room temperature monitor with emergency alert engine</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop" alt="Smart Office" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeSpaceTab === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Hospitality Solution</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Boutique Hotels, Resorts & Airbnbs</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Deliver a 5-star digital guest experience. Welcoming light scenes and motorized curtains upon card entry, with bedside feather-touch master controls.
                  </p>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Welcoming light scenes and motorized curtain opening</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Bedside master switchboards with Do-Not-Disturb indicator</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Instant energy shut-off when guest leaves room</li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop" alt="Smart Hotel" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── Interactive Automation Cost Estimator & Quote Form ── */}
      <div id="cost-estimator" className="w-full bg-[#0F172A] text-white py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-red/20 text-red-300 font-bold text-xs uppercase tracking-widest border border-brand-red/40">
              Interactive Planner
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Build Your Custom Automation Scope.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Select your property type and the 6 core Neurolinx smart modules to receive a personalized bill of materials.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            
            {/* Step 1: Property Type */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: '2bhk', label: '2 BHK Apartment', rooms: 'Living + 2 Rooms' },
                  { id: '3bhk', label: '3 BHK Apartment', rooms: 'Living + 3 Rooms' },
                  { id: '4bhk', label: '4 BHK Apartment', rooms: 'Living + 4 Rooms' },
                  { id: 'villa', label: 'Luxury Villa / Duplex', rooms: 'Multi-Floor' }
                ].map(type => (
                  <button
                    key={type.id}
                    onClick={() => setHomeType(type.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      homeType === type.id
                        ? 'border-brand-red bg-brand-red/20 text-white shadow-lg'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30'
                    }`}
                  >
                    <div className="font-bold text-sm">{type.label}</div>
                    <div className="text-[11px] text-gray-400 mt-1">{type.rooms}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features from Note */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                2. Choose Products To Include
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'switches', label: 'Smart Switches (Retrofit / Gang)', icon: Sliders },
                  { id: 'ir', label: 'Universal IR Blaster', icon: Radio },
                  { id: 'meters', label: '1-ϕ / 3-ϕ Smart Energy Meters', icon: Gauge },
                  { id: 'water', label: 'Smart Water Control System', icon: Droplets },
                  { id: 'temperature', label: 'Temperature Monitor & Alerts', icon: Thermometer },
                  { id: 'curtains', label: 'Motorized Smart Curtains', icon: Moon }
                ].map(feat => {
                  const Icon = feat.icon;
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                        isChecked
                          ? 'border-brand-red bg-brand-red/20 text-white'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isChecked ? 'text-brand-red' : 'text-gray-500'}`} />
                      <span className="text-xs font-medium">{feat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="pt-8 border-t border-white/10">
              {quoteSubmitted ? (
                <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
                  <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-white mb-1">Proposal Request Received!</h4>
                  <p className="text-sm text-gray-300">
                    Our smart automation engineer will contact you shortly at <strong className="text-white">{contactPhone}</strong> with a detailed BOQ and live demo arrangement.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (contactPhone.trim()) {
                      setQuoteSubmitted(true);
                    }
                  }}
                  className="flex flex-col sm:flex-row items-center gap-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full sm:w-1/3 px-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number (+91)"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full sm:w-1/3 px-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-1/3 px-6 py-3.5 rounded-full bg-brand-red hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-brand-red/30 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Get Custom Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* ── Third-Party Ecosystem Banner ── */}
      <div className="py-14 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6">
            Compatible with Leading Global Ecosystems & Voice Assistants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Amazon Alexa
            </span>
            <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Google Assistant
            </span>
            <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span> Apple Siri Shortcuts
            </span>
            <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Smart Life / Tuya
            </span>
            <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Home Assistant
            </span>
          </div>
        </div>
      </div>

      {/* ── FAQ Section (SmartNode Style) ── */}
      <div className="py-24 px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Everything you need to know about switching your space to Neurolinx smart automation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl border border-gray-200 overflow-hidden bg-white transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-slate-900 hover:text-brand-red transition-colors text-base"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-red shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Call Strip */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+917013486961"
            className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call for Free Consultation</span>
          </a>
          <a
            href="mailto:support@neurolinx.in"
            className="w-full sm:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-bold transition-all flex items-center justify-center gap-2 border border-gray-300"
          >
            <FileText className="w-4 h-4 text-brand-red" />
            <span>Request Digital Brochure</span>
          </a>
        </div>
      </div>

    </div>
  );
}
