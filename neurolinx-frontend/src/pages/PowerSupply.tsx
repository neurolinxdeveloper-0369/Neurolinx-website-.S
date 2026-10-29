import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  Award, 
  Sliders, 
  Flame, 
  Sparkles,
  BarChart3
} from 'lucide-react';

export function PowerSupply() {
  const [activeTab, setActiveTab] = useState<'all' | 'acdc' | 'dcdc' | 'led'>('all');

  const products = [
    {
      id: "ac-dc",
      category: "acdc",
      number: "01",
      title: "AC-DC Power Converters",
      tagline: "High-Efficiency Industrial SMPS",
      desc: "Industrial-grade switched mode power supplies engineered for harsh grid variations. Universal 85V - 305V AC input with ultra-low ripple, active power factor correction (PFC > 0.98), and 94% peak conversion efficiency.",
      img: "/media/industrial_smps.jpg",
      badge: "Universal AC Input",
      specs: [
        "Wide Input: 85V - 305V AC (47-63Hz)",
        "Outputs: 12V, 24V, 48V DC Regulated",
        "Active PFC (Power Factor > 0.98)",
        "Short Circuit, Over-Voltage & Thermal Cutoff"
      ]
    },
    {
      id: "dc-dc",
      category: "dcdc",
      number: "02",
      title: "DC-DC Converters",
      tagline: "Galvanically Isolated Step-Down & Step-Up",
      desc: "Wide-input DC-DC voltage regulators designed for rolling stock, telecommunications, and battery backup systems. Features 3000V DC galvanic input-to-output isolation and compact DIN-rail/chassis packaging.",
      img: "/media/powersupply_hero.jpg",
      badge: "3kV Galvanic Isolation",
      specs: [
        "Wide Inputs: 18-36V, 36-72V, 72-144V DC",
        "High Isolation: 3000V DC Dielectric Strength",
        "Operating Temperature: -40°C to +85°C",
        "Railway Qualified to EN 50155 Standards"
      ]
    },
    {
      id: "led-drivers",
      category: "led",
      number: "03",
      title: "Precision LED Drivers",
      tagline: "Flicker-Free Constant Current Drivers",
      desc: "Engineered for high-reliability architectural, street, and railway lighting. Delivers ultra-smooth dimming (DALI-2, 0-10V, PWM), 10kV lightning surge immunity, and total harmonic distortion (THD) under 7%.",
      img: "/media/precision_led_drivers.jpg",
      badge: "10kV Surge Immune",
      specs: [
        "Flicker-Free Constant Current Outputs",
        "Multi-Protocol Dimming (DALI-2, 0-10V, PWM)",
        "Built-in 10kV Lightning Surge Protection",
        "Harmonic Distortion (THD) < 7%"
      ]
    },
    {
      id: "custom-power",
      category: "acdc",
      number: "04",
      title: "Custom Power Solutions & Surge Suppressors",
      tagline: "Multi-Stage Industrial Protection",
      desc: "Custom-engineered power distribution units, multi-stage metal oxide varistor (MOV) surge suppressors, and transient voltage suppression (TVS) arrays tailored for defense, solar, and industrial machinery.",
      img: "/media/surge_protection.jpg",
      badge: "Custom Engineering",
      specs: [
        "Custom Wattage & Multi-Rail Voltage Rail Outputs",
        "Multi-Stage MOV & Gas Discharge Tube (GDT) Stages",
        "Fanless Convection & Conduction Cooling",
        "Conformal Coating for Humid & Corrosive Environments"
      ]
    }
  ];

  const filtered = products.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

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
            <span className="text-white font-semibold">Industrial Grade Electronics</span>
            <span className="text-slate-500">•</span>
            <span>Up to 94% Efficiency</span>
            <span className="text-slate-500">•</span>
            <span>10kV Surge Immunity</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-400">
            <a href="tel:+917013486961" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-red" />
              <span>OEM & Custom Design: +91 7013486961</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Cinematic Hero ── */}
      <div className="relative w-full overflow-hidden bg-[#0B0F19] text-white pt-2 pb-16 md:pt-3 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/media/powersupply_hero.jpg" 
            alt="Power Supply and Drivers"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 text-red-300 font-semibold text-xs tracking-wider uppercase mb-6 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-brand-red" />
                High-Reliability Power Electronics
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6 leading-[1.12]">
                Power Supply & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-orange-400">
                  Precision Drivers.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
                Ruggedized power conversion systems engineered for critical electronics. Complete portfolio of <strong className="text-white font-semibold">AC-DC Converters</strong>, <strong className="text-white font-semibold">DC-DC Isolated Regulators</strong>, and <strong className="text-white font-semibold">Flicker-Free LED Drivers</strong> built to thrive in severe electrical environments.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a 
                  href="#products-grid"
                  className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Explore Power Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="mailto:support@neurolinx.in?subject=Custom%20Power%20Supply%20Inquiry"
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-brand-red" />
                  <span>Request Custom Design</span>
                </a>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Zap className="w-5 h-5 shrink-0" />
                    <span>85-305V</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Wide Universal AC Input</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <span>3000V DC</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Galvanic Isolation</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <BarChart3 className="w-5 h-5 shrink-0" />
                    <span>94%</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Peak Efficiency</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-red font-bold text-lg">
                    <Award className="w-5 h-5 shrink-0" />
                    <span>10kV</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-0.5">Surge Immunity</span>
                </div>
              </div>
            </div>

            {/* Right Hero Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse"></div>
                    <span className="text-xs tracking-wider uppercase font-semibold text-gray-300">Power Delivery Monitor</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                    Optimal PFC 0.99
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden mb-6 h-56 w-full group">
                  <img
                    src="/media/industrial_smps.jpg"
                    alt="Industrial SMPS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">Industrial SMPS 24V 20A</span>
                    <span className="text-brand-red font-bold">480W Convection</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 text-[10px] block uppercase">Thermal State</span>
                    <span className="text-white font-bold">Fanless 48°C Steady</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-gray-400 text-[10px] block uppercase">Harmonic THD</span>
                    <span className="text-emerald-400 font-bold">&lt; 5.2% Clean Output</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Product Catalog Section ── */}
      <div id="products-grid" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest border border-red-200">
            Power Systems Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Flawless Power Delivery for Demanding Loads.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From precision current-regulated LED drivers to heavy-duty industrial DC-DC converters, our topologies guarantee uninterrupted performance.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Power Products' },
              { id: 'acdc', label: 'AC-DC Converters' },
              { id: 'dcdc', label: 'DC-DC Converters' },
              { id: 'led', label: 'Precision LED Drivers' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map((prod) => (
            <div 
              key={prod.id} 
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
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

              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-bold text-brand-red tracking-wider uppercase mb-1">
                  {prod.tagline}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {prod.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-gray-100">
                  {prod.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Consultation Strip ── */}
      <div className="w-full bg-gray-50 py-16 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Need a Custom Power Output or OEM Driver?</h3>
            <p className="text-sm text-gray-500">We design custom wattage, form factors, and multi-rail topologies for specialized equipment.</p>
          </div>
          <a
            href="tel:+917013486961"
            className="px-8 py-3.5 rounded-full bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-brand-red/20 shrink-0"
          >
            Consult Our Power Engineers
          </a>
        </div>
      </div>

    </div>
  );
}
