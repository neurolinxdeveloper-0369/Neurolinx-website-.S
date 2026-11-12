import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Check, 
  Wifi, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Radio, 
  Cpu, 
  Volume2, 
  Layers, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap,
  Thermometer,
  Droplets,
  AlertTriangle,
  Bell,
  Server,
  Wind,
  Sliders,
  FileText,
  Flame,
  Snowflake,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function TemperatureMonitor() {
  // Active Environment Mode: 'residential' | 'server-room' | 'cold-storage'
  const [activeZone, setActiveZone] = useState<'residential' | 'server-room' | 'cold-storage'>('residential');

  // Interactive Temperature Slider State (°C)
  const [currentTemp, setCurrentTemp] = useState<number>(24.5);

  // Active Model Tab
  const [activeModelTab, setActiveModelTab] = useState<'tempsense-air' | 'tempguard-pro' | 'climatmesh-gateway'>('tempsense-air');

  // Contact Inquiry Form State
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Temperature Monitor & Alert Systems Setup',
    projectType: 'Penthouse / Living Residence',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Dynamic Telemetry Calculations based on Zone and Current Temperature
  const telemetry = useMemo(() => {
    // Relative Humidity (%) inversely correlated with temp for realistic simulation
    let humidity = Math.max(30, Math.min(85, Math.round(75 - (currentTemp - 15) * 1.4)));
    if (activeZone === 'cold-storage') humidity = 82;
    if (activeZone === 'server-room') humidity = 42;

    const tempFahrenheit = ((currentTemp * 9) / 5 + 32).toFixed(1);
    const dewPoint = (currentTemp - ((100 - humidity) / 5)).toFixed(1);
    
    // Status assessment
    let statusText = 'Optimal Climate';
    let alertLevel: 'normal' | 'caution' | 'warning' | 'critical' = 'normal';
    let acAction = 'AC Standby (Idle)';
    let sirenActive = false;

    if (activeZone === 'residential') {
      if (currentTemp < 18) {
        statusText = 'Low Ambient Temperature (Chilly)';
        alertLevel = 'caution';
        acAction = 'Heater Auto-Trigger Recommended';
      } else if (currentTemp <= 26) {
        statusText = 'Optimal Comfort Range';
        alertLevel = 'normal';
        acAction = 'Comfort Maintain Active';
      } else if (currentTemp <= 31) {
        statusText = 'Elevated Heat (AC Triggered)';
        alertLevel = 'warning';
        acAction = 'Smart AC Cooling Automatically Active (24°C Mode)';
      } else {
        statusText = 'CRITICAL HEAT SPIKE! Alert Dispatched';
        alertLevel = 'critical';
        acAction = 'Max Cooling Override + Phone Siren Warning';
        sirenActive = true;
      }
    } else if (activeZone === 'server-room') {
      if (currentTemp <= 22) {
        statusText = 'Optimal Server Rack Airflow';
        alertLevel = 'normal';
        acAction = 'HVAC Balanced Circulation';
      } else if (currentTemp <= 27) {
        statusText = 'Elevated Rack Intake Heat';
        alertLevel = 'warning';
        acAction = 'Secondary Precision AC Switched ON';
      } else {
        statusText = 'THERMAL RUNAWAY RISK! Emergency Alert';
        alertLevel = 'critical';
        acAction = 'Emergency HVAC Active + IT Admin SMS Sent';
        sirenActive = true;
      }
    } else {
      // Cold storage
      if (currentTemp <= 14) {
        statusText = 'Strict Cold Chain Compliant';
        alertLevel = 'normal';
        acAction = 'Chiller Cycle Normal';
      } else if (currentTemp <= 18) {
        statusText = 'Cold Chain Drift Warning';
        alertLevel = 'warning';
        acAction = 'Chiller Boost Mode Active';
      } else {
        statusText = 'SPOILAGE RISK! Temperature Breach';
        alertLevel = 'critical';
        acAction = 'Backup Compressor Engaged + Alert Siren';
        sirenActive = true;
      }
    }

    return {
      tempC: currentTemp.toFixed(1),
      tempF: tempFahrenheit,
      humidity,
      dewPoint,
      statusText,
      alertLevel,
      acAction,
      sirenActive,
      batteryLevel: '98% (5-Year CR2477)',
      meshSignal: '-58 dBm (Ultra-Reliable Mesh)',
      aqi: '22 (Good / Clean Air)'
    };
  }, [currentTemp, activeZone]);

  // Zone Presets handler
  const handleZoneChange = (zone: 'residential' | 'server-room' | 'cold-storage') => {
    setActiveZone(zone);
    if (zone === 'residential') setCurrentTemp(24.5);
    if (zone === 'server-room') setCurrentTemp(21.0);
    if (zone === 'cold-storage') setCurrentTemp(12.5);
  };

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Full-Bleed Temperature Monitor & Alert Systems 4K UHD Panoramic Hero Banner (3840 x 1280) ── */}
      <div
        id="hero"
        className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24 border-none"
      >
        <div className="relative w-full max-w-[2172px] mx-auto">
          <img
            src="/media/temperature_monitor_hero_4k.jpg?v=uhd4kPanoramic"
            alt="Temperature Monitor & Alert Systems - Precision Environmental Sensing - Neurolinx"
            width={3840}
            height={1280}
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block"
          />

          {/* Subtle Ambient Scrim for Clean Text Readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Centered Title Positioned in the Calm Twilight Window (~1 cm shifted left) */}
          <div className="absolute top-[26%] sm:top-[25%] left-0 right-0 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 md:-translate-x-7 flex justify-center pointer-events-none z-10 px-4 text-center">
            <h1 className="whitespace-nowrap text-[13px] sm:text-xl md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[46px] font-bold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              <span className="text-white">Temperature Monitor &amp; </span>
              <span className="text-brand-red drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] relative inline-block pb-1">
                Alert Systems
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red/90 rounded-full" />
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Slide 2: Models And Features of Smart Devices ── */}
      <div id="models-features" className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title with company logo colors: Red, White, and Black */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm border border-gray-800">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span>Environmental IoT Sensing & Alert Engine</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-2 sm:mb-3">
              Models And Features of
            </h2>
            
            <div className="inline-flex items-center gap-2.5 text-3xl sm:text-4xl md:text-5xl font-black">
              <span className="text-brand-red relative inline-block pb-1.5">
                Smart
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-brand-red rounded-full"></span>
              </span>
              <span className="text-black relative inline-block pb-1.5">
                Devices
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-black rounded-full"></span>
              </span>
            </div>
            
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto mt-3 font-medium">
              Medical-grade environmental sensors monitoring temperature, relative humidity, and heat spikes with automated HVAC cooling triggers and instant emergency alerts.
            </p>
          </div>

          {/* ── Interactive Climate Simulation & Live Alert Console ── */}
          <div className="max-w-6xl mx-auto bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm mb-16">
            
            <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
              
              {/* Left Column: Interactive Controls & Slider */}
              <div className="w-full lg:w-5/12 flex flex-col justify-between">
                <div>
                  
                  {/* Environment Switcher Tabs */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-brand-red" />
                      <span>Select Target Environment</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'residential', label: 'Residence' },
                        { id: 'server-room', label: 'Server Room' },
                        { id: 'cold-storage', label: 'Cold Chain' }
                      ].map((env) => (
                        <button
                          key={env.id}
                          type="button"
                          onClick={() => handleZoneChange(env.id as any)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all border cursor-pointer text-center ${
                            activeZone === env.id
                              ? 'bg-black text-white border-black shadow-sm'
                              : 'bg-white hover:bg-gray-100 text-slate-700 border-gray-200'
                          }`}
                        >
                          {env.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Temperature Interactive Slider */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-2xs mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Thermometer className="w-4 h-4 text-brand-red" />
                        <span>Live Temperature Simulator</span>
                      </span>
                      <span className="text-lg font-black font-mono text-slate-900 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">
                        {telemetry.tempC}°C
                      </span>
                    </div>

                    <input 
                      type="range"
                      min={activeZone === 'cold-storage' ? 5 : 15}
                      max={activeZone === 'cold-storage' ? 30 : 45}
                      step={0.5}
                      value={currentTemp}
                      onChange={(e) => setCurrentTemp(parseFloat(e.target.value))}
                      className="w-full h-2.5 bg-gradient-to-r from-neutral-300 via-neutral-500 to-brand-red rounded-lg appearance-none cursor-pointer accent-black mb-3"
                    />

                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-400">
                      <span>{activeZone === 'cold-storage' ? '5°C' : '15°C'} (Cold)</span>
                      <span>24°C (Comfort)</span>
                      <span>{activeZone === 'cold-storage' ? '30°C' : '45°C'} (Heat Spike)</span>
                    </div>
                  </div>

                  {/* Alert Threshold Summary Card */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="text-xs font-bold text-slate-700">Multi-Channel Alert Status</span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        telemetry.alertLevel === 'normal' 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : telemetry.alertLevel === 'warning'
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : 'bg-red-50 text-brand-red border-red-200 animate-pulse'
                      }`}>
                        {telemetry.alertLevel.toUpperCase()}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Automated AC Action:</span>
                        <span className="text-slate-900 font-bold text-right truncate max-w-[200px]">
                          {telemetry.acAction}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Notification Dispatch:</span>
                        <span className="text-slate-900 font-bold">
                          {telemetry.sirenActive ? 'Push + SMS + Webhook' : 'Push Notification Ready'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Local Mesh Fallback:</span>
                        <span className="text-emerald-600 font-bold">100% Offline Active</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-6">
                  <a
                    href="#contact-consultation"
                    onClick={() => {
                      setInquiryForm(prev => ({
                        ...prev,
                        automationFor: `Temperature Monitor & Alert Systems (${activeZone.toUpperCase()})`
                      }));
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-md shadow-brand-red/20 cursor-pointer"
                  >
                    <span>Configure & Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live High-Tech Telemetry Display Console */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between">
                
                {/* Visual Telemetry Card with Dark Theme */}
                <div className="rounded-2xl bg-gradient-to-b from-[#181D26] to-[#0D111A] p-6 sm:p-7 border border-slate-700/80 shadow-2xl relative overflow-hidden text-white">
                  
                  {/* Glowing header bar */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        telemetry.sirenActive ? 'bg-brand-red animate-ping' : 'bg-white animate-pulse'
                      }`}></span>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
                        NEUROLINX CLIMATEMESH • LIVE TELEMETRY
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                      telemetry.sirenActive 
                        ? 'bg-red-950/80 text-red-400 border-red-500/50'
                        : 'bg-white/10 text-white border-white/25'
                    }`}>
                      {telemetry.statusText}
                    </span>
                  </div>

                  {/* Main Metric Gauges Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
                    
                    {/* Gauge 1: Temperature C */}
                    <div className="bg-[#090C12] border border-slate-800 p-3.5 rounded-xl flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] font-semibold">
                        <span>Temperature</span>
                        <Thermometer className="w-3.5 h-3.5 text-brand-red" />
                      </div>
                      <div className="my-2">
                        <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
                          {telemetry.tempC}
                        </span>
                        <span className="text-xs font-bold text-gray-400 ml-1">°C</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">{telemetry.tempF}°F</span>
                    </div>

                    {/* Gauge 2: Relative Humidity */}
                    <div className="bg-[#090C12] border border-slate-800 p-3.5 rounded-xl flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] font-semibold">
                        <span>Humidity</span>
                        <Droplets className="w-3.5 h-3.5 text-brand-red" />
                      </div>
                      <div className="my-2">
                        <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
                          {telemetry.humidity}
                        </span>
                        <span className="text-xs font-bold text-gray-400 ml-1">% RH</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">Dew: {telemetry.dewPoint}°C</span>
                    </div>

                    {/* Gauge 3: Air Quality / Safety */}
                    <div className="bg-[#090C12] border border-slate-800 p-3.5 rounded-xl flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] font-semibold">
                        <span>Air Quality</span>
                        <Wind className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="my-2">
                        <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-emerald-400">
                          AQI 22
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-500 font-mono">Excellent Grade</span>
                    </div>

                    {/* Gauge 4: Heat Alert Index */}
                    <div className="bg-[#090C12] border border-slate-800 p-3.5 rounded-xl flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] font-semibold">
                        <span>Heat Index</span>
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="my-2">
                        <span className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                          telemetry.sirenActive ? 'text-brand-red animate-pulse' : 'text-amber-400'
                        }`}>
                          {telemetry.sirenActive ? 'SPIKE' : 'NORMAL'}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">Sensirion SHT40</span>
                    </div>

                  </div>

                  {/* Visual Status Alert Banner inside Dark Console */}
                  <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                    telemetry.sirenActive
                      ? 'bg-red-950/60 border-red-500/80 text-red-200'
                      : 'bg-black/60 border-white/15 text-slate-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        telemetry.sirenActive ? 'bg-brand-red text-white' : 'bg-white/10 text-white'
                      }`}>
                        {telemetry.sirenActive ? <AlertTriangle className="w-4 h-4" /> : <Wind className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold">
                          {telemetry.sirenActive ? 'AUTOMATIC PROTECTION OVERRIDE ENGAGED' : 'CLIMATE STABILITY ENGINE RUNNING'}
                        </div>
                        <div className="text-[11px] opacity-80">
                          {telemetry.acAction}
                        </div>
                      </div>
                    </div>
                    {telemetry.sirenActive && (
                      <span className="text-[10px] font-mono font-bold bg-brand-red text-white px-2 py-1 rounded-md animate-pulse shrink-0">
                        SIREN ACTIVE
                      </span>
                    )}
                  </div>

                  {/* Device Status Bar */}
                  <div className="mt-5 pt-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>Battery: {telemetry.batteryLevel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio className="w-3 h-3 text-brand-red" />
                      <span>Mesh Signal: {telemetry.meshSignal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-brand-red" />
                      <span>5-Year Warranty</span>
                    </div>
                  </div>

                </div>

                {/* Quick Spec Highlights */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/90 shadow-2xs">
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">Measurement Accuracy</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">±0.1°C Temp / ±1.5% RH</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/90 shadow-2xs">
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">Trigger Latency</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-600">&lt;200ms Local Mesh Action</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ── 3 Core Hardware Models Section ── */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Hardware Portfolio
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                Engineered for Residential Villas, IT Data Centers & Cold Chains
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Model 1: TempSense Air */}
              <div className="bg-white rounded-[28px] border border-gray-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-black transition-all">
                <div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 bg-[#0D111A]">
                    <img 
                      src="/media/temperature_sensor_hardware.jpg" 
                      alt="Neurolinx TempSense Air Wireless Sensor"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                    Residential & Luxury Suites
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-2 mb-1">
                    TempSense Air
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Ultra-compact magnetic mount wireless sensor with Swiss Sensirion SHT40 core, crystal-clear OLED display, and 5-year battery life.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Magnetic wall & bedside table dock</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>High-contrast live OLED status screen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>CR2477 coin cell with 5-year endurance</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Standard Room Model</span>
                  <a href="#contact-consultation" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Model 2: TempGuard Pro */}
              <div className="bg-white rounded-[28px] border-2 border-black p-6 shadow-md flex flex-col justify-between relative">
                <div className="absolute -top-3 right-6 bg-brand-red text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Enterprise Grade
                </div>
                <div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 bg-[#0D111A]">
                    <img 
                      src="/media/temperature_monitoring_dashboard.jpg" 
                      alt="Neurolinx TempGuard Pro Enterprise Controller"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200">
                    Server Rooms & Cold Chains
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-2 mb-1">
                    TempGuard Pro
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    DIN-Rail and 19" rack-mount industrial climate controller with dual external thermal probes, PoE power, and integrated siren relay contacts.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Dual stainless steel thermal probe inputs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Modbus RTU / RS485 & dry contact alarms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Direct siren and exhaust fan interlock</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Industrial DIN/Rack</span>
                  <a href="#contact-consultation" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Model 3: ClimateMesh Multi-Zone Gateway */}
              <div className="bg-white rounded-[28px] border border-gray-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-black transition-all">
                <div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 bg-[#0D111A]">
                    <img 
                      src="/media/temperature_monitor_hero.jpg" 
                      alt="Neurolinx ClimateMesh IoT Gateway"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Central Automation Hub
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-2 mb-1">
                    ClimateMesh Gateway
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    High-capacity centralized IoT gateway interconnecting up to 64 wireless climate nodes with 100% offline edge rule execution and cloud logging.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Connects 64 wireless temperature sensors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>4G LTE cellular fallback & Wi-Fi mesh</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Exportable CSV / PDF 24/7 audit logs</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Multi-Zone Hub</span>
                  <a href="#contact-consultation" className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1">
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ── Key Architectural Features Grid ── */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-3">
                <Wind className="w-4 h-4 text-brand-red" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">Automated AC Pre-Cooling</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wirelessly triggers Universal IR Blaster or smart AC relays the second room temperature crosses your custom comfort threshold.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-3">
                <Bell className="w-4 h-4 text-brand-red" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">Triple-Channel Alert Engine</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emergency push notification to mobile devices, SMS/Webhook dispatch, and local high-decibel audible alarm on thermal spikes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-3">
                <FileText className="w-4 h-4 text-emerald-400" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">24/7 Regulatory Audit Logs</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous telemetry logging with timestamped exportable PDF/Excel reports compliant with ISO 9001 and cold-chain compliance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
              </div>
              <h5 className="text-sm font-bold text-slate-900">100% Offline Local Mesh</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sensors trigger HVAC relays and local sirens across the local mesh network with zero dependency on external cloud or active internet.
              </p>
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

      {/* ── Slide 3: Have Questions? Consultation & Contact Form (Matching Standard Previous Slides) ── */}
      <div id="contact-consultation" className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container */}
          <div className="rounded-[32px] md:rounded-[36px] border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
            
            {/* Left Panel: Pure White Background */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-white px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100/80">
              
              <div>
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
                      <Phone className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 7013486961</span>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@neurolinx.in" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <Mail className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold">info@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-relaxed">
                      NEUROLINX GLOBAL PRIVATE LIMITED, C12/A, Industrial Area, Kushaiguda, Hyderabad, Secunderabad, Telangana 500062
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Panel: Soft Light Gray Background Form */}
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex-1">
              {inquirySubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    We have received your climate monitoring inquiry. Our environmental IoT engineering team will review your specifications and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Temperature Monitor & Alert Systems Setup',
                        projectType: 'Penthouse / Living Residence',
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
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Automation For (Selected Model)</label>
                      <input 
                        type="text" 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Project Type</label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({...inquiryForm, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>Penthouse / Luxury Residence</option>
                        <option>Server Room / IT Data Center</option>
                        <option>Wine Cellar / Cold Chain Facility</option>
                        <option>Commercial Office & Hospital</option>
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
                        'Real-Time Ambient Temperature & Humidity',
                        'Critical Heat Spike Siren Alarms',
                        'Smart AC / HVAC Auto-Triggering',
                        '24/7 Cloud Logging & Compliance Reports'
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
