import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteContent';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 text-white overflow-hidden shadow-2xl">
      {/* Texture & decorative light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-sky-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Showroom Perfection On-Demand</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance">
              Experience Excellence for Your Vehicle Today!
            </h2>
            
            <p className="text-sky-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              Elevate your vehicle’s aesthetics with Ace Detailing Pro. Schedule an appointment now to indulge in transformative detailing services that redefine automotive, marine, and aircraft care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-xl shadow-black/20 active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-4 rounded-xl text-base font-semibold text-white bg-sky-950/40 hover:bg-sky-950/60 border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
