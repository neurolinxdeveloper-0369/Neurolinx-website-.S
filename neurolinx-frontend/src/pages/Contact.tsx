import React from 'react';

export function Contact() {
  return (
    <div className="w-full bg-white flex flex-col font-body min-h-[60vh] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-charcoal mb-4 sm:mb-6">Contact Us</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12">
          We're here to answer any questions you may have about our products, services, or partnerships.
        </p>
        
        <div className="bg-gray-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 text-left">
          <form className="flex flex-col space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-semibold text-gray-600 mb-1.5 sm:mb-2">Name</label>
                <input type="text" className="px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="John Doe" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-semibold text-gray-600 mb-1.5 sm:mb-2">Email</label>
                <input type="email" className="px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="john@example.com" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm font-semibold text-gray-600 mb-1.5 sm:mb-2">Message</label>
              <textarea rows={5} className="px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="self-start px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-brand-red text-white font-bold rounded-full shadow-md hover:bg-red-700 hover:-translate-y-0.5 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
