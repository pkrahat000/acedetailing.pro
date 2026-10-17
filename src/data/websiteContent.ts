import { PricingPackage, ProcessStep, ServiceDetail } from '../types';

export const COMPANY_INFO = {
  name: 'Ace Mobile Detailing',
  tagline: 'Fully licensed, Bonded and Insured Expert Detailing Service',
  phone: '205-908-0949',
  phoneRaw: '2059080949',
  primaryLocation: 'Orange Beach, AL',
  serviceArea: 'Baldwin County & Surrounding Coastal Communities',
  copyright: 'All Rights Reserved © Ace Mobile Detailing 2026 - Powered by: Webn8.com',
};

// Real Image assets extracted directly from the original PDF / website
export const IMAGES = {
  logo: '/src/assets/real_images/ace_dog_logo.png',
  heroYacht: '/src/assets/real_images/hero_yacht.jpg',
  autoHero: '/src/assets/real_images/auto_mercedes_interior.jpg',
  boatHero: '/src/assets/real_images/boat_trailer.jpeg',
  rvHero: '/src/assets/real_images/rv_motorhome.jpeg',
  aircraftHero: '/src/assets/real_images/aircraft_wash_plane.jpeg',
  ceramicHero: '/src/assets/real_images/ceramic_coating_hand.jpg',
  fleetHero: '/src/assets/real_images/fleet_van_buses.jpg',
  
  // Real PDF Detailed feature images
  aircraftCessna: '/src/assets/real_images/aircraft_cessna.jpg',
  aircraft310: '/src/assets/real_images/aircraft_310.jpg',
  aircraftClean: '/src/assets/real_images/aircraft_clean.jpg',
  aircraftJet: '/src/assets/real_images/aircraft_jet.jpg',
  aircraftCockpit: '/src/assets/real_images/aircraft_cockpit.jpg',

  boatDocked: '/src/assets/real_images/boat_docked.jpg',
  boatTeak: '/src/assets/real_images/boat_teak.jpg',
  boatInterior: '/src/assets/real_images/boat_interior.jpg',
  boatBrightwork: '/src/assets/real_images/boat_brightwork.jpg',
  boatPontoon: '/src/assets/real_images/boat_pontoon.jpg',

  rvCamperCap: '/src/assets/real_images/rv_camper_cap.jpg',
  rvCouple: '/src/assets/real_images/rv_couple.jpg',
  rvRoad: '/src/assets/real_images/rv_road.jpg',
  rvLake: '/src/assets/real_images/rv_lake.jpg',
  rvDetail: '/src/assets/real_images/rv_detail.jpg',

  fleetTruck: '/src/assets/real_images/fleet_truck.jpg',
  autoHeadlight: '/src/assets/real_images/auto_headlight.png',
  autoWheelTire: '/src/assets/real_images/auto_wheel_tire.png',
  autoFabric: '/src/assets/real_images/auto_fabric.jpg',
  autoGlass: '/src/assets/real_images/auto_glass.jpg',
  autoBrushInterior: '/src/assets/real_images/auto_brush_interior.jpg',

  ceramicSilverado: '/src/assets/real_images/ceramic_silverado.jpg',
  ceramicAudi: '/src/assets/real_images/ceramic_audi.jpg',
  ceramicShieldHood: '/src/assets/real_images/ceramic_shield_hood.jpg',
};

