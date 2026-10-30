import React from 'react';
import { AstraLogoCanvas } from './AstraLogoCanvas';

export function HeroOne() {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black flex items-center justify-center select-none">
      {/* OpenAI Astra Dust Particle Logo with Full-Page Inward Convergence */}
      <AstraLogoCanvas />
    </div>
  );
}
