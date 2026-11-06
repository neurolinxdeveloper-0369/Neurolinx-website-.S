import React from 'react';

export function Careers() {
  const perks = [
    { title: "Global Impact", desc: "Work on cutting-edge technology that shapes the future of electronics and AI worldwide." },
    { title: "Continuous Growth", desc: "We invest in your learning with training programs, conferences, and mentorship." },
    { title: "Inclusive Culture", desc: "Join a diverse, collaborative team where every voice and idea is valued." },
    { title: "Health & Wellness", desc: "Comprehensive health insurance, wellness programs, and flexible working hours." }
  ];

  const jobs = [
    { title: "Senior Embedded Engineer", type: "Full-Time", loc: "Hyderabad, India / Remote" },
    { title: "Power Supply Design Lead", type: "Full-Time", loc: "Bengaluru, India" },
    { title: "Frontend Developer", type: "Full-Time", loc: "Remote" },
    { title: "Backend Developer", type: "Full-Time", loc: "Remote" },
    { title: "Hardware Quality Inspector", type: "Contract", loc: "Pune, India" },
  ];

  return (
    <div className="w-full bg-white flex flex-col font-body">
      
      {/* Hero Section */}
      <div className="w-full bg-gray-50 py-24 px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-brand-charcoal mb-6">Build the Future With Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Neurolinx, we are engineering the next generation of technology. We are constantly looking for passionate, driven individuals who want to push boundaries and make a global impact.
          </p>
        </div>
      </div>

      {/* Perks Section */}
      <div className="w-full py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Why Join Neurolinx?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We believe in empowering our team to do their best work. Here is what you can expect when you join us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-brand-red rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-3">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="w-full bg-gray-50 py-20 px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">Current Openings</h2>
            <p className="text-gray-500">Discover your next opportunity to innovate and grow.</p>
          </div>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-200 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="font-semibold text-brand-red">{job.type}</span>
                    <span>•</span>
                    <span>{job.loc}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@neurolinx.in?subject=Application for ${job.title}`}
                  className="px-6 py-2.5 bg-brand-charcoal hover:bg-black text-white text-sm font-semibold rounded-full text-center transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
