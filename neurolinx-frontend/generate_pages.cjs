const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'NonUvDisinfection.tsx',
    component: 'NonUvDisinfection',
    tagline: 'Safe & Effective',
    title: 'Non-UV Disinfection',
    subtitle: 'Light.',
    desc: 'Advanced non-UV sterilization technology for hospitals, schools, and commercial spaces. 100% human-safe continuous disinfection.',
    heroImg: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Continuous Protection.',
    gridDesc: 'Deploy medical-grade sterilization in occupied spaces without the harmful effects of traditional UV-C.',
    products: [
      { title: "Continuous Sterilization", desc: "Always-on microbial reduction" },
      { title: "Human-Safe", desc: "Zero harmful radiation, 100% safe for occupied rooms" },
      { title: "LED Integration", desc: "Seamlessly replaces standard lighting fixtures" },
      { title: "Pathogen Elimination", desc: "Clinically proven to reduce bacteria and viruses" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1584433144859-1fbb0abb4781?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'Clinically Proven'
  },
  {
    filename: 'Railways.tsx',
    component: 'Railways',
    tagline: 'Next-Gen Transit',
    title: 'Railway',
    subtitle: 'Systems.',
    desc: 'Robust electronic signaling, tracking, and power systems designed for heavy-duty rail infrastructure.',
    heroImg: 'https://images.unsplash.com/photo-1474487548417-7284684a8efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Mission-Critical Infrastructure.',
    gridDesc: 'Neurolinx provides ruggedized electronics designed to withstand extreme vibration and temperature variants in railway networks.',
    products: [
      { title: "Signaling Systems", desc: "High-reliability automated track signaling" },
      { title: "GPS Tracking", desc: "Real-time rolling stock location monitoring" },
      { title: "Power Management", desc: "High-voltage distribution nodes" },
      { title: "Vibration Tolerant", desc: "MIL-SPEC ruggedized circuit designs" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'Heavy-Duty Rated'
  },
  {
    filename: 'WindSolar.tsx',
    component: 'WindSolar',
    tagline: 'Renewable Energy',
    title: 'Wind & Solar',
    subtitle: 'Innovation.',
    desc: 'High-efficiency inverters, grid-tie controllers, and battery management systems for renewable energy grids.',
    heroImg: 'https://images.unsplash.com/photo-1466611653911-9c8581e4d588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Powering the Future.',
    gridDesc: 'Maximize energy capture with our advanced silicon and SiC-based power controllers.',
    products: [
      { title: "Solar Inverters", desc: "99% efficiency grid-tie conversion" },
      { title: "Wind Controllers", desc: "Variable pitch and turbine management" },
      { title: "BMS Systems", desc: "Utility-scale battery cell balancing" },
      { title: "Smart Grid Integration", desc: "Automated peak shaving and load shedding" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1509391366360-120c1cd12d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: '99% Efficiency'
  },
  {
    filename: 'PowerSupply.tsx',
    component: 'PowerSupply',
    tagline: 'Industrial Power',
    title: 'Power Supply &',
    subtitle: 'Drivers.',
    desc: 'Precision engineered SMPS, LED drivers, and industrial AC/DC converters built for extreme durability.',
    heroImg: 'https://images.unsplash.com/photo-1620825937374-87fc7d6adf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Flawless Power Delivery.',
    gridDesc: 'Unmatched stability and noise filtering for sensitive electronics and high-power industrial machinery.',
    products: [
      { title: "Industrial SMPS", desc: "High-wattage switched-mode power supplies" },
      { title: "Precision LED Drivers", desc: "Flicker-free constant current modules" },
      { title: "Surge Protection", desc: "Multi-stage MOV and TVS safety circuits" },
      { title: "Thermal Management", desc: "Fanless active cooling designs" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'Stable & Clean'
  },
  {
    filename: 'ChipLevelDesign.tsx',
    component: 'ChipLevelDesign',
    tagline: 'Silicon Architecture',
    title: 'Chip-Level',
    subtitle: 'Designing.',
    desc: 'Custom ASIC, FPGA, and SoC architecture design for highly specialized computing tasks.',
    heroImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Custom Silicon Solutions.',
    gridDesc: 'From RTL design to physical layout, we engineer logic that drives the next generation of hardware.',
    products: [
      { title: "ASIC Design", desc: "Application-specific integrated circuits" },
      { title: "FPGA Prototyping", desc: "Rapid hardware logic verification" },
      { title: "IoT SoC Architecture", desc: "Low-power integrated radio and processing" },
      { title: "RTL Verification", desc: "Rigorous pre-silicon testing and simulation" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'Custom Silicon'
  },
  {
    filename: 'FabFoundry.tsx',
    component: 'FabFoundry',
    tagline: 'Semiconductor Fabrication',
    title: 'Fab',
    subtitle: 'Foundry.',
    desc: 'State-of-the-art cleanroom manufacturing and wafer processing for high-yield silicon production.',
    heroImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Precision Manufacturing.',
    gridDesc: 'Partnering with global foundries to deliver sub-nanometer node fabrication and advanced packaging.',
    products: [
      { title: "Wafer Processing", desc: "High-yield multi-layer lithography" },
      { title: "Advanced Packaging", desc: "2.5D and 3D chiplet integration" },
      { title: "Quality Assurance", desc: "Automated optical inspection and binning" },
      { title: "Cleanroom Logistics", desc: "ISO Class 1 environment handling" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'High Yield'
  },
  {
    filename: 'Robotics.tsx',
    component: 'Robotics',
    tagline: 'Autonomous Systems',
    title: 'Advanced',
    subtitle: 'Robotics.',
    desc: 'Industrial automation, robotic arms, and autonomous guided vehicles (AGVs) for smart factories.',
    heroImg: 'https://images.unsplash.com/photo-1485827404703-89b55fcaa05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'The Future of Labor.',
    gridDesc: 'Increase throughput and safety with our intelligent, sensor-fused robotic platforms.',
    products: [
      { title: "Industrial Arms", desc: "6-axis precision manufacturing robots" },
      { title: "AGV Logistics", desc: "Autonomous warehouse navigation systems" },
      { title: "Sensor Fusion", desc: "LiDAR and optical vision processing" },
      { title: "Cobots", desc: "Human-safe collaborative robotics" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'Precision AI'
  },
  {
    filename: 'ArtificialIntelligence.tsx',
    component: 'ArtificialIntelligence',
    tagline: 'Machine Learning',
    title: 'Artificial',
    subtitle: 'Intelligence.',
    desc: 'Edge computing, predictive maintenance, and computer vision models optimized for industrial hardware.',
    heroImg: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gridTitle: 'Cognitive Hardware.',
    gridDesc: 'Deploying neural networks directly onto edge devices for zero-latency decision making.',
    products: [
      { title: "Edge AI", desc: "On-device inference and logic" },
      { title: "Computer Vision", desc: "Defect detection and optical sorting" },
      { title: "Predictive Maintenance", desc: "Vibration and thermal anomaly ML models" },
      { title: "NLP Interfaces", desc: "Voice-driven industrial control systems" }
    ],
    featureImg: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badgeText: 'Edge Inference'
  }
];

const generateTemplate = (data) => `import React from 'react';

export function ${data.component}() {
  const products = [
${data.products.map(p => `    { title: "${p.title}", desc: "${p.desc}" }`).join(',\n')}
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body">
      {/* Cinematic Hero */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-brand-charcoal mt-[-40px] pt-[40px]" style={{ minHeight: '60vh' }}>
        <img 
          src="${data.heroImg}" 
          alt="${data.title}"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 mt-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-red/50 bg-brand-red/20 text-white font-medium text-sm tracking-wide uppercase backdrop-blur-md">
            ${data.tagline}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-2xl">
            ${data.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              ${data.subtitle}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light drop-shadow-md">
            ${data.desc}
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-32 px-8 max-w-7xl mx-auto w-full">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
               <h2 className="text-4xl md:text-5xl font-black text-brand-charcoal mb-6 leading-tight">
                 ${data.gridTitle.replace(' ', ' <br/> ')}
               </h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-10">
                 ${data.gridDesc}
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                 {products.map((product, i) => (
                   <div key={i} className="flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                     <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-brand-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                     </div>
                     <h3 className="text-lg font-bold text-brand-charcoal mb-1">{product.title}</h3>
                     <p className="text-sm text-gray-500">{product.desc}</p>
                   </div>
                 ))}
               </div>

               <button className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all hover:-translate-y-1">
                 Learn More
               </button>
            </div>
            
            <div className="relative sticky top-[160px]">
               <img src="${data.featureImg}" alt="${data.title}" className="rounded-[40px] shadow-2xl w-full object-cover h-[700px]" />
               
               <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex items-center space-x-4">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-brand-charcoal leading-tight">${data.badgeText}</div>
                    <div className="text-sm text-gray-500 font-medium mt-1">Industry Leading</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
`;

pages.forEach(page => {
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', page.filename), generateTemplate(page));
  console.log('Created ' + page.filename);
});
