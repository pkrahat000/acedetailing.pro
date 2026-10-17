import React from 'react';
import { Shield, Sparkles, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/websiteContent';
import { ServiceCategory } from '../types';

interface HeroProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenBooking,
}) => {
  // Select hero image based on active category
  const getImageForCategory = () => {
    switch (activeCategory) {
      case 'home':
        return {
          src: IMAGES.heroYacht,
          alt: 'Ace Mobile Detailing luxury marine vessel and yacht detailing in Orange Beach AL',
          tag: 'Fully Licensed, Bonded & Insured',
        };
      case 'boat':
        return {
          src: IMAGES.boatHero,
          alt: 'Luxury boat and offshore vessel detailing at Orange Beach marina',
          tag: 'Marine & Yacht Detailing',
        };
      case 'rv':
        return {
          src: IMAGES.rvHero,
          alt: 'Luxury Class A motorhome RV restoration and exterior waxing',
          tag: 'RV & Camper Care',
        };
      case 'aircraft':
        return {
          src: IMAGES.aircraftHero,
          alt: 'Aviation aircraft detailing and leading edge metal polishing',
          tag: 'Aviation-Grade Care',
        };
      case 'ceramic':
        return {
          src: IMAGES.ceramicHero,
          alt: 'Professional ceramic coating application on mirror-finish car paint',
          tag: '9H Ceramic Shield',
        };
      case 'fleet':
        return {
          src: IMAGES.fleetHero,
          alt: 'Commercial fleet washing and mobile maintenance service in Orange Beach',
          tag: 'Commercial Fleet Wash',
        };
      case 'auto':
      default:
        return {
          src: IMAGES.autoHero,
          alt: 'Exotic luxury automotive interior and exterior paint correction detailing',
          tag: 'Auto & Exotic Detailing',
        };
    }
  };

  const currentMedia = getImageForCategory();

  const categoryTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'home', label: 'All Services' },
    { id: 'auto', label: 'Auto' },
    { id: 'boat', label: 'Boat' },
    { id: 'rv', label: 'RV / Camper' },
    { id: 'aircraft', label: 'Aircraft' },
    { id: 'ceramic', label: 'Ceramic Coating' },
    { id: 'fleet', label: 'Fleet' },
  ];

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Subtle, Clean Segmented Discipline Filter */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 sm:mb-16 no-scrollbar">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Balanced Hero Split with 60% Whitespace / Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Trust Kicker: Unboxed Clean Typography */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>Licensed, Bonded & Insured</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Orange Beach & Baldwin County</span>
            </div>

            {/* Main Title: Exact Original Branding */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white text-balance leading-[1.08]">
              Ace Mobile Detailing
            </h1>

            {/* Tagline & Subtext: Verbatim Content Preserved */}
            <p className="text-xl sm:text-2xl font-medium text-slate-300">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              At Ace, we go beyond detailing — we elevate your vehicle to its fullest potential. Whether it’s a car, boat, RV, or aircraft, we treat every project with the same care and precision as if it were our own, delivering a flawless, showroom-quality finish right at your location across Baldwin County.
            </p>

            {/* Dual CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white border border-white/[0.12] hover:border-white/30 rounded-lg transition-colors whitespace-nowrap"
              >
                See Our Services
              </a>
            </div>

            {/* Quiet proof metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-8 text-xs text-slate-400 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-slate-300 font-medium">100% Mobile</span>
                <span className="text-slate-500">· Driveway, dock, or hangar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-slate-300 font-medium">Aviation & Marine</span>
                <span className="text-slate-500">· Salt & corrosion defense</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Image Focal Carrier */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0e1117] group">
              <div className="aspect-[16/11] sm:aspect-[16/10] lg:aspect-square w-full relative">
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                
                {/* Measured Scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Quiet Meta Tag */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs">
                  <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/10 text-slate-200 font-medium">
                    <span>{currentMedia.tag}</span>
                  </div>
                  <span className="text-slate-400 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 tabular-nums">
                    Orange Beach, AL
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Clean Trust Strip */}
        <div className="mt-20 pt-10 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">Bonded & Insured</p>
            <p className="text-xs text-slate-400">Total liability peace of mind</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">Aviation-Grade Care</p>
            <p className="text-xs text-slate-400">FAA & marine tested products</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">On-Site Convenience</p>
            <p className="text-xs text-slate-400">Direct to driveway, dock or hangar</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">Rigorous Multi-Point QA</p>
            <p className="text-xs text-slate-400">Guaranteed showroom finish</p>
          </div>
        </div>

      </div>
    </section>
  );
};
