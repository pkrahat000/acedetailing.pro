import React, { useState } from 'react';
import { Check, Sparkles, Calculator, HelpCircle, ArrowRight } from 'lucide-react';
import { AUTO_PRICING, BOAT_PRICING, RV_PRICING } from '../data/websiteContent';
import { ServiceCategory } from '../types';

interface PricingCalculatorProps {
  onOpenBooking: (packageId?: string) => void;
  defaultSector?: ServiceCategory;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onOpenBooking,
  defaultSector = 'auto',
}) => {
  // Main sector tab: auto, boat, rv, or commercial
  const [activeSector, setActiveSector] = useState<'auto' | 'boat' | 'rv'>(
    defaultSector === 'boat' ? 'boat' : defaultSector === 'rv' ? 'rv' : 'auto'
  );

  // Sub-tabs
  const [autoSubtype, setAutoSubtype] = useState<'2doors' | '4doors' | 'truck_suv'>('4doors');
  const [boatSubtype, setBoatSubtype] = useState<'pontoon' | 'center_console' | 'cabin_cruiser' | 'yacht'>('center_console');
  const [boatLength, setBoatLength] = useState<number>(26);

  const [rvSubtype, setRvSubtype] = useState<'camper' | 'fifth_wheel' | 'motorhome'>('motorhome');
  const [rvLength, setRvLength] = useState<number>(32);

  return (
    <section id="pricing" className="py-24 lg:py-36 bg-[#08090d] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Generous Whitespace */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Transparent Detailing Rates
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white text-balance leading-tight">
            Clear, Direct Detailing Rates
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed pt-1">
            No hidden fees or unexpected charges. Select your vehicle discipline, size, or length to view exact packages and request mobile scheduling across Baldwin County.
          </p>
        </div>

        {/* Primary Sector Tabs */}
        <div className="flex justify-start sm:justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <button
              onClick={() => setActiveSector('auto')}
              className={`px-5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeSector === 'auto'
                  ? 'bg-white text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Auto Detailing
            </button>
            <button
              onClick={() => setActiveSector('boat')}
              className={`px-5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeSector === 'boat'
                  ? 'bg-white text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Boat / Marine
            </button>
            <button
              onClick={() => setActiveSector('rv')}
              className={`px-5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                activeSector === 'rv'
                  ? 'bg-white text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RV / Camper
            </button>
          </div>
        </div>

        {/* 1. AUTO DETAILING PRICING VIEW */}
        {activeSector === 'auto' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Sub-selector for body style */}
            <div className="flex justify-start sm:justify-center">
              <div className="inline-flex gap-1 p-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs">
                <button
                  onClick={() => setAutoSubtype('2doors')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-colors ${
                    autoSubtype === '2doors' ? 'bg-white/10 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  2 Doors (Coupe / Roadster)
                </button>
                <button
                  onClick={() => setAutoSubtype('4doors')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-colors ${
                    autoSubtype === '4doors' ? 'bg-white/10 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  4 Doors (Sedan / Wagon)
                </button>
                <button
                  onClick={() => setAutoSubtype('truck_suv')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-colors ${
                    autoSubtype === 'truck_suv' ? 'bg-white/10 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Truck / Full SUV / Van
                </button>
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {AUTO_PRICING[autoSubtype].map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-xl p-7 flex flex-col justify-between border transition-colors ${
                    pkg.popular
                      ? 'bg-[#10141f] border-white/30 shadow-xl'
                      : 'bg-[#0d0f16] border-white/[0.07] hover:border-white/20'
                  }`}
                >
                  <div className="space-y-5">
                    <div>
                      {pkg.popular && (
                        <p className="text-[10px] uppercase font-mono tracking-wider font-semibold text-sky-400 mb-1">
                          Featured Package
                        </p>
                      )}
                      <h3 className="text-lg font-bold font-display text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 min-h-[36px] leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-3 pb-3 border-y border-white/[0.06]">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
                          {pkg.priceDisplay}
                        </span>
                        {!pkg.isQuoteOnly && (
                          <span className="text-xs text-slate-400 font-sans">/ vehicle</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-slate-500 font-bold" aria-hidden="true">—</span>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onOpenBooking(`auto-${pkg.id}`)}
                      className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                        pkg.popular
                          ? 'bg-white hover:bg-slate-200 text-slate-950'
                          : 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.08]'
                      }`}
                    >
                      {pkg.isQuoteOnly ? 'Request Quote' : 'Book Package'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. BOAT DETAILING PRICING VIEW */}
        {activeSector === 'boat' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Sub-selector for boat hull */}
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                <button
                  onClick={() => setBoatSubtype('pontoon')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    boatSubtype === 'pontoon' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Pontoon
                </button>
                <button
                  onClick={() => setBoatSubtype('center_console')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    boatSubtype === 'center_console' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Center Console
                </button>
                <button
                  onClick={() => setBoatSubtype('cabin_cruiser')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    boatSubtype === 'cabin_cruiser' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Cabin Cruiser
                </button>
                <button
                  onClick={() => setBoatSubtype('yacht')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    boatSubtype === 'yacht' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Yacht / Offshore
                </button>
              </div>
            </div>

            {/* Interactive Length Estimator Slider */}
            <div className="max-w-xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="boat-length-slider" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Select Vessel Length (Feet)
                </label>
                <span className="text-xl font-bold font-mono text-sky-400">
                  {boatLength} FT
                </span>
              </div>
              <input
                id="boat-length-slider"
                type="range"
                min="18"
                max="60"
                step="1"
                value={boatLength}
                onChange={(e) => setBoatLength(parseInt(e.target.value, 10))}
                className="w-full accent-sky-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                aria-label="Boat length in feet"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>18 ft</span>
                <span>35 ft</span>
                <span>60 ft</span>
              </div>
            </div>

            {/* Boat Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {BOAT_PRICING[boatSubtype].map((pkg) => {
                const totalCost = pkg.priceNumeric ? pkg.priceNumeric * boatLength : null;
                return (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-7 flex flex-col justify-between border transition-all duration-300 relative ${
                      pkg.popular
                        ? 'bg-slate-900 border-sky-500 shadow-xl shadow-sky-500/10'
                        : 'bg-slate-900/60 border-white/10 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold font-display text-white">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="py-3 border-y border-slate-800 space-y-1">
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-extrabold font-mono text-white">
                            {pkg.priceDisplay}
                          </span>
                          {totalCost && (
                            <span className="text-xs text-slate-400 font-mono">
                              Est. Total ({boatLength}ft)
                            </span>
                          )}
                        </div>
                        {totalCost && (
                          <div className="text-2xl font-black font-mono text-sky-400">
                            ${totalCost.toLocaleString()}
                          </div>
                        )}
                      </div>

                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => onOpenBooking(`boat-${pkg.id}`)}
                        className={`w-full py-3 rounded-lg text-xs font-semibold transition-all ${
                          pkg.popular
                            ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-md'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {pkg.isQuoteOnly ? 'Request Marine Quote' : `Book for ${boatLength}ft Vessel`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. RV DETAILING PRICING VIEW */}
        {activeSector === 'rv' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Sub-selector for RV category */}
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                <button
                  onClick={() => setRvSubtype('camper')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    rvSubtype === 'camper' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Camper / Travel Trailer
                </button>
                <button
                  onClick={() => setRvSubtype('fifth_wheel')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    rvSubtype === 'fifth_wheel' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  5th Wheel
                </button>
                <button
                  onClick={() => setRvSubtype('motorhome')}
                  className={`px-4 py-1.5 rounded-md font-medium transition-all ${
                    rvSubtype === 'motorhome' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Motorhome (Class A/B/C)
                </button>
              </div>
            </div>

            {/* Interactive RV Length Slider */}
            <div className="max-w-xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="rv-length-slider" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Select RV Length (Feet)
                </label>
                <span className="text-xl font-bold font-mono text-sky-400">
                  {rvLength} FT
                </span>
              </div>
              <input
                id="rv-length-slider"
                type="range"
                min="16"
                max="45"
                step="1"
                value={rvLength}
                onChange={(e) => setRvLength(parseInt(e.target.value, 10))}
                className="w-full accent-sky-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                aria-label="RV length in feet"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>16 ft</span>
                <span>30 ft</span>
                <span>45 ft</span>
              </div>
            </div>

            {/* RV Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {RV_PRICING[rvSubtype].map((pkg) => {
                const totalCost = pkg.priceNumeric ? pkg.priceNumeric * rvLength : null;
                return (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-7 flex flex-col justify-between border transition-all duration-300 relative ${
                      pkg.popular
                        ? 'bg-slate-900 border-sky-500 shadow-xl shadow-sky-500/10'
                        : 'bg-slate-900/60 border-white/10 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold font-display text-white">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="py-3 border-y border-slate-800 space-y-1">
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-extrabold font-mono text-white">
                            {pkg.priceDisplay}
                          </span>
                          {totalCost && (
                            <span className="text-xs text-slate-400 font-mono">
                              Est. Total ({rvLength}ft)
                            </span>
                          )}
                        </div>
                        {totalCost && (
                          <div className="text-2xl font-black font-mono text-sky-400">
                            ${totalCost.toLocaleString()}
                          </div>
                        )}
                      </div>

                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => onOpenBooking(`rv-${pkg.id}`)}
                        className={`w-full py-3 rounded-lg text-xs font-semibold transition-all ${
                          pkg.popular
                            ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-md'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {pkg.isQuoteOnly ? 'Request Oxidation Quote' : `Book for ${rvLength}ft RV`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pricing Guarantee Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Need custom aircraft detailing or commercial fleet rates? </span>
          <button
            onClick={() => onOpenBooking('custom-quote')}
            className="text-sky-400 hover:underline font-semibold"
          >
            Request a Free Custom Evaluation & Quote →
          </button>
        </div>

      </div>
    </section>
  );
};
