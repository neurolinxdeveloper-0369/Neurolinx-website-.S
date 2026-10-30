import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';

interface SubSubMenuItem {
  name: string;
  path: string;
}

interface SubMenuItem {
  name: string;
  path: string;
  hasArrow?: boolean;
  subItems?: SubSubMenuItem[];
}

interface MenuItem {
  name: string;
  path: string;
  subItems?: SubMenuItem[];
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeAllDropdowns = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setSolutionsDropdown(false);
    setProductsDropdown(false);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsDropdown(false);
    setSolutionsDropdown(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdown(false);
    }, 200);
  };

  const handleProductsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setSolutionsDropdown(false);
    setProductsDropdown(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdown(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    closeAllDropdowns();
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
  }, []);

  const solutions: MenuItem[] = [
    { 
      name: "RMS & Smart Metering Analytics", 
      path: "/rms-smart-metering",
      subItems: [
        { name: "Remote Monitoring Systems", path: "/rms-smart-metering" },
        { name: "Smart Metering Analytics", path: "/rms-smart-metering" },
        { name: "DLMS/COSEM IoT Gateways", path: "/rms-smart-metering" },
        { name: "Railway Substation SCADA", path: "/rms-smart-metering" },
      ]
    },
    { 
      name: "Fab Foundry", 
      path: "/fab-foundry",
      subItems: [
        { name: "Silicon Wafer Processing", path: "/fab-foundry" },
        { name: "Advanced 2.5D/3D Packaging", path: "/fab-foundry" },
        { name: "Cleanroom Logistics", path: "/fab-foundry" },
        { name: "Quality Assurance & Binning", path: "/fab-foundry" },
      ]
    },
    { 
      name: "Chip-Level Designing", 
      path: "/chip-level-design",
      subItems: [
        { name: "ASIC & FPGA Prototyping", path: "/chip-level-design" },
        { name: "RTL Architecture Design", path: "/chip-level-design" },
        { name: "Physical Verification", path: "/chip-level-design" },
        { name: "Embedded Firmware Porting", path: "/chip-level-design" },
      ]
    },
    { 
      name: "Robotics & AI", 
      path: "/robotics",
      subItems: [
        { name: "Autonomous AGVs", path: "/robotics" },
        { name: "Industrial Robotic Arms", path: "/robotics" },
        { name: "Edge AI Computer Vision", path: "/ai" },
        { name: "Predictive Factory Automation", path: "/robotics" },
      ]
    },
    { 
      name: "POS Application", 
      path: "/pos-application",
      subItems: [
        { name: "Embedded POS Terminal Software", path: "/pos-application" },
        { name: "Omnichannel Payment Rails", path: "/pos-application" },
        { name: "PCI-PTS Security Kernels", path: "/pos-application" },
        { name: "Cloud Fleet & OTA Management", path: "/pos-application" },
      ]
    },
  ];

  const products: MenuItem[] = [
    { 
      name: "Smart Home Automation", 
      path: "/home-automation",
      subItems: [
        { 
          name: "Lighting Automation", 
          path: "/home-automation#products-catalog", 
          hasArrow: true,
          subItems: [
            { name: "Touch Glass Switchboards", path: "/home-automation#products-catalog" },
            { name: "Retrofit Switch Modules", path: "/home-automation#products-catalog" },
            { name: "Smart Dimmers & CCT", path: "/home-automation#products-catalog" },
            { name: "RGBW Scene Automation", path: "/home-automation#products-catalog" },
          ]
        },
        { 
          name: "HVAC / Audio-Video", 
          path: "/home-automation#products-catalog", 
          hasArrow: true,
          subItems: [
            { name: "Universal IR Blaster (360°)", path: "/home-automation#products-catalog" },
            { name: "Smart AC Climate Control", path: "/home-automation#products-catalog" },
            { name: "Home Theatre & Audio Sync", path: "/home-automation#products-catalog" },
          ]
        },
        { 
          name: "Security", 
          path: "/home-automation#products-catalog", 
          hasArrow: true,
          subItems: [
            { name: "Smart Keyless Door Locks", path: "/home-automation#products-catalog" },
            { name: "PIR Motion & Presence", path: "/home-automation#products-catalog" },
            { name: "Gas Leak & Smoke Sensors", path: "/home-automation#products-catalog" },
            { name: "Door/Window Magnetic Sensors", path: "/home-automation#products-catalog" },
          ]
        },
        { 
          name: "Smart Way Control", 
          path: "/home-automation#products-catalog", 
          hasArrow: true,
          subItems: [
            { name: "2-Way & Multi-Way Mesh", path: "/home-automation#products-catalog" },
            { name: "Master Bedroom & Entry Control", path: "/home-automation#products-catalog" },
            { name: "Local Wireless Synchronization", path: "/home-automation#products-catalog" },
          ]
        },
        { name: "Smart Node Application", path: "/home-automation#products-catalog" },
        { name: "Third-Party Integration", path: "/home-automation#products-catalog" },
        { name: "Accessories", path: "/home-automation#products-catalog" },
      ]
    },
    { 
      name: "Non-UV Disinfection Light", 
      path: "/non-uv-disinfection",
      subItems: [
        { name: "405nm Cleanroom Panels", path: "/non-uv-disinfection#models-section" },
        { name: "Commercial Disinfection Downlights", path: "/non-uv-disinfection#models-section" },
        { name: "Hospital & Lab Lighting", path: "/non-uv-disinfection#models-section" },
        { name: "Continuous Sterilization Tech", path: "/non-uv-disinfection" },
      ]
    },
    { 
      name: "Railways", 
      path: "/railways",
      subItems: [
        { name: "Fog Pass Device (v2.0 & v3.0)", path: "/railways#fog-pass-section" },
        { name: "LED LOCO Head Light & Markers", path: "/railways#railway-products" },
        { name: "Coach LED Lighting Systems", path: "/railways#railway-products" },
        { name: "Signaling & Power Units", path: "/railways" },
      ]
    },
    { 
      name: "Power Supply & Drivers", 
      path: "/power-supply",
      subItems: [
        { name: "Industrial AC-DC SMPS", path: "/power-supply#products-grid" },
        { name: "DC-DC Converters", path: "/power-supply#products-grid" },
        { name: "Precision LED Constant Current", path: "/power-supply#products-grid" },
        { name: "10kV Surge Protected Drivers", path: "/power-supply" },
      ]
    },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-body ${
      scrolled 
        ? 'bg-[#0B0F19]/85 backdrop-blur-md shadow-2xl py-3.5' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
    }`}>
      <div className="relative w-full px-6 sm:px-8 lg:px-12 flex items-center justify-between min-h-[52px]">
        
        {/* Left: Official Brand Identity Lockup */}
        <Link to="/" onClick={closeAllDropdowns} className="flex items-center shrink-0 group z-10">
          <img 
            src="/media/neurolinx_logo_full.png" 
            alt="Neurolinx Global Private Limited" 
            className="h-8 md:h-10 w-auto object-contain drop-shadow-md group-hover:opacity-95 transition-opacity" 
          />
        </Link>

        {/* Top Center: Navigation Links with Mega Dropdowns */}
        <nav ref={navRef} className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 -translate-x-1/2">
          
          <Link 
            to="/" 
            onClick={closeAllDropdowns}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              location.pathname === '/' 
                ? 'text-white bg-white/10 font-bold' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            onClick={closeAllDropdowns}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              location.pathname === '/about' 
                ? 'text-white bg-white/10 font-bold' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            About Us
          </Link>

          {/* Our Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            <button 
              type="button"
              onClick={() => setSolutionsDropdown(prev => !prev)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                solutionsDropdown || ['/rms-smart-metering', '/fab-foundry', '/chip-level-design', '/robotics', '/ai', '/pos-application'].includes(location.pathname)
                  ? 'text-white bg-white/10 font-bold' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdown ? 'rotate-180 text-white' : 'text-gray-400'}`} />
            </button>

            {solutionsDropdown && (
              <div 
                className="absolute top-full left-0 pt-2 z-50"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <div className="w-[270px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-top-1 duration-150 flex flex-col">
                  {solutions.map((item, idx) => (
                    <div key={idx} className="relative group/solutionItem">
                      <Link
                        to={item.path}
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors w-full"
                      >
                        <span className="truncate">{item.name}</span>
                        {item.subItems && (
                          <span className="text-[10px] text-gray-400 group-hover/solutionItem:text-white transition-colors ml-2 shrink-0">
                            ▸
                          </span>
                        )}
                      </Link>
                      {item.subItems && (
                        <div className="hidden group-hover/solutionItem:block absolute left-full top-0 pl-1 z-50">
                          <div className="w-[260px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/90 animate-in fade-in duration-150 flex flex-col">
                            {item.subItems.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={closeAllDropdowns}
                                className="flex items-center px-3.5 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                              >
                                <span className="truncate">{sub.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Our Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          >
            <button 
              type="button"
              onClick={() => setProductsDropdown(prev => !prev)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                productsDropdown || ['/home-automation', '/non-uv-disinfection', '/railways', '/power-supply'].includes(location.pathname)
                  ? 'text-white bg-white/10 font-bold' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-white' : 'text-gray-400'}`} />
            </button>

            {productsDropdown && (
              <div 
                className="absolute top-full left-0 pt-2 z-50"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <div className="w-[270px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-top-1 duration-150 flex flex-col">
                  {products.map((item, idx) => (
                    <div key={idx} className="relative group/productItem">
                      <Link
                        to={item.path}
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors w-full"
                      >
                        <span className="truncate">{item.name}</span>
                        {item.subItems && (
                          <span className="text-[10px] text-gray-400 group-hover/productItem:text-white transition-colors ml-2 shrink-0">
                            ▸
                          </span>
                        )}
                      </Link>
                      {item.subItems && (
                        <div className="hidden group-hover/productItem:block absolute left-full top-0 pl-1 z-50">
                          <div className="w-[260px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/90 animate-in fade-in duration-150 flex flex-col">
                            {item.subItems.map((sub, sIdx) => (
                              <div key={sIdx} className="relative group/subItem">
                                <Link
                                  to={sub.path}
                                  onClick={closeAllDropdowns}
                                  className="flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors w-full"
                                >
                                  <span className="truncate">{sub.name}</span>
                                  {(sub.hasArrow || sub.subItems) && (
                                    <span className="text-[10px] text-gray-400 group-hover/subItem:text-white transition-colors ml-2 shrink-0">
                                      ▸
                                    </span>
                                  )}
                                </Link>
                                {sub.subItems && (
                                  <div className="hidden group-hover/subItem:block absolute left-full top-0 pl-1 z-50">
                                    <div className="w-[240px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/90 animate-in fade-in duration-150 flex flex-col">
                                      {sub.subItems.map((subSub, ssIdx) => (
                                        <Link
                                          key={ssIdx}
                                          to={subSub.path}
                                          onClick={closeAllDropdowns}
                                          className="flex items-center px-3.5 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                          <span className="truncate">{subSub.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Blogs */}
          <Link 
            to="/blogs" 
            onClick={closeAllDropdowns}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              location.pathname === '/blogs' 
                ? 'text-white bg-white/10 font-bold' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Blogs
          </Link>

          {/* Careers */}
          <Link 
            to="/careers" 
            onClick={closeAllDropdowns}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              location.pathname === '/careers' 
                ? 'text-white bg-white/10 font-bold' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Rightmost Controls: Hamburger first, Experience View at the absolute LAST */}
        <div className="flex items-center gap-3 ml-auto z-10">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Experience View Button: At top right side LAST */}
          <Link
            to="/experience"
            onClick={closeAllDropdowns}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-md hover:scale-105 shrink-0"
          >
            <span>Experience View</span>
            <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
          </Link>
        </div>

      </div>

      {/* Mobile Slide-Out / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C101A] border-b border-white/15 px-6 py-6 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2 border-b border-white/5">
              Home
            </Link>
            <Link to="/about" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2 border-b border-white/5">
              About Us
            </Link>
            
            <div className="py-2 border-b border-white/5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Solutions</span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <Link key={idx} to={item.path} onClick={closeAllDropdowns} className="text-xs font-medium text-white hover:text-gray-300 py-1 flex items-center justify-between">
                      <span>{item.name}</span>
                    </Link>
                    {item.subItems && (
                      <div className="pl-3 flex flex-col space-y-1 border-l border-white/10 ml-1 my-1">
                        {item.subItems.map((sub, sIdx) => (
                          <Link key={sIdx} to={sub.path} onClick={closeAllDropdowns} className="text-[11px] text-gray-400 hover:text-white py-0.5">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="py-2 border-b border-white/5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Products</span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {products.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <Link key={idx} to={item.path} onClick={closeAllDropdowns} className="text-xs font-medium text-white hover:text-gray-300 py-1 flex items-center justify-between">
                      <span>{item.name}</span>
                    </Link>
                    {item.subItems && (
                      <div className="pl-3 flex flex-col space-y-1 border-l border-white/10 ml-1 my-1">
                        {item.subItems.map((sub, sIdx) => (
                          <div key={sIdx} className="flex flex-col">
                            <Link to={sub.path} onClick={closeAllDropdowns} className="text-[11px] text-gray-400 hover:text-white py-0.5">
                              {sub.name}
                            </Link>
                            {sub.subItems && (
                              <div className="pl-3 flex flex-col space-y-0.5 border-l border-white/10 ml-1 my-0.5">
                                {sub.subItems.map((subSub, ssIdx) => (
                                  <Link key={ssIdx} to={subSub.path} onClick={closeAllDropdowns} className="text-[10px] text-gray-500 hover:text-gray-300 py-0.5">
                                    {subSub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/blogs" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2 border-b border-white/5">
              Blogs
            </Link>

            <Link to="/careers" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2">
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
