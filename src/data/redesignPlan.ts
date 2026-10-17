export interface RedesignSection {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  techSpecs?: Record<string, string>;
}

export const REDESIGN_PLAN_DATA = {
  metadata: {
    client: 'Ace Mobile Detailing / Ace Detailing Pro',
    targetUrl: 'https://acedetailing.pro/',
    market: 'Orange Beach, AL & Baldwin County, AL',
    industry: 'High-End Mobile Automotive, Marine & Aviation Detailing',
    concept: 'AeroMarine Luxury Pro — Coastal Engineering & Showroom Precision',
  },
  
  overallDesignDirection: {
    visualStyle: 'Modern Coastal Luxury & Industrial Precision (AeroMarine Aesthetic)',
    moodAndAesthetic: 'Sleek, deep obsidian backgrounds with electric coastal cyan & cobalt accents (#0284C7, #38BDF8), immaculate white typography, high-definition metallic reflections, and tactile glassmorphic structural cards.',
    modernUiInspiration: 'Porsche Exclusiv Manufaktur, Riva Yachts, Gulfstream Aerospace digital brand hubs meets high-converting SaaS clarity (Linear & Stripe).',
    designPersonality: 'Luxury, Precision-Engineered, Ultra-Clean, High-Trust, Authoritative, Conversion-Optimized.',
    guidingPrinciple: 'Zero-Pill discipline, strict 60-30-10 color balance, single-elevation glass cards, and verbatim preservation of every single service description, process, and price rate from the original site.',
  },

  colorSystem: {
    primary: {
      name: 'Electric Coastal Sky',
      hex: '#0284C7',
      rgb: 'rgb(2, 132, 199)',
      usage: 'Primary buttons, active indicators, focal accents, key price highlights',
    },
    secondary: {
      name: 'Marine Cobalt Deep',
      hex: '#0369A1',
      rgb: 'rgb(3, 105, 161)',
      usage: 'Secondary buttons, hover states, linear gradient stop, borders',
    },
    accents: [
      { name: 'Cyan Glow', hex: '#38BDF8', usage: 'Hover glows, subtle focus rings, badges, tabular highlights' },
      { name: 'Pure Amber Warmth', hex: '#F59E0B', usage: 'Star ratings, quality assurance seals' },
      { name: 'Emerald Verified', hex: '#10B981', usage: 'Licensed & Insured badges, form success state' },
    ],
    backgrounds: {
      canvas: '#030712 (Obsidian Night - 60% dominant)',
      surface1: '#0B132B (Deep Marine Slate - 30% structural)',
      surface2: '#111E38 (Card Elevation with 1px border)',
      glass: 'rgba(15, 23, 42, 0.75) with backdrop-blur-md',
    },
    textColors: {
      primary: '#F8FAFC (98% Crisp White for high contrast)',
      secondary: '#94A3B8 (Cool Slate for secondary copy & specs)',
      muted: '#64748B (Muted metadata, timestamps, copyright)',
    },
    ctaButtonColors: {
      primary: 'bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/20 active:scale-[0.98]',
      secondary: 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80',
      outline: 'border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400',
    },
  },

  typographySystem: {
    displayFont: 'Outfit (Google Fonts) — Geometric, contemporary, authoritative with tight tracking (-0.02em)',
    bodyFont: 'Plus Jakarta Sans (Google Fonts) — Refined neo-grotesque, extraordinary legibility on dark glass surfaces',
    monoFont: 'JetBrains Mono / font-mono tabular-nums for dollar rates, per-foot calculations, and process steps',
    hierarchy: [
      { level: 'Hero H1', size: 'clamp(2.5rem, 5vw, 4.25rem)', weight: '800 (ExtraBold)', lineHeight: '1.1', tracking: '-0.03em' },
      { level: 'Section H2', size: 'clamp(1.85rem, 3.5vw, 2.75rem)', weight: '700 (Bold)', lineHeight: '1.2', tracking: '-0.02em' },
      { level: 'Card H3', size: '1.25rem – 1.5rem (20px–24px)', weight: '600 (SemiBold)', lineHeight: '1.3', tracking: '-0.01em' },
      { level: 'Body Large', size: '1.125rem (18px)', weight: '400 (Regular)', lineHeight: '1.65', tracking: '0' },
      { level: 'Body Regular', size: '0.9375rem – 1rem (15px–16px)', weight: '400 (Regular)', lineHeight: '1.6', tracking: '0' },
      { level: 'Muted Eyebrow / Meta', size: '0.75rem – 0.8125rem (12px–13px)', weight: '600 (SemiBold)', lineHeight: '1.4', tracking: '+0.06em' },
    ],
  },

  layoutAndStructure: {
    gridSystem: '12-column dynamic responsive grid with max-w-7xl (1280px) and max-w-6xl content containers',
    sectionSpacing: 'Generous vertical breathing room: py-20 lg:py-28 between major sections',
    containerWidth: 'Baseline desktop 1440px viewport with 1200px inner constraint, 16px–24px edge gutter',
    layoutStyle: 'Asymmetric bento grid for services; 2-column split layout for deep feature blocks; balanced card grids for pricing & benefits',
    responsiveBehavior: 'Single-column mobile stack with 48px touch targets; 2-column tablet fluid grid; 3-to-4 column desktop layout',
  },

  sectionBySection: [
    {
      id: 'announcement-bar',
      title: 'Announcement / Utility Bar',
      category: 'Header',
      summary: 'Sticky top utility strip providing immediate licensing credentials, direct call link, and location service area.',
      content: [
        'Content: Phone (205-908-0949), Orange Beach, AL & Baldwin County, AL, Fully licensed, bonded and insured indicator.',
        'Layout: Slim 36px high top strip with hairline border-b border-slate-800 bg-slate-950/90.',
        'UX Benefit: Instant mobile click-to-call affordance and immediate local trust verification before user scrolls.',
      ],
    },
    {
      id: 'navbar',
      title: 'Sticky Top Navigation (3-Zone Contract)',
      category: 'Header',
      summary: 'Strict one-row 3-zone layout adhering to Frontend Design Constitution rules.',
      content: [
        'Zone 1: Brand Wordmark "Ace Mobile Detailing" with custom bulldog aviator crest.',
        'Zone 2: 5 single-line clean navigation links (Services with interactive drawer, Process, Pricing, Why Us, Contact).',
        'Zone 3: High-intent primary action button: "Book an Appointment" launching interactive modal.',
        'Mobile: Fluid slide-over sheet preserving 100% touch targets without layout overflow.',
      ],
    },
    {
      id: 'hero',
      title: 'Hero Section & Instant Vehicle Sector Selector',
      category: 'Hero',
      summary: 'High-impact split hero pairing bold typography with generated photorealistic commercial photography.',
      content: [
        'Headline: "Fully licensed, Bonded and Insured Expert Detailing Service"',
        'Subtext: Exact copy highlighting Orange Beach & Baldwin County excellence across Auto, Marine, RV, and Aviation.',
        'Action Cluster: Dual CTA "Book an Appointment" (primary) + "See Our Services" (secondary scroll anchor).',
        'Quick Trust Bar: 4 trust pillars below hero: On-Site Mobile Service, Aviation & Marine Certified, 100% Satisfaction Guarantee, 5-Star Local Rating.',
      ],
    },
    {
      id: 'services-bento',
      title: '6 Core Detailing Disciplines (Bento Grid)',
      category: 'Services',
      summary: 'Interactive showcase for all 6 service sectors featuring generated photography and live rate previews.',
      content: [
        '01. Auto Detailing (From $165): Interior rejuvenation, exterior foam bath, paint correction.',
        '02. Boat Detailing (From $30/FT): Gel coat restoration, water spot removal, brightwork, toon polish.',
        '03. RV & Camper Detailing (From $7/FT): Roof wash, ozone air treatment, oxidation removal.',
        '04. Aircraft Detailing (Custom Quote): Aviation-grade products, 6-step FAA-compliant process.',
        '05. Ceramic Coating (Audit & Quote): 9H SiO2 hydrophobic chemical shield, 5-step application.',
        '06. Fleet Washing (Commercial): Reliable on-site washing tailored to commercial business schedules.',
      ],
    },
    {
      id: 'when-you-need',
      title: 'When Do You Need Detailing Services',
      category: 'Education / Diagnostic',
      summary: '4 diagnostic symptom cards guiding the vehicle owner to identify exactly what care is required.',
      content: [
        'Paint Imperfections: Swirl marks, oxidation, and scratches requiring paint correction.',
        'Interior Wear and Tear: Stains, odors, and wear requiring deep extraction and steam cleansing.',
        'Exposure Damage: Saltwater corrosion, UV clearcoat degradation on boats, RVs, and planes.',
        'Desire for Long-Lasting Protection: Ceramic coating shield against UV, contaminants, and road grime.',
      ],
    },
    {
      id: 'pricing-calculator',
      title: 'Interactive Transparent Pricing Engine',
      category: 'Pricing',
      summary: 'Dynamic pricing table with vehicle-type switching (2 Doors, 4 Doors, Truck/SUV for Auto; Pontoon, Center Console, Yacht for Boat; Camper, 5th Wheel, Motorhome for RV).',
      content: [
        'Auto: Silver ($165), Gold ($165), Platinum ($250), Diamond ($350), Ceramic / Paint Correction (Get Quote).',
        'Boat: Wash & Wax ($30/FT), Water Spot Removal ($45/FT), Toon Polish (Get Quote) with interactive foot length slider.',
        'RV: Wash ($7/FT), Wash & Wax ($17/FT), Oxidation Removal (Get Quote) with interactive length slider.',
        'Instant live cost estimate and 1-click booking pre-fill.',
      ],
    },
    {
      id: 'detailed-features',
      title: 'Deep Feature Catalog (Preserving 100% Verbatim Descriptions)',
      category: 'Features',
      summary: 'Split alternating visual storytelling blocks for every feature described in the original site/PDFs.',
      content: [
        'Auto: Restoring True Colors, Interior Rejuvenation, Engine Bay Detailing, Headlight Restoration, Wheel & Tire Care, Exterior Protection, Fabric & Carpet, Odor Elimination, Window & Glass Treatment.',
        'Boat: Fiberglass Restoration, Gel Coat Protection, Stainless Steel Polishing, Interior Marine, Teak Restoration, Vinyl & Canvas, Metal Brightwork, Hull Cleaning, Anti-Fouling.',
        'RV: Curb Appeal Exterior, Ozone Treatment, Slide-Out Maintenance, Awning Cleaning, Engine Bay, Roof Maintenance, Interior Upholstery, Water System Sanitization, Window & Vent Cleaning.',
      ],
    },
    {
      id: 'processes',
      title: '6-Step Aircraft & 5-Step Ceramic Coating Timelines',
      category: 'Process',
      summary: 'Precision numbered chronological workflows proving technical rigor and standard operating procedures.',
      content: [
        'Aircraft 6-Step Process: Surface Assessment -> Aviation-Grade Decontamination -> Multi-Stage Compounding -> Brightwork Polishing -> Aeronautical Sealant -> Cockpit & Avionics Detailing.',
        'Ceramic 5-Step Process: Decontamination & Iron Dissolution -> Paint Correction -> Alcohol Prep Wipe -> True Ceramic Application -> Infrared Curing & Multi-Angle QA.',
      ],
    },
    {
      id: 'why-choose-us',
      title: 'Why Choose Us & Quality Assurance Pillar',
      category: 'Trust & Proof',
      summary: 'Corporate philosophy, Advanced Cleaning Techniques, Quality Assurance inspection, and Specialized Products.',
      content: [
        'Interactive pillar tabs allowing instant inspection of each guarantee.',
        'Verbatim copy preserved: "At Ace, we go beyond detailing — we elevate your vehicle to its fullest potential..."',
      ],
    },
    {
      id: 'benefits',
      title: '7 Key Benefits of Hiring Ace Detailing in Orange Beach, AL',
      category: 'Local SEO & Value',
      summary: 'Card grid detailing the 7 tangible economic, aesthetic, and mechanical benefits of expert detailing.',
      content: [
        '01. Corrosion Prevention · 02. Enhanced Driving & Sailing Experience · 03. Preservation of Aesthetics · 04. Environmental Shield · 05. Increased Resale Value · 06. Improved Fuel Efficiency · 07. Long-Lasting Ceramic Coating.',
      ],
    },
    {
      id: 'contact-and-booking',
      title: 'Comprehensive Mobile Booking & Quote Engine',
      category: 'Conversion',
      summary: 'Full lead capture with Name, Email, Phone (205-908-0949), Street Address, Address Line 2, City, State, ZIP, and Message.',
      content: [
        'Instant input validation with inline feedback.',
        'Service pre-selection and date picker.',
        'Direct phone quick-call button and copy-to-clipboard affordance.',
      ],
    },
  ],

  uiComponentStyleGuide: {
    buttons: 'High-contrast pill-free rounded-lg geometry (px-5 py-2.5 text-sm font-semibold). Primary: sky-500 to sky-600 with subtle box shadow; Secondary: slate-900 border border-slate-700.',
    cards: 'Single-elevation slate-900/60 with 1px hairline border (border-white/10), 16px internal padding, no nested card-in-card clutter.',
    forms: 'High-legibility dark inputs with slate-800 bg, slate-700 border, sky-500 focus rings, and explicit text labels with required asterisks.',
    modals: 'Centered backdrop-blur-md dialogs with Esc key listeners, scroll-locking, and clear close buttons.',
    sliders: 'Smooth range inputs for boat/RV foot lengths and split before/after visual comparison.',
  },

  modernUxImprovements: [
    'Dynamic Pricing Calculator with instant vehicle size and length math ($30/ft, $45/ft, $7/ft, $17/ft).',
    'Interactive Service Sector Switcher allowing instant filtering between Auto, Boat, RV, Aircraft, Ceramic, and Fleet.',
    'Before & After interactive visual slider demonstrating scratch removal and mirror finish.',
    'Mobile-first sticky contact bar under 15% viewport height constraint.',
    'Zero-pill metadata formatting: tags use subtle bullet separators rather than colored static capsules.',
    'Direct click-to-call link for 205-908-0949 accessible in navigation, hero, and footer.',
  ],
};
