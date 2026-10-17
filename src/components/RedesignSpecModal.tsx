import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Palette, 
  Type, 
  Layout, 
  Layers, 
  Component, 
  Sparkles, 
  Smartphone, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { REDESIGN_PLAN_DATA } from '../data/redesignPlan';

interface RedesignSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RedesignSpecModal: React.FC<RedesignSpecModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<
    'direction' | 'colors' | 'typography' | 'layout' | 'sections' | 'components' | 'ux'
  >('direction');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySpec = () => {
    navigator.clipboard.writeText(JSON.stringify(REDESIGN_PLAN_DATA, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-display text-white">
                Ace Mobile Detailing — Complete UI/UX Redesign Blueprint
              </h2>
              <p className="text-xs text-slate-400">
                Architectural specification, design tokens, section roadmap & conversion strategy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySpec}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copied ? 'Spec Copied' : 'Export JSON Tokens'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close specification modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Spec Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 py-2 border-b border-slate-800 bg-slate-950/30 overflow-x-auto no-scrollbar text-xs font-medium">
          <button
            onClick={() => setActiveTab('direction')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'direction' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design Direction</span>
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'colors' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Color System</span>
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'typography' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography</span>
          </button>
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'layout' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Layout & Grid</span>
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'sections' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Section Roadmap</span>
          </button>
          <button
            onClick={() => setActiveTab('components')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'components' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Component className="w-3.5 h-3.5" />
            <span>UI Components</span>
          </button>
          <button
            onClick={() => setActiveTab('ux')}
            className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'ux' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>UX & Microinteractions</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* TAB 1: DESIGN DIRECTION */}
          {activeTab === 'direction' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">Core Concept</span>
                <h3 className="text-xl font-bold font-display text-white">
                  {REDESIGN_PLAN_DATA.metadata.concept}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The original <span className="font-mono text-sky-300">acedetailing.pro</span> contained exceptional craftsmanship and thorough service packages, but suffered from generic white block layouts, low typography contrast, uninspired tables, and lack of visual drama for high-ticket marine, aviation, and RV clients. Our redesign establishes an authoritative, luxury AeroMarine digital presence that commands premium pricing while preserving 100% of the original copy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Visual Style & Mood</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {REDESIGN_PLAN_DATA.overallDesignDirection.moodAndAesthetic}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Design Personality</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {REDESIGN_PLAN_DATA.overallDesignDirection.designPersonality}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Benchmark Inspirations</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {REDESIGN_PLAN_DATA.overallDesignDirection.modernUiInspiration}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Anti-Slop Discipline</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {REDESIGN_PLAN_DATA.overallDesignDirection.guidingPrinciple}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COLOR SYSTEM */}
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold font-display text-white mb-3">60-30-10 Color Architecture</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Strict allocation rule prevents visual clutter. 60% dominant neutral obsidian canvas, 30% structural deep navy surfaces, 10% high-intent sky cyan accent strictly for CTAs and active states.
                </p>
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Primary */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="h-16 rounded-lg bg-sky-500 shadow-inner flex items-end p-2 text-white font-mono text-xs font-bold">
                    #0284C7
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{REDESIGN_PLAN_DATA.colorSystem.primary.name}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{REDESIGN_PLAN_DATA.colorSystem.primary.usage}</p>
                  </div>
                </div>

                {/* Secondary */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="h-16 rounded-lg bg-sky-700 shadow-inner flex items-end p-2 text-white font-mono text-xs font-bold">
                    #0369A1
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{REDESIGN_PLAN_DATA.colorSystem.secondary.name}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{REDESIGN_PLAN_DATA.colorSystem.secondary.usage}</p>
                  </div>
                </div>

                {/* Cyan Glow Accent */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="h-16 rounded-lg bg-sky-400 shadow-inner flex items-end p-2 text-slate-950 font-mono text-xs font-bold">
                    #38BDF8
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Cyan Glow Accent</p>
                    <p className="text-[11px] text-slate-400 mt-1">Hover glows, tabular highlights, focus rings</p>
                  </div>
                </div>

                {/* Canvas */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="h-16 rounded-lg bg-[#030712] border border-slate-700 shadow-inner flex items-end p-2 text-slate-300 font-mono text-xs font-bold">
                    #030712
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Dominant Canvas (60%)</p>
                    <p className="text-[11px] text-slate-400 mt-1">Obsidian Night backdrop reducing eye fatigue</p>
                  </div>
                </div>

                {/* Surface */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="h-16 rounded-lg bg-[#0B132B] border border-slate-700 shadow-inner flex items-end p-2 text-slate-300 font-mono text-xs font-bold">
                    #0B132B
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Structural Surface (30%)</p>
                    <p className="text-[11px] text-slate-400 mt-1">Deep marine slate with 1px translucent border</p>
                  </div>
                </div>

                {/* Text Crisp */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="h-16 rounded-lg bg-[#F8FAFC] border border-slate-700 shadow-inner flex items-end p-2 text-slate-900 font-mono text-xs font-bold">
                    #F8FAFC
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">High Contrast Text</p>
                    <p className="text-[11px] text-slate-400 mt-1">Crisp white yielding WCAG AAA contrast ratio &gt; 12:1</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold font-display text-white">The 2+1 Typographic Formula</h3>
                <p className="text-xs text-slate-400">
                  Strictly pairing 1 expressive geometric display face (Outfit) for brand authority, 1 hyper-legible body face (Plus Jakarta Sans) for effortless scanning, and 1 tabular monospace system for pricing.
                </p>
              </div>

              <div className="space-y-4">
                {REDESIGN_PLAN_DATA.typographySystem.hierarchy.map((lvl) => (
                  <div key={lvl.level} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-sky-400 font-mono">{lvl.level}</span>
                      <p className="text-base font-display text-white">{lvl.level.includes('Hero') ? 'Top-Rated Auto Detailing' : 'Expert Marine & Aviation Detailing'}</p>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 space-y-0.5 sm:text-right">
                      <div>Size: <span className="text-slate-200">{lvl.size}</span></div>
                      <div>Weight: <span className="text-slate-200">{lvl.weight}</span> · Line: <span className="text-slate-200">{lvl.lineHeight}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LAYOUT & GRID */}
          {activeTab === 'layout' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold font-display text-white">12-Column Responsive Layout Architecture</h3>
                <p className="text-xs text-slate-400">
                  Engineered for 1440px desktop baselines, down to fluid mobile touch viewports with zero horizontal overflow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Grid System</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.layoutAndStructure.gridSystem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Section Spacing</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.layoutAndStructure.sectionSpacing}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Container Geometry</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.layoutAndStructure.containerWidth}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Layout Style</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.layoutAndStructure.layoutStyle}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SECTIONS */}
          {activeTab === 'sections' && (
            <div className="space-y-4">
              <div className="space-y-1 mb-4">
                <h3 className="text-base font-bold font-display text-white">Section-by-Section Redesign Roadmap</h3>
                <p className="text-xs text-slate-400">
                  Comprehensive breakdown of all sections with exact layout, visual hierarchy, and CTA placement.
                </p>
              </div>

              <div className="space-y-3">
                {REDESIGN_PLAN_DATA.sectionBySection.map((sec) => (
                  <div key={sec.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold font-display text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <span>{sec.title}</span>
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {sec.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">{sec.summary}</p>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                      {sec.content.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: COMPONENTS */}
          {activeTab === 'components' && (
            <div className="space-y-6">
              <div className="space-y-1 mb-4">
                <h3 className="text-base font-bold font-display text-white">UI Component Style Guide</h3>
                <p className="text-xs text-slate-400">
                  Standardized UI component specifications enforcing zero-pill discipline and single-elevation depth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Buttons</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.uiComponentStyleGuide.buttons}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Cards & Panels</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.uiComponentStyleGuide.cards}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Forms & Inputs</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.uiComponentStyleGuide.forms}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-mono text-sky-400 font-bold uppercase">Sliders & Range Controls</span>
                  <p className="text-slate-300">{REDESIGN_PLAN_DATA.uiComponentStyleGuide.sliders}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: UX & MICROINTERACTIONS */}
          {activeTab === 'ux' && (
            <div className="space-y-6">
              <div className="space-y-1 mb-4">
                <h3 className="text-base font-bold font-display text-white">Modern UX Improvements & Microinteractions</h3>
                <p className="text-xs text-slate-400">
                  Engineered for maximum lead conversion, frictionless mobile calling, and transparent pricing confidence.
                </p>
              </div>

              <ul className="space-y-3">
                {REDESIGN_PLAN_DATA.modernUxImprovements.map((ux, i) => (
                  <li key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                    <Check className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>{ux}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono">
            Redesign spec ready for AI website builders, Figma, and React engineering.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors"
          >
            Close Spec Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
