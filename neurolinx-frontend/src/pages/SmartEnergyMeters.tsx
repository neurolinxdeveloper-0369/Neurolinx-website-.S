import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Wifi, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Zap, 
  ChevronRight, 
  Gauge, 
  Sun, 
  Activity, 
  ShieldCheck, 
  Radio, 
  Cpu, 
  Sliders, 
  TrendingUp, 
  Layers, 
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  BatteryCharging
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function SmartEnergyMeters() {
  // Active Meter Model Tab: 'single' | 'three'
  const [activeMeterTab, setActiveMeterTab] = useState<'single' | 'three'>('single');

  // Interactive Live Power Telemetry Simulator State
  const [acLoadActive, setAcLoadActive] = useState<boolean>(true);
  const [evChargerActive, setEvChargerActive] = useState<boolean>(false);
  const [geyserActive, setGeyserActive] = useState<boolean>(true);
  const [baselineActive, setBaselineActive] = useState<boolean>(true);
  const [solarActive, setSolarActive] = useState<boolean>(true);

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

  // Dynamic Live Power Telemetry Calculations
  const telemetry = useMemo(() => {
    let grossLoadKw = 0;
    if (baselineActive) grossLoadKw += 0.85; // Lights, fridge, routers, fans
    if (acLoadActive) grossLoadKw += activeMeterTab === 'single' ? 2.10 : 4.80; // Dual or multi-split ACs
    if (geyserActive) grossLoadKw += 3.00; // Water heating element
    if (evChargerActive) grossLoadKw += activeMeterTab === 'single' ? 3.30 : 7.40; // Level 2 EV Fast Charger

    const solarGenKw = solarActive ? (activeMeterTab === 'single' ? 3.20 : 6.80) : 0.00;
    const netGridKw = grossLoadKw - solarGenKw;
    const isExporting = netGridKw < 0;

    const baseVoltage = activeMeterTab === 'single' ? 230.4 : 400.2;
    const phaseVoltage = 230.4;
    const currentAmps = activeMeterTab === 'single' 
      ? (grossLoadKw * 1000) / (phaseVoltage * 0.99)
      : (grossLoadKw * 1000) / (Math.sqrt(3) * baseVoltage * 0.98);

    // Monthly bill estimation: 30 days * 8 peak hours equivalent * ₹8.50 per unit (kWh)
    const dailyKwhConsumed = grossLoadKw * 7.5;
    const dailyKwhSolar = solarGenKw * 5.0;
    const netDailyKwh = Math.max(0, dailyKwhConsumed - dailyKwhSolar);
    const estimatedMonthlyCost = Math.round(netDailyKwh * 30 * 8.20);
    const solarSavingsMonthly = Math.round(dailyKwhSolar * 30 * 8.20);

    return {
      grossLoadKw: Number(grossLoadKw.toFixed(2)),
      solarGenKw: Number(solarGenKw.toFixed(2)),
      netGridKw: Number(Math.abs(netGridKw).toFixed(2)),
      isExporting,
      baseVoltage: Number(baseVoltage.toFixed(1)),
      currentAmps: Number(currentAmps.toFixed(1)),
      powerFactor: 0.99,
      frequency: 50.02,
      estimatedMonthlyCost,
      solarSavingsMonthly
    };
  }, [acLoadActive, evChargerActive, geyserActive, baselineActive, solarActive, activeMeterTab]);

  // Meter Models Definition
  const meterModels = [
    {
      id: 'single',
      name: '1-ϕ Smart Energy Meter',
      subtitle: 'Single-Phase 230V DIN-Rail Smart Power Meter',
      modelNumber: 'Neurolinx SEM-1P Pro',
      tagline: 'Precision Sub-Metering, Appliance Isolation & EV Monitoring',
      desc: 'Engineered for modern apartments, studio residences, and dedicated high-draw circuits. Fits neatly inside standard 2-DIN modular distribution boards without extra enclosure space. Delivers Class 1.0 revenue-grade accuracy with onboard Wi-Fi, RS485 Modbus, and automated overload cut-off.',
      image: '/media/smart_energy_meter_single_phase.jpg',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      specs: [
        { label: 'Voltage Rating', val: '230V AC (Operating: 160V - 290V)' },
        { label: 'Current Capacity', val: '5(60)A Direct Connect' },
        { label: 'Accuracy Class', val: 'Class 1.0 (IS 13779 / IEC 62053-21)' },
        { label: 'Form Factor', val: '2-DIN Standard Modular Rail (36mm)' },
        { label: 'Impulse Constant', val: '1000 imp / kWh (Red LED Flasher)' },
        { label: 'Connectivity', val: '2.4GHz Wi-Fi + Isolated RS485 Modbus' },
        { label: 'Display Metrics', val: 'V, I, kW, kVA, PF, Hz, Total kWh' },
        { label: 'Protection', val: 'Overvoltage, Undervoltage & Overload Relay' }
      ],
      highlights: [
        'Revenue-grade Class 1.0 active energy metering with zero drift',
        '2-DIN rail footprint fits into any standard domestic MCB distribution box',
        'Live smartphone app tracking: see real-time wattage update every 2 seconds',
        'Ideal for rental sub-tenancies, EV charger billing, and geyser/AC monitoring'
      ]
    },
    {
      id: 'three',
      name: '3-ϕ Smart Energy Meter',
      subtitle: 'Three-Phase 4-Wire 400V Industrial & Solar Net Meter',
      modelNumber: 'Neurolinx SEM-3P Pro',
      tagline: 'Full 4-Quadrant Solar Net Metering & Industrial Power Quality',
      desc: 'High-density commercial-grade energy management controller for luxury villas, commercial offices, manufacturing panels, and solar installations. Features independent per-phase (R-Y-B) voltage, current, reactive power, and harmonic distortion telemetry with bidirectional net metering.',
      image: '/media/smart_energy_meter_three_phase.jpg',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
      specs: [
        { label: 'Voltage Rating', val: '3x230V / 400V AC (Phase-to-Phase 460V)' },
        { label: 'Current Capacity', val: '10(100)A Direct or 5A External CT (up to 600A)' },
        { label: 'Accuracy Class', val: 'Class 0.5S / Class 1.0 (IEC 62053-22)' },
        { label: 'Form Factor', val: '4-DIN Standard Modular Rail (72mm)' },
        { label: 'Impulse Constant', val: '800 imp / kWh Multi-Rate' },
        { label: 'Connectivity', val: 'Dual RS485 Modbus + Wi-Fi / DLMS/COSEM' },
        { label: 'Bidirectional', val: 'Full 4-Quadrant Solar Net-Metering (Import/Export)' },
        { label: 'Power Quality', val: 'R-Y-B Phase Voltage, Current, THD & PF' }
      ],
      highlights: [
        'Bidirectional 4-Quadrant measurement certified for Rooftop Solar Net Metering',
        'Per-phase voltage & current balancing prevents neutral burnout and equipment failure',
        'DLMS/COSEM and Modbus-RTU interoperable with industrial SCADA and BMS systems',
        'Integrated 90-day onboard flash memory logs 15-minute interval load profiles'
      ]
    }
  ];

  const currentMeter = meterModels.find(m => m.id === activeMeterTab) || meterModels[0];

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: High Impact Visual Hero Banner (Full-Width Edge-to-Edge Clean Architecture) ── */}
      <div className="w-full bg-[#05070D] relative overflow-hidden pt-20 sm:pt-24 border-b border-white/10">
        <div className="relative w-full max-w-[1920px] mx-auto">
          <img 
            src="/media/smart_energy_meters_hero_dark.jpg?v=dark_hero" 
            alt="1-Phase & 3-Phase Smart Energy Meters - Intelligent Energy Monitoring for Homes, Buildings & Industries"
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* ── Slide 2: Interactive Phase Selector & Real-Time Power Telemetry Simulator ── */}
      <div id="meter-models" className="w-full bg-[#F8F9FA] py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Revenue-Grade Power Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Choose Your Phase: <span className="text-brand-red">Single-Phase (1-ϕ)</span> or <span className="text-emerald-600">Three-Phase (3-ϕ)</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Industrial Class 1.0 measurement precision, bi-directional net-metering for rooftop solar, and real-time cloud telemetry for modern smart homes and commercial facilities.
            </p>

            {/* Model Toggle Buttons */}
            <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-gray-200/80 mt-8 gap-2">
              {meterModels.map((meter) => {
                const isActive = activeMeterTab === meter.id;
                return (
                  <button
                    key={meter.id}
                    type="button"
                    onClick={() => setActiveMeterTab(meter.id as 'single' | 'three')}
                    className={`px-6 sm:px-9 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-black text-white shadow-md scale-100'
                        : 'text-slate-700 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <Gauge className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-gray-400'}`} />
                    <span>{meter.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Split: Left Product Showcase + Right Live Power Telemetry Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 7 Columns: Product Hardware Showcase & Specifications */}
            <div className="lg:col-span-7 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
              
              <div>
                {/* Badge & Model Number */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-gray-500 uppercase tracking-wider">
                      {currentMeter.modelNumber}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${currentMeter.badgeColor}`}>
                      DIN-Rail Mounted
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Class 1.0 Accuracy Certified</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
                  {currentMeter.subtitle}
                </h3>
                <p className="text-brand-red font-semibold text-sm sm:text-base mb-6">
                  {currentMeter.tagline}
                </p>

                {/* 4K Studio Image */}
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-sm border border-gray-100 bg-[#0B0F19]">
                  <img 
                    src={currentMeter.image} 
                    alt={currentMeter.subtitle} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-emerald-400 font-semibold border border-white/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Telemetry Active</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {currentMeter.desc}
                </p>

                {/* Technical Specifications Grid */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-red" />
                  <span>Hardware &amp; Electrical Parameters</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentMeter.specs.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                      <span className="text-[11px] font-medium text-gray-500">{item.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  {currentMeter.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {feat}
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
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#solar-net-metering"
                  className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-slate-800 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Explore Solar Net Metering</span>
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Interactive Real-Time Power Telemetry Simulator */}
            <div className="lg:col-span-5 bg-[#0C101A] text-white p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[36px] flex flex-col justify-between border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Cyan Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold tracking-widest uppercase block">
                      SIMULATOR
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
                      Live Telemetry Dashboard
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Digital LCD Multi-Parameter Meter Display Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/70 border border-emerald-500/30 shadow-[inset_0_2px_12px_rgba(16,185,129,0.15)] mb-6 font-mono">
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/10 pb-3 mb-4">
                    <span>{currentMeter.modelNumber}</span>
                    <span className="text-emerald-400 font-bold">{telemetry.frequency} Hz • PF {telemetry.powerFactor}</span>
                  </div>

                  {/* Primary Power Readout */}
                  <div className="text-center py-2">
                    <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                      {telemetry.isExporting ? 'ACTIVE SOLAR EXPORT TO GRID' : 'TOTAL ACTIVE LOAD (REAL-TIME)'}
                    </span>
                    <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                      <span className={telemetry.isExporting ? 'text-emerald-400' : 'text-white'}>
                        {telemetry.isExporting ? `-${telemetry.netGridKw}` : telemetry.grossLoadKw}
                      </span>
                      <span className="text-xl sm:text-2xl text-emerald-400 font-bold">kW</span>
                    </div>
                  </div>

                  {/* Electrical Parameters Grid */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-white/10 mt-4 text-xs">
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-gray-400 block">VOLTAGE</span>
                      <span className="text-sm font-bold text-white">{telemetry.baseVoltage} V</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-gray-400 block">CURRENT</span>
                      <span className="text-sm font-bold text-white">{telemetry.currentAmps} A</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5">
                      <span className="text-[10px] text-gray-400 block">SOLAR GEN</span>
                      <span className="text-sm font-bold text-amber-400">+{telemetry.solarGenKw} kW</span>
                    </div>
                  </div>

                </div>

                {/* Interactive Appliance Load Toggles */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                    Toggle Connected Circuit Loads
                  </span>

                  {/* Air Conditioning */}
                  <button
                    type="button"
                    onClick={() => setAcLoadActive(!acLoadActive)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                      acLoadActive
                        ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${acLoadActive ? 'bg-emerald-500 text-black' : 'bg-white/10 text-gray-400'}`}>
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block font-semibold">Inverter Air Conditioners</span>
                        <span className="text-[10px] font-normal text-gray-400">{activeMeterTab === 'single' ? '2.10 kW' : '4.80 kW (Central Multi-Split)'}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold ${acLoadActive ? 'bg-emerald-400 text-black' : 'bg-white/10 text-gray-500'}`}>
                      {acLoadActive ? 'ON' : 'OFF'}
                    </span>
                  </button>

                  {/* EV Fast Charger */}
                  <button
                    type="button"
                    onClick={() => setEvChargerActive(!evChargerActive)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                      evChargerActive
                        ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${evChargerActive ? 'bg-emerald-500 text-black' : 'bg-white/10 text-gray-400'}`}>
                        <BatteryCharging className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block font-semibold">EV Fast Charger (Level 2)</span>
                        <span className="text-[10px] font-normal text-gray-400">{activeMeterTab === 'single' ? '3.30 kW (16A)' : '7.40 kW (32A 3-Phase)'}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold ${evChargerActive ? 'bg-emerald-400 text-black' : 'bg-white/10 text-gray-500'}`}>
                      {evChargerActive ? 'ON' : 'OFF'}
                    </span>
                  </button>

                  {/* Water Geyser */}
                  <button
                    type="button"
                    onClick={() => setGeyserActive(!geyserActive)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                      geyserActive
                        ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${geyserActive ? 'bg-emerald-500 text-black' : 'bg-white/10 text-gray-400'}`}>
                        <Activity className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block font-semibold">Water Heating Geyser</span>
                        <span className="text-[10px] font-normal text-gray-400">3.00 kW (Instant Heating)</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold ${geyserActive ? 'bg-emerald-400 text-black' : 'bg-white/10 text-gray-500'}`}>
                      {geyserActive ? 'ON' : 'OFF'}
                    </span>
                  </button>

                  {/* Rooftop Solar */}
                  <button
                    type="button"
                    onClick={() => setSolarActive(!solarActive)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                      solarActive
                        ? 'bg-amber-500/15 border-amber-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${solarActive ? 'bg-amber-400 text-black' : 'bg-white/10 text-gray-400'}`}>
                        <Sun className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block font-semibold">Rooftop Solar Generation</span>
                        <span className="text-[10px] font-normal text-amber-300">+{activeMeterTab === 'single' ? '3.20 kW' : '6.80 kW Grid Feed'}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold ${solarActive ? 'bg-amber-400 text-black' : 'bg-white/10 text-gray-500'}`}>
                      {solarActive ? 'PRODUCING' : 'OFF'}
                    </span>
                  </button>

                </div>

                {/* Monthly Projected Bill & Solar Savings */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Estimated Monthly Bill</span>
                    <span className="text-base font-black text-white">₹{telemetry.estimatedMonthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-400 uppercase tracking-wider block">Monthly Solar Savings</span>
                    <span className="text-base font-black text-emerald-400">₹{telemetry.solarSavingsMonthly.toLocaleString()}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Order Button */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <a
                  href="#slide-4"
                  className="w-full py-3.5 bg-brand-red hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-brand-red/20 text-center block cursor-pointer"
                >
                  Configure My Smart Energy Meter
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── Slide 3: 360° Architectural & Solar Net Metering Showcase ── */}
      <div id="solar-net-metering" className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 6 Columns: 4K Architectural Distribution Panel & Solar Dashboard Photo */}
            <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden shadow-xl border border-gray-100 bg-[#0B0F19]">
              <img 
                src="/media/smart_energy_meter_solar_dashboard.jpg" 
                alt="Neurolinx Smart Energy Meter Installed in Luxury Villa Distribution Panel with Solar Dashboard" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block text-sm">Villa Distribution Panel</span>
                  <span className="text-gray-400 text-[11px]">Real-Time Smart Metering &amp; Solar SCADA</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                  <span>99.2% POWER FACTOR</span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Core Capabilities & Intelligence */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sun className="w-3.5 h-3.5" />
                  <span>Solar Net-Metering &amp; Telemetry</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                  Bidirectional Solar Net Metering &amp; <span className="text-brand-red">Smart Grid Telemetry</span>
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  Whether you are monitoring a luxury private residence with solar panels or managing multi-tenant commercial sub-distribution boards, the Neurolinx Smart Energy Meter provides absolute visibility over every watt consumed and exported.
                </p>
              </div>

              {/* 4 Feature Callout Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: "Bidirectional Net Metering",
                    desc: "Dual import and export registers accurately credit surplus solar generation fed into DISCOM electricity grids."
                  },
                  {
                    title: "Instant Anomaly Alarms",
                    desc: "Immediate push notifications for voltage spikes (>265V), phase imbalance, neutral fault, and low power factor."
                  },
                  {
                    title: "DLMS/COSEM & Modbus",
                    desc: "Standard RS485 communication protocols easily link with building management systems (BMS), SCADA, and IoT clouds."
                  },
                  {
                    title: "15-Min Load Curve Logging",
                    desc: "Onboard flash memory retains 90 days of detailed 15-minute load profiles for tariff optimization and energy audits."
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
                  <span>Order Smart Energy Meter</span>
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>

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
