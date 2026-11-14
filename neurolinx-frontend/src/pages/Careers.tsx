import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  X,
  ChevronDown,
  ChevronUp,
  Heart,
  Users,
  Zap,
  TrendingUp,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Job {
  id: string;
  title: string;
  department: 'engineering' | 'hardware' | 'software' | 'sales';
  type: string;
  location: string;
  experience: string;
  desc: string;
  requirements: string[];
}

export function Careers() {
  const [activeTab, setActiveTab] = useState<'all' | 'engineering' | 'hardware' | 'software' | 'sales'>('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const perks = [
    { 
      title: "Global Impact", 
      desc: "Work on cutting-edge IoT technology and transportation engineering that shapes the future of automated spaces worldwide.",
      image: "/media/careers/global_impact.jpg"
    },
    { 
      title: "Continuous Growth", 
      desc: "We invest in your career with skill advancement programs, research lab access, and high-impact project leadership.",
      image: "/media/careers/continuous_growth.jpg"
    },
    { 
      title: "Inclusive Culture", 
      desc: "Join a diverse, collaborative team where every voice is heard and innovation is celebrated without bureaucratic friction.",
      image: "/media/careers/inclusive_culture.jpg"
    },
    { 
      title: "Health & Wellness", 
      desc: "Comprehensive medical insurance, wellness stipends, annual company retreats, and flexible hybrid working arrangements.",
      image: "/media/careers/health_wellness.jpg"
    }
  ];

  const jobs: Job[] = [
    {
      id: "emb-eng-01",
      title: "Senior Embedded Firmware Engineer",
      department: "hardware",
      type: "Full-Time",
      location: "Hyderabad, India / Hybrid",
      experience: "4-7 Years",
      desc: "Architect and optimize high-reliability firmware for ESP32/ARM Cortex microcontrollers powering our wireless capacitive touch switches, motor drives, and zero-cross relay controllers.",
      requirements: [
        "Strong C/C++ proficiency for bare-metal and FreeRTOS embedded systems",
        "Deep hands-on experience with wireless protocols: Wi-Fi, BLE mesh, Zigbee, and MQTT",
        "Experience with hardware interfaces: SPI, I2C, UART, ADC, PWM, and GPIO interrupts",
        "Understanding of safety clearances, surge suppression, and industrial EMI/EMC compliance"
      ]
    },
    {
      id: "pwr-lead-02",
      title: "Power Supply & Electronics Design Lead",
      department: "hardware",
      type: "Full-Time",
      location: "Bengaluru, India",
      experience: "5-8 Years",
      desc: "Lead schematic design, PCB layout, and thermal optimization for high-efficiency AC-DC switch mode power supplies (SMPS), LED drivers, and surge-protected modular boards.",
      requirements: [
        "Proven expertise in flyback, buck, and resonant SMPS topologies (5W to 200W)",
        "Proficiency in Altium Designer or KiCad for multi-layer PCB design",
        "Familiarity with BIS, CE, and railway EN50155 electronic standards",
        "Strong hands-on prototyping, DSO debugging, and thermal camera analysis"
      ]
    },
    {
      id: "fe-dev-03",
      title: "Frontend & Web Application Engineer",
      department: "software",
      type: "Full-Time",
      location: "Remote / Hybrid (Hyderabad)",
      experience: "3-5 Years",
      desc: "Build sleek, responsive web interfaces, customer portal dashboards, and 3D product visualizers using React, TypeScript, Tailwind CSS, and WebGL/Three.js.",
      requirements: [
        "Exceptional proficiency in modern React, TypeScript, and state management",
        "Experience in high-performance WebGL, Three.js, or canvas animations is a plus",
        "Sharp aesthetic eye for minimalist typography, responsive layouts, and micro-interactions",
        "Comfort with RESTful APIs, WebSockets, and real-time device telemetry data"
      ]
    },
    {
      id: "iot-cloud-04",
      title: "IoT Cloud & Telemetry Architect",
      department: "software",
      type: "Full-Time",
      location: "Remote",
      experience: "4-7 Years",
      desc: "Design and scale ultra-fast, secure cloud pipelines handling real-time device telemetry, over-the-air (OTA) updates, and automation scheduling for thousands of connected homes.",
      requirements: [
        "Deep knowledge of AWS IoT Core, EMQX, or VerneMQ broker architectures",
        "Node.js/Go backend development with PostgreSQL and Redis time-series caches",
        "Hands-on containerization with Docker and Kubernetes",
        "Expertise in TLS 1.3 mutual auth, OAuth 2.0, and hardware root of trust encryption"
      ]
    },
    {
      id: "sales-mgr-05",
      title: "Smart Home Channel & Dealer Manager",
      department: "sales",
      type: "Full-Time",
      location: "Hyderabad / Pune / Bengaluru",
      experience: "3-6 Years",
      desc: "Drive dealership expansion, architect relationships, and builder partnerships for Neurolinx luxury touch panels and automation solutions across key metropolitan territories.",
      requirements: [
        "Track record in smart home automation, electrical retail distribution, or luxury interior fittings",
        "Strong network of interior designers, MEP consultants, and luxury builders",
        "Exceptional presentation, consultative sales, and relationship-building capabilities",
        "Self-starter mindset with strong revenue-driven execution"
      ]
    },
    {
      id: "qa-lead-06",
      title: "Hardware Quality & Reliability Engineer",
      department: "hardware",
      type: "Full-Time",
      location: "Hyderabad, India",
      experience: "2-5 Years",
      desc: "Oversee incoming inspection, endurance endurance testing (100,000+ switch cycles), environmental burn-in, and ISO quality standards at our manufacturing line.",
      requirements: [
        "Experience with electrical test fixtures, automated burn-in rigs, and failure analysis",
        "Familiarity with soldering standards, surface mount inspection, and bill of materials (BOM)",
        "Passionate attention to physical finish, glass tempering, and touch calibration quality"
      ]
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(j => j.department === activeTab);

  const hiringSteps = [
    {
      num: "01",
      title: "Application Review",
      desc: "Our technical leads review your resume and past engineering or design projects within 48 hours."
    },
    {
      num: "02",
      title: "Technical Discussion",
      desc: "A conversational deep-dive with our engineering team into real-world problem solving and system design."
    },
    {
      num: "03",
      title: "Practical Assignment",
      desc: "A hands-on, realistic task or code/circuit review reflecting the exact problems we solve at Neurolinx."
    },
    {
      num: "04",
      title: "Offer & Welcome",
      desc: "Competitive compensation package, ESOP opportunities, and seamless onboarding into our team."
    }
  ];

  const faqs = [
    {
      q: "Can I work remotely at Neurolinx?",
      a: "Yes! Many of our software engineering, cloud architecture, and marketing roles are open to hybrid or full remote arrangements across India. Hardware and lab-based roles are based at our Hyderabad HQ or Bengaluru R&D facility."
    },
    {
      q: "What is the culture and work environment like?",
      a: "We operate with a high-trust, engineering-first culture. We value clean code, elegant circuit design, rapid prototyping, and open communication without unnecessary layers of bureaucracy."
    },
    {
      q: "How can I apply if my role isn't listed?",
      a: "We are always keen to meet passionate talent! Drop your resume and a brief introduction to careers@neurolinx.in with your area of expertise in the subject line."
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Build the Future of <span className="text-[#E0001B]">Smart Living With Us.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At Neurolinx, we engineer next-generation IoT home automation and transportation electronics. Join a team driven by innovation, precision, and collective triumph.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="px-7 py-3.5 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@neurolinx.in"
              className="px-7 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Send Open Application
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY WORK WITH US / PERKS & CULTURE                                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E0001B] font-bold">Why Join Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1">
            Empowering You to Do Your Best Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            We provide the freedom, tools, and mentorship you need to pioneer meaningful smart technologies that transform everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-white overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="h-44 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={perk.image} 
                  alt={perk.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#E0001B] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CURRENT OPENINGS SECTION                                              */}
      {/* ========================================================================= */}
      <section id="openings" className="py-16 sm:py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E0001B] font-bold">Opportunities</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1">
                Current Openings
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Discover your next breakthrough role across engineering, software, and growth.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Roles' },
                { id: 'hardware', label: 'Hardware & Embedded' },
                { id: 'software', label: 'Software & Cloud' },
                { id: 'sales', label: 'Sales & Growth' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#E0001B] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Openings Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="p-6 sm:p-7 rounded-2xl border border-gray-100 bg-[#F8F8F8] hover:bg-white hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-[#E0001B] border border-red-100 uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="text-xs text-gray-400">• Exp: {job.experience}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 group-hover:text-[#E0001B] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
                    {job.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-5 py-2.5 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-semibold transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={`mailto:careers@neurolinx.in?subject=Application for ${encodeURIComponent(job.title)} [${job.id}]`}
                    className="px-6 py-2.5 rounded-full bg-[#E0001B] hover:bg-red-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-200/60 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900">Don't see an exact match?</h4>
              <p className="text-xs text-gray-500">Send us your portfolio or CV anyway. We are always hiring extraordinary builders.</p>
            </div>
            <a
              href="mailto:careers@neurolinx.in?subject=General Application / Prospective Candidate"
              className="px-5 py-2.5 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-semibold shrink-0 transition-colors"
            >
              Email Your Resume
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HIRING PROCESS (4 STEPS)                                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E0001B] font-bold">How We Hire</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mt-1">
            Our Streamlined Hiring Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            A fast, transparent 4-stage evaluation designed to respect your time and demonstrate real collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm relative group hover:border-red-200 transition-all duration-300"
            >
              <span className="text-3xl font-display font-black text-red-100 group-hover:text-red-200 transition-colors block mb-3">
                {step.num}
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. APPLICANT FAQ ACCORDION                                               */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#E0001B] uppercase tracking-wider">Candidate Questions</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#F8F8F8] rounded-2xl border border-gray-100 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#E0001B] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#E0001B]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MODAL: JOB DETAIL & APPLICATION OVERLAY                                */}
      {/* ========================================================================= */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => { setSelectedJob(null); setAppliedSuccess(false); }}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0001B]">{selectedJob.department}</span>
              <h3 className="text-2xl font-bold font-display text-gray-900 mt-1">{selectedJob.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-2">
                <span>📍 {selectedJob.location}</span>
                <span>•</span>
                <span>⏱️ {selectedJob.type}</span>
                <span>•</span>
                <span>💼 {selectedJob.experience}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Role Overview</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{selectedJob.desc}</p>

              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider pt-2">Key Qualifications</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                {selectedJob.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E0001B] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
              <span className="text-xs text-gray-500">Send your resume directly to careers@neurolinx.in</span>
              <a
                href={`mailto:careers@neurolinx.in?subject=Application for ${encodeURIComponent(selectedJob.title)} [${selectedJob.id}]`}
                className="px-6 py-3 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Apply via Email
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
