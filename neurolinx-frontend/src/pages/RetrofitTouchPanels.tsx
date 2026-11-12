import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Check, 
  Zap, 
  Sliders, 
  ChevronDown, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Cpu, 
  Smartphone, 
  Mic, 
  Clock, 
  Lock
} from 'lucide-react';

export interface ModuleConfigOption {
  id: string;
  name: string;
  shortLabel: string;
  touchPanels: number;
  sockets: number;
  img: string;
  badge?: string;
  isPopular?: boolean;
  title: string;
  tagline: string;
  desc: string;
  smartAutomationInfo: string;
  socketInfo: string;
  load: string;
  boxSize: string;
  idealFor: string;
  features: string[];
}

export function RetrofitTouchPanels() {
  // Active Modular Box Selection for the 3-3-1 top grid (1 Moduler, 2 Moduler, etc.)
  const [activeModulerBox, setActiveModulerBox] = useState<string>('4-moduler');

  // Category selection: 'touch-panels' (default) or 'sockets'
  const [selectedCategory, setSelectedCategory] = useState<'touch-panels' | 'sockets'>('touch-panels');

  // Selected Option IDs
  const [selectedPanelId, setSelectedPanelId] = useState<string>('4-panels');
  const [selectedSocketId, setSelectedSocketId] = useState<string>('1-sockets');

  // Active configuration option ID per module
  const [selectedConfigId, setSelectedConfigId] = useState<string>('4m-2p-1s');

  // Constant Top Modular Boxes (7 Sizes)
  const modularBoxes = [
    { id: '1-moduler', label: '1 Moduler', code: '1M', dimensions: '50 × 86 mm', panelId: '1-panels', capacity: 1, standardSize: '1-Module Indian Standard Junction Box (50 × 86 mm)' },
    { id: '2-moduler', label: '2 Moduler', code: '2M', dimensions: '86 × 86 mm', panelId: '2-panels', capacity: 2, standardSize: '2-Module Standard Junction Box (86 × 86 mm)' },
    { id: '4-moduler', label: '4 Moduler', code: '4M', dimensions: '146 × 86 mm', panelId: '4-panels', capacity: 4, standardSize: '4-Module Indian Standard Junction Box (146 × 86 mm)' },
    { id: '8-moduler', label: '8 Moduler', code: '8M', dimensions: '224 × 86 mm', panelId: '8-panels', capacity: 8, standardSize: '8-Module Horizontal / Square Box (224 × 86 mm)' },
    { id: '10-moduler', label: '10 Moduler', code: '10M', dimensions: '250 × 146 mm', panelId: '10-panels', capacity: 10, standardSize: '10-Module Horizontal Box (250 × 146 mm)' },
    { id: '12-moduler', label: '12 Moduler', code: '12M', dimensions: '250 × 200 mm', panelId: '12-panels', capacity: 12, standardSize: '12-Module Standard Plate (250 × 200 mm)' },
    { id: '16-moduler', label: '16 Moduler', code: '16M', dimensions: '250 × 250 mm', panelId: '16-panels', capacity: 16, standardSize: '16-Module Two-Tier Standard Box (250 × 250 mm)' },
  ];

  // Comprehensive Selected Options Dictionary for all 7 Module Sizes (Options-Wise: Touch Panels + Sockets)
  const moduleConfigsMap: Record<string, ModuleConfigOption[]> = {
    '1-moduler': [
      {
        id: '1m-1p-0s',
        name: '1 Touch Panel + 0 Sockets',
        shortLabel: '1 Touch Switch',
        touchPanels: 1,
        sockets: 0,
        img: '/media/plates/1m-1p-0s.png',
        badge: 'Dedicated Switch',
        isPopular: true,
        title: '1 Moduler Smart Touch Switch Board (1 Lighting Channel)',
        tagline: 'Compact Feather-Touch Smart Switching for Single Circuit',
        desc: 'Single capacitive feather-touch tempered crystal glass switch. Fits any standard 1-module backbox cutout to control a single lighting loop, exhaust fan, or accent cove strip with full smartphone and voice automation.',
        smartAutomationInfo: 'Control high-efficiency lighting remotely via smartphone or voice with Alexa and Google Assistant. Set daily auto-off timer schedules and track real-time power consumption.',
        socketInfo: 'Solid-state relay with built-in zero-cross switching and 3kV surge clamping protection.',
        load: '1 Lighting / Appliance Circuit (10A max / up to 2200W)',
        boxSize: '1-Module Box (50 × 86 mm)',
        idealFor: 'Balcony Lights, Exhaust Fans, Staircases',
        features: [
          '1 × 10A capacitive feather-touch switch with glowing cyan halo',
          'App schedules, auto-off countdown timers & offline mesh support',
          'Zero-cross solid-state relay with 3kV surge clamping'
        ]
      },
      {
        id: '1m-0p-1s',
        name: '0 Touch Panels + 1 Smart Socket',
        shortLabel: '1 Compact Socket',
        touchPanels: 0,
        sockets: 1,
        img: '/media/plates/1m-0p-1s.png',
        badge: 'Power Point',
        title: '1 Moduler Smart Power Socket Board (10A Continuous)',
        tagline: 'Compact Single-Outlet Retrofit Power Point with Sleep Timer',
        desc: 'Single 1-module smart power socket with integrated solid-state relay.',
        smartAutomationInfo: 'App and voice control.',
        socketInfo: 'Child-safe internal spring shutters.',
        load: '10A Continuous (2200W Max)',
        boxSize: '1-Module Box (50 × 86 mm)',
        idealFor: 'Bedside Chargers, Desk Lamps, Routers',
        features: [
          '1 × 10A universal socket with child-safe internal spring shutters',
          'Overcharge protection sleep-timers & ghost standby watt alerts',
          'Drops into any single-module cutout with zero wall chipping'
        ]
      }
    ],

    '2-moduler': [
      {
        id: '2m-2p-0s',
        name: '2 Touch Panels + 0 Sockets',
        shortLabel: '2 Touch Switches',
        touchPanels: 2,
        sockets: 0,
        img: '/media/plates/2m-2p-0s.png',
        badge: 'Dual Lighting',
        isPopular: true,
        title: '2 Moduler Dual Touch Switch Board (2 Lighting Channels)',
        tagline: 'Compact Dual-Zone Capacitive Touch Switch for Secondary Walls',
        desc: 'Dual capacitive feather-touch switches on diamond-cut crystal glass.',
        smartAutomationInfo: 'Dual lighting scenes and night-dimming.',
        socketInfo: 'Dual independent 10A solid-state relays.',
        load: '2 × 10A Lighting Channels (4400W Max)',
        boxSize: '2-Module Square Box (86 × 86 mm)',
        idealFor: 'Bedside Walls, Vanity Mirrors, Walkways',
        features: [
          '2 × 10A independent switches for ceiling light + cove/exhaust',
          'Wireless 2-way mesh sync without physical traveler wiring',
          'Auto night-dimming backlights soften to 10% after 10 PM'
        ]
      },
      {
        id: '2m-0p-1s',
        name: '0 Touch Panels + 1 Heavy Smart Socket',
        shortLabel: '1 Heavy Socket (16A/25A)',
        touchPanels: 0,
        sockets: 1,
        img: '/media/plates/2m-0p-1s.png',
        badge: 'Heavy Appliance',
        title: '2 Moduler Heavy-Duty 16A/25A Smart Power Socket Board',
        tagline: 'High-Inrush Power Controller Built for Water Geysers & Split ACs',
        desc: 'Full 2-module universal multi-pin heavy-duty smart power socket.',
        smartAutomationInfo: 'Morning geyser schedules & voltage cutoff.',
        socketInfo: '16A continuous / 25A inrush universal socket.',
        load: '16A Continuous / 25A Inrush (3500W Max)',
        boxSize: '2-Module Square Box (86 × 86 mm)',
        idealFor: 'Water Geysers, Split AC Units, Microwaves',
        features: [
          '25A peak inrush snubber prevents compressor & heater arc wear',
          'Automated daily geyser timers + 170V–270V voltage guard cutoff',
          'Live kWh appliance usage tracking directly from the mobile app'
        ]
      }
    ],

    '4-moduler': [
      {
        id: '4m-2p-1s',
        name: '2 Touch Panels + 1 Smart Socket',
        shortLabel: '2 Panels + 1 Socket',
        touchPanels: 2,
        sockets: 1,
        img: '/media/plates/4m-2p-1s.png',
        badge: 'Most Popular',
        isPopular: true,
        title: '4 Moduler Dual Touch Switch & 16A Universal Socket Board',
        tagline: 'Balanced Bedside & Study Desk Lighting + 16A Power Point',
        desc: 'Two capacitive touch switches paired alongside an integrated 16A universal shuttered power socket.',
        smartAutomationInfo: 'Goodnight lighting scene + socket sleep timer.',
        socketInfo: '16A universal shuttered socket with 4kV surge clamp.',
        load: '2 × 10A Switches + 1 × 16A/25A Socket',
        boxSize: '4-Module Box (146 × 86 mm)',
        idealFor: 'Bedside Headboards, Study Desks, Hotels',
        features: [
          '2 lighting circuits + 1 heavy universal shuttered 16A power socket',
          'Goodnight scene turns off room lights while timed charger runs',
          '4kV surge clamping + wet-hand safe tempered crystal surface'
        ]
      },
      {
        id: '4m-4p-0s',
        name: '4 Touch Panels + 0 Sockets',
        shortLabel: '4 Touch Switches',
        touchPanels: 4,
        sockets: 0,
        img: '/media/plates/4m-4p-0s.png',
        badge: 'Full Lighting',
        title: '4 Moduler Quad Touch Switch Board (4 Lighting Circuits)',
        tagline: 'Dedicated 4-Zone Room Lighting & Scene Control Center',
        desc: 'Four capacitive feather-touch circuits on a 4-module luxury crystal glass plate.',
        smartAutomationInfo: 'Multi-circuit scene dimming and master All-Off.',
        socketInfo: 'Four independent 10A solid-state relays.',
        load: '4 × 10A Lighting Channels (4000W Max)',
        boxSize: '4-Module Box (146 × 86 mm)',
        idealFor: 'Bedrooms, Dining Areas, Executive Cabins',
        features: [
          '4 × 10A independent zones for chandeliers, spots, coves & fan',
          'Double-tap Master All-Off clears the entire room on exit',
          'Zero-hum solid-state dimming + Alexa & Google voice scenes'
        ]
      },
      {
        id: '4m-0p-2s',
        name: '0 Touch Panels + 2 Smart Sockets',
        shortLabel: '2 Smart Sockets',
        touchPanels: 0,
        sockets: 2,
        img: '/media/plates/4m-0p-2s.png',
        badge: 'Dual Power Hub',
        title: '4 Moduler Dual Heavy-Duty 16A Smart Socket Board',
        tagline: 'Dual Independent 16A Outlets for Kitchen Counters & Workstations',
        desc: 'Dual independent 16A universal smart power sockets on a single 4-module plate.',
        smartAutomationInfo: 'Separate timers and voice control per outlet.',
        socketInfo: 'Dual 16A shuttered sockets with 4kV surge arrestor.',
        load: 'Dual 16A Sockets (5000W Combined)',
        boxSize: '4-Module Box (146 × 86 mm)',
        idealFor: 'Kitchen Counters, AV Racks, Laundry Rooms',
        features: [
          '2 independent 16A solid-state socket channels controlled separately',
          'Child-safe spring shutters + real-time current overload cutoffs',
          'Individual auto-off schedules for kettles, microwaves & chargers'
        ]
      }
    ],

    '8-moduler': [
      {
        id: '8m-6p-1s',
        name: '6 Touch Panels + 1 Smart Socket',
        shortLabel: '6 Panels + 1 Socket',
        touchPanels: 6,
        sockets: 1,
        img: '/media/plates/8m-6p-1s.png',
        badge: 'Most Popular',
        isPopular: true,
        title: '8 Moduler 6 Touch Switch & 16A Universal Socket Board',
        tagline: 'Standard Living Room & Master Suite 6-Light + Socket Console',
        desc: 'Six capacitive touch switches paired with an integrated 16A universal power socket.',
        smartAutomationInfo: 'One-touch scenes + socket digital lock.',
        socketInfo: '16A universal shuttered socket.',
        load: '6 × 10A Switches + 1 × 16A/25A Socket',
        boxSize: '8-Module Box (224 × 86 mm)',
        idealFor: 'Drawing Rooms, Master Suites, Kitchens',
        features: [
          '6 lighting/fan channels + 1 heavy universal 16A socket on one plate',
          'Custom one-tap Relax, Movie Night, Party & Welcome scenes',
          'Digital socket lock + wet-hand shockproof tempered glass front'
        ]
      },
      {
        id: '8m-8p-0s',
        name: '8 Touch Panels + 0 Sockets',
        shortLabel: '8 Touch Switches',
        touchPanels: 8,
        sockets: 0,
        img: '/media/plates/8m-8p-0s.png',
        badge: 'Full Lighting',
        title: '8 Moduler Octa Touch Switch Board (8 Lighting Circuits)',
        tagline: 'High-Density 8-Zone Lighting & Fan Architecture for Living Spaces',
        desc: 'High-density 8-module architectural glass touch board consolidating 8 circuits.',
        smartAutomationInfo: 'Multi-gang mesh scenes.',
        socketInfo: 'Eight independent solid-state relays.',
        load: '8 × 10A Lighting Circuits (6000W Max)',
        boxSize: '8-Module Box (224 × 86 mm)',
        idealFor: 'Luxury Living Rooms, Foyers, Conference Rooms',
        features: [
          '8 capacitive feather-touch circuits arranged in a balanced 4×2 grid',
          'Zero-cross snubbers eliminate flicker & extend LED driver life 3×',
          '2-way wireless synchronization across hallways & staircase entrances'
        ]
      },
      {
        id: '8m-4p-2s',
        name: '4 Touch Panels + 2 Smart Sockets',
        shortLabel: '4 Panels + 2 Sockets',
        touchPanels: 4,
        sockets: 2,
        img: '/media/plates/8m-4p-2s.png',
        badge: 'Dual Socket Combo',
        title: '8 Moduler Quad Touch Switch & Dual 16A Socket Board',
        tagline: 'Suite Lighting & Dual Charging Outlets on a Single 8M Console',
        desc: 'Four capacitive lighting channels paired with dual independent 16A universal power sockets.',
        smartAutomationInfo: 'Independent socket timers + 4-zone lights.',
        socketInfo: 'Dual 16A universal shuttered sockets.',
        load: '4 × 10A Switches + Dual 16A Sockets',
        boxSize: '8-Module Box (224 × 86 mm)',
        idealFor: 'Master Suites, Credenzas, Study Walls',
        features: [
          '4 lighting switches (2×2 grid) + 2 independently controlled 16A sockets',
          'Individual energy consumption logs per socket in the mobile app',
          '4kV industrial MOV spike arrestor shields laptops & TV electronics'
        ]
      },
      {
        id: '8m-2p-3s',
        name: '2 Touch Panels + 3 Smart Sockets',
        shortLabel: '2 Panels + 3 Sockets',
        touchPanels: 2,
        sockets: 3,
        img: '/media/plates/8m-2p-3s.png',
        badge: 'Triple Socket Hub',
        title: '8 Moduler Dual Touch Switch & Triple Smart Socket Board',
        tagline: 'Workstation & Media Console Hub with Triple Smart Outlets',
        desc: 'Two capacitive touch switches with three independent universal power sockets.',
        smartAutomationInfo: 'Workstation power scenes.',
        socketInfo: 'Triple 16A universal shuttered sockets.',
        load: '2 × 10A Switches + 3 × 16A Sockets',
        boxSize: '8-Module Box (224 × 86 mm)',
        idealFor: 'Home Offices, PC Workstations, TV Audio Racks',
        features: [
          '3 heavy shuttered outlets for monitors, PCs & speakers + 2 desk switches',
          'Workstation scene toggles lights & hardware power in one tap',
          'Auto-off night schedules eliminate idle peripheral standby drain'
        ]
      },
      {
        id: '8m-0p-4s',
        name: '0 Touch Panels + 4 Smart Sockets',
        shortLabel: '4 Heavy Sockets',
        touchPanels: 0,
        sockets: 4,
        img: '/media/plates/8m-0p-4s.png',
        badge: 'Quad Power Hub',
        title: '8 Moduler Quad Heavy-Duty 16A Smart Socket Board',
        tagline: 'Dedicated 4-Outlet Power Bank for Kitchens & AV Racks',
        desc: 'Four independent 16A universal smart sockets on a single 8-module plate.',
        smartAutomationInfo: 'Individual kWh metering across all 4 sockets.',
        socketInfo: 'Four universal shuttered sockets.',
        load: '4 × 16A Independent Sockets (7000W Max)',
        boxSize: '8-Module Box (224 × 86 mm)',
        idealFor: 'Kitchen Counters, Home Theatres, Server Racks',
        features: [
          '4 independently controlled 16A sockets replacing cluttered strips',
          'Live voltage/current telemetry + instant thermal overload push alerts',
          'Spring-shuttered multi-pin outlets support Indian, UK & EU plugs'
        ]
      }
    ],

    '10-moduler': [
      {
        id: '10m-8p-1s',
        name: '8 Touch Panels + 1 Smart Socket',
        shortLabel: '8 Panels + 1 Socket',
        touchPanels: 8,
        sockets: 1,
        img: '/media/plates/10m-8p-1s.png',
        badge: 'Most Popular',
        isPopular: true,
        title: '10 Moduler 8 Touch Switch & 16A Universal Socket Board',
        tagline: 'Luxury TV Wall & Living Hall Command Console (8 Switches + Socket)',
        desc: 'Extensive capacitive glass panel integrating 8 lighting channels alongside a 16A socket.',
        smartAutomationInfo: 'Cinema Mode dimming + EMI-filtered socket.',
        socketInfo: 'Universal multi-pin shuttered socket with 4kV surge protection.',
        load: '8 × 10A Channels + 1 × 16A Socket',
        boxSize: '10-Module Box (250 × 146 mm)',
        idealFor: 'Living Room TV Walls, Credenzas, Hallways',
        features: [
          '8 capacitive touch zones (4×2 grid) paired with 1 EMI-filtered 16A socket',
          'Cinema Mode scene dims hall spots & activates backlight coves',
          'Surge-clamped socket protects OLED TVs, consoles & soundbars'
        ]
      },
      {
        id: '10m-10p-0s',
        name: '10 Touch Panels + 0 Sockets',
        shortLabel: '10 Touch Switches',
        touchPanels: 10,
        sockets: 0,
        img: '/media/plates/10m-10p-0s.png',
        badge: 'Full Lighting',
        title: '10 Moduler 10-Gang Touch Switch Board (10 Lighting Circuits)',
        tagline: 'Grand Drawing Room 10-Circuit Chandelier, Cove & Fan Switch',
        desc: 'Ten capacitive feather-touch switches on diamond-cut crystal glass.',
        smartAutomationInfo: 'Whole-room scene hub with offline mesh.',
        socketInfo: 'Ten zero-cross solid-state relays.',
        load: '10 × 10A Lighting Circuits (7000W Max)',
        boxSize: '10-Module Box (250 × 146 mm)',
        idealFor: 'Grand Drawing Halls, Villa Foyers, Lounges',
        features: [
          '10 × 10A circuits (5×2 grid) consolidating an entire drawing hall',
          'Runs 100% locally via home mesh even when internet is down',
          'Double-tap Master Off clears every chandelier, sconce & spot'
        ]
      },
      {
        id: '10m-6p-2s',
        name: '6 Touch Panels + 2 Smart Sockets',
        shortLabel: '6 Panels + 2 Sockets',
        touchPanels: 6,
        sockets: 2,
        img: '/media/plates/10m-6p-2s.png',
        badge: 'Dual Socket Balance',
        title: '10 Moduler 6 Touch Switch & Dual 16A Universal Socket Board',
        tagline: 'Media Wall Lighting Controller with Dual 16A Appliance Outlets',
        desc: 'Six lighting circuits paired with dual independent 16A universal power sockets.',
        smartAutomationInfo: 'Movie scene lighting + dual media sockets.',
        socketInfo: 'Dual 16A universal shuttered sockets.',
        load: '6 × 10A Channels + Dual 16A Sockets',
        boxSize: '10-Module Box (250 × 146 mm)',
        idealFor: 'Entertainment Walls, Executive Offices, Suites',
        features: [
          '6 lighting zones (3×2 grid) + 2 heavy 16A sockets for TV & audio',
          'Independent socket countdowns & automated late-night cutoff',
          'Child-safe internal shutters + scratch-resistant beveled glass'
        ]
      },
      {
        id: '10m-4p-3s',
        name: '4 Touch Panels + 3 Smart Sockets',
        shortLabel: '4 Panels + 3 Sockets',
        touchPanels: 4,
        sockets: 3,
        img: '/media/plates/10m-4p-3s.png',
        badge: 'Triple Socket Station',
        title: '10 Moduler Quad Touch Switch & Triple 16A Socket Board',
        tagline: 'AV Credenza Station Pairing 4 Switches with 3 Smart Sockets',
        desc: 'Four lighting circuits combined with three universal smart sockets.',
        smartAutomationInfo: 'Unified AV equipment & room lighting control.',
        socketInfo: 'Triple 16A universal shuttered sockets.',
        load: '4 × 10A Channels + 3 × 16A Sockets',
        boxSize: '10-Module Box (250 × 146 mm)',
        idealFor: 'Media Walls, Audio Racks, Studio Desks',
        features: [
          '3 × 16A universal sockets for TV, router & receiver + 4 room switches',
          'One-tap Leave Home mode cuts standby electronics & room lighting',
          'Built-in 4kV MOV surge arrestor guards sensitive AV hardware'
        ]
      },
      {
        id: '10m-2p-4s',
        name: '2 Touch Panels + 4 Smart Sockets',
        shortLabel: '2 Panels + 4 Sockets',
        touchPanels: 2,
        sockets: 4,
        img: '/media/plates/10m-2p-4s.png',
        badge: 'Quad Socket Hub',
        title: '10 Moduler Dual Touch Switch & 4-Socket Heavy Power Board',
        tagline: 'Kitchen Island & Pantry Power Console (4 Sockets + 2 Switches)',
        desc: 'Two lighting channels alongside four heavy-duty universal smart sockets.',
        smartAutomationInfo: 'Scheduled morning appliance routines.',
        socketInfo: 'Four universal shuttered sockets with brass clips.',
        load: '2 × 10A Channels + 4 × 16A Sockets',
        boxSize: '10-Module Box (250 × 146 mm)',
        idealFor: 'Kitchen Islands, Bar Counters, Workstations',
        features: [
          '4 × 16A outlets for coffee makers, blenders & microwaves + 2 pendant lights',
          'Automated morning routines & instant thermal overload protection',
          'Heavy phosphor-bronze socket clips prevent loose-pin sparking'
        ]
      },
      {
        id: '10m-0p-5s',
        name: '0 Touch Panels + 5 Smart Sockets',
        shortLabel: '5 Heavy Sockets',
        touchPanels: 0,
        sockets: 5,
        img: '/media/plates/10m-0p-5s.png',
        badge: '5-Socket Power Bank',
        title: '10 Moduler Quintuple Heavy-Duty 16A Smart Socket Board',
        tagline: '5-Outlet High-Wattage Power Hub for Labs, Racks & Pantry Walls',
        desc: 'Five independent 16A universal smart sockets on a single 10-module plate.',
        smartAutomationInfo: 'Individual app scheduling & kWh telemetry.',
        socketInfo: 'Five universal shuttered sockets with 4kV surge clamp.',
        load: '5 × 16A Sockets (8000W Combined Max)',
        boxSize: '10-Module Box (250 × 146 mm)',
        idealFor: 'Server Racks, Commercial Labs, Pantry Walls',
        features: [
          '5 independently switchable 16A outlets across one flush glass strip',
          'Real-time wattage tracking & individual circuit fault alerts per socket',
          'Child-safe shuttered multi-pin design with zero-cross switching'
        ]
      }
    ],

    '12-moduler': [
      {
        id: '12m-8p-2s',
        name: '8 Touch Panels + 2 Smart Sockets',
        shortLabel: '8 Panels + 2 Sockets',
        touchPanels: 8,
        sockets: 2,
        img: '/media/plates/12m-8p-2s.png',
        badge: 'Most Popular',
        isPopular: true,
        title: '12 Moduler 8 Touch Switch & Dual 16A Universal Socket Board',
        tagline: 'Villa Great Room Standard: Dual-Tier 8 Lights + Dual Sockets',
        desc: 'Eight capacitive touch switches combined with dual universal power sockets.',
        smartAutomationInfo: 'Sunrise/sunset astronomical scenes.',
        socketInfo: 'Dual independent 16A smart sockets.',
        load: '8 × 10A Channels + Dual 16A Sockets',
        boxSize: '12-Module Two-Tier (250 × 200 mm)',
        idealFor: 'Villa Living Halls, Duplexes, Master Suites',
        features: [
          'Balanced two-tier layout: 4 switches + 1 socket per tier',
          'Astronomical clock triggers sunset perimeter lighting automatically',
          'Multi-way wireless mesh linking + overload auto-cutoff on sockets'
        ]
      },
      {
        id: '12m-12p-0s',
        name: '12 Touch Panels + 0 Sockets',
        shortLabel: '12 Touch Switches',
        touchPanels: 12,
        sockets: 0,
        img: '/media/plates/12m-12p-0s.png',
        badge: 'Full Lighting',
        title: '12 Moduler 12-Gang Touch Switch Board (12 Lighting Zones)',
        tagline: 'Double-Height Hall Architectural Master Switch (12 Touch Zones)',
        desc: 'Expansive 12-module crystal glass board consolidating 12 lighting & fan zones.',
        smartAutomationInfo: 'Centralized room command via offline mesh.',
        socketInfo: 'Twelve zero-cross solid-state relays.',
        load: '12 × 10A Lighting Circuits (8000W Max)',
        boxSize: '12-Module Two-Tier (250 × 200 mm)',
        idealFor: 'Penthouse Halls, Villa Foyers, Ballrooms',
        features: [
          '12 × 10A zones (dual 3×2 tiers) for chandeliers, coves & dual fans',
          'Master All-Off double-tap clears all 12 channels simultaneously',
          '2-way mesh control links entrances & upper duplex landings'
        ]
      },
      {
        id: '12m-10p-1s',
        name: '10 Touch Panels + 1 Smart Socket',
        shortLabel: '10 Panels + 1 Socket',
        touchPanels: 10,
        sockets: 1,
        img: '/media/plates/12m-10p-1s.png',
        badge: 'Single Socket Combo',
        title: '12 Moduler 10 Touch Switch & 16A Universal Socket Board',
        tagline: 'Grand Room 10-Circuit Switchboard with Integrated 16A Socket',
        desc: 'Ten capacitive lighting circuits paired with a single 16A universal power socket.',
        smartAutomationInfo: 'Custom multi-zone dimming scenes.',
        socketInfo: '16A universal shuttered socket with 4kV surge clamp.',
        load: '10 × 10A Channels + 1 × 16A Socket',
        boxSize: '12-Module Two-Tier (250 × 200 mm)',
        idealFor: 'Villa Great Rooms, Dining Halls, Boardrooms',
        features: [
          '10 touch switches (6 upper + 4 lower) paired with 1 × 16A utility socket',
          'Voice & app scenes orchestrate entire dining & lounge illumination',
          'Diamond-cut 4mm crystal glass with circadian-dimmed night LEDs'
        ]
      },
      {
        id: '12m-6p-3s',
        name: '6 Touch Panels + 3 Smart Sockets',
        shortLabel: '6 Panels + 3 Sockets',
        touchPanels: 6,
        sockets: 3,
        img: '/media/plates/12m-6p-3s.png',
        badge: 'Triple Socket Lounge',
        title: '12 Moduler 6 Touch Switch & Triple 16A Socket Board',
        tagline: 'Executive Lounge & Dining Credenza (6 Switches + 3 Outlets)',
        desc: 'Six lighting circuits paired with three universal power sockets.',
        smartAutomationInfo: 'Scene & 3-socket scheduling.',
        socketInfo: 'Triple 16A universal shuttered sockets.',
        load: '6 × 10A Channels + 3 × 16A Sockets',
        boxSize: '12-Module Two-Tier (250 × 200 mm)',
        idealFor: 'Executive Suites, Credenzas, Dining Buffets',
        features: [
          '6 lighting channels + 3 heavy 16A outlets across two ergonomic rows',
          'Ideal balance for dining warmers, espresso machines & room lighting',
          'Independent socket schedules + 4kV surge protection built in'
        ]
      },
      {
        id: '12m-4p-4s',
        name: '4 Touch Panels + 4 Smart Sockets',
        shortLabel: '4 Panels + 4 Sockets',
        touchPanels: 4,
        sockets: 4,
        img: '/media/plates/12m-4p-4s.png',
        badge: 'Quad Socket Hub',
        title: '12 Moduler Quad Touch Switch & 4-Socket Power Board',
        tagline: 'Modern Kitchen Island & Breakfast Bar Station (4+4 Layout)',
        desc: 'Four lighting circuits combined with four independent 16A universal smart sockets.',
        smartAutomationInfo: 'Group appliance automation & overload alerts.',
        socketInfo: 'Four universal shuttered sockets.',
        load: '4 × 10A Channels + 4 × 16A Sockets',
        boxSize: '12-Module Two-Tier (250 × 200 mm)',
        idealFor: 'Kitchen Islands, Breakfast Bars, Cafes',
        features: [
          'Symmetric 2 switches + 2 sockets per tier (4 lights + 4 heavy outlets)',
          'Simultaneously powers heavy kitchen blenders, ovens & island spots',
          'Child-safe internal shutters + real-time app overload cutoffs'
        ]
      },
      {
        id: '12m-2p-5s',
        name: '2 Touch Panels + 5 Smart Sockets',
        shortLabel: '2 Panels + 5 Sockets',
        touchPanels: 2,
        sockets: 5,
        img: '/media/plates/12m-2p-5s.png',
        badge: '5-Socket Power Bank',
        title: '12 Moduler Dual Touch Switch & 5-Socket Heavy Power Board',
        tagline: 'AV Editing Bay & Commercial Desk Center (5 Outlets + 2 Switches)',
        desc: 'Two lighting channels with five heavy-duty universal smart sockets.',
        smartAutomationInfo: 'Studio On one-tap power trigger.',
        socketInfo: 'Five universal shuttered sockets.',
        load: '2 × 10A Channels + 5 × 16A Sockets',
        boxSize: '12-Module Two-Tier (250 × 200 mm)',
        idealFor: 'Audio/Video Studios, Multi-PC Desks, Labs',
        features: [
          '5 independent 16A smart sockets (2 top + 3 bottom) + 2 lighting keys',
          'Studio On scene sequences studio lights & workstation hardware',
          'Solid phosphor-bronze contacts + individual power draw logs'
        ]
      }
    ],

    '16-moduler': [
      {
        id: '16m-12p-2s',
        name: '12 Touch Panels + 2 Smart Sockets',
        shortLabel: '12 Panels + 2 Sockets',
        touchPanels: 12,
        sockets: 2,
        img: '/media/plates/16m-12p-2s.png',
        badge: 'Most Popular',
        isPopular: true,
        title: '16 Moduler 12 Touch Switch & Dual 16A Universal Socket Board',
        tagline: 'Flagship Two-Tier Penthouse Command (12 Lights + 2 Sockets)',
        desc: 'Two-tier high-density crystal glass board managing 12 lighting circuits + 2 sockets.',
        smartAutomationInfo: 'Master Sleep & Away Security occupancy mode.',
        socketInfo: 'Dual heavy 16A universal sockets with 4kV arresters.',
        load: '12 × 10A Channels + Dual 16A Sockets',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'Penthouse Great Halls, Villas, Boardrooms',
        features: [
          'Two symmetric rows of 6 switches + 1 universal 16A socket each',
          'Away Security mode simulates evening occupancy while traveling',
          'Whole-floor offline mesh linking + 4kV surge protection built in'
        ]
      },
      {
        id: '16m-16p-0s',
        name: '16 Touch Panels + 0 Sockets',
        shortLabel: '16 Touch Switches',
        touchPanels: 16,
        sockets: 0,
        img: '/media/plates/16m-16p-0s.png',
        badge: 'Full Master Lighting',
        title: '16 Moduler Two-Tier Master Command Switchboard (16 Lighting Zones)',
        tagline: 'Architectural Whole-Floor Lighting Panel (16 Capacitive Channels)',
        desc: 'Sixteen capacitive touch circuits arranged across an ergonomic two-tier plate.',
        smartAutomationInfo: 'Whole-residence scene orchestration.',
        socketInfo: 'Sixteen solid-state zero-cross relays.',
        load: '16 × 10A Channels (10,000W Max)',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'Penthouse Foyers, Villa Entries, Banquet Halls',
        features: [
          '16 × 10A switches (two 4×2 grids) consolidating entire multi-zone halls',
          'Double-tap Master All-Off turns off an entire floor in one touch',
          '2-way wireless synchronization eliminates long staircase conduits'
        ]
      },
      {
        id: '16m-14p-1s',
        name: '14 Touch Panels + 1 Smart Socket',
        shortLabel: '14 Panels + 1 Socket',
        touchPanels: 14,
        sockets: 1,
        img: '/media/plates/16m-14p-1s.png',
        badge: 'Single Socket Combo',
        title: '16 Moduler 14 Touch Switch & 16A Universal Socket Board',
        tagline: 'Maximum Multi-Zone Lighting Coverage with 1 Heavy Power Point',
        desc: 'Fourteen capacitive lighting circuits paired with a single 16A universal power socket.',
        smartAutomationInfo: 'Sunrise/sunset astronomical scheduling.',
        socketInfo: '16A universal shuttered socket.',
        load: '14 × 10A Channels + 1 × 16A Socket',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'Luxury Villa Foyers, Corporate Suites, Penthouses',
        features: [
          '14 capacitive switches (8 top + 6 bottom) + 1 utility 16A socket',
          'Astronomical sunrise/sunset routines keep facades & foyers automated',
          'Zero-cross relays protect high-end chandeliers & architectural LEDs'
        ]
      },
      {
        id: '16m-10p-3s',
        name: '10 Touch Panels + 3 Smart Sockets',
        shortLabel: '10 Panels + 3 Sockets',
        touchPanels: 10,
        sockets: 3,
        img: '/media/plates/16m-10p-3s.png',
        badge: 'Triple Socket Command',
        title: '16 Moduler 10 Touch Switch & Triple 16A Socket Board',
        tagline: 'Boardroom & Presidential Suite Hub (10 Switches + 3 Outlets)',
        desc: 'Ten capacitive touch switches alongside three heavy-duty universal smart sockets.',
        smartAutomationInfo: 'Presentation Mode lights + AV outlets.',
        socketInfo: 'Triple 16A universal shuttered sockets.',
        load: '10 × 10A Channels + 3 × 16A Sockets',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'Boardrooms, Presidential Suites, Home Theatres',
        features: [
          '10 touch zones + 3 × 16A sockets for projectors, screens & audio',
          'Presentation Mode dims lights & powers meeting hardware at once',
          '4kV industrial surge arrestor + child-safe socket shutters'
        ]
      },
      {
        id: '16m-8p-4s',
        name: '8 Touch Panels + 4 Smart Sockets',
        shortLabel: '8 Panels + 4 Sockets',
        touchPanels: 8,
        sockets: 4,
        img: '/media/plates/16m-8p-4s.png',
        badge: 'Quad Socket Station',
        title: '16 Moduler 8 Touch Switch & 4-Socket Heavy Power Board',
        tagline: 'Equal Two-Tier Harmony: 8 Lighting Zones & 4 Heavy Sockets',
        desc: 'Eight capacitive lighting circuits paired with four universal smart sockets.',
        smartAutomationInfo: 'Balanced 12-circuit automation & night dim.',
        socketInfo: 'Four universal shuttered sockets.',
        load: '8 × 10A Channels + 4 × 16A Sockets',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'Home Theatres, Entertainment Lounges, Studios',
        features: [
          'Mirror-balanced rows: 4 touch switches + 2 × 16A sockets per tier',
          'Runs full AV racks & 8 architectural light/fan loops from one board',
          'Overload thermal trip + high/low voltage auto-isolation'
        ]
      },
      {
        id: '16m-6p-5s',
        name: '6 Touch Panels + 5 Smart Sockets',
        shortLabel: '6 Panels + 5 Sockets',
        touchPanels: 6,
        sockets: 5,
        img: '/media/plates/16m-6p-5s.png',
        badge: '5-Socket Power Hub',
        title: '16 Moduler 6 Touch Switch & 5-Socket Heavy Power Board',
        tagline: 'Open-Plan Studio & Kitchenette Power + Lighting Command',
        desc: 'Six lighting circuits combined with five heavy-duty universal smart sockets.',
        smartAutomationInfo: 'Countdown timers & live socket kWh logs.',
        socketInfo: 'Five universal shuttered sockets.',
        load: '6 × 10A Channels + 5 × 16A Sockets',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'Open Penthouses, Studio Lofts, Kitchenettes',
        features: [
          '6 room switches + 5 heavy 16A universal sockets across two tiers',
          'Individual app power schedules + live kWh monitoring per outlet',
          'Works 100% locally via home mesh network if Wi-Fi goes offline'
        ]
      },
      {
        id: '16m-4p-6s',
        name: '4 Touch Panels + 6 Smart Sockets',
        shortLabel: '4 Panels + 6 Sockets',
        touchPanels: 4,
        sockets: 6,
        img: '/media/plates/16m-4p-6s.png',
        badge: '6-Socket Power Bank',
        title: '16 Moduler Quad Touch Switch & 6-Socket Commercial Power Center',
        tagline: 'High-Capacity 6-Outlet Media Rack & Commercial Charging Bank',
        desc: 'Four lighting circuits paired with six heavy-duty universal smart sockets.',
        smartAutomationInfo: 'Individual app control for all 10 circuits.',
        socketInfo: 'Six universal shuttered sockets.',
        load: '4 × 10A Channels + 6 × 16A Sockets',
        boxSize: '16-Module Two-Tier (250 × 250 mm)',
        idealFor: 'AV Equipment Racks, Studios, Charging Banks',
        features: [
          '6 heavy 16A universal sockets (3 top + 3 bottom) + 4 touch switches',
          'Independent socket control replaces bulky extension cords cleanly',
          '4kV transient surge clamp + child-safe shutters on all 6 outlets'
        ]
      }
    ]
  };

  // 2. SOCKETS: 1, 2, 3, 4 sockets (Standalone socket plates)
  const socketOptions = [
    {
      id: '1-sockets',
      name: '1 sockets',
      img: '/media/plates/socket-1.png',
      title: '1 Smart Power Socket Plate (Compact 1M)',
      tagline: 'Single Retrofit Smart Socket for Lamps, Routers & Night Chargers',
      desc: 'Single-module smart socket engineered to retrofit standard backbox cutouts.',
      smartAutomationInfo: 'App countdown timers & kWh power monitoring.',
      socketInfo: 'Child-safe shutters + 3kV surge guard.',
      load: '10A Continuous (2200W Max)',
      boxSize: '1-Module Box (50 × 86 mm)',
      idealFor: 'Bedside Chargers, Table Lamps, Wi-Fi Routers',
      features: [
        '1 × 10A/16A universal socket with internal child-protection shutters',
        'Auto-off sleep timer protects phone & laptop batteries overnight',
        'Tracks daily power usage & alerts on standby vampire load'
      ]
    },
    {
      id: '2-sockets',
      name: '2 sockets',
      img: '/media/plates/socket-2.png',
      title: '2 Smart Power Sockets Plate (Dual 16A)',
      tagline: 'Dual Independent 16A Heavy Power Outlets on Crystal Glass',
      desc: 'Dual universal multi-pin power sockets with independent solid-state relays.',
      smartAutomationInfo: 'Independent app & voice control for both outlets.',
      socketInfo: 'Dual 16A shuttered outlets with 4kV surge clamp.',
      load: '2 × 16A Independent (3500W Max)',
      boxSize: '4-Module Box (146 × 86 mm)',
      idealFor: 'Kitchen Counters, Laundry Appliances, Desks',
      features: [
        'Dual 16A/25A relays control left & right appliances independently',
        'Supports Indian 3-pin (6A & 16A), UK & EU plugs safely',
        'Auto-cuts power during voltage spikes (>270V) or brownouts (<170V)'
      ]
    },
    {
      id: '3-sockets',
      name: '3 sockets',
      img: '/media/plates/socket-3.png',
      title: '3 Smart Power Sockets Plate (Triple 16A Hub)',
      tagline: 'Triple Heavy-Duty Smart Power Bar for Workstations & AV Media',
      desc: 'Three independent universal smart sockets unified under tempered crystal glass.',
      smartAutomationInfo: 'Group scheduling & per-outlet power cutoffs.',
      socketInfo: 'Triple 16A universal shuttered outlets.',
      load: '3 × 16A Independent (5000W Max)',
      boxSize: '6 / 8-Module Box (200 × 86 mm)',
      idealFor: 'Workstations, TV Consoles, Coffee Stations',
      features: [
        '3 independent 16A smart sockets replacing external surge strips',
        'One-tap scenes power down monitors, speakers & peripherals together',
        'Heavy phosphor-bronze clips prevent contact heat & pin arcing'
      ]
    },
    {
      id: '4-sockets',
      name: '4 sockets',
      img: '/media/plates/socket-4.png',
      title: '4 Smart Power Sockets Plate (Quad 16A Bank)',
      tagline: 'Architectural 4-Outlet Power Bank for Kitchens, Racks & Studios',
      desc: 'Four independent 16A universal shuttered outlets on diamond-cut crystal glass.',
      smartAutomationInfo: 'Individual scheduling & live telemetry per outlet.',
      socketInfo: 'Quad 16A universal shuttered sockets with 4kV surge clamp.',
      load: '4 × 16A Independent (7000W Max)',
      boxSize: '8-Module Box (224 × 86 mm)',
      idealFor: 'Kitchen Islands, Server Racks, AV Studios',
      features: [
        '4 independently switchable 16A outlets for high-draw appliances',
        'Real-time wattage monitoring + instant thermal overload shutoff',
        'Child-safe internal shutters & 4kV industrial surge suppression'
      ]
    }
  ];

  // Active Modular Box object
  const activeBox = useMemo(() => {
    return modularBoxes.find(b => b.id === activeModulerBox) || modularBoxes[2];
  }, [activeModulerBox]);

  // Current list of configuration options for the active module
  const currentModuleConfigs = useMemo(() => {
    return moduleConfigsMap[activeModulerBox] || moduleConfigsMap['4-moduler'];
  }, [activeModulerBox]);

  // Currently active configuration option
  const activeConfig = useMemo(() => {
    const found = currentModuleConfigs.find(c => c.id === selectedConfigId);
    return found || currentModuleConfigs[0];
  }, [currentModuleConfigs, selectedConfigId]);

  // Active item when looking at standalone sockets vs modular boards
  const activeSocketItem = useMemo(() => {
    return socketOptions.find(s => s.id === selectedSocketId) || socketOptions[0];
  }, [selectedSocketId]);

  // Handle switching module box from top buttons or dropdown
  const handleSelectModuleBox = (boxId: string) => {
    setActiveModulerBox(boxId);
    setSelectedCategory('touch-panels');
    const box = modularBoxes.find(b => b.id === boxId);
    if (box) {
      setSelectedPanelId(box.panelId);
      const configs = moduleConfigsMap[boxId] || [];
      const defaultConf = configs.find(c => c.isPopular) || configs[0];
      if (defaultConf) {
        setSelectedConfigId(defaultConf.id);
        setInquiryForm(prev => ({
          ...prev,
          automationFor: `${box.label} (${defaultConf.name}) Setup`
        }));
      }
    }
    // Smooth scroll down to the detail showcase
    const showcase = document.getElementById('selected-module-showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Contact Inquiry Form State
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: '4 Moduler (2 Touch Panels + 1 Socket) Setup',
    projectType: 'New Building',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Full-Bleed Retrofit & Touch Panels Panoramic Hero Banner (2172 x 724) ── */}
      <div
        id="hero"
        className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24 border-none"
      >
        <div className="relative w-full max-w-[2172px] mx-auto">
          <img
            src="/media/retrofit_touch_panels_panoramic_hero.jpg?v=fullBleed2172"
            alt="Retrofit & Touch Panel - Smart Home Automation - Neurolinx"
            width={2172}
            height={724}
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block"
          />

          {/* Subtle Ambient Scrim for Clean Text Readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Centered Title in the Middle of the Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 text-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-bold tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              <span className="text-white">Retrofit &amp; </span>
              <span className="text-brand-red drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] relative inline-block pb-1">
                Touch Panel
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red/90 rounded-full" />
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Slide 2: Models And Features of Smart Devices ── */}
      <div id="models-features" className="w-full bg-white pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stylish Architectural Section Title */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-b from-[#161922] to-[#0B0D12] text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)] border border-slate-700/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span>Modular Touch Panels &amp; Sockets</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.12] text-slate-900">
              <span className="block text-slate-900">Models And Features of</span>
              <span className="relative inline-block mt-1 sm:mt-1.5 pb-2.5">
                <span className="bg-gradient-to-r from-[#E0001B] via-[#F41F37] to-[#9E0014] bg-clip-text text-transparent">
                  Smart Devices
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-[3px] rounded-full bg-gradient-to-r from-transparent via-brand-red to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-[65%] h-[6px] rounded-full bg-brand-red/25 blur-sm pointer-events-none"
                />
              </span>
            </h2>

            <p className="text-slate-500 text-xs sm:text-[15px] max-w-xl mx-auto mt-4 leading-relaxed font-medium">
              Select any modular switchboard box size below to customize your touch panels and smart power sockets.
            </p>
          </div>

          {/* Modular Boxes: Clean Minimalist Chips matching reference style */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-14">
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              {modularBoxes.map((box) => {
                const isActive = activeModulerBox === box.id;
                return (
                  <button
                    key={box.id}
                    type="button"
                    onClick={() => handleSelectModuleBox(box.id)}
                    aria-pressed={isActive}
                    className={`min-w-[138px] sm:min-w-[148px] px-6 sm:px-7 py-3.5 sm:py-[15px] rounded-[11px] text-sm sm:text-[15px] font-medium tracking-normal transition-all duration-150 border cursor-pointer select-none inline-flex items-center justify-center text-center ${
                      isActive
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-[#F4F4F5] hover:bg-[#EAEAEB] text-slate-900 border-[#D8D8DC] hover:border-[#BDBDC4]'
                    }`}
                  >
                    <span>{box.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Downside Section: Selected Module Detail Showcase Card ── */}
          <div 
            id="selected-module-showcase" 
            className="max-w-6xl mx-auto bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm transition-all duration-300 scroll-mt-24"
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              
              {/* ── LEFT SIDE: Select Options for Touch Panels & Sockets ── */}
              <div className="w-full lg:w-5/12 xl:w-[42%] flex flex-col justify-start">
                
                {/* Select Category & Option Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-brand-red" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                        Select Category & Option
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200">
                      {selectedCategory === 'touch-panels' ? activeBox.label : 'Sockets'}
                    </span>
                  </div>

                  {/* Two Main Category Tabs: Touch Panels & Sockets */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('touch-panels');
                      }}
                      className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border cursor-pointer flex items-center justify-center gap-2 select-none ${
                        selectedCategory === 'touch-panels'
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-[#F9FAFB] hover:bg-gray-100 text-slate-700 border-gray-200'
                      }`}
                    >
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Touch Panels</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('sockets');
                      }}
                      className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border cursor-pointer flex items-center justify-center gap-2 select-none ${
                        selectedCategory === 'sockets'
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-[#F9FAFB] hover:bg-gray-100 text-slate-700 border-gray-200'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Sockets</span>
                    </button>
                  </div>

                  {/* If Touch Panels is active: Show Module selector + Touch Panels & Sockets Selected Options */}
                  {selectedCategory === 'touch-panels' ? (
                    <div className="space-y-4">
                      
                      {/* 1. Module Box Selector Dropdown & Fast Pills */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                          <span>Touch Panel Models</span>
                          <span className="text-[10px] font-semibold text-gray-400">7 Options</span>
                        </label>
                        <div className="relative">
                          <select
                            value={activeModulerBox}
                            onChange={(e) => handleSelectModuleBox(e.target.value)}
                            className="w-full appearance-none bg-[#F9FAFB] hover:bg-gray-100 text-slate-900 text-xs sm:text-sm font-bold py-2.5 px-3 pr-8 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer transition-all shadow-2xs"
                          >
                            {modularBoxes.map((box) => (
                              <option key={box.id} value={box.id}>
                                {box.label} ({box.panelId})
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* 2. Selected Options Wise: How many Touch Panels & How many Sockets */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-brand-red" />
                            <span>Touch Panels & Sockets Options</span>
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            {currentModuleConfigs.length} Options Wise
                          </span>
                        </div>

                        {/* Clickable Configuration Option Cards */}
                        <div className="space-y-2">
                          {currentModuleConfigs.map((cfg) => {
                            const isSelected = activeConfig.id === cfg.id;
                            return (
                              <button
                                key={cfg.id}
                                type="button"
                                onClick={() => {
                                  setSelectedConfigId(cfg.id);
                                  setInquiryForm(prev => ({
                                    ...prev,
                                    automationFor: `${activeBox.label} (${cfg.name}) Setup`
                                  }));
                                }}
                                className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                                  isSelected
                                    ? 'bg-black text-white border-black shadow-sm ring-1 ring-black'
                                    : 'bg-[#F9FAFB] hover:bg-gray-100 text-slate-800 border-gray-200'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                    isSelected ? 'border-brand-red bg-brand-red' : 'border-gray-400 bg-white'
                                  }`}>
                                    {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold truncate">
                                      {cfg.name}
                                    </div>
                                    <div className={`text-[10px] font-medium truncate ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                                      {cfg.touchPanels} Switch{cfg.touchPanels === 1 ? '' : 'es'} (1M ea) + {cfg.sockets} Socket{cfg.sockets === 1 ? '' : 's'} (2M ea)
                                    </div>
                                  </div>
                                </div>

                                {cfg.badge && (
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                                    isSelected 
                                      ? 'bg-brand-red text-white' 
                                      : 'bg-gray-200 text-slate-700'
                                  }`}>
                                    {cfg.badge}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                      </div>

                    </div>
                  ) : (
                    /* Standalone Sockets Mode */
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                          <span>Socket Models</span>
                          <span className="text-[10px] font-semibold text-gray-400">4 Options</span>
                        </label>
                        <div className="relative">
                          <select
                            value={selectedSocketId}
                            onChange={(e) => {
                              const id = e.target.value;
                              setSelectedSocketId(id);
                              const socket = socketOptions.find(s => s.id === id);
                              if (socket) {
                                setInquiryForm(prev => ({
                                  ...prev,
                                  automationFor: `${socket.name} Setup`
                                }));
                              }
                            }}
                            className="w-full appearance-none bg-[#F9FAFB] hover:bg-gray-100 text-slate-900 text-xs sm:text-sm font-bold py-2.5 px-3 pr-8 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer transition-all shadow-2xs"
                          >
                            {socketOptions.map((opt) => (
                              <option key={opt.id} value={opt.id}>
                                {opt.name}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Clickable Standalone Socket Option Cards */}
                      <div className="pt-3 border-t border-gray-100 space-y-2">
                        {socketOptions.map((opt) => {
                          const isSelected = activeSocketItem.id === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setSelectedSocketId(opt.id);
                                setInquiryForm(prev => ({
                                  ...prev,
                                  automationFor: `${opt.name} Setup`
                                }));
                              }}
                              className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                                isSelected
                                  ? 'bg-black text-white border-black shadow-sm ring-1 ring-black'
                                  : 'bg-[#F9FAFB] hover:bg-gray-100 text-slate-800 border-gray-200'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected ? 'border-brand-red bg-brand-red' : 'border-gray-400 bg-white'
                                }`}>
                                  {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold capitalize truncate">
                                    {opt.name}
                                  </div>
                                  <div className={`text-[10px] font-medium truncate ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {opt.boxSize}
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* ── RIGHT SIDE: Switchboard Glass Plate Visual Preview & Technical Information ── */}
              <div className="w-full lg:w-7/12 xl:w-[58%] flex flex-col justify-between">
                <div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                      <span>{selectedCategory === 'touch-panels' ? `${activeBox.label} Architecture` : `${activeSocketItem.name} Architecture`}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold border border-red-200">
                      <Sliders className="w-3.5 h-3.5 text-brand-red" />
                      <span>{selectedCategory === 'touch-panels' ? activeConfig.name : 'Dedicated Socket Plate'}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>4mm Toughened Crystal Glass</span>
                    </div>
                  </div>

                  {/* ── Studio Product Switchboard Image Preview ── */}
                  <div className="mb-6 rounded-2xl bg-white p-2 sm:p-4 border border-gray-200/80 shadow-sm overflow-hidden group">
                    <div className="relative w-full aspect-[1280/760] flex items-center justify-center bg-white rounded-xl overflow-hidden">
                      <img
                        key={selectedCategory === 'touch-panels' ? activeConfig.id : activeSocketItem.id}
                        src={`${selectedCategory === 'touch-panels' ? activeConfig.img : activeSocketItem.img}?v=centered1`}
                        alt={
                          selectedCategory === 'touch-panels'
                            ? `${activeBox.label} - ${activeConfig.name} Smart Touch Switchboard`
                            : `${activeSocketItem.name} Smart Power Socket Plate`
                        }
                        loading="eager"
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Concise Board Title & 1-Line Summary */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
                      {selectedCategory === 'touch-panels' ? (
                        activeConfig.sockets === 0 ? (
                          <>
                            <span className="text-black">{activeBox.label}: </span>
                            <span className="text-brand-red">
                              {activeConfig.touchPanels} Touch {activeConfig.touchPanels === 1 ? 'Panel' : 'Panels'}
                            </span>
                          </>
                        ) : activeConfig.touchPanels === 0 ? (
                          <>
                            <span className="text-black">{activeBox.label}: </span>
                            <span className="text-brand-red">
                              {activeConfig.sockets} Smart {activeConfig.sockets === 1 ? 'Socket' : 'Sockets'}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-black">{activeBox.label}: </span>
                            <span className="text-brand-red">
                              {activeConfig.touchPanels} Touch {activeConfig.touchPanels === 1 ? 'Panel' : 'Panels'}
                            </span>
                            <span className="text-black">
                              {' '}&amp; {activeConfig.sockets} Smart {activeConfig.sockets === 1 ? 'Socket' : 'Sockets'}
                            </span>
                          </>
                        )
                      ) : (
                        <span className="text-black">{activeSocketItem.title}</span>
                      )}
                    </h3>

                    <p className="text-brand-red font-semibold text-xs sm:text-[13px]">
                      {selectedCategory === 'touch-panels' ? activeConfig.tagline : activeSocketItem.tagline}
                    </p>
                  </div>

                  {/* Essential Board Specs Grid (2x2 Compact Key Specs) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">
                        Channel Output
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {selectedCategory === 'touch-panels'
                          ? `${activeConfig.touchPanels} × Touch Switch${activeConfig.touchPanels === 1 ? '' : 'es'} • ${activeConfig.sockets} × Socket${activeConfig.sockets === 1 ? '' : 's'}`
                          : `${activeSocketItem.name} • Independent 16A Relay Control`}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">
                        Load &amp; Power Rating
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {selectedCategory === 'touch-panels' ? activeConfig.load : activeSocketItem.load}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">
                        Wall Box Standard
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {selectedCategory === 'touch-panels' ? activeConfig.boxSize : activeSocketItem.boxSize}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">
                        Ideal For
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {selectedCategory === 'touch-panels' ? activeConfig.idealFor : activeSocketItem.idealFor}
                      </span>
                    </div>
                  </div>

                  {/* Key Board Highlights (Concise, Specific to Active Board) */}
                  <div className="space-y-1.5 mb-5">
                    {(selectedCategory === 'touch-panels' ? activeConfig.features : activeSocketItem.features).slice(0, 3).map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire Action Button */}
                <div>
                  <a
                    href="#contact-consultation"
                    onClick={() => {
                      setInquiryForm(prev => ({
                        ...prev,
                        automationFor: selectedCategory === 'touch-panels'
                          ? `${activeBox.label} (${activeConfig.name}) Setup`
                          : `${activeSocketItem.name} Setup`
                      }));
                    }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md shadow-brand-red/20 cursor-pointer"
                  >
                    <span>
                      Configure & Request Quote for {selectedCategory === 'touch-panels' ? `${activeBox.label} (${activeConfig.shortLabel})` : activeSocketItem.name}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Downside Option: Download Brochure */}
          <div className="mt-12 md:mt-14 flex justify-center">
            <a
              href="/media/smart_home_automation_brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-black"
            >
              Download Brochure
            </a>
          </div>

        </div>
      </div>

      {/* ── Slide 3: Have Questions? Consultation & Contact Form (Matching Last Previous Slide) ── */}
      <div id="contact-consultation" className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1150px] xl:max-w-[1210px] 2xl:max-w-[1250px] w-full mx-auto px-4 sm:px-6">
          
          {/* Main 2-Tone Card Container */}
          <div className="rounded-[32px] md:rounded-[36px] border border-gray-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch">
            
            {/* Left Panel: Pure White Background */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-white px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100/80">
              
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] mb-5 tracking-tight">
                  Have<br />
                  <span className="text-brand-red">Questions</span><span className="text-black">?</span>
                </h2>
                
                <p className="text-sm sm:text-base font-bold text-slate-800 mb-9 tracking-tight">
                  “Let’s make a Smarter World together”
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+917013486961" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <Phone className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 7013486961</span>
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

            </div>

            {/* Right Panel: Soft Light Gray Background Form */}
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex-1">
              {inquirySubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    We have received your configuration details. Our smart automation engineering team will review your chosen switchboard options and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: `${activeBox.label} (${activeConfig.name}) Setup`,
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
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Automation For (Selected Model)</label>
                      <input 
                        type="text" 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs" 
                      />
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
                        'Safety & Security Control',
                        'Curtain & Appliances Control',
                        'Home Theatre System'
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
