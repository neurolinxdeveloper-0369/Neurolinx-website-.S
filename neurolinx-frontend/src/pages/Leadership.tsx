import React, { useState } from 'react';
import { 
  Linkedin, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Leader {
  name: string;
  title: string;
  bio: string;
  quote?: string;
  image: string;
  linkedin?: string;
}

const founders: Leader[] = [
  {
    name: "V.V Bharath",
    title: "Chief Executive Officer (CEO)",
    bio: "Vallabhaneni Venkata Bharath Chowdary is the Chief Executive Officer of Neurolinx Global Private Limited. He holds a Bachelor's degree in Electronics & Communication and a Master's degree in Electrical Engineering from California State University, Fullerton. With over 15 years of deep electronic design expertise, he spearheads product discovery, architectural roadmap, and guides every solution to high-precision mass manufacturing.",
    quote: "Take care of minutes, hours will take care of themselves.",
    image: "/media/about/vv-bharath.png",
    linkedin: "https://www.linkedin.com"
  },
  {
    name: "Sai Pavan S",
    title: "Chief Technology Officer (CTO)",
    bio: "Sai Pavan Sudha is a seasoned technology leader with more than 2 decades of experience in the design, development, and deployment of automation systems tailored for the railway, utility, and home sectors. He leads cutting-edge initiatives in embedded systems, SCADA solutions, and IoT-based automation, driving digital transformation across critical infrastructure.",
    quote: "Reliability is never an accident; it is the deliberate result of relentless engineering.",
    image: "/media/about/sai-pavan.png",
    linkedin: "https://www.linkedin.com"
  },
  {
    name: "V Harshitha",
    title: "Chief Financial Officer (CFO)",
    bio: "V Harshitha is a co-founder and director at Neurolinx Global Private Limited. She holds a degree in Electronics & Instrumentation and an MBA specialized in Operations and Finance from Vignan Jyothi Institute of Management, Hyderabad. She leads financial governance, strategic investments, supply chain capital, and scalable corporate expansion.",
    quote: "Every situation gives us some experience; experience is the best teacher that empowers us to learn and grow.",
    image: "/media/about/v-harshitha.png",
    linkedin: "https://www.linkedin.com"
  },
  {
    name: "V Prabhath",
    title: "Chief Strategy Officer (CSO)",
    bio: "Prabhath Chowdary Vallabhaneni is a results-driven business strategist with deep experience in enterprise marketing and strategic hospitality operations. As Managing Partner at Neurolinx Global, he drives brand positioning, customer acquisition, channel partner ecosystems, and strategic business development nationwide.",
    quote: "Leadership is not about titles, it's about impact, influence, and inspiration.",
    image: "/media/about/v-prabhath.png",
    linkedin: "https://www.linkedin.com"
  }
];

export function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextLeader = () => {
    setActiveIndex((prev) => (prev + 1) % founders.length);
  };

  const prevLeader = () => {
    setActiveIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  const activeFounder = founders[activeIndex];

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
            Executive Leadership
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Visionary Minds Behind <span className="text-[#E0001B]">Neurolinx.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Meet the innovators, architects, and industry pioneers driving our relentless pursuit of smarter, more responsive environments.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUNDERS SPOTLIGHT SLIDER                                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#E0001B] font-bold">Executive Board</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1">
            Meet Our Founders
          </h2>
        </div>

        {/* Founder Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {founders.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeIndex === i 
                  ? 'bg-[#E0001B] text-white shadow-md shadow-red-500/20 scale-105' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              {f.name} <span className="opacity-80 text-[11px] font-normal">({f.title.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Featured Founder Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Avatar & Info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-md border border-gray-200 mb-5 group">
                <img 
                  src={activeFounder.image} 
                  alt={activeFounder.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">
                {activeFounder.name}
              </h3>
              <div className="inline-block px-3 py-1 bg-red-50 text-[#E0001B] border border-red-100 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                {activeFounder.title}
              </div>
              {activeFounder.linkedin && (
                <a 
                  href={activeFounder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-[#E0001B] transition-colors bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 shadow-xs hover:shadow"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
            </div>

            {/* Right: Bio & Quote */}
            <div className="lg:col-span-8 lg:border-l lg:border-gray-100 lg:pl-10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
                <Award className="w-4 h-4" />
                <span>Executive Profile</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                {activeFounder.bio}
              </p>
              
              {activeFounder.quote && (
                <div className="p-5 sm:p-6 bg-gradient-to-r from-red-50/50 to-transparent rounded-2xl border-l-4 border-[#E0001B]">
                  <Quote className="w-6 h-6 text-[#E0001B]/40 mb-2" />
                  <p className="text-sm sm:text-base italic text-gray-900 font-medium leading-relaxed">
                    “{activeFounder.quote}”
                  </p>
                </div>
              )}

              <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                <span className="text-xs text-gray-400">Leader {activeIndex + 1} of {founders.length}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevLeader}
                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextLeader}
                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CALL TO ACTION                                                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-black text-white rounded-t-[40px] md:rounded-t-[60px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">Want to Partner with Our Leadership?</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Explore distributor partnerships, OEM integrations, and nationwide channel opportunities.</p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            Connect With Us
          </Link>
        </div>
      </section>

    </div>
  );
}
