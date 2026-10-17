import React, { useState } from 'react';
import { Plane, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { AIRCRAFT_PROCESS_STEPS, CERAMIC_PROCESS_STEPS } from '../data/websiteContent';

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  const [activeProcess, setActiveProcess] = useState<'aircraft' | 'ceramic'>('aircraft');

  const currentSteps = activeProcess === 'aircraft' ? AIRCRAFT_PROCESS_STEPS : CERAMIC_PROCESS_STEPS;
  const processTitle = activeProcess === 'aircraft'
    ? 'Our Ace Detailing Pro Process: Protection in 6 Steps'
    : 'Our Ace Detailing Pro Process: Protection in 5 Steps';
  
  const processIntro = activeProcess === 'aircraft'
    ? "Ace Detailing Pro's Aircraft Detailing process goes beyond conventional care, delivering a transformative experience that elevates the brilliance of your aircraft. Explore the 6-step process that sets Ace Detailing Pro apart in the world of aviation detailing:"
    : "We take pride in our meticulous and transformative ceramic coating process. Our 5-step approach ensures that every vehicle receives the attention it deserves, creating a protective layer that goes beyond expectations. Explore the art of protection with Ace Detailing Pro's process:";

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle between Aircraft 6-Step and Ceramic 5-Step Process */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveProcess('aircraft')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeProcess === 'aircraft'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Aviation 6-Step Protocol</span>
            </button>
            <button
              onClick={() => setActiveProcess('ceramic')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeProcess === 'ceramic'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Ceramic 5-Step Shield</span>
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Standard Operating Procedure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance">
            {processTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {processIntro}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/30 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center font-mono font-bold text-sky-400 text-sm">
                    0{step.step}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-sky-400/80 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Verified Inspection Metric</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/20 active:scale-[0.98] transition-all"
          >
            <span>Reserve Multi-Step Detailing Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
