import React from 'react';
import { Link } from 'react-router-dom';

export function CompanyHighlights() {
  const items = [
    { title: "Leadership Team", desc: "Meet the minds driving our global vision.", link: "/leadership" },
    { title: "Careers", desc: "Join us in engineering the next generation.", link: "/careers" },
    { title: "About Us", desc: "Learn more about our vision and technology.", link: "/about" },
    { title: "Contact Us", desc: "Get in touch with our support and sales teams.", link: "/contact" }
  ];

  return (
    <section className="w-full bg-gray-50 py-24 relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-1 bg-brand-red rounded-full"></div>
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">Our Company</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-charcoal">
            More About Neurolinx
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-red/30 transition-all duration-300 group flex flex-col items-start cursor-pointer hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {item.desc}
              </p>
              <div className="mt-auto flex items-center text-brand-red text-sm font-bold uppercase tracking-wider">
                Explore 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
