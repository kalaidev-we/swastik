"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Users, ClipboardList, Shield, Zap, Sparkles, UserCheck } from "lucide-react";

function CountUp({ value, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // dynamic increment for larger numbers
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono font-bold text-accent-gold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    { value: "30", suffix: "+ Years", label: "Industry Legacy" },
    { value: "5000", suffix: "+ Items", label: "In-Stock Inventory" },
    { value: "15", suffix: "+ Towns", label: "Served in TN" },
    { value: "100", suffix: "%", label: "Genuine Brands" },
  ];

  const points = [
    {
      title: "Experienced Hardware Experts",
      desc: "Our experienced staff guides builders and architects on structural requirements.",
      icon: UserCheck,
    },
    {
      title: "Extensive Product Inventory",
      desc: "Get hinges, handles, locks, wood adhesives, and tools all under one roof.",
      icon: ClipboardList,
    },
    {
      title: "Trusted by Trade & Homeowners",
      desc: "A solid reputation built over decades serving Erode's leading construction teams.",
      icon: Users,
    },
    {
      title: "Only Genuine Premium Brands",
      desc: "Authorised dealer of Hafele, Hettich, Ebco, Godrej, Europa, and other global brands.",
      icon: Shield,
    },
    {
      title: "Fast Supply & Delivery Network",
      desc: "We ensure timely supplies directly to construction and interior project sites.",
      icon: Zap,
    },
    {
      title: "Dedicated After-Sales Support",
      desc: "Complete warranty support and technical coordination for smart locks and fittings.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-bg-main relative overflow-hidden border-b border-black/5">
      {/* Background blueprint sheet & gradients */}
      <div className="absolute inset-0 blueprint-sheet opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-accent-gold mb-3">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Why Builders & Trade <span className="gold-gradient-text">Trust Us</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            Since 1991, Swastik Trading Company (Mr. Locks) has been Erode&apos;s premier hardware sourcing partner. Here is why trade professionals prefer us:
          </p>
        </div>

        {/* Counter Stats Section (Beveled steel cards with rivets) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 steel-embossed rounded-2xl relative overflow-hidden"
            >
              {/* corner rivets */}
              <span className="rivet absolute top-1.5 left-1.5" />
              <span className="rivet absolute top-1.5 right-1.5" />
              <span className="rivet absolute bottom-1.5 left-1.5" />
              <span className="rivet absolute bottom-1.5 right-1.5" />

              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] text-text-muted uppercase tracking-widest font-mono font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Cards Grid (Steel Embossed plates) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="steel-embossed hover:border-accent-gold/45 p-8 rounded-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* corner rivets */}
                <span className="rivet absolute top-1.5 left-1.5" />
                <span className="rivet absolute top-1.5 right-1.5" />
                <span className="rivet absolute bottom-1.5 left-1.5" />
                <span className="rivet absolute bottom-1.5 right-1.5" />

                <div>
                  <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/20 transition-all duration-300">
                    <Icon className="text-accent-gold group-hover:scale-105 transition-transform" size={18} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text-main group-hover:text-accent-gold transition-colors duration-300">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed mt-3 font-body">
                    {pt.desc}
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
