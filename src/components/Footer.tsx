import React from 'react';
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Facebook,
  Instagram,
  Star
} from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/websiteContent';
import { ServiceCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ServiceCategory) => void;
  onOpenBooking: () => void;
  onOpenSpecModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenBooking,
  onOpenSpecModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList: { id: ServiceCategory; label: string }[] = [
    { id: 'auto', label: 'Auto Detailing' },
    { id: 'boat', label: 'Boat Detailing' },
    { id: 'ceramic', label: 'Ceramic Coating' },
    { id: 'fleet', label: 'Fleet Detailing' },
    { id: 'rv', label: 'RV/Camper Detailing' },
    { id: 'aircraft', label: 'Aircraft Detailing' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info & Mascot Icon */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={IMAGES.logo}
                alt="Ace Mobile Detailing Bulldog Mascot"
                className="w-14 h-14 object-contain rounded-full border border-sky-400/40 shadow-lg shadow-sky-500/20"
              />
              <div>
                <span className="text-xl font-extrabold font-display tracking-tight text-white block">
                  ACE MOBILE DETAILING
                </span>
                <span className="text-xs uppercase tracking-widest text-sky-400 font-mono">
                  Orange Beach, AL
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}. We deliver showroom-quality detailing for exotic cars, sportfish yachts, Class A motorhomes, private aircraft, and commercial fleets across Baldwin County, AL.
            </p>

            {/* Social Icons matching original PDF */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400"
                title="5-Star Verified Google & Yelp Rating"
              >
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          {/* Column 2: Exact Services from PDF */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(service.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors text-slate-400 text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Service Area */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-white">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold tabular-nums">{COMPANY_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Serving Orange Beach, Gulf Shores, Foley, Fairhope & Baldwin County, AL</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed · Bonded · Insured</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSpecModal}
                className="text-xs text-sky-400 hover:underline flex items-center gap-1.5"
              >
                <span>Explore Redesign Architectural Specification</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top button */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            {COMPANY_INFO.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Back to Top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