// Auto Detailing Pricing Packages
export const AUTO_PRICING: Record<'2doors' | '4doors' | 'truck_suv', PricingPackage[]> = {
  '2doors': [
    {
      id: 'silver-interior',
      name: 'Silver - Interior Only',
      priceDisplay: '$165',
      priceNumeric: 165,
      description: 'Thorough interior revival focusing on cabin cleanliness and visibility.',
      features: [
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Complete Wipe Down',
      ],
    },
    {
      id: 'gold-exterior',
      name: 'Gold - Exterior Only',
      priceDisplay: '$165',
      priceNumeric: 165,
      description: 'Complete exterior foam wash, tire dressing, and high-gloss spray protection.',
      features: [
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Complete Wipe Down',
        'Spray Wax-Shine',
      ],
    },
    {
      id: 'platinum-both',
      name: 'Platinum - Interior/Exterior',
      priceDisplay: '$250',
      priceNumeric: 250,
      popular: true,
      description: 'Comprehensive dual-zone detailing for showroom-grade presence inside and out.',
      features: [
        'Dash Protect and Shine',
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Trunk Vacuum',
        'Complete Wipe Down',
        'Wheel Well Cleaning',
      ],
    },
    {
      id: 'diamond-both',
      name: 'Diamond - Interior/Exterior',
      priceDisplay: '$350',
      priceNumeric: 350,
      description: 'The pinnacle of vehicle rejuvenation with hand wax seal and black trim restoration.',
      features: [
        'Paint Prep',
        'Dash Protect and Shine',
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Trunk Vacuum',
        'Complete Wipe Down',
        'Black Trim Restore and Protect',
        '3-4 Month Hand Wax',
      ],
    },
    {
      id: 'paint-correction',
      name: 'Paint Correction / Ceramic Coat',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Multi-stage swirl removal and state-of-the-art hydrophobic nano-ceramic shielding.',
      features: [
        'Multi-stage paint defect compounding',
        'Swirl & scratch removal',
        'Paint depth thickness gauge audit',
        'Isopropyl alcohol prep wipe',
        'Up to 5-year ceramic coating application',
        'Wheels & glass hydrophobic treatment',
      ],
    },
  ],
  '4doors': [
    {
      id: 'silver-interior',
      name: 'Silver - Interior Only',
      priceDisplay: '$165',
      priceNumeric: 165,
      description: 'Thorough interior revival focusing on cabin cleanliness and visibility.',
      features: [
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Complete Wipe Down',
      ],
    },
    {
      id: 'gold-exterior',
      name: 'Gold - Exterior Only',
      priceDisplay: '$165',
      priceNumeric: 165,
      description: 'Complete exterior foam wash, tire dressing, and high-gloss spray protection.',
      features: [
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Complete Wipe Down',
        'Spray Wax-Shine',
      ],
    },
    {
      id: 'platinum-both',
      name: 'Platinum - Interior/Exterior',
      priceDisplay: '$250',
      priceNumeric: 250,
      popular: true,
      description: 'Comprehensive dual-zone detailing for showroom-grade presence inside and out.',
      features: [
        'Dash Protect and Shine',
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Trunk Vacuum',
        'Complete Wipe Down',
        'Wheel Well Cleaning',
      ],
    },
    {
      id: 'diamond-both',
      name: 'Diamond - Interior/Exterior',
      priceDisplay: '$350',
      priceNumeric: 350,
      description: 'The pinnacle of vehicle rejuvenation with hand wax seal and black trim restoration.',
      features: [
        'Paint Prep',
        'Dash Protect and Shine',
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Trunk Vacuum',
        'Complete Wipe Down',
        'Black Trim Restore and Protect',
        '3-4 Month Hand Wax',
      ],
    },
    {
      id: 'paint-correction',
      name: 'Paint Correction / Ceramic Coat',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Multi-stage swirl removal and state-of-the-art hydrophobic nano-ceramic shielding.',
      features: [
        'Multi-stage paint defect compounding',
        'Swirl & scratch removal',
        'Paint depth thickness gauge audit',
        'Isopropyl alcohol prep wipe',
        'Up to 5-year ceramic coating application',
        'Wheels & glass hydrophobic treatment',
      ],
    },
  ],
  'truck_suv': [
    {
      id: 'silver-interior',
      name: 'Silver - Interior Only',
      priceDisplay: '$185',
      priceNumeric: 185,
      description: 'Deep interior vacuum and wipe down formatted for larger cabins and cargo areas.',
      features: [
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum & Under-seat cleanup',
        'Complete Wipe Down',
      ],
    },
    {
      id: 'gold-exterior',
      name: 'Gold - Exterior Only',
      priceDisplay: '$185',
      priceNumeric: 185,
      description: 'Exterior high-foam wash, deep wheel well degreasing, and spray shine.',
      features: [
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Complete Wipe Down',
        'Spray Wax-Shine',
      ],
    },
    {
      id: 'platinum-both',
      name: 'Platinum - Interior/Exterior',
      priceDisplay: '$275',
      priceNumeric: 275,
      popular: true,
      description: 'Complete full-size treatment inside and out for trucks, SUVs, and large crossovers.',
      features: [
        'Dash Protect and Shine',
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Trunk & Bed Jamb Vacuum',
        'Complete Wipe Down',
        'Wheel Well Cleaning',
      ],
    },
    {
      id: 'diamond-both',
      name: 'Diamond - Interior/Exterior',
      priceDisplay: '$385',
      priceNumeric: 385,
      description: 'Full surface restoration, trim rejuvenation, and premium long-lasting hand wax seal.',
      features: [
        'Paint Prep',
        'Dash Protect and Shine',
        'Exterior Foam Bath',
        'Chamois Hand Dry',
        'Rims Cleaned and Shined',
        'Tire Scrub and Shine',
        'Window - Inside/Outside',
        'Door and Trunk Jambs',
        'Interior Vacuum',
        'Trunk Vacuum',
        'Complete Wipe Down',
        'Black Trim Restore and Protect',
        '3-4 Month Hand Wax',
      ],
    },
    {
      id: 'paint-correction',
      name: 'Paint Correction / Ceramic Coat',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Deep correction and ultra-durable ceramic protection for demanding full-size vehicles.',
      features: [
        'Multi-stage paint defect compounding',
        'Swirl & scratch removal',
        'Paint depth thickness gauge audit',
        'Isopropyl alcohol prep wipe',
        'Up to 5-year ceramic coating application',
        'Wheels & glass hydrophobic treatment',
      ],
    },
  ],
};

