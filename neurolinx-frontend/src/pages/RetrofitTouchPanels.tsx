import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Check, 
  Zap, 
  Sliders, 
  ChevronDown, 
  ShieldCheck, 
  Wifi, 
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
  Lock,
  Plus,
  Minus,
  Lightbulb,
  Fan,
  Power
} from 'lucide-react';

export interface ModuleConfigOption {
  id: string;
  name: string;
  shortLabel: string;
  touchPanels: number;
  sockets: number;
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

  // Constant Top Modular Boxes (Row 1: 3, Row 2: 3, Row 3: 1 centered)
  const modularBoxes = [
    { id: '1-moduler', label: '1 Moduler', panelId: '1-panels', capacity: 1, standardSize: '1-Module Indian Standard Junction Box (50 × 86 mm)' },
    { id: '2-moduler', label: '2 Moduler', panelId: '2-panels', capacity: 2, standardSize: '2-Module Standard Junction Box (86 × 86 mm)' },
    { id: '4-moduler', label: '4 Moduler', panelId: '4-panels', capacity: 4, standardSize: '4-Module Indian Standard Junction Box (146 × 86 mm)' },
    { id: '8-moduler', label: '8 Moduler', panelId: '8-panels', capacity: 8, standardSize: '8-Module Horizontal / Square Box (224 × 86 mm)' },
    { id: '10-moduler', label: '10 Moduler', panelId: '10-panels', capacity: 10, standardSize: '10-Module Horizontal Box (250 × 146 mm)' },
    { id: '12-moduler', label: '12 Moduler', panelId: '12-panels', capacity: 12, standardSize: '12-Module Standard Plate (250 × 200 mm)' },
    { id: '16-moduler', label: '16 Moduler', panelId: '16-panels', capacity: 16, standardSize: '16-Module Two-Tier Standard Box (250 × 250 mm)' },
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
        badge: 'Dedicated Switch',
        isPopular: true,
        title: '1 Moduler Smart Touch Switch Board (1 Lighting Channel)',
        tagline: 'Compact Feather-Touch Smart Switching for Single Circuit',
        desc: 'Single capacitive feather-touch tempered crystal glass switch. Fits any standard 1-module backbox cutout to control a single lighting loop, exhaust fan, or accent cove strip with full smartphone and voice automation.',
        smartAutomationInfo: 'Control high-efficiency lighting remotely via smartphone or voice with Alexa and Google Assistant. Set daily auto-off timer schedules and track real-time power consumption.',
        socketInfo: 'Solid-state relay with built-in zero-cross switching and 3kV surge clamping protection.',
        load: '1 Lighting / Appliance Circuit (10A max / up to 2200W)',
        boxSize: '1-Module Indian Standard Junction Box (50 × 86 mm)',
        idealFor: 'Balcony Lights, Exhaust Fans, Staircase Landings, Wardrobe Coves',
        features: [
          'Capacitive feather-touch tempered glass with soft cyan LED glow',
          'App scheduling & remote control from anywhere in the world',
          'Zero-cross relay technology ensures quiet switching & long relay life',
          'Works 100% offline via local home mesh network without internet'
        ]
      },
      {
        id: '1m-0p-1s',
        name: '0 Touch Panels + 1 Smart Socket',
        shortLabel: '1 Compact Socket',
        touchPanels: 0,
        sockets: 1,
        badge: 'Power Point',
        title: '1 Moduler Smart Power Socket Board (10A Continuous)',
        tagline: 'Compact Retrofit Smart Automation Socket for Everyday Devices',
        desc: 'Single 1-module smart power socket with integrated solid-state relay. Directly retrofits into existing modular switch plates to automate bedside lamps, phone chargers, and gadgets.',
        smartAutomationInfo: 'App and voice control. Set sleep timers to cut off power after 2 hours to protect mobile phone batteries against overcharging.',
        socketInfo: 'Child-safe internal spring shutters, solid phosphor-bronze spring clips, 10A continuous rating, and 3kV surge clamping.',
        load: '10A Continuous (2200W resistive / 500W inductive)',
        boxSize: '1-Module Indian Standard Junction Box (50 × 86 mm)',
        idealFor: 'Bedside Mobile Charging, Desk Lamps, Wi-Fi Routers, Smart Speakers',
        features: [
          'Built-in child protection shutters prevent accidental electric shocks',
          'Scheduled countdown timers protect connected device batteries',
          'Real-time power monitoring alerts to standby ghost power drain',
          'Fits seamlessly into existing 1-module modular switch plate cutouts'
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
        badge: 'Dual Lighting',
        isPopular: true,
        title: '2 Moduler Dual Touch Switch Board (2 Lighting Channels)',
        tagline: 'Dual Capacitive Feather-Touch Lighting Controller',
        desc: 'Dual capacitive feather-touch switches on diamond-cut crystal glass. Independently controls two lighting channels, ambient ceiling spots, and warm indirect cove lighting.',
        smartAutomationInfo: 'Supports customized bedtime scenes where a single tap or voice command ("Goodnight") turns off both circuits simultaneously. Backlights dim to 10% after 10 PM.',
        socketInfo: 'Dual independent 10A solid-state relays with zero-cross switching and transient spike arrestor.',
        load: '2 Lighting Channels (10A each / up to 2200W per gang)',
        boxSize: '2-Module Standard Junction Box (86 × 86 mm)',
        idealFor: 'Bedside Light Points, Bathroom Vanity Lighting, Balconies, Hallway Coves',
        features: [
          'Sub-50ms feather-touch response with soft cyan LED status backlighting',
          'Two-way wireless mesh synchronization without physical traveler wiring',
          'Circadian night-dimming: backlights dim automatically to 10% after 10 PM',
          '4mm toughened scratch-resistant diamond-beveled crystal glass'
        ]
      },
      {
        id: '2m-0p-1s',
        name: '0 Touch Panels + 1 Heavy Smart Socket',
        shortLabel: '1 Heavy Socket (16A/25A)',
        touchPanels: 0,
        sockets: 1,
        badge: 'Heavy Appliance',
        title: '2 Moduler Heavy-Duty 16A/25A Smart Power Socket Board',
        tagline: 'Dedicated High-Inrush Power Controller for Water Geysers & Air Conditioners',
        desc: 'Full 2-module universal multi-pin heavy-duty smart power socket. Engineered for water geysers, split air conditioners, microwave ovens, and refrigerators with live power telemetry.',
        smartAutomationInfo: 'Automated morning geyser timers (auto-on at 6:30 AM, auto-off after 20 mins) and voltage-guard cutoff if voltage surges above 270V or drops below 170V.',
        socketInfo: 'Universal multi-pin shuttered socket, 16A continuous / 25A peak inrush rating, flame-retardant core, and 4kV transient surge suppression.',
        load: '16A Continuous / 25A Peak Inrush (up to 3500W load)',
        boxSize: '2-Module Standard Box (86 × 86 mm)',
        idealFor: 'Water Geysers, Split AC Units, Kitchen Microwaves, Washing Machines',
        features: [
          'Heavy-duty solid-state snubber protects against inductive compressor arcs',
          'Automated morning geyser timer guarantees zero wasted electricity',
          'Child-safe spring shutters prevent insertion of foreign objects',
          'Direct smartphone app and voice automation via Alexa and Google Home'
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
        badge: 'Most Popular',
        isPopular: true,
        title: '4 Moduler Dual Touch Switch & 16A Universal Socket Board',
        tagline: 'The Classic Bedside & Study Desk Balanced Smart Command Plate',
        desc: 'Two capacitive touch switches paired alongside an integrated 16A universal shuttered power socket. The most popular configuration for bedside headboards, executive desks, and hotel suites.',
        smartAutomationInfo: '"Goodnight" scene turns off room lights while keeping phone charging socket active. Socket features scheduled sleep-timer to prevent battery overcharging.',
        socketInfo: '16A universal multi-pin shuttered socket with 4kV surge clamping and live power telemetry.',
        load: '2 Lighting Circuits (10A each) + 1 Heavy Smart Socket (16A/25A)',
        boxSize: '4-Module Indian Standard Junction Box (146 × 86 mm)',
        idealFor: 'Bedside Headboards, Study Workstations, Vanity Mirrors, Hotel Consoles',
        features: [
          'Optimal balance of independent lighting control and high-power socket access',
          'Child-safe spring shutters protect against accidental electrical shocks',
          'Sleep-timer scheduled cutoff for mobile phone & laptop charging protection',
          '4mm diamond-bevelled black crystal glass plate flush mounts cleanly'
        ]
      },
      {
        id: '4m-4p-0s',
        name: '4 Touch Panels + 0 Sockets',
        shortLabel: '4 Touch Switches',
        touchPanels: 4,
        sockets: 0,
        badge: 'Full Lighting',
        title: '4 Moduler Quad Touch Switch Board (4 Lighting Circuits)',
        tagline: 'Standard Bedroom & Dining Room Multi-Circuit Lighting Center',
        desc: 'Four capacitive feather-touch circuits on a 4-module luxury crystal glass plate. Controls main chandeliers, ceiling spotlights, wall sconces, and indirect perimeter coves.',
        smartAutomationInfo: 'Scene coordination: "Dinner Mode" dims chandeliers to 40% and turns on warm wall sconces. Double-tap master "All Off" turns off all 4 circuits when exiting.',
        socketInfo: 'Four independent 10A solid-state relays with zero-cross switching.',
        load: '4 Lighting Channels (10A each / up to 4000W total)',
        boxSize: '4-Module Indian Standard Junction Box (146 × 86 mm)',
        idealFor: 'Bedrooms, Living Rooms, Dining Areas, Executive Offices',
        features: [
          'Digital capacitor stepping guarantees zero acoustic buzz on lighting loads',
          'Master "All Off" double-tap trigger directly from physical glass plate',
          'Real-time power monitoring alerts to high current or voltage spikes',
          'Full voice control integration with Alexa, Google Home, and Apple Siri'
        ]
      },
      {
        id: '4m-0p-2s',
        name: '0 Touch Panels + 2 Smart Sockets',
        shortLabel: '2 Smart Sockets',
        touchPanels: 0,
        sockets: 2,
        badge: 'Dual Power Hub',
        title: '4 Moduler Dual Heavy-Duty 16A Smart Socket Board',
        tagline: 'Dual Independent High-Power Appliance Hub with Power Monitoring',
        desc: 'Dual independent 16A universal smart power sockets on a single 4-module plate. Engineered for kitchen counter appliances, utility rooms, and workstation multi-plug setups.',
        smartAutomationInfo: 'Independent app control for left and right sockets. Set separate auto-off schedules for coffee maker, microwave, and laptop chargers.',
        socketInfo: 'Dual 16A universal shuttered sockets, individual solid-state relays, and 4kV MOV transient surge arrestor.',
        load: 'Dual 16A Independent Sockets (up to 3500W each / 5000W combined)',
        boxSize: '4-Module Indian Standard Junction Box (146 × 86 mm)',
        idealFor: 'Kitchen Counters, Coffee Stations, AV Equipment Racks, Laundry Rooms',
        features: [
          'Dual independent relay switching controlled separately via app and voice',
          'Real-time power monitoring alerts to high current or voltage fluctuations',
          'Heavy-duty spring contacts prevent loose-pin sparking and thermal degradation',
          'Child-safe spring shutters on both outlets'
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
        badge: 'Most Popular',
        isPopular: true,
        title: '8 Moduler 6 Touch Switch & 16A Universal Socket Board',
        tagline: 'Living Room Standard: 6 Lighting Zones with Universal Power Point',
        desc: 'Six capacitive touch switches paired with an integrated 16A universal power socket. The architectural standard for formal living rooms and master suites.',
        smartAutomationInfo: 'Trigger whole-home scenes like "Welcome Home" (turns on foyer spots, living cove, and sets fan to speed 3). Multi-gang interlock prevents accidental high-power spikes.',
        socketInfo: '16A universal shuttered socket with digital lock mode and transient spike arrestor.',
        load: '6 Lighting Circuits (10A each) + 1 Heavy Smart Socket (16A/25A)',
        boxSize: '8-Module Horizontal / Square Junction Box (224 × 86 mm)',
        idealFor: 'Formal Drawing Rooms, Master Bedroom Suites, Open Kitchens',
        features: [
          'One-touch scene triggers: Party, Movie Night, Relax, and Good Morning',
          'Water-resistant and electric-shock proof surface (100% safe with wet hands)',
          'Circadian rhythm schedule engine linked with astronomical clock',
          'Integrated universal power socket handles high-power vacuum or entertainment gear'
        ]
      },
      {
        id: '8m-8p-0s',
        name: '8 Touch Panels + 0 Sockets',
        shortLabel: '8 Touch Switches',
        touchPanels: 8,
        sockets: 0,
        badge: 'Full Lighting',
        title: '8 Moduler Octa Touch Switch Board (8 Lighting Circuits)',
        tagline: 'Comprehensive Multi-Zone Living Space Lighting Controller',
        desc: 'High-density 8-module architectural glass touch board consolidating primary chandelier lights, warm indirect cove strips, auxiliary mood lamps, and ceiling fans.',
        smartAutomationInfo: 'Multi-gang mesh control with customizable scene presets. Set synchronized dimming levels across all 8 channels with a single tap or Alexa voice command.',
        socketInfo: 'Eight independent solid-state relays with zero-cross snubber protection.',
        load: '8 Lighting Circuits (10A each / up to 6000W total)',
        boxSize: '8-Module Horizontal / Square Junction Box (224 × 86 mm)',
        idealFor: 'Luxury Living Rooms, Grand Foyers, Conference Rooms, Executive Suites',
        features: [
          'Controls 8 lighting and fan circuits with individual cyan LED status halos',
          'Double-tap master "All Off" button switches off entire room effortlessly',
          'Zero acoustic hum on dimmer circuits with solid-state stepping',
          'Seamless two-way mesh communication without physical traveler wires'
        ]
      },
      {
        id: '8m-4p-2s',
        name: '4 Touch Panels + 2 Smart Sockets',
        shortLabel: '4 Panels + 2 Sockets',
        touchPanels: 4,
        sockets: 2,
        badge: 'Dual Socket Combo',
        title: '8 Moduler Quad Touch Switch & Dual 16A Socket Board',
        tagline: 'Bedside Master Suite & Credenza Lighting + Dual Charging Outlets',
        desc: 'Four capacitive lighting channels paired with dual independent 16A universal power sockets. Engineered for bedside walls, media credenzas, and vanity consoles.',
        smartAutomationInfo: 'Independent automation for both sockets and all 4 light circuits. Automated sleep timers and energy consumption tracking directly in the mobile app.',
        socketInfo: 'Dual 16A universal shuttered sockets with independent relay cutoff.',
        load: '4 Lighting Circuits (10A each) + Dual Heavy Sockets (16A each)',
        boxSize: '8-Module Horizontal / Square Junction Box (224 × 86 mm)',
        idealFor: 'Master Suites, Entertainment Credenzas, Study Workstations',
        features: [
          'Dual independent 16A outlets with child-safe internal safety shutters',
          'Four capacitive glass touch switches with cyan LED backlights',
          'Individual socket energy monitoring graph in mobile application',
          'Built-in 4kV MOV industrial surge arrestor protects appliances'
        ]
      },
      {
        id: '8m-2p-3s',
        name: '2 Touch Panels + 3 Smart Sockets',
        shortLabel: '2 Panels + 3 Sockets',
        touchPanels: 2,
        sockets: 3,
        badge: 'Triple Socket Hub',
        title: '8 Moduler Dual Touch Switch & Triple Smart Socket Board',
        tagline: 'Workstation, Media Console & Multi-Peripheral Command Hub',
        desc: 'Two capacitive touch switches with three independent universal power sockets. Perfect for home offices, computer desks, and audio-video equipment consoles.',
        smartAutomationInfo: '"Workstation Scene" turns on task lights, monitors, and laptop chargers with one tap. Auto-off timers eliminate standby vampire drain.',
        socketInfo: 'Triple universal 16A sockets with solid brass contact clips and overload protection.',
        load: '2 Lighting Circuits (10A each) + 3 Universal Sockets (16A each)',
        boxSize: '8-Module Horizontal / Square Junction Box (224 × 86 mm)',
        idealFor: 'Home Offices, Computer Workstations, TV Audio Racks',
        features: [
          'Triple smart power sockets for laptops, monitors, and peripherals',
          'Dual lighting switches for ambient desk coves and task spotlights',
          'Independent app and voice scheduling for each socket outlet',
          'Child-safe spring shutters on all three socket modules'
        ]
      },
      {
        id: '8m-0p-4s',
        name: '0 Touch Panels + 4 Smart Sockets',
        shortLabel: '4 Heavy Sockets',
        touchPanels: 0,
        sockets: 4,
        badge: 'Quad Power Hub',
        title: '8 Moduler Quad Heavy-Duty 16A Smart Socket Board',
        tagline: 'Multi-Appliance Kitchen Counter & Home Entertainment Power Bank',
        desc: 'Four independent 16A universal smart sockets on a single 8-module plate. Ideal for kitchen appliance counters, gaming centers, and server racks.',
        smartAutomationInfo: 'App and voice control for all 4 sockets. Live kilowatt-hour (kWh) telemetry and automated high/low voltage surge cutoffs.',
        socketInfo: 'Four universal shuttered sockets, individual solid-state relays, and 4kV surge clamping.',
        load: '4 Independent Smart Sockets (16A each / total 7000W)',
        boxSize: '8-Module Horizontal / Square Junction Box (224 × 86 mm)',
        idealFor: 'Kitchen Counters, Home Theatres, Media Centers, Server Racks',
        features: [
          'Four independently controlled 16A outlets on one sleek glass plate',
          'Real-time current and voltage telemetry for connected appliances',
          'Child protection shutters on all four receptacles',
          'Overload thermal trip with automatic push notifications to phone'
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
        badge: 'Most Popular',
        isPopular: true,
        title: '10 Moduler 8 Touch Switch & 16A Universal Socket Board',
        tagline: 'Signature Luxury Credenza & TV Console Command Switchboard',
        desc: 'As showcased in luxury penthouses: Extensive capacitive glass panel integrating 8 lighting channels alongside an international 16A universal power socket, mounted flush above credenzas and media walls.',
        smartAutomationInfo: 'Dedicated "Cinema Mode" scene trigger: main spotlights fade out, TV backlights glow cyan, and motorized curtains glide closed. Socket circuit includes EMI filtering for OLED TVs.',
        socketInfo: 'Universal multi-pin shuttered socket with 4kV MOV surge protection and child-safety shutters.',
        load: '8 Lighting Channels (10A each) + 1 Universal 16A Socket',
        boxSize: '10-Module Horizontal Box (250 × 146 mm)',
        idealFor: 'Living Room TV Consoles, Media Walls, Credenzas, Workstations',
        features: [
          'Dedicated TV Entertainment & Home Theatre synchronization mode',
          'Surge-protected socket circuit shields sensitive OLED displays & gaming consoles',
          'Customizable cyan and warm amber status backlight LEDs with soft dimming',
          'Spring-loaded child-safety shuttered socket handles up to 16A continuous loads'
        ]
      },
      {
        id: '10m-10p-0s',
        name: '10 Touch Panels + 0 Sockets',
        shortLabel: '10 Touch Switches',
        touchPanels: 10,
        sockets: 0,
        badge: 'Full Lighting',
        title: '10 Moduler 10-Gang Touch Switch Board (10 Lighting Circuits)',
        tagline: 'Grand Hall & Drawing Room Master Multi-Circuit Lighting Center',
        desc: 'Ten capacitive feather-touch switches on diamond-cut crystal glass. Consolidates chandeliers, ceiling downlights, wall sconces, coves, and multi-speed fans for expansive living spaces.',
        smartAutomationInfo: 'Master floor automation hub: "Master Sleep", "Party Mode", and voice-directed scene transitions with zero latency mesh response.',
        socketInfo: 'Ten solid-state relays with zero-cross switching for infinite relay lifespan.',
        load: '10 Lighting Circuits (10A each / up to 7000W total)',
        boxSize: '10-Module Horizontal Box (250 × 146 mm)',
        idealFor: 'Grand Drawing Halls, Villa Foyers, Banquet Rooms, Open Penthouses',
        features: [
          'Ten independent touch circuits with individual cyan backlight indicators',
          'One-touch master scene triggers directly from the physical glass panel',
          'Works 100% offline via local home mesh network even without internet',
          '4mm toughened crystal glass with diamond-bevelled anti-glare finish'
        ]
      },
      {
        id: '10m-6p-2s',
        name: '6 Touch Panels + 2 Smart Sockets',
        shortLabel: '6 Panels + 2 Sockets',
        touchPanels: 6,
        sockets: 2,
        badge: 'Dual Socket Balance',
        title: '10 Moduler 6 Touch Switch & Dual 16A Universal Socket Board',
        tagline: 'Luxury Media Wall & Executive Suite Lighting + Dual Power Hub',
        desc: 'Six lighting circuits paired with dual independent 16A universal power sockets. Engineered for premium entertainment consoles and luxury executive suites.',
        smartAutomationInfo: 'App and voice control. Set "Movie Mode" to dim the 6 lights while keeping media players and sound systems powered.',
        socketInfo: 'Dual 16A universal shuttered sockets with independent relay switching.',
        load: '6 Lighting Channels (10A each) + Dual 16A Sockets',
        boxSize: '10-Module Horizontal Box (250 × 146 mm)',
        idealFor: 'Entertainment Walls, Executive Offices, Hotel Presidential Suites',
        features: [
          'Dual heavy 16A sockets for TV, soundbar, and console power',
          'Six feather-touch lighting channels with responsive cyan touch indicators',
          'Scheduled timers and energy tracking for both power outlets',
          'Child-safe spring shutters prevent accidental shock hazards'
        ]
      },
      {
        id: '10m-4p-3s',
        name: '4 Touch Panels + 3 Smart Sockets',
        shortLabel: '4 Panels + 3 Sockets',
        touchPanels: 4,
        sockets: 3,
        badge: 'Triple Socket Station',
        title: '10 Moduler Quad Touch Switch & Triple 16A Socket Board',
        tagline: 'Living Room AV Console & Multi-Device Charging Station',
        desc: 'Four lighting circuits combined with three universal smart sockets. Ideal for media consoles needing power for TV, set-top box, gaming console, and ambient lighting.',
        smartAutomationInfo: 'Scene coordination and power telemetry. Group control allows powering down all connected electronics when leaving home.',
        socketInfo: 'Triple 16A universal shuttered sockets with 4kV MOV transient surge arrestor.',
        load: '4 Lighting Channels (10A each) + 3 Universal 16A Sockets',
        boxSize: '10-Module Horizontal Box (250 × 146 mm)',
        idealFor: 'Living Room Media Walls, Audio Racks, Studio Workstations',
        features: [
          'Three heavy-duty universal smart sockets on one unified glass plate',
          'Four capacitive touch lighting switches with soft night-dimming',
          'Surge protection preserves expensive audio-video electronics',
          'Independent app scheduling for all seven circuits'
        ]
      },
      {
        id: '10m-2p-4s',
        name: '2 Touch Panels + 4 Smart Sockets',
        shortLabel: '2 Panels + 4 Sockets',
        touchPanels: 2,
        sockets: 4,
        badge: 'Quad Socket Hub',
        title: '10 Moduler Dual Touch Switch & 4-Socket Heavy Power Board',
        tagline: 'High-Power Kitchen Island & Studio Workstation Console',
        desc: 'Two lighting channels alongside four heavy-duty universal smart sockets. Built for modern kitchen islands, coffee counters, and laboratory workstations.',
        smartAutomationInfo: 'App control and automated morning routines (e.g., turn on coffee machine socket at 7:00 AM). Overload thermal cut-off with instant smartphone alerts.',
        socketInfo: 'Four universal shuttered sockets with solid brass contact clips.',
        load: '2 Lighting Channels (10A each) + 4 Universal 16A Sockets',
        boxSize: '10-Module Horizontal Box (250 × 146 mm)',
        idealFor: 'Kitchen Islands, Bar Counters, Multi-Monitor Workstations',
        features: [
          'Four high-wattage smart sockets for blenders, coffee machines, and appliances',
          'Dual lighting switches for island pendants and under-cabinet coves',
          'Child-safe spring shutters on all four power receptacles',
          'Real-time power monitoring alerts to heavy power consumption'
        ]
      },
      {
        id: '10m-0p-5s',
        name: '0 Touch Panels + 5 Smart Sockets',
        shortLabel: '5 Heavy Sockets',
        touchPanels: 0,
        sockets: 5,
        badge: '5-Socket Power Bank',
        title: '10 Moduler Quintuple Heavy-Duty 16A Smart Socket Board',
        tagline: 'Commercial Server Rack, Laboratory & Multi-Appliance Station',
        desc: 'Five independent 16A universal smart sockets on an expansive 10-module plate. Engineered for commercial test benches, server rooms, and appliance banks.',
        smartAutomationInfo: 'Individual app scheduling, group power cut-off, and comprehensive electrical telemetry across all 5 sockets.',
        socketInfo: 'Five universal shuttered sockets with 4kV industrial surge clamping.',
        load: '5 Independent Heavy Sockets (16A each / 8000W max)',
        boxSize: '10-Module Horizontal Box (250 × 146 mm)',
        idealFor: 'Commercial Labs, Server Racks, Multi-Appliance Kitchen Hubs',
        features: [
          'Five independently switchable 16A smart outlets on luxury crystal glass',
          'Heavy-duty solid-state relays with zero-cross snubber protection',
          'Child-safe internal spring shutters on all five sockets',
          'Full smartphone app and voice integration via Alexa & Google Assistant'
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
        badge: 'Most Popular',
        isPopular: true,
        title: '12 Moduler 8 Touch Switch & Dual 16A Universal Socket Board',
        tagline: 'Villa Great Room Standard: 8 Lighting Zones + Dual Power Outlets',
        desc: 'Eight capacitive touch switches combined with dual universal power sockets. The benchmark switchboard for large villa drawing halls, open dining areas, and master suites.',
        smartAutomationInfo: 'Multi-tier lighting scenes (Daylight Harvest, Evening Lounge, Party Mode), automated sunrise/sunset astronomical clock schedules, and inter-board mesh linking.',
        socketInfo: 'Dual independent smart sockets with individual app control, overload auto-cutoff, and heavy appliance compatibility.',
        load: '8 Lighting Circuits + Dual 16A Universal Sockets',
        boxSize: '12-Module Standard Plate (250 × 200 mm)',
        idealFor: 'Double-Height Living Rooms, Duplex Staircases, Banquet Foyers',
        features: [
          'Whole-hall lighting orchestration with multi-way wireless mesh synchronization',
          'Overload auto-cut-off protection with real-time app alert notifications',
          'Zero-cross relay switching extends smart LED bulb lifespan 3x',
          'Dual universal shuttered sockets handle heavy appliances & entertainment gear'
        ]
      },
      {
        id: '12m-12p-0s',
        name: '12 Touch Panels + 0 Sockets',
        shortLabel: '12 Touch Switches',
        touchPanels: 12,
        sockets: 0,
        badge: 'Full Lighting',
        title: '12 Moduler 12-Gang Touch Switch Board (12 Lighting Zones)',
        tagline: 'Architectural Double-Height Hall & Villa Great Room Master Switch',
        desc: 'Expansive 12-module crystal glass command board consolidating multiple chandelier zones, perimeter coves, dual fan speed regulators, and mood lighting circuits.',
        smartAutomationInfo: 'Centralized room command: control every ceiling light, spot, wall sconce & fan. Works 100% locally via mesh even during internet disruptions.',
        socketInfo: 'Twelve independent solid-state relays with zero-cross snubber circuits.',
        load: '12 Lighting Circuits (10A each / up to 8000W total)',
        boxSize: '12-Module Standard Plate (250 × 200 mm)',
        idealFor: 'Grand Penthouse Drawing Halls, Villa Foyers, Conference Ballrooms',
        features: [
          'Twelve capacitive touch switches with soft cyan LED glowing halos',
          'Master "All Off" double-tap trigger directly from physical glass plate',
          'Circadian rhythm schedule engine linked with astronomical clock',
          'Two-way synchronized mesh control without physical traveler wires'
        ]
      },
      {
        id: '12m-10p-1s',
        name: '10 Touch Panels + 1 Smart Socket',
        shortLabel: '10 Panels + 1 Socket',
        touchPanels: 10,
        sockets: 1,
        badge: 'Single Socket Combo',
        title: '12 Moduler 10 Touch Switch & 16A Universal Socket Board',
        tagline: 'Comprehensive Villa Drawing Hall Controller with Dedicated Socket',
        desc: 'Ten capacitive lighting circuits paired with a single 16A universal power socket on an expansive 12-module crystal glass plate.',
        smartAutomationInfo: 'App and voice control for all 11 circuits. Create custom scenes like "Dinner & Music" with automatic light dimming.',
        socketInfo: '16A universal shuttered socket with 4kV surge clamping.',
        load: '10 Lighting Circuits + 1 Universal 16A Socket',
        boxSize: '12-Module Standard Plate (250 × 200 mm)',
        idealFor: 'Villa Great Rooms, Formal Dining Halls, Executive Boardrooms',
        features: [
          'Ten feather-touch lighting channels with cyan status indicators',
          'Integrated universal power socket with internal child-safety shutters',
          'Voice integration with Amazon Alexa, Google Home, and Apple Siri',
          '4mm toughened crystal glass plate with diamond-cut bevelled edges'
        ]
      },
      {
        id: '12m-6p-3s',
        name: '6 Touch Panels + 3 Smart Sockets',
        shortLabel: '6 Panels + 3 Sockets',
        touchPanels: 6,
        sockets: 3,
        badge: 'Triple Socket Lounge',
        title: '12 Moduler 6 Touch Switch & Triple 16A Socket Board',
        tagline: 'Executive Suite Lounge & Dining Credenza Multi-Appliance Station',
        desc: 'Six lighting circuits paired with three universal power sockets. Engineered for luxury hotel executive suites, living room media credenzas, and open dining spaces.',
        smartAutomationInfo: 'Independent app control for all 3 sockets and 6 lighting loops. Full scene scheduling and power analytics.',
        socketInfo: 'Triple 16A universal shuttered sockets with child protection.',
        load: '6 Lighting Circuits + 3 Universal 16A Sockets',
        boxSize: '12-Module Standard Plate (250 × 200 mm)',
        idealFor: 'Executive Suites, Media Credenzas, Dining Buffets',
        features: [
          'Three heavy-duty universal smart sockets on one unified glass plate',
          'Six capacitive touch switches with soft night-dimming backlights',
          'Surge protection preserves connected audio-video and kitchen appliances',
          'Works 100% offline via local home mesh network without internet'
        ]
      },
      {
        id: '12m-4p-4s',
        name: '4 Touch Panels + 4 Smart Sockets',
        shortLabel: '4 Panels + 4 Sockets',
        touchPanels: 4,
        sockets: 4,
        badge: 'Quad Socket Hub',
        title: '12 Moduler Quad Touch Switch & 4-Socket Power Board',
        tagline: 'Modern Kitchen Island & Bar Counter Multi-Appliance Station',
        desc: 'Four lighting circuits combined with four independent 16A universal smart sockets. Perfect for kitchen islands with high-power blenders, coffee machines, and pendant lighting.',
        smartAutomationInfo: 'Group appliance automation and individual socket schedules. Overload thermal protection with automatic push notifications.',
        socketInfo: 'Four universal shuttered sockets with 4kV transient surge suppression.',
        load: '4 Lighting Circuits + 4 Universal 16A Sockets',
        boxSize: '12-Module Standard Plate (250 × 200 mm)',
        idealFor: 'Kitchen Islands, Breakfast Bars, Commercial Cafes',
        features: [
          'Four 16A power sockets for simultaneous kitchen appliance operation',
          'Four touch lighting switches for bar spots, pendants, and perimeter coves',
          'Child-safe spring shutters prevent insertion of foreign objects',
          '5-Year comprehensive replacement warranty from Neurolinx'
        ]
      },
      {
        id: '12m-2p-5s',
        name: '2 Touch Panels + 5 Smart Sockets',
        shortLabel: '2 Panels + 5 Sockets',
        touchPanels: 2,
        sockets: 5,
        badge: '5-Socket Power Bank',
        title: '12 Moduler Dual Touch Switch & 5-Socket Heavy Power Board',
        tagline: 'High-Density AV Studio & Commercial Workstation Command Center',
        desc: 'Two lighting channels with five heavy-duty universal smart sockets. Engineered for broadcast studios, AV racks, and multi-computer editing suites.',
        smartAutomationInfo: '"Studio On" scene powers on monitors, audio interfaces, and task lights with one tap. Overload protection with real-time telemetry.',
        socketInfo: 'Five universal shuttered sockets with solid brass contact clips.',
        load: '2 Lighting Circuits + 5 Universal 16A Sockets',
        boxSize: '12-Module Standard Plate (250 × 200 mm)',
        idealFor: 'Recording Studios, Video Editing Suites, Server Workstations',
        features: [
          'Five independently controllable universal smart outlets',
          'Dual touch switches for studio lighting and accent backlights',
          'Heavy-duty solid-state relays with zero-cross switching',
          'Toughened 4mm diamond-cut crystal glass plate'
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
        badge: 'Most Popular',
        isPopular: true,
        title: '16 Moduler 12 Touch Switch & Dual 16A Universal Socket Board',
        tagline: 'Ultimate Two-Tier Penthouse Command: 12 Lighting Zones + Dual Sockets',
        desc: 'The pinnacle of architectural smart switching: Two-tier high-density crystal glass board managing 12 lighting and fan circuits across large open-plan penthouses alongside dual universal power sockets.',
        smartAutomationInfo: 'Master floor automation hub: "Master Sleep", "Away Security Mode" (activates simulated occupancy lighting while you travel), and voice-directed scene transitions.',
        socketInfo: 'Dual heavy 16A universal sockets with child safety lockouts, solid-state relays with zero-cross switching for infinite relay life, and 4kV spike arresters.',
        load: '12 Lighting Circuits + Dual 16A Universal Sockets',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Grand Penthouse Drawing Halls, Villa Main Entry, Corporate Boardrooms',
        features: [
          'Centralized room command: control every ceiling light, spot, wall sconce & fan',
          'Dual-tier ergonomic layout with dedicated room master controls',
          'Dual universal shuttered sockets for high-power electronics and cleaning gear',
          '100% offline local mesh ensures uninterrupted switching during network outages'
        ]
      },
      {
        id: '16m-16p-0s',
        name: '16 Touch Panels + 0 Sockets',
        shortLabel: '16 Touch Switches',
        touchPanels: 16,
        sockets: 0,
        badge: 'Full Master Lighting',
        title: '16 Moduler Two-Tier Master Command Switchboard (16 Lighting Zones)',
        tagline: 'Whole-Floor Penthouse Architectural Grand Lighting Command Panel',
        desc: 'Sixteen capacitive touch circuits arranged across an ergonomic two-tier crystal glass plate. Manages every lighting zone, spot, fan, and cove across multi-room penthouse suites.',
        smartAutomationInfo: 'Whole-residence scene coordination: Party Mode, Cinema Mode, Relax, and All Off. Two-way mesh linking with all other switchboards in the home.',
        socketInfo: 'Sixteen solid-state relays with zero-cross snubber circuits and 4kV surge clamping.',
        load: '16 Lighting / Mood Circuits (10A each / up to 10,000W total)',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Penthouse Great Halls, Luxury Villa Entries, Boutique Hotel Lobbies',
        features: [
          'Sixteen independent capacitive feather-touch switches on dual-tier layout',
          'Master double-tap "All Off" button switches off entire floor with one touch',
          'Customizable cyan and warm amber status backlights with soft night-dimming',
          'Covered by Neurolinx 5-Year Comprehensive Hassle-Free Replacement Warranty'
        ]
      },
      {
        id: '16m-14p-1s',
        name: '14 Touch Panels + 1 Smart Socket',
        shortLabel: '14 Panels + 1 Socket',
        touchPanels: 14,
        sockets: 1,
        badge: 'Single Socket Combo',
        title: '16 Moduler 14 Touch Switch & 16A Universal Socket Board',
        tagline: 'Grand Penthouse Multi-Circuit Master Panel with Heavy Power Point',
        desc: 'Fourteen capacitive lighting circuits paired with a single 16A universal power socket. Offers maximum lighting zone coverage while maintaining a dedicated convenience outlet.',
        smartAutomationInfo: 'App and voice control for all 15 circuits. Astronomical clock schedules for sunrise/sunset automated lighting.',
        socketInfo: '16A universal shuttered socket with child-safe spring shutters.',
        load: '14 Lighting Circuits + 1 Universal 16A Socket',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Penthouse Living Areas, Luxury Villa Foyers, Corporate Suites',
        features: [
          'Fourteen feather-touch lighting channels with individual cyan LED halos',
          'Integrated universal power socket handles vacuum cleaners and appliances',
          'Zero-cross relay switching extends smart LED bulb lifespan 3x',
          '4mm toughened crystal glass with diamond-cut bevelled edges'
        ]
      },
      {
        id: '16m-10p-3s',
        name: '10 Touch Panels + 3 Smart Sockets',
        shortLabel: '10 Panels + 3 Sockets',
        touchPanels: 10,
        sockets: 3,
        badge: 'Triple Socket Command',
        title: '16 Moduler 10 Touch Switch & Triple 16A Socket Board',
        tagline: 'Executive Boardroom & Luxury Presidential Suite Command Station',
        desc: 'Ten capacitive touch switches alongside three heavy-duty universal smart sockets. Perfect for boardroom conference tables, executive consoles, and hotel presidential suites.',
        smartAutomationInfo: '"Presentation Mode" dims room lights and activates projector and screen power sockets. Voice integration via Alexa and Google Assistant.',
        socketInfo: 'Triple 16A universal shuttered sockets with independent relay cutoff.',
        load: '10 Lighting Circuits + 3 Universal 16A Sockets',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Boardrooms, Luxury Hotel Suites, Penthouse Entertainment Dens',
        features: [
          'Ten lighting channels + three heavy-duty universal smart sockets',
          'Independent app scheduling and energy monitoring for all circuits',
          'Child-safe spring shutters on all three socket outlets',
          'Built-in 4kV MOV industrial surge arrestor protects connected equipment'
        ]
      },
      {
        id: '16m-8p-4s',
        name: '8 Touch Panels + 4 Smart Sockets',
        shortLabel: '8 Panels + 4 Sockets',
        touchPanels: 8,
        sockets: 4,
        badge: 'Quad Socket Station',
        title: '16 Moduler 8 Touch Switch & 4-Socket Heavy Power Board',
        tagline: 'Balanced Dual-Tier Architecture: 8 Lighting Zones + 4 Heavy Sockets',
        desc: 'Eight capacitive lighting circuits paired with four universal smart sockets. An exquisitely balanced switchboard for sprawling entertainment areas and media rooms.',
        smartAutomationInfo: 'Independent app control for all 12 circuits. Custom scene creation with automated night-dimming after 10 PM.',
        socketInfo: 'Four universal shuttered sockets with 4kV transient surge suppression.',
        load: '8 Lighting Circuits + 4 Universal 16A Sockets',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Home Theatres, Entertainment Lounges, Penthouse Drawing Rooms',
        features: [
          'Four 16A smart power sockets for complete AV rack equipment',
          'Eight capacitive glass touch switches for layered room illumination',
          'Overload thermal cut-off with automatic push notifications to phone',
          'Toughened diamond-cut black crystal glass plate'
        ]
      },
      {
        id: '16m-6p-5s',
        name: '6 Touch Panels + 5 Smart Sockets',
        shortLabel: '6 Panels + 5 Sockets',
        touchPanels: 6,
        sockets: 5,
        badge: '5-Socket Power Hub',
        title: '16 Moduler 6 Touch Switch & 5-Socket Heavy Power Board',
        tagline: 'Open-Plan Penthouse Living & Kitchenette Multi-Appliance Station',
        desc: 'Six lighting circuits combined with five heavy-duty universal smart sockets. Engineered for luxury open-concept penthouse spaces with integrated kitchenette counters.',
        smartAutomationInfo: 'Group appliance automation, countdown sleep timers, and live kWh telemetry for all 5 power outlets.',
        socketInfo: 'Five universal shuttered sockets with solid brass contact clips.',
        load: '6 Lighting Circuits + 5 Universal 16A Sockets',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Open-Plan Penthouses, Studio Apartments, Kitchenette Consoles',
        features: [
          'Five independently switchable 16A smart outlets on luxury crystal glass',
          'Six feather-touch switches for room spots, pendants, and perimeter coves',
          'Child-safe spring shutters prevent insertion of foreign objects',
          '100% offline local mesh ensures uninterrupted switching during network outages'
        ]
      },
      {
        id: '16m-4p-6s',
        name: '4 Touch Panels + 6 Smart Sockets',
        shortLabel: '4 Panels + 6 Sockets',
        touchPanels: 4,
        sockets: 6,
        badge: '6-Socket Power Bank',
        title: '16 Moduler Quad Touch Switch & 6-Socket Commercial Power Center',
        tagline: 'Luxury Media Room AV Rack & High-Capacity Multi-Charging Bank',
        desc: 'Four lighting circuits paired with six heavy-duty universal smart sockets. The ultimate power and lighting hub for audio-video racks, editing suites, and commercial charging stations.',
        smartAutomationInfo: 'Individual app control and scheduling for each socket outlet. Comprehensive electrical current telemetry and high/low voltage surge protection.',
        socketInfo: 'Six universal shuttered sockets with 4kV industrial surge clamping.',
        load: '4 Lighting Circuits + 6 Universal 16A Sockets',
        boxSize: '16-Module Two-Tier Standard Box (250 × 250 mm)',
        idealFor: 'Commercial Studios, AV Equipment Racks, Multi-Charging Consoles',
        features: [
          'Six heavy-duty universal smart sockets on one expansive glass plate',
          'Four capacitive touch lighting switches with cyan LED backlights',
          'Child-safe internal spring shutters on all six receptacles',
          '5-Year comprehensive replacement warranty from Neurolinx'
        ]
      }
    ]
  };

  // 2. SOCKETS: 1, 2, 3, 4 sockets (Standalone socket plates)
  const socketOptions = [
    {
      id: '1-sockets',
      name: '1 sockets',
      title: '1 sockets Smart Convenience Power Board (6A/10A Rating)',
      tagline: 'Compact Smart Automation Socket for Everyday Devices, Lamps & Gadgets',
      desc: 'Single-module smart socket engineered to retrofit standard backbox cutouts. Provides smart on/off scheduling, energy consumption tracking, and voice automation for table lamps, home entertainment peripherals, audio equipment, and everyday appliances.',
      smartAutomationInfo: 'App & Voice Control via Alexa and Google Assistant. Create automated sunrise/sunset routines, countdown sleep timers for mobile charging, and view daily/weekly kilowatt-hour (kWh) power consumption graphs.',
      socketInfo: 'Internal spring-loaded child-safety shutters, solid phosphor-bronze spring clips, 10A continuous / 16A peak resistive rating, and integrated 3kV surge suppression.',
      load: '10A Continuous (2200W resistive / 500W inductive)',
      boxSize: '1-Module Standard Indian Junction Box (50 × 86 mm)',
      idealFor: 'Bedside Phone Charging, Study Table Lamps, Smart Speakers, Wi-Fi Routers',
      features: [
        'App scheduled sleep-timer turns off power after 2 hours to prevent battery damage',
        'Built-in child protection shutters prevent insertion of foreign objects',
        'Real-time power monitoring alerts you to ghost power drain and standby waste',
        'Compact single-module form factor fits any standard modular switch plate'
      ]
    },
    {
      id: '2-sockets',
      name: '2 sockets',
      title: '2 sockets Heavy-Duty 16A Smart Power Board',
      tagline: 'High-Wattage Dedicated Power Controller for Kitchen & Utility Appliances',
      desc: 'Standard universal multi-pin power socket with heavy-duty smart solid-state relay. Built for power-hungry appliances including microwaves, refrigerators, electric irons, room heaters, and washing machines.',
      smartAutomationInfo: 'Automate high-load appliance schedules and monitor real-time electrical current. Set automated power cut-off if voltage drops below 170V or surges above 270V to protect expensive inverter appliances.',
      socketInfo: 'Heavy-duty 16A continuous / 25A inductive inrush rating, flame-retardant poly-carbonate core, solid brass contacts, and 4kV MOV transient surge arrestor.',
      load: '16A Continuous / 20A Max (3500W load capacity)',
      boxSize: '2-Module Standard Junction Box (86 × 86 mm)',
      idealFor: 'Microwave Ovens, Refrigerators, Washing Machines, Dishwashers, Heaters',
      features: [
        'Smart overload and thermal cut-off with automatic instant notification to phone',
        'High-grade phosphor-bronze grip prevents loose contact sparking and heating',
        'Multi-standard universal socket fits Indian 3-pin (large & small), UK, and EU plugs',
        'Synchronized with home energy management to run appliances during off-peak hours'
      ]
    },
    {
      id: '3-sockets',
      name: '3 sockets',
      title: '3 sockets 25A Smart Power Board with Feather-Touch Isolator',
      tagline: 'Dedicated High-Inrush Controller for Water Geysers & Split Air Conditioners',
      desc: 'Comprehensive smart unit combining a 25A heavy-duty universal socket with an integrated capacitive feather-touch glass isolator switch. Built specifically for high-inrush inductive compressor loads and high-wattage water heating elements.',
      smartAutomationInfo: 'Schedule your morning shower routine: turn on geyser at 6:30 AM and automatically turn off after 20 minutes to save electricity. Pre-cool rooms with AC schedules and trigger geyser activation via voice: "Alexa, turn on the master geyser".',
      socketInfo: '25A heavy-duty industrial rating with zero-cross snubber circuit to prevent contact arc degradation, ceramic thermal barrier, and automatic under/over-voltage isolation.',
      load: '25A Continuous / 32A Inrush (up to 5500W heavy inductive & heating load)',
      boxSize: '3-Module Standard Junction Box (120 × 86 mm)',
      idealFor: 'Instant & Storage Water Geysers, 1.5 - 2.5 Ton Air Conditioners, EV Chargers',
      features: [
        'Dedicated capacitive glass touch switch with dual-color LED status indicator',
        'Zero-cross relay switching technology eliminates electrical arcing during startup',
        'Automated morning geyser timers guarantee zero wasted electricity or boiling dry',
        'Heavy 32A peak inrush endurance rated for continuous commercial & villa use'
      ]
    },
    {
      id: '4-sockets',
      name: '4 sockets',
      title: '4 sockets Dual Multi-Pin & 30W USB-C Fast-Charge Station',
      tagline: 'Architectural Workstation & Luxury Bedside Multi-Appliance Charging Hub',
      desc: 'High-density command socket plate featuring dual independent 16A universal shuttered outlets coupled with dual Type-C (30W Power Delivery) and USB-A (QuickCharge 3.0) smart charging ports in a diamond-bevelled black crystal glass surround.',
      smartAutomationInfo: 'Independent channel automation: control left socket, right socket, and USB ports individually from your mobile app. Create "Workstation Mode" that powers up monitors, laptop chargers, and desk lighting with one tap.',
      socketInfo: 'Dual 16A universal shuttered sockets + 30W USB-C PD / 18W USB-A smart chip with intelligent device detection, thermal dissipation shielding, and 4kV industrial surge clamp.',
      load: 'Dual 16A Independent Sockets + 30W USB-C PD Fast Charger',
      boxSize: '4-Module Standard Junction Box (146 × 86 mm)',
      idealFor: 'Executive Work Desks, Luxury Bedside Consoles, TV Entertainment Units',
      features: [
        'Integrated 30W USB-C Power Delivery charges iPhones, iPads, and MacBooks at max speed',
        'Dual independent 16A sockets allow controlling two appliances separately',
        'Child-safe spring shutters on both sockets with independent power monitoring',
        'Sleek diamond-cut black crystal glass plate flush mounts cleanly into backboxes'
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

  // Stepper handlers: step through available pre-sets for this module
  const handleStepConfig = (direction: 'touch-inc' | 'touch-dec' | 'socket-inc' | 'socket-dec') => {
    const currentIndex = currentModuleConfigs.findIndex(c => c.id === activeConfig.id);
    if (currentIndex === -1) return;

    if (direction === 'touch-inc' || direction === 'socket-dec') {
      // Find config with higher touch panels
      const target = currentModuleConfigs.find(c => c.touchPanels > activeConfig.touchPanels);
      if (target) {
        setSelectedConfigId(target.id);
        setInquiryForm(prev => ({
          ...prev,
          automationFor: `${activeBox.label} (${target.name}) Setup`
        }));
      }
    } else if (direction === 'touch-dec' || direction === 'socket-inc') {
      // Find config with higher sockets
      const target = currentModuleConfigs.find(c => c.sockets > activeConfig.sockets);
      if (target) {
        setSelectedConfigId(target.id);
        setInquiryForm(prev => ({
          ...prev,
          automationFor: `${activeBox.label} (${target.name}) Setup`
        }));
      }
    }
  };

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Only That One Image (Full-Width Edge-to-Edge Clean Architecture) ── */}
      <div className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24">
        <div className="relative w-full">
          <img 
            src="/media/retrofit_touch_panel_hero.jpg" 
            alt="Retrofit & Touch Switches Smart Home Automation - Neurolinx"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* ── Slide 2: Models And Features of Smart Devices (Matching User Reference Image) ── */}
      <div id="models-features" className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title with company logo colors: Red, White, and Black */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm border border-gray-800">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span>Modular Touch Panels & Sockets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-2 sm:mb-3">
              Models And Features of
            </h2>
            <div className="inline-flex items-center gap-2.5 text-3xl sm:text-4xl md:text-5xl font-black">
              <span className="text-brand-red relative inline-block pb-1.5">
                Smart
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-brand-red rounded-full"></span>
              </span>
              <span className="text-black relative inline-block pb-1.5">
                Devices
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-black rounded-full"></span>
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-medium">
              Select any modular switchboard box size below to customize your touch panels and smart power sockets.
            </p>
          </div>

          {/* Modular Boxes: 1 Moduler, 2 Moduler, 4 Moduler, 8 Moduler, 10 Moduler, 12 Moduler, 16 Moduler (Row 1: 3, Row 2: 3, Row 3: 1 centered) */}
          <div className="max-w-4xl mx-auto mb-14 sm:mb-16">
            <div className="flex flex-col items-center gap-3.5 sm:gap-4.5">
              
              {/* Row 1: 3 Boxes (1 Moduler, 2 Moduler, 4 Moduler) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4.5 w-full">
                {modularBoxes.slice(0, 3).map((box) => {
                  const isActive = activeModulerBox === box.id;
                  return (
                    <button
                      key={box.id}
                      type="button"
                      onClick={() => handleSelectModuleBox(box.id)}
                      className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-[20px] text-sm sm:text-[15px] md:text-base font-bold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center justify-center text-center shadow-xs ${
                        isActive
                          ? 'bg-black text-white border-black shadow-md scale-[1.02]'
                          : 'bg-[#F9FAFB] hover:bg-gray-100 hover:border-gray-300 text-slate-800 border-gray-200/90'
                      }`}
                    >
                      <span>{box.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Row 2: 3 Boxes (8 Moduler, 10 Moduler, 12 Moduler) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4.5 w-full">
                {modularBoxes.slice(3, 6).map((box) => {
                  const isActive = activeModulerBox === box.id;
                  return (
                    <button
                      key={box.id}
                      type="button"
                      onClick={() => handleSelectModuleBox(box.id)}
                      className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-[20px] text-sm sm:text-[15px] md:text-base font-bold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center justify-center text-center shadow-xs ${
                        isActive
                          ? 'bg-black text-white border-black shadow-md scale-[1.02]'
                          : 'bg-[#F9FAFB] hover:bg-gray-100 hover:border-gray-300 text-slate-800 border-gray-200/90'
                      }`}
                    >
                      <span>{box.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Row 3: Last 1 Box Centered (16 Moduler) */}
              <div className="flex justify-center w-full">
                <div className="w-full sm:w-[calc(33.333%-0.75rem)]">
                  {(() => {
                    const box = modularBoxes[6];
                    const isActive = activeModulerBox === box.id;
                    return (
                      <button
                        key={box.id}
                        type="button"
                        onClick={() => handleSelectModuleBox(box.id)}
                        className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-[20px] text-sm sm:text-[15px] md:text-base font-bold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center justify-center text-center shadow-xs ${
                          isActive
                            ? 'bg-black text-white border-black shadow-md scale-[1.02]'
                            : 'bg-[#F9FAFB] hover:bg-gray-100 hover:border-gray-300 text-slate-800 border-gray-200/90'
                        }`}
                      >
                        <span>{box.label}</span>
                      </button>
                    );
                  })()}
                </div>
              </div>
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
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs mb-4">
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
                        <div className="space-y-2 mb-3">
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

                        {/* Steppers & Quantity Adjuster */}
                        <div className="bg-[#F8F9FA] rounded-xl p-3 border border-gray-200 space-y-2.5">
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                            <span className="flex items-center gap-1.5">
                              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                              <span>Touch Panels Count:</span>
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleStepConfig('touch-dec')}
                                disabled={activeConfig.touchPanels === 0}
                                className="w-6 h-6 rounded-md bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center cursor-pointer"
                              >
                                <Minus className="w-3 h-3 text-slate-700" />
                              </button>
                              <span className="w-6 text-center font-bold text-slate-900 text-xs">
                                {activeConfig.touchPanels}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleStepConfig('touch-inc')}
                                disabled={activeConfig.touchPanels >= activeBox.capacity}
                                className="w-6 h-6 rounded-md bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center cursor-pointer"
                              >
                                <Plus className="w-3 h-3 text-slate-700" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                            <span className="flex items-center gap-1.5">
                              <Zap className="w-3.5 h-3.5 text-brand-red" />
                              <span>Smart Sockets Count:</span>
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleStepConfig('socket-dec')}
                                disabled={activeConfig.sockets === 0}
                                className="w-6 h-6 rounded-md bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center cursor-pointer"
                              >
                                <Minus className="w-3 h-3 text-slate-700" />
                              </button>
                              <span className="w-6 text-center font-bold text-slate-900 text-xs">
                                {activeConfig.sockets}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleStepConfig('socket-inc')}
                                disabled={(activeConfig.sockets * 2) >= activeBox.capacity}
                                className="w-6 h-6 rounded-md bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center cursor-pointer"
                              >
                                <Plus className="w-3 h-3 text-slate-700" />
                              </button>
                            </div>
                          </div>

                          {/* Module Capacity Meter */}
                          <div className="pt-1.5 border-t border-gray-200/80">
                            <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                              <span className="text-gray-500">Box Capacity Meter:</span>
                              <span className="text-emerald-700">
                                {activeConfig.touchPanels * 1 + activeConfig.sockets * 2} / {activeBox.capacity} Modules (100% Filled)
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full w-full"></div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  ) : (
                    /* Standalone Sockets Mode */
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
                  )}
                </div>

                {/* Active Model Standard Highlights Card */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active Standard</span>
                    <span className="text-xs font-bold text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {selectedCategory === 'touch-panels' ? activeBox.label : activeSocketItem.name}
                    </span>
                  </div>
                  <div className="text-xs text-slate-700 font-semibold space-y-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Standard Box:</span>
                      <span className="text-slate-800 font-bold text-right">
                        {selectedCategory === 'touch-panels' ? activeConfig.boxSize : activeSocketItem.boxSize}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Plate Material:</span>
                      <span className="text-slate-800 font-bold">4mm Toughened Crystal Glass</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Warranty:</span>
                      <span className="text-emerald-600 font-bold">5-Year Comprehensive</span>
                    </div>
                  </div>
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

                  {/* ── Interactive Visual Switchboard Plate Preview ── */}
                  <div className="mb-6 rounded-2xl bg-gradient-to-b from-[#181D26] to-[#0D111A] p-5 sm:p-6 border border-slate-700/80 shadow-2xl relative overflow-hidden group">
                    {/* Glass sheen highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none rounded-2xl"></div>
                    
                    {/* Top Plate Brand Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-700/60 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                        <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
                          NEUROLINX • {selectedCategory === 'touch-panels' ? activeBox.label : activeSocketItem.name} GLASS PLATE
                        </span>
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-slate-400">
                        {selectedCategory === 'touch-panels' 
                          ? `${activeConfig.touchPanels}P + ${activeConfig.sockets}S (${activeBox.capacity}M)`
                          : 'STANDALONE SMART POWER'}
                      </span>
                    </div>

                    {/* Switchboard Elements: Touch Panels + Universal Sockets Grid */}
                    <div className="relative z-10">
                      {selectedCategory === 'touch-panels' ? (
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-2">
                          
                          {/* Render Capacitive Touch Switches */}
                          {Array.from({ length: activeConfig.touchPanels }).map((_, i) => (
                            <div 
                              key={`touch-${i}`}
                              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#090C12] border border-cyan-500/40 p-2.5 flex flex-col items-center justify-between shadow-[0_0_14px_rgba(6,182,212,0.18)] hover:border-cyan-400 transition-all cursor-pointer group/btn"
                            >
                              <div className="w-full flex items-center justify-between">
                                <span className="text-[8px] font-mono text-cyan-400 font-bold">L{i + 1}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,1)]"></span>
                              </div>
                              <div className="w-7 h-7 rounded-full border border-cyan-400/50 bg-cyan-950/40 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                                {i % 4 === 0 && <Lightbulb className="w-3.5 h-3.5 text-cyan-300" />}
                                {i % 4 === 1 && <Fan className="w-3.5 h-3.5 text-cyan-300" />}
                                {i % 4 === 2 && <Sparkles className="w-3.5 h-3.5 text-cyan-300" />}
                                {i % 4 === 3 && <Power className="w-3.5 h-3.5 text-cyan-300" />}
                              </div>
                              <span className="text-[8px] font-semibold text-slate-400 tracking-tight">TOUCH</span>
                            </div>
                          ))}

                          {/* Render Universal Smart Power Sockets (Each is 2M Wide) */}
                          {Array.from({ length: activeConfig.sockets }).map((_, i) => (
                            <div 
                              key={`socket-${i}`}
                              className="w-28 sm:w-32 h-16 sm:h-18 rounded-2xl bg-[#090C12] border border-slate-700 p-2.5 flex items-center justify-between shadow-inner relative hover:border-slate-500 transition-all"
                            >
                              {/* 3-Pin Universal Socket Graphic */}
                              <div className="flex flex-col items-center justify-center gap-1 w-14">
                                {/* Top Ground Pin */}
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 shadow-inner"></div>
                                {/* Live & Neutral Slotted Pins */}
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-3 rounded-xs bg-slate-900 border border-slate-700"></div>
                                  <div className="w-2 h-3 rounded-xs bg-slate-900 border border-slate-700"></div>
                                </div>
                              </div>

                              {/* Socket Details & Power Indicator */}
                              <div className="flex flex-col items-end justify-between h-full py-0.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_rgba(224,0,27,0.9)] animate-pulse"></span>
                                  <span className="text-[9px] font-mono text-brand-red font-bold">16A</span>
                                </div>
                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                                  SMART POWER
                                </span>
                              </div>
                            </div>
                          ))}

                        </div>
                      ) : (
                        /* Standalone Socket Visual */
                        <div className="flex items-center justify-center gap-4 py-2">
                          <div className="w-32 h-20 rounded-2xl bg-[#090C12] border border-slate-700 p-3 flex items-center justify-between shadow-inner">
                            <div className="flex flex-col items-center justify-center gap-1.5 w-14">
                              <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700"></div>
                              <div className="flex items-center gap-2.5">
                                <div className="w-2 h-3 rounded-xs bg-slate-900 border border-slate-700"></div>
                                <div className="w-2 h-3 rounded-xs bg-slate-900 border border-slate-700"></div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-between h-full">
                              <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_rgba(224,0,27,1)]"></span>
                              <span className="text-[9px] font-mono text-brand-red font-bold">SMART 16A</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Specs Bar */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="font-medium">
                        {selectedCategory === 'touch-panels' 
                          ? `${activeConfig.touchPanels} Feather-Touch Circuits • ${activeConfig.sockets} Smart Sockets`
                          : 'Universal Shuttered Safety Outlets'}
                      </span>
                      <span className="text-cyan-400 font-mono font-semibold">Active Preview</span>
                    </div>
                  </div>

                  {/* Title & Tagline with Company Logo Colors */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    {selectedCategory === 'touch-panels' ? (
                      <>
                        <span className="text-black">{activeBox.label}: </span>
                        <span className="text-brand-red">{activeConfig.touchPanels} Touch Panels</span>
                        <span className="text-black"> & {activeConfig.sockets} Smart Sockets</span>
                      </>
                    ) : (
                      <span className="text-black">{activeSocketItem.title}</span>
                    )}
                  </h3>
                  
                  <p className="text-brand-red font-semibold text-xs sm:text-sm mb-4">
                    {selectedCategory === 'touch-panels' ? activeConfig.tagline : activeSocketItem.tagline}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {selectedCategory === 'touch-panels' ? activeConfig.desc : activeSocketItem.desc}
                  </p>

                  {/* Smart Home Automation Capabilities Box */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs mb-5 space-y-2">
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Wifi className="w-3.5 h-3.5 text-brand-red" />
                      <span>Smart Home Automation Capabilities</span>
                    </h5>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {selectedCategory === 'touch-panels' ? activeConfig.smartAutomationInfo : activeSocketItem.smartAutomationInfo}
                    </p>
                  </div>

                  {/* Smart Socket Specification Box */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs mb-6 space-y-2">
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-brand-red" />
                      <span>Smart Socket Specification & Protection</span>
                    </h5>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {selectedCategory === 'touch-panels' ? activeConfig.socketInfo : activeSocketItem.socketInfo}
                    </p>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[11px] text-gray-400 font-semibold block uppercase">Load & Socket Rating</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {selectedCategory === 'touch-panels' ? activeConfig.load : activeSocketItem.load}
                      </span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[11px] text-gray-400 font-semibold block uppercase">Junction Standard</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {selectedCategory === 'touch-panels' ? activeConfig.boxSize : activeSocketItem.boxSize}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {(selectedCategory === 'touch-panels' ? activeConfig.features : activeSocketItem.features).map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                  <span className="text-brand-red">Question</span><span className="text-[#1A09FA]">s?</span>
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

              {/* Decorative Brand Emblem at the divider seam */}
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <img 
                  src="/media/logo.png" 
                  alt="Neurolinx" 
                  style={{ animation: 'spin 18s linear infinite' }}
                  className="w-12 h-12 object-contain drop-shadow-sm" 
                />
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
