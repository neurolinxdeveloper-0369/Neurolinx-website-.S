import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';

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
    <div className="w-full bg-[#0B0F19] min-h-screen text-white font-body pt-24 pb-20">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Neurolinx Insights</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6">
          Blogs &amp; Technology Articles
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore research whitepapers, engineering deep-dives, and announcements covering modern automation, rail systems, bio-photonic lighting, and semiconductors.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-red/50 hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-300 flex flex-col group"
            >
              <div className="h-52 w-full overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-300 border border-white/10">
                    {blog.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-red transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
                    {blog.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-brand-red group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
