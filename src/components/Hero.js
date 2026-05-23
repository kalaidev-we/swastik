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
      {/* Background Image with Zoom Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out scale-105"
          style={{
            backgroundImage: "url('/hero_showroom.png')",
          }}
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Subtle spotlight effect that tracks or stays fixed */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(15,17,21,0.8)_80%)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-heading font-semibold text-accent-gold">
              Tamil Nadu&apos;s Trusted Architectural Supplier
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight md:leading-[1.1] mb-6"
          >
            Built on Trust. <br />
            <span className="gold-gradient-text">Designed for Modern Spaces.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-text-muted text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light"
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
              className="flex items-center gap-2 px-8 py-4 rounded-sm bg-accent-gold hover:bg-accent-gold/90 text-bg-main font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(200,155,60,0.5)] clickable group"
            >
              <span>Explore Products</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 px-8 py-4 rounded-sm bg-white/5 hover:bg-white/10 text-text-main border border-white/10 hover:border-white/20 font-heading font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md clickable"
            >
              <MessageSquare size={16} className="text-accent-gold" />
              <span>WhatsApp Enquiry</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Right: Floating Stats Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
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
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-panel hover:glass-panel-glow p-6 rounded-md flex flex-col justify-between min-h-[140px] md:min-h-[160px] relative overflow-hidden group transition-all duration-300"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent-gold/5 blur-xl group-hover:bg-accent-gold/10 transition-colors duration-300" />
                
                <div className="flex justify-between items-start">
                  <Icon className="text-accent-gold group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-main tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted tracking-wider mt-1 group-hover:text-text-main transition-colors duration-300">
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
