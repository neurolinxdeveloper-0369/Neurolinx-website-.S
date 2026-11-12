import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';

interface MenuItem {
  name: string;
  path: string;
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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
    { name: "Remote Monitoring System & Smart Metering", path: "/rms-smart-metering" },
    { name: "Internet of Things", path: "/iot" },
    { name: "Fab Foundry", path: "/fab-foundry" },
    { name: "Chip-Level Designing", path: "/chip-level-design" },
    { name: "Robotics & AI", path: "/robotics" },
    { name: "POS Application", path: "/pos-application" },
  ];

  const products: MenuItem[] = [
    { name: "Smart Home Automation", path: "/home-automation" },
    { name: "Non-UV Disinfection Light", path: "/non-uv-disinfection" },
    { name: "Railways", path: "/railways" },
    { name: "Power Supply & Drivers", path: "/power-supply" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-body ${
      scrolled 
        ? 'bg-[#0B0F19]/85 backdrop-blur-md shadow-2xl py-3' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-3.5 sm:py-5'
    }`}>
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between min-h-[48px] sm:min-h-[52px]">
        
        {/* Left: Official Brand Identity Lockup */}
        <Link to="/" onClick={closeAllDropdowns} className="flex items-center shrink-0 group z-10">
          <img 
            src="/media/neurolinx_logo_full.png" 
            alt="Neurolinx Global Private Limited" 
            className="h-7 sm:h-8 xl:h-10 w-auto object-contain drop-shadow-md group-hover:opacity-95 transition-opacity" 
          />
        </Link>

        {/* Top Center: Navigation Links with Mega Dropdowns */}
        <nav ref={navRef} className="hidden lg:flex items-center space-x-1 xl:space-x-2 absolute left-1/2 -translate-x-1/2">
          
          <Link 
            to="/" 
            onClick={closeAllDropdowns}
            className={`px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors ${
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
            className={`px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors ${
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
              className={`flex items-center gap-1 xl:gap-1.5 px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors ${
                solutionsDropdown || ['/rms-smart-metering', '/iot', '/internet-of-things', '/fab-foundry', '/chip-level-design', '/robotics', '/ai', '/pos-application'].includes(location.pathname)
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
                <div className="w-[320px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-1.5 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-top-1 duration-150 flex flex-col">
                  {solutions.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={closeAllDropdowns}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors w-full"
                    >
                      <span className="truncate">{item.name}</span>
                    </Link>
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
              className={`flex items-center gap-1 xl:gap-1.5 px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors ${
                productsDropdown || ['/home-automation', '/retrofit-touch-panels', '/universal-ir-blaster', '/non-uv-disinfection', '/railways', '/fog-pass', '/signal-exchangers', '/coach-lighting', '/indirect-coach-lighting', '/foot-lamps', '/loco-headlight', '/flasher-light', '/marker-light', '/power-supply', '/pos-application'].includes(location.pathname)
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
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={closeAllDropdowns}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors w-full"
                    >
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Blogs */}
          <Link 
            to="/blogs" 
            onClick={closeAllDropdowns}
            className={`px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors ${
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
            className={`px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors ${
              location.pathname === '/careers' 
                ? 'text-white bg-white/10 font-bold' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Rightmost Controls: Hamburger first, Experience View at the absolute LAST */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto z-10">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Experience View Button: At top right side LAST */}
          <Link
            to="/experience"
            onClick={closeAllDropdowns}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 xl:px-5 xl:py-2.5 rounded-full bg-white text-black font-semibold text-[11px] sm:text-xs xl:text-sm hover:bg-gray-100 transition-all shadow-md hover:scale-105 shrink-0"
          >
            <span>Experience View</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black stroke-[2.5]" />
          </Link>
        </div>

      </div>

      {/* Mobile Slide-Out / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C101A] border-b border-white/15 px-6 py-6 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
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
                  <Link key={idx} to={item.path} onClick={closeAllDropdowns} className="text-xs font-medium text-white hover:text-gray-300 py-1">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2 border-b border-white/5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Products</span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {products.map((item, idx) => (
                  <Link key={idx} to={item.path} onClick={closeAllDropdowns} className="text-xs font-medium text-white hover:text-gray-300 py-1">
                    {item.name}
                  </Link>
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
