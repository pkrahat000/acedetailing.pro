import React, { useState } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/websiteContent';
import { ServiceCategory } from '../types';

interface NavbarProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onOpenBooking: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single line, single element) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 text-slate-100 hover:text-white group whitespace-nowrap shrink-0"
          >
            <img
              src={IMAGES.logo}
              alt="Ace Mobile Detailing Bulldog Mascot"
              className="w-10 h-10 object-contain rounded-full border border-white/10"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight font-display text-white">
                ACE MOBILE DETAILING
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                Orange Beach, AL
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
              <span className="tabular-nums">{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Book an Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-sky-500 rounded-lg whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Navigation</p>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Service Sectors</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <button onClick={() => { onSelectCategory('auto'); setMobileMenuOpen(false); }} className={`p-2 rounded text-left ${activeCategory === 'auto' ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-800'}`}>Auto Detailing</button>
              <button onClick={() => { onSelectCategory('boat'); setMobileMenuOpen(false); }} className={`p-2 rounded text-left ${activeCategory === 'boat' ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-800'}`}>Boat Detailing</button>
              <button onClick={() => { onSelectCategory('rv'); setMobileMenuOpen(false); }} className={`p-2 rounded text-left ${activeCategory === 'rv' ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-800'}`}>RV Detailing</button>
              <button onClick={() => { onSelectCategory('aircraft'); setMobileMenuOpen(false); }} className={`p-2 rounded text-left ${activeCategory === 'aircraft' ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-800'}`}>Aircraft Detailing</button>
              <button onClick={() => { onSelectCategory('ceramic'); setMobileMenuOpen(false); }} className={`p-2 rounded text-left ${activeCategory === 'ceramic' ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-800'}`}>Ceramic Coating</button>
              <button onClick={() => { onSelectCategory('fleet'); setMobileMenuOpen(false); }} className={`p-2 rounded text-left ${activeCategory === 'fleet' ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-800'}`}>Fleet Washing</button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-800 text-slate-200 font-semibold text-sm"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-md"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
