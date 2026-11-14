import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Next Frontier: Offline-First Mesh Architecture in Smart Automation",
      category: "Home Automation",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      summary: "Why hybrid cloud-mesh switches that continue to work at 0ms latency during internet outages are setting the new gold standard for residential luxury.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
      tag: "IoT & Smart Living"
    },
    {
      id: 2,
      title: "Mission-Critical Precision: How Fog Pass Devices Prevent Rail Disasters",
      category: "Railways",
      date: "Oct 18, 2026",
      readTime: "7 min read",
      summary: "An inside look into RDSO-compliant GNSS centimeter-accuracy navigation units designed to assist locomotive drivers during zero-visibility winter fogs.",
      image: "/media/railways_hero.jpg",
      tag: "Rail Tech"
    },
    {
      id: 3,
      title: "Continuous 405nm Light Decontamination: The Science of Non-UV Disinfection",
      category: "Healthcare & Cleanrooms",
      date: "Oct 12, 2026",
      readTime: "6 min read",
      summary: "How narrow-spectrum antimicrobial illumination destroys bacterial pathogens continuously in occupied clinical environments without human cell damage.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&auto=format&fit=crop&q=80",
      tag: "Bio-Photonics"
    },
    {
      id: 4,
      title: "Tackling 10kV Lightning Surges in Heavy Industrial SMPS Power Supplies",
      category: "Power Electronics",
      date: "Oct 05, 2026",
      readTime: "8 min read",
      summary: "Designing wide input 85-305V AC-DC converters with reinforced 3kV galvanic isolation for harsh grid and extreme locomotive transients.",
      image: "/media/powersupply_hero.jpg",
      tag: "Power Systems"
    },
    {
      id: 5,
      title: "Edge AI Computer Vision in Modern Robotic Warehousing",
      category: "Artificial Intelligence",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      summary: "How ultra-low latency neural accelerators running locally on AGVs and robotic arms enable obstacle detection and high-speed sorting without server dependencies.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
      tag: "Robotics & AI"
    },
    {
      id: 6,
      title: "ASIC vs FPGA: Strategic Prototyping Pathways for Silicon Startups",
      category: "Chip Design",
      date: "Sep 20, 2026",
      readTime: "9 min read",
      summary: "Evaluating cost tradeoffs, RTL validation milestones, and multi-project wafer shuttle runs when bringing novel silicon architectures to commercial fab.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      tag: "Semiconductors"
    }
  ];

  return (
    <div className="w-full bg-[#F8F8F8] min-h-screen text-slate-800 font-body selection:bg-brand-red selection:text-white">
      
      {/* ── Hero Header: Clean White Canvas ── */}
      <section className="relative w-full pt-32 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Blogs &amp; <span className="text-[#E0001B]">Technology Articles</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore research whitepapers, engineering deep-dives, and announcements covering modern automation, rail systems, bio-photonic lighting, and semiconductors.
          </p>
        </div>
      </section>

      {/* ── Blog Grid Section: Clean White Cards on Soft #F8F8F8 Canvas ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
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

      {/* ── Signature SmartNode Dark CTA Banner with Rounded-T ── */}
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
