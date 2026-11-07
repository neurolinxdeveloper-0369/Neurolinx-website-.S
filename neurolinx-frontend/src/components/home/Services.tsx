import React from 'react';
import { FlipCard } from '../ui/FlipCard';

export function Services() {
  const products = [
    {
      title: "Smart Home Automation",
      desc: "Next-generation IoT ecosystems connecting retrofit switches, security, and climate control flawlessly.",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/home-automation",
      buttonText: "View Product",
      features: ["IoT ecosystems", "Smart lighting & security", "Flawless climate control"]
    },
    {
      title: "Non-UV Disinfection Light",
      desc: "Safe, continuous 405nm visible-light disinfection technology for hospitals, labs, and commercial spaces.",
      img: "/media/non_uv_disinfection_home.jpg",
      linkUrl: "/non-uv-disinfection",
      buttonText: "View Product",
      features: ["Safe & continuous", "405nm visible light", "For hospitals & cleanrooms"]
    },
    {
      title: "Railways",
      desc: "RDSO-standard Fog Pass devices, signaling controllers, and rolling stock LED coach lighting systems.",
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/railways",
      buttonText: "View Product",
      features: ["Fog Pass v2/v3", "Signaling controllers", "Modern transit engineering"]
    },
    {
      title: "Power Supply & Drivers",
      desc: "Industrial-grade AC-DC SMPS, DC-DC converters, and precision LED drivers engineered for harsh environments.",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/power-supply",
      buttonText: "View Product",
      features: ["10kV surge protection", "Wide input voltage range", "94%+ power efficiency"]
    }
  ];

  const services = [
    {
      title: "Remote Monitoring System & Smart Metering",
      desc: "Cloud-native telemetry platforms, AMR/AMI smart grid analytics, and railway substation automation.",
      img: "/media/rms_home_card.jpg",
      linkUrl: "/rms-smart-metering",
      buttonText: "Explore Solution",
      features: ["DLMS smart grid analytics", "Edge telemetry gateways", "Predictive load monitoring"]
    },
    {
      title: "Chip-Level Designing",
      desc: "End-to-end silicon design, ASIC/FPGA prototyping, RTL architecture, and post-silicon physical verification.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/chip-level-design",
      buttonText: "Explore Solution",
      features: ["ASIC & FPGA prototyping", "RTL architecture design", "Complete physical verification"]
    },
    {
      title: "Robotics & AI",
      desc: "Intelligent autonomous industrial logistics, sensor-fused collaborative robot arms, and edge AI vision.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/robotics",
      buttonText: "Explore Solution",
      features: ["Autonomous AGVs", "Sensor-fused robotic arms", "Edge vision AI algorithms"]
    },
    {
      title: "Smart POS Application",
      desc: "Intuitive digital billing, inventory tracking, and sales analytics engineered for retail stores, supermarkets, restaurants, and cafés.",
      img: "/media/pos_home_card.jpg",
      linkUrl: "/pos-application",
      buttonText: "Explore POS Solution",
      features: ["Smart Billing & Invoicing", "Retail & Restaurant Modes", "Live Inventory & Reports"]
    }
  ];

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative z-10 border-t border-white/10 overflow-hidden">
      {/* Subtle ambient crimson nebula glow matching hero section */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-red/[0.08] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">Our Products & Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 sm:mb-6 leading-tight">
            Expert Solutions Across <br/> Innovation & Engineering
          </h2>
        </div>

        {/* Products Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center space-x-3 mb-5 sm:mb-8">
            <div className="w-6 sm:w-8 h-1 bg-brand-red rounded-full"></div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Our Products</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 xl:gap-6">
            {products.map((product, index) => (
              <FlipCard key={`product-${index}`} {...product} />
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div>
          <div className="flex items-center space-x-3 mb-5 sm:mb-8">
            <div className="w-6 sm:w-8 h-1 bg-brand-red rounded-full"></div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Our Solutions</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 xl:gap-6">
            {services.map((service, index) => (
              <FlipCard key={`service-${index}`} {...service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