// Boat Detailing Pricing Packages
export const BOAT_PRICING: Record<'pontoon' | 'center_console' | 'cabin_cruiser' | 'yacht', PricingPackage[]> = {
  pontoon: [
    {
      id: 'boat-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$30/FT',
      priceNumeric: 30,
      perFoot: true,
      description: 'Complete marine foam bath, waterline scum removal, and high-grade marine wax application.',
      features: [
        'Marine Foam Wash & Rinse',
        'Waterline & Scum Line Scrub',
        'Premium Marine Wax Application',
        'Window & Windshield Polish',
        'Vinyl Seating Gentle Cleanse',
      ],
    },
    {
      id: 'boat-water-spot',
      name: 'Water Spot Removal',
      priceDisplay: '$45/FT',
      priceNumeric: 45,
      perFoot: true,
      popular: true,
      description: 'Chemical and mechanical removal of severe mineral deposits and salt film.',
      features: [
        'Includes all Wash & Wax treatments',
        'Acid-free mineral deposit breakdown',
        'Dual-action spot polishing',
        'UV sealant coat application',
        'Brightwork touch-up',
      ],
    },
    {
      id: 'boat-toon-polish',
      name: 'Toon Polish',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'High-speed rotary aluminum oxidation removal and mirror finish brightening for pontoon logs.',
      features: [
        'Heavy aluminum acid wash & rinse',
        'Rotary compounding with wool pads',
        'Mirror polish finish treatment',
        'Corrosion inhibitor sealant',
      ],
    },
  ],
  center_console: [
    {
      id: 'boat-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$30/FT',
      priceNumeric: 30,
      perFoot: true,
      description: 'Comprehensive top-to-bottom marine foam bath, non-skid scrub, and hull waxing.',
      features: [
        'Deep Non-Skid Deck Scrub',
        'Console & Windshield Polish',
        'Marine Hull Hand Wax',
        'Fish Box & Compartment Rinse',
        'T-Top / Hardtop Cleanse',
      ],
    },
    {
      id: 'boat-water-spot',
      name: 'Water Spot Removal',
      priceDisplay: '$45/FT',
      priceNumeric: 45,
      perFoot: true,
      popular: true,
      description: 'Specialized elimination of tough saltwater scale and sun-baked mineral rings.',
      features: [
        'Includes all Wash & Wax treatments',
        'Gel coat mineral dissolution',
        'Outboard motor cowling polish',
        'Protective synthetic sealant',
      ],
    },
    {
      id: 'boat-toon-polish',
      name: 'Gel Coat Ceramic / Brightwork',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Heavy compounding to remove chalky oxidation and install multi-year marine ceramic shield.',
      features: [
        'Heavy cut rotary gelcoat compounding',
        'High-gloss finishing polish',
        'Marine-grade 9H ceramic coating',
        'Stainless steel rail polishing',
      ],
    },
  ],
  cabin_cruiser: [
    {
      id: 'boat-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$32/FT',
      priceNumeric: 32,
      perFoot: true,
      description: 'Full deck wash, flybridge cleaning, hull cleanse, and protective marine wax.',
      features: [
        'Deck & cockpit deep wash',
        'Hull waterline stain removal',
        'Marine UV protective wax',
        'Canvas & isinglass gentle care',
      ],
    },
    {
      id: 'boat-water-spot',
      name: 'Water Spot Removal',
      priceDisplay: '$48/FT',
      priceNumeric: 48,
      perFoot: true,
      popular: true,
      description: 'Deep mineral stain removal from expansive windows, chrome rails, and gel coat surfaces.',
      features: [
        'Multi-stage window stain removal',
        'Fiberglass polish treatment',
        'Hydrophobic rain repellent',
      ],
    },
    {
      id: 'boat-toon-polish',
      name: 'Yacht Restoration & Polish',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Full interior cabin rejuvenation, teak wood restoration, and hull color revival.',
      features: [
        'Cabin upholstery deep steam extraction',
        'Teak wood cleaning & oil treatment',
        'Stainless steel rail brightwork',
        'Anti-fouling bottom touch-up',
      ],
    },
  ],
  yacht: [
    {
      id: 'boat-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$35/FT',
      priceNumeric: 35,
      perFoot: true,
      description: 'Bespoke mega-vessel exterior maintenance, teak rinse, and high-shine preservation.',
      features: [
        'Multi-deck wash down & spot-free rinse',
        'Salt film neutralization',
        'Carnauba marine wax application',
        'Exterior glass streak-free treatment',
      ],
    },
    {
      id: 'boat-water-spot',
      name: 'Water Spot Removal',
      priceDisplay: '$50/FT',
      priceNumeric: 50,
      perFoot: true,
      popular: true,
      description: 'Precision correction of water etchings on hull sides, superstructure, and tinted panoramic glass.',
      features: [
        'Superstructure spot correction',
        'Glass de-scaling & ceramic treatment',
        'Exhaust soot stain removal',
      ],
    },
    {
      id: 'boat-toon-polish',
      name: 'Full Marine Overhaul',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Turnkey super-yacht detailing with complete interior staging and exterior multi-stage compounding.',
      features: [
        'Full interior crew cabin & salon staging',
        'Fine wood & leather conditioning',
        'Hull multi-stage paint/gelcoat correction',
        'Long-term ceramic defense barrier',
      ],
    },
  ],
};

// RV Detailing Pricing Packages
export const RV_PRICING: Record<'camper' | 'fifth_wheel' | 'motorhome', PricingPackage[]> = {
  camper: [
    {
      id: 'rv-wash',
      name: 'Wash',
      priceDisplay: '$7/FT',
      priceNumeric: 7,
      perFoot: true,
      description: 'Gentle pressure exterior wash, black streak removal, and tire degrease.',
      features: [
        'Foam cannon exterior wash',
        'Black streak removal from sides',
        'Wheel & tire scrub',
        'Exterior window cleaning',
      ],
    },
    {
      id: 'rv-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$17/FT',
      priceNumeric: 17,
      perFoot: true,
      popular: true,
      description: 'Comprehensive exterior cleanse with heavy-duty UV protective paste wax.',
      features: [
        'Includes all basic Wash services',
        'High-grade RV paste wax applied by hand',
        'Roof wash and gutter cleanout',
        'Tire protectant & UV shield',
        'Chrome & trim shine',
      ],
    },
    {
      id: 'rv-oxidation',
      name: 'Oxidation Removal',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Multi-step machine compounding to remove chalky fiberglass oxidation and restore glossy gel coat.',
      features: [
        'Rotary compounding of oxidized panels',
        'Decal preservation treatment',
        'Sealant or ceramic top-coat application',
        'Slide-out seal lubrication',
      ],
    },
  ],
  fifth_wheel: [
    {
      id: 'rv-wash',
      name: 'Wash',
      priceDisplay: '$8/FT',
      priceNumeric: 8,
      perFoot: true,
      description: 'Complete high-profile wash including front fiberglass cap and slide-out toppers.',
      features: [
        'Front cap bug & grime elimination',
        'Underbody pressure rinse',
        'Slide-out side wash',
        'Streak-free exterior window rinse',
      ],
    },
    {
      id: 'rv-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$18/FT',
      priceNumeric: 18,
      perFoot: true,
      popular: true,
      description: 'Deep exterior wash plus polymer sealant wax to guard against sun and road exposure.',
      features: [
        'Complete roof cleaning & visual check',
        'Hand-applied UV synthetic sealant wax',
        'Front molded fiberglass cap gloss enhancement',
        'Rim polishing & tire dressing',
      ],
    },
    {
      id: 'rv-oxidation',
      name: 'Oxidation Removal',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Full rotary restoration to eliminate fading, chalkiness, and discoloration.',
      features: [
        'Aggressive cut compounding',
        'Fine swirl-removal polishing',
        'High-gloss ceramic or polymer shield',
      ],
    },
  ],
  motorhome: [
    {
      id: 'rv-wash',
      name: 'Wash',
      priceDisplay: '$9/FT',
      priceNumeric: 9,
      perFoot: true,
      description: 'Deluxe Class A/C motorcoach wash down, giant panoramic windshield scrub, and wheel bath.',
      features: [
        'Complete motorhome body foam wash',
        'Huge windshield bug removal & streak-free dry',
        'Aluminum wheel cleaning & tire dressing',
        'Compartment door jamb wipe',
      ],
    },
    {
      id: 'rv-wash-wax',
      name: 'Wash & Wax',
      priceDisplay: '$20/FT',
      priceNumeric: 20,
      perFoot: true,
      popular: true,
      description: 'Premium motorcoach wash with paint sealant hand-applied for long highway endurance.',
      features: [
        'Full roof scrub & skylight clean',
        'Complete body hand wax & buff',
        'Slide-out seal treatment',
        'Mirror & chrome brightwork shine',
      ],
    },
    {
      id: 'rv-oxidation',
      name: 'Full Oxidation & Paint Correction',
      priceDisplay: 'GET A QUOTE',
      isQuoteOnly: true,
      description: 'Full-body machine compounding and multi-year ceramic coating for Class A luxury coaches.',
      features: [
        'Full paint correction on full-body paint',
        'Severe oxidation reversal on fiberglass caps',
        'Ceramic coating protection options',
        'Ozone interior odor elimination available',
      ],
    },
  ],
};

