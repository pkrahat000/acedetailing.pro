import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES_DATA } from '../data/websiteContent';
import { ServiceCategory } from '../types';

interface ServiceCategoriesProps {
  onSelectCategory: (cat: ServiceCategory) => void;
  onOpenBooking: (packageId?: string) => void;
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({
  onSelectCategory,
  onOpenBooking,
}) => {
  return (
    <section id="services" className="py-24 lg:py-36 bg-[#08090d] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Generous Whitespace */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Precision Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance leading-tight">
            Specialized Care for Everything That Moves You
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed pt-1">
            From Gulf Coast sportfish yachts to luxury motorhomes, private aircraft, and daily drivers, we bring state-of-the-art detailing technology and aviation-grade products directly to you.
          </p>
        </div>

        {/* Spacious 6-Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICE_CATEGORIES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-xl bg-[#0d0f16] border border-white/[0.08] hover:border-white/20 overflow-hidden flex flex-col justify-between transition-colors"
            >
              {/* Media container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f16] via-transparent to-transparent opacity-90" />
                
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono text-slate-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    {service.startingPrice}
                  </span>
                </div>
              </div>

              {/* Content body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-slate-400">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-sky-400/90 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs text-slate-300">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-slate-500 font-bold" aria-hidden="true">—</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      onSelectCategory(service.id);
                      const pricingSec = document.querySelector('#pricing');
                      if (pricingSec) pricingSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Rates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
