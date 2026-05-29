"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Compass,
  Store,
  Home,
  Layers,
  Briefcase,
  Bath,
  Wrench,
} from "lucide-react";

// Parallax scroll component to shift cards at staggered speeds
function ParallaxCard({ children, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Stagger odd and even columns for parallax effect
  const offset = index % 2 === 0 ? 25 : -25;
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={cardRef} style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
}

export default function Industries() {
  const industries = [
    {
      name: "Construction & Civil Engineering",
      icon: Building2,
      desc: "Supplying bulk heavy-duty architectural fittings and anchors for large projects.",
    },
    {
      name: "Interior Design & Architecture",
      icon: Compass,
      desc: "Premium designer handles, profiles, and smart lock hardware matching modern trends.",
    },
    {
      name: "Retail Hardware & Wholesale Supply",
      icon: Store,
      desc: "Serving dealer networks across Tamil Nadu with fast supply lines and competitive terms.",
    },
    {
      name: "Residential Homes & Apartments",
      icon: Home,
      desc: "Premium domestic lock systems and kitchen modular drawers for comfortable living.",
    },
    {
      name: "Furniture & Plywood Dealers",
      icon: Layers,
      desc: "Supplier of bulk slides, hinges, and edge bands to carpentry workshops.",
    },
    {
      name: "Commercial & Office Projects",
      icon: Briefcase,
      desc: "Panic bars, hydraulic floor springs, and patch fittings for corporate glass doors.",
    },
    {
      name: "Sanitary & Bathroom Retailers",
      icon: Bath,
      desc: "Rust-proof bathroom fittings and architectural glass cubicle systems.",
    },
    {
      name: "Industrial Maintenance & Repair",
      icon: Wrench,
      desc: "High-strength adhesives, fast-bonding sealants, and professional tools.",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-bg-main relative overflow-hidden border-b border-white/5">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-sheet opacity-25 pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-accent-gold mb-3">
            Sectors We Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-main">
            Industries We <span className="gold-gradient-text">Serve</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            Delivering high-end hardware, structural modular solutions, and construction supplies for diverse trade sectors.
          </p>
        </div>

        {/* Grid of Embossed Steel Cards with Parallax Shifting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 py-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <ParallaxCard key={ind.name} index={idx}>
                <div className="steel-embossed hover:border-accent-gold/40 p-6 rounded-2xl flex flex-col justify-between min-h-[220px] group transition-all duration-300 relative select-none">
                  {/* corner rivets */}
                  <span className="rivet absolute top-1.5 left-1.5" />
                  <span className="rivet absolute top-1.5 right-1.5" />
                  <span className="rivet absolute bottom-1.5 left-1.5" />
                  <span className="rivet absolute bottom-1.5 right-1.5" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/20 transition-all duration-300">
                      <Icon className="text-accent-gold group-hover:scale-105 transition-transform" size={20} />
                    </div>
                    <h3 className="text-base md:text-lg font-heading font-bold text-text-main group-hover:text-accent-gold transition-colors duration-300">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted font-light leading-relaxed mt-3 font-body">
                    {ind.desc}
                  </p>
                </div>
              </ParallaxCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