// Auto Detailing Detailed Services
export const AUTO_DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'paint-correction',
    title: "Restoring Your Vehicle's True Colors With Paint Correction",
    description: "Over time, your vehicle's paint may lose its luster due to exposure to environmental elements, contaminants, and minor scratches. Ace Detailing Pro's paint correction services are designed to address these imperfections, restoring the original vibrancy of your vehicle's color. Our skilled technicians utilize advanced techniques, including compounding and polishing, to eliminate swirl marks, scratches, and oxidation. The result? A flawless paint finish that enhances the aesthetic appeal of your vehicle.",
  },
  {
    id: 'interior-rejuvenation',
    title: 'Interior Rejuvenation: Where Comfort Meets Cleanliness',
    description: "Your vehicle's interior is a personal space that deserves the utmost care. Ace Detailing Pro's interior detailing goes beyond the basics, providing a comprehensive rejuvenation experience. Our services include deep cleaning of upholstery, carpet shampooing, leather conditioning, and meticulous attention to every nook and cranny. Forget about lingering odors, stains, and dust — we ensure your vehicle's interior is clean and a comfortable haven.",
  },
  {
    id: 'engine-bay',
    title: 'Where Performance Meets Aesthetics In Engine Bay Detailing',
    description: "The engine bay is the heart of your vehicle, and it deserves attention, too. Ace Detailing Pro's engine bay detailing services focus on enhancing both aesthetics and performance. We utilize specialized products and techniques to clean and protect engine components, ensuring optimal functioning and a visually appealing engine bay. Trust us to maintain the engine's integrity while adding a touch of elegance under the hood.",
  },
  {
    id: 'headlight-restoration',
    title: 'Illuminate the Road Ahead With Headlight Restoration',
    description: "Dull or yellowed headlights compromise visibility and detract from your vehicle's overall appearance. Ace Detailing Pro's headlight restoration services utilize advanced polishing techniques to remove oxidation and restore clarity. Experience improved night driving safety and a renewed, polished look for your vehicle with our headlight restoration expertise.",
  },
  {
    id: 'wheel-tire-care',
    title: 'Wheel and Tire Care To Enhance The Road-Ready Look',
    description: 'Ace Detailing Pro pays meticulous attention to your vehicle\'s wheels and tires. Our wheel and tire care services include thorough cleaning, tire dressing, and protection against brake dust buildup. We go beyond the surface, ensuring every inch of your wheels reflects a road-ready, polished appearance. Elevate your vehicle\'s curb appeal with our specialized wheel and tire care.',
  },
  {
    id: 'exterior-protection',
    title: 'Exterior Protection To Shield Your Investment',
    description: 'Your vehicle faces constant exposure to environmental elements, from harsh sunlight to rain and contaminants. Ace Detailing Pro\'s exterior protection services provide a shield against these factors. We offer premium waxing and sealant applications, ensuring long-lasting protection for your vehicle\'s paint and surfaces. Trust us to keep your vehicle looking pristine and well-protected against the challenges of the road and the elements.',
  },
  {
    id: 'fabric-carpet',
    title: 'Fabric and Carpet Protection To Guard Against Spills and Stains',
    description: 'Spills, stains, and dirt can take a toll on your vehicle\'s interior fabric and carpeting. Ace Detailing Pro\'s fabric and carpet protection services create a protective barrier, preventing liquids and contaminants from penetrating and causing damage. Enjoy peace of mind knowing that your vehicle\'s interior is safeguarded against the unexpected, ensuring a clean and well-maintained appearance.',
  },
  {
    id: 'odor-elimination',
    title: 'Odor Elimination To Refresh Your Driving Experience',
    description: 'Unpleasant odors can linger in your vehicle, affecting the overall driving experience. Ace Detailing Pro\'s odor elimination services target the root cause of unwanted smells. We utilize professional-grade products and techniques to neutralize odors, leaving your vehicle with a fresh and inviting ambiance. Forget about persistent smells and embrace a rejuvenated driving experience.',
  },
  {
    id: 'window-glass',
    title: 'Window and Glass Treatment For Clarity and Visibility',
    description: 'Clear, streak-free windows and glass are essential for safe driving. Ace Detailing Pro\'s window and glass treatment services focus on eliminating smudges, streaks, and water spots. Our specialized products ensure optimal visibility and a crystal-clear finish, enhancing your vehicle\'s aesthetics and safety.',
  },
];

