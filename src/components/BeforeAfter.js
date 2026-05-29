"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleStart = () => {
    isDragging.current = true;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-heading font-bold text-accent-gold mb-3">
            Hardware Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-main">
            Before / After <span className="gold-gradient-text">Showcase</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            Drag the divider to see the dramatic visual difference that premium locks, modular drawer slides, and gold hardware finishes make in raw spaces.
          </p>
        </div>

        {/* Interactive Slider Box (Rounded card style) */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            onMouseUp={handleEnd}
            onTouchEnd={handleEnd}
            className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden border border-black/5 shadow-xl cursor-ew-resize select-none"
          >
            
            {/* 1. BEFORE LAYER: Grayscale Version */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <img
                src="/gallery_kitchen.png"
                alt="Before Installation"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 select-none"
              />
              <span className="absolute top-4 left-4 bg-black/65 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white">
                Unfinished Space
              </span>
            </div>

            {/* 2. AFTER LAYER: Full Color Version (clipped) */}
            <div
              className="absolute inset-0 z-20 pointer-events-none transition-all duration-75 ease-out"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src="/gallery_kitchen.png"
                alt="After Installation"
                className="w-full h-full object-cover select-none"
              />
              <span className="absolute top-4 right-4 bg-text-main text-white px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-sm">
                Swastik Premium Fit
              </span>
            </div>

            {/* 3. SLIDER LINE & HANDLE */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-text-main/80 hover:bg-text-main transition-colors duration-75 ease-out"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-text-main border border-white flex items-center justify-center shadow-lg cursor-ew-resize">
                <div className="flex gap-1 justify-center items-center">
                  <span className="w-1 h-3 bg-white rounded-full" />
                  <span className="w-1 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
