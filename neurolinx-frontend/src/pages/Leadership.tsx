import React, { useState } from 'react';

const leaders = [
  {
    name: "V.V Bharath",
    title: "CEO",
    bio: "Vallabhaneni Venkata Bharath Chowdary Chief Executive Officer and son of Vallabhaneni Venkata Ram.He Holds Bachelor degree in Electronic and Communication and Masters degree in Electrical Engineering from California state University Fullerton. Young but 15 Years of experience in Electronics. Identifying the New Products for development and drive the Product to a fully running Prototype.",
    quote: "Take care of minutes, hours will take care of themselves"
  },
  {
    name: "Sai Pavan S",
    title: "CTO",
    bio: "Sai Pavan Sudha is a seasoned technology leader with more than 2 decades of experience in the design, development, and deployment of automation systems tailored for the railway, utility, and home sectors. He leads cutting-edge initiatives in embedded systems, SCADA solutions, and IoT-based automation, driving digital transformation across critical infrastructure. Throughout his career, Sai Pavan has held key leadership roles, including Technical Project Manager at Ashine Techno Drives and Deputy Manager at AMI Tech India Pvt. Ltd., where he successfully led high-impact projects focused on railway and utility automation systems. His expertise lies in delivering robust, scalable, and innovative automation solutions that meet the evolving demands of modern infrastructure.",
    quote: ""
  },
  {
    name: "V Harshitha",
    title: "CFO",
    bio: "V Harshitha is the one of the director and co-founder of Neurolinx Global Private Limited. She holds degree in Electronics and Instrumention and holds a master's degree in MBA, specialized in Operation and Finance from Vignan Jyothi Institute of Management, Hyderabad. After her studies, she gained some experience in accounts and financing by handling accounts in her father's firm. Currently she is holding the position of Head of Finance.",
    quote: "Every situation gives us some experience; Experience is best teacher it will make us learn new things"
  },
  {
    name: "V Prabhath",
    title: "CSO",
    bio: "Prabhath Chowdary Vallabhaneni is a results-driven leader with deep expertise in marketing, hospitality, and restaurant management. As Managing Partner at Neurolinx Global Pvt. Ltd. (since Nov 2024), he drives strategic growth and innovation. He also leads operations at Seven A Luxury Hotel (since Jul 2018) and Spice Nation Restaurant (since Oct 2020), focusing on guest satisfaction, revenue growth, and brand excellence. Armed with an MBA from GRIET and a BBM from Gitams Vizag, Prabhath excels in digital marketing, brand strategy, business development, hospitality management, team leadership, and CRM.",
    quote: "Leadership is not about titles, it's about impact, influence, and inspiration"
  }
];

export function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-white flex flex-col font-body min-h-[80vh] py-24 px-4 md:px-8">
      
      <div className="w-full text-center mb-16 bg-gradient-to-b from-gray-400 via-gray-100 to-gray-300 py-6 border-y border-gray-400/50 shadow-inner">
         <h1 className="text-4xl md:text-5xl font-black text-brand-charcoal tracking-wide">Leadership Team</h1>
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        
        {/* Carousel Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between" style={{ minHeight: '500px', backgroundColor: '#000' }}>
          
          {/* Background Gradient & Effects */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Dark red on the left fading to black on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-red/50 to-black"></div>
            
            {/* Diagonal overlay to simulate the geometric light streaks */}
            <div 
              className="absolute -inset-[100%] opacity-20 transform -rotate-45"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.2) 100px, rgba(255,255,255,0.2) 150px, transparent 150px, transparent 200px, rgba(255,255,255,0.1) 200px, rgba(255,255,255,0.1) 300px)'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black pointer-events-none"></div>
          </div>

          {/* Carousel Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-8 py-12 lg:p-16 h-full flex-1">
            
            {/* Left side: Profile Image & Name */}
            <div className="flex flex-col items-center w-full lg:w-1/3 mb-10 lg:mb-0">
              <div className="w-48 h-56 bg-[#e0e0e0] flex items-end justify-center overflow-hidden">
                {/* Generic Silhouette */}
                <svg className="w-40 h-40 text-gray-400 -mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold">{leaders[activeIndex].name}</h3>
                <p className="text-white text-sm mt-1">{leaders[activeIndex].title}</p>
              </div>
            </div>

            {/* Right side: Bio & Quote */}
            <div className="flex w-full lg:w-2/3 h-full items-center">
              {/* Vertical White Line Separator */}
              <div className="hidden lg:block w-[2px] bg-white h-48 mx-8"></div>
              
              <div className="flex flex-col flex-1 text-white text-left max-w-2xl">
                <p className="text-sm md:text-base leading-relaxed font-light text-gray-200 mb-6">
                  {leaders[activeIndex].bio}
                </p>
                {leaders[activeIndex].quote && (
                  <div className="flex items-start italic font-semibold text-white">
                    <span className="text-2xl mr-2 leading-none">“</span>
                    <span>{leaders[activeIndex].quote} <span className="text-xl leading-none">”</span></span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="relative z-10 w-full pb-8 flex justify-center">
            <div className="bg-white rounded-full px-4 py-2 flex items-center space-x-3">
              {leaders.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-brand-red scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
