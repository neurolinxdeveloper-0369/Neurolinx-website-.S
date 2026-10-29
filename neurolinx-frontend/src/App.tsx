import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CategoryMenu } from './components/layout/CategoryMenu'
import { CustomCursor } from './components/ui/CustomCursor'

// Scroll to top or anchor on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

// Home Page Components
import { HeroOne } from './components/home/HeroOne'
import { AboutUs } from './components/home/AboutUs'
import { CompanyHighlights } from './components/home/CompanyHighlights'
import { WhyChooseUs } from './components/home/WhyChooseUs'
import { Services } from './components/home/Services'
import { TrustBar } from './components/home/TrustBar'

// Page Components
import { HomeAutomation } from './pages/HomeAutomation'
import { NonUvDisinfection } from './pages/NonUvDisinfection'
import { Railways } from './pages/Railways'
import { WindSolar } from './pages/WindSolar'
import { PowerSupply } from './pages/PowerSupply'
import { ChipLevelDesign } from './pages/ChipLevelDesign'
import { FabFoundry } from './pages/FabFoundry'
import { Robotics } from './pages/Robotics'
import { ArtificialIntelligence } from './pages/ArtificialIntelligence'
import { About } from './pages/About'
import { Leadership } from './pages/Leadership'
import { Careers } from './pages/Careers'
import { Offices } from './pages/Offices'
import { Contact } from './pages/Contact'

// Create a component for the Home Page
function HomePage() {
  return (
    <>
      <HeroOne />
      <AboutUs />
      <CompanyHighlights />
      <WhyChooseUs />
      <Services />
      <TrustBar />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show loading screen for the home page
    let timer: NodeJS.Timeout | undefined;
    if (location.pathname === '/') {
      setLoading(true);
      timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }

    // Setup scroll listener for the animated Scroll-to-Top button
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      
      {/* 
        Loading Screen Overlay
        Increased z-index to 100 to blur out the Header completely.
      */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md transition-opacity duration-500">
          <div className="loader"></div>
        </div>
      )}

      <div className="min-h-screen bg-[#0B0F19] flex flex-col relative font-body">
        <Header />
        
        <main className="flex-1 w-full relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-automation" element={<HomeAutomation />} />
            <Route path="/non-uv-disinfection" element={<NonUvDisinfection />} />
            <Route path="/railways" element={<Railways />} />
            <Route path="/wind-solar" element={<WindSolar />} />
            <Route path="/power-supply" element={<PowerSupply />} />
            <Route path="/chip-level-design" element={<ChipLevelDesign />} />
            <Route path="/fab-foundry" element={<FabFoundry />} />
            <Route path="/robotics" element={<Robotics />} />
            <Route path="/ai" element={<ArtificialIntelligence />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>

      {/* SmartNode Style Vertical Sticky "Contact Us" Tab on Right Edge */}
      <a
        href="/contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest py-3 px-1.5 rounded-l-xl shadow-2xl transition-all duration-300 hover:pr-3 [writing-mode:vertical-rl] rotate-180 flex items-center justify-center gap-1.5"
      >
        <span>Contact Us</span>
      </a>

      {/* SmartNode Style Floating WhatsApp Widget */}
      <a
        href="https://wa.me/917013486961?text=Hello%20Neurolinx%20Team,%20I%20am%20interested%20in%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Floating Scroll to Top Button (Shifted left so it doesn't overlap WhatsApp) */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-24 z-40 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 text-white border border-white/20 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </>
  )
}

export default App
