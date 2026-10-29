import React from 'react';
import { FlipCard } from '../ui/FlipCard';

export function Services() {
  const products = [
    {
      title: "Smart Home",
      desc: "Next-generation IoT ecosystems connecting lighting, security, and climate control flawlessly.",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/home-automation",
      buttonText: "View Product",
      features: ["IoT ecosystems", "Smart lighting & security", "Flawless climate control"]
    },
    {
      title: "Advanced Railways",
      desc: "Highly reliable electronic controllers and power systems engineered for modern transit.",
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/railways",
      buttonText: "View Product",
      features: ["Reliable controllers", "Robust power systems", "Modern transit engineering"]
    },
    {
      title: "Non-UV Disinfection",
      desc: "Safe, continuous visible-light disinfection technology for hospitals, labs, and commercial spaces.",
      img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/non-uv-disinfection",
      buttonText: "View Product",
      features: ["Safe & continuous", "Visible-light tech", "For hospitals & labs"]
    }
  ];

  const services = [
    {
      title: "Chip-Level Design",
      desc: "Complete end-to-end silicon design, prototyping, and high-volume foundry manufacturing.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/chip-level-design",
      buttonText: "Explore Service",
      features: ["End-to-end design", "Rapid prototyping", "High-volume manufacturing"]
    },
    {
      title: "AI & Robotics",
      desc: "Intelligent automation systems and robotic assemblies designed for maximum industrial efficiency.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/robotics",
      buttonText: "Explore Service",
      features: ["Intelligent automation", "Robotic assemblies", "Industrial efficiency"]
    },
    {
      title: "Wind & Solar Energy",
      desc: "Power supply drivers and energy grids that capture and distribute renewable energy efficiently.",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/wind-solar",
      buttonText: "Explore Service",
      features: ["Power supply drivers", "Energy grid integration", "Efficient renewable capture"]
    }
  ];

  return (
    <section className="w-full bg-white py-32 relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-1 bg-brand-red rounded-full"></div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">Our Products & Our Services</span>
            <div className="w-10 h-1 bg-brand-red rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-charcoal mb-6 leading-tight">
            Expert Solutions Across <br/> Innovation & Engineering
          </h2>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FlipCard key={`product-${index}`} {...product} />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FlipCard key={`service-${index}`} {...service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
