import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Layers, 
  Award, 
  PhoneCall, 
  FileText, 
  ArrowRight, 
  Sliders, 
  Activity, 
  HeartPulse, 
  Building2, 
  Clock,
  Check
} from 'lucide-react';

export function NonUvDisinfection() {
  // Selected Model Tab
  const [selectedModel, setSelectedModel] = useState<'panel' | 'batten' | 'downlight' | 'portable'>('panel');

  const models = [
    {
      id: "panel",
      name: "2x2 Cleanroom Ceiling Panel",
      tagline: "Hospitals, Operating Theatres & Cleanrooms",
      desc: "Flush-mount 2x2 ft and 1x4 ft antimicrobial ceiling panel fixture. Directly replaces standard troffers in hospital ICUs, surgical suites, pathology labs, and pharmaceutical manufacturing facilities for uninterrupted 24/7 pathogen defense.",
      img: "/media/continuous_sterilization.jpg",
      badge: "Medical Cleanroom",
      specs: [
        "Dimensions: 595mm x 595mm x 45mm",
        "Dual Mode: Clean White (4000K) + 405nm Active Antimicrobial",
        "IEC 62471 Photobiological Eye & Skin Safety Certified",
        "Efficacy: 99.9% Microbial Reduction in 24 Hours",
        "Diffuser: Microprismatic Anti-Glare PMMA",
        "Input Voltage: 180V - 265V AC Surge Protected"
      ]
    },
    {
      id: "batten",
      name: "Continuous Linear Batten Model",
      tagline: "Corridors, Schools, Commercial Offices & Gyms",
      desc: "Sleek aluminum architectural continuous linear batten designed for office hallways, educational classrooms, and fitness centers. Emits ambient functional white illumination while continuously neutralizing airborne and surface bio-burden.",
      img: "/media/led_integration.jpg",
      badge: "Commercial Batten",
      specs: [
        "Lengths: 2 Feet (20W) & 4 Feet (40W)",
        "Direct Surface / Suspended Wire Mounting",
        "Continuous Non-UV 405nm Visible Antimicrobial Spectrum",
        "100% Safe for Continuous Human Occupation",
        "High CRI (>85) Natural Lighting Quality",
        "Lifespan: >60,000 Hours Continuous Burn"
      ]
    },
    {
      id: "downlight",
      name: "Architectural Downlight Model",
      tagline: "Clinics, Elevators, Reception Desks & Washrooms",
      desc: "Compact recessed circular downlight for targeted sterilization over high-touch transit zones such as elevator cabs, doctor consultation chambers, reception desks, and hotel washrooms.",
      img: "/media/human_safe.jpg",
      badge: "Recessed Downlight",
      specs: [
        "Cutout Sizes: 4-Inch (12W) & 6-Inch (18W)",
        "Die-Cast Aluminum Heat Sink for Optimal Thermal Dissipation",
        "Zero Harmful UV-A, UV-B, or UV-C Radiation",
        "Instant On/Off with Microwave Occupancy Sensor Integration",
        "Beam Angle: 90° Wide Distribution",
        "IP54 Moisture & Dust Resistant Face"
      ]
    },
    {
      id: "portable",
      name: "Mobile Standalone Sanitizer Unit",
      tagline: "Flexible Multi-Room Disinfection Trolley",
      desc: "Portable wheeled sterilization tower designed for rapid deployment across hotel rooms, quarantine zones, dental operatories, and school buses without needing hardwired ceiling installation.",
      img: "/media/pathogen_elimination.jpg",
      badge: "Mobile Disinfection",
      specs: [
        "Wheeled Castor Base with Locking Brakes",
        "360-Degree Omnidirectional Emitter Array",
        "Safe to Run While People and Pets are Present in Room",
        "Integrated Digital Timer & Cycle Selector",
        "Robust Steel Cage Impact Protection",
        "Standard 230V 3-Pin Wall Socket Plug & Play"
      ]
    }
  ];

  const currentModelData = models.find(m => m.id === selectedModel) || models[0];

  const clinicalHighlights = [
    {
      title: "100% Human Safe (Zero UV Hazard)",
      desc: "Unlike harmful UV-C (254nm) that burns retinas and causes skin carcinoma, our 405nm narrow-spectrum visible light is classified as RG-0 (Exempt Risk) under IEC 62471. People work safely underneath all day.",
      icon: ShieldCheck
    },
    {
      title: "Continuous 24/7 Decontamination",
      desc: "Chemical sprays and UV robots only clean for minutes while rooms are evacuated. Our non-UV fixtures decontaminate continuously, killing bacteria as soon as they are introduced.",
      icon: Clock
    },
    {
      title: "99.9% Proven Pathogen Kill Rate",
      desc: "Targets intracellular porphyrins inside microbes, generating reactive oxygen species (ROS) that dismantle bacterial cell walls. Proven effective against MRSA, E. Coli, Staph, and enveloped viruses.",
      icon: HeartPulse
    },
    {
      title: "Drop-In Fixture Replacement",
      desc: "Replaces standard fluorescent tubes, troffers, and downlights with no additional rewiring. Serves as your normal high-efficiency everyday lighting fixture.",
      icon: Layers
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Top Trust Bar ── */}
      <div className="bg-[#0B0F19] text-slate-300 pt-24 pb-2 px-4 text-xs font-medium border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-white font-semibold">100% Human-Safe Disinfection</span>
            <span className="text-slate-500">•</span>
            <span>IEC 62471 Photobiological Certified</span>
            <span className="text-slate-500">•</span>
            <span>Zero Toxic UV-C Radiation</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-400">
            <a href="tel:+917013486961" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-red" />
              <span>Hospital & Institutional Sales: +91 7013486961</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Cinematic Hero ── */}
      <div className="relative w-full overflow-hidden bg-[#0B0F19] text-white pt-2 pb-16 md:pt-3 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Non-UV Disinfection Light"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 text-red-300 font-semibold text-xs tracking-wider uppercase mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                Continuous Antimicrobial Lighting Technology
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6 leading-[1.12]">
                Non-UV Disinfection <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-orange-400">
                  Light Systems.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
                Breakthrough 405nm antimicrobial technology that eliminates <strong className="text-white font-semibold">99.9% of bacteria and viruses continuously</strong> while people work, learn, and heal underneath. Zero harmful UV radiation, zero chemicals, and zero room evacuation required.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a 
                  href="#models-section"
                  className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Explore Available Models</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#clinical-section"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-red" />
                  <span>Clinical & Safety Proof</span>
                </a>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span>0% UV</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">100% Eye & Skin Safe</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Award className="w-5 h-5 shrink-0" />
                    <span>99.9%</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Pathogen Kill Rate</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Clock className="w-5 h-5 shrink-0" />
                    <span>24 / 7</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Always-On Protection</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Layers className="w-5 h-5 shrink-0" />
                    <span>IEC 62471</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Exempt Group 0 Safety</span>
                </div>
              </div>
            </div>

            {/* Right Hero Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse"></div>
                    <span className="text-xs tracking-wider uppercase font-semibold text-gray-300">Cleanroom Sterilization Active</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                    Safe For Occupants
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden mb-6 h-56 w-full group">
                  <img
                    src="/media/continuous_sterilization.jpg"
                    alt="2x2 Ceiling Panel Cleanroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">Model 2x2 Panel Fixture</span>
                    <span className="text-brand-red font-bold">405nm Continuous Spectrum</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 text-[10px] block uppercase">Photobiological Class</span>
                    <span className="text-white font-bold">RG-0 Exempt (Safe)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 text-[10px] block uppercase">Bacterial Reduction</span>
                    <span className="text-emerald-400 font-bold">99.9% MRSA & E. Coli</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Models Showcase Section (From User Notes: Models & Images) ── */}
      <div id="models-section" className="w-full bg-gray-50 py-24 px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-100 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
              Product Models Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Select Your Non-UV Disinfection Model.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Available in 4 dedicated form factors engineered for cleanrooms, offices, washrooms, and mobile multi-room deployment.
            </p>

            {/* Model Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-4xl mx-auto">
              {models.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id as any)}
                  className={`p-3.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                    selectedModel === m.id
                      ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/30'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
                  }`}
                >
                  <div className="font-extrabold">{m.name.split(' ')[0]} {m.name.split(' ')[1]}</div>
                  <div className={`text-[10px] mt-0.5 ${selectedModel === m.id ? 'text-red-100' : 'text-gray-400'}`}>
                    {m.badge}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Model Interactive Display */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase mb-3">
                  {currentModelData.badge}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                  {currentModelData.name}
                </h3>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  {currentModelData.tagline}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {currentModelData.desc}
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-8">
                  {currentModelData.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+917013486961"
                    className="px-6 py-3 rounded-full bg-brand-red hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-brand-red/20 transition-all flex items-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Get Quote for {currentModelData.name.split(' ')[0]}</span>
                  </a>
                  <a
                    href="mailto:support@neurolinx.in?subject=Non-UV%20Datasheet%20Request"
                    className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-brand-red" />
                    <span>Request Technical Datasheet</span>
                  </a>
                </div>
              </div>

              {/* Model Image Display */}
              <div className="lg:col-span-5 h-80 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                <img
                  src={currentModelData.img}
                  alt={currentModelData.name}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Clinical & Photobiological Efficacy (Images & Science) ── */}
      <div id="clinical-section" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
            Clinical Rigor & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            How Non-UV 405nm Destroys Microbes Safely.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Unlike UV radiation which breaks DNA and causes skin cancer, visible 405nm light excites bacterial porphyrins, destroying bacteria from the inside out with complete safety for human occupants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clinicalHighlights.map((hl, i) => {
            const Icon = hl.icon;
            return (
              <div key={i} className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center mb-6 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {hl.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {hl.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Models Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200 bg-white group cursor-pointer" onClick={() => setSelectedModel(m.id as any)}>
              <div className="h-44 overflow-hidden relative">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold">
                  {m.badge}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-slate-900 mb-1">{m.name}</h4>
                <p className="text-[11px] text-gray-400 line-clamp-2">{m.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Consultation & RFQ Strip ── */}
      <div className="w-full bg-[#0F172A] text-white py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-red/20 text-red-300 font-bold text-xs uppercase tracking-widest border border-brand-red/40">
            Hospital & Institutional Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Protect Your Facility with Continuous Non-UV Disinfection
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Speak directly with our bio-photonic lighting engineers for hospital cleanroom illumination planning, irradiance calculations, and commercial quotation proposals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+917013486961"
              className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-red-700 text-white rounded-full font-bold text-sm shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Medical Lighting Division: +91 7013486961</span>
            </a>
            <a
              href="mailto:support@neurolinx.in?subject=Non-UV%20Disinfection%20Inquiry"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-brand-red" />
              <span>Request Institutional Proposal</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
