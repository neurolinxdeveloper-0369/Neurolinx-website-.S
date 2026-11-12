import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/ui/CustomCursor'

// Scroll to top or anchor on route change

// Smooth sequential top-to-bottom cascade reveal across pages
function PageContentRevealer() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small frame delay to ensure new page DOM elements are fully rendered
    const setupTimer = setTimeout(() => {
      // 1. Gather all content items that participate in reveal
      let elements = Array.from(
        document.querySelectorAll<HTMLElement>('.reveal-item, .reveal-card, [data-reveal]')
      );

      // Auto-detect content elements on pages without explicit markers
      if (elements.length < 5) {
        const autoElements = Array.from(
          document.querySelectorAll<HTMLElement>(
            'main section h1, main section h2, main section p, main section .grid > div, main section [data-card-item], main section .panel'
          )
        ).filter(el => {
          const rect = el.getBoundingClientRect();
          return rect.height > 24 && rect.width > 60;
        });
        autoElements.forEach(el => el.classList.add('reveal-item'));
        elements = Array.from(new Set([...elements, ...autoElements]));
      }

      // 2. Sort all elements strictly by their physical top-to-bottom document position
      elements.sort((a, b) => {
        const rA = a.getBoundingClientRect();
        const rB = b.getBoundingClientRect();
        const topA = rA.top + window.scrollY;
        const topB = rB.top + window.scrollY;
        if (Math.abs(topA - topB) > 16) {
          return topA - topB;
        }
        return rA.left - rB.left;
      });

      // 3. Reset all elements to initial state (opacity: 0, translateY: 22px)
      elements.forEach(el => {
        el.classList.remove('revealed');
      });

      const viewportHeight = window.innerHeight;
      let initialIndex = 0;

      // 4. Assign smooth cascading delays to elements in the initial viewport
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInInitialView = rect.top < viewportHeight * 0.95 && rect.bottom > 0;

        if (isInInitialView) {
          const delay = initialIndex * 70 + 40;
          el.style.transitionDelay = `${delay}ms`;
          initialIndex++;
        } else {
          el.style.transitionDelay = '0ms';
        }
      });

      // 5. Trigger initial viewport cascade
      requestAnimationFrame(() => {
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.95 && rect.bottom > 0) {
            el.classList.add('revealed');
          }
        });
      });

      // 6. Observe elements further down the page to reveal smoothly on scroll
      const observer = new IntersectionObserver((entries) => {
        const visibleEntries = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => {
            const rA = a.boundingClientRect;
            const rB = b.boundingClientRect;
            return rA.top - rB.top || rA.left - rB.left;
          });

        visibleEntries.forEach((entry, idx) => {
          const target = entry.target as HTMLElement;
          if (!target.classList.contains('revealed')) {
            target.style.transitionDelay = `${idx * 75 + 40}ms`;
            target.classList.add('revealed');
            observer.unobserve(target);
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
      });

      // Observe all elements that have not yet been revealed
      elements.forEach(el => {
        if (!el.classList.contains('revealed')) {
          observer.observe(el);
        }
      });

      // 7. Safety fallback to guarantee no content stays hidden
      const safetyTimer = setTimeout(() => {
        elements.forEach(el => el.classList.add('revealed'));
      }, 2500);

      return () => {
        clearTimeout(safetyTimer);
        observer.disconnect();
      };
    }, 50);

    return () => {
      clearTimeout(setupTimer);
    };
  }, [pathname]);

  return null;
}

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
import { AstraLogoCanvas } from './components/home/AstraLogoCanvas'
import { AboutUs } from './components/home/AboutUs'
import { WhyChooseUs } from './components/home/WhyChooseUs'
import { Services } from './components/home/Services'
import { TrustBar } from './components/home/TrustBar'

// Create a component for the Home Page
function HomePage() {
  return (
    <>
      <AstraLogoCanvas />
      <HeroOne />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <TrustBar />
    </>
  )
}

