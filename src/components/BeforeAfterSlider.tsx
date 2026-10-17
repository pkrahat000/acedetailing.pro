import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { IMAGES } from '../data/websiteContent';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Interactive Visual Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            See the Ace Precision Transformation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Drag the divider to compare dull oxidized clearcoat with our multi-stage paint correction and ceramic barrier.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 select-none cursor-ew-resize shadow-2xl"
          >
            {/* "After" Image (Background - Clean & Polished Ceramic Reflection from PDF) */}
            <img
              src={IMAGES.ceramicSilverado}
              alt="After paint correction and ceramic coating application from PDF"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-sky-500/30 text-sky-300 text-xs font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AFTER: Showroom Ceramic Glass Finish</span>
            </div>

            {/* "Before" Image (Clipped Left Side - Dull / Swirled) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={IMAGES.autoHero}
                alt="Before detailing with minor oxidation and wear"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter brightness-75 contrast-90 sepia-[0.15]"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 text-xs font-semibold">
                <span>BEFORE: Swirl Marks & Oxidation</span>
              </div>
            </div>

            {/* Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-white flex items-center justify-center text-white shadow-xl">
                <MoveHorizontal className="w-4 h-4 text-sky-400" />
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            Touch or click & drag slider across image · Real multi-stage compound & ceramic shield finish
          </p>
        </div>

      </div>
    </section>
  );
};
