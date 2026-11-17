import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, X, BookOpen, Share2, Check } from 'lucide-react';

interface BlogArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  tag: string;
  fullContent?: string[];
  keyTakeaways?: string[];
}

export function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const blogs: BlogArticle[] = [
    {
      id: 1,
      title: "The Next Frontier: Offline-First Mesh Architecture in Smart Automation",
      category: "Home Automation",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      summary: "Why hybrid cloud-mesh switches that continue to work at 0ms latency during internet outages are setting the new gold standard for residential luxury.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
      tag: "IoT & Smart Living",
      keyTakeaways: [
        "Traditional Wi-Fi home automation suffers from severe latency and cloud dependency outages.",
        "Local peer-to-peer RF mesh protocols keep light switches, fan speed controllers, and scene triggers instant (0ms).",
        "Neurolinx retrofits operate seamlessly on 100% local hardware logic without breaking existing wall conduits."
      ],
      fullContent: [
        "In modern luxury homes and commercial spaces, smart automation is expected to behave with the same reliability as a physical mechanical switch. However, the first wave of cloud-dependent smart appliances frequently leaves homeowners frustrated when local broadband networks experience packet drops or service outages.",
        "At Neurolinx, our engineering thesis centers around offline-first architecture. By incorporating localized low-power sub-GHz RF mesh networking and distributed state machines within each touch panel, command dispatch occurs locally across devices in less than 5 milliseconds.",
        "When an active internet connection is present, the bridge syncs encrypted telemetry to cloud services for voice assistants and remote control. But when connectivity drops, every switch, timer schedule, and preset multi-room scene continues to execute flawlessly."
      ]
    },
    {
      id: 2,
      title: "Mission-Critical Precision: How Fog Pass Devices Prevent Rail Disasters",
      category: "Railways",
      date: "Oct 18, 2026",
      readTime: "7 min read",
      summary: "An inside look into RDSO-compliant GNSS centimeter-accuracy navigation units designed to assist locomotive drivers during zero-visibility winter fogs.",
      image: "/media/railways_hero.jpg",
      tag: "Rail Tech",
      keyTakeaways: [
        "Winter fog across Northern railway corridors reduces locomotive driver visibility to near zero meters.",
        "FogPASS leverages multi-constellation GNSS (GPS + NavIC/IRNSS) mapped against geo-referenced signal databases.",
        "Audio-visual audio countdowns alert loco pilots hundreds of meters in advance of upcoming signals and level crossings."
      ],
      fullContent: [
        "Operating heavy passenger or freight train consists at 120+ km/h through dense zero-visibility northern winter fogs poses one of the most critical safety challenges in modern railway transit.",
        "The Fog Pilot Assistance System (FogPASS) developed by Neurolinx is engineered specifically to eliminate signal overshoot (SPAD) incidents. Operating continuously on multi-frequency satellite navigation coupled with Indian NavIC and GPS constellations, the in-cab display calculates exact distance to approaching signals, neutral sections, and level crossing gates.",
        "Designed to withstand 110V DC railway transient variations, extreme vibration harmonics, and operating temperatures from -10°C to +70°C, FogPASS delivers unwavering fail-safe performance."
      ]
    },
    {
      id: 3,
      title: "Continuous 405nm Light Decontamination: The Science of Non-UV Disinfection",
      category: "Healthcare & Cleanrooms",
      date: "Oct 12, 2026",
      readTime: "6 min read",
      summary: "How narrow-spectrum antimicrobial illumination destroys bacterial pathogens continuously in occupied clinical environments without human cell damage.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&auto=format&fit=crop&q=80",
      tag: "Bio-Photonics",
      keyTakeaways: [
        "Unlike hazardous UV-C rays that cause skin cancer and corneal burns, 405nm violet-blue light is IEC 62471 RG-0 exempt.",
        "Photo-excites endogenous microbial porphyrins to generate reactive oxygen species (ROS), killing bacteria from the inside.",
        "Provides 24/7 continuous disinfection in occupied spaces such as hospital ICUs, surgical suites, and cleanrooms."
      ],
      fullContent: [
        "While ultraviolet (UV-C) radiation is highly bactericidal, its high photonic energy damages mammalian DNA, making it unsafe for use in rooms occupied by doctors, patients, or cleanroom technicians.",
        "Neurolinx Non-UV illumination utilizes targeted narrow-spectrum visible light centered at 405 nanometers. This wavelength specifically targets photo-sensitive porphyrin molecules naturally present inside bacterial cells.",
        "The resulting cascade of intracellular singlet oxygen destroys cell membranes and vital bacterial proteins while posing zero hazard to human skin or eyes under international standard IEC 62471."
      ]
    },
    {
      id: 4,
      title: "Tackling 10kV Lightning Surges in Heavy Industrial SMPS Power Supplies",
      category: "Power Electronics",
      date: "Oct 05, 2026",
      readTime: "8 min read",
      summary: "Designing wide input 85-305V AC-DC converters with reinforced 3kV galvanic isolation for harsh grid and extreme locomotive transients.",
      image: "/media/powersupply_hero.jpg",
      tag: "Power Systems",
      keyTakeaways: [
        "Industrial grid fluctuations and overhead catenary surges easily destroy standard commercial power supplies.",
        "Multi-stage metal oxide varistors (MOVs) and gas discharge tubes absorb massive transient voltage spikes.",
        "Active power factor correction (PFC > 0.98) ensures minimal harmonic distortion and complies with IEC 61000 standards."
      ],
      fullContent: [
        "Industrial plants, railway sub-stations, and outdoor automation cabinets frequently experience devastating power surges caused by lightning discharges, inductive motor cutoffs, and fluctuating line voltages.",
        "Neurolinx SMPS converters incorporate custom-wound planar transformers, multi-stage EMI filtration, and reinforced 3kV AC dielectric isolation. Their wide 85V - 305V AC universal input capability prevents dropouts during severe brownouts.",
        "By enforcing strict thermal derating rules and utilizing high-temperature 105°C Japanese electrolytic capacitors, our industrial power modules achieve continuous mean time between failures (MTBF) exceeding 400,000 hours."
      ]
    },
    {
      id: 5,
      title: "Edge AI Computer Vision in Modern Robotic Warehousing",
      category: "Artificial Intelligence",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      summary: "How ultra-low latency neural accelerators running locally on AGVs and robotic arms enable obstacle detection and high-speed sorting without server dependencies.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
      tag: "Robotics & AI",
      keyTakeaways: [
        "Streaming 4K video feeds to central cloud servers creates severe latency bottlenecks and bandwidth choke-points.",
        "Embedded Neural Processing Units (NPUs) execute object detection models directly onboard the autonomous robot in <10ms.",
        "Hybrid sensor fusion with stereo cameras and solid-state LiDAR ensures 100% collision-free navigation."
      ],
      fullContent: [
        "High-density fulfillment centers and automated factory floors require autonomous guided vehicles (AGVs) to react to dynamic obstacles in real time. Transmitting uncompressed camera streams to a remote server introduces 100-300ms of latency, which is unacceptable at high travel speeds.",
        "Neurolinx integrates embedded tensor acceleration engines directly adjacent to camera image sensors. Deep neural networks quantized to INT8 precision perform simultaneous semantic segmentation, defect recognition, and SLAM localisation.",
        "This architectural decision ensures uninterrupted autonomous movement even in shielded metallic warehouse zones where wireless connectivity is degraded."
      ]
    },
    {
      id: 6,
      title: "ASIC vs FPGA: Strategic Prototyping Pathways for Silicon Startups",
      category: "Chip Design",
      date: "Sep 20, 2026",
      readTime: "9 min read",
      summary: "Evaluating cost tradeoffs, RTL validation milestones, and multi-project wafer shuttle runs when bringing novel silicon architectures to commercial fab.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      tag: "Semiconductors",
      keyTakeaways: [
        "FPGAs offer rapid prototyping agility with zero mask fabrication costs, but consume 5x-10x more power than dedicated silicon.",
        "Multi-Project Wafer (MPW) shuttle runs dramatically lower initial tapeout costs by pooling non-recurring engineering (NRE) charges.",
        "Rigorous UVM testbench verification and static timing analysis are mandatory before committing to commercial silicon."
      ],
      fullContent: [
        "For emerging hardware teams, the path from functional algorithmic concept to physical silicon is loaded with capital risks. While field-programmable gate arrays (FPGAs) allow instant firmware reconfiguration, high-volume production demands the ultra-low power dissipation and silicon area savings of Application-Specific Integrated Circuits (ASICs).",
        "Neurolinx provides end-to-end chip-level design and foundry liaison services. We guide engineering teams from high-level SystemC/RTL modeling and comprehensive UVM simulation all the way through physical synthesis, clock tree synthesis, and GDSII sign-off.",
        "Through established foundry partnerships and shared multi-project wafer shuttles, we make tapeout milestones accessible and cost-effective for modern innovative enterprises."
      ]
    }
  ];

  const handleShare = (article: BlogArticle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#F8F8F8] min-h-screen text-slate-800 font-body selection:bg-brand-red selection:text-white">
      
      {/* ── Hero Header ── */}
      <section className="relative w-full pt-32 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-semibold uppercase tracking-wider mb-4 border border-red-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research & Engineering Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Blogs &amp; <span className="text-[#E0001B]">Technology Articles</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore research whitepapers, engineering deep-dives, and announcements covering modern automation, rail systems, bio-photonic lighting, and semiconductors.
          </p>
        </div>
      </section>

      {/* ── Blog Grid Section ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
            >
              <div className="h-52 w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#E0001B] border border-gray-200/80 shadow-xs">
                    {blog.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#E0001B] transition-colors leading-snug">
                    {blog.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                    {blog.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E0001B] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Reading Modal / Drawer ── */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0 bg-gray-900">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 px-3 py-1 rounded-full border border-red-500/30">
                  {selectedBlog.tag}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold mt-3 leading-tight drop-shadow-md">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-300 mt-2 font-medium">
                  <span>{selectedBlog.date}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Key Takeaways */}
              {selectedBlog.keyTakeaways && (
                <div className="bg-red-50/70 border border-red-100 rounded-2xl p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Takeaways</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800">
                    {selectedBlog.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-red font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Article Prose */}
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {selectedBlog.fullContent?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Footer Actions inside Modal */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare(selectedBlog)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied' : 'Share Article'}</span>
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-red hover:bg-[#b00015] text-white text-xs font-semibold transition-colors"
                  >
                    <span>Talk to Author / Engineers</span>
                  </Link>
                </div>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 hover:text-black text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ── Signature SmartNode Dark CTA Banner ── */}
      <section className="py-16 sm:py-20 bg-black text-white rounded-t-[40px] md:rounded-t-[60px] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-400">
            <Sparkles className="w-3.5 h-3.5 text-[#E0001B]" />
            <span>Stay Ahead With Neurolinx</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Pioneering the Next Era of <span className="text-[#E0001B]">Intelligent Engineering.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Interested in collaboration, research publications, or adopting our smart hardware systems?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-[#E0001B] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-900/30"
            >
              Contact Our Engineers
            </Link>
            <Link
              to="/home-automation"
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Blogs;
