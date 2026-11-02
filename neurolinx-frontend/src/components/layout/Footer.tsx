import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 mb-12 sm:mb-16">
          
          {/* Col 1: Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
               <img src="/media/logo_3547.png" alt="Neurolinx Global Private Limited" className="h-10 md:h-12 object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Pioneering the future of electronics, automation, and AI robotics systems. Engineered for the next generation.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/home-automation" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Smart Home Automation</Link></li>
              <li><Link to="/non-uv-disinfection" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Non-UV Disinfection Light</Link></li>
              <li><Link to="/railways" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Railways</Link></li>
              <li><Link to="/fog-pass" className="text-gray-400 hover:text-brand-red transition-colors text-sm">FogPASS Device</Link></li>
              <li><Link to="/power-supply" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Power Supply &amp; Drivers</Link></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/rms-smart-metering" className="text-gray-400 hover:text-brand-red transition-colors text-sm">RMS &amp; Smart Metering Analytics</Link></li>
              <li><Link to="/fab-foundry" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Fab Foundry</Link></li>
              <li><Link to="/chip-level-design" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Chip-Level Designing</Link></li>
              <li><Link to="/robotics" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Robotics &amp; AI</Link></li>
              <li><Link to="/pos-application" className="text-gray-400 hover:text-brand-red transition-colors text-sm">POS Application</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-red transition-colors text-sm">About Us</Link></li>
              <li><Link to="/leadership" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Leadership Team</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Careers</Link></li>
              <li><Link to="/offices" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Global Offices</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-red shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div className="flex flex-col">
                  <span className="text-gray-300 text-sm">+91 7013486961</span>
                  <span className="text-gray-300 text-sm mt-1">+91 8074067851</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-red shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-gray-300 text-sm">support@neurolinx.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-red shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-gray-300 text-sm leading-relaxed">C12/A, Industrial Area, Kushaiguda,<br/>Hyderabad, Secunderabad,<br/>Telangana 500062</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Neurolinx Global Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-red text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-brand-red text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
