import React from 'react';

export function WindSolar() {
  const products = [
    { title: "Solar Inverters", desc: "99% efficiency grid-tie conversion", img: "/media/solar_inverters.jpg" },
    { title: "Wind Controllers", desc: "Variable pitch and turbine management", img: "/media/wind_controllers.jpg" },
    { title: "BMS Systems", desc: "Utility-scale battery cell balancing", img: "/media/bms_systems.jpg" },
    { title: "Smart Grid Integration", desc: "Automated peak shaving and load shedding", img: "/media/smart_grid_integration.jpg" }
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body">
      {/* Cinematic Hero */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-brand-charcoal " style={{ minHeight: '60vh' }}>
        <img 
          src="/media/windsolar_hero.jpg" 
          alt="Wind & Solar"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-red/50 bg-brand-red/20 text-white font-medium text-sm tracking-wide uppercase backdrop-blur-md">
            Renewable Energy
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-2xl">
            Wind & Solar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              Innovation.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light drop-shadow-md">
            High-efficiency inverters, grid-tie controllers, and battery management systems for renewable energy grids.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-32 px-8 max-w-7xl mx-auto w-full">
         <div className="flex flex-col items-center text-center">
             <h2 className="text-4xl md:text-5xl font-black text-brand-charcoal mb-6 leading-tight">
               Powering the Future.
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed mb-16 max-w-2xl">
               Maximize energy capture with our advanced silicon and SiC-based power controllers.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8 mb-16 w-full text-left">
               {products.map((product, i) => (
                 <div key={i} className="flex flex-col bg-white overflow-hidden rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer">
                   <div className="h-48 w-full overflow-hidden">
                     <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <div className="p-6 flex flex-col flex-1 bg-gray-50/50">
                     <h3 className="text-xl font-bold text-brand-charcoal mb-2">{product.title}</h3>
                     <p className="text-sm text-gray-500">{product.desc}</p>
                   </div>
                 </div>
               ))}
             </div>

             <button className="px-10 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all hover:-translate-y-1">
               Learn More
             </button>
         </div>
</div>
    </div>
  );
}
