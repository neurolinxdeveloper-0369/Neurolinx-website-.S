import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Home, 
  Cpu, 
  Target, 
  Users, 
  Lightbulb, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award
} from 'lucide-react';

export function Careers() {
  // Set document SEO title & meta description
  useEffect(() => {
    document.title = "Careers & Life at Neurolinx | Engineering the Future | Neurolinx Global";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Discover life at Neurolinx. Where innovation, technology, and creativity come together across Smart Home Automation, IoT, Embedded Systems, Railways, RMS, Robotics, and Semiconductors.'
    );
    window.scrollTo(0, 0);
  }, []);

  // 1. Life at Neurolinx Culture Pillars
  const culturePillars = [
    {
      title: "First-Principles Engineering",
      subtitle: "Uncompromising Rigor",
      desc: "We question standard assumptions from the physical silicon and firmware levels upward, designing hardware architectures engineered for zero-latency execution and decades of operational endurance.",
      image: "/media/about_us_lab.jpg",
      icon: Cpu,
      tag: "Core Culture"
    },
    {
      title: "Mission-Critical Precision",
      subtitle: "Zero-Failure Standard",
      desc: "Whether developing RDSO-compliant railway collision prevention systems or high-voltage industrial SMPS modules, our engineering standard is absolute dependability under extreme environments.",
      image: "/media/careers/global_impact.jpg",
      icon: ShieldCheck,
      tag: "Engineering Standard"
    },
    {
      title: "Multidisciplinary Collaboration",
      subtitle: "Synergy Without Silos",
      desc: "Silicon architects, embedded C developers, cloud telemetry engineers, and industrial designers collaborate shoulder-to-shoulder in flat teams where great ideas triumph over hierarchy.",
      image: "/media/careers/inclusive_culture.jpg",
      icon: Users,
      tag: "Team Synergy"
    },
    {
      title: "Continuous Exploration",
      subtitle: "Curiosity & Lab Access",
      desc: "Our engineers have direct access to state-of-the-art testing benches, spectrum analyzers, thermal imaging suites, and multi-protocol IoT simulation racks to iterate rapidly on new concepts.",
      image: "/media/careers/continuous_growth.jpg",
      icon: Lightbulb,
      tag: "R&D Freedom"
    }
  ];

  // 2. Our Vision Pillars
  const visionPillars = [
    {
      icon: Target,
      title: "Purpose-Driven Innovation",
      desc: "We focus our engineering talents on technologies that solve genuine industrial and societal challenges: preventing rail accidents, conserving energy, and building enduring electronic infrastructure."
    },
    {
      icon: Users,
      title: "Interdisciplinary Collaboration",
      desc: "Breakthrough solutions happen at the intersection of disciplines. We cultivate a culture where hardware engineers, software developers, and product designers challenge and inspire each other daily."
    },
    {
      icon: Compass,
      title: "Continuous Learning & Mastery",
      desc: "Technology evolves continuously. We foster an environment that champions intellectual curiosity, encourages prototyping experiments, and supports deep mastery of emerging engineering tools."
    },
    {
      icon: Award,
      title: "Future-Focused Engineering",
      desc: "We build for permanence. Our products are engineered with wide operating tolerances, reinforced surge protection, and upgradable architectures designed to deliver reliable service for decades."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-body selection:bg-brand-red selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. PREMIUM HERO SECTION                                                  */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-white border-b border-gray-200 text-slate-900 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-red-600/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 text-[#E0001B] text-xs font-bold uppercase tracking-wider mb-6 border border-red-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span>Pioneering Engineering &amp; Technology</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto">
            Build the Future <span className="text-[#E0001B] inline-block">With Neurolinx</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Where innovation, technology, and creativity come together to shape tomorrow.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#culture"
              className="px-8 py-3.5 rounded-full bg-[#E0001B] hover:bg-[#c00017] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/30 hover:scale-105 flex items-center gap-2"
            >
              <span>Explore Life &amp; Culture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact-info"
              className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider border border-gray-300 transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Technology Pillars Bar */}
          <div className="mt-14 pt-10 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">7+</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Core Domains</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">100%</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Hardware &amp; Software In-House</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">RDSO</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Railway Standards Certified</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">Mission</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Critical Reliability</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LIFE AT NEUROLINX (Mission, Innovation Approach, Culture)              */}
      {/* ========================================================================= */}
      <section id="culture" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E0001B] text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
            <Users className="w-3.5 h-3.5" />
            <span>Culture &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
            Life at Neurolinx
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            We are driven by a shared mission: to build intelligent hardware and connected systems that solve complex, real-world challenges with unwavering reliability.
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Visual Header */}
                <div className="h-48 w-full overflow-hidden relative bg-gray-900 shrink-0">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#E0001B] border border-gray-200/80 shadow-xs uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-full bg-[#E0001B] flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">{pillar.subtitle}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2.5 group-hover:text-[#E0001B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Quote Callout */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 via-red-50/40 to-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#E0001B] font-bold">Our Engineering Thesis</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 leading-snug">
              "Great engineering is silent. It performs flawlessly in freezing locomotive cabins, quiet homes, and high-voltage industrial floors."
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              At Neurolinx, we do not build disposable software wrappers. We forge end-to-end electronic hardware, robust real-time firmware, and deeply integrated cloud infrastructure designed to stand the test of time.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center sm:items-start text-center sm:text-left gap-2 border-t lg:border-t-0 lg:border-l border-gray-200/80 pt-6 lg:pt-0 lg:pl-8">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Neurolinx Global Private Limited</p>
            <p className="text-sm font-bold text-gray-900">Electronics, Automation &amp; AI Systems</p>
            <span className="text-xs text-red-600 font-medium">Hyderabad • Secunderabad • Telangana</span>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. OUR VISION (Innovation, Collaboration, Continuous Learning)            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-y border-gray-200 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-4 border border-red-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Future-Focused Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Guiding principles that steer our research, shape our team culture, and drive every circuit board, algorithm, and system we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-brand-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-400">
                    <span>Pillar 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0001B]" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPANY CONTACT SECTION (General Corporate Inquiries Only)             */}
      {/* ========================================================================= */}
      <section id="contact-info" className="py-20 sm:py-28 bg-white border-t border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E0001B] text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
              <Mail className="w-3.5 h-3.5" />
              <span>Connect With Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
              Company Contact &amp; Headquarters
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              Reach out to our corporate headquarters for engineering consultations, system integration inquiries, and strategic technology partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Card 1: Headquarters Address */}
            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E0001B] flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">Corporate Headquarters</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Neurolinx Global Private Limited<br />
                  C12/A, Industrial Area, Kushaiguda,<br />
                  Hyderabad, Secunderabad,<br />
                  Telangana 500062, India
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-400 font-medium">
                Registered R&amp;D Facility &amp; Labs
              </div>
            </div>

            {/* Contact Card 2: Phone Inquiries */}
            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E0001B] flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">Telephone Inquiries</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Speak directly with our technical support and corporate solutions specialists:
                </p>
                <div className="space-y-1.5">
                  <p className="text-sm font-semibold text-gray-900">+91 7013486961</p>
                  <p className="text-sm font-semibold text-gray-900">+91 8074067851</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-400 font-medium">
                Mon – Sat: 9:00 AM – 6:00 PM IST
              </div>
            </div>

            {/* Contact Card 3: Email Inquiries */}
            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E0001B] flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">Corporate Correspondence</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  For formal communications, institutional proposals, and technical advisories:
                </p>
                <div className="space-y-1.5">
                  <p className="text-sm font-semibold text-gray-900">support@neurolinx.in</p>
                  <p className="text-sm font-semibold text-gray-900">info@neurolinx.in</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-400 font-medium">
                Official Corporate Inquiries
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