// Boat Detailing Detailed Services
export const BOAT_DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'fiberglass-restoration',
    title: 'Fiberglass Restoration For Preserving the Heart of Your Vessel',
    description: "Boats endure the elements with constant exposure to water and UV rays, leading to inevitable wear and tear on fiberglass surfaces. Our fiberglass restoration services are tailored to address these challenges, ensuring your vessel's structural integrity is maintained. Our skilled technicians utilize advanced techniques and premium products to revitalize and protect fiberglass surfaces, guaranteeing a gleaming and resilient boat that confidently navigates the waters.",
  },
  {
    id: 'gel-coat-protection',
    title: 'Gel Coat Protection For Shielding Against the Marine Environment',
    description: "A gel coat, a vital element in a boat's appearance and protection, is susceptible to deterioration from exposure to saltwater, sunlight, and environmental contaminants. Our gel coat protection services offer a proactive defense against these elements. We apply specialized coatings that act as a shield, preventing oxidation, fading, and staining. Trust us to safeguard your boat's gel coat, ensuring a lasting, vibrant finish that meets the marine environment's challenges.",
  },
  {
    id: 'stainless-steel',
    title: 'Brilliance Beyond the Surface With Stainless Steel Polishing',
    description: 'Stainless steel components on your boat, such as railings, fittings, and hardware, are prone to corrosion and tarnishing due to saltwater exposure. Our stainless steel polishing services go beyond surface cleaning. Our experts utilize advanced polishing techniques and premium products to restore and protect stainless steel, ensuring a brilliant and corrosion-resistant finish.',
  },
  {
    id: 'interior-marine',
    title: 'Experience Comfort and Elegance With Interior Marine Detailing',
    description: "The interior of your boat is a personal space that deserves the utmost care and attention. Ace Detailing Pro's interior marine detailing services encompass a comprehensive rejuvenation experience. From deep cleaning of upholstery to carpet shampooing and meticulous attention to every nook and cranny, our services ensure your boat's interior is clean and a comfortable and elegant haven.",
  },
  {
    id: 'teak-restoration',
    title: 'Teak Restoration For Preserving the Beauty of Natural Wood',
    description: 'Teak, a popular material in boat construction, adds a touch of natural elegance. Exposure to the marine environment can lead to discoloration and weathering. Our boat detailing service in Orange Beach, AL, is designed to preserve the beauty of natural wood. Our experts employ specialized techniques and premium products to clean, restore, and protect teak surfaces, ensuring a revitalized and resilient appearance. Trust us to maintain the allure of your boat\'s teak elements, enhancing aesthetics and durability.',
  },
  {
    id: 'vinyl-canvas',
    title: 'Vinyl and Canvas Care For Protection Against the Elements',
    description: "Vinyl and canvas components, such as boat covers and upholstery, are susceptible to UV damage, stains, and fading. Our vinyl and canvas care services offer protection against these elements. We utilize specialized cleaning and conditioning products to rejuvenate and shield vinyl and canvas, ensuring a vibrant and durable appearance. Sail confidently, knowing that Ace Detailing Pro expertly cares for your boat's vinyl and canvas components.",
  },
  {
    id: 'metal-brightwork',
    title: 'Metal Polishing For Brightwork To Get A Gleaming Maritime Presence',
    description: 'Brightwork, including metal fixtures and ornaments on your boat, adds a touch of maritime charm. Our metal polishing for brightwork services ensures a gleaming naval presence. Our skilled technicians employ advanced polishing techniques and premium products to restore and protect metal surfaces, leaving your boat with a shining and enduring allure.',
  },
  {
    id: 'hull-cleaning',
    title: 'Hull Cleaning and Maintenance',
    description: "The hull is a critical component of your boat's performance, and its condition directly impacts efficiency and fuel consumption. We focus on preserving the integrity of this vital area. We employ specialized techniques and products to remove marine growth, barnacles, and oxidation, ensuring a clean and efficient hull that glides through the water with optimal performance.",
  },
  {
    id: 'anti-fouling',
    title: 'Anti-Fouling Coating To Guard Against Marine Growth',
    description: 'The underwater surfaces of your boat are prone to marine growth, which can affect performance and fuel efficiency. We provide a protective shield against barnacles, algae, and other marine organisms. Our expert application of anti-fouling coatings ensures your boat remains free from unwanted growth, optimizing its performance and preserving fuel efficiency during every voyage.',
  },
];

