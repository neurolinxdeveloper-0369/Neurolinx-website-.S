import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb, 
  Fan, 
  Power, 
  Sun, 
  Moon, 
  Sparkles, 
  Volume2, 
  Lock, 
  CheckCircle2,
  Tv,
  Thermometer,
  ShieldAlert
} from 'lucide-react';

export function ExperienceView() {
  const [lightsOn, setLightsOn] = useState(true);
  const [fanSpeed, setFanSpeed] = useState(2);
  const [activeScene, setActiveScene] = useState<'normal' | 'cinematic' | 'night' | 'eco'>('normal');
  const [temperature, setTemperature] = useState(24);
  const [curtainsOpen, setCurtainsOpen] = useState(80);
  const [doorLocked, setDoorLocked] = useState(true);

  const applyScene = (scene: 'normal' | 'cinematic' | 'night' | 'eco') => {
    setActiveScene(scene);
    if (scene === 'cinematic') {
      setLightsOn(false);
      setCurtainsOpen(0);
      setFanSpeed(1);
    } else if (scene === 'night') {
      setLightsOn(false);
      setCurtainsOpen(0);
      setFanSpeed(2);
      setTemperature(22);
    } else if (scene === 'eco') {
      setLightsOn(true);
      setCurtainsOpen(100);
      setFanSpeed(1);
      setTemperature(26);
    } else {
      setLightsOn(true);
      setCurtainsOpen(80);
      setFanSpeed(2);
      setTemperature(24);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-body pt-24 pb-20">
      
      {/* Header bar */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-b border-white/10">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live Interactive Demo</span>
        </div>
      </div>

      {/* Main Experience Hero */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight mb-4">
          Interactive <span className="text-emerald-400">Experience View</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg mb-12">
          Experience real-time responsive automation. Toggle appliances, switch living scenes, and feel zero-latency offline mesh control.
        </p>

        {/* Interactive Dashboard Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left: Virtual Room Simulation Visual */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Virtual Room Simulator</span>
                <h3 className="text-xl font-bold text-white">Smart Living Suite</h3>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${
                lightsOn ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              }`}>
                {lightsOn ? 'Ambient Illumination On' : 'Night Dim Mode'}
              </span>
            </div>

            {/* Room Light Glow Box */}
            <div className={`h-64 rounded-2xl border transition-all duration-700 flex flex-col items-center justify-center relative overflow-hidden ${
              lightsOn 
                ? 'bg-gradient-to-b from-amber-500/20 via-slate-900 to-black border-amber-500/30 shadow-[0_0_80px_rgba(245,158,11,0.25)]' 
                : 'bg-gradient-to-b from-blue-950/40 via-slate-950 to-black border-blue-900/30'
            }`}>
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold text-gray-300">
                <Thermometer className="w-4 h-4 text-emerald-400" />
                <span>Indoor Temp: {temperature}°C</span>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 text-xs font-semibold text-gray-300">
                <span>Curtains: {curtainsOpen}% Open</span>
              </div>

              {/* Status Graphic */}
              <div className="text-center z-10">
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-500 ${
                  lightsOn ? 'bg-amber-400 text-black shadow-2xl shadow-amber-400/60 scale-110' : 'bg-slate-800 text-gray-500'
                }`}>
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {lightsOn ? 'Warm Ambient Cove Active' : 'Low Light Ambience'}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Active Scene: <strong className="text-white capitalize">{activeScene}</strong> • Fan Speed {fanSpeed}/4
                </p>
              </div>
            </div>

            {/* Quick Scenes */}
            <div className="mt-6">
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-3">One-Touch Scene Presets</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => applyScene('normal')}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all text-left ${
                    activeScene === 'normal' 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Sun className="w-4 h-4 mb-2" />
                  Daylight Normal
                </button>
                <button
                  onClick={() => applyScene('cinematic')}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all text-left ${
                    activeScene === 'cinematic' 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Tv className="w-4 h-4 mb-2" />
                  Cinema Night
                </button>
                <button
                  onClick={() => applyScene('night')}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all text-left ${
                    activeScene === 'night' 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Moon className="w-4 h-4 mb-2" />
                  Deep Sleep
                </button>
                <button
                  onClick={() => applyScene('eco')}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all text-left ${
                    activeScene === 'eco' 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mb-2" />
                  Eco Solar Sync
                </button>
              </div>
            </div>

          </div>

          {/* Right: Interactive Hardware Touch Board */}
          <div className="lg:col-span-5 bg-slate-900/90 border-2 border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Hardware Switch Panel</span>
                <h3 className="text-lg font-bold text-white">8-Gang Touch Glass</h3>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                0ms Latency
              </span>
            </div>

            <div className="space-y-4">
              
              {/* Toggle 1: Main Lighting */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    lightsOn ? 'bg-amber-400 text-black' : 'bg-white/10 text-gray-400'
                  }`}>
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Main Room Lights</h5>
                    <span className="text-xs text-gray-400">{lightsOn ? 'ON (100% Brightness)' : 'OFF'}</span>
                  </div>
                </div>
                <button
                  onClick={() => setLightsOn(!lightsOn)}
                  className={`w-12 h-7 rounded-full p-1 transition-colors flex items-center ${
                    lightsOn ? 'bg-emerald-500 justify-end' : 'bg-slate-700 justify-start'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-md"></span>
                </button>
              </div>

              {/* Toggle 2: Hum-Free Ceiling Fan */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                      <Fan className={`w-4 h-4 ${fanSpeed > 0 ? 'animate-spin' : ''}`} style={{ animationDuration: `${5 - fanSpeed}s` }} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">BLDC Ceiling Fan</h5>
                      <span className="text-xs text-gray-400">Speed Level: {fanSpeed} / 4</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setFanSpeed(spd)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        fanSpeed === spd 
                          ? 'bg-cyan-500 text-black' 
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {spd === 0 ? 'Off' : `${spd}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle 3: Motorized Curtains */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">Smart Curtains</span>
                  <span className="text-xs text-emerald-400 font-bold">{curtainsOpen}% Open</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={curtainsOpen}
                  onChange={(e) => setCurtainsOpen(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              {/* Toggle 4: Smart Lock */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    doorLocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Main Entrance Lock</h5>
                    <span className="text-xs text-gray-400">{doorLocked ? 'Armed & Locked' : 'Unlocked'}</span>
                  </div>
                </div>
                <button
                  onClick={() => setDoorLocked(!doorLocked)}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  {doorLocked ? 'Unlock' : 'Lock'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
