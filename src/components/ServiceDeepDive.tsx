import React, { useState } from 'react';
import { 
  Sparkles, 
  Wrench, 
  Shield, 
  Droplet, 
  Compass, 
  Wind, 
  Eye, 
  Disc, 
  Zap, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  AUTO_DETAILED_SERVICES, 
  BOAT_DETAILED_SERVICES, 
  RV_DETAILED_SERVICES, 
  AIRCRAFT_DETAILED_SERVICES,
  CERAMIC_FEATURES,
  FLEET_DETAILS,
  IMAGES
} from '../data/websiteContent';
import { ServiceCategory } from '../types';

const getRealImage = (category: ServiceCategory, itemId: string): string => {
  switch (category) {
    case 'aircraft':
      if (itemId === 'specialized-expertise') return IMAGES.aircraftCessna;
      if (itemId === 'aviation-grade-products') return IMAGES.aircraft310;
      if (itemId === 'exterior-brilliance') return IMAGES.aircraftJet;
      if (itemId === 'cockpit-precision') return IMAGES.aircraftCockpit;
      if (itemId === 'landing-gear') return IMAGES.aircraftClean;
      return IMAGES.aircraftHero;
    case 'boat':
      if (itemId === 'fiberglass-restoration') return IMAGES.boatHero;
      if (itemId === 'gel-coat-protection') return IMAGES.boatDocked;
      if (itemId === 'stainless-steel') return IMAGES.boatBrightwork;
      if (itemId === 'interior-marine') return IMAGES.boatInterior;
      if (itemId === 'teak-restoration') return IMAGES.boatTeak;
      if (itemId === 'vinyl-canvas') return IMAGES.boatInterior;
      if (itemId === 'metal-brightwork') return IMAGES.boatBrightwork;
      if (itemId === 'hull-cleaning') return IMAGES.boatHero;
      if (itemId === 'anti-fouling') return IMAGES.boatPontoon;
      return IMAGES.boatDocked;
    case 'rv':
      if (itemId === 'exterior-restoration') return IMAGES.rvCamperCap;
      if (itemId === 'ozone-treatment') return IMAGES.rvCouple;
      if (itemId === 'slide-out-maintenance') return IMAGES.rvDetail;
      if (itemId === 'awning-cleaning') return IMAGES.rvHero;
      if (itemId === 'engine-compartment') return IMAGES.rvDetail;
      if (itemId === 'roof-maintenance') return IMAGES.rvHero;
      if (itemId === 'interior-upholstery') return IMAGES.rvCouple;
      if (itemId === 'water-system') return IMAGES.rvLake;
      if (itemId === 'window-vent') return IMAGES.rvRoad;
      return IMAGES.rvHero;
    case 'ceramic':
      if (itemId === 'affordability') return IMAGES.ceramicHero;
      if (itemId === 'long-lasting') return IMAGES.ceramicShieldHood;
      if (itemId === 'enhanced-gloss') return IMAGES.ceramicSilverado;
      if (itemId === 'easy-maintenance') return IMAGES.ceramicAudi;
      if (itemId === 'water-repellency') return IMAGES.ceramicHero;
      return IMAGES.ceramicSilverado;
    case 'fleet':
      if (itemId === 'paint-correction') return IMAGES.fleetTruck;
      if (itemId === 'interior-rejuvenation') return IMAGES.fleetHero;
      if (itemId === 'headlight-restoration') return IMAGES.autoHeadlight;
      if (itemId === 'wheel-tire-care') return IMAGES.autoWheelTire;
      return IMAGES.fleetHero;
    case 'auto':
    default:
      if (itemId === 'paint-correction') return IMAGES.autoBrushInterior;
      if (itemId === 'interior-rejuvenation') return IMAGES.autoHero;
      if (itemId === 'engine-bay') return IMAGES.rvDetail;
      if (itemId === 'headlight-restoration') return IMAGES.autoHeadlight;
      if (itemId === 'wheel-tire-care') return IMAGES.autoWheelTire;
      if (itemId === 'exterior-protection') return IMAGES.ceramicSilverado;
      if (itemId === 'fabric-carpet') return IMAGES.autoFabric;
      if (itemId === 'odor-elimination') return IMAGES.autoBrushInterior;
      if (itemId === 'window-glass') return IMAGES.autoGlass;
      return IMAGES.autoHero;
  }
};

interface ServiceDeepDiveProps {
  activeSector: ServiceCategory;
  onOpenBooking: () => void;
}

