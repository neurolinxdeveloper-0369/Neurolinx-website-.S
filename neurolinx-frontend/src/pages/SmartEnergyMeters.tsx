import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ChevronRight, 
  Sun, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  MapPin 
} from 'lucide-react';

export function SmartEnergyMeters() {
  // Active hardware showcase toggle: MCB panel CT clamp installation vs DIN-rail unit view
  const [activeDeviceView, setActiveDeviceView] = useState<'panel' | 'din'>('panel');

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: '1-Phase & 3-Phase Smart Energy Meters',
    projectType: 'Residential Villa / Apartment',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Full-Bleed 1-ϕ & 3-ϕ Smart Energy Meters 4K UHD Panoramic Hero Banner (3840 x 1280, matching 3:1 Retrofit & Touch Panel container) ── */}
      <div
        id="hero"
        className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24 border-none"
      >
        <div className="relative w-full max-w-[2172px] mx-auto">
          <img
            src="/media/smart_energy_meters_hero_4k.jpg?v=uhd4kCenteredTitle"
            alt="1-ϕ & 3-ϕ Smart Energy Meters - Intelligent Energy Monitoring - Neurolinx"
            width={3840}
            height={1280}
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block"
          />

          {/* Subtle Ambient Scrim for Clean Text Readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Centered Title Positioned Higher Above Both Energy Meters (~1 cm shifted left) */}
          <div className="absolute top-[13.5%] sm:top-[13%] left-0 right-0 -translate-y-1/2 -translate-x-4 sm:-translate-x-7 md:-translate-x-10 flex justify-center pointer-events-none z-10 px-4 text-center">
            <h1 className="whitespace-nowrap text-sm sm:text-2xl md:text-[34px] lg:text-[42px] xl:text-5xl font-bold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              <span className="text-white">1-ϕ &amp; 3-ϕ </span>
              <span className="relative inline-block pb-1 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                <span className="bg-gradient-to-r from-brand-red via-red-600 to-[#700000] bg-clip-text text-transparent inline-block">
                  Smart Energy Meters
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red via-red-600 to-[#700000] rounded-full" />
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Slide 2: Compact Hardware Overview & Simple Product Capabilities (Company Logo Colors) ── */}
      <div
        id="meter-models"
        className="w-full bg-[#F8F9FA] py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left Column: Compact Hardware Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm">

                {/* Top View Switcher */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-[11px] font-bold border border-brand-red/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                    <span>{activeDeviceView === 'panel' ? 'Panel & CT Clamps' : 'DIN-Rail Unit'}</span>
                  </span>

                  <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveDeviceView('panel')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'panel' ? 'bg-black text-white shadow-xs' : 'text-slate-700 hover:text-black'
                      }`}
                    >
                      Panel View
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDeviceView('din')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDeviceView === 'din' ? 'bg-black text-white shadow-xs' : 'text-slate-700 hover:text-black'
                      }`}
                    >
                      DIN View
                    </button>
                  </div>
                </div>

                {/* Hardware Studio Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-200">
                  {activeDeviceView === 'panel' ? (
                    <img
                      src="/media/smart_energy_meter_panel_ct.jpg?v=panelCtStudio"
                      alt="Neurolinx Smart Energy Meter with Split-Core L1 L2 L3 CT Clamps Installed in MCB Distribution Panel"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <img
                      src="/media/smart_energy_meter_single_phase.jpg"
                      alt="Neurolinx DIN-Rail Smart Energy Meter Digital LCD Unit"
                      className="max-h-full max-w-full object-contain p-2 transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                {/* Concise Summary Below Image */}
                <div className="mt-4 text-left">
                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight">
                    Neurolinx <span className="text-brand-red">1-ϕ &amp; 3-ϕ</span> <span className="text-black">Smart Meter</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Compact Wi-Fi &amp; RS485 clip-on energy monitor built for homes, villas, solar rooftops, and commercial DB panels.
                  </p>
                </div>

                {/* 3 Compact Spec Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Supply</span>
                    <span className="text-xs font-black text-black">90–250V AC</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">Accuracy</span>
                    <span className="text-xs font-black text-brand-red">Class 1.0</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">CT Rating</span>
                    <span className="text-xs font-black text-black">Up to 150A</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Simple Product Capabilities with Logo Colors */}
            <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-bold tracking-wider uppercase mb-3">
                <Zap className="w-3.5 h-3.5 text-brand-red" />
                <span>Smart Power Monitoring</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2.5 tracking-tight leading-tight">
                Track Live Power Usage &amp; Cut Electricity Bills
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl">
                Monitor live wattage, voltage, and solar power flow directly on your phone. Identify heavy-load appliances early and prevent wastage without cutting main supply wires.
              </p>

              {/* 4 Simple Product Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-5">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-black">Live 1-ϕ &amp; 3-ϕ Telemetry</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                      View live watts, volts, amps, and power factor from any room or circuit.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900/10 text-black flex items-center justify-center shrink-0">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-black">Solar Import &amp; Export</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                      Separately tracks utility grid power consumed and rooftop solar energy exported.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-black">Quick Clip-On Install</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                      Split-core CT clamps snap cleanly inside your MCB box in minutes.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-900/10 text-black flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-black">Surge &amp; Overload Alerts</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                      Instant alerts for high voltage spikes, phase imbalance, and bill limits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full">
                <a
                  href="#slide-4"
                  className="px-5 py-2.5 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-brand-red/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#slide-4"
                  className="px-5 py-2.5 bg-black hover:bg-slate-800 text-white rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Have Questions?</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Compact Downside Option: Download Brochure */}
          <div className="mt-8 pt-6 border-t border-gray-200/80 flex justify-center">
            <a
              href="/media/smart_home_automation_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-black"
            >
              Download Brochure
            </a>
          </div>

        </div>
      </div>

      {/* ── Slide 3: Have Questions? Consultation & Contact Form (Matching Official Layout) ── */}
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
                  <span className="text-brand-red">Questions</span><span className="text-black">?</span>
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
                  Neurolinx Energy Systems
                </span>
                <span className="text-xs text-gray-500">ISO 9001:2015 &amp; CE Certified</span>
              </div>

            </div>

            {/* Right Panel: Light Grey Background Consultation Form */}
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-10 lg:px-12 py-9 sm:py-12 lg:py-14">
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Get an Instant Energy Meter Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-8">
                Share your power monitoring specifications and our electrical solutions engineer will assist you within 24 hours.
              </p>

              {inquirySubmitted ? (
                <div className="p-8 rounded-2xl bg-white border border-emerald-500/30 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{inquiryForm.name}</span>. Our certified smart metering specialist will contact you shortly at <span className="font-semibold text-slate-900">{inquiryForm.contactNumber}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: '1-Phase & 3-Phase Smart Energy Meters',
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
                        placeholder="e.g. Rajesh Kumar" 
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
                        placeholder="rajesh@company.com" 
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Meter Configuration */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Energy Meter Type
                      </label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, automationFor: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      >
                        <option value="1-ϕ Single Phase Meter (60A Direct)">1-ϕ Single Phase Meter (60A Direct)</option>
                        <option value="3-ϕ Three Phase Meter (100A Direct)">3-ϕ Three Phase Meter (100A Direct)</option>
                        <option value="3-ϕ Three Phase CT Meter (External CT 5A)">3-ϕ Three Phase CT Meter (External CT 5A)</option>
                        <option value="Solar Rooftop Net-Metering Setup">Solar Rooftop Net-Metering Setup</option>
                        <option value="Commercial Multi-Tenant Submetering">Commercial Multi-Tenant Submetering</option>
                      </select>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Installation Type
                      </label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand-red transition-colors shadow-xs"
                      >
                        <option value="Residential Villa / Apartment">Residential Villa / Apartment</option>
                        <option value="Rooftop Solar Grid-Tie Plant">Rooftop Solar Grid-Tie Plant</option>
                        <option value="Commercial Office Building">Commercial Office Building</option>
                        <option value="Industrial Factory / Panel Board">Industrial Factory / Panel Board</option>
                        <option value="EV Charging Station Hub">EV Charging Station Hub</option>
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
                      Required Monitoring Capabilities (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'Solar Net Metering (Bidirectional)',
                        'Mobile App Live Dashboard (Wi-Fi)',
                        'RS485 Modbus RTU SCADA Output',
                        'Overload & Voltage Surge Cutoff',
                        'Sub-Tenant Billing & Export Reports',
                        'EV Charger Dedicated Telemetry'
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
                      <span>Submit Smart Energy Meter Inquiry</span>
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

export default SmartEnergyMeters;
