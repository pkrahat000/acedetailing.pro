import React from 'react';
import { Award, Sparkles, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/websiteContent';

interface WhyChooseUsSectionProps {
  onOpenBooking: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenBooking }) => {
  const pillarIcons = [
    <Sparkles key="1" className="w-6 h-6 text-sky-400" />,
    <ShieldCheck key="2" className="w-6 h-6 text-sky-400" />,
    <Award key="3" className="w-6 h-6 text-sky-400" />,
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-950/70 border-b border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Showroom Quality Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance">
            {WHY_CHOOSE_US.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {WHY_CHOOSE_US.intro}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {pillarIcons[idx]}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-mono text-slate-500">Ace Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Baldwin County & Orange Beach Trust Anchor */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-sky-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold font-display text-white">
              Proudly Serving Orange Beach & Baldwin County, AL
            </h4>
            <p className="text-sm text-slate-400 max-w-2xl">
              Fully licensed, bonded, and insured. We bring professional detailing accessible to your waterfront slip, residential garage, or hangar without ever sacrificing quality or attention to detail.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/20 active:scale-[0.98] transition-all whitespace-nowrap"
          >
            Book an Appointment
          </button>
        </div>

      </div>
    </section>
  );
};
