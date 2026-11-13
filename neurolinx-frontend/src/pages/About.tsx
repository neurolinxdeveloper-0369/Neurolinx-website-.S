import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowDown, 
  ArrowRight, 
  Linkedin, 
  ExternalLink, 
  X, 
  Quote 
} from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  image: string;
  tag: string;
  summary: string;
  points: string[];
}

interface Founder {
  name: string;
  role: string;
  bio: string;
  quote?: string;
  image: string;
  linkedin: string;
}

export function About() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  // Milestones: 100% of facts, dates, achievements and points preserved
  const milestones: Milestone[] = [
    {
      year: "2026",
      title: "FogPass — Fog Pilot Assistance System",
      image: "/media/fog_pass.png",
      tag: "Railways Safety Innovation",
      summary: "Engineered and developed the advanced FogPass locomotive assistance system with real-time GPS positioning and rugged fail-safe architecture.",
      points: [
        "Developed FogPass, an advanced Fog Pilot Assistance System for railway locomotives, designed to support loco pilots during dense fog and low-visibility conditions.",
        "The system provides high-accuracy GPS/GNSS positioning, real-time audio-visual distance countdowns for upcoming signals and landmarks, and rugged fail-safe hardware tailored for locomotive operations.",
        "FogPass strengthens our presence in mission-critical transportation and automated infrastructure, supporting safer and more confident train operations in challenging weather conditions."
      ]
    },
    {
      year: "2025",
      title: "Foot Lamp Project Completion & Railway Signal Exchange",
      image: "/media/signaling_systems.jpg",
      tag: "Railway Milestones",
      summary: "Delivered high-durability coach illumination and automated trackside communication protocols for Indian railway networks.",
      points: [
        "Successfully completed the end-to-end Railway Foot Lamp project, delivering durable, energy-efficient illumination for railway coaches and platforms.",
        "Engineered and completed the Railway Signal Exchange System, enabling automated communication between locomotive crews and station staff.",
        "Strengthened in-house precision manufacturing, quality testing, and field-compliance processes."
      ]
    },
    {
      year: "2024",
      title: "Company Founding, Railway Foot Lamp & Home Automation R&D",
      image: "/media/foot_lamps.png",
      tag: "Foundation & Launch",
      summary: "Incorporated Neurolinx Global with dual focus on mission-critical railway electronics and next-gen IoT smart home systems.",
      points: [
        "Founded our company in 2024 with a vision to revolutionize smart technology, electronic control systems, and transportation engineering.",
        "Completed initial railway electronic projects, including the pilot design and validation of the specialized Foot Lamp system.",
        "Kicked off intensive R&D for next-generation IoT Home Automation products, including capacitive touch glass switchboards, wireless relays, and app integration."
      ]
    }
  ];

  // Founders: 100% of original bio, quotes, roles, names, and images preserved
  const founders: Founder[] = [
    {
      name: "V.V Bharath",
      role: "CEO",
      bio: "Vallabhaneni Venkata Bharath Chowdary Chief Executive Officer and son of Vallabhaneni Venkata Ram.He Holds Bachelor degree in Electronic and Communication and Masters degree in Electrical Engineering from California state University Fullerton. Young but 15 Years of experience in Electronics. Identifying the New Products for development and drive the Product to a fully running Prototype.",
      quote: "Take care of minutes, hours will take care of themselves",
      image: "/media/about/vv-bharath.png",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Sai Pavan S",
      role: "CTO",
      bio: "Sai Pavan Sudha is a seasoned technology leader with more than 2 decades of experience in the design, development, and deployment of automation systems tailored for the railway, utility, and home sectors. He leads cutting-edge initiatives in embedded systems, SCADA solutions, and IoT-based automation, driving digital transformation across critical infrastructure. Throughout his career, Sai Pavan has held key leadership roles, including Technical Project Manager at Ashine Techno Drives and Deputy Manager at AMI Tech India Pvt. Ltd., where he successfully led high-impact projects focused on railway and utility automation systems. His expertise lies in delivering robust, scalable, and innovative automation solutions that meet the evolving demands of modern infrastructure.",
      image: "/media/about/sai-pavan.png",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "V Harshitha",
      role: "CFO",
      bio: "V Harshitha is the one of the director and co-founder of Neurolinx Global Private Limited. She holds degree in Electronics and Instrumention and holds a master’s degree in MBA, specialized in Operation and Finance from Vignan Jyothi Institute of Management, Hyderabad. After her studies, she gained some experience in accounts and financing by handling accounts in her father’s firm. Currently she is holding the position of Head of Finance.",
      quote: "Every situation gives us some experience; Experience is best teacher it will make us learn new things",
      image: "/media/about/v-harshitha.png",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "V Prabhath",
      role: "CSO",
      bio: "Prabhath Chowdary Vallabhaneni is a results-driven leader with deep expertise in marketing, hospitality, and restaurant management. As Managing Partner at Neurolinx Global Pvt. Ltd. (since Nov 2024), he drives strategic growth and innovation. He also leads operations at Seven A Luxury Hotel (since Jul 2018) and Spice Nation Restaurant (since Oct 2020), focusing on guest satisfaction, revenue growth, and brand excellence. Armed with an MBA from GRIET and a BBM from Gitams Vizag, Prabhath excels in digital marketing, brand strategy, business development, hospitality management, team leadership, and CRM.",
      quote: "Leadership is not about titles, it's about impact, influence, and inspiration",
      image: "/media/about/v-prabhath.png",
      linkedin: "https://www.linkedin.com"
    }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard accessibility and body scroll lock for founder modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFounder(null);
      }
    };
    if (selectedFounder) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFounder]);

  return (
    <div className="w-full bg-white text-slate-900 font-body selection:bg-[#E5092C] selection:text-white overflow-x-hidden">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION – Modern Corporate Technology Hero                         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 border-b border-gray-200">
        
        {/* Subtle red radial glow behind the main heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[340px] sm:h-[420px] bg-[#E5092C]/[0.05] rounded-full blur-[160px] pointer-events-none"></div>

        {/* Ambient grid overlay pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow Badge */}
          <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
            <span>About Neurolinx Global</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="reveal-item font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Powered by People. Driven by <span className="text-[#E5092C] inline-block">Smart Innovation.</span>
          </h1>

          {/* Section Lead Paragraph */}
          <p className="reveal-item font-body text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-5 sm:mt-6 px-2 font-normal">
            Transforming spaces across India through intuitive IoT automation, precision engineering, and customer-first design.
          </p>

          {/* Action Buttons */}
          <div className="reveal-item mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('our-story')}
              className="font-body inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E5092C] hover:bg-[#d00827] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#E5092C]/25 hover:shadow-[#E5092C]/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Our Journey</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <Link
              to="/contact"
              className="font-body inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-gray-200 hover:border-slate-300 text-slate-800 text-xs sm:text-sm font-medium transition-all duration-300 group shadow-sm"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-[#E5092C] transition-all" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE – Modern Split Layout (Two-Column)                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-6 xl:px-10 bg-white relative border-b border-gray-200">
        
        {/* Subtle ambient red background blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#E5092C]/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Who We Are & Overview */}
            <div className="lg:col-span-7 space-y-5 text-left lg:pr-6">
              
              {/* Eyebrow Badge */}
              <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
                <span>Who We Are</span>
              </div>

              {/* Section H2 Heading */}
              <h2 className="reveal-item font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[30px] xl:text-[38px] text-slate-900 tracking-tight leading-tight">
                <span className="sm:whitespace-nowrap">
                  <span className="text-[#E5092C]">Innovating</span> Today to Empower
                </span>
                <br className="hidden sm:inline" /> Tomorrow’s Smart Living
              </h2>

              {/* Who We Are Subtitle */}
              <p className="reveal-item font-body text-slate-800 text-base sm:text-lg md:text-xl font-medium tracking-tight">
                Smart technology for effortless living, efficient operations, and intelligent spaces.
              </p>

              {/* Section Lead Paragraphs */}
              <div className="space-y-4">
                <p className="reveal-item font-body text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left sm:text-justify">
                  <span className="font-semibold"><span className="text-[#E5092C]">Neuro</span><span className="text-[#4B4C4C]">linx</span></span> is an Indian IoT and automation technology company creating intelligent hardware and software for smarter homes, workplaces, hospitality spaces, and healthcare environments.
                </p>
                <p className="reveal-item font-body text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left sm:text-justify">
                  We design and develop solutions that make spaces more comfortable, secure, energy-efficient, and responsive. Our products combine wireless and wired automation, IoT connectivity, embedded electronics, cloud dashboards, and mobile applications.
                </p>
                <p className="reveal-item font-body text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left sm:text-justify">
                  From smart switches, touch panels, IR control, and curtain automation to IoT hubs, energy monitoring, and custom software platforms, <span className="font-semibold"><span className="text-[#E5092C]">Neuro</span><span className="text-[#4B4C4C]">linx</span></span> delivers complete solutions for modern living and business needs.
                </p>
                <p className="reveal-item font-body text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left sm:text-justify">
                  We believe technology should work quietly in the background—making everyday life simpler, spaces more efficient, and operations more intelligent.
                </p>
              </div>

            </div>

            {/* Right Column: Premium Separate Cards for Vision & Mission */}
            <div className="lg:col-span-5 grid grid-cols-1 auto-rows-fr gap-4 sm:gap-5 lg:mt-14">
              
              {/* Vision Card */}
              <div className="reveal-card h-full flex items-center bg-white border border-gray-200 hover:border-[#E5092C]/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50/70 border border-red-100 group-hover:border-[#E5092C]/40 group-hover:bg-red-50 flex items-center justify-center p-2.5 shrink-0 transition-all duration-300">
                    <img 
                      src="/media/about/our-vision-red.png" 
                      alt="Our Vision Icon" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(229,9,44,0.2)]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-body inline-block text-[10px] sm:text-[11px] font-bold text-[#E5092C] tracking-wider uppercase mb-1">
                      Forward Horizon
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight group-hover:text-[#E5092C] transition-colors mb-1.5">
                      Our Vision
                    </h3>
                    <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      To become a trusted Indian technology company delivering intelligent, secure, and reliable IoT, automation, energy, railway, and industrial solutions that improve everyday life and business performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="reveal-card h-full flex items-center bg-white border border-gray-200 hover:border-[#E5092C]/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50/70 border border-red-100 group-hover:border-[#E5092C]/40 group-hover:bg-red-50 flex items-center justify-center p-2.5 shrink-0 transition-all duration-300">
                    <img 
                      src="/media/about/our-mission-red.png" 
                      alt="Our Mission Icon" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(229,9,44,0.2)]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-body inline-block text-[10px] sm:text-[11px] font-bold text-[#E5092C] tracking-wider uppercase mb-1">
                      Core Commitment
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight group-hover:text-[#E5092C] transition-colors mb-1.5">
                      Our Mission
                    </h3>
                    <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      To design and deliver practical technology products that combine robust hardware, intelligent software, secure connectivity, and dependable support—helping customers automate operations, save energy, improve safety, and make better decisions.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR STORY (MILESTONES TIMELINE)                                        */}
      {/* ========================================================================= */}
      <section id="our-story" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAF9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left Sticky Column: Overview & Illustration */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-4">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E0001B] font-bold">
                  Our Evolution
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1 leading-tight">
                  Our <span className="text-[#E0001B]">Story</span>
                </h2>
                <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                  Founded in 2024, our journey has rapidly advanced from specialized railway safety engineering and pilot electronics to next-gen intelligent home automation and mission-critical signaling innovations.
                </p>
              </div>

              {/* Story Illustration Card */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white p-3 sm:p-4 shadow-sm border border-gray-100 w-full">
                <img 
                  src="/media/about/our-story.png" 
                  alt="Our Story Illustration" 
                  className="w-full h-auto object-contain mx-auto max-h-[210px] sm:max-h-[240px]"
                />
              </div>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-lg sm:text-xl font-display font-extrabold text-[#E0001B]">2024</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 uppercase font-medium block">Inception Year</span>
                </div>
                <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-lg sm:text-xl font-display font-extrabold text-[#E0001B]">3+</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 uppercase font-medium block">Railways Systems</span>
                </div>
                <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-base sm:text-lg font-display font-extrabold text-[#E0001B]">FogPass</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 uppercase font-medium block">Flagship Tech</span>
                </div>
                <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-base sm:text-lg font-display font-extrabold text-[#E0001B]">IoT R&D</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 uppercase font-medium block">Home Automation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline Cards */}
            <div className="lg:col-span-7">
              <div className="relative pl-5 sm:pl-7 md:pl-8 border-l-2 border-red-200/80 grid grid-cols-1 auto-rows-fr gap-3 sm:gap-3.5">
                {milestones.map((item, index) => (
                  <div key={index} className="relative group flex">
                    {/* Glowing Bullet centered exactly on the 2px left border */}
                    <div className="absolute -left-[21px] sm:-left-[29px] md:-left-[33px] -translate-x-1/2 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-[3px] sm:border-4 border-[#E0001B] shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Content Card */}
                    <div className="w-full bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 sm:mb-2">
                        <span className="text-lg sm:text-xl font-display font-black text-[#E0001B] tracking-tight">
                          {item.year}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-100">
                          {item.tag}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start text-center sm:text-left">
                        {item.image && (
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-slate-50 border border-gray-100 shrink-0 p-1 flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-[15px] font-display font-bold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <ul className="space-y-1 text-[11px] sm:text-xs text-gray-600 leading-snug list-disc list-outside pl-4 text-left">
                            {item.points.map((p, pIdx) => (
                              <li key={pIdx} className="text-gray-600">
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MEET OUR FOUNDERS – Executive Profile Grid (All 4 Founders)             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative border-b border-gray-200">
        
        {/* Subtle ambient red glow behind founders */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#E5092C]/[0.04] rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            
            {/* Eyebrow Badge */}
            <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
              <span>Leadership Team</span>
            </div>

            {/* Section H2 Heading */}
            <h2 className="reveal-item font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Meet Our <span className="text-[#E5092C]">Founders</span>
            </h2>

            {/* Section Lead Paragraph */}
            <p className="reveal-item font-body text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal mt-4">
              Driven by purpose and powered by passion, meet the executive leaders shaping the future of smart living and precision electronics.
            </p>
          </div>

          {/* Executive Team Grid: 4 cards on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {founders.map((founder, idx) => (
              <div 
                key={idx}
                className="reveal-card bg-white rounded-2xl border border-gray-200 hover:border-[#E5092C]/50 transition-all duration-300 p-5 flex flex-col justify-between group hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-slate-200/80"
              >
                <div>
                  
                  {/* Portrait Container */}
                  <div 
                    onClick={() => setSelectedFounder(founder)}
                    className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-gray-200 mb-5 relative group-hover:border-[#E5092C]/40 transition-colors cursor-pointer"
                  >
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    
                    {/* Subtle bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-70" />

                    {/* Role Pill Badge */}
                    <div className="font-body absolute bottom-3 left-3 px-3 py-1 rounded-md bg-white/95 border border-gray-200 text-xs font-bold text-[#E5092C] tracking-wider uppercase backdrop-blur-md shadow-sm">
                      {founder.role}
                    </div>
                  </div>

                  {/* Founder Name & Designation */}
                  <h3 
                    onClick={() => setSelectedFounder(founder)}
                    className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-[#E5092C] transition-colors cursor-pointer"
                  >
                    {founder.name}
                  </h3>
                  <div className="font-body text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    Co-Founder &amp; {founder.role}
                  </div>

                  {/* Short Bio Preview */}
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 line-clamp-3 font-normal">
                    {founder.bio}
                  </p>

                </div>

                {/* Footer Actions: Read Full Bio & LinkedIn */}
                <div className="border-t border-gray-100 pt-4 mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedFounder(founder)}
                    className="font-body inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 group-hover:text-[#E5092C] transition-colors cursor-pointer"
                  >
                    <span>Read Biography</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E5092C]" />
                  </button>

                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} LinkedIn Profile`}
                      className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#0077b5] text-slate-600 hover:text-white border border-gray-200 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXECUTIVE PROFILE MODAL (Full details, quotes & credentials)             */}
      {/* ========================================================================= */}
      {selectedFounder && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedFounder(null)}
        >
          <div 
            className="bg-white border border-gray-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 md:p-10 text-left"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedFounder(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-[#E5092C] text-slate-600 hover:text-white border border-gray-200 flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left: Founder Portrait */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 border border-gray-200 shadow-md mb-4">
                  <img 
                    src={selectedFounder.image} 
                    alt={selectedFounder.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 tracking-tight mb-1">
                  {selectedFounder.name}
                </h3>
                <div className="font-body px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E5092C] text-xs font-bold uppercase tracking-wider mb-4">
                  {selectedFounder.role} &bull; Co-Founder
                </div>
                {selectedFounder.linkedin && (
                  <a
                    href={selectedFounder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-[#0077b5] hover:text-white px-4 py-2.5 rounded-xl border border-gray-200 transition-colors group/li"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5] group-hover/li:text-white" />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>

              {/* Right: Full Detailed Biography & Quote */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h4 className="font-body text-xs uppercase tracking-widest text-[#E5092C] font-bold mb-2">
                    Executive Biography
                  </h4>
                  <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {selectedFounder.bio}
                  </p>
                </div>

                {selectedFounder.quote && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200 relative">
                    <Quote className="w-6 h-6 text-[#E5092C]/40 mb-2" />
                    <p className="font-body text-sm sm:text-base italic text-slate-800 leading-snug font-medium">
                      &ldquo;{selectedFounder.quote}&rdquo;
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