// High-speed Route Code-Splitting: Lazy load secondary pages
const HomeAutomation = lazy(() => import('./pages/HomeAutomation').then(m => ({ default: m.HomeAutomation })));
const RetrofitTouchPanels = lazy(() => import('./pages/RetrofitTouchPanels').then(m => ({ default: m.RetrofitTouchPanels })));
const UniversalIrBlaster = lazy(() => import('./pages/UniversalIrBlaster').then(m => ({ default: m.UniversalIrBlaster })));
const SmartEnergyMeters = lazy(() => import('./pages/SmartEnergyMeters').then(m => ({ default: m.SmartEnergyMeters })));
const SmartWaterControl = lazy(() => import('./pages/SmartWaterControl').then(m => ({ default: m.SmartWaterControl })));
const MotorizedSmartCurtains = lazy(() => import('./pages/MotorizedSmartCurtains').then(m => ({ default: m.MotorizedSmartCurtains })));
const TemperatureMonitor = lazy(() => import('./pages/TemperatureMonitor').then(m => ({ default: m.TemperatureMonitor })));
const NonUvDisinfection = lazy(() => import('./pages/NonUvDisinfection').then(m => ({ default: m.NonUvDisinfection })));
const Railways = lazy(() => import('./pages/Railways').then(m => ({ default: m.Railways })));
const FogPass = lazy(() => import('./pages/FogPass').then(m => ({ default: m.FogPass })));
const SignalExchangers = lazy(() => import('./pages/SignalExchangers').then(m => ({ default: m.SignalExchangers })));
const IndirectCoachLighting = lazy(() => import('./pages/IndirectCoachLighting').then(m => ({ default: m.IndirectCoachLighting })));
const FootLamps = lazy(() => import('./pages/FootLamps').then(m => ({ default: m.FootLamps })));
const LocoHeadlight = lazy(() => import('./pages/LocoHeadlight').then(m => ({ default: m.LocoHeadlight })));
const FlasherLight = lazy(() => import('./pages/FlasherLight').then(m => ({ default: m.FlasherLight })));
const MarkerLight = lazy(() => import('./pages/MarkerLight').then(m => ({ default: m.MarkerLight })));
const WindSolar = lazy(() => import('./pages/WindSolar').then(m => ({ default: m.WindSolar })));
const PowerSupply = lazy(() => import('./pages/PowerSupply').then(m => ({ default: m.PowerSupply })));
const ChipLevelDesign = lazy(() => import('./pages/ChipLevelDesign').then(m => ({ default: m.ChipLevelDesign })));
const FabFoundry = lazy(() => import('./pages/FabFoundry').then(m => ({ default: m.FabFoundry })));
const Robotics = lazy(() => import('./pages/Robotics').then(m => ({ default: m.Robotics })));
const ArtificialIntelligence = lazy(() => import('./pages/ArtificialIntelligence').then(m => ({ default: m.ArtificialIntelligence })));
const RmsSmartMetering = lazy(() => import('./pages/RmsSmartMetering').then(m => ({ default: m.RmsSmartMetering })));
const InternetOfThings = lazy(() => import('./pages/InternetOfThings').then(m => ({ default: m.InternetOfThings })));
const PosApplication = lazy(() => import('./pages/PosApplication').then(m => ({ default: m.PosApplication })));
const PosDemoRequest = lazy(() => import('./pages/PosDemoRequest').then(m => ({ default: m.PosDemoRequest })));
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
      <PageContentRevealer />

      <div className="min-h-screen bg-black flex flex-col relative font-body">
        <Header />
        
        <main className="flex-1 w-full relative">
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home-automation" element={<HomeAutomation />} />
              <Route path="/retrofit-touch-panels" element={<RetrofitTouchPanels />} />
              <Route path="/products/retrofit-touch-panels" element={<RetrofitTouchPanels />} />
              <Route path="/universal-ir-blaster" element={<UniversalIrBlaster />} />
              <Route path="/products/universal-ir-blaster" element={<UniversalIrBlaster />} />
              <Route path="/smart-energy-meters" element={<SmartEnergyMeters />} />
              <Route path="/products/smart-energy-meters" element={<SmartEnergyMeters />} />
              <Route path="/smart-water-control" element={<SmartWaterControl />} />
              <Route path="/products/smart-water-control" element={<SmartWaterControl />} />
              <Route path="/motorized-smart-curtains" element={<MotorizedSmartCurtains />} />
              <Route path="/products/motorized-smart-curtains" element={<MotorizedSmartCurtains />} />
              <Route path="/temperature-monitor" element={<TemperatureMonitor />} />
              <Route path="/products/temperature-monitor" element={<TemperatureMonitor />} />
              <Route path="/temperature-monitor-alert-systems" element={<TemperatureMonitor />} />
              <Route path="/products/temperature-monitor-alert-systems" element={<TemperatureMonitor />} />
              <Route path="/non-uv-disinfection" element={<NonUvDisinfection />} />
              <Route path="/railways" element={<Railways />} />
              <Route path="/fog-pass" element={<FogPass />} />
              <Route path="/railways/fog-pass" element={<FogPass />} />
              <Route path="/signal-exchangers" element={<SignalExchangers />} />
              <Route path="/railways/signal-exchangers" element={<SignalExchangers />} />
              <Route path="/products/signal-exchangers" element={<SignalExchangers />} />
              <Route path="/indirect-coach-lighting" element={<IndirectCoachLighting />} />
              <Route path="/coach-lighting" element={<IndirectCoachLighting />} />
              <Route path="/railways/indirect-coach-lighting" element={<IndirectCoachLighting />} />
              <Route path="/railways/coach-lighting" element={<IndirectCoachLighting />} />
              <Route path="/products/indirect-coach-lighting" element={<IndirectCoachLighting />} />
              <Route path="/products/coach-lighting" element={<IndirectCoachLighting />} />
              <Route path="/foot-lamps" element={<FootLamps />} />
              <Route path="/railways/foot-lamps" element={<FootLamps />} />
              <Route path="/products/foot-lamps" element={<FootLamps />} />
              <Route path="/loco-headlight" element={<LocoHeadlight />} />
              <Route path="/railways/loco-headlight" element={<LocoHeadlight />} />
              <Route path="/products/loco-headlight" element={<LocoHeadlight />} />
              <Route path="/flasher-light" element={<FlasherLight />} />
              <Route path="/railways/flasher-light" element={<FlasherLight />} />
              <Route path="/products/flasher-light" element={<FlasherLight />} />
              <Route path="/marker-light" element={<MarkerLight />} />
              <Route path="/railways/marker-light" element={<MarkerLight />} />
              <Route path="/products/marker-light" element={<MarkerLight />} />
              <Route path="/wind-solar" element={<WindSolar />} />
              <Route path="/power-supply" element={<PowerSupply />} />
              <Route path="/products/power-supply" element={<PowerSupply />} />
              <Route path="/power-supply-drivers" element={<PowerSupply />} />
              <Route path="/products/power-supply-drivers" element={<PowerSupply />} />
              <Route path="/chip-level-design" element={<ChipLevelDesign />} />
              <Route path="/fab-foundry" element={<FabFoundry />} />
              <Route path="/robotics" element={<Robotics />} />
              <Route path="/ai" element={<ArtificialIntelligence />} />
              <Route path="/rms-smart-metering" element={<RmsSmartMetering />} />
              <Route path="/solutions" element={<RmsSmartMetering />} />
              <Route path="/iot" element={<InternetOfThings />} />
              <Route path="/internet-of-things" element={<InternetOfThings />} />
              <Route path="/pos-application" element={<PosApplication />} />
              <Route path="/pos-demo" element={<PosDemoRequest />} />
              <Route path="/request-demo" element={<PosDemoRequest />} />
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

      {/* SmartNode Style Vertical Sticky "Contact Us" Tab on Right Edge (Hidden on Home Dashboard) */}
      {location.pathname !== '/' && (
        <a
          href="/contact"
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#E0001B] hover:bg-[#c00017] text-white font-bold text-xs uppercase tracking-widest py-3 px-1.5 rounded-l-xl shadow-2xl transition-all duration-300 hover:pr-3 [writing-mode:vertical-rl] rotate-180 flex items-center justify-center gap-1.5"
        >
          <span>Contact Us</span>
        </a>
      )}

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
