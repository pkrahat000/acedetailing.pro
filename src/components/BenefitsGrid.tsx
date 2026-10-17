import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  Sun, 
  TrendingUp, 
  Gauge, 
  Layers 
} from 'lucide-react';
import { BENEFITS_OF_HIRING } from '../data/websiteContent';

export const BenefitsGrid: React.FC = () => {
  const benefitIcons = [
    <ShieldCheck key="1" className="w-5 h-5 text-sky-400" />,
    <Compass key="2" className="w-5 h-5 text-sky-400" />,
    <Sparkles key="3" className="w-5 h-5 text-sky-400" />,
    <Sun key="4" className="w-5 h-5 text-sky-400" />,
    <TrendingUp key="5" className="w-5 h-5 text-sky-400" />,
    <Gauge key="6" className="w-5 h-5 text-sky-400" />,
    <Layers key="7" className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Proven Long-Term Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance">
            Benefits of Hiring Our Detailing Services in Orange Beach, AL
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Investing in expert detailing delivers tangible protection, elevated comfort, and verified asset appreciation in the demanding Gulf Coast marine and road climate.
          </p>
        </div>

        {/* 7 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_OF_HIRING.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between space-y-4 group ${
                index === 6 ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border-sky-500/30' : ''
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {benefitIcons[index % benefitIcons.length]}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Benefit 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-sky-400/80">
                Guaranteed by Ace Detailing Pro
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
