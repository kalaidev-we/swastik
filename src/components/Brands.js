"use client";

import { useMemo } from "react";
import Image from "next/image";

// Import all 36 brand WebP images statically
import brand1 from "./assets/brand (1).webp";
import brand2 from "./assets/brand (2).webp";
import brand3 from "./assets/brand (3).webp";
import brand4 from "./assets/brand (4).webp";
import brand5 from "./assets/brand (5).webp";
import brand6 from "./assets/brand (6).webp";
import brand7 from "./assets/brand (7).webp";
import brand8 from "./assets/brand (8).webp";
import brand9 from "./assets/brand (9).webp";
import brand10 from "./assets/brand (10).webp";
import brand11 from "./assets/brand (11).webp";
import brand12 from "./assets/brand (12).webp";
import brand13 from "./assets/brand (13).webp";
import brand14 from "./assets/brand (14).webp";
import brand15 from "./assets/brand (15).webp";
import brand16 from "./assets/brand (16).webp";
import brand17 from "./assets/brand (17).webp";
import brand18 from "./assets/brand (18).webp";
import brand19 from "./assets/brand (19).webp";
import brand20 from "./assets/brand (20).webp";
import brand21 from "./assets/brand (21).webp";
import brand22 from "./assets/brand (22).webp";
import brand23 from "./assets/brand (23).webp";
import brand24 from "./assets/brand (24).webp";
import brand25 from "./assets/brand (25).webp";
import brand26 from "./assets/brand (26).webp";
import brand27 from "./assets/brand (27).webp";
import brand28 from "./assets/brand (28).webp";
import brand29 from "./assets/brand (29).webp";
import brand30 from "./assets/brand (30).webp";
import brand31 from "./assets/brand (31).webp";
import brand32 from "./assets/brand (32).webp";
import brand33 from "./assets/brand (33).webp";
import brand34 from "./assets/brand (34).webp";
import brand35 from "./assets/brand (35).webp";
import brand36 from "./assets/brand (36).webp";

export default function Brands() {
  const brandImages = useMemo(() => [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10,
    brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20,
    brand21, brand22, brand23, brand24, brand25, brand26, brand27, brand28, brand29, brand30,
    brand31, brand32, brand33, brand34, brand35, brand36
  ], []);

  // Duplicate list to ensure smooth infinite loop scroll
  const scrollBrands = useMemo(() => [...brandImages, ...brandImages, ...brandImages], [brandImages]);

  return (
    <section id="brands" className="py-24 bg-bg-main overflow-hidden relative border-y border-black/5">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-sheet opacity-40 pointer-events-none" />

      {/* Decorative Top Safety Stripes */}
      <div className="h-1.5 w-full safety-stripes opacity-80 relative z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 my-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-accent-gold mb-3 block">
          Authorized Sourcing Directory
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-main">
          30+ Premium Hardware Brands <span className="text-accent-gold">Direct Partner Sourcing</span>
        </h2>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed font-body">
          We source directly from leading architectural brands to guarantee 100% genuine products, full warranties, and bulk order discounts for your projects.
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative flex flex-col gap-8 select-none pointer-events-auto z-10 py-4">
        {/* Row 1 - Forward Scroll */}
        <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
          {scrollBrands.slice(0, 54).map((brand, idx) => (
            <div
              key={`f-${idx}`}
              className="flex items-center justify-center px-8 py-5 bg-white steel-embossed hover:border-accent-gold/50 rounded-xl transition-all duration-300 group min-w-[180px] h-[90px] relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 clickable"
            >
              {/* corner rivets for tactile detail */}
              <span className="rivet absolute top-1.5 left-1.5" />
              <span className="rivet absolute top-1.5 right-1.5" />
              <span className="rivet absolute bottom-1.5 left-1.5" />
              <span className="rivet absolute bottom-1.5 right-1.5" />

              <div className="transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full h-full">
                <Image
                  src={brand}
                  alt="Swastik Hardware Partner Logo"
                  className="max-h-[50px] w-auto max-w-[140px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Reverse Scroll */}
        <div className="flex w-max gap-8 animate-marquee-reverse hover:[animation-play-state:paused]">
          {scrollBrands.slice(54).map((brand, idx) => (
            <div
              key={`r-${idx}`}
              className="flex items-center justify-center px-8 py-5 bg-white steel-embossed hover:border-accent-gold/50 rounded-xl transition-all duration-300 group min-w-[180px] h-[90px] relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 clickable"
            >
              {/* corner rivets for tactile detail */}
              <span className="rivet absolute top-1.5 left-1.5" />
              <span className="rivet absolute top-1.5 right-1.5" />
              <span className="rivet absolute bottom-1.5 left-1.5" />
              <span className="rivet absolute bottom-1.5 right-1.5" />

              <div className="transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full h-full">
                <Image
                  src={brand}
                  alt="Swastik Hardware Partner Logo"
                  className="max-h-[50px] w-auto max-w-[140px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Safety Stripes */}
      <div className="h-1.5 w-full safety-stripes opacity-80 mt-12 relative z-10" />

      {/* Fade Overlays on sides for cinematic transition */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-main to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-main to-transparent z-20 pointer-events-none" />
    </section>
  );
}
