"use client";

import { motion } from "framer-motion";
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
    <section id="industries" className="py-24 bg-bg-main relative">
      <div className="absolute top-10 left-1/3 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-accent-gold mb-3">
            Sectors We Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-main">
            Industries We <span className="gold-gradient-text">Serve</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed">
            Delivering high-end hardware, structural modular solutions, and construction supplies for diverse trade sectors.
          </p>
        </div>

        {/* Grid of Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="glass-panel hover:glass-panel-glow p-6 rounded-md flex flex-col justify-between min-h-[200px] group transition-all duration-300 relative"
              >
                {/* Micro Border Glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent-gold/20 rounded-md transition-all duration-300" />
                
                <div>
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/30 transition-all duration-300">
                    <Icon className="text-accent-gold group-hover:scale-110 transition-transform" size={22} />
                  </div>
                  <h3 className="text-base md:text-lg font-heading font-bold text-text-main group-hover:text-accent-gold transition-colors duration-300">
                    {ind.name}
                  </h3>
                </div>
                <p className="text-xs text-text-muted font-light leading-relaxed mt-3">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
