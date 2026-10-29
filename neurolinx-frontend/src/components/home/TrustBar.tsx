import React from 'react';

export function TrustBar() {
  const features = [
    {
      title: "Quality Assurance",
      subtitle: "Guaranteed Products",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><path d="m9 16 2 2 4-4"/></svg>
      )
    },
    {
      title: "Secure Payment",
      subtitle: "100% Protected",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
      )
    },
    {
      title: "Support 24/7",
      subtitle: "Shop with an expert",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/><path d="M14 12h-4"/></svg>
      )
    },
    {
      title: "Global Shipping",
      subtitle: "Delivering worldwide",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6c-.2.5.1 1.1.6 1.2l4.6 1.4 3.4 3.4-2.8 2.8-4.3-.8c-.5-.1-1 .2-1.2.7l-1 2.8c-.2.5.1 1 .5 1.1L10 23h.5l8.7-2.7c.4-.2.6-.7.6-1.1z"/></svg>
      )
    },
    {
      title: "On Time Delivery",
      subtitle: "From all orders",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/></svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white pb-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center border border-gray-200 bg-white">
          {features.map((feat, i) => (
            <div key={i} className="flex-1 flex items-center justify-center py-8 px-4 border-b lg:border-b-0 lg:border-r border-gray-200 last:border-0 w-full lg:w-auto hover:bg-gray-50 transition-colors cursor-default">
              <div className="flex items-center space-x-4">
                <div className="shrink-0 text-[#4c5c75]">
                  {feat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#e22727] font-bold text-[15px] leading-tight mb-1">{feat.title}</span>
                  <span className="text-gray-500 text-xs font-medium">{feat.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
