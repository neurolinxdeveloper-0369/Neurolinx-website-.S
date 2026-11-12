import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check,
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
  ChevronRight,
  Phone,
  Mail,
  MapPin,
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
  Activity,
  User
} from 'lucide-react';

export function HomeAutomation() {
  // Interactive Lighting Automation card state (true = ON warm theme, false = OFF dimmed dark theme)
  const [isLightingOn, setIsLightingOn] = useState(true);

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

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Whole Home Smart Automation',
    projectType: 'New Building',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    agreedMarketing: true,
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

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
      title: "Retrofit & Touch Panel",
      tagline: "Feather-Touch Glass & Concealed Modules",
      desc: "Available as ultra-compact retrofit modules that fit behind standard Indian switchboards without rewiring, or as ultra-luxury toughened glass feather-touch panels (1, 2, 4, 8, 10, 16 gang).",
      img: "/media/retrofit_touch_panel_clean.jpg",
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
      img: "/media/universal_ir_blaster_clean.jpg",
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
      img: "/media/smart_energy_meter_single_three_phase.jpg",
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
      img: "/media/smart_water_control_clean.jpg",
      badge: "Automated Utility",
      features: [
        "Ultrasonic non-contact overhead & underground sump sensing",
        "Auto-switch pump ON at low level, OFF at full capacity",
        "Built-in dry run protection prevents motor coil burnout",
        "Zero water overflow with real-time tank level % on mobile app"
      ]
    },
    {
      id: "smart-curtains",
      number: "05",
      title: "Motorized Smart Curtains",
      tagline: "Automated Sunlight & Privacy Control",
      desc: "Ultra-quiet motorized curtain rails and roller blind controllers. Automatically harvest natural daylight by opening at sunrise and closing at dusk, or control slider percentages from anywhere.",
      img: "/media/motorized_smart_curtains_showcase.jpg",
      badge: "Comfort Living",
      features: [
        "Whisper-quiet dual motor drives (<25dB operation)",
        "Circadian rhythm schedules linked with local sunrise/sunset",
        "Manual gentle pull trigger activates motor automatically",
        "Percentage slider control (e.g., 'Open Curtains 40%')"
      ]
    },
    {
      id: "temp-monitor",
      number: "06",
      title: "Temperature Monitor & Alert Systems",
      tagline: "Environmental Sensors & Trigger Engine",
      desc: "High-precision ambient climate sensors monitoring room temperature and relative humidity. Automatically trigger AC cooling, dehumidifiers, or send instant heat-spike safety notifications.",
      img: "/media/temperature_monitor_clean.jpg",
      badge: "Climate & Safety",
      features: [
        "Precision Swiss temperature and relative humidity sensors",
        "Automated rules: Turn AC on when room exceeds set temperature",
        "Real-time safety alerts for sudden heat spikes or fire risk",
        "Server room & wine cellar continuous temperature logging"
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

      {/* ── Slide 1: Smart Home Automation Banner (Luxury 4K Lineup - 2172 x 724) ── */}
      <div 
        id="hero"
        className="w-full bg-[#808080] relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 border-none flex items-center justify-center"
      >
        <div className="w-full max-w-[2172px] mx-auto flex items-center justify-center">
          <img 
            src="/media/smart_home_controllers_hero.png?v=crispText4k" 
            alt="Neurolinx Smart Home Automation Ecosystem - Products Range"
            width={2172}
            height={724}
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-[2172px] h-auto max-h-[724px] object-contain block mx-auto transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </div>

      {/* ── Product Showcase: 4-Column Balanced Grid (Matching SmartNode Reference) ── */}
      <div id="products-catalog" className="w-full bg-white py-10 md:py-14">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation matching reference */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-5 font-medium">
            <a href="/" className="flex items-center gap-1.5 hover:text-black transition-colors text-gray-600">
              <Home className="w-4 h-4 text-gray-700" />
              <span>Home</span>
            </a>
            <span className="text-gray-400 font-normal">&gt;</span>
            <span className="text-gray-900 font-semibold">Products</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-2.5">
            
            {/* Left Featured Card (Interactive ON / OFF Theme Card) */}
            <div className="w-full lg:w-[24.5%] xl:w-[24%] shrink-0 flex flex-col min-h-[500px] sm:min-h-[560px] lg:min-h-0">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden flex flex-col shadow-sm bg-[#0b0c10]">
                {/* Base Layer: OFF Theme (Dimmed / Dark Room) */}
                <img
                  src="/media/lighting_automation_bg_off.png"
                  alt="Lighting Automation (Back-End Devices) - Off Theme"
                  className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                />
                {/* Crossfade Layer: ON Theme (Illuminated Warm Spiral Lamp) */}
                <img
                  src="/media/lighting_automation_bg_on.png"
                  alt="Lighting Automation (Back-End Devices) - On Theme"
                  className={`absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none transition-opacity duration-500 ease-in-out ${
                    isLightingOn ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Foreground Interactive UI Overlay */}
                <div className="relative z-10 flex flex-col items-start px-7 sm:px-8 pt-8 sm:pt-9 lg:pt-10 pb-6">
                  <h3 className="text-[24px] sm:text-[26px] xl:text-[28px] font-bold text-white leading-[1.2] tracking-tight mb-4 select-none">
                    Lighting<br />
                    Automation<br />
                    (Back-End<br />
                    Devices)
                  </h3>

                  {/* Interactive Working ON / OFF Pill Toggle */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isLightingOn}
                    aria-label={isLightingOn ? 'Turn Lighting Automation Off' : 'Turn Lighting Automation On'}
                    onClick={() => setIsLightingOn(prev => !prev)}
                    className={`relative inline-flex items-center w-[72px] h-[32px] rounded-full border-[1.5px] transition-all duration-300 cursor-pointer hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 mb-4 select-none ${
                      isLightingOn
                        ? 'bg-white border-white text-black shadow-sm'
                        : 'bg-black/45 border-white/95 text-white hover:bg-black/65'
                    }`}
                  >
                    <span
                      className={`absolute left-3 text-[11px] font-bold tracking-wide transition-opacity duration-200 ${
                        isLightingOn ? 'opacity-100 text-black' : 'opacity-0'
                      }`}
                    >
                      ON
                    </span>
                    <span
                      className={`absolute right-2.5 text-[11px] font-semibold tracking-wide transition-opacity duration-200 ${
                        !isLightingOn ? 'opacity-100 text-white' : 'opacity-0'
                      }`}
                    >
                      OFF
                    </span>
                    <span
                      className={`w-[22px] h-[22px] rounded-full shadow-sm transform transition-all duration-300 ${
                        isLightingOn
                          ? 'translate-x-[43px] bg-black'
                          : 'translate-x-[4px] bg-white'
                      }`}
                    />
                  </button>

                  <p className="text-[11px] sm:text-xs font-medium text-white/90 leading-snug mb-5 max-w-[190px] select-none">
                    Lighting Automation (Back-end devices)
                  </p>

                  <Link
                    to="/retrofit-touch-panels"
                    aria-label="View More Lighting Automation"
                    className="inline-flex items-center justify-center bg-white hover:bg-neutral-100 active:scale-[0.98] text-slate-900 font-semibold text-xs sm:text-[13px] px-7 py-3 rounded-[10px] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 6 Cards (3 on top row, 3 on bottom row - exactly same level height) */}
            <div className="w-full lg:w-[75.5%] xl:w-[76%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2.5">
              {coreProducts.map((prod) => {
                const isSwitches = prod.id === 'smart-switches';
                const isIrBlaster = prod.id === 'ir-blaster';
                const isEnergyMeters = prod.id === 'energy-meters';
                const isWaterControl = prod.id === 'water-control';
                const isSmartCurtains = prod.id === 'smart-curtains';
                const isTempMonitor = prod.id === 'temp-monitor';
                const cardContent = (
                  <>
                    <div className="relative h-52 sm:h-60 lg:h-[268px] w-full p-2.5 sm:p-3 overflow-hidden">
                      <div className="w-full h-full overflow-hidden rounded-[18px]">
                        <img 
                          src={prod.img} 
                          alt={prod.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 pt-1 sm:pt-2 flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-1">
                        {prod.title}
                      </h3>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors shadow-sm">
                        <ChevronRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </>
                );

                return isSwitches ? (
                  <Link 
                    key={prod.id}
                    to="/retrofit-touch-panels"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </Link>
                ) : isIrBlaster ? (
                  <Link 
                    key={prod.id}
                    to="/universal-ir-blaster"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </Link>
                ) : isEnergyMeters ? (
                  <Link 
                    key={prod.id}
                    to="/smart-energy-meters"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </Link>
                ) : isWaterControl ? (
                  <Link 
                    key={prod.id}
                    to="/smart-water-control"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </Link>
                ) : isSmartCurtains ? (
                  <Link 
                    key={prod.id}
                    to="/motorized-smart-curtains"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </Link>
                ) : isTempMonitor ? (
                  <Link 
                    key={prod.id}
                    to="/temperature-monitor"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <a 
                    key={prod.id}
                    href="#faq"
                    className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                  >
                    {cardContent}
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* ── Slide 3: Universal IR Control (HVAC / Audio-Video Showcase matching reference) ── */}
      <div id="switch-details" className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] border border-gray-100 p-8 sm:p-12 lg:p-16 shadow-sm">
            
            {/* Top Category Heading: One Smart Control in company logo red with underline */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight inline-block">
                <span className="text-brand-red border-b-2 border-brand-red pb-1">
                  One Smart Control
                </span>
              </h2>
            </div>

            {/* Two-Column Content: Left Information + Right Product Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Information */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight">
                  Universal IR Control with Smart App &amp; Alexa Voice Integration
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  Transform your everyday appliances into a smarter, connected experience with Neurolinx Universal IR Control. Manage your Light, Fan, Security Camera, air conditioner, television, and other compatible IR devices effortlessly using your smartphone, voice commands through Alexa, or a traditional remote. Our infrared solutions seamlessly integrate into your smart home, enabling wireless control across multiple rooms and devices.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  Enjoy intelligent convenience, centralized control, and seamless comfort — all designed to make everyday living simpler.
                </p>
                <Link 
                  to="/universal-ir-blaster"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-black text-white text-sm font-semibold hover:bg-brand-red transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  View More
                </Link>
              </div>

              {/* Right Column: Product Card matching reference design */}
              <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
                <div className="w-full max-w-lg bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                  {/* Card Title */}
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">IRB</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">Universal IR &amp; Alexa Controller</span>
                  </div>

                  {/* Product Image */}
                  <div className="my-4 py-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/media/universal_ir_alexa_control.jpg" 
                      alt="Universal IR Control with Smart App & Alexa" 
                      className="w-full h-auto max-h-[380px] object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Button */}
                  <div className="pt-2">
                    <Link 
                      to="/universal-ir-blaster"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-black text-white text-xs sm:text-sm font-semibold hover:bg-brand-red transition-colors shadow-sm cursor-pointer"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Downside Option: Download Brochure */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-100 flex justify-center">
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
      </div>

      {/* ── Slide 4: Have Questions? Consultation & Contact Form ── */}
      <div id="slide-4" className="w-full bg-white pt-12 md:pt-16 pb-16 md:pb-20">
        <div id="faq" className="max-w-[1160px] xl:max-w-[1220px] 2xl:max-w-[1260px] w-full mx-auto px-4 sm:px-6">

          {/* Main Elevated Light + White Split Container */}
          <div className="relative rounded-[28px] md:rounded-[34px] overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.10)] border border-gray-200/80 bg-[#F7F8FA] flex flex-col lg:flex-row items-stretch">

            {/* Left Light Pearl Panel with Red & Silver Ribbon Waves */}
            <div className="w-full lg:w-[37%] xl:w-[36%] bg-gradient-to-br from-white via-[#F9FAFB] to-[#EEF0F4] relative overflow-hidden px-7 sm:px-9 lg:px-10 pt-9 sm:pt-11 pb-14 lg:pb-11 flex flex-col justify-start">
              {/* Flowing Silver & Crimson Ribbon Waves matching reference */}
              <svg
                aria-hidden="true"
                viewBox="0 0 420 560"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="haLightWaveSilver1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="55%" stopColor="#E5E7EB" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0.55" />
                  </linearGradient>
                  <linearGradient id="haLightWaveSilver2" x1="0%" y1="30%" x2="100%" y2="85%">
                    <stop offset="0%" stopColor="#F3F4F6" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#E5E7EB" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="haLightWaveRedTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF3347" />
                    <stop offset="55%" stopColor="#E0001B" />
                    <stop offset="100%" stopColor="#9E0012" />
                  </linearGradient>
                  <linearGradient id="haLightWaveRedBottom" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8F0010" />
                    <stop offset="50%" stopColor="#D90416" />
                    <stop offset="100%" stopColor="#FF2E43" />
                  </linearGradient>
                </defs>

                {/* Top diagonal soft grey wave */}
                <path
                  d="M210,-10 C255,65 325,115 430,140 L430,-10 Z"
                  fill="url(#haLightWaveSilver1)"
                />
                {/* Top-right crimson ribbon sweeping into form seam */}
                <path
                  d="M275,-10 C325,52 372,92 430,108 L430,22 C382,12 342,-2 315,-10 Z"
                  fill="url(#haLightWaveRedTop)"
                />
                <path
                  d="M235,-10 C295,62 355,110 430,132 L430,102 C365,80 318,40 270,-10 Z"
                  fill="#E0001B"
                  opacity="0.22"
                />

                {/* Mid-bottom flowing silver silk curves */}
                <path
                  d="M-20,335 C85,370 185,435 430,360 L430,570 L-20,570 Z"
                  fill="url(#haLightWaveSilver2)"
                />
                <path
                  d="M-20,435 C120,400 245,485 430,430 L430,570 L-20,570 Z"
                  fill="#FFFFFF"
                  opacity="0.72"
                />

                {/* Bottom sweeping crimson ribbon */}
                <path
                  d="M45,570 C155,515 280,455 430,450 L430,570 Z"
                  fill="url(#haLightWaveRedBottom)"
                />
                <path
                  d="M-20,535 C115,495 255,442 430,442 L430,462 C265,468 135,522 35,570 L-20,570 Z"
                  fill="#EF1D2B"
                  opacity="0.32"
                />
              </svg>

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 leading-[1.12] tracking-tight">
                  Have<br />
                  <span className="text-[#D90416]">Questions</span><span className="text-slate-950">?</span>
                </h2>

                <div className="w-14 h-1 rounded-full bg-[#D90416] mt-3 mb-5" />

                <p className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-9 tracking-tight">
                  “Let’s make a Smarter World together”
                </p>

                <div className="space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+917013486961"
                    className="flex items-center gap-3.5 text-slate-900 hover:text-[#D90416] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black text-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#D90416] transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold">+91 7013486961</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@neurolinx.in"
                    className="flex items-center gap-3.5 text-slate-900 hover:text-[#D90416] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black text-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#D90416] transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold">info@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-black text-white shadow-sm flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800 leading-relaxed">
                      NEUROLINX GLOBAL PRIVATE LIMITED,<br />
                      C12/A, Industrial Area, Kushaiguda,<br />
                      Hyderabad, Secunderabad,<br />
                      Telangana 500062
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right White Overlapping Form Panel */}
            <div className="w-full lg:w-[65%] xl:w-[66%] -mt-6 lg:mt-0 lg:-ml-5 relative z-10 rounded-[26px] md:rounded-[30px] bg-white shadow-[-10px_0_32px_rgba(15,23,42,0.08)] px-6 sm:px-8 lg:px-10 py-8 sm:py-10 flex-1 flex flex-col justify-center">
              {inquirySubmitted ? (
                <div className="bg-[#F8F9FB] rounded-2xl p-8 sm:p-12 text-center border border-gray-100">
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
                        automationFor: 'Whole Home Smart Automation',
                        projectType: 'New Building',
                        controlOptions: [],
                        contactNumber: '',
                        city: '',
                        agreedMarketing: true,
                        captchaInput: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D90416] to-[#B8000F] text-white text-xs font-semibold hover:brightness-110 transition-all cursor-pointer"
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
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        <User className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>Name <span className="text-brand-red">*</span></span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#F8F9FB] border border-gray-200 text-slate-800 text-sm placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>Email <span className="text-brand-red">*</span></span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#F8F9FB] border border-gray-200 text-slate-800 text-sm placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Automation For & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        <Layers className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>Automation For <span className="text-brand-red">*</span></span>
                      </label>
                      <select
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, automationFor: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 cursor-pointer transition-all"
                      >
                        <option>Whole Home Smart Automation</option>
                        <option>Apartment</option>
                        <option>Villa / Independent House</option>
                        <option>Office / Commercial Space</option>
                        <option>Hotel / Hospitality</option>
                        <option>Retrofit &amp; Touch Panel Setup</option>
                        <option>Universal IR Blaster Setup</option>
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        <Building2 className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>Project Type <span className="text-brand-red">*</span></span>
                      </label>
                      <select
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-gray-200 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 cursor-pointer transition-all"
                      >
                        <option>New Building</option>
                        <option>Existing / Renovation</option>
                        <option>Under Construction</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Appliances & Systems to Control Card */}
                  <div className="rounded-2xl bg-[#F4F6F9] border border-gray-200/80 p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-3.5">
                      <Tv className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>Systems &amp; Appliances to Control</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 md:gap-x-6">
                      {/* Left Column (3 items + subtle vertical divider on md+) */}
                      <div className="space-y-2.5 md:pr-6 md:border-r md:border-gray-200/90">
                        {[
                          'Lighting & Scene Control',
                          'Curtain & Appliances Control',
                          'Smart Energy Metering'
                        ].map((option) => {
                          const isChecked = inquiryForm.controlOptions.includes(option);
                          return (
                            <label
                              key={option}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none hover:text-slate-900 transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {
                                  const next = isChecked
                                    ? inquiryForm.controlOptions.filter(o => o !== option)
                                    : [...inquiryForm.controlOptions, option];
                                  setInquiryForm({ ...inquiryForm, controlOptions: next });
                                }}
                                className="w-4 h-4 rounded-[4px] border-gray-300 text-slate-900 accent-slate-900 cursor-pointer bg-white"
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Right Column (3 items) */}
                      <div className="space-y-2.5">
                        {[
                          'Safety & Security Control',
                          'Home Theatre & IR Control',
                          'Smart Water & Climate Control'
                        ].map((option) => {
                          const isChecked = inquiryForm.controlOptions.includes(option);
                          return (
                            <label
                              key={option}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none hover:text-slate-900 transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {
                                  const next = isChecked
                                    ? inquiryForm.controlOptions.filter(o => o !== option)
                                    : [...inquiryForm.controlOptions, option];
                                  setInquiryForm({ ...inquiryForm, controlOptions: next });
                                }}
                                className="w-4 h-4 rounded-[4px] border-gray-300 text-slate-900 accent-slate-900 cursor-pointer bg-white"
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Contact Number & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        <Phone className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>Contact Number</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your contact number"
                        value={inquiryForm.contactNumber}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, contactNumber: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#F8F9FB] border border-gray-200 text-slate-800 text-sm placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        <MapPin className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>City</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your city"
                        value={inquiryForm.city}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, city: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#F8F9FB] border border-gray-200 text-slate-800 text-sm placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 5: Consent Checkbox */}
                  <label className="flex items-start sm:items-center gap-2.5 text-[11px] sm:text-xs text-slate-600 leading-normal cursor-pointer select-none pt-0.5">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={inquiryForm.agreedMarketing}
                      onClick={() => setInquiryForm({ ...inquiryForm, agreedMarketing: !inquiryForm.agreedMarketing })}
                      className={`w-4 h-4 mt-0.5 sm:mt-0 rounded-[4px] flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                        inquiryForm.agreedMarketing
                          ? 'bg-slate-900 text-white border border-slate-900'
                          : 'bg-white border border-gray-300 text-transparent'
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </button>
                    <span>
                      By submitting this form, you agree that we may use your information for marketing purposes and to send you announcements.
                    </span>
                  </label>

                  {/* Row 6: Captcha Inline */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-1">
                    <ShieldCheck className="w-5 h-5 text-slate-900 shrink-0" />
                    <div className="px-4 py-2.5 rounded-xl bg-[#F4F6F9] border border-gray-200 font-serif tracking-[0.28em] text-base font-extrabold text-slate-900 select-none shrink-0">
                      FM4B
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Captcha"
                      value={inquiryForm.captchaInput}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, captchaInput: e.target.value })}
                      className="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-slate-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                    />
                  </div>

                  {/* Row 7: Red Gradient Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-xl bg-gradient-to-r from-[#D90416] to-[#B8000F] hover:from-[#E0001B] hover:to-[#9B000D] text-white font-bold text-sm sm:text-[15px] shadow-[0_6px_20px_rgba(224,0,27,0.32)] hover:shadow-[0_8px_24px_rgba(224,0,27,0.42)] transition-all cursor-pointer"
                    >
                      <span>Submit</span>
                      <ArrowRight className="w-4 h-4" />
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
