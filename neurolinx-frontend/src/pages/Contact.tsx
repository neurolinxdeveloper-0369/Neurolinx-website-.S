import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Home, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight,
  Headphones,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    spaceType: 'Home / Residential',
    interestedIn: [] as string[],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const productOptions = [
    'Retrofit Touch Panels',
    'Smart Switches & Modules',
    'Motorized Smart Curtains',
    'Universal IR Blaster',
    'Smart Energy Meters',
    'Smart Water Control',
    'Dealership / Distribution'
  ];

  const handleCheckbox = (option: string) => {
    setFormData(prev => {
      const exists = prev.interestedIn.includes(option);
      return {
        ...prev,
        interestedIn: exists 
          ? prev.interestedIn.filter(item => item !== option)
          : [...prev.interestedIn, option]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Can I install Neurolinx smart switches without changing my existing wiring?",
      a: "Yes! All Neurolinx modules and retrofit touch panels are engineered specifically for standard Indian wall boxes. There is zero wall destruction, zero conduit breaking, and no rewiring required."
    },
    {
      q: "Do your smart devices work if the home internet drops?",
      a: "Absolutely. Neurolinx systems operate on a resilient local mesh protocol. Your physical feather-touch switches, preset scene controllers, and local smartphone controls continue to work seamlessly even without an internet connection."
    },
    {
      q: "How can I book an in-person demo or experience center visit?",
      a: "Simply submit the consultation form on this page or call our concierge line at +91 70134 86961. We will schedule a personalized walk-through at our Experience Studio or arrange a live on-site demo."
    },
    {
      q: "What warranty and service support do you offer?",
      a: "Every Neurolinx smart automation component comes backed by a comprehensive replacement warranty framework, continuous OTA firmware updates, and direct manufacturer technical support."
    }
  ];

  const offices = [
    {
      city: "Hyderabad",
      title: "Corporate HQ & Experience Studio",
      address: "C12/A, Industrial Area, Kushaiguda, ECIL Post, Secunderabad, Telangana 500062",
      phone: "+91 70134 86961",
      email: "info@neurolinx.in",
      hours: "Mon - Sat: 9:30 AM - 7:00 PM",
      isPrimary: true
    },
    {
      city: "Bengaluru",
      title: "R&D & Embedded Systems Lab",
      address: "Outer Ring Road, Bellandur Tech Corridor, Bengaluru, Karnataka 560103",
      phone: "+91 70134 86961",
      email: "bangalore@neurolinx.in",
      hours: "Mon - Fri: 9:00 AM - 6:30 PM",
      isPrimary: false
    },
    {
      city: "Pune",
      title: "Western Regional Hub",
      address: "Kharadi IT Park, Pune, Maharashtra 411014",
      phone: "+91 70134 86961",
      email: "pune@neurolinx.in",
      hours: "Mon - Fri: 9:30 AM - 6:30 PM",
      isPrimary: false
    }
  ];

  return (
    <div className="w-full bg-[#F8F8F8] text-slate-800 font-body selection:bg-brand-red selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO BANNER - SMARTNODE STYLE SIMPLE & NEAT                           */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E0001B] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Us
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Let’s Make Your Space <span className="text-[#E0001B]">Smarter Together.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you are looking to automate your home, modernize commercial infrastructure, or explore dealer partnerships, our automation specialists are here to guide you.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. QUICK CONTACT CARDS (4-COL GRID)                                      */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <a 
            href="tel:+917013486961" 
            className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 group hover:-translate-y-1 block"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E0001B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#E0001B] transition-colors">Call Us Directly</h2>
            <p className="text-xs text-gray-500 mb-2">Instant technical & sales advice</p>
            <span className="text-sm font-semibold text-gray-800 group-hover:text-[#E0001B] transition-colors">+91 70134 86961</span>
          </a>

          <a 
            href="mailto:info@neurolinx.in" 
            className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 group hover:-translate-y-1 block"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Email Enquiries</h2>
            <p className="text-xs text-gray-500 mb-2">Replies within 4 business hours</p>
            <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">info@neurolinx.in</span>
          </a>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1">Corporate Office</h2>
            <p className="text-xs text-gray-500 mb-2">Headquarters & Experience Studio</p>
            <span className="text-xs font-semibold text-gray-700 leading-tight block">Kushaiguda, Hyderabad</span>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1">Working Hours</h2>
            <p className="text-xs text-gray-500 mb-2">Monday through Saturday</p>
            <span className="text-xs font-semibold text-gray-700 leading-tight block">9:30 AM – 7:00 PM IST</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN FORM & CONSULTATION DETAILS                                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#E0001B] uppercase tracking-wider">Free Consultation</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mt-1">Book a Smart Home Demo</h2>
              <p className="text-sm text-gray-500 mt-2">Fill in your requirements and our solutions architect will connect with a tailored proposal.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">Thank You! Your Request Has Been Received.</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Our smart automation specialist will contact you at <span className="font-semibold">{formData.phone || formData.email}</span> within 24 hours to schedule your consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-full transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Space Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    What Space Are You Automating?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['Home / Residential', 'Commercial / Office', 'Hotel / Hospitality', 'Dealer / Partner Inquiry'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, spaceType: type })}
                        className={`px-3 py-2.5 text-xs font-semibold rounded-xl border transition-all text-left truncate ${
                          formData.spaceType === type
                            ? 'bg-[#E0001B] text-white border-[#E0001B] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#E0001B]/20 focus:border-[#E0001B] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#E0001B]/20 focus:border-[#E0001B] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#E0001B]/20 focus:border-[#E0001B] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">City / Location *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hyderabad, Bengaluru, etc." 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#E0001B]/20 focus:border-[#E0001B] transition-all"
                    />
                  </div>
                </div>

                {/* Product Interests Multi-select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Solutions You Are Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {productOptions.map((opt) => {
                      const isChecked = formData.interestedIn.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleCheckbox(opt)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                            isChecked
                              ? 'bg-red-50 text-[#E0001B] border-red-200 font-semibold shadow-xs'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '}{opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Remarks */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Additional Requirements or Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the size of your space (e.g. 3BHK, Villa, Office floor), number of rooms, or specific smart features you require..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#E0001B]/20 focus:border-[#E0001B] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-gray-400 text-center">
                  🔒 We respect your privacy. No spam, ever. Your information is protected on secure servers.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Why Choose Neurolinx & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Value Proposition Box */}
            <div className="bg-gradient-to-br from-gray-900 to-[#121826] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#E0001B]/15 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-[11px] uppercase tracking-widest text-red-400 font-bold block mb-2">The Neurolinx Advantage</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold leading-snug mb-4">
                Smart Home Technology Engineered for Indian Homes
              </h3>
              
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0001B]/20 text-[#E0001B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Zero Rewiring:</strong> Fully retrofit behind your existing switch plates without damaging interior paint or breaking walls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0001B]/20 text-[#E0001B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>5-Year Replacement Framework:</strong> Industrial-grade endurance with quick direct manufacturer warranty replacement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0001B]/20 text-[#E0001B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>100% Offline Resilience:</strong> Works flawlessly over local Wi-Fi / mesh even when broadband internet is down.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0001B]/20 text-[#E0001B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Indian Cloud Servers:</strong> Total telemetry data security and privacy hosted on fast domestic servers.</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Over 15,000+ Rooms Automated</span>
                <span className="text-red-400 font-semibold">100% In-House R&D</span>
              </div>
            </div>

            {/* Direct Assistance Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E0001B] flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Need Immediate Help?</h4>
                  <p className="text-xs text-gray-500">Speak directly with an automation consultant.</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Whether you have an urgent architectural question or need technical wiring schematics, our senior engineers are on standby.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="tel:+917013486961"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold text-center transition-colors"
                >
                  Call +91 70134 86961
                </a>
                <a
                  href="https://wa.me/917013486961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold text-center transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPERIENCE CENTERS & REGIONAL HUBS                                     */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#E0001B] uppercase tracking-wider">Experience Centers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1">
              Visit Our Experience Studios
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Experience the magic of feather-touch crystal glass switches, voice commands, and automated motorized curtains in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  office.isPrimary 
                    ? 'bg-gradient-to-b from-white to-red-50/20 border-red-200 shadow-md' 
                    : 'bg-white border-gray-100 hover:border-gray-200 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E0001B]">{office.city}</span>
                    {office.isPrimary && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0001B] text-white">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{office.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{office.address}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-3.5 h-3.5 text-[#E0001B]" />
                    <a href={`tel:${office.phone}`} className="hover:underline font-medium">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-3.5 h-3.5 text-[#E0001B]" />
                    <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ)                                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#E0001B] uppercase tracking-wider">Help & Answers</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mt-1">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-500 mt-2">Everything you need to know about getting started with Neurolinx smart automation.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#E0001B] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#E0001B]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION FOOTER BANNER                                          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-black text-white rounded-t-[40px] md:rounded-t-[60px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">Ready to Elevate Your Living Space?</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Explore our complete lineup of touch switches, motorized curtains, and smart sensors.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/home-automation"
              className="px-6 py-3 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
