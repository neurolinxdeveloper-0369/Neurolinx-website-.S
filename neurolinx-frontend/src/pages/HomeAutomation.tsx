import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      img: "/media/retrofit_touch_panel_hero.jpg",
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
      img: "/media/universal_ir_blaster_hero.jpg",
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
      img: "/media/smart_energy_meter_single_phase.jpg",
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
      img: "/media/smart_water_control_hero.jpg?v=2",
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
      img: "/media/smart_curtains_hero.jpg?v=2",
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
      img: "/media/temperature_monitor_hero.jpg",
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

      {/* ── Hero Banner Section (Full-Width Edge-to-Edge Clean Architecture) ── */}
      <div className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24">
        <div className="relative w-full">
          <img 
            src="/media/smart_home_hero_iot.jpg?v=2" 
            alt="Smart Home Automation Engineered for Luxury & Precision"
            className="w-full h-auto block"
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
            
            {/* Left Featured Card (1st image - perfectly level with right 6 cards) */}
            <div className="w-full lg:w-[24.5%] xl:w-[24%] shrink-0 flex flex-col min-h-[480px] sm:min-h-[560px] lg:min-h-0">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden flex flex-col shadow-sm">
                <img 
                  src="/media/lighting_automation_card.png" 
                  alt="Lighting Automation (Back-End Devices)"
                  className="w-full h-full object-cover block rounded-[24px]"
                />
                {/* Clickable Hotspot for View More Button */}
                <Link 
                  to="/retrofit-touch-panels"
                  aria-label="View More Lighting Automation"
                  className="absolute left-[11%] top-[51.5%] w-[32%] h-[8%] rounded-xl cursor-pointer"
                />
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
