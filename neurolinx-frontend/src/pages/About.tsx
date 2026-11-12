import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowDown, 
  ArrowRight, 
  Linkedin, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Cpu, 
  Award, 
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
  const [expandedMilestones, setExpandedMilestones] = useState<Record<number, boolean>>({});

  // Milestones: 100% of facts, dates, achievements and points preserved
  const milestones: Milestone[] = [
    {
      year: "2026",
      title: "Developed FogPass (Fog Pilot Assistance System)",
      image: "/media/fog_pass.png",
      tag: "Railways Safety Innovation",
      summary: "Engineered and developed the advanced FogPass locomotive assistance system with real-time GPS positioning and rugged fail-safe architecture.",
      points: [
        "Engineered and developed the advanced FogPass device for railway locomotives to navigate dense fog and low-visibility conditions with zero speed delays.",
        "Equipped with high-accuracy GPS positioning, real-time audio-visual distance countdown to upcoming signals, and rugged fail-safe hardware tailored for loco pilots.",
        "Expanded our smart technology footprint across mission-critical transportation and automated infrastructure."
      ]
    },
    {
      year: "2025",
      title: "Foot Lamp Project Completion & Railway Signal Exchanging",
      image: "/media/signaling_systems.jpg",
      tag: "Railway Milestones",
      summary: "Delivered high-durability coach illumination and automated trackside communication protocols for Indian railway networks.",
      points: [
        "Successfully completed the end-to-end Railway Foot Lamp project, delivering high-durability, energy-efficient illumination for coaches and platforms.",
        "Engineered and completed the Railway Signal Exchanging project, enhancing automated trackside communication and locomotive exchange protocols.",
        "Strengthened in-house precision manufacturing, quality testing, and field compliance certifications."
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

  const toggleMilestone = (index: number) => {
    setExpandedMilestones(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
    <div className="w-full bg-[#08090D] text-white font-body selection:bg-[#E5092C] selection:text-white overflow-x-hidden">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION – Modern Corporate Technology Hero                         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#08090D] pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 border-b border-[#292A32]/80">
        
        {/* Subtle dark-red radial glow behind the main heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[340px] sm:h-[420px] bg-[#E5092C]/[0.08] rounded-full blur-[160px] pointer-events-none"></div>

        {/* Ambient grid overlay pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow Badge */}
          <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17181E] border border-[#292A32] text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
            <span>About Neurolinx Global</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="reveal-item font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Powered by People. Driven by <span className="text-[#E5092C] inline-block">Smart Innovation.</span>
          </h1>

          {/* Section Lead Paragraph */}
          <p className="reveal-item font-body text-[#A1A1AA] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-5 sm:mt-6 px-2 font-normal">
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
              className="font-body inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#17181E] hover:bg-[#202129] border border-[#292A32] hover:border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-300 group"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:translate-x-1 group-hover:text-white transition-all" />
            </Link>
          </div>



        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE – Modern Split Layout (Two-Column)                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#101116] relative border-b border-[#292A32]/80">
        
        {/* Subtle ambient red background blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#E5092C]/[0.05] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Who We Are & Overview */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              {/* Eyebrow Badge */}
              <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17181E] border border-[#292A32] text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
                <span>Who We Are</span>
              </div>

              {/* Section H2 Heading */}
              <h2 className="reveal-item font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                <span className="text-[#E5092C]">Innovating</span> Today to Empower Tomorrow’s Smart Living
              </h2>

              {/* Section Lead Paragraph */}
              <p className="reveal-item font-body text-[#A1A1AA] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                Neurolinx is India’s foremost pioneer in wireless and wired IoT electrical automation. Born from a relentless passion for innovation, we engineer hardware and software that make residential, commercial, hospitality, and healthcare environments effortless, energy-efficient, and intelligently responsive.
              </p>

              {/* Achievements & Credibility Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="reveal-card flex items-center gap-3 p-3.5 rounded-xl bg-[#17181E] border border-[#292A32]">
                  <Cpu className="w-5 h-5 text-[#E5092C] shrink-0" />
                  <span className="font-body text-xs sm:text-sm font-semibold text-white">100% In-House R&amp;D</span>
                </div>
                <div className="reveal-card flex items-center gap-3 p-3.5 rounded-xl bg-[#17181E] border border-[#292A32]">
                  <Award className="w-5 h-5 text-[#E5092C] shrink-0" />
                  <span className="font-body text-xs sm:text-sm font-semibold text-white">Made In India Excellence</span>
                </div>
                <div className="reveal-card flex items-center gap-3 p-3.5 rounded-xl bg-[#17181E] border border-[#292A32]">
                  <ShieldCheck className="w-5 h-5 text-[#E5092C] shrink-0" />
                  <span className="font-body text-xs sm:text-sm font-semibold text-white">Rail-Grade Safety Standards</span>
                </div>
                <div className="reveal-card flex items-center gap-3 p-3.5 rounded-xl bg-[#17181E] border border-[#292A32]">
                  <CheckCircle2 className="w-5 h-5 text-[#E5092C] shrink-0" />
                  <span className="font-body text-xs sm:text-sm font-semibold text-white">Certified Cloud Architecture</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Separate Cards for Vision & Mission */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Vision Card */}
              <div className="reveal-card bg-[#17181E] border border-[#292A32] hover:border-[#E5092C]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[#101116] border border-[#292A32] group-hover:border-[#E5092C]/50 group-hover:bg-[#E5092C]/10 flex items-center justify-center p-3 shrink-0 transition-all duration-300 shadow-inner">
                    <img 
                      src="/media/about/our-vision-red.png" 
                      alt="Our Vision Icon" 
                      className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(229,9,44,0.45)]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-body inline-block text-[10px] sm:text-[11px] font-bold text-[#E5092C] tracking-wider uppercase mb-1">
                      Forward Horizon
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight group-hover:text-[#E5092C] transition-colors mb-2">
                      Our Vision
                    </h3>
                    <p className="font-body text-[#A1A1AA] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                      The purpose is to make the life of people smarter &amp; better.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="reveal-card bg-[#17181E] border border-[#292A32] hover:border-[#E5092C]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[#101116] border border-[#292A32] group-hover:border-[#E5092C]/50 group-hover:bg-[#E5092C]/10 flex items-center justify-center p-3 shrink-0 transition-all duration-300 shadow-inner">
                    <img 
                      src="/media/about/our-mission-red.png" 
                      alt="Our Mission Icon" 
                      className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(229,9,44,0.45)]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-body inline-block text-[10px] sm:text-[11px] font-bold text-[#E5092C] tracking-wider uppercase mb-1">
                      Core Commitment
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight group-hover:text-[#E5092C] transition-colors mb-2">
                      Our Mission
                    </h3>
                    <p className="font-body text-[#A1A1AA] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                      The mission is to be the leading player in the IoT-based Electrical industry.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR STORY – Compact & Premium Interactive Timeline                      */}
      {/* ========================================================================= */}
      <section id="our-story" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#08090D] relative border-b border-[#292A32]/80">
        
        {/* Subtle ambient red glow on the timeline side */}
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#E5092C]/[0.05] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Sticky Overview & Story Illustration */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              
              {/* Eyebrow Badge */}
              <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17181E] border border-[#292A32] text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
                <span>Milestones &amp; Evolution</span>
              </div>

              {/* Section H2 Heading */}
              <h2 className="reveal-item font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Our <span className="text-[#E5092C]">Story</span>
              </h2>

              {/* Section Lead Paragraph */}
              <p className="reveal-item font-body text-[#A1A1AA] text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                Founded in 2024, our journey has rapidly advanced from specialized railway safety engineering and pilot electronics to next-gen intelligent home automation and mission-critical signaling innovations.
              </p>

              {/* Story Illustration Card */}
              <div className="reveal-card rounded-2xl sm:rounded-3xl overflow-hidden bg-[#17181E] p-5 sm:p-6 md:p-8 border border-[#292A32] shadow-2xl max-w-lg w-full">
                <img 
                  src="/media/about/our-story.png" 
                  alt="Our Story Illustration" 
                  className="w-full h-auto object-contain mx-auto max-h-[260px] sm:max-h-[300px] md:max-h-[330px] filter drop-shadow-lg" 
                />
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg w-full">
                <div className="reveal-card bg-[#17181E] p-4 sm:p-5 rounded-2xl border border-[#292A32] text-center shadow-lg hover:border-[#E5092C]/40 transition-colors">
                  <span className="block font-display font-black text-xl sm:text-2xl md:text-3xl text-[#E5092C]">2024–2026</span>
                  <span className="font-body text-[10px] sm:text-[11px] text-[#A1A1AA] uppercase tracking-wider font-semibold mt-1 block">Active Roadmaps</span>
                </div>
                <div className="reveal-card bg-[#17181E] p-4 sm:p-5 rounded-2xl border border-[#292A32] text-center shadow-lg hover:border-[#E5092C]/40 transition-colors">
                  <span className="block font-display font-black text-xl sm:text-2xl md:text-3xl text-white">Safety Certified</span>
                  <span className="font-body text-[10px] sm:text-[11px] text-[#A1A1AA] uppercase tracking-wider font-semibold mt-1 block">Mission Critical</span>
                </div>
              </div>
            </div>

            {/* Right Column: Compact Vertical Timeline */}
            <div className="lg:col-span-7">
              <div className="relative pl-6 sm:pl-7 border-l-2 border-[#292A32] space-y-4 sm:space-y-5">
                
                {milestones.map((item, index) => {
                  const isExpanded = !!expandedMilestones[index];

                  return (
                    <div key={index} className="reveal-card relative group">
                      
                      {/* Milestone Glowing Indicator Node */}
                      <div className="absolute -left-[31px] sm:-left-[35px] top-4 z-20 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#08090D] border-2 border-[#E5092C] shadow-md shadow-[#E5092C]/50 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E5092C]"></div>
                        </div>
                      </div>

                      {/* Milestone Card */}
                      <div className="bg-[#17181E] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#292A32] hover:border-[#E5092C]/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        
                        {/* Header: Year & Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                          <span className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-[#E5092C] transition-colors tracking-tight">
                            {item.year}
                          </span>
                          <span className="font-body text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E5092C]/10 text-[#E5092C] border border-[#E5092C]/25 tracking-wide">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title & Project Image */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-2.5">
                          {item.image && (
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#08090D] border border-[#292A32] p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug tracking-tight">
                              {item.title}
                            </h3>
                            <p className="font-body text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal mt-1">
                              {item.summary}
                            </p>
                          </div>
                        </div>

                        {/* Expandable Points Content */}
                        <div className="pt-2 border-t border-[#292A32]/80">
                          
                          {/* First point always visible */}
                          <div className="font-body text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] mt-1.5 shrink-0"></span>
                            <span>{item.points[0]}</span>
                          </div>

                          {/* Remaining points toggle smoothly */}
                          {isExpanded && (
                            <div className="space-y-1.5 mt-2 pt-2 border-t border-[#292A32]/60 animate-fadeIn">
                              {item.points.slice(1).map((p, pIdx) => (
                                <div key={pIdx} className="font-body text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] mt-1.5 shrink-0"></span>
                                  <span>{p}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Read More / Show Less Toggle Button */}
                          <button
                            type="button"
                            onClick={() => toggleMilestone(index)}
                            className="font-body mt-2.5 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white hover:text-[#E5092C] transition-colors cursor-pointer group/btn"
                          >
                            <span>{isExpanded ? 'Show Less' : `Read More Details (${item.points.length - 1} more)`}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[#E5092C]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[#E5092C] group-hover/btn:translate-y-0.5 transition-transform" />
                            )}
                          </button>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MEET OUR FOUNDERS – Executive Profile Grid (All 4 Founders)             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#101116] relative border-b border-[#292A32]/80">
        
        {/* Subtle ambient red glow behind founders */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#E5092C]/[0.05] rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            
            {/* Eyebrow Badge */}
            <div className="reveal-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17181E] border border-[#292A32] text-[11px] font-bold tracking-widest uppercase text-[#E5092C] mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5092C] animate-pulse"></span>
              <span>Leadership Team</span>
            </div>

            {/* Section H2 Heading */}
            <h2 className="reveal-item font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Meet Our <span className="text-[#E5092C]">Founders</span>
            </h2>

            {/* Section Lead Paragraph */}
            <p className="reveal-item font-body text-[#A1A1AA] text-sm sm:text-base md:text-lg leading-relaxed font-normal mt-4">
              Driven by purpose and powered by passion, meet the executive leaders shaping the future of smart living and precision electronics.
            </p>
          </div>

          {/* Executive Team Grid: 4 cards on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {founders.map((founder, idx) => (
              <div 
                key={idx}
                className="reveal-card bg-[#17181E] rounded-2xl border border-[#292A32] hover:border-[#E5092C]/60 transition-all duration-300 p-5 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#E5092C]/10"
              >
                <div>
                  
                  {/* Portrait Container */}
                  <div 
                    onClick={() => setSelectedFounder(founder)}
                    className="aspect-[4/5] rounded-xl overflow-hidden bg-[#08090D] border border-[#292A32] mb-5 relative group-hover:border-[#E5092C]/40 transition-colors cursor-pointer"
                  >
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    
                    {/* Subtle bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17181E] via-transparent to-transparent opacity-80" />

                    {/* Role Pill Badge */}
                    <div className="font-body absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#08090D]/90 border border-[#292A32] text-xs font-bold text-[#E5092C] tracking-wider uppercase backdrop-blur-md">
                      {founder.role}
                    </div>
                  </div>

                  {/* Founder Name & Designation */}
                  <h3 
                    onClick={() => setSelectedFounder(founder)}
                    className="font-display font-bold text-xl text-white tracking-tight group-hover:text-[#E5092C] transition-colors cursor-pointer"
                  >
                    {founder.name}
                  </h3>
                  <div className="font-body text-xs text-[#A1A1AA] font-semibold uppercase tracking-wider mt-0.5">
                    Co-Founder &amp; {founder.role}
                  </div>

                  {/* Short Bio Preview */}
                  <p className="font-body text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mt-3 line-clamp-3 font-normal">
                    {founder.bio}
                  </p>

                </div>

                {/* Footer Actions: Read Full Bio & LinkedIn */}
                <div className="border-t border-[#292A32] pt-4 mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedFounder(founder)}
                    className="font-body inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#E5092C] transition-colors cursor-pointer"
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
                      className="w-8 h-8 rounded-lg bg-[#08090D] hover:bg-[#0077b5] text-[#A1A1AA] hover:text-white border border-[#292A32] flex items-center justify-center transition-colors shadow-sm"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedFounder(null)}
        >
          <div 
            className="bg-[#17181E] border border-[#292A32] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 md:p-10 text-left"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedFounder(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#08090D] hover:bg-[#E5092C] text-[#A1A1AA] hover:text-white border border-[#292A32] flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left: Founder Portrait */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-[#08090D] border border-[#292A32] shadow-xl mb-4">
                  <img 
                    src={selectedFounder.image} 
                    alt={selectedFounder.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-1">
                  {selectedFounder.name}
                </h3>
                <div className="font-body px-3.5 py-1 rounded-full bg-[#E5092C]/10 border border-[#E5092C]/30 text-[#E5092C] text-xs font-bold uppercase tracking-wider mb-4">
                  {selectedFounder.role} &bull; Co-Founder
                </div>
                {selectedFounder.linkedin && (
                  <a
                    href={selectedFounder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#08090D] hover:bg-[#0077b5] px-4 py-2.5 rounded-xl border border-[#292A32] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:text-white" />
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
                  <p className="font-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
                    {selectedFounder.bio}
                  </p>
                </div>

                {selectedFounder.quote && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#101116] border border-[#292A32] relative">
                    <Quote className="w-6 h-6 text-[#E5092C]/40 mb-2" />
                    <p className="font-body text-sm sm:text-base italic text-white/90 leading-snug font-medium">
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
