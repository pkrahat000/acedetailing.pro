import React from 'react';
import { Phone, ShieldCheck, MapPin, FileCode2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteContent';

interface AnnouncementBarProps {
  onOpenSpecModal?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenSpecModal }) => {
  return (
    <div className="bg-[#0b0d13] border-b border-white/[0.06] text-xs text-slate-400 py-2.5 px-6 select-none relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-slate-300 font-medium">Licensed, Bonded & Insured</span>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-slate-400">Orange Beach & Baldwin County, AL</span>
        </div>

        <div className="flex items-center gap-5 ml-auto">
          <span className="hidden md:inline text-slate-500">Mobile On-Site Service</span>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-sky-400" />
            <span className="font-medium tracking-wide tabular-nums">{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
