import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
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

// Immediate eager-loaded Home Page Components for instant first paint
import { HeroOne } from './components/home/HeroOne'
import { AboutUs } from './components/home/AboutUs'
import { CompanyHighlights } from './components/home/CompanyHighlights'
import { WhyChooseUs } from './components/home/WhyChooseUs'
import { Services } from './components/home/Services'
import { TrustBar } from './components/home/TrustBar'

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

// High-speed Route Code-Splitting: Lazy load secondary pages
const HomeAutomation = lazy(() => import('./pages/HomeAutomation').then(m => ({ default: m.HomeAutomation })));
const NonUvDisinfection = lazy(() => import('./pages/NonUvDisinfection').then(m => ({ default: m.NonUvDisinfection })));
const Railways = lazy(() => import('./pages/Railways').then(m => ({ default: m.Railways })));
const WindSolar = lazy(() => import('./pages/WindSolar').then(m => ({ default: m.WindSolar })));
const PowerSupply = lazy(() => import('./pages/PowerSupply').then(m => ({ default: m.PowerSupply })));
const ChipLevelDesign = lazy(() => import('./pages/ChipLevelDesign').then(m => ({ default: m.ChipLevelDesign })));
const FabFoundry = lazy(() => import('./pages/FabFoundry').then(m => ({ default: m.FabFoundry })));
const Robotics = lazy(() => import('./pages/Robotics').then(m => ({ default: m.Robotics })));
const ArtificialIntelligence = lazy(() => import('./pages/ArtificialIntelligence').then(m => ({ default: m.ArtificialIntelligence })));
const RmsSmartMetering = lazy(() => import('./pages/RmsSmartMetering').then(m => ({ default: m.RmsSmartMetering })));
const PosApplication = lazy(() => import('./pages/PosApplication').then(m => ({ default: m.PosApplication })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Leadership = lazy(() => import('./pages/Leadership').then(m => ({ default: m.Leadership })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const Blogs = lazy(() => import('./pages/Blogs').then(m => ({ default: m.Blogs })));
const ExperienceView = lazy(() => import('./pages/ExperienceView').then(m => ({ default: m.ExperienceView })));
const Offices = lazy(() => import('./pages/Offices').then(m => ({ default: m.Offices })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
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

      <div className="min-h-screen bg-[#0B0F19] flex flex-col relative font-body">
        <Header />
        
        <main className="flex-1 w-full relative">
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
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
              <Route path="/rms-smart-metering" element={<RmsSmartMetering />} />
              <Route path="/pos-application" element={<PosApplication />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/experience" element={<ExperienceView />} />
              <Route path="/offices" element={<Offices />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50 animate-float-whatsapp">
        <a
          href="https://wa.me/917013486961?text=Hello%20Neurolinx%20Team,%20I%20am%20interested%20in%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
          {/* Subtle pulse ring behind icon */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
          
          <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>

      {/* Floating Scroll to Top Button */}
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