// RV Detailing Detailed Services
export const RV_DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'exterior-restoration',
    title: "Revitalizing Your RV's Curb Appeal With Exterior Restoration",
    description: "Often exposed to the elements during travels, RVs can accumulate dirt, oxidation, and road grime, diminishing their exterior brilliance. Our exterior restoration services are designed to revitalize your RV's curb appeal. Our skilled technicians utilize advanced techniques to remove oxidation, restore paint vibrancy, and ensure that every detail, from decals to window frames, reflects a fresh and polished appearance.",
  },
  {
    id: 'ozone-treatment',
    title: 'Ozone Treatment For A Breath of Fresh Air for Your Mobile Haven',
    description: "The interior of your RV is not just a living space; it's a home on wheels. We offer a breath of fresh air for your mobile haven. Ozone is a natural gas that effectively neutralizes odors, bacteria, and allergens, providing a clean and sanitized interior environment. Say goodbye to lingering odors from cooking, pets, or previous travels. Our ozone treatment ensures that stepping into your RV feels like a breath of fresh air, creating a comfortable and inviting atmosphere for your journeys.",
  },
  {
    id: 'slide-out-maintenance',
    title: 'Slide-Out Maintenance To Ensure Smooth Operations',
    description: "RV slide-outs are essential components that contribute to your mobile home's spacious and comfortable interior. We focus on ensuring the smooth operation and longevity of these components. Our technicians inspect, lubricate, and address any potential issues, guaranteeing that your RV's slide-outs function seamlessly. Experience the convenience and comfort of a well-maintained interior space with our specialized slide-out maintenance.",
  },
  {
    id: 'awning-cleaning',
    title: 'Awning Cleaning and Protection For Sheltered Elegance on the Road',
    description: 'Awnings are not just functional; they add a touch of elegance to your RV. However, constant exposure to the elements can lead to dirt, mold, and deterioration. We offer sheltered elegance on the road. We utilize specialized cleaning solutions and protective treatments to ensure that your awnings remain clean, vibrant, and resilient against weather and travel challenges.',
  },
  {
    id: 'engine-compartment',
    title: 'Engine Compartment Detailing For Power with Precision',
    description: "The engine compartment is the powerhouse of your RV, and its condition directly impacts performance and reliability. We focus on both aesthetics and functionality. Our technicians utilize specialized cleaning products and techniques to ensure a clean and well-maintained engine bay. Trust us to provide power with precision, enhancing your RV's overall performance and longevity.",
  },
  {
    id: 'roof-maintenance',
    title: 'Roof Maintenance For Overhead Protection for Your RV',
    description: "The RV roof is often overlooked but plays a crucial role in protecting your mobile home from the elements. We offer overhead protection, addressing issues such as leaks, cracks, and wear. We conduct thorough inspections, repairs, and protective treatments, ensuring your RV remains protected against rain, sun, and other environmental factors. Experience peace of mind knowing that your RV's roof is expertly cared for by Ace Detailing Pro.",
  },
  {
    id: 'interior-upholstery',
    title: 'Interior Fabric and Upholstery Protection For Resilience Against Wear and Tear',
    description: "RV interiors experience wear and tear due to frequent use and exposure to various elements. Our interior fabric and upholstery protection services offer resilience against these challenges. We apply specialized protectants that create a barrier against stains, spills, and UV damage. Preserve the integrity and appearance of your RV's interior fabrics, ensuring every journey is enjoyed in a comfortable and well-maintained living space.",
  },
  {
    id: 'water-system',
    title: 'Water System Sanitization For Clean and Safe Water Onboard',
    description: "The water system in your RV is essential for daily living. We ensure that your onboard water supply remains clean and safe. We utilize safe and effective sanitization techniques to eliminate bacteria, mold, and contaminants from your RV's water system. Enjoy peace of mind knowing your onboard water is clean and safe for all your travel and living needs.",
  },
  {
    id: 'window-vent',
    title: 'Get A Clear View of the Journey With Window and Vent Cleaning',
    description: 'Clear and well-maintained windows and vents are crucial for an enjoyable RV travel experience. We focus on removing dirt, grime, and contaminants, ensuring a clear view of the journey ahead. Experience the joy of unobstructed vistas and optimal airflow with our specialized cleaning for windows and vents.',
  },
];

// Aircraft Detailing Detailed Services
export const AIRCRAFT_DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'specialized-expertise',
    title: 'Specialized Expertise in Aircraft Detailing',
    description: 'Ace Detailing Pro boasts specialized expertise in aircraft detailing, and understanding the unique materials, surfaces, and challenges that aviation presents. Our team comprises skilled technicians with a deep knowledge of aircraft materials, ensuring that every detail is addressed with precision and care.',
  },
  {
    id: 'aviation-grade-products',
    title: 'Aviation-Grade Products for Optimal Care',
    description: 'Aircraft require care that goes beyond standard detailing products. Ace Detailing Pro utilizes aviation-grade products designed specifically for aircraft surfaces. These specialized products ensure optimal care without compromising the integrity of aircraft materials, from exterior surfaces to cockpit interiors.',
  },
  {
    id: 'exterior-brilliance',
    title: 'Exterior Brilliance for Skyward Elegance',
    description: 'The exterior of an aircraft is its first impression, and Ace Detailing Pro ensures it\'s a lasting one. Our Aircraft Detailing Services include meticulous exterior care, from paint correction to polishing and protection. Experience skyward elegance with an aircraft that gleams brilliantly, reflecting the pride of ownership and dedication to aviation excellence.',
  },
  {
    id: 'cockpit-precision',
    title: 'Cockpit Precision for In-Flight Comfort',
    description: 'The cockpit is the command center of any aircraft, and Ace Detailing Pro\'s attention to detail extends to this crucial space. Our cockpit detailing services focus on precision and cleanliness, creating an environment that enhances in-flight comfort and ensures optimal functionality of instruments and controls.',
  },
  {
    id: 'landing-gear',
    title: 'Landing Gear and Undercarriage Excellence',
    description: "Landing gear and undercarriage components are vital to an aircraft's performance and safety. Ace Detailing Pro's Aircraft Detailing Services include meticulous care for these crucial elements. From cleaning and protection to addressing corrosion concerns, our detailing ensures that your aircraft's undercarriage maintains optimal performance and safety standards.",
  },
];

// Aircraft 6-Step Process
export const AIRCRAFT_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Aircraft Surface Assessment',
    description: "Our process begins with a comprehensive assessment of the aircraft's surfaces. Ace Detailing Pro technicians inspect the paint, metal, and composite materials to identify any imperfections, contaminants, or areas in need of specialized care.",
  },
  {
    step: 2,
    title: 'Aviation-Grade Decontamination & Wash',
    description: "Ace Detailing Pro employs aviation-approved de-greasing and wash procedures to strip away exhaust soot, bug splatter, and runway contaminants without harming delicate rivets, static wicks, or antennas.",
  },
  {
    step: 3,
    title: 'Precision Multi-Stage Compounding',
    description: 'Our master technicians utilize rotary and dual-action polishers with aviation-rated polishing compounds to eliminate oxidation, micro-scratches, and environmental dullness from painted fuselage and wings.',
  },
  {
    step: 4,
    title: 'Brightwork & Leading-Edge Metal Polishing',
    description: 'Leading edges, spinner cones, and exposed aluminum are buffed to a flawless mirror chrome reflection using aerospace-compliant compounds that inhibit pitting and corrosion.',
  },
  {
    step: 5,
    title: 'Aeronautical Ceramic Sealant Barrier',
    description: 'We apply specialized aeronautical ceramic sealant that reduces aerodynamic drag, shields against extreme UV exposure at high altitudes, and prevents soot bonding.',
  },
  {
    step: 6,
    title: 'Cockpit Avionics & Cabin Detailing',
    description: 'Precision cleaning of instrumentation, non-abrasive anti-static glass treatment on flight displays, leather nourishment on crew seats, and complete carpet sanitization before flight release.',
  },
];

