import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowLeft, 
  Cpu, 
  Train, 
  Home, 
  CheckCircle2, 
  Send 
} from 'lucide-react';

export function ExperienceView() {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Smart Home Simulation');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('neurolinx_form_leads') || '[]');
      existing.push({
        type: 'Experience View Waitlist',
        email,
        interest,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('neurolinx_form_leads', JSON.stringify(existing));
    } catch {
      // Fallback
    }
    setSubmitted(true);
  };

  const previewModules = [
    {
      icon: Home,
      title: "Interactive Smart Home Twin",
      desc: "Simulate glass touch panels, real-time curtain automation, and mesh-network lighting scenes in real-time 3D."
    },
    {
      icon: Train,
      title: "Loco Telemetry & FogPass HUD",
      desc: "Experience locomotive driver assistance with real-time GPS countdowns and trackside signal diagnostics."
    },
    {
      icon: Cpu,
      title: "Silicon & IoT Sandbox",
      desc: "Explore ASIC prototyping architectures, industrial RMS smart metering nodes, and edge sensor pipelines."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white font-body relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Background Ambient Red Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-400 mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-brand-red" />
            <span>Neurolinx Virtual Experience Studio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-tight mb-6">
            Launching <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-rose-400">Soon</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We are engineering a fully immersive 3D digital simulation suite that lets you test-drive our smart home systems, locomotive safety hardware, and IoT electronics directly in your browser.
          </p>
        </div>

        {/* Feature Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {previewModules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md hover:border-brand-red/40 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Early Access / Waitlist Box */}
        <div className="max-w-xl mx-auto bg-zinc-950/80 border border-white/10 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur-xl">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
            Get Priority Beta Access
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-6">
            Be the first to experience our interactive 3D virtual environment when it opens.
          </p>

          {submitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <p className="text-sm font-bold text-emerald-200">You're on the priority invite list!</p>
              <p className="text-xs text-emerald-300/80">We'll email you your exclusive pass as soon as the Studio launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate or personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-brand-red hover:bg-[#b00015] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-red/25 shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Request Invite</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                <span>Select area:</span>
                {['Smart Home', 'Railways', 'Semiconductors'].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setInterest(opt)}
                    className={`px-2.5 py-1 rounded-full text-[11px] transition-colors ${
                      interest === opt ? 'bg-white/20 text-white font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
            <Link to="/home-automation" className="text-xs text-gray-400 hover:text-brand-red transition-colors">
              Explore Products &rarr;
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="text-xs text-gray-400 hover:text-brand-red transition-colors">
              Contact Solutions Engineers &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceView;
