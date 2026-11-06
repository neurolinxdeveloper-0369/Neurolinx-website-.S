import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft,
  ChevronRight, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Pause
} from 'lucide-react';

export function About() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [currentFounder, setCurrentFounder] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const milestones = [
    {
      year: "2026",
      title: "Developed FogPass (Fog Pilot Assistance System)",
      image: "/media/fog_pass.png",
      tag: "Railways Safety Innovation",
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
      points: [
        "Founded our company in 2024 with a vision to revolutionize smart technology, electronic control systems, and transportation engineering.",
        "Completed initial railway electronic projects, including the pilot design and validation of the specialized Foot Lamp system.",
        "Kicked off intensive R&D for next-generation IoT Home Automation products, including capacitive touch glass switchboards, wireless relays, and app integration."
      ]
    }
  ];

  const founders = [
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

  const coreValues = [
    {
      name: "Integrity",
      icon: "/media/about/integrity.png",
      desc: "Unwavering commitment to honesty, safety, and transparent engineering in every product."
    },
    {
      name: "Customer Centric",
      icon: "/media/about/customer-centric.png",
      desc: "Designing intuitive, hassle-free solutions focused around real user convenience."
    },
    {
      name: "Inventive Mindset",
      icon: "/media/about/inventive.png",
      desc: "Continuous curiosity and bold innovation that redefine what modern automation can do."
    },
    {
      name: "Empowerment",
      icon: "/media/about/empowerment.png",
      desc: "Giving individuals and partners total mastery and autonomy over their spaces."
    },
    {
      name: "Collective Victory",
      icon: "/media/about/collective-victory.png",
      desc: "Collaborative growth where company, partners, and customers thrive together."
    }
  ];

  const nextFounder = () => {
    setCurrentFounder(prev => (prev + 1) % founders.length);
  };

  const prevFounder = () => {
    setCurrentFounder(prev => (prev - 1 + founders.length) % founders.length);
  };

  useEffect(() => {
    if (isAutoplayPaused) return;
    const timer = setInterval(() => {
      setCurrentFounder(prev => (prev + 1) % founders.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplayPaused, founders.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> scroll right to left
      nextFounder();
    } else if (distance < -50) {
      // Swiped right -> scroll left to right
      prevFounder();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-800 font-body overflow-x-hidden">

      {/* 1. HERO BANNER */}
      <section className="relative w-full min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px] overflow-hidden flex items-center justify-center bg-black py-12 sm:py-16">
        <img 
          src="/media/about/Banner.png" 
          alt="Neurolinx About Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0001B]/15 border border-[#E0001B]/30 text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E0001B] animate-pulse"></span>
            About Our Journey
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Powered by People, Driven by <span className="text-[#E0001B] inline-block">Smart Innovation</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Transforming spaces across India through intuitive IoT automation, precision engineering, and customer-first design.
          </p>
        </div>
      </section>


      {/* 2. INNOVATING TODAY SECTION (VISION & MISSION) */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 text-[11px] sm:text-xs font-semibold rounded-md uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0001B]"></span>
                Who We Are
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-display font-bold text-gray-900 leading-[1.25]">
                <span className="text-[#E0001B]">Innovating</span> Today to Empower Tomorrow’s Smart Living
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                Neurolinx is India’s foremost pioneer in wireless and wired IoT electrical automation. Born from a relentless passion for innovation, we engineer hardware and software that make residential, commercial, hospitality, and healthcare environments effortless, energy-efficient, and intelligently responsive.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0001B] shrink-0" />
                  <span className="font-semibold text-gray-800">100% In-House R&D</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0001B] shrink-0" />
                  <span className="font-semibold text-gray-800">Made In India</span>
                </div>
              </div>
            </div>

            {/* Right Column: Vision & Mission Dual Card */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-[#FFF9F9] to-[#FFF0F1] border border-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm space-y-6 sm:space-y-8">
                
                {/* Vision Block */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-red-200/60 shadow-sm flex items-center justify-center p-3 sm:p-3.5 shrink-0">
                    <img 
                      src="/media/about/our-vision.png" 
                      alt="Our Vision" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-900 mb-1.5 sm:mb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      The purpose is to make the life of people smarter & better.
                    </p>
                  </div>
                </div>

                <div className="border-t border-red-200/50"></div>

                {/* Mission Block */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-red-200/60 shadow-sm flex items-center justify-center p-3 sm:p-3.5 shrink-0">
                    <img 
                      src="/media/about/our-mission.png" 
                      alt="Our Mission" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-900 mb-1.5 sm:mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      The mission is to be the leading player in the IoT-based Electrical industry.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES SECTION */}
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0E131F] text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#E0001B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Side: Core Values Description */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-center lg:text-left">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-red-400 font-semibold">
                Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight">
                Our Core <span className="text-[#E0001B]">Values</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
                Guided by purpose and powered by innovation, our values define how we think, build, and lead.
              </p>
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-[#E0001B] hover:bg-[#c00017] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-red-900/30 group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side: Core Values Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
                {coreValues.map((val, index) => (
                  <div 
                    key={index} 
                    className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#161C2E] border border-white/5 hover:border-[#E0001B]/40 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center p-2.5 sm:p-3 mb-3 sm:mb-4 group-hover:bg-[#E0001B]/10 transition-colors">
                      <img 
                        src={val.icon} 
                        alt={val.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-base sm:text-lg font-display font-bold text-white mb-1.5 sm:mb-2 group-hover:text-red-400 transition-colors">
                      {val.name}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR CULTURE SECTION */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">
              Our <span className="text-[#E0001B]">Culture</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 italic">
              "Much like our wireless automation, our people are connected with unseen wires of bonding, trust, integrity, and empathy."
            </p>
          </div>

          {/* 3-Column Cultural Collage & Video */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Center Video Card on top for mobile, middle for desktop */}
            <div className="lg:order-2 lg:col-span-6 w-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-black aspect-video flex items-center justify-center group">
                <video 
                  ref={videoRef}
                  src="/media/about/About-Smart-node-video.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
                
                {/* Control overlay */}
                <button 
                  onClick={toggleVideo} 
                  className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-all shadow-lg hover:scale-105 cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <div className="absolute top-3 sm:top-5 left-3 sm:left-5 bg-black/50 backdrop-blur-md text-white text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E0001B] animate-ping"></span>
                  Life at Neurolinx
                </div>
              </div>
            </div>

            {/* Left Photo Column */}
            <div className="lg:order-1 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 group">
                <img 
                  src="/media/about/our-culture1.png" 
                  alt="Our Culture 1" 
                  className="w-full h-32 sm:h-44 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 group">
                <img 
                  src="/media/about/our-culture2.png" 
                  alt="Our Culture 2" 
                  className="w-full h-32 sm:h-44 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:order-3 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 group">
                <img 
                  src="/media/about/our-culture3.png" 
                  alt="Our Culture 3" 
                  className="w-full h-32 sm:h-44 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 group">
                <img 
                  src="/media/about/our-culture4.png" 
                  alt="Our Culture 4" 
                  className="w-full h-32 sm:h-44 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR STORY (MILESTONES TIMELINE) */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Left Sticky Column: Overview & Illustration */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 sm:space-y-8">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#E0001B] font-bold">
                  Our Evolution
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gray-900 mt-1 sm:mt-2">
                  Our <span className="text-[#E0001B]">Story</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Founded in 2024, our journey has rapidly advanced from specialized railway safety engineering and pilot electronics to next-gen intelligent home automation and mission-critical signaling innovations.
                </p>
              </div>

              {/* Story Illustration Card */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-4 sm:p-6 shadow-sm sm:shadow-md border border-gray-100">
                <img 
                  src="/media/about/our-story.png" 
                  alt="Our Story Illustration" 
                  className="w-full h-auto object-contain mx-auto max-h-[360px]"
                />
              </div>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-2xl sm:text-3xl font-display font-extrabold text-[#E0001B]">2024</span>
                  <span className="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Inception Year</span>
                </div>
                <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-2xl sm:text-3xl font-display font-extrabold text-[#E0001B]">3+</span>
                  <span className="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Railways Systems</span>
                </div>
                <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-xl sm:text-2xl font-display font-extrabold text-[#E0001B]">FogPass</span>
                  <span className="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Flagship Tech</span>
                </div>
                <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm text-center">
                  <span className="block text-xl sm:text-2xl font-display font-extrabold text-[#E0001B]">IoT R&D</span>
                  <span className="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-medium">Home Automation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative pl-5 sm:pl-7 md:pl-8 border-l-2 border-red-200/80 space-y-6 sm:space-y-8">
                {milestones.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[27px] sm:-left-[35px] md:-left-[39px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-[3px] sm:border-4 border-[#E0001B] shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Content Card */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4">
                        <span className="text-xl sm:text-2xl font-display font-black text-[#E0001B] tracking-tight">
                          {item.year}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                          {item.tag}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
                        {item.image && (
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-50 border border-gray-100 shrink-0 p-2 flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg md:text-xl font-display font-bold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed list-disc list-inside text-left">
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

      {/* 6. MEET OUR FOUNDERS */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gray-900">
              Meet our <span className="text-[#E0001B]">Founders</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">
              Driven by purpose and powered by passion, meet the visionaries shaping the future of smart living.
            </p>
          </div>

          {/* Quick Founder Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {founders.map((f, i) => (
              <button
                key={i}
                onClick={() => setCurrentFounder(i)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  currentFounder === i 
                    ? 'bg-[#E0001B] text-white shadow-md shadow-red-500/20 scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {f.name} <span className="opacity-80 text-[11px] font-normal">({f.role})</span>
              </button>
            ))}
          </div>

          {/* Slider Container with Smooth Right-to-Left Scroll */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide Track */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-[#FAFAFA] shadow-xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentFounder * 100}%)` }}
              >
                {founders.map((founder, idx) => (
                  <div 
                    key={idx} 
                    className="w-full shrink-0 p-6 sm:p-10 md:p-12 lg:p-14"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left: Avatar, Name, Role, Connect */}
                      <div className="lg:col-span-4 flex flex-col items-center text-center">
                        <div className="w-44 h-52 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-md border border-gray-200 mb-5 group">
                          <img 
                            src={founder.image} 
                            alt={founder.name} 
                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-1">
                          {founder.name}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-red-100/70 text-[#E0001B] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                          {founder.role}
                        </div>
                        {founder.linkedin && (
                          <a 
                            href={founder.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-[#E0001B] transition-colors bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm hover:shadow"
                          >
                            <Linkedin className="w-4 h-4 text-[#0077b5]" />
                            <span>Connect on LinkedIn</span>
                          </a>
                        )}
                      </div>

                      {/* Right: Divider & Detailed Content */}
                      <div className="lg:col-span-8 lg:border-l lg:border-gray-200 lg:pl-10">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
                          {founder.bio}
                        </p>
                        
                        {founder.quote && (
                          <div className="p-4 sm:p-5 bg-white rounded-2xl border-l-4 border-[#E0001B] shadow-sm">
                            <p className="text-sm sm:text-base italic text-gray-800 font-medium leading-snug">
                              “{founder.quote}”
                            </p>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left / Right Arrow Navigation Buttons */}
            <button
              onClick={prevFounder}
              aria-label="Previous Founder"
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:text-[#E0001B] hover:scale-110 transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextFounder}
              aria-label="Next Founder"
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:text-[#E0001B] hover:scale-110 transition-all duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Pagination Dots Pill (matching reference slider dots) */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center gap-2.5 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              {founders.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentFounder(dotIdx)}
                  aria-label={`Go to founder slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentFounder === dotIdx 
                      ? 'w-7 bg-[#E0001B]' 
                      : 'w-2.5 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