// Ceramic Coating Features
export const CERAMIC_FEATURES: ServiceDetail[] = [
  {
    id: 'affordability',
    title: 'Affordability Without Compromise',
    description: 'We defy the notion that quality comes with a hefty price tag. Our affordable ceramic coating services are designed to provide exceptional protection for your vehicle without straining your budget. By optimizing our processes, utilizing cost-effective yet high-quality materials, and focusing on efficiency, we ensure that affordability is a hallmark of the Ace Detailing Pro experience.',
  },
  {
    id: 'long-lasting',
    title: 'Long-lasting Protection',
    description: 'Ceramic coating forms a durable, long-lasting protective layer on your vehicle\'s surface. Unlike traditional waxes that wear off quickly, our ceramic coating adheres to the paint, providing extended protection against environmental contaminants, UV rays, and harsh weather conditions.',
  },
  {
    id: 'enhanced-gloss',
    title: 'Enhanced Gloss and Shine',
    description: 'Our ceramic shield enhances the gloss and shine of your vehicle, creating a showroom-worthy finish. The coating adds depth to the paint, intensifying the color and ensuring your vehicle maintains a stunning appearance that turns heads on the road.',
  },
  {
    id: 'easy-maintenance',
    title: 'Easy Maintenance and Cleaning',
    description: 'Enjoy the convenience of easy maintenance with our ceramic shield. The smooth and hydrophobic surface makes washing and cleaning a breeze. Experience a vehicle that not only looks pristine but also requires less effort to maintain its brilliance.',
  },
  {
    id: 'water-repellency',
    title: 'Water and Contaminant Repellency',
    description: 'Forget about water spots and contaminants clinging to your vehicle\'s surface. Our ceramic coating creates a hydrophobic effect, causing water and contaminants to bead up and roll off, making maintenance easier and protecting against potential damage.',
  },
];

// Ceramic Coating 5-Step Process
export const CERAMIC_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Surface Decontamination & Iron Dissolution',
    description: 'Thorough multi-stage hand foam wash followed by iron remover chemical decontamination and clay bar treatment to remove embedded environmental fallout from clearcoat pores.',
  },
  {
    step: 2,
    title: 'Paint Correction for Perfection',
    description: 'Before applying the ceramic coating, we address imperfections through paint correction. This step involves removing swirl marks, scratches, and other blemishes, ensuring a flawless surface for the coating to bond with.',
  },
  {
    step: 3,
    title: 'Precision Alcohol Prep Wipe',
    description: 'The heart of our preparation: an isopropyl alcohol surface wipe removes all polishing oils, fillers, and lubricants to leave bare, surgically clean paint ready for chemical crosslinking.',
  },
  {
    step: 4,
    title: 'True Ceramic Coating Application',
    description: 'Hand application in cross-hatch overlapping patterns using high-solids SiO2/nano-ceramic resin, flashing to a rainbow sheen before leveling with ultra-soft edgeless microfibers.',
  },
  {
    step: 5,
    title: 'Infrared Thermal Curing & Multi-Angle QA',
    description: 'Controlled infrared heat lamps cure the ceramic matrix to maximum surface hardness (9H), culminating in a rigorous multi-angle LED inspection to verify zero high spots.',
  },
];

// Fleet Washing Details
export const FLEET_DETAILS = {
  title: 'Fleet washing Services in Orange Beach, AL',
  description: "Ace Mobile Detailing specializes in professional fleet washing services that keep your business looking sharp and operating smoothly. We understand that a clean fleet reflects your company's image, which is why we offer reliable, on-site washing tailored to your schedule. Whether you manage delivery vans, trucks, or service vehicles, our team uses high-quality products and equipment to remove dirt, grime, and road buildup—helping extend the life of your vehicles and maintain a polished, professional appearance. With Ace, your fleet stays clean, consistent, and ready to represent your brand on the road.",
  ctaBannerTitle: 'Ready To Experience The Transformation?',
  ctaBannerText: 'Trust us to elevate your ride to unprecedented brilliance, ensuring that every detail reflects the passion and expertise we bring to the art of auto detailing. Contact us today to schedule your next detailing appointment and experience the Difference.',
};

// Signs When You Need Detailing (Homepage)
export const SIGNS_WHEN_YOU_NEED_DETAILING = [
  {
    id: 'paint-imperfections',
    title: 'Paint Imperfections',
    description: "When your vehicle's exterior exhibits swirl marks, oxidation, or paint imperfections, it's time for our expert paint correction services. We restore the vibrancy and shine, leaving your vehicle looking brand new.",
  },
  {
    id: 'interior-wear',
    title: 'Interior Wear and Tear',
    description: 'Stains, odors, and general wear and tear can diminish the interior aesthetics. Our interior detailing services breathe new life into your vehicle, ensuring a fresh and inviting driving or sailing experience.',
  },
  {
    id: 'exposure-damage',
    title: 'Exposure Damage',
    description: 'Boats, RVs, and aircraft are constantly exposed to harsh environmental elements. Fading, corrosion, and damage from exposure are signs that our specialized detailing can reverse and prevent further deterioration.',
  },
  {
    id: 'long-lasting-protection',
    title: 'Desire for Long-Lasting Protection',
    description: "If you seek long-lasting protection for your vehicle's surfaces, our ceramic coating services provide an invisible shield against UV rays, oxidation, and contaminants, ensuring a glossy finish that endures.",
  },
];

