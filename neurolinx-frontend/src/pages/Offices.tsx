import React from 'react';

export function Offices() {
  return (
    <div className="w-full bg-white flex flex-col font-body min-h-[60vh] py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black text-brand-charcoal mb-6">Global Offices</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          Neurolinx operates on a global scale. Find our headquarters and regional branches below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
             <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Headquarters - India</h3>
             <p className="text-gray-500 mb-2">C12/A, Industrial Area, Kushaiguda</p>
             <p className="text-gray-500 mb-2">Hyderabad, Secunderabad</p>
             <p className="text-gray-500 mb-4">Telangana 500062</p>
             <p className="text-brand-red font-semibold">+91 7013486961</p>
           </div>
           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-center justify-center">
             <p className="text-gray-400 italic text-center">More global offices opening soon to serve our international clientele.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
