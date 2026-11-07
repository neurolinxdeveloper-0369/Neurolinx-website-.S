import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  Building2, 
  Send, 
  Check, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Headphones 
} from 'lucide-react';

export function PosDemoRequest() {
  const [demoForm, setDemoForm] = useState({
    name: '',
    businessName: '',
    businessType: 'Retail Store / Boutique',
    phone: '',
    email: '',
    terminals: '1 - 2 Terminals (Single Store)',
    requirements: ''
  });

  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F8F9FA] min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-28 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/pos-application" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-red transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to POS Application</span>
          </Link>

          <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
            Neurolinx Guided Demo
          </span>
        </div>

        {/* Main Card Container (Matches User Screenshot) */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.04] rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Value Proposition & Direct Contact */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                <span>INTERACTIVE CONSULTATION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 leading-tight">
                Upgrade Your Business with Neurolinx POS
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                Discover a smarter way to manage retail sales, restaurant orders, and everyday billing operations with Neurolinx POS Application.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-gray-200 flex items-center justify-center text-brand-red shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Direct Consultation: +91 91000 00000</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-gray-200 flex items-center justify-center text-brand-red shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Enterprise Desk: contact@neurolinx.in</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-gray-200 flex items-center justify-center text-brand-red shrink-0 shadow-xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Hyderabad • Bangalore • Global Operations</span>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-gray-200 w-full flex items-center justify-between">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  CONTACT US PAGE
                </Link>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>No obligation • Free demo</span>
                </div>
              </div>
            </div>

            {/* Right Column: Demo Booking Form */}
            <div className="lg:col-span-7 bg-[#FCFCFD] border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              {demoSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Demo Request Received!</h3>
                  <p className="text-sm text-gray-600 max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{demoForm.name || 'valued partner'}</span>. Our POS specialist will contact you shortly at <span className="font-semibold text-slate-800">{demoForm.phone || 'your phone number'}</span> to schedule your live walkthrough session.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setDemoSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <Link
                      to="/pos-application"
                      className="px-6 py-2.5 rounded-full bg-brand-red text-xs font-bold text-white hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
                    >
                      Return to POS Application
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 font-display">
                    Schedule a Guided Software Demo
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={demoForm.name}
                          onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Name *</label>
                        <input
                          type="text"
                          required
                          value={demoForm.businessName}
                          onChange={(e) => setDemoForm({ ...demoForm, businessName: e.target.value })}
                          placeholder="e.g. Apex Supermarket"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Type</label>
                        <select
                          value={demoForm.businessType}
                          onChange={(e) => setDemoForm({ ...demoForm, businessType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors cursor-pointer"
                        >
                          <option value="Retail Store / Boutique">Retail Store / Boutique</option>
                          <option value="Supermarket / Grocery Mart">Supermarket / Grocery Mart</option>
                          <option value="Restaurant / Dine-In">Restaurant / Dine-In</option>
                          <option value="Café / Coffee Shop">Café / Coffee Shop</option>
                          <option value="Multi-Brand Store">Multi-Brand Store</option>
                          <option value="Other Retail Business">Other Retail Business</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={demoForm.phone}
                          onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Business Email Address *</label>
                      <input
                        type="email"
                        required
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        placeholder="manager@store.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Expected Counters / Billing Terminals</label>
                      <select
                        value={demoForm.terminals}
                        onChange={(e) => setDemoForm({ ...demoForm, terminals: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="1 - 2 Terminals (Single Store)">1 - 2 Terminals (Single Store)</option>
                        <option value="3 - 5 Terminals (Medium Mart)">3 - 5 Terminals (Medium Mart)</option>
                        <option value="6 - 15 Terminals (Supermarket)">6 - 15 Terminals (Supermarket)</option>
                        <option value="Multi-Location Enterprise Chain">Multi-Location Enterprise Chain</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Additional Requirements (Optional)</label>
                      <textarea
                        rows={3}
                        value={demoForm.requirements}
                        onChange={(e) => setDemoForm({ ...demoForm, requirements: e.target.value })}
                        placeholder="Describe your current billing challenges, hardware requirements, or launch timeline..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-gray-200 text-slate-900 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 cursor-pointer mt-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      <span>Request Guided POS Demo</span>
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>

        </div>

        {/* Feature Badges under the form */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">15-Minute Guided Walkthrough</h4>
              <p className="text-xs text-slate-600 mt-0.5">Live demonstration customized to your retail or restaurant workflow.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Custom Architecture & Pricing</h4>
              <p className="text-xs text-slate-600 mt-0.5">Clear terminal licensing and optional thermal printer/scanner support.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Dedicated Support Engineer</h4>
              <p className="text-xs text-slate-600 mt-0.5">Assistance with on-premise installation, staff training, and data migration.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