// Why Choose Us (Homepage & Services)
export const WHY_CHOOSE_US = {
  title: 'Why Choose Us',
  intro: 'At Ace, we go beyond detailing — we elevate your vehicle to its fullest potential. Whether it\'s a car, boat, RV, or aircraft, we treat every project with the same care and precision as if it were our own, delivering a flawless, showroom-quality finish. Count on us to bring out the best in everything that moves you.',
  pillars: [
    {
      id: 'advanced-cleaning',
      title: 'Advanced Cleaning Techniques',
      description: 'We employ state-of-the-art cleaning methods tailored to your vehicle\'s unique surfaces. From paint correction to specialized interior treatments, our team addresses every detail.',
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      description: 'Before returning your vehicle, our quality assurance team conducts a rigorous inspection to guarantee that every detail meets our high standards. We strive for perfection in every aspect of our process.',
    },
    {
      id: 'specialized-products',
      title: 'Specialized Products',
      description: 'Ace Detailing Pro utilizes premium detailing products chosen for their effectiveness and gentle care. These products enhance the longevity and shine of your vehicle.',
    },
  ],
};

// Benefits of Hiring (Homepage)
export const BENEFITS_OF_HIRING = [
  {
    title: 'Corrosion Prevention',
    description: 'For boats and aircraft, exposure to water and air can lead to corrosion. Ace Detailing Pro incorporates specialized techniques to combat corrosion, preserving these vehicles\' structural integrity and appearance.',
  },
  {
    title: 'Enhanced Driving and Sailing Experience',
    description: 'A meticulously detailed vehicle looks better and contributes to a superior driving or sailing experience. Clean and polished surfaces, both inside and out, create a more comfortable and enjoyable environment for you and your passengers.',
  },
  {
    title: 'Preservation of Aesthetics',
    description: 'Detailing ensures the preservation of your vehicle\'s aesthetics, preventing paint degradation, fading, and oxidation. Our expert team employs advanced techniques to restore and maintain the original vibrancy, leaving your vehicle looking as good as new.',
  },
  {
    title: 'Protection Against Environmental Elements',
    description: 'Vehicles endure harsh environmental elements daily. Our detailing services act as a protective shield against UV rays, pollutants, and contaminants. This proactive approach prevents long-term damage, ensuring your vehicle withstands the test of time.',
  },
  {
    title: 'Increased Resale Value',
    description: 'Regular detailing significantly boosts your vehicle\'s resale value. Potential buyers are more inclined towards well-maintained vehicles with a polished exterior and a pristine interior. Ace Detailing Pro\'s meticulous services contribute to a higher resale value, providing a return on your investment.',
  },
  {
    title: 'Improved Fuel Efficiency',
    description: 'Well-maintained vehicles often exhibit improved fuel efficiency. Ace Detailing Pro\'s attention to detail extends to engine bay cleaning, contributing to optimal performance and fuel economy.',
  },
  {
    title: 'Long-Lasting Ceramic Coating',
    description: 'Opting for our ceramic coating services provides a long-lasting protective layer for your vehicle. This innovative coating shields against scratches, bird droppings, tree sap, and more, maintaining a glossy finish with minimal maintenance requirements.',
  },
];

// Service categories summary
export const SERVICE_CATEGORIES_DATA = [
  {
    id: 'auto' as const,
    title: 'Auto Detailing',
    tagline: 'Top-Rated Auto Detailing in Baldwin County',
    shortDesc: 'Transformative interior and exterior restoration, paint correction, engine bay cleaning, and ceramic protection.',
    image: IMAGES.autoHero,
    startingPrice: 'From $165',
    bullets: ['Silver, Gold, Platinum & Diamond Tiers', 'Full Interior Steam & Extraction', '3-4 Month Hand Wax & Paint Prep'],
  },
  {
    id: 'boat' as const,
    title: 'Boat Detailing',
    tagline: 'Maritime Excellence in Orange Beach, AL',
    shortDesc: 'Gel coat oxidation removal, hull de-fouling, teak preservation, stainless steel brightwork, and marine waxing.',
    image: IMAGES.boatHero,
    startingPrice: 'From $30/FT',
    bullets: ['Pontoons, Center Consoles & Yachts', 'Salt Waterline Scum Elimination', 'Stainless Steel Rail Brightwork'],
  },
  {
    id: 'rv' as const,
    title: 'RV / Camper Detailing',
    tagline: 'Mobile Haven Curb Appeal & Care',
    shortDesc: 'Fiberglass restoration, ozone air sanitation, slide-out lubrication, roof seal care, and high-gloss waxing.',
    image: IMAGES.rvHero,
    startingPrice: 'From $7/FT',
    bullets: ['Campers, 5th Wheels & Motorhomes', 'Ozone Allergen & Odor Extraction', 'Full Roof & Awning Weather Shield'],
  },
  {
    id: 'aircraft' as const,
    title: 'Aircraft Detailing',
    tagline: 'Aviation-Grade Skyward Elegance',
    shortDesc: 'Aviation-certified products for airframes, leading edge brightwork, avionics glass, and 6-step deep protection.',
    image: IMAGES.aircraftHero,
    startingPrice: 'Custom Quote',
    bullets: ['FAA-Compliant Cleaning Methods', 'Exposed Aluminum Mirror Polish', 'Drag-Reducing Ceramic Sealant'],
  },
  {
    id: 'ceramic' as const,
    title: 'Ceramic Coating',
    tagline: 'Enduring 9H Hydrophobic Shield',
    shortDesc: 'Defy the elements with permanent chemical bonding, intense depth of gloss, and self-cleaning hydrophobic roll-off.',
    image: IMAGES.ceramicHero,
    startingPrice: 'Quote & Audit',
    bullets: ['Affordability Without Compromise', '5-Step Preparation & Infrared Cure', 'Multi-Year UV & Chemical Defense'],
  },
  {
    id: 'fleet' as const,
    title: 'Fleet Washing',
    tagline: 'Reliable On-Site Commercial Service',
    shortDesc: 'Keep your business looking sharp with scheduled on-site washes for delivery vans, service trucks, and trailers.',
    image: IMAGES.fleetHero,
    startingPrice: 'Commercial Rates',
    bullets: ['On-Site Scheduled Service', 'Uniform Brand Fleet Appearance', 'Biodegradable Commercial Cleaners'],
  },
];
