import React from 'react';
import { AlertCircle, Droplets, Sparkles, Sun, ShieldAlert, ArrowRight } from 'lucide-react';
import { SIGNS_WHEN_YOU_NEED_DETAILING } from '../data/websiteContent';

interface SignsWhenYouNeedProps {
  onOpenBooking: () => void;
}

export const SignsWhenYouNeed: React.FC<SignsWhenYouNeedProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 lg:py-36 bg-[#08090d] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Generous Whitespace */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Surface Diagnostics
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance leading-tight">
            When Do You Need Detailing Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed pt-1">
            Ace Detailing Pro understands that detailing is not just a luxury; it’s necessary to maintain and enhance the longevity and appearance of your vehicles. Recognize the signs indicating the need for our specialized detailing services.
          </p>
        </div>

        {/* 4 Spacious Diagnostic Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {SIGNS_WHEN_YOU_NEED_DETAILING.map((sign, index) => (
            <div
              key={sign.id}
              className="p-8 rounded-xl bg-[#0d0f16] border border-white/[0.07] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  {sign.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {sign.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                Early intervention prevents permanent clearcoat loss
              </div>
            </div>
          ))}
        </div>

        {/* Quiet, Clean CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 transition-colors"
          >
            <span>Schedule Surface Inspection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
