import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function CategoryMenu() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Home Automation", path: "/home-automation" },
    { name: "Non-UV Disinfection Light", path: "/non-uv-disinfection" },
    { name: "Railways", path: "/railways" },
    { name: "Wind/Solar", path: "/wind-solar" },
    { name: "Power Supply & Drivers", path: "/power-supply" },
    { name: "Chip-Level Designing", path: "/chip-level-design" },
    { name: "Fab Foundry", path: "/fab-foundry" },
    { name: "Robotics", path: "/robotics" },
    { name: "Artificial Intelligence", path: "/ai" }
  ];

  return (
    <div className="absolute top-[160px] left-0 w-full h-[50px] bg-black/40 backdrop-blur-xl border-y border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center overflow-x-auto z-40 pointer-events-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex items-center space-x-6 px-6 whitespace-nowrap min-w-max mx-auto">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <div key={index} className="flex items-center group">
              <Link 
                to={item.path} 
                className={`text-[13px] font-medium tracking-wider drop-shadow-md transition-all duration-300 ${isActive ? 'text-brand-red font-bold' : 'text-gray-300/90 hover:text-white'}`}
              >
                {item.name}
              </Link>
              {index < menuItems.length - 1 && (
                <span className="text-white/20 font-light ml-6">|</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
