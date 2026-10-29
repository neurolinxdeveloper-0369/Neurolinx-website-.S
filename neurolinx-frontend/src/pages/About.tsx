import React from 'react';

export function About() {
  return (
    <div className="w-full bg-white flex flex-col font-body min-h-[80vh] py-32 px-8">
      <div className="max-w-6xl mx-auto md:px-12 w-full">
        
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-display font-bold text-brand-charcoal mb-16 leading-tight tracking-tight max-w-4xl">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          <p className="text-[17px] text-brand-charcoal font-semibold leading-[1.8]">
            Neurolinx Global Private Limited is a future-focused technology company driving innovation across diverse sectors in electronics, energy, automation, artificial intelligence, and robotics. With a strong foundation in engineering excellence and sustainability, we deliver cutting-edge solutions that cater to both industrial and consumer needs.
          </p>
          <p className="text-[16px] text-gray-500 font-normal leading-[1.8]">
            Our Home Automation division offers intelligent systems that transform living spaces into smart, connected environments. We specialize in high-performance, energy-saving BLDC fans, designed for modern efficiency and quiet operation. The LED Housing branch manufactures durable and precision-built lighting enclosures that meet global standards.
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-[16px] text-gray-500 font-normal leading-[1.8]">
            In the Railways segment, we contribute advanced electronic solutions that enhance safety, control, and communication. Our Chip Designing and Fab Foundry units support the semiconductor ecosystem with next-gen integrated circuits and manufacturing capabilities. Through our Power Supply and Driver division, we provide reliable, application-specific power solutions critical for today's devices.
          </p>
          <p className="text-[16px] text-gray-500 font-normal leading-[1.8]">
            Our Wind & Solar energy branch champions sustainability by developing eco-friendly, renewable energy technologies for a greener tomorrow. In addition, we are expanding our impact through Artificial Intelligence and Robotics, enabling automation in manufacturing, intelligent decision-making in smart systems, and advanced human-machine interaction across industries. At Neurolinx, we are committed to technological innovation, quality service, and building a smarter, energy-efficient world.
          </p>
        </div>

      </div>
    </div>
  );
}
