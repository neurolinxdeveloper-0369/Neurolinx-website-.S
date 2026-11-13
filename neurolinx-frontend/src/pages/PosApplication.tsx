import React from 'react';
import { 
  Zap, 
  Package, 
  UtensilsCrossed, 
  SlidersHorizontal, 
  BarChart3, 
  UserCheck, 
  CreditCard, 
  Layers 
} from 'lucide-react';

export function PosApplication() {
  // 8 Key Features
  const keyFeatures = [
    {
      icon: Zap,
      title: "Fast & Accurate Billing",
      desc: "Simplify checkout and billing operations with sub-second item lookups and lightning-fast receipt prints."
    },
    {
      icon: Package,
      title: "Inventory Management",
      desc: "Organize stock information, manage batch numbers, and monitor product availability in real time."
    },
    {
      icon: UtensilsCrossed,
      title: "Order Management",
      desc: "Manage restaurant orders through an organized digital workflow from table ordering to kitchen tickets."
    },
    {
      icon: SlidersHorizontal,
      title: "Product & Menu Management",
      desc: "Maintain product catalogs, food menus, modifiers, variants, categories, and dynamic price tiers."
    },
    {
      icon: BarChart3,
      title: "Sales Reports",
      desc: "Access transaction records, track hourly rush periods, and analyze multi-counter sales performance."
    },
    {
      icon: UserCheck,
      title: "Customer Management",
      desc: "Organize customer information, purchase histories, and contact numbers for better, personalized service."
    },
    {
      icon: CreditCard,
      title: "Payment Management",
      desc: "Record and manage transaction payments seamlessly across UPI QR, Credit/Debit cards, Cash, and Split bills."
    },
    {
      icon: Layers,
      title: "Centralized Dashboard",
      desc: "View vital business metrics, daily profit margins, and shift audits through one user-friendly interface."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC HERO BANNER                                          */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <img 
          src="/media/pos_hero_banner.jpg" 
          alt="Neurolinx POS Application"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT OUR POS APPLICATION                                      */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-24 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            {/* Header Accent Line */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs">ABOUT OUR POS APPLICATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 leading-tight">
              Simplifying Business Operations <br className="hidden sm:block" />
              Through Modern Technology
            </h2>

            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-4">
              Neurolinx POS Application is a modern software solution developed to simplify billing and daily business management.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Built to support diverse commercial environments, the application helps businesses manage sales, track inventory, handle orders, and record payments with high precision and speed.
            </p>
          </div>

          {/* Centralized UI Presentation Card */}
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white group">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-950 overflow-hidden">
              <img 
                src="/media/pos_hero_banner.jpg" 
                alt="Neurolinx POS Software in Action" 
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                  Our Solutions
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
                  Comprehensive monitoring solutions and dependable assistance tailored for wind and solar operations.
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: COMPREHENSIVE KEY FEATURES                                     */}
      {/* ========================================================================= */}
      <section id="features" className="w-full py-24 sm:py-28 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center space-x-2 text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
              <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
              <span>FULL-FEATURED BILLING ENGINE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
              Comprehensive Key Features
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Everything your business requires to process orders, audit stock, track cash flow, and manage customers.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 mb-5 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-display">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>



    </div>
  );
}
