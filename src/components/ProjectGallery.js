"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Minimalist Obsidian Kitchen",
    category: "Modular Kitchens",
    image: "/gallery_kitchen.png",
    location: "Erode City",
  },
  {
    id: 2,
    title: "Bespoke Glass Wardrobe",
    category: "Luxury Wardrobes",
    image: "/gallery_wardrobe.png",
    location: "Perundurai Bungalow",
  },
  {
    id: 3,
    title: "Pivoting Entrance Door",
    category: "Architectural Hardware",
    image: "/gallery_interior.png",
    location: "Architect Residence, Salem",
  },
  {
    id: 4,
    title: "Premium Showroom Display",
    category: "Modern Interiors",
    image: "/hero_showroom.png",
    location: "Swastik Showroom, Erode",
  },
  {
    id: 5,
    title: "Luxury Cabinet Fittings",
    category: "Architectural Hardware",
    image: "/about_details.png",
    location: "Apartment Project, Erode",
  },
  {
    id: 6,
    title: "Executive Pivot Glass Doors",
    category: "Commercial Projects",
    image: "/gallery_interior.png",
    location: "Corporate Office, Coimbatore",
  },
];

const CATEGORIES = [
  "All",
  "Modular Kitchens",
  "Luxury Wardrobes",
  "Architectural Hardware",
  "Modern Interiors",
  "Commercial Projects",
];

// Parallax scroll component to shift columns at different speeds
function ParallaxCard({ children, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Stagger items by index
  const offset = index % 3 === 0 ? 30 : index % 3 === 1 ? -10 : 15;
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={cardRef} style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
}

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 bg-bg-main relative overflow-hidden border-b border-black/5">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-sheet opacity-25 pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-accent-gold mb-3">
            Installation Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Real Project <span className="gold-gradient-text">Installations</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            A showcase of premium hardware, sliding wardrobe profiles, and soft-close kitchen configurations installed in elite Tamil Nadu spaces.
          </p>
        </div>

        {/* Categories Tab Filter (Steel button layout) */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold rounded border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent-gold border-accent-gold text-white shadow-md"
                  : "border-black/10 text-text-muted hover:text-text-main hover:border-black/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (with Parallax Column Shift) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <ParallaxCard key={item.id} index={index}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group cursor-pointer steel-embossed hover:border-accent-gold/45 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative aspect-[4/3] select-none"
                >
                  {/* corner rivets */}
                  <span className="rivet absolute top-1.5 left-1.5 z-10" />
                  <span className="rivet absolute top-1.5 right-1.5 z-10" />
                  <span className="rivet absolute bottom-1.5 left-1.5 z-10" />
                  <span className="rivet absolute bottom-1.5 right-1.5 z-10" />

                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[6s] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                  {/* Light concrete-overlay shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                  
                  {/* Hover zoom icon (Gold outline style) */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 border border-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ZoomIn className="text-accent-gold" size={16} />
                  </div>

                  {/* Narrative text (bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase tracking-widest text-accent-gold font-mono font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-text-main mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body">
                      {item.location}
                    </p>
                  </div>
                </motion.div>
              </ParallaxCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Component (Keep dark for photo focus) */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-accent-gold hover:text-white text-white z-50 transition-colors clickable"
              >
                <X size={20} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-accent-gold hover:text-white text-white z-50 transition-colors clickable"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-accent-gold hover:text-white text-white z-50 transition-colors clickable"
              >
                <ChevronRight size={20} />
              </button>

              {/* Central Lightbox Image Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 z-40 bg-black flex items-center justify-center shadow-2xl"
              >
                {/* rivets in lightbox corners */}
                <span className="rivet absolute top-2 left-2 z-10" />
                <span className="rivet absolute top-2 right-2 z-10" />
                <span className="rivet absolute bottom-2 left-2 z-10" />
                <span className="rivet absolute bottom-2 right-2 z-10" />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Captions overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-mono font-bold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mt-1">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-sm text-white/70 mt-1 font-body">
                    {filteredItems[lightboxIndex].location}
                  </p>
                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
