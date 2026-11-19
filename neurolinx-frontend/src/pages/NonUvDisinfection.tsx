import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronRight, 
  Home,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  SlidersHorizontal,
  Sun,
  Maximize2,
  Check,
  Phone,
  Mail,
  MapPin,
  Info
} from 'lucide-react';

export interface NonUvLightModel {
  id: string;
  modelCode: string;
  series: 'PSR' | 'PSQ' | 'RDSR' | 'RDCR' | 'RDCQ' | 'RDPC';
  seriesName: string;
  shape: 'Round' | 'Square' | 'Rectangular';
  mounting: string;
  wattage: string;
  wattageNum: number;
  title: string;
  tagline: string;
  lumens: string;
  dimensions: string;
  cutout: string;
  beamAngle: string;
  inputVoltage: string;
  cri: string;
  wavelength: string;
  desc: string;
  longDesc: string;
  idealFor: string;
  features: string[];
  img: string;
  badge: string;
}

export function NonUvDisinfection() {
  // All 16 Non-UV Disinfection Light Models from Official Product Lineup + Specialized Systems
  const allModels: NonUvLightModel[] = [
    // ── PSR Series: Panel Surface / Slim Round ──
    {
      id: "psr-24w",
      modelCode: "PSR 24W",
      series: "PSR",
      seriesName: "PSR Series (Panel Surface Round)",
      shape: "Round",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "24W",
      wattageNum: 24,
      title: "PSR 24W Round Panel Non-UV Disinfection Light",
      tagline: "High-Lumen 24W Circular Antimicrobial Ceiling Luminaire",
      lumens: "2,400 Lumens",
      dimensions: "Ø 300 mm × 32 mm",
      cutout: "Ø 285 mm / Surface Mount Ring",
      beamAngle: "120° Wide Uniform Diffuse",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Flagship 24W surface and slim recessed circular luminaire. Emits uniform glare-free task light while continuously disinfecting air and contact surfaces 24/7 without harming human eyes or skin.",
      longDesc: "Engineered with dual-wavelength micro-LED arrays combining continuous 405nm antimicrobial emission with bright neutral white task illumination. Eradicates up to 99.9% of bacteria, mold spores, and airborne microbes while occupants are fully present. Certified IEC 62471 RG-0 Exempt.",
      idealFor: "Hospital Corridors, Conference Halls, ICUs, Diagnostic Clinics & Executive Offices",
      features: [
        "Continuous 24/7 405nm disinfection safe for human presence",
        "2,400 Lumens glare-free diffused output with high CRI >85",
        "Low THD solid-state constant-current driver with 3kV surge protection",
        "Dual mounting: Surface frame included or flush recessed installation"
      ],
      img: "/media/non-uv/psr-24w.jpg",
      badge: "Panel Round • 24W"
    },
    {
      id: "psr-18w",
      modelCode: "PSR 18W",
      series: "PSR",
      seriesName: "PSR Series (Panel Surface Round)",
      shape: "Round",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "18W",
      wattageNum: 18,
      title: "PSR 18W Round Panel Non-UV Disinfection Light",
      tagline: "18W Balanced Ambient & Continuous Bio-Shield Fixture",
      lumens: "1,800 Lumens",
      dimensions: "Ø 225 mm × 32 mm",
      cutout: "Ø 210 mm / Surface Mount",
      beamAngle: "120° Wide Diffuse",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Versatile 18W round antimicrobial luminaire ideal for general office suites, doctor consultation cabins, and dental operatory suites requiring constant sterilization.",
      longDesc: "Provides balanced, eye-friendly general lighting while neutralizing pathogens continuously at cellular levels through bacterial porphyrin photo-excitation, fully exempt from UV hazard protocols.",
      idealFor: "Offices, Consultation Rooms, Dental Clinics, Pharmacies & Waiting Lounges",
      features: [
        "Continuous pathogen neutralization without ozone or UV hazard",
        "1,800 Lumens luminous flux with flicker-free operation",
        "Slimline 32mm architectural profile with extruded aluminum heat dissipation",
        "Compatible with radar microwave presence automation"
      ],
      img: "/media/non-uv/psr-18w.jpg",
      badge: "Panel Round • 18W"
    },
    {
      id: "psr-15w",
      modelCode: "PSR 15W",
      series: "PSR",
      seriesName: "PSR Series (Panel Surface Round)",
      shape: "Round",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "15W",
      wattageNum: 15,
      title: "PSR 15W Round Panel Non-UV Disinfection Light",
      tagline: "15W Energy-Efficient Medium Circular Panel",
      lumens: "1,500 Lumens",
      dimensions: "Ø 195 mm × 32 mm",
      cutout: "Ø 180 mm / Surface Mount",
      beamAngle: "115° Uniform Spread",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Optimized 15W circular non-UV disinfection fixture delivering comfortable everyday illumination paired with active bacterial mitigation for medium workspaces.",
      longDesc: "Designed for steady, continuous operation in treatment wards, reception counters, and fitness changing rooms. Built with premium optical grade diffuser plate to minimize glare.",
      idealFor: "Patient Treatment Rooms, Meeting Cabins, Retail Stores & Boutique Clinics",
      features: [
        "100% human-safe continuous 405nm photodynamic disinfection",
        "1,500 Lumens balanced output with gentle ambient edge diffusion",
        "High-grade thermal management ensuring 50,000 hrs operating lifespan",
        "Instant strike with zero warm-up time or audible hum"
      ],
      img: "/media/non-uv/psr-15w.jpg",
      badge: "Panel Round • 15W"
    },
    {
      id: "psr-12w",
      modelCode: "PSR 12W",
      series: "PSR",
      seriesName: "PSR Series (Panel Surface Round)",
      shape: "Round",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "12W",
      wattageNum: 12,
      title: "PSR 12W Round Panel Non-UV Disinfection Light",
      tagline: "Compact 12W Round Bio-Protection Luminaire",
      lumens: "1,200 Lumens",
      dimensions: "Ø 170 mm × 32 mm",
      cutout: "Ø 155 mm / Surface Mount",
      beamAngle: "115° Uniform Spread",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Compact 12W round panel for compact rooms, restrooms, and residential high-touch areas requiring continuous antimicrobial defense.",
      longDesc: "Combines pleasant 4000K neutral light with active 405nm decontamination. Ideal for residential bathrooms, hospital nursing stations, and elevators.",
      idealFor: "Restrooms, Elevators, Pantry Areas, Residential Suites & Nursing Stations",
      features: [
        "Continuous 24/7 bacterial & mold suppression",
        "1,200 Lumens with compact ceiling footprint",
        "Zero UV radiation, zero chemicals, zero mercury",
        "Quick-connect terminal block for rapid installation"
      ],
      img: "/media/non-uv/psr-12w.jpg",
      badge: "Panel Round • 12W"
    },

    // ── PSQ Series: Panel Surface / Slim Square ──
    {
      id: "psq-18w",
      modelCode: "PSQ 18W",
      series: "PSQ",
      seriesName: "PSQ Series (Panel Surface Square)",
      shape: "Square",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "18W",
      wattageNum: 18,
      title: "PSQ 18W Square Panel Non-UV Disinfection Light",
      tagline: "18W Modern Square Architectural Bio-Defense Panel",
      lumens: "1,800 Lumens",
      dimensions: "225 mm × 225 mm × 32 mm",
      cutout: "210 mm × 210 mm / Surface Mount",
      beamAngle: "120° Symmetric Square Distribution",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Clean-line square antimicrobial panel delivering crisp, uniform square light distribution along with 405nm visible decontamination for modern interiors.",
      longDesc: "Modern square geometry seamlessly aligns with contemporary grid ceilings and architectural surface mounts. Eliminates airborne pathogens while maintaining a sleek aesthetic.",
      idealFor: "Modular Offices, Cleanroom Airlocks, Diagnostic Labs & IT Workstations",
      features: [
        "Symmetric square illumination with 405nm continuous bio-defense",
        "1,800 Lumens output with edge-lit optical light-guide plate",
        "Anti-microbial electrostatic powder-coated bezel",
        "Built-in active surge protection and zero-cross switching"
      ],
      img: "/media/non-uv/psq-18w.jpg",
      badge: "Panel Square • 18W"
    },
    {
      id: "psq-12w",
      modelCode: "PSQ 12W",
      series: "PSQ",
      seriesName: "PSQ Series (Panel Surface Square)",
      shape: "Square",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "12W",
      wattageNum: 12,
      title: "PSQ 12W Square Panel Non-UV Disinfection Light",
      tagline: "Compact 12W Square Disinfection Panel",
      lumens: "1,200 Lumens",
      dimensions: "170 mm × 170 mm × 32 mm",
      cutout: "155 mm × 155 mm / Surface Mount",
      beamAngle: "115° Symmetric Square Spread",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Compact 12W square luminaire engineered for entry foyers, transit hallways, and washroom counters needing uninterrupted antimicrobial protection.",
      longDesc: "Delivers 1,200 Lumens of balanced square illumination. Continuously produces reactive oxygen species (ROS) within bacterial cells, neutralizing them safely while people work and walk beneath.",
      idealFor: "Washrooms, Elevators, Entry Foyers, Storage Niches & Corridor Links",
      features: [
        "Continuous photodynamic decontamination with 100% human safety",
        "1,200 Lumens energy-efficient square output",
        "Die-cast aluminum frame with superior heat sinking",
        "Seamless compatibility with microwave radar occupancy drivers"
      ],
      img: "/media/non-uv/psq-12w.jpg",
      badge: "Panel Square • 12W"
    },

    // ── RDSR Series: Recessed Downlight Slim Round ──
    {
      id: "rdsr-12w",
      modelCode: "RDSR 12W",
      series: "RDSR",
      seriesName: "RDSR Series (Slim Recessed Downlight)",
      shape: "Round",
      mounting: "Ultra-Slim Recessed False Ceiling",
      wattage: "12W",
      wattageNum: 12,
      title: "RDSR 12W Recessed Downlight Slim Round",
      tagline: "Ultra-Low Depth 18mm Slim Recessed Round Bio-Downlight",
      lumens: "1,200 Lumens",
      dimensions: "Ø 160 mm × 18 mm (Depth)",
      cutout: "Ø 135 mm (False Ceiling Cutout)",
      beamAngle: "120° Wide Angle Flood",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Ultra-shallow 18mm profile recessed downlight engineered for false ceilings with minimal plenum clearance. Emits 405nm non-UV disinfection floodlight.",
      longDesc: "Features ultra-slim spring clips that fit ceiling cavities with under 25mm clearance. Provides complete 405nm bio-shielding for residential false ceilings and boutique commercial spaces.",
      idealFor: "Low-Plenum False Ceilings, Modern Residences, Elevators & Hotel Guestrooms",
      features: [
        "Ultra-thin 18mm fixture profile fits shallowest ceiling cavities",
        "1,200 Lumens wide flood distribution for shadow-free coverage",
        "Continuous 24/7 bacterial eradication without eye fatigue",
        "Integrated constant-current driver with heavy-duty spring clips"
      ],
      img: "/media/non-uv/rdsr-12w.jpg",
      badge: "Slim Recessed • 12W"
    },

    // ── RDCR Series: Recessed Deep COB Circular Round ──
    {
      id: "rdcr-24w",
      modelCode: "RDCR 24W",
      series: "RDCR",
      seriesName: "RDCR Series (Recessed COB Round)",
      shape: "Round",
      mounting: "Deep Recessed False Ceiling",
      wattage: "24W",
      wattageNum: 24,
      title: "RDCR 24W Recessed Deep COB Round Downlight",
      tagline: "High-Power 24W Deep Anti-Glare COB Disinfection Downlight",
      lumens: "2,400 Lumens",
      dimensions: "Ø 185 mm × 95 mm",
      cutout: "Ø 160 mm",
      beamAngle: "60° Deep Focused Anti-Glare (UGR <19)",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "High-output 24W deep-set circular COB downlight with dark-light anti-glare reflector. Projects targeted 405nm sterilization rays directly over high-contact surfaces.",
      longDesc: "Deep recessed architectural reflector ensures complete visual comfort with UGR <19 while casting an intense high-lux antimicrobial beam downward. Eradicates pathogens on desks, counters, and equipment tables continuously.",
      idealFor: "Hospital Operating Theatres, High-End Lobbies, Executive Boardrooms & ICUs",
      features: [
        "Deep architectural cutoff optics (UGR <19) for zero eye glare",
        "2,400 Lumens concentrated COB beam for deep surface penetration",
        "High CRI >90 for accurate medical and architectural color rendition",
        "Heavy-duty forged aluminum thermal core with active heat vents"
      ],
      img: "/media/non-uv/rdcr-24w.jpg",
      badge: "COB Round • 24W"
    },
    {
      id: "rdcr-18w",
      modelCode: "RDCR 18W",
      series: "RDCR",
      seriesName: "RDCR Series (Recessed COB Round)",
      shape: "Round",
      mounting: "Deep Recessed False Ceiling",
      wattage: "18W",
      wattageNum: 18,
      title: "RDCR 18W Recessed Deep COB Round Downlight",
      tagline: "18W Precision Deep Recessed COB Spotlight",
      lumens: "1,800 Lumens",
      dimensions: "Ø 155 mm × 85 mm",
      cutout: "Ø 135 mm",
      beamAngle: "60° Anti-Glare Reflector",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "High-efficiency 18W deep recessed COB spotlight. Focuses antimicrobial 405nm energy onto patient examination couches, consultation desks, and service counters.",
      longDesc: "Delivers punchy, high-contrast illumination with deep visual cutoff. Continuously neutralizes microbial colonization on touch surfaces while occupants work below with total peace of mind.",
      idealFor: "Doctor Consultation Rooms, Clinic Treatment Bays, Reception Counters & Retail Showrooms",
      features: [
        "Deep dark-light reflector eliminates direct line-of-sight glare",
        "1,800 Lumens high-lux targeted 405nm disinfection beam",
        "Precision COB array with consistent CCT stability",
        "Low THD (<10%) flicker-free driver with surge damping"
      ],
      img: "/media/non-uv/rdcr-18w.jpg",
      badge: "COB Round • 18W"
    },
    {
      id: "rdcr-12w",
      modelCode: "RDCR 12W",
      series: "RDCR",
      seriesName: "RDCR Series (Recessed COB Round)",
      shape: "Round",
      mounting: "Deep Recessed False Ceiling",
      wattage: "12W",
      wattageNum: 12,
      title: "RDCR 12W Recessed Deep COB Round Downlight",
      tagline: "12W Recessed Architectural COB Downlight",
      lumens: "1,200 Lumens",
      dimensions: "Ø 120 mm × 75 mm",
      cutout: "Ø 100 mm",
      beamAngle: "60° Controlled Optical Distribution",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Standard 100mm cutout 12W circular COB downlight. Seamlessly replaces halogen or standard LED downlights to add 24/7 non-UV sterilization.",
      longDesc: "Direct drop-in replacement for standard architectural downlights. Continuously safeguards door entryways, hotel washbasins, and pantry surfaces without requiring separate disinfection routines.",
      idealFor: "Hospitality Corridors, Hotel Restrooms, Office Hallways & Residential False Ceilings",
      features: [
        "Standard 100mm cutout for straightforward retrofit upgrades",
        "1,200 Lumens high-efficiency anti-glare COB optic",
        "Continuous 24/7 surface pathogen defense (100% human-safe)",
        "Durable powder-coated die-cast body with stainless clips"
      ],
      img: "/media/non-uv/rdcr-12w.jpg",
      badge: "COB Round • 12W"
    },
    {
      id: "rdcr-6w",
      modelCode: "RDCR 6W",
      series: "RDCR",
      seriesName: "RDCR Series (Recessed COB Round)",
      shape: "Round",
      mounting: "Deep Recessed Micro Cutout",
      wattage: "6W",
      wattageNum: 6,
      title: "RDCR 6W Recessed Deep COB Round Downlight",
      tagline: "Compact 6W Micro-Aperture Spot Disinfection Luminaire",
      lumens: "600 Lumens",
      dimensions: "Ø 90 mm × 65 mm",
      cutout: "Ø 75 mm",
      beamAngle: "45° Focused Spot Beam",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Compact 6W micro-spotlight for focused sanitation over elevator keypad panels, ATM buttons, biometric scanners, and washbasin taps.",
      longDesc: "High-density micro-spot optical reflector provides an intense 45° spotlight cone of 405nm antimicrobial visible light directly onto critical touch points.",
      idealFor: "Biometric Scanners, ATM Kiosks, Lift Button Panels, Washbasin Taps & Display Niches",
      features: [
        "Compact 75mm cutout ideal for tight architectural niches",
        "Targeted 600 Lumens spot disinfection over high-touch transit items",
        "Extreme energy efficiency (<6W power draw)",
        "Zero-heat thermal design safe for enclosed cabinetry"
      ],
      img: "/media/non-uv/rdcr-6w.jpg",
      badge: "COB Round • 6W"
    },

    // ── RDCQ Series: Recessed Deep COB Square ──
    {
      id: "rdcq-30w",
      modelCode: "RDCQ 30W",
      series: "RDCQ",
      seriesName: "RDCQ Series (Recessed COB Square)",
      shape: "Square",
      mounting: "Deep Recessed False Ceiling",
      wattage: "30W",
      wattageNum: 30,
      title: "RDCQ 30W Recessed Deep COB Square Downlight",
      tagline: "High-Output 30W Commercial Square COB Luminaire",
      lumens: "3,000 Lumens",
      dimensions: "205 mm × 205 mm × 110 mm",
      cutout: "180 mm × 180 mm",
      beamAngle: "65° Square Anti-Glare Cutoff",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Heavy-duty 30W commercial square downlight delivering maximum lumen density and continuous pathogen mitigation for large-scale ceilings.",
      longDesc: "Robust architectural square housing featuring high-capacity dual-stage heat sink. Casts 3,000 Lumens of crystal clear light and wide-area 405nm pathogen deactivation rays across high-ceiling commercial halls.",
      idealFor: "Hospital Atriums, Commercial Banking Halls, Corporate HQs & Cleanroom Facilities",
      features: [
        "Heavy-duty 3,000 Lumens output for ceiling heights up to 4.5 meters",
        "Large-aperture square reflector with deep anti-glare baffle",
        "Continuous 24/7 wide-area sterilization certified IEC 62471 exempt",
        "Industrial driver with 4kV surge clamping and active thermal rollback"
      ],
      img: "/media/non-uv/rdcq-30w.jpg",
      badge: "COB Square • 30W"
    },
    {
      id: "rdcq-24w",
      modelCode: "RDCQ 24W",
      series: "RDCQ",
      seriesName: "RDCQ Series (Recessed COB Square)",
      shape: "Square",
      mounting: "Deep Recessed False Ceiling",
      wattage: "24W",
      wattageNum: 24,
      title: "RDCQ 24W Recessed Deep COB Square Downlight",
      tagline: "24W Modern Architectural Square COB Downlight",
      lumens: "2,400 Lumens",
      dimensions: "175 mm × 175 mm × 95 mm",
      cutout: "150 mm × 150 mm",
      beamAngle: "65° Square Optical Reflector",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Architectural 24W square COB downlight. Harmonizes with modern rectilinear interior layouts while providing uninterrupted surface sterilization.",
      longDesc: "Square die-cast aluminum bezel with deep-set dark-light baffle. Perfectly complements linear and geometric architectural ceiling designs while neutralizing germs 24/7.",
      idealFor: "Modern Corporate Offices, Conference Centers, Healthcare Suites & Fashion Showrooms",
      features: [
        "Sharp square architectural profile with deep visual cutoff",
        "2,400 Lumens glare-free illumination with continuous 405nm bio-defense",
        "Certified 100% safe for continuous skin and eye exposure",
        "Precision machined aluminum housing with quick-lock clips"
      ],
      img: "/media/non-uv/rdcq-24w.jpg",
      badge: "COB Square • 24W"
    },
    {
      id: "rdcq-18w",
      modelCode: "RDCQ 18W",
      series: "RDCQ",
      seriesName: "RDCQ Series (Recessed COB Square)",
      shape: "Square",
      mounting: "Deep Recessed False Ceiling",
      wattage: "18W",
      wattageNum: 18,
      title: "RDCQ 18W Recessed Deep COB Square Downlight",
      tagline: "18W Balanced Square Recessed COB Luminaire",
      lumens: "1,800 Lumens",
      dimensions: "145 mm × 145 mm × 85 mm",
      cutout: "125 mm × 125 mm",
      beamAngle: "65° Square Optical Reflector",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">90 (Ultra-High Color Rendering)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Balanced 18W square recessed downlight for executive desks, clinic consulting chambers, and designer boutique spaces.",
      longDesc: "Projects uniform square downlighting with integrated 405nm antimicrobial wavelength. Protects occupants and visitors round the clock with zero maintenance overhead.",
      idealFor: "Doctor Consultation Rooms, Executive Cabins, Luxury Hotel Suites & Reception Desks",
      features: [
        "Contemporary square design with high-efficiency COB engine",
        "1,800 Lumens focused output with deep anti-glare shielding",
        "24/7 non-UV microbial disinfection safe for all living spaces",
        "Low-heat solid-state driver with instant flicker-free activation"
      ],
      img: "/media/non-uv/rdcq-18w.jpg",
      badge: "COB Square • 18W"
    },

    // ── RDPC Series: Architectural & Polycarbonate Luminaires ──
    {
      id: "rdpcq-24w-rect",
      modelCode: "RD PCQ 24W",
      series: "RDPC",
      seriesName: "RDPC Series (Architectural & Polycarbonate)",
      shape: "Rectangular",
      mounting: "Surface / False Ceiling Recessed",
      wattage: "24W",
      wattageNum: 24,
      title: "RD PCQ 24W Rectangular Panel Non-UV Disinfection Light",
      tagline: "24W Slim Rectangular Architectural Antimicrobial Luminaire (1×2 ft)",
      lumens: "2,400 Lumens",
      dimensions: "600 mm × 300 mm × 32 mm",
      cutout: "585 mm × 285 mm / Surface Mount",
      beamAngle: "120° Wide Uniform Spread",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Architectural 1×2 ft rectangular panel luminaire. Emits uniform diffuse task illumination paired with continuous 405nm pathogen disinfection.",
      longDesc: "Engineered in an elongated 1×2 ft rectangular format to fit narrow corridors, conference rooms, examination desks, and kitchen countertops. Eradicates pathogens 24/7 without eye or skin hazards.",
      idealFor: "Office Corridors, Conference Tables, Medical Examination Counters & Kitchen Pantries",
      features: [
        "Architectural 1×2 ft rectangular slimline profile",
        "2,400 Lumens glare-free diffused output with high CRI >85",
        "Continuous 24/7 405nm disinfection safe for human occupancy",
        "Dual mounting: Surface frame included or flush recessed installation"
      ],
      img: "/media/non-uv/rdpcr-24w.jpg",
      badge: "Rectangular • 24W"
    },
    {
      id: "rdpcq-24w-sq",
      modelCode: "RD PCQ 24W",
      series: "RDPC",
      seriesName: "RDPC Series (Architectural & Polycarbonate)",
      shape: "Square",
      mounting: "Recessed Ceiling / Sealed Bezel",
      wattage: "24W",
      wattageNum: 24,
      title: "RD PCQ 24W Square Non-UV Disinfection Light",
      tagline: "High-Durability 24W Square Moisture-Resistant Luminaire",
      lumens: "2,400 Lumens",
      dimensions: "185 mm × 185 mm × 90 mm",
      cutout: "160 mm × 160 mm",
      beamAngle: "70° High-Transmission Square Reflector",
      inputVoltage: "AC 100-277V, 50/60Hz",
      cri: ">85 (High Color Fidelity)",
      wavelength: "405nm Narrow-Band Visible (IEC 62471 RG-0)",
      desc: "Heavy-duty 24W square polycarbonate downlight combining tough polymer housing with deep square optics and continuous antimicrobial action.",
      longDesc: "Engineered for sterile processing suites, industrial food laboratories, and damp cleanroom environments requiring rectilinear aesthetics with impact and chemical resistance.",
      idealFor: "Sterile Processing Suites, Clean Industrial Labs, Restroom Facilities & Commercial Kitchens",
      features: [
        "Tough UV-stabilized polycarbonate chassis resistant to cleaning agents",
        "Square architectural profile with sealed optical gasket",
        "Continuous 2,400 Lumens illumination with 405nm bio-protection",
        "Complete IEC 62471 RG-0 exemption: 100% safe for eyes and skin"
      ],
      img: "/media/non-uv/rdpcq-24w.jpg",
      badge: "Square • 24W"
    }
  ];

  // Active Series Filter Tab
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filtered Products
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return allModels;
    if (activeFilter === 'psr') return allModels.filter(m => m.series === 'PSR');
    if (activeFilter === 'psq') return allModels.filter(m => m.series === 'PSQ');
    if (activeFilter === 'rdcr') return allModels.filter(m => m.series === 'RDCR');
    if (activeFilter === 'rdcq') return allModels.filter(m => m.series === 'RDCQ');
    if (activeFilter === 'rdsr') return allModels.filter(m => m.series === 'RDSR');
    if (activeFilter === 'rdpc') return allModels.filter(m => m.series === 'RDPC');
    return allModels;
  }, [activeFilter, allModels]);

  // Selected Product for Slide 3 Feature Showcase (Defaults to PSR 24W)
  const [selectedProduct, setSelectedProduct] = useState<NonUvLightModel>(allModels[0]);

  // Contact Inquiry Form State (Slide 4)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: 'PSR 24W - Round Panel Non-UV Light',
    projectType: 'New Building',
    controlOptions: ['Lighting & Scene Control', 'Continuous Bio-Shield Disinfection'] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Helper to choose a model without redirecting or scrolling
  const handleSelectProduct = (product: NonUvLightModel, target?: 'inquiry') => {
    setSelectedProduct(product);
    setInquiryForm(prev => ({
      ...prev,
      automationFor: `${product.modelCode} - ${product.title}`
    }));
    if (target === 'inquiry') {
      const el = document.getElementById('slide-4');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter Tabs Configuration
  const filterTabs = [
    { id: 'all', label: 'All Models', count: allModels.length },
    { id: 'psr', label: 'PSR (Round Panels)', count: allModels.filter(m => m.series === 'PSR').length },
    { id: 'psq', label: 'PSQ (Square Panels)', count: allModels.filter(m => m.series === 'PSQ').length },
    { id: 'rdcr', label: 'RDCR (COB Round)', count: allModels.filter(m => m.series === 'RDCR').length },
    { id: 'rdcq', label: 'RDCQ (COB Square)', count: allModels.filter(m => m.series === 'RDCQ').length },
    { id: 'rdsr', label: 'RDSR (Slim Round)', count: allModels.filter(m => m.series === 'RDSR').length },
    { id: 'rdpc', label: 'RDPC (Polycarbonate)', count: allModels.filter(m => m.series === 'RDPC').length },
  ];

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

      {/* ── Key Highlights Strip: 100% Safe, Continuous 24/7, Certified IEC 62471 ── */}
      <div className="w-full bg-slate-900 border-y border-slate-800 text-white py-4 px-4 sm:px-6">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] mx-auto flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span><strong>100% Human Safe:</strong> Zero UV Radiation • No Eye or Skin Hazard</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span><strong>IEC 62471 Certified:</strong> RG-0 Exempt Photobiological Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span><strong>405nm Visible Spectrum:</strong> Continuous 24/7 Surface &amp; Air Decontamination</span>
          </div>
        </div>
      </div>

      {/* ── Product Showcase Section ── */}
      <div id="products-catalog" className="w-full bg-white py-10 md:py-14">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation matching reference */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 font-medium">
            <Link to="/" className="flex items-center gap-1.5 hover:text-black transition-colors text-gray-600">
              <Home className="w-4 h-4 text-gray-700" />
              <span>Home</span>
            </Link>
            <span className="text-gray-400 font-normal">&gt;</span>
            <span className="text-gray-900 font-semibold">Non-UV Disinfection Light Models</span>
          </div>

          {/* Catalog Header with Category Subtitles */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold tracking-wide uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial &amp; Healthcare Luminaire Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Non-UV Light Fixtures &amp; Downlights
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-2xl">
                Explore our comprehensive range of 405nm narrow-band antimicrobial lighting fixtures available in Round, Square, Recessed COB, Ultra-Slim, and Polycarbonate housings.
              </p>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-slate-600 bg-[#F8F9FA] px-4 py-2 rounded-xl border border-gray-100 self-start md:self-auto shrink-0">
              Showing <span className="text-brand-red font-bold">{filteredProducts.length}</span> of {allModels.length} models
            </div>
          </div>

          {/* ── Series Filter Tabs ── */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin scrollbar-thumb-gray-200">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-black text-white shadow-sm ring-2 ring-black/10' 
                      : 'bg-[#F8F9FA] text-slate-700 hover:bg-gray-100 hover:text-black border border-gray-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-brand-red text-white' : 'bg-gray-200 text-slate-700'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Product Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filteredProducts.map((prod) => {
              const isSelected = selectedProduct.id === prod.id;
              return (
                <div 
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod)}
                  className={`group flex flex-col justify-between bg-[#F8F9FA] rounded-[24px] overflow-hidden border transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full ${
                    isSelected 
                      ? 'border-brand-red ring-2 ring-brand-red/20 shadow-md bg-white' 
                      : 'border-gray-100/80 hover:border-gray-300 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Top Badges & Image Preview Box */}
                  <div className="relative h-64 sm:h-68 w-full p-3 overflow-hidden bg-gradient-to-b from-gray-50/80 to-[#F8F9FA]">
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wide bg-black text-white shadow-xs">
                        {prod.wattage}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/90 text-slate-700 backdrop-blur-xs border border-gray-200 shadow-2xs">
                        {prod.shape}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200/60 shadow-2xs">
                        405nm Non-UV
                      </span>
                    </div>

                    {/* Luminaire Visual Card (Image with Fallback SVG Fixture Graphic) */}
                    <div className="w-full h-full rounded-[18px] overflow-hidden relative flex items-center justify-center p-4">
                      <LuminaireGraphic model={prod} />
                    </div>

                    {/* Quick Selected Indicator */}
                    {isSelected && (
                      <div className="absolute bottom-4 left-4 z-10 bg-brand-red text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>Active Selection</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content & Meta Specs */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3 bg-white">
                    <div>
                      {/* Model Code & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors tracking-tight">
                          {prod.modelCode}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-500">
                          {prod.lumens}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-[13px] font-medium text-slate-600 line-clamp-2 leading-snug mb-3">
                        {prod.title}
                      </h3>

                      {/* Technical Specs Pills */}
                      <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-600 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">Cutout:</span>
                          <span className="font-semibold text-slate-800 truncate">{prod.cutout.split('/')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">Beam:</span>
                          <span className="font-semibold text-slate-800 truncate">{prod.beamAngle.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-brand-red transition-colors">
                        {isSelected ? 'Selected' : 'Select Model'}
                      </span>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                        isSelected ? 'bg-brand-red text-white' : 'bg-black text-white group-hover:bg-brand-red'
                      }`}>
                        {isSelected ? (
                          <Check className="w-4 h-4 text-white stroke-[2.5]" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ── Slide 3: Detailed Model Specification & Feature Showcase ── */}
      <div id="switch-details" className="w-full bg-white py-12 md:py-16 scroll-mt-20">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] border border-gray-100 p-8 sm:p-12 lg:p-16 shadow-sm">
            
            {/* Top Category Heading: Continuous Disinfection in company logo red with underline */}
            <div className="text-center mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Technical Specifications &amp; Architectural Data
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight inline-block">
                <span className="text-brand-red border-b-2 border-brand-red pb-1">
                  Continuous Disinfection
                </span>
              </h2>
            </div>

            {/* Two-Column Content: Left Information + Right Product Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Information */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
                
                {/* Series & Model Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-black text-white text-xs font-extrabold">
                    {selectedProduct.modelCode}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-bold text-brand-red">
                    {selectedProduct.seriesName}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.2] mb-4 tracking-tight">
                  {selectedProduct.title}
                </h3>
                
                <p className="text-brand-red font-semibold text-sm sm:text-base mb-4">
                  {selectedProduct.tagline}
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProduct.longDesc}
                </p>

                {/* Technical Specifications Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Model Code</span>
                    <span className="text-sm font-bold text-slate-900">{selectedProduct.modelCode}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Power Consumption</span>
                    <span className="text-sm font-bold text-slate-900">{selectedProduct.wattage} (Constant-Current)</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Luminous Flux</span>
                    <span className="text-sm font-bold text-slate-900">{selectedProduct.lumens}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Active Wavelength</span>
                    <span className="text-sm font-bold text-cyan-600">405nm Narrow-Band Visible</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Fixture Dimensions</span>
                    <span className="text-sm font-bold text-slate-900">{selectedProduct.dimensions}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Ceiling Cutout</span>
                    <span className="text-sm font-bold text-slate-900">{selectedProduct.cutout}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Optical Beam Spread</span>
                    <span className="text-sm font-bold text-slate-900">{selectedProduct.beamAngle}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium">Photobiological Safety</span>
                    <span className="text-sm font-bold text-emerald-600">IEC 62471 RG-0 Exempt (100% Safe)</span>
                  </div>
                </div>

                {/* Key Features Bullet List */}
                <div className="w-full mb-8">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 block">
                    Product Highlights &amp; Compliance:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    {selectedProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => handleSelectProduct(selectedProduct, 'inquiry')}
                    className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-black text-white text-sm font-semibold hover:bg-brand-red transition-all shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Inquire For {selectedProduct.modelCode}
                  </button>
                  <a 
                    href="#products-catalog"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white border border-gray-200 text-slate-700 text-sm font-semibold hover:border-black transition-colors"
                  >
                    Browse All Models
                  </a>
                </div>
              </div>

              {/* Right Column: Product Card matching reference design */}
              <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
                <div className="w-full max-w-lg bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                  {/* Card Title */}
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                      {selectedProduct.modelCode}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      {selectedProduct.title}
                    </span>
                  </div>

                  {/* Product Visual */}
                  <div className="my-4 py-4 flex items-center justify-center overflow-hidden min-h-[300px]">
                    <LuminaireGraphic model={selectedProduct} large />
                  </div>

                  {/* Card Details Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Power Rating</span>
                      <span className="text-base font-extrabold text-slate-900">{selectedProduct.wattage}</span>
                    </div>
                    <button 
                      onClick={() => handleSelectProduct(selectedProduct, 'inquiry')}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-black text-white text-xs sm:text-sm font-semibold hover:bg-brand-red transition-colors shadow-sm cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── Slide 4: Have Questions? Consultation & Contact Form (Matching Home Automation exactly) ── */}
      <div id="slide-4" className="w-full bg-white py-12 md:py-16 scroll-mt-20">
        <div id="faq" className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container matching 2nd image */}
          <div className="rounded-[32px] md:rounded-[36px] border border-gray-100/80 overflow-hidden shadow-xs flex flex-col lg:flex-row items-stretch bg-[#F8F9FA]">
            
            {/* Left Panel: Pure White Background (Snug & Attached to Form) */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-10 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative">
              
              <div>
                {/* Title colored in brand Red and Blue like Neurolinx logo */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] mb-5 tracking-tight">
                  Have<br />
                  <span className="text-brand-red">Questions?</span>
                </h2>
                
                <p className="text-sm sm:text-base font-semibold text-slate-800 mb-8 tracking-tight italic">
                “Let’s make a Smarter World together”
              </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+919390584000" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <Phone className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 9390584***</span>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@neurolinx.in" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <Mail className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold">info@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-slate-900" />
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
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-10 py-9 sm:py-12 lg:py-14 flex-1">
              {inquirySubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    We have received your request for <strong>{inquiryForm.automationFor}</strong>. Our specialized non-UV optical engineers will contact you shortly with a personalized project quote and photobiological certification dossier.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'PSR 24W - Round Panel Non-UV Light',
                        projectType: 'New Building',
                        controlOptions: ['Lighting & Scene Control', 'Continuous Bio-Shield Disinfection'],
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
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                      <input 
                        type="email" 
                        required 
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs" 
                      />
                    </div>
                  </div>

                  {/* Row 2: Selected Model & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Model / Product Requirement</label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs cursor-pointer"
                      >
                        <optgroup label="PSR Series (Round Panels)">
                          <option>PSR 24W - Round Panel Non-UV Light</option>
                          <option>PSR 18W - Round Panel Non-UV Light</option>
                          <option>PSR 15W - Round Panel Non-UV Light</option>
                          <option>PSR 12W - Round Panel Non-UV Light</option>
                        </optgroup>
                        <optgroup label="PSQ Series (Square Panels)">
                          <option>PSQ 18W - Square Panel Non-UV Light</option>
                          <option>PSQ 12W - Square Panel Non-UV Light</option>
                        </optgroup>
                        <optgroup label="RDCR Series (COB Round Downlights)">
                          <option>RDCR 24W - Deep COB Round Downlight</option>
                          <option>RDCR 18W - Deep COB Round Downlight</option>
                          <option>RDCR 12W - Deep COB Round Downlight</option>
                          <option>RDCR 6W - Deep COB Round Downlight</option>
                        </optgroup>
                        <optgroup label="RDCQ Series (COB Square Downlights)">
                          <option>RDCQ 30W - Deep COB Square Downlight</option>
                          <option>RDCQ 24W - Deep COB Square Downlight</option>
                          <option>RDCQ 18W - Deep COB Square Downlight</option>
                        </optgroup>
                        <optgroup label="RDSR Series (Slim Recessed Downlight)">
                          <option>RDSR 12W - Slim Round Recessed Downlight</option>
                        </optgroup>
                        <optgroup label="RDPC Series (Polycarbonate & Architectural)">
                          <option>RD PCQ 24W - Rectangular Panel (1×2 ft)</option>
                          <option>RD PCQ 24W - Square Luminaire</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Project Type</label>
                      <select 
                        value={inquiryForm.projectType}
                        onChange={(e) => setInquiryForm({...inquiryForm, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs cursor-pointer"
                      >
                        <option>Hospital / Medical Facility</option>
                        <option>Pharmaceutical / Diagnostic Lab</option>
                        <option>Commercial Office &amp; IT Park</option>
                        <option>New Building Construction</option>
                        <option>Existing Retrofit / Renovation</option>
                        <option>Educational / Fitness Center</option>
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
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">City</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryForm.city}
                        onChange={(e) => setInquiryForm({...inquiryForm, city: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs" 
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
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-2xs" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="px-9 py-3 rounded-lg bg-black text-white font-bold text-sm hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
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

/**
 * Luminaire Graphic Component
 * If an image exists, displays the image with smooth loading.
 * Otherwise, renders an architectural SVG luminaire illustration with 405nm antimicrobial violet glow aura.
 */
function LuminaireGraphic({ model, large = false }: { model: NonUvLightModel; large?: boolean }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [model.id, model.img]);

  // If user provides product image and it loads successfully
  if (model.img && !imageError) {
    return (
      <img
        src={model.img}
        alt={model.title}
        onError={() => setImageError(true)}
        className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
          large ? 'max-h-[360px]' : 'max-h-[220px]'
        }`}
      />
    );
  }

  // Fallback: Architectural fixture render based on shape & series
  const isRound = model.shape === 'Round';
  const isSquare = model.shape === 'Square';
  const isCob = model.series === 'RDCR' || model.series === 'RDCQ' || model.series === 'RDPC';

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${large ? 'p-6' : 'p-2'}`}>
      
      {/* 405nm Antimicrobial Violet Glow Aura */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-75"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 75%)'
        }}
      />

      {/* SVG Luminaire Illustration */}
      <svg
        viewBox="0 0 240 240"
        className={`relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-lg ${
          large ? 'w-64 h-64 sm:w-76 sm:h-76' : 'w-44 h-44 sm:w-48 sm:h-48'
        }`}
      >
        <defs>
          {/* Bezel Metallic Linear Gradient */}
          <linearGradient id={`bezel-grad-${model.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#E2E8F0" />
            <stop offset="70%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Reflector Dark-Light Gradient */}
          <radialGradient id={`reflector-grad-${model.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="60%" stopColor="#E2E8F0" />
            <stop offset="85%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#1E293B" />
          </radialGradient>

          {/* 405nm Active Luminescence Gradient */}
          <radialGradient id={`violet-glow-${model.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#EDE9FE" />
            <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Outer Luminaire Geometry */}
        {isRound ? (
          <>
            {/* Outer Bezel */}
            <circle cx="120" cy="120" r="105" fill={`url(#bezel-grad-${model.id})`} stroke="#CBD5E1" strokeWidth="2" />
            <circle cx="120" cy="120" r="95" fill="#0F172A" opacity="0.08" />
            
            {/* Stepped Lip */}
            <circle cx="120" cy="120" r="88" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            
            {/* Diffuse Core or COB Lens */}
            {isCob ? (
              <>
                {/* Deep Reflector Cavity */}
                <circle cx="120" cy="120" r="76" fill={`url(#reflector-grad-${model.id})`} />
                {/* Faceted Optical Ring */}
                <circle cx="120" cy="120" r="54" fill="#0F172A" opacity="0.15" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                {/* Center COB Disinfection Chip with 405nm Halo */}
                <circle cx="120" cy="120" r="34" fill={`url(#violet-glow-${model.id})`} stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="120" cy="120" r="14" fill="#F59E0B" opacity="0.85" />
              </>
            ) : (
              <>
                {/* Opal Diffuser with Glowing 405nm Ring */}
                <circle cx="120" cy="120" r="82" fill={`url(#violet-glow-${model.id})`} />
                <circle cx="120" cy="120" r="72" fill="#FFFFFF" opacity="0.6" />
                <circle cx="120" cy="120" r="60" fill="#EDE9FE" opacity="0.4" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
              </>
            )}
          </>
        ) : (
          <>
            {/* Square Outer Bezel with rounded corners */}
            <rect x="15" y="15" width="210" height="210" rx="20" fill={`url(#bezel-grad-${model.id})`} stroke="#CBD5E1" strokeWidth="2" />
            <rect x="25" y="25" width="190" height="190" rx="14" fill="#0F172A" opacity="0.08" />
            
            {/* Stepped Lip */}
            <rect x="32" y="32" width="176" height="176" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Square Diffuse Core or COB */}
            {isCob ? (
              <>
                <rect x="44" y="44" width="152" height="152" rx="8" fill={`url(#reflector-grad-${model.id})`} />
                <rect x="62" y="62" width="116" height="116" rx="6" fill="#0F172A" opacity="0.15" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="120" cy="120" r="34" fill={`url(#violet-glow-${model.id})`} stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="120" cy="120" r="14" fill="#F59E0B" opacity="0.85" />
              </>
            ) : (
              <>
                <rect x="40" y="40" width="160" height="160" rx="6" fill={`url(#violet-glow-${model.id})`} />
                <rect x="50" y="50" width="140" height="140" rx="4" fill="#FFFFFF" opacity="0.6" />
                <rect x="65" y="65" width="110" height="110" rx="4" fill="#EDE9FE" opacity="0.4" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
              </>
            )}
          </>
        )}

        {/* Center Model Identifier Badge */}
        <g transform="translate(120, 120)">
          <rect x="-42" y="-12" width="84" height="24" rx="12" fill="#0F172A" opacity="0.85" />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontFamily="sans-serif"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            {model.modelCode}
          </text>
        </g>
      </svg>

    </div>
  );
}

export default NonUvDisinfection;
