import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Navigation,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Offices() {
  const offices = [
    {
      city: "Hyderabad",
      tag: "Corporate Headquarters & Flagship Experience Center",
      badge: "Main Studio",
      address: "C12/A, Industrial Area, Kushaiguda, ECIL Post, Secunderabad, Telangana 500062",
      phone: "+91 70134 86961",
      email: "info@neurolinx.in",
      hours: "Monday – Saturday: 9:30 AM – 7:00 PM",
      features: [
        "Full-room live smart home simulation (touch panels, curtains, ambient dimming)",
        "Railway electronics & FogPass device testing bay",
        "Direct consultation with core product engineers",
        "Custom glass switchboard engraving & finish sample library"
      ],
      isPrimary: true
    },
    {
      city: "Bengaluru",
      tag: "R&D Lab & Embedded Systems Hub",
      badge: "Innovation Lab",
      address: "Outer Ring Road, Bellandur Tech Corridor, Bengaluru, Karnataka 560103",
      phone: "+91 70134 86961",
      email: "bangalore@neurolinx.in",
      hours: "Monday – Friday: 9:00 AM – 6:30 PM",
      features: [
        "Advanced wireless mesh protocol & RF testing",
        "Switch mode power supply (SMPS) thermal verification lab",
        "Architect & luxury builder integration studio"
      ],
      isPrimary: false
    },
    {
      city: "Pune",
      tag: "Western Regional Hub & Demo Center",
      badge: "Regional Studio",
      address: "Kharadi IT Park, Pune, Maharashtra 411014",
      phone: "+91 70134 86961",
      email: "pune@neurolinx.in",
      hours: "Monday – Friday: 9:30 AM – 6:30 PM",
      features: [
        "Residential luxury automation product showcase",
        "Certified installer training center",
        "On-demand architectural sample kits"
      ],
      isPrimary: false
    }
  ];

  const highlights = [
    {
      title: "Hands-on Live Simulation",
      desc: "Experience feather-touch tempered crystal switches, voice commands, and motorized curtains in a true-to-life home setting."
    },
    {
      title: "Expert Architectural Advice",
      desc: "Bring your floor plans for customized junction box sizing, conduit layouts, and load schedule optimization."
    },
    {
      title: "Zero-Rewiring Validation",
      desc: "See directly how our compact retrofit modules slot cleanly behind standard Indian backboxes without damaging plaster."
    }
  ];

  return (
    <div className="w-full bg-[#F8F8F8] text-slate-800 font-body selection:bg-brand-red selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO BANNER - SIMPLE & NEAT                                            */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E0001B] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Global Presence & Studios
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Experience Centers & <span className="text-[#E0001B]">Regional Offices.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Step into a Neurolinx Experience Center to feel the luxury of feather-touch crystal glass automation and see real-time smart integration in action.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE HIGHLIGHT VALUE CARDS                                           */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E0001B] flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#E0001B] transition-colors">{h.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OFFICES & STUDIOS LIST                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E0001B] font-bold">Our Locations</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1">
            Find an Experience Center Near You
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Our doors are open to homeowners, architects, interior designers, and prospective dealer partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <div 
              key={idx} 
              className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                office.isPrimary 
                  ? 'bg-white border-red-200 shadow-xl relative' 
                  : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E0001B] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    {office.city}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {office.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">{office.tag}</h3>
                
                <div className="flex items-start gap-2.5 text-xs text-gray-600 mb-5 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#E0001B] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>

                <div className="space-y-2 py-4 border-t border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-3.5 h-3.5 text-[#E0001B]" />
                    <a href={`tel:${office.phone}`} className="font-semibold hover:underline">{office.phone}</a>
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

                <div className="mt-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2.5">Studio Capabilities:</h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {office.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className={`w-full py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center ${
                    office.isPrimary
                      ? 'bg-[#E0001B] hover:bg-red-700 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule a Studio Visit</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CALL TO ACTION                                                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-black text-white rounded-t-[40px] md:rounded-t-[60px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">Planning a New Build or Renovation?</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Our team provides complimentary junction box layout design and technical load audits.</p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
