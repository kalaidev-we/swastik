"use client";

import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    "Hafele",
    "Hettich",
    "Ebco",
    "Faber",
    "Godrej",
    "Fevicol",
    "Europa",
    "Ajax",
    "Sleek",
    "Magnum",
    "Royalmax",
    "Archis",
  ];

  // Duplicate the brand list to ensure continuous scrolling
  const scrollBrands = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="py-20 bg-bg-main/50 border-y border-white/5 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-accent-gold mb-3 block">
          Partners
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-text-main">
          Trusted Premium Brands
        </h2>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative flex flex-col gap-6 select-none pointer-events-auto">
        {/* Row 1 - Forward Scroll */}
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {scrollBrands.map((brand, idx) => (
            <div
              key={`forward-${brand}-${idx}`}
              className="flex items-center justify-center px-10 py-5 bg-bg-card border border-white/5 hover:border-accent-gold/30 rounded-sm shadow-md transition-all duration-300 group min-w-[200px]"
            >
              <span className="text-lg md:text-xl font-heading uppercase font-bold tracking-widest text-text-muted group-hover:text-accent-gold transition-colors duration-300 group-hover:scale-105 transform">
                {brand}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - Reverse Scroll */}
        <div className="flex w-max gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
          {scrollBrands.map((brand, idx) => (
            <div
              key={`reverse-${brand}-${idx}`}
              className="flex items-center justify-center px-10 py-5 bg-bg-card border border-white/5 hover:border-accent-gold/30 rounded-sm shadow-md transition-all duration-300 group min-w-[200px]"
            >
              <span className="text-lg md:text-xl font-heading uppercase font-bold tracking-widest text-text-muted group-hover:text-accent-gold transition-colors duration-300 group-hover:scale-105 transform">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fade Overlays on sides for cinematic transition */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />
    </section>
  );
}
