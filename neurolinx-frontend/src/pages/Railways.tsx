import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export function Railways() {
  // Category filter for Railway Products
  const [filterCategory, setFilterCategory] = useState<'all' | 'signaling' | 'lighting' | 'loco'>('all');

  const railwayProducts = [
    {
      id: "fog-pass",
      category: "signaling",
      number: "01",
      title: "Fog Pass Device (Version 2.0 & 3.0)",
      tagline: "RDSO-Compliant Driver Audio-Visual Navigation",
      desc: "Critical onboard safety device providing loco pilots with real-time audio and visual alerts for approaching signals, level crossing gates, and track landmarks during dense fog and low-visibility weather.",
      img: "/media/fogpass_cab_view.jpg",
      link: "/fog-pass"
    },
    {
      id: "signal-exchangers",
      category: "signaling",
      number: "02",
      title: "Signal Exchangers",
      tagline: "Fail-Safe Optical & Electronic Interlocking",
      desc: "Heavy-duty digital and relay signal exchangers engineered for railway trackside interlocking, track circuits, and station master control cabins. Ensures zero signal degradation across vast rail yards.",
      img: "/media/railway_signal_exchangers.jpg",
      link: "/signal-exchangers"
    },
    {
      id: "foot-lamps",
      category: "lighting",
      number: "03",
      title: "Foot Lamps",
      tagline: "Ruggedized Passenger Footstep Illumination",
      desc: "MIL-SPEC stainless-steel footstep lighting fixtures mounted at passenger coach entryways. Prevents boarding slips and withstands extreme ballast vibration, dust, and pressure washing.",
      img: "/media/railway_foot_lamps.jpg",
      link: "/foot-lamps"
    },
    {
      id: "indirect-lighting",
      category: "lighting",
      number: "04",
      title: "Indirect Lighting",
      tagline: "Glare-Free Ambient LED Cove Systems",
      desc: "Premium indirect architectural LED lighting designed for Vande Bharat, Tejas, and modern Rajdhani coaches. Delivers soft, uniform illumination without glare or visible hotspots.",
      img: "/media/railway_coach_lighting.jpg",
      link: "/indirect-coach-lighting"
    },
    {
      id: "loco-headlight",
      category: "loco",
      number: "05",
      title: "LED LOCO Head Light",
      tagline: "High-Intensity Twin-Beam Front Illuminator",
      desc: "Ruggedized locomotive front headlight providing a razor-sharp high-intensity beam exceeding 500 meters. Features twin sealed LED light engines with independent power drivers for fail-safe redundancy.",
      img: "/media/railway_loco_headlight.jpg",
      link: "/loco-headlight"
    },
    {
      id: "flasher-light",
      category: "loco",
      number: "06",
      title: "LED Flasher Light",
      tagline: "Amber Emergency Warning Beacon",
      desc: "Critical locomotive emergency warning system emitting a high-intensity flashing amber strobe visible in daylight, dense fog, and torrential rain to alert oncoming trains of emergency stops.",
      img: "/media/railway_flasher_light.jpg",
      link: "/flasher-light"
    },
    {
      id: "marker-light",
      category: "loco",
      number: "07",
      title: "LED Marker Light",
      tagline: "Red & White Identification Indicators",
      desc: "Dual-color (Red & White) identification marker lights mounted on the front and rear of locomotives and inspection coaches. Signals train position and travel direction to track personnel and station cabins.",
      img: "/media/railway_marker_light.jpg",
      link: "/marker-light"
    }
  ];

  const filteredProducts = railwayProducts.filter(p => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  // Contact & Consultation form state (matching Home Automation Slide 4)
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
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

  
  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Hero Banner (Only Railway Systems) ── */}
      <div 
        id="hero"
        style={{ minHeight: 'calc(100vh + 1.5cm)' }}
        className="relative w-full overflow-hidden text-white flex items-center min-h-[calc(100vh+1.5cm)] pt-24 pb-16"
      >
        {/* Real Indian Railways Rolling Stock Background - Reverted to Preferred Cinematic Hero */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/railways_hero_cinematic.jpg"
            alt="Modern Indian Railways electric locomotive & rolling stock on tracks"
            className="w-full h-full object-cover object-center opacity-100 brightness-110 contrast-105 filter"
          />
          {/* Gentle, balanced ambient tint without heavy black side shadows */}
          <div className="absolute inset-0 bg-black/15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        {/* Content Container: Only Railway Systems */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl flex flex-col items-start text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              <span className="text-white">Railway </span>
              <span className="text-brand-red drop-shadow-[0_0_30px_rgba(224,0,27,0.5)]">Systems</span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator to Slide 2 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#features"
            className="flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-all group"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70 group-hover:text-white">Explore Features</span>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-red transition-all shadow-sm">
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      {/* ── Slide 2: Smart Functional Features & 7 Railway Products (With Individual Separate Pages) ── */}
      <div id="features" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
            Smart Functional Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Complete Rolling Stock <span className="text-brand-red">&amp; Signaling Portfolio.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            All 7 product lines built strictly to Indian Railway standards, RDSO specifications, and ruggedized for extreme field longevity.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 7 Railway Products' },
              { id: 'signaling', label: 'Signaling & Fog Pass' },
              { id: 'lighting', label: 'Coach Lighting & Foot Lamps' },
              { id: 'loco', label: 'Locomotive Exterior Lights' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Product Cards Grid with Links to Individual Separate Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <Link key={prod.id} to={prod.link} className="block h-full group">
              <div className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer h-full">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-900">
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black text-white font-black text-xs flex items-center justify-center shadow-md border border-white/20">
                    {prod.number}
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between gap-4 flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{prod.tagline}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-all shadow-sm">
                    <ChevronRight className="w-5 h-5 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Slide 3: Project Overview (Matching User Reference Image) ── */}
      <section 
        id="railway-showcase" 
        style={{ maxWidth: 'calc(72rem - 1.5cm)', width: 'calc(100% - 1.5cm)' }}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-brand-red/20 bg-red-50 text-brand-red font-semibold text-xs uppercase tracking-wider">
            <span>Project Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 mb-4 sm:mb-5 leading-tight">
            Advanced Navigation for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
              FogPASS &amp; Railway Systems
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed">
            Integrated hardware and software solutions to navigate, monitor, and safeguard locomotive operations.
          </p>
        </div>

        {/* Detailed Overview Card matching exact reference design */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-100 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Our FogPASS and Railway Navigation Systems bring satellite-based positioning, route awareness, and timely landmark alerts together into a focused in-cab experience. We manufacture our FogPASS products using high-grade local materials, strengthening domestic supply chains and ensuring rapid deployment. We provide dedicated 24/7 technical services and field support to keep operations running smoothly without interruption. By streamlining direct in-house engineering and production, we offer dependable, RDSO-compliant railway safety solutions at highly competitive, low prices compared to prevailing market rates.
            </p>
          </div>
        </div>

        {/* 3 Key Option Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-12">
          {/* Box 1: Local Materials */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                100% Indigenous
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                Manufactured with Local Materials
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We manufacture FogPASS devices and auxiliary electronics using certified indigenous components and domestic metallurgy, ensuring rapid spare availability, rugged longevity, and complete self-reliance.
              </p>
            </div>
          </div>

          {/* Box 2: 24/7 Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E6FD9] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                Round-The-Clock
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                24/7 Support &amp; Field Services
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our dedicated railway engineering team provides continuous 24/7 technical hotline support, on-site loco shed commissioning, software calibration, and rapid field assistance across all zonal divisions.
              </p>
            </div>
          </div>

          {/* Box 3: Low Market Prices */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                Market Leading Value
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                Highly Competitive Pricing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By streamlining in-house design, software integration, and direct domestic manufacturing, we deliver top-tier RDSO-compliant railway systems at prices substantially lower than prevailing market rates.
              </p>
            </div>
          </div>
        </div>

        {/* Downside Option: Download Brochure - Opens uploaded 11-page FogPASS PDF in a new tab */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="/media/neurolinx_railway_systems_brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-black"
          >
            Download Brochure
          </a>
        </div>
      </section>

      {/* ── Slide 4: Have Questions? Consultation & Contact Form (Compact Attached Layout matching Home Automation) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container matching Home Automation */}
          <div id="rfq-form" className="rounded-[32px] md:rounded-[36px] border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
            
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