export const ServiceDeepDive: React.FC<ServiceDeepDiveProps> = ({
  activeSector,
  onOpenBooking,
}) => {
  const [selectedTab, setSelectedTab] = useState<ServiceCategory>(
    activeSector === 'home' ? 'auto' : activeSector
  );

  const getServiceList = () => {
    switch (selectedTab) {
      case 'boat':
        return {
          title: 'Expert Boat Detailing Services In Orange Beach, AL',
          subtitle: "We specialize in revitalizing and safeguarding your vessel's exterior and interior, ensuring it stands out on the water with unparalleled brilliance. As experts in boat detailing, we understand that your vessel is not just a mode of transportation; it's a statement of your maritime lifestyle. Our meticulous approach ensures that every inch, surface, and component receives the attention it deserves, leaving your boat in a state of unmatched excellence.",
          items: BOAT_DETAILED_SERVICES,
        };
      case 'rv':
        return {
          title: 'Professional RV Detailing Services in Orange Beach, AL',
          subtitle: "We specialize in rejuvenating and preserving your RV's exterior and interior, ensuring it stands out on the road as a home on wheels with unparalleled brilliance. As specialists in RV detailing Orange Beach, AL, we understand that your RV is not just a mode of transportation; it's a statement of your nomadic lifestyle and a mobile haven. Our meticulous approach ensures that every inch, surface, and component receives the attention it deserves, leaving your RV in a state of unmatched excellence.",
          items: RV_DETAILED_SERVICES,
        };
      case 'aircraft':
        return {
          title: 'Expert Aircraft Detailing Services In Orange Beach, AL',
          subtitle: 'As aviation enthusiasts, we understand the unique demands of aircraft preservation and enhancement. We offer aircraft owners a level of detailing expertise that extends beyond conventional care. Embark on a journey with us where every detail is meticulously addressed, and your aircraft takes to the skies with a brilliance that captivates both on the ground and in the air.',
          items: AIRCRAFT_DETAILED_SERVICES,
        };
      case 'ceramic':
        return {
          title: 'Ceramic Coating Services: A Shield of Excellence for Your Vehicle',
          subtitle: "We redefine vehicle protection through the transformative power of ceramic coating. Our commitment to excellence goes beyond conventional detailing, offering a cutting-edge ceramic coating service in Orange Beach, AL, that provides an enduring shield for your vehicle's finish. Ace Detailing Pro stands at the forefront of automotive care, delivering a level of protection and brilliance that goes unmatched. As specialists in ceramic coating, we understand that your vehicle is more than just transportation; it's an investment deserving of the utmost care.",
          items: CERAMIC_FEATURES,
        };
      case 'fleet':
        return {
          title: FLEET_DETAILS.title,
          subtitle: FLEET_DETAILS.description,
          items: AUTO_DETAILED_SERVICES.slice(0, 6), // Commercial fleet utilizes high-impact fleet reconditioning
        };
      case 'auto':
      default:
        return {
          title: 'Top-Rated Auto Detailing Services in Baldwin County, AL',
          subtitle: 'Our Auto Detailing services are more than a routine; they are a transformative experience for your vehicle. We go beyond the surface, addressing every detail with precision and expertise. From enhancing longevity to ensuring optimal visibility, our commitment is to unveil the true brilliance of your vehicle. Choose Ace Detailing Pro for a remarkable driving experience that reflects the passion and expertise we bring to the art of auto detailing.',
          items: AUTO_DETAILED_SERVICES,
        };
    }
  };

  const currentData = getServiceList();

  const getFeatureIcon = (index: number) => {
    const icons = [
      <Sparkles key="1" className="w-5 h-5 text-sky-400" />,
      <Layers key="2" className="w-5 h-5 text-sky-400" />,
      <Zap key="3" className="w-5 h-5 text-sky-400" />,
      <Eye key="4" className="w-5 h-5 text-sky-400" />,
      <Disc key="5" className="w-5 h-5 text-sky-400" />,
      <Shield key="6" className="w-5 h-5 text-sky-400" />,
      <Droplet key="7" className="w-5 h-5 text-sky-400" />,
      <Wind key="8" className="w-5 h-5 text-sky-400" />,
      <Compass key="9" className="w-5 h-5 text-sky-400" />,
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Category Switcher for Detailed Features */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setSelectedTab('auto')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedTab === 'auto' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Auto Features
            </button>
            <button
              onClick={() => setSelectedTab('boat')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedTab === 'boat' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Boat / Marine
            </button>
            <button
              onClick={() => setSelectedTab('rv')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedTab === 'rv' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              RV / Camper
            </button>
            <button
              onClick={() => setSelectedTab('aircraft')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedTab === 'aircraft' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Aircraft Detailing
            </button>
            <button
              onClick={() => setSelectedTab('ceramic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedTab === 'ceramic' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Ceramic Coating
            </button>
            <button
              onClick={() => setSelectedTab('fleet')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedTab === 'fleet' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Fleet Washing
            </button>
          </div>
        </div>

        {/* Section Header with exact verbatim copy */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400">
            <Wrench className="w-4 h-4 text-sky-400" />
            <span>Precision Technical Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white text-balance">
            {currentData.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {currentData.subtitle}
          </p>
        </div>

        {/* Deep Feature Grid - Clean Cards with Real PDF Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.items.map((item, idx) => {
            const realImg = getRealImage(selectedTab, item.id);
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Real Image Header from PDF */}
                {realImg && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={realImg}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20" />
                    <span className="absolute top-3 left-3 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-sky-400 border border-white/10">
                      Step 0{idx + 1}
                    </span>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Original PDF Spec</span>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 group/btn"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
