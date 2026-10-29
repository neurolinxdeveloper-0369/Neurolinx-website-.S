import React from 'react';

export function Contact() {
  return (
    <div className="w-full bg-white flex flex-col font-body min-h-[60vh] py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black text-brand-charcoal mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          We're here to answer any questions you may have about our products, services, or partnerships.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-left">
          <form className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">Name</label>
                <input type="text" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="John Doe" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-600 mb-2">Email</label>
                <input type="email" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="john@example.com" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-2">Message</label>
              <textarea rows={5} className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="self-start px-8 py-3 bg-brand-red text-white font-bold rounded-full shadow-md hover:bg-red-700 hover:-translate-y-0.5 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
