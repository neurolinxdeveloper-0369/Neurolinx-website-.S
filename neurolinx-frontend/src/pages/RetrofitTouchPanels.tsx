import React, { useState } from 'react';
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
  Lock
} from 'lucide-react';

export function RetrofitTouchPanels() {
  // Active Modular Box Selection for the 3-3-1 top grid (1 Moduler, 2 Moduler, etc.)
  const [activeModulerBox, setActiveModulerBox] = useState<string>('1-moduler');

  // Selected counts for Touch Panels & Sockets in the Touchpad Board
  const [touchPanelsCount, setTouchPanelsCount] = useState<number>(1);
  const [socketsCount, setSocketsCount] = useState<number>(1);

  // Constant Top Modular Boxes (Row 1: 3, Row 2: 3, Row 3: 1 centered) - Never renamed or removed
  const modularBoxes = [
    { id: '1-moduler', label: '1 Moduler', defaultPanels: 1, defaultSockets: 1 },
    { id: '2-moduler', label: '2 Moduler', defaultPanels: 2, defaultSockets: 1 },
    { id: '4-moduler', label: '4 Moduler', defaultPanels: 4, defaultSockets: 1 },
    { id: '8-moduler', label: '8 Moduler', defaultPanels: 8, defaultSockets: 1 },
    { id: '10-moduler', label: '10 Moduler', defaultPanels: 10, defaultSockets: 1 },
    { id: '12-moduler', label: '12 Moduler', defaultPanels: 12, defaultSockets: 2 },
    { id: '16-moduler', label: '16 Moduler', defaultPanels: 16, defaultSockets: 2 },
  ];

  // Contact Inquiry Form State (matching the last previous slide)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    automationFor: '1 panels Setup',
    projectType: 'New Building',
    controlOptions: [] as string[],
    contactNumber: '',
    city: '',
    captchaInput: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // 1. TOUCH PANELS: 1, 2, 4, 8, 10, 12, 16 panels
  const modularOptions = [
    {
      id: '1-panels',
      name: '1 panels',
      title: '1 panels Smart Touch Switch & 16A Power Socket Board',
      tagline: 'High-Power Dedicated Appliance & Isolated Smart Automation',
      desc: 'Single capacitive feather-touch glass button combined with an integrated heavy-duty 16A universal shuttered power socket. Perfect for dedicated high-power appliance automation, heavy geysers, air conditioners, and kitchen equipment.',
      smartAutomationInfo: 'Control high-wattage appliances remotely via your smartphone or voice with Alexa and Google Assistant. Set daily auto-off timer schedules (e.g., turn on water geyser at 6:30 AM and auto shut-off after 20 minutes) and track real-time power consumption.',
      socketInfo: 'Child-safe internal spring shutters, 16A continuous / 25A peak inrush rating, solid brass contacts, and automatic power-surge thermal cutoff.',
      load: '1 Lighting Channel (10A) + 1 Heavy Smart Power Socket (16A / 25A)',
      boxSize: '1/2-Module Indian Standard Junction Box (50 x 86 mm / 86 x 86 mm)',
      idealFor: 'Water Geysers, Split Air Conditioners, Balcony Sockets, Microwave Points',
      img: '/media/panel_1_moduler.jpg',
      features: [
        'Automated scheduled heating & cooling appliance cycles',
        'Built-in 25A heavy-duty solid-state snubber & inrush protection',
        'Child-safe spring shuttered socket protects against accidental shocks',
        'Works 100% offline via local home mesh network even without internet'
      ]
    },
    {
      id: '2-panels',
      name: '2 panels',
      title: '2 panels Dual Touch Switch & Smart Socket Board',
      tagline: 'Bedside Reading, Lighting & Smart Device Fast-Charging Station',
      desc: 'Dual capacitive feather-touch switches coupled with an integrated universal power socket. Engineered for bedside headboards to independently control reading lamps, ambient night coves, and bedside mobile charging.',
      smartAutomationInfo: 'Supports customized "Goodnight" scenes where a single tap turns off both room lights while keeping the phone charging socket active. Features circadian night-dimming where touch button backlights dim to 10% after 10 PM.',
      socketInfo: 'Universal multi-pin plug compatibility (Indian, UK, US, EU), 4kV surge clamping, and scheduled socket shutdown to prevent mobile phone overcharging.',
      load: '2 Lighting Channels (10A each) + 1 Universal Smart Socket (10A/16A)',
      boxSize: '2/3-Module Standard Box (86 x 86 mm)',
      idealFor: 'Bedside Headboards, Study Desks, Powder Rooms, Hotel Bedside Consoles',
      img: '/media/panel_2_moduler.jpg',
      features: [
        'Capacitive feather-touch response in under 50ms with cyan LED glow',
        'Sleep-mode scheduled auto cut-off for phone battery protection',
        '2-Way synchronized mesh control without extra physical traveler wires',
        'Toughened 4mm diamond-cut crystal glass with smudge-proof coating'
      ]
    },
    {
      id: '4-panels',
      name: '4 panels',
      title: '4 panels Quad Touch Switch & Universal Socket Board',
      tagline: 'Standard Bedroom, Dining & Living Room Lighting Center',
      desc: 'Four capacitive touch circuits paired with an integrated 16A universal power socket. The benchmark residential smart switchboard replacing standard 4-module mechanical switch plates with luxury black crystal glass.',
      smartAutomationInfo: 'Full scene coordination: "Dining Scene" dims main chandeliers to 40% and turns on warm wall sconces; "All Off" double-tap trigger switches off all connected lights when leaving the room. Works with Alexa, Google Home, and Apple Siri.',
      socketInfo: '16A heavy-duty socket accommodating room heaters, electric kettles, and ironing appliances with live voltage and current monitoring.',
      load: '4 Channels x 10A (or 3 Lights + 1 Fan Regulator) + 1 Universal 16A Socket',
      boxSize: '4-Module Indian Standard Junction Box (146 x 86 mm)',
      idealFor: 'Master Bedrooms, Living Rooms, Dining Areas, Executive Offices',
      img: '/media/panel_4_moduler.jpg',
      features: [
        'Digital capacitor stepping guarantees zero acoustic fan buzz or motor whine',
        'Double-tap master "All Off" scene directly from the physical glass panel',
        'Real-time power monitoring alerts you to high current or voltage spikes',
        'Direct smartphone app, Amazon Alexa, and Google Assistant voice automation'
      ]
    },
    {
      id: '8-panels',
      name: '8 panels',
      title: '8 panels Living Room & Master Suite Touch Panel Board',
      tagline: 'Comprehensive Living Space Controller with Integrated Power Socket',
      desc: 'High-density 8-module architectural glass touch board consolidating primary chandelier lights, warm indirect cove strips, auxiliary mood lamps, ceiling fans, and an integrated universal 16A socket.',
      smartAutomationInfo: 'Features whole-home mesh networking: triggers whole-home scenes like "Welcome Home" (turns on foyer spots, living cove, and sets fan to speed 3). Multi-gang interlock prevents accidental simultaneous high-power load triggers.',
      socketInfo: 'Heavy 16A appliance socket with digital lock mode, transient spike arrestor, and power usage analytics exportable directly to your smartphone.',
      load: '6-8 Lighting Circuits (10A each) + 1 Fan Regulator + 1 Universal 16A Socket',
      boxSize: '8-Module Horizontal / Square Junction Box (224 x 86 mm)',
      idealFor: 'Formal Drawing Rooms, Master Bedroom Headboards, Open Kitchens',
      img: '/media/panel_8_moduler.jpg',
      features: [
        'One-touch scene triggers: Party, Movie Night, Relax, and Good Morning',
        'Water-resistant and electric-shock proof surface (100% safe with wet hands)',
        'Circadian rhythm schedule engine linked with sunrise and sunset astronomical clocks',
        'High-density thermal dissipation chassis with 4kV industrial surge clamping'
      ]
    },
    {
      id: '10-panels',
      name: '10 panels',
      title: '10 panels Entertainment Console & Media Wall Switchboard',
      tagline: 'Signature Luxury Credenza & TV Console Command Center',
      desc: 'As showcased in our luxury penthouse installations: Extensive capacitive glass panel integrating 8 lighting channels alongside an international 16A universal power socket, mounted flush above credenzas and media walls.',
      smartAutomationInfo: 'Equipped with dedicated "Cinema Mode" scene trigger: with one touch, main spotlights fade out, TV backlights glow cyan, and motorized curtains glide closed. Socket circuit includes EMI filtering to eliminate electrical interference on OLED TVs and amplifiers.',
      socketInfo: 'Clean flush finish, child-safe internal shutters, screwless magnetic snap-fit glass plate, and 4kV MOV surge protection.',
      load: '8 Lighting Channels (10A each) + 1 Universal 16A Shuttered Socket',
      boxSize: '10-Module Horizontal Box (250 x 146 mm)',
      idealFor: 'Living Room TV Consoles, Media Walls, Credenzas, Workstations',
      img: '/media/panel_10_moduler.jpg',
      features: [
        'Spring-loaded child-safety shuttered socket handles up to 16A continuous loads',
        'Dedicated TV Entertainment & Home Theatre synchronization mode',
        'Surge-protected socket circuit shields sensitive OLED displays & gaming consoles',
        'Customizable cyan and warm amber status backlight LEDs with soft dimming'
      ]
    },
    {
      id: '12-panels',
      name: '12 panels',
      title: '12 panels Luxury Villa Great Room & Multi-Socket Board',
      tagline: 'Architectural Double-Height Hall & Multi-Appliance Station',
      desc: 'Expansive 12-module crystal glass command board consolidating multiple chandelier zones, perimeter coves, dual fan speed regulators, and dual universal power sockets for sprawling living spaces.',
      smartAutomationInfo: 'Multi-tier lighting scenes (Daylight Harvest, Evening Lounge, Party Mode), automated sunrise/sunset astronomical clock schedules, and inter-board mesh linking with zero latency.',
      socketInfo: 'Dual independent smart sockets with individual app control, overload auto-cutoff, and heavy appliance compatibility.',
      load: '10 Lighting Circuits + 1-2 Fan Regulators + Dual 16A Sockets',
      boxSize: '12-Module Standard Plate (250 x 200 mm)',
      idealFor: 'Double-Height Living Rooms, Duplex Staircases, Banquet Foyers',
      img: '/media/panel_12_moduler.jpg',
      features: [
        'Whole-hall lighting orchestration with multi-way wireless mesh synchronization',
        'Overload auto-cut-off protection with real-time app alert notifications',
        'Zero-cross relay switching extends smart LED bulb lifespan 3x',
        'Emergency lighting circuit override with fire-alarm signal handshake'
      ]
    },
    {
      id: '16-panels',
      name: '16 panels',
      title: '16 panels Grand Penthouse Two-Tier Master Command Switchboard',
      tagline: 'Ultimate Whole-Floor Touch Command Station with Power Sockets',
      desc: 'The pinnacle of architectural smart switching: Two-tier high-density crystal glass board managing every light, spot, fan, and appliance across large open-plan penthouses with dual universal power sockets.',
      smartAutomationInfo: 'Master floor automation hub: "Master Sleep", "Away Security Mode" (activates simulated occupancy lighting while you travel), and voice-directed scene transitions. Works 100% locally via mesh even during internet disruptions.',
      socketInfo: 'Dual heavy 16A universal sockets with child safety lockouts, solid-state relays with zero-cross switching for infinite relay life, and 4kV spike arresters.',
      load: '14 Lighting/Mood Circuits + 2 Fan Regulators + Dual Universal Sockets',
      boxSize: '16-Module Two-Tier Standard Box (250 x 250 mm)',
      idealFor: 'Grand Penthouse Drawing Halls, Corporate Boardrooms, Villa Main Entry',
      img: '/media/panel_16_moduler.jpg',
      features: [
        'Centralized room command: control every ceiling light, spot, wall sconce & fan',
        'Dual-tier ergonomic layout with dedicated room master controls',
        '100% offline local mesh ensures uninterrupted switching during network outages',
        'Covered by Neurolinx 5-Year Comprehensive Hassle-Free Replacement Warranty'
      ]
    }
  ];

  // 2. SOCKETS: 1, 2, 3, 4 sockets (4 options only)
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
      boxSize: '1-Module Standard Indian Junction Box (50 x 86 mm)',
      idealFor: 'Bedside Phone Charging, Study Table Lamps, Smart Speakers, Wi-Fi Routers',
      img: '/media/socket_1_moduler.jpg',
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
      boxSize: '2-Module Standard Junction Box (86 x 86 mm)',
      idealFor: 'Microwave Ovens, Refrigerators, Washing Machines, Dishwashers, Heaters',
      img: '/media/socket_2_moduler.jpg',
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
      boxSize: '3-Module Standard Junction Box (120 x 86 mm)',
      idealFor: 'Instant & Storage Water Geysers, 1.5 - 2.5 Ton Air Conditioners, EV Chargers',
      img: '/media/socket_3_moduler.jpg',
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
      boxSize: '4-Module Standard Junction Box (146 x 86 mm)',
      idealFor: 'Executive Work Desks, Luxury Bedside Consoles, TV Entertainment Units',
      img: '/media/socket_4_moduler.jpg',
      features: [
        'Integrated 30W USB-C Power Delivery charges iPhones, iPads, and MacBooks at max speed',
        'Dual independent 16A sockets allow controlling two appliances separately',
        'Child-safe spring shutters on both sockets with independent power monitoring',
        'Sleek diamond-cut black crystal glass plate flush mounts cleanly into backboxes'
      ]
    }
  ];

  // 3. COMBINATIONS: Both Options Selected Wise Touchpad Boards
  const comboConfigurations: Record<string, {
    img: string;
    title: string;
    tagline: string;
    desc: string;
    smartAutomationInfo: string;
    socketInfo: string;
    load: string;
    boxSize: string;
    idealFor: string;
    features: string[];
  }> = {
    '2-2': {
      img: '/media/panel_2_moduler.jpg',
      title: '2 Touch Panels & 2 Universal Sockets Smart Bedside & Study Board',
      tagline: 'Dual Capacitive Lighting Circuits with Dual 16A Independent Smart Sockets',
      desc: 'Architectural 4-module toughened black crystal glass touchpad board combining dual independent capacitive feather-touch lighting channels with dual universal shuttered 16A power sockets. Designed for luxury bedside consoles, master study desks, and hospitality suites.',
      smartAutomationInfo: 'Automated "Reading Routine" dims ambient lights while powering laptop and phone sockets. Scheduled sleep timers automatically cut power to chargers at 2:00 AM to prevent lithium battery overcharging. Fully compatible with Amazon Alexa, Google Assistant, and local home mesh.',
      socketInfo: 'Dual 16A universal shuttered sockets with child-safe spring shutters, independent solid-state relays with zero-cross protection, solid phosphor-bronze contacts, and 4kV industrial MOV surge clamp.',
      load: '2 Lighting Channels (10A each) + Dual 16A Independent Universal Sockets (3500W load capacity)',
      boxSize: '4-Module Indian Standard Junction Box (146 x 86 mm)',
      idealFor: 'Bedside Consoles, Executive Study Desks, Dressing Corners, Hotel Suites',
      features: [
        'Dual capacitive feather-touch switches with glowing cyan LED halo status indicators',
        'Two independent 16A universal sockets with child-safety spring shutters',
        'Sleep-timer scheduled auto cut-off for mobile phone battery health protection',
        'Toughened 4mm diamond-cut crystal glass plate with smudge-proof nano-coating'
      ]
    },
    '4-2': {
      img: '/media/panel_4_moduler.jpg',
      title: '4 Touch Panels & 2 Universal Sockets Luxury Living Room Center',
      tagline: 'Four Independent Touch Circuits with Dual Heavy-Duty 16A Smart Sockets',
      desc: 'High-density 6/8-module black crystal glass command board integrating 4 capacitive touch circuits alongside dual heavy-duty 16A universal power sockets. The gold benchmark for residential living rooms and master suites.',
      smartAutomationInfo: 'Coordinate full room scenes: "Entertainment Mode" dims spotlights to 30%, activates cove lighting, and powers TV and soundbar sockets. "All Off" double-tap trigger turns off all connected lights when leaving the room while keeping security circuits active.',
      socketInfo: 'Dual 16A heavy-duty sockets accommodating room heaters, electric kettles, and ironing appliances with live voltage, current, and wattage monitoring exportable to smartphone.',
      load: '4 Lighting/Fan Channels (10A each) + Dual 16A Independent Sockets (up to 4000W load capacity)',
      boxSize: '6/8-Module Indian Standard Junction Box (224 x 86 mm)',
      idealFor: 'Master Bedrooms, Living Rooms, Dining Areas, Executive Offices',
      features: [
        'Four capacitive touch switches with digital capacitor stepping for fan speed control',
        'Dual heavy-duty 16A sockets with real-time energy metering and overload auto-cut-off',
        'One-touch master "All Off" scene directly from the physical glass panel',
        '100% offline local mesh communication even during internet disruptions'
      ]
    },
    '8-2': {
      img: '/media/panel_8_moduler.jpg',
      title: '8 Touch Panels & 2 Universal Sockets Master Suite Command Board',
      tagline: 'Comprehensive Architectural Living Space Controller with Dual Smart Sockets',
      desc: 'High-density 10/12-module crystal glass switchboard consolidating primary chandelier lights, perimeter coves, auxiliary mood sconces, ceiling fans, and dual universal 16A sockets on a single architectural plate.',
      smartAutomationInfo: 'Whole-home mesh linking: trigger whole-home scenes like "Welcome Home" (turns on foyer spots, living cove, and powers media sockets). Multi-gang interlock prevents accidental simultaneous high-power load triggers.',
      socketInfo: 'Dual heavy 16A appliance sockets with digital lock mode, transient spike arrestor, and independent app control with weekly kWh analytics.',
      load: '8 Lighting/Mood Circuits (10A each) + Dual Universal 16A Shuttered Sockets',
      boxSize: '10/12-Module Horizontal Junction Box (250 x 146 mm)',
      idealFor: 'Formal Drawing Rooms, Master Bedroom Headboards, Open Penthouse Kitchens',
      features: [
        'Eight capacitive touch buttons with customizable dual-color status backlighting',
        'Dual independent 16A universal sockets with child safety lockouts',
        'Circadian rhythm schedule engine linked with sunrise and sunset astronomical clocks',
        'High-density thermal dissipation chassis with 4kV industrial surge clamping'
      ]
    },
    '4-4': {
      img: '/media/panel_4_moduler.jpg',
      title: '4 Touch Panels & 4 Sockets + 30W USB-C PD Executive Workstation Station',
      tagline: 'Architectural Multi-Appliance & Fast-Charging Command Center',
      desc: 'Command socket plate featuring 4 capacitive touch switches paired with dual 16A universal shuttered outlets and dual USB-C (30W PD) / USB-A fast-charging ports in diamond-cut black crystal glass.',
      smartAutomationInfo: 'Independent channel automation: control each light circuit, left socket, right socket, and USB ports individually from your mobile app. "Workstation Mode" powers up monitors, laptop chargers, and desk lighting with one tap.',
      socketInfo: 'Dual 16A universal sockets + 30W USB-C PD / 18W USB-A smart chip with intelligent device detection, thermal dissipation shielding, and 4kV industrial surge clamp.',
      load: '4 Lighting Circuits (10A) + Dual 16A Independent Sockets + 30W USB-C PD Fast Charger',
      boxSize: '8/10-Module Standard Junction Box (224 x 86 mm)',
      idealFor: 'Executive Work Desks, Luxury Bedside Consoles, TV Entertainment Units',
      features: [
        'Four capacitive touch switches with rapid 50ms tactile response',
        'Integrated 30W USB-C Power Delivery charges iPhones, iPads, and MacBooks at max speed',
        'Dual independent 16A sockets with child-safe spring shutters',
        'Sleek diamond-cut black crystal glass plate flush mounts cleanly into backboxes'
      ]
    },
    '2-4': {
      img: '/media/panel_2_moduler.jpg',
      title: '2 Touch Panels & 4 Sockets + Fast-Charging Executive Hub',
      tagline: 'Dual Touch Lighting Channels with High-Density 4-Socket Power Array',
      desc: 'Architectural black crystal glass command station featuring dual feather-touch switches alongside a 4-outlet power array with fast charging.',
      smartAutomationInfo: 'Automate study desk devices, schedule individual socket cutoffs, and voice-trigger lighting scenes with Alexa & Google Assistant.',
      socketInfo: 'Multi-outlet 16A universal shuttered sockets with 4kV surge suppression and smart device load monitoring.',
      load: '2 Lighting Circuits + 4x Smart Power Outlets / USB Fast-Charger',
      boxSize: '8-Module Standard Junction Box (224 x 86 mm)',
      idealFor: 'Executive Desks, Workstations, Tech Labs, Gaming Consoles',
      features: [
        'Dual capacitive touch buttons with cyan status backlighting',
        'High-density 4-socket array with fast-charging support',
        'Real-time power monitoring and auto-overload disconnection',
        '4mm toughened crystal glass scratch-proof surface'
      ]
    },
    '8-4': {
      img: '/media/panel_8_moduler.jpg',
      title: '8 Touch Panels & 4 Sockets Executive Command Board',
      tagline: 'Whole-Room Lighting Control with High-Density Appliance Sockets',
      desc: 'Extensive crystal glass command board consolidating 8 lighting circuits with a 4-outlet universal socket and fast-charging array.',
      smartAutomationInfo: 'Master scene automation, whole-room schedule timers, and individual socket energy telemetry exportable to smartphone.',
      socketInfo: 'Quad socket array with child-safe spring shutters, 16A continuous rating, and 4kV MOV transient surge protection.',
      load: '8 Lighting Circuits + 4x 16A Universal Smart Sockets',
      boxSize: '12-Module Standard Plate (250 x 200 mm)',
      idealFor: 'Executive Suites, Media Rooms, Large Penthouse Living Rooms',
      features: [
        'Eight feather-touch lighting channels with fan regulator support',
        'Four smart sockets with independent mobile app control',
        'Full voice automation with Alexa, Google Assistant & Siri',
        'Zero-cross relay switching eliminates electrical arcing'
      ]
    }
  };

  // Find base panel option matching touchPanelsCount (or closest available: 1, 2, 4, 8, 10, 12, 16)
  const basePanel = modularOptions.find(m => m.id === `${touchPanelsCount}-panels`) || modularOptions[0];
  
  // Find base socket option matching socketsCount (or closest available: 1, 2, 3, 4)
  const baseSocket = socketOptions.find(s => s.id === `${Math.min(4, Math.max(1, socketsCount))}-sockets`) || socketOptions[0];

  // Derive the active custom board data based on user selection of touchpanels & sockets
  const activeItem = React.useMemo(() => {
    // 1. Check exact predefined both-wise combination
    const comboKey = `${touchPanelsCount}-${socketsCount}`;
    if (comboConfigurations[comboKey]) {
      const combo = comboConfigurations[comboKey];
      return {
        id: `combo-${comboKey}`,
        name: `${touchPanelsCount} Touch Panels + ${socketsCount} Sockets`,
        title: combo.title,
        tagline: combo.tagline,
        desc: combo.desc,
        smartAutomationInfo: combo.smartAutomationInfo,
        socketInfo: combo.socketInfo,
        load: combo.load,
        boxSize: combo.boxSize,
        idealFor: combo.idealFor,
        img: basePanel.img, // Exact generated touch panel image
        features: combo.features,
      };
    }

    // 2. Sockets only (0 panels)
    if (touchPanelsCount === 0 && socketsCount > 0) {
      return {
        id: `custom-0-${socketsCount}`,
        name: `${socketsCount} Sockets`,
        title: `${socketsCount} Smart Power Socket${socketsCount > 1 ? 's' : ''} Dedicated Controller Board`,
        tagline: 'High-Wattage Dedicated Appliance Power & Surge-Protected Relay Controller',
        desc: baseSocket.desc,
        smartAutomationInfo: baseSocket.smartAutomationInfo,
        socketInfo: baseSocket.socketInfo,
        load: `${socketsCount}x 16A/25A Heavy Smart Power Socket${socketsCount > 1 ? 's' : ''} (up to 5500W load capacity)`,
        boxSize: socketsCount <= 1 ? '1-Module Box (50 x 86 mm)' : socketsCount === 2 ? '2-Module Box (86 x 86 mm)' : socketsCount === 3 ? '3-Module Box (120 x 86 mm)' : '4-Module Box (146 x 86 mm)',
        idealFor: baseSocket.idealFor,
        img: baseSocket.img,
        features: baseSocket.features,
      };
    }

    // 3. Touch Panel board (with or without sockets)
    const socketText = socketsCount > 0 ? ` & ${socketsCount} Smart Socket${socketsCount > 1 ? 's' : ''}` : '';
    const socketLoad = socketsCount > 0 ? ` + ${socketsCount}x Universal 16A Socket${socketsCount > 1 ? 's' : ''}` : ' • Pure Touch (No Sockets)';
    const socketProtection = socketsCount > 0 
      ? `Integrated ${socketsCount}x universal multi-pin shuttered socket(s) with child-safe internal spring shutters, solid phosphor-bronze terminals, 16A continuous / 25A inrush rating, and 4kV transient surge clamp.`
      : 'Pure glass touch plate configuration with seamless monolithic crystal glass faceplate and ultra-low standby power (<0.2W).';

    return {
      id: `custom-${touchPanelsCount}-${socketsCount}`,
      name: `${touchPanelsCount} Touch Panels${socketsCount > 0 ? ` + ${socketsCount} Sockets` : ''}`,
      title: `${touchPanelsCount} Touch Panels${socketText} Board`,
      tagline: socketsCount > 0 ? `Integrated ${touchPanelsCount}-Circuit Touch Lighting & Dedicated Appliance Sockets` : basePanel.tagline,
      desc: `Custom smart crystal glass touchpad board configured with ${touchPanelsCount} capacitive feather-touch lighting/fan control channels${socketsCount > 0 ? ` and ${socketsCount} smart universal shuttered power socket${socketsCount > 1 ? 's' : ''}` : ''}. Engineered with 4mm diamond-cut toughened glass, sub-50ms capacitive touch response, and industrial zero-cross switching snubber protection.`,
      smartAutomationInfo: socketsCount > 0 
        ? `${basePanel.smartAutomationInfo} Plus independent smart socket automation: set automated timers for geysers or chargers and track live power consumption directly in your app.`
        : basePanel.smartAutomationInfo,
      socketInfo: socketProtection,
      load: `${touchPanelsCount} Lighting/Fan Channels (10A each)${socketLoad}`,
      boxSize: basePanel.boxSize,
      idealFor: basePanel.idealFor,
      img: basePanel.img, // Exact generated touch panel image
      features: [
        `${touchPanelsCount} capacitive feather-touch switches with glowing cyan LED halo indicators`,
        socketsCount > 0 ? `${socketsCount} heavy-duty universal shuttered socket(s) with child protection` : 'Pure seamless crystal glass front plate with zero socket cutouts',
        'Works 100% offline via local home mesh network even without internet',
        'Covered by Neurolinx 5-Year Comprehensive Hassle-Free Replacement Warranty'
      ],
    };
  }, [touchPanelsCount, socketsCount, basePanel, baseSocket]);

  return (
    <div className="w-full bg-white flex flex-col font-body selection:bg-brand-red selection:text-white">

      {/* ── Slide 1: Only That One Image (Full-Width Edge-to-Edge Clean Architecture) ── */}
      <div className="w-full bg-[#0B0F19] relative overflow-hidden pt-20 sm:pt-24">
        <div className="relative w-full">
          <img 
            src="/media/retrofit_touch_panel_hero.jpg" 
            alt="Neurolinx Smart Touch Panel in Luxury Penthouse Living Room"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* ── Slide 2: Models And Features of Smart Devices (Matching User Reference Image) ── */}
      <div id="models-features" className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-[1580px] 2xl:max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title matching user image: "Models And Features of" + "Smart" (green) + "Devices" (blue) with underlines */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
              Models And Features of
            </h2>
            <div className="inline-flex items-center gap-2.5 text-3xl sm:text-4xl md:text-5xl font-black">
              <span className="text-[#52B74B] relative inline-block pb-1.5">
                Smart
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-[#52B74B] rounded-full"></span>
              </span>
              <span className="text-[#1E6FD9] relative inline-block pb-1.5">
                Devices
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-[#1E6FD9] rounded-full"></span>
              </span>
            </div>
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
                      onClick={() => {
                        setActiveModulerBox(box.id);
                        setTouchPanelsCount(box.defaultPanels);
                        setSocketsCount(box.defaultSockets);
                        setInquiryForm(prev => ({
                          ...prev,
                          automationFor: `${box.label} (${box.defaultPanels} Panels + ${box.defaultSockets} Sockets) Setup`
                        }));
                      }}
                      className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-[20px] text-sm sm:text-[15px] md:text-base font-bold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center justify-center text-center shadow-xs ${
                        isActive
                          ? 'bg-black text-white border-black shadow-md scale-[1.02]'
                          : 'bg-[#F9FAFB] hover:bg-gray-100 hover:border-gray-300 text-slate-800 border-gray-200/90'
                      }`}
                    >
                      {box.label}
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
                      onClick={() => {
                        setActiveModulerBox(box.id);
                        setTouchPanelsCount(box.defaultPanels);
                        setSocketsCount(box.defaultSockets);
                        setInquiryForm(prev => ({
                          ...prev,
                          automationFor: `${box.label} (${box.defaultPanels} Panels + ${box.defaultSockets} Sockets) Setup`
                        }));
                      }}
                      className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-[20px] text-sm sm:text-[15px] md:text-base font-bold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center justify-center text-center shadow-xs ${
                        isActive
                          ? 'bg-black text-white border-black shadow-md scale-[1.02]'
                          : 'bg-[#F9FAFB] hover:bg-gray-100 hover:border-gray-300 text-slate-800 border-gray-200/90'
                      }`}
                    >
                      {box.label}
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
                        onClick={() => {
                          setActiveModulerBox(box.id);
                          setTouchPanelsCount(box.defaultPanels);
                          setSocketsCount(box.defaultSockets);
                          setInquiryForm(prev => ({
                            ...prev,
                            automationFor: `${box.label} (${box.defaultPanels} Panels + ${box.defaultSockets} Sockets) Setup`
                          }));
                        }}
                        className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-[20px] text-sm sm:text-[15px] md:text-base font-bold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center justify-center text-center shadow-xs ${
                          isActive
                            ? 'bg-black text-white border-black shadow-md scale-[1.02]'
                            : 'bg-[#F9FAFB] hover:bg-gray-100 hover:border-gray-300 text-slate-800 border-gray-200/90'
                        }`}
                      >
                        {box.label}
                      </button>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Module Detail Showcase Card: IMAGE & OPTIONS ON LEFT, INFORMATION ON RIGHT */}
          <div className="max-w-6xl mx-auto bg-[#F8F9FA] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              
              {/* LEFT SIDE: Select Options for Touch Panels & Sockets + Product Board Image */}
              <div className="w-full lg:w-5/12 flex flex-col justify-start">
                
                {/* ── Select Options for Touch Panels & Sockets (Custom Touchpad Board Configurator) ── */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs mb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-brand-red" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                        Customize Touchpad Board
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {touchPanelsCount} Panels • {socketsCount} Sockets
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Select 1: How many Touch Panels */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                        <span>Touch Panels</span>
                        <span className="text-[10px] font-semibold text-gray-400">Switches</span>
                      </label>
                      <div className="relative">
                        <select
                          value={touchPanelsCount}
                          onChange={(e) => {
                            const count = Number(e.target.value);
                            setTouchPanelsCount(count);
                            const matchingBox = modularBoxes.find(b => b.defaultPanels === count);
                            if (matchingBox) setActiveModulerBox(matchingBox.id);
                            setInquiryForm(prev => ({
                              ...prev,
                              automationFor: `${count} Panels + ${socketsCount} Sockets Custom Setup`
                            }));
                          }}
                          className="w-full appearance-none bg-[#F9FAFB] hover:bg-gray-100 text-slate-900 text-xs sm:text-sm font-bold py-2.5 px-3 pr-8 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer transition-all shadow-2xs"
                        >
                          <option value={0}>0 Panels (Sockets Only)</option>
                          <option value={1}>1 Touch Panel</option>
                          <option value={2}>2 Touch Panels</option>
                          <option value={4}>4 Touch Panels</option>
                          <option value={8}>8 Touch Panels</option>
                          <option value={10}>10 Touch Panels</option>
                          <option value={12}>12 Touch Panels</option>
                          <option value={16}>16 Touch Panels</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Select 2: How many Sockets */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                        <span>Sockets</span>
                        <span className="text-[10px] font-semibold text-gray-400">Power Outlets</span>
                      </label>
                      <div className="relative">
                        <select
                          value={socketsCount}
                          onChange={(e) => {
                            const count = Number(e.target.value);
                            setSocketsCount(count);
                            setInquiryForm(prev => ({
                              ...prev,
                              automationFor: `${touchPanelsCount} Panels + ${count} Sockets Custom Setup`
                            }));
                          }}
                          className="w-full appearance-none bg-[#F9FAFB] hover:bg-gray-100 text-slate-900 text-xs sm:text-sm font-bold py-2.5 px-3 pr-8 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer transition-all shadow-2xs"
                        >
                          <option value={0}>0 Sockets (Panels Only)</option>
                          <option value={1}>1 Smart Socket (16A)</option>
                          <option value={2}>2 Smart Sockets (Dual Multi-Pin)</option>
                          <option value={3}>3 Smart Sockets (Heavy 25A)</option>
                          <option value={4}>4 Sockets + 30W USB-C Station</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Product Board Image Positioned Down Side ── */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 bg-black group w-full h-80 sm:h-96 lg:h-[430px] flex flex-col justify-end">
                  <img 
                    src={activeItem.img} 
                    alt={activeItem.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {touchPanelsCount > 0 && socketsCount > 0 && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                      <span>Hybrid Touch Switch & Smart Socket Board</span>
                    </div>
                  )}
                  <div className="relative z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 text-white">
                    <span className="text-[11px] sm:text-xs font-bold text-[#52B74B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#52B74B] animate-pulse"></span>
                      {touchPanelsCount > 0 && socketsCount > 0 ? `${touchPanelsCount} Touch Panels + ${socketsCount} Sockets Board` : activeItem.name}
                    </span>
                    <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                      {activeItem.title}
                    </h4>
                    <span className="text-[11px] text-gray-300 mt-1 block">
                      {activeItem.boxSize} • Toughened Crystal Glass
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Smart Home Automation Information & Socket Specs */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                      <span>{activeItem.name} Architecture</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        {touchPanelsCount > 0 && socketsCount > 0 
                          ? `Both Options Active (${socketsCount} Smart Socket${socketsCount > 1 ? 's' : ''} Included)`
                          : socketsCount > 0 
                          ? `${socketsCount} Smart Socket${socketsCount > 1 ? 's' : ''} Included` 
                          : 'Pure Touch Plate (0 Sockets)'}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    {activeItem.title}
                  </h3>
                  
                  <p className="text-brand-red font-semibold text-xs sm:text-sm mb-4">
                    {activeItem.tagline}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {activeItem.desc}
                  </p>

                  {/* Smart Home Automation Feature Box */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs mb-5 space-y-2">
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Wifi className="w-3.5 h-3.5 text-[#1E6FD9]" />
                      <span>Smart Home Automation Capabilities</span>
                    </h5>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {activeItem.smartAutomationInfo}
                    </p>
                  </div>

                  {/* Smart Socket Details Box */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-2xs mb-6 space-y-2">
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-brand-red" />
                      <span>Smart Socket Specification & Protection</span>
                    </h5>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {activeItem.socketInfo}
                    </p>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[11px] text-gray-400 font-semibold block uppercase">Load & Socket Rating</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{activeItem.load}</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                      <span className="text-[11px] text-gray-400 font-semibold block uppercase">Junction Standard</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{activeItem.boxSize}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {activeItem.features.map((feat, fi) => (
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
                        automationFor: `${activeItem.name} Setup`
                      }));
                    }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md shadow-brand-red/20 cursor-pointer"
                  >
                    <span>Configure & Request Quote for {activeItem.name}</span>
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
            
            {/* Left Panel: Pure White Background (Snug & Attached to Form) */}
            <div className="w-full lg:w-[36%] xl:w-[34%] bg-white px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100/80">
              
              <div>
                {/* Title colored in brand Red and Blue like Neurolinx logo */}
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
                    href="tel:+919390584000" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">+91 9390584***</span>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@neurolinx.in" 
                    className="flex items-center gap-3.5 text-slate-800 hover:text-brand-red transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-md transition-all">
                      <svg className="w-4 h-4 text-slate-900 group-hover:text-brand-red transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-semibold">info@neurolinx.in</span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-slate-800">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                      </svg>
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
            <div className="w-full lg:w-[64%] xl:w-[66%] bg-[#F8F9FA] px-6 sm:px-8 lg:px-9 py-9 sm:py-12 lg:py-14 flex-1">
              {inquirySubmitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-brand-red mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    We have received your details. Our smart automation team will review your requirements and connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryForm({
                        name: '',
                        email: '',
                        automationFor: 'Apartment',
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
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Automation For</label>
                      <select 
                        value={inquiryForm.automationFor}
                        onChange={(e) => setInquiryForm({...inquiryForm, automationFor: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-100 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 shadow-xs cursor-pointer"
                      >
                        <option>1 panels Setup</option>
                        <option>2 panels Setup</option>
                        <option>4 panels Setup</option>
                        <option>8 panels Setup</option>
                        <option>10 panels Setup</option>
                        <option>12 panels Setup</option>
                        <option>16 panels Setup</option>
                        <option>1 sockets Setup</option>
                        <option>2 sockets Setup</option>
                        <option>3 sockets Setup</option>
                        <option>4 sockets Setup</option>
                        <option>Apartment</option>
                        <option>Villa / Independent House</option>
                        <option>Office / Commercial Space</option>
                        <option>Hotel / Hospitality</option>
                      </select>
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
