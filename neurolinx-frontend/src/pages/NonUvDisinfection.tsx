import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronRight, 
  Home
} from 'lucide-react';

export function NonUvDisinfection() {
  // 6 Core Disinfection Products matching Home Automation 6-card grid
  const disinfectionProducts = [
    {
      id: "cleanroom-panel",
      shortCode: "NUV-P60",
      title: "2x2 Cleanroom Ceiling Panel",
      tagline: "405nm Cleanroom & Hospital False Ceiling Panel",
      desc: "Flush-mount 2x2 ft and 1x4 ft antimicrobial ceiling panel fixture. Directly replaces standard troffers in hospital ICUs, surgical suites, pathology labs, and pharmaceutical manufacturing facilities for uninterrupted 24/7 pathogen defense.",
      longDesc: "Delivers 5,200+ Lumens of uniform glare-free neutral white task light while continuously emitting 405nm antimicrobial rays that eradicate airborne and surface bio-burden. Certified 100% safe for eyes and skin under international standard IEC 62471 (RG-0 Exempt).",
      img: "/media/continuous_sterilization.jpg",
      badge: "Medical Cleanroom"
    },
    {
      id: "linear-batten",
      shortCode: "NUV-L40",
      title: "Continuous Linear Batten",
      tagline: "Commercial Offices, Hallways & Corridors",
      desc: "Sleek aluminum architectural continuous linear batten designed for office hallways, educational classrooms, and fitness centers. Emits ambient functional white illumination while continuously neutralizing airborne and surface bio-burden.",
      longDesc: "High CRI (>90) architectural profile with integrated microwave radar sensor automation that transitions smoothly between gentle ambient bio-shield and full brightness as occupants enter.",
      img: "/media/led_integration.jpg",
      badge: "Commercial Batten"
    },
    {
      id: "downlight-system",
      shortCode: "NUV-D18",
      title: "Architectural Downlight System",
      tagline: "Restrooms, Elevators & Reception Desks",
      desc: "Compact recessed circular downlight for targeted sterilization over high-touch transit zones such as elevator cabs, doctor consultation chambers, reception desks, and hotel washrooms.",
      longDesc: "IP54 moisture and dust resistant face with deep anti-glare cutoff optics. Continuous 24/7 active free-radical disruption keeps washroom counters, elevator buttons, and door handles sanitized around the clock.",
      img: "/media/human_safe.jpg",
      badge: "Recessed Downlight"
    },
    {
      id: "mobile-sanitizer",
      shortCode: "NUV-M120",
      title: "Mobile Standalone Sanitizer Unit",
      tagline: "Flexible Multi-Room Disinfection Trolley",
      desc: "Portable wheeled sterilization tower designed for rapid deployment across hotel rooms, quarantine zones, dental operatories, and school buses without needing hardwired ceiling installation.",
      longDesc: "Heavy-duty powder-coated steel chassis with smooth-glide castor wheels. Safe to run while people and pets stay in the room, with integrated digital timer and wireless RF remote control.",
      img: "/media/pathogen_elimination.jpg",
      badge: "Mobile Disinfection"
    },
    {
      id: "radar-driver",
      shortCode: "NUV-DRV",
      title: "Precision Radar Sensor & Driver",
      tagline: "5.8GHz Microwave Motion Detection Stage",
      desc: "Industrial-grade constant current solid-state driver with integrated 5.8GHz microwave radar motion detection for automated presence sensing and energy saving.",
      longDesc: "Surge protection up to 3kV, zero-cross switching for hum-free dimming, and autonomous mode switching from standby antimicrobial night-glow to active task illumination.",
      img: "/media/precision_led_drivers.jpg",
      badge: "Power & Sensor Stage"
    },
    {
      id: "smart-touch-control",
      shortCode: "NUV-TCH",
      title: "Smart Touch & Switchboard Control",
      tagline: "Capacitive Glass Touch & App Integration",
      desc: "Capacitive tempered glass touch switchboard and local mesh controller allowing one-touch selection between Day Lighting, Night Shield, and Deep Sanitization modes.",
      longDesc: "Seamlessly synchronizes with the Neurolinx mobile application, Amazon Alexa, and Google Assistant for hands-free voice control and autonomous time-of-day disinfection scheduling.",
      img: "/media/touch_board_premium.jpg",
      badge: "Smart Control Hub"
    }
  ];

  // Selected Product for Slide 3 Feature Showcase
  const [selectedProduct, setSelectedProduct] = useState(disinfectionProducts[0]);

  // Contact Inquiry Form State (Slide 4) matching Home Automation exactly
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'Non-UV Disinfection Light',
    projectType: 'New Building',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Hero Banner Section (Full-Width Edge-to-Edge Clean Architecture matching Home Automation) ── */}
      <div className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24">
        <div className="relative w-full">
          <img 
            src="/media/non_uv_disinfection_hero.jpg" 
            alt="Non-UV Disinfection Light Systems - 100% Human Safe Continuous Sterilization"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* ── Product Showcase: 4-Column Balanced Grid (Matching Home Automation reference) ── */}
      <div id="products-catalog" className="w-full bg-white py-10 md:py-14">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation matching reference */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-5 font-medium">
            <Link to="/" className="flex items-center gap-1.5 hover:text-black transition-colors text-gray-600">
              <Home className="w-4 h-4 text-gray-700" />
              <span>Home</span>
            </Link>
            <span className="text-gray-400 font-normal">&gt;</span>
            <span className="text-gray-900 font-semibold">Non-UV Disinfection Light</span>
          </div>

          {/* 6 Disinfection Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {disinfectionProducts.map((prod) => (
              <a 
                key={prod.id}
                href="#switch-details"
                onClick={() => setSelectedProduct(prod)}
                className="group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-100/60 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
              >
                <div className="relative h-60 sm:h-64 lg:h-72 w-full p-2.5 sm:p-3 overflow-hidden">
                  <div className="w-full h-full overflow-hidden rounded-[18px]">
                    <img 
                      src={prod.img} 
                      alt={prod.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-1 sm:pt-2 flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-1">
                    {prod.title}
                  </h3>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors shadow-sm">
                    <ChevronRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide 3: Universal Disinfection Control Showcase (matching Home Automation reference) ── */}
      <div id="switch-details" className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] border border-gray-100 p-8 sm:p-12 lg:p-16 shadow-sm">
            
            {/* Top Category Heading: Continuous Disinfection in company logo red with underline */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight inline-block">
                <span className="text-brand-red border-b-2 border-brand-red pb-1">
                  Continuous Disinfection
                </span>
              </h2>
            </div>

            {/* Two-Column Content: Left Information + Right Product Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Information */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight">
                  {selectedProduct.title} with Smart App &amp; Sensor Integration
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  Transform your living spaces and commercial environments into continuously protected zones with Neurolinx Non-UV Disinfection Lighting. Eliminate 99.9% of bacteria, mold, and pathogens seamlessly using narrow-band 405nm visible light that is 100% safe for human eyes, skin, and pets under IEC 62471.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {selectedProduct.longDesc} Enjoy intelligent convenience, centralized control, and seamless peace of mind — all designed to make modern living healthier.
                </p>
                <a 
                  href="#slide-4"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-black text-white text-sm font-semibold hover:bg-brand-red transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  View More
                </a>
              </div>

              {/* Right Column: Product Card matching reference design */}
              <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
                <div className="w-full max-w-lg bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                  {/* Card Title */}
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                      {selectedProduct.shortCode}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      {selectedProduct.tagline}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="my-4 py-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src={selectedProduct.img} 
                      alt={selectedProduct.title} 
                      className="w-full h-auto max-h-[380px] object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Button */}
                  <div className="pt-2">
                    <a 
                      href="#slide-4"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-black text-white text-xs sm:text-sm font-semibold hover:bg-brand-red transition-colors shadow-sm cursor-pointer"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── Slide 4: Have Questions? Consultation & Contact Form (Matching Home Automation exactly) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container matching 2nd image */}
          <div className="rounded-[32px] md:rounded-[36px] border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
            
            {/* Left Panel: Pure White Background (Snug & Attached to Form) */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-white px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100/80">
              
              <div>
                {/* Title colored in brand Red and Blue like Neurolinx logo */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] mb-5 tracking-tight">
                  Have<br />
                  <span className="text-brand-red">Question</span><span className="text-[#1A09FA]">s?</span>
                </h2>
                
                <p className="text-sm sm:text-base font-bold text-slate-800 mb-9 tracking-tight">
                  “Let’s make a Smarter World together”
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+919390584000" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 9390584***</span>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@neurolinx.in" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">info@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-relaxed">
                      NEUROLINX GLOBAL PRIVATE LIMITED, C12/A, Industrial Area, Kushaiguda, Hyderabad, Secunderabad, Telangana 500062
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Emblem at the divider seam rotating slowly */}
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <img 
                  src="/media/logo.png" 
                  alt="Neurolinx" 
                  style={{ animation: 'spin 18s linear infinite' }}
                  className="w-12 h-12 object-contain drop-shadow-sm" 
                />
              </div>

            </div>

            {/* Right Panel: Soft Light Gray Background */}
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex-1">
              {inquirySubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    We have received your details. Our smart disinfection lighting team will review your requirements and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Non-UV Disinfection Light',
                        projectType: 'New Building',
                        controlOptions: [],
                        contactNumber: '',
                        city: '',
                        captchaInput: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-brand-red transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySubmitted(true);
                  }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                      <input 
                        type="email" 
                        required 
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                  </div>

                  {/* Row 2: Automation For & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Automation For</label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>Non-UV Disinfection Light</option>
                        <option>Cleanroom & False Ceiling Panels</option>
                        <option>Continuous Linear Battens</option>
                        <option>Architectural Downlights</option>
                        <option>Mobile Standalone Sanitizers</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Project Type</label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({...inquiryForm, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>New Building</option>
                        <option>Existing / Renovation</option>
                        <option>Under Construction</option>
                        <option>Hospital / Medical Facility</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Control For (multiple options) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      Control For ( you can select multiple option )
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Lighting & Scene Control',
                        'Continuous Bio-Shield Disinfection',
                        'Microwave Radar Occupancy Control',
                        'App & Voice Automation'
                      ].map((option) => {
                        const isChecked = inquiryForm.controlOptions.includes(option);
                        return (
                          <label 
                            key={option} 
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none"
                          >
                            <input 
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {
                                const next = isChecked 
                                  ? inquiryForm.controlOptions.filter(o => o !== option)
                                  : [...inquiryForm.controlOptions, option];
                                setInquiryForm({...inquiryForm, controlOptions: next});
                              }}
                              className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 accent-black cursor-pointer bg-white"
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Contact Number & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Contact Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={inquiryForm.contactNumber}
                        onChange={(e) => setInquiryForm({...inquiryForm, contactNumber: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">City</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.city}
                        onChange={(e) => setInquiryForm({...inquiryForm, city: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
                    </div>
                  </div>

                  {/* Disclaimer text */}
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                    By submitting this form, you agree that we may use your information for marketing purposes and to send you announcements
                  </p>

                  {/* Captcha */}
                  <div>
                    <div className="font-serif tracking-widest text-lg font-bold text-gray-700 select-none mb-1.5 px-1">
                      F M4 B
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter Captcha"
                      value={inquiryForm.captchaInput}
                      onChange={(e) => setInquiryForm({...inquiryForm, captchaInput: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="px-9 py-3 rounded-lg bg-black text-white font-semibold text-sm hover:bg-brand-red transition-colors shadow-sm cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
