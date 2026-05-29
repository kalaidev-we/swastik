"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "30+ Years Legacy (Serving since 1991)",
    "Premium Genuine Hardware Brands",
    "Contractor, Architect & Builder Support",
    "Wide Product Inventory (5000+ Items)",
    "Fast Delivery Network Across Tamil Nadu",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient lighting (very soft warm glow) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Image with luxury framing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Outline highlight frame */}
            <div className="absolute -inset-4 border border-black/5 rounded-md -z-10 translate-x-2 translate-y-2 pointer-events-none" />
            
            {/* The Image Container */}
            <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-bg-main border border-black/5 group shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8s] ease-out group-hover:scale-110"
                style={{
                  backgroundImage: "url('/about_details.png')",
                }}
              />
              {/* Overlay shading (light gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-40" />
            </div>

            {/* Micro Floating Card (White background with drop shadow) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-4 -bottom-4 bg-white/95 backdrop-blur-md border border-black/5 p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <h4 className="text-accent-gold text-3xl font-bold font-heading">1991</h4>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Founding year in Erode, delivering trust and hardware excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Legacy Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-heading font-bold text-accent-gold mb-3">
              Our Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6 text-text-main leading-tight">
              Decades of Trusted <br />
              <span className="gold-gradient-text">Hardware Excellence</span>
            </h2>
            
            <div className="text-text-muted space-y-4 font-light text-base md:text-lg leading-relaxed mb-8 font-body">
              <p>
                <strong>Swastik Trading Company – Mr. Locks</strong> is one of the most trusted names in premium architectural hardware and interior solutions in Erode. Established in 1991, we have built our reputation on providing high-quality fittings and accessories that elevate modern spaces.
              </p>
              <p>
                From luxury residences and corporate offices to multi-apartment developments, we work closely with homeowners, builders, architects, and contractors across Tamil Nadu to supply genuine premium hardware tailored to modern aesthetics and durability.
              </p>
            </div>

            {/* Checkmark List */}
            <div className="space-y-3.5">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-text-main"
                >
                  <CheckCircle2 className="text-accent-gold flex-shrink-0" size={18} />
                  <span className="text-sm md:text-base font-heading font-medium tracking-wide text-text-main/90">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
