"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ShieldCheck, Award, Box, MapPin } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Years Experience", value: "30+", icon: Award },
    { label: "Premium Products", value: "5000+", icon: Box },
    { label: "Towns Served", value: "15+", icon: MapPin },
    { label: "Hardware Partner", value: "Trusted", icon: ShieldCheck },
  ];

  const handleScrollToProducts = (e) => {
    e.preventDefault();
    const target = document.getElementById("products");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Swastik & Company, I would like to enquire about your products.");
    window.open(`https://wa.me/919363528393?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-main pt-20"
    >
      {/* Background Image with Zoom and clean industrial overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out scale-105"
          style={{
            backgroundImage: "url('/hero_industrial.png')",
          }}
        />
        {/* Dark concrete gradient overlay (Fades left to right from dark charcoal to transparent) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-bg-main via-bg-main/95 to-transparent z-10" />
        {/* Soft bottom lift */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-main to-transparent z-10" />
        {/* Dark overlay for image side (right) to keep text readable */}
        <div className="absolute inset-0 bg-black/25 z-0" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-white/5 shadow-md backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-accent-gold">
              Tamil Nadu&apos;s Trusted Sourcing Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight md:leading-[1.1] mb-6 text-text-main"
          >
            Built on Trust. <br />
            <span className="gold-gradient-text">Designed for Modern Spaces.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-text-muted text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light font-body"
          >
            Premium hardware, modular fittings, smart locks, high-strength adhesives, and complete interior solutions trusted by builders, architects, and homeowners across Tamil Nadu since 1991.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={handleScrollToProducts}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-gold hover:bg-accent-gold/90 text-bg-main font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.35)] clickable group"
            >
              <span>Explore Products</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform text-bg-main" />
            </button>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-bg-card hover:bg-white/5 text-text-main border border-white/5 font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md clickable"
            >
              <MessageSquare size={14} className="text-accent-gold" />
              <span>WhatsApp Enquiry</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Right: Floating Stats Cards (Brushed Steel) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-bg-card border border-white/5 p-6 rounded-2xl flex flex-col justify-between min-h-[140px] md:min-h-[160px] relative overflow-hidden group shadow-lg hover:border-accent-gold/30 transition-all duration-300"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent-gold/5 blur-xl group-hover:bg-accent-gold/10 transition-colors duration-300" />
                
                <div className="flex justify-between items-start">
                  <Icon className="text-accent-gold group-hover:scale-105 transition-transform" size={20} />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-mono text-accent-gold tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-text-muted tracking-wider mt-1 group-hover:text-text-main transition-colors duration-300 font-body">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
