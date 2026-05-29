"use client";

import { useMemo } from "react";

export default function Brands() {
  const brandsData = useMemo(() => [
    {
      name: "Hafele",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-[#D32F2F]" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="900" fontSize="20" letterSpacing="1.5">HÄFELE</text>
        </svg>
      )
    },
    {
      name: "Hettich",
      logo: (
        <svg className="h-7 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-blue-900" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="serif, Times, Georgia" fontWeight="bold" fontStyle="italic" fontSize="24">Hettich</text>
        </svg>
      )
    },
    {
      name: "Ebco",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-gray-950" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="24" letterSpacing="-1">ebco</text>
          <circle cx="58" cy="8" r="3.5" className="fill-slate-400 group-hover:fill-[#E53935] transition-colors duration-300" />
        </svg>
      )
    },
    {
      name: "Faber",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-gray-900" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="4" width="18" height="18" rx="3" className="fill-slate-400 group-hover:fill-[#E53935] transition-colors duration-300" />
          <path d="M5 13 L13 13 M9 9 L9 17" stroke="white" strokeWidth="2" />
          <text x="26" y="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="18" letterSpacing="1">FABER</text>
        </svg>
      )
    },
    {
      name: "Godrej",
      logo: (
        <svg className="h-7 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-[#005A9C]" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="bold" fontStyle="italic" fontSize="24">Godrej</text>
        </svg>
      )
    },
    {
      name: "Fevicol",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-blue-800" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18 C6 10, 16 10, 20 13 C16 9, 8 9, 3 13" className="fill-slate-400 group-hover:fill-[#1565C0] transition-colors duration-300" />
          <text x="26" y="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="950" fontSize="18" letterSpacing="0.5">FEVICOL</text>
        </svg>
      )
    },
    {
      name: "Europa",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-gray-900" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="20" letterSpacing="1.5">EUROPA</text>
        </svg>
      )
    },
    {
      name: "Ajax",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-amber-800" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="22" letterSpacing="1.5">AJAX</text>
        </svg>
      )
    },
    {
      name: "Sleek",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-gray-900" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="22" letterSpacing="1">sleek</text>
          <circle cx="58" cy="18" r="2.5" className="fill-slate-400 group-hover:fill-[#E53935] transition-colors duration-300" />
        </svg>
      )
    },
    {
      name: "Magnum",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-[#8E7044]" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <polygon points="2,18 4,10 7,14 10,10 12,18" className="fill-slate-400 group-hover:fill-[#8E7044] transition-colors duration-300" />
          <text x="18" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">MAGNUM</text>
        </svg>
      )
    },
    {
      name: "Royalmax",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-[#B5945B]" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <polygon points="2,14 5,8 8,11 11,8 14,14" className="fill-slate-400 group-hover:fill-[#B5945B] transition-colors duration-300" />
          <text x="20" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="16" letterSpacing="0.5">ROYALMAX</text>
        </svg>
      )
    },
    {
      name: "Archis",
      logo: (
        <svg className="h-6 w-auto transition-colors duration-300 fill-current text-slate-400 group-hover:text-gray-900" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="20" letterSpacing="2">ARCHIS</text>
        </svg>
      )
    }
  ], []);

  const scrollBrands = useMemo(() => [...brandsData, ...brandsData, ...brandsData], [brandsData]);

  return (
    <section id="brands" className="py-20 bg-white border-y border-black/5 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-heading font-bold text-accent-gold mb-3 block">
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
              key={`forward-${brand.name}-${idx}`}
              className="flex items-center justify-center px-10 py-5 bg-bg-main border border-black/5 hover:border-accent-gold/30 hover:bg-white rounded-xl shadow-sm transition-all duration-300 group min-w-[200px]"
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Reverse Scroll */}
        <div className="flex w-max gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
          {scrollBrands.map((brand, idx) => (
            <div
              key={`reverse-${brand.name}-${idx}`}
              className="flex items-center justify-center px-10 py-5 bg-bg-main border border-black/5 hover:border-accent-gold/30 hover:bg-white rounded-xl shadow-sm transition-all duration-300 group min-w-[200px]"
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade Overlays on sides for cinematic transition */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
