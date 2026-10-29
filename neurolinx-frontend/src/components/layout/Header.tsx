import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Train, 
  Zap, 
  Sparkles, 
  Cpu, 
  Sun, 
  Radio, 
  Bot, 
  Sliders, 
  Droplets, 
  Thermometer, 
  Moon, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeAllDropdowns = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setSolutionsDropdown(false);
    setProductsDropdown(false);
    setResourcesDropdown(false);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setProductsDropdown(false);
    setResourcesDropdown(false);
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
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setSolutionsDropdown(false);
    setResourcesDropdown(false);
    setProductsDropdown(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdown(false);
    }, 200);
  };

  const handleResourcesEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setSolutionsDropdown(false);
    setProductsDropdown(false);
    setResourcesDropdown(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesDropdown(false);
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
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  const solutions = [
    { name: "Smart Home Automation", path: "/home-automation", icon: Home, desc: "Retrofit switches, scenes & climate control" },
    { name: "Advanced Railways", path: "/railways", icon: Train, desc: "Fog Pass (v2/v3), signaling & LED coach lights" },
    { name: "Power Supply & Drivers", path: "/power-supply", icon: Zap, desc: "Industrial AC-DC, DC-DC & LED drivers" },
    { name: "Non-UV Disinfection Light", path: "/non-uv-disinfection", icon: Sparkles, desc: "Continuous 100% human-safe sterilization" },
    { name: "Wind / Solar Systems", path: "/wind-solar", icon: Sun, desc: "Renewable energy microgrid integration" },
    { name: "Chip-Level Designing", path: "/chip-level-design", icon: Cpu, desc: "ASIC, FPGA prototyping & RTL verification" },
    { name: "Fab Foundry Services", path: "/fab-foundry", icon: Layers, desc: "Cleanroom silicon wafer fabrication" },
    { name: "Robotics & AGVs", path: "/robotics", icon: Bot, desc: "Autonomous industrial logistics & cobots" },
    { name: "Artificial Intelligence", path: "/ai", icon: Radio, desc: "Edge AI vision & predictive automation" },
  ];

  const products = [
    { name: "Smart Switches", path: "/home-automation#products-catalog", icon: Sliders, badge: "1 to 16 Gang" },
    { name: "Universal IR Blaster", path: "/home-automation#products-catalog", icon: Radio, badge: "360° Control" },
    { name: "1-ϕ & 3-ϕ Smart Energy Meters", path: "/home-automation#products-catalog", icon: Zap, badge: "Power Monitor" },
    { name: "Smart Water Control System", path: "/home-automation#products-catalog", icon: Droplets, badge: "Dry Run Safe" },
    { name: "Temperature Monitor & Alerts", path: "/home-automation#products-catalog", icon: Thermometer, badge: "Instant Alert" },
    { name: "Motorized Smart Curtains", path: "/home-automation#products-catalog", icon: Moon, badge: "Circadian Sync" },
    { name: "Fog Pass Device (v2.0 & v3.0)", path: "/railways#fog-pass-section", icon: Train, badge: "RDSO Standard" },
    { name: "LED LOCO Head Light & Markers", path: "/railways#railway-products", icon: Sun, badge: "Rolling Stock" },
    { name: "Precision LED Drivers & SMPS", path: "/power-supply#products-grid", icon: Zap, badge: "10kV Surge" },
    { name: "2x2 Cleanroom Disinfection Panel", path: "/non-uv-disinfection#models-section", icon: Sparkles, badge: "405nm Light" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-body ${
      scrolled 
        ? 'bg-[#0B0F19]/85 backdrop-blur-md shadow-2xl py-3.5' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Authentic Brand Identity (SmartNode Style) */}
        <Link to="/" onClick={closeAllDropdowns} className="flex items-center gap-3 shrink-0 group">
          <img 
            src="/media/logo.png" 
            alt="Neurolinx Emblem" 
            className="w-9 h-9 md:w-10 md:h-10 object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-white tracking-tight leading-none group-hover:text-brand-red transition-colors">
              Neurolinx
            </span>
            <span className="text-[10px] md:text-[11px] text-gray-400 font-semibold tracking-[0.16em] uppercase mt-0.5">
              Global Private Limited
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links with Mega Dropdowns */}
        <nav ref={navRef} className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          
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
                solutionsDropdown || ['/home-automation', '/railways', '/power-supply', '/non-uv-disinfection', '/wind-solar', '/chip-level-design', '/fab-foundry', '/robotics', '/ai'].includes(location.pathname)
                  ? 'text-white bg-white/10 font-bold' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Our Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdown ? 'rotate-180 text-brand-red' : 'text-gray-400'}`} />
            </button>

            {solutionsDropdown && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <div className="w-[580px] bg-[#0F172A] border border-white/15 rounded-3xl p-5 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-2 gap-2">
                  {solutions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={closeAllDropdowns}
                        className="p-3 rounded-2xl hover:bg-white/10 flex items-start gap-3 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-red group-hover/item:border-brand-red transition-colors">
                          <Icon className="w-4 h-4 text-brand-red group-hover/item:text-white transition-colors" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white group-hover/item:text-brand-red transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-gray-400 leading-snug mt-0.5 line-clamp-1">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
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
                productsDropdown
                  ? 'text-white bg-white/10 font-bold' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Our Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-brand-red' : 'text-gray-400'}`} />
            </button>

            {productsDropdown && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <div className="w-[620px] bg-[#0F172A] border border-white/15 rounded-3xl p-5 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-2 gap-2">
                  {products.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={closeAllDropdowns}
                        className="p-3 rounded-2xl hover:bg-white/10 flex items-center justify-between gap-3 transition-colors group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-brand-red" />
                          <span className="text-xs font-bold text-white group-hover/item:text-brand-red transition-colors truncate max-w-[180px]">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium shrink-0">
                          {item.badge}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <button 
              type="button"
              onClick={() => setResourcesDropdown(prev => !prev)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesDropdown ? 'rotate-180 text-brand-red' : 'text-gray-400'}`} />
            </button>

            {resourcesDropdown && (
              <div 
                className="absolute top-full left-0 pt-2 z-50"
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                <div className="w-56 bg-[#0F172A] border border-white/15 rounded-2xl p-3 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-1">
                  <a 
                    href="tel:+917013486961"
                    onClick={closeAllDropdowns}
                    className="px-3 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>Download Product Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                  </a>
                  <Link 
                    to="/railways#fog-pass-section"
                    onClick={closeAllDropdowns}
                    className="px-3 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>RDSO Rail Certifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                  </Link>
                  <Link 
                    to="/non-uv-disinfection#clinical-section"
                    onClick={closeAllDropdowns}
                    className="px-3 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>IEC 62471 Safety Reports</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            to="/contact" 
            onClick={closeAllDropdowns}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              location.pathname === '/contact' 
                ? 'text-white bg-white/10 font-bold' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right: Circular Action Buttons (From SmartNode Image 2) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Circular Brochure Download Icon Button */}
          <a
            href="mailto:support@neurolinx.in?subject=Neurolinx%20Brochure%20Download%20Request"
            title="Download Brochure"
            className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-md hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />
          </a>

          {/* Circular Phone Icon Button */}
          <a
            href="tel:+917013486961"
            title="Call Support: +91 7013486961"
            className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-md hover:scale-105"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Quick CTA */}
          <Link
            to="/contact"
            onClick={closeAllDropdowns}
            className="ml-1 px-5 py-2 rounded-full bg-brand-red hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-brand-red/30 transition-all hover:-translate-y-0.5"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Slide-Out / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F172A] border-b border-white/15 px-6 py-6 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2 border-b border-white/5">
              Home
            </Link>
            <Link to="/about" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2 border-b border-white/5">
              About Us
            </Link>
            
            <div className="py-2 border-b border-white/5">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">Our Solutions</span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {solutions.map((item, idx) => (
                  <Link key={idx} to={item.path} onClick={closeAllDropdowns} className="text-xs text-gray-300 hover:text-white py-1">
                    • {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2 border-b border-white/5">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">Our Products</span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {products.map((item, idx) => (
                  <Link key={idx} to={item.path} onClick={closeAllDropdowns} className="text-xs text-gray-300 hover:text-white py-1">
                    • {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" onClick={closeAllDropdowns} className="text-sm font-semibold text-white py-2">
              Contact Us
            </Link>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="tel:+917013486961"
                className="flex-1 py-3 bg-brand-red text-white text-center rounded-full font-bold text-xs"
              >
                Call: +91 7013486961
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
