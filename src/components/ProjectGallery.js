"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="projects" className="py-24 bg-bg-main relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-accent-gold mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Real Project <span className="gold-gradient-text">Installations</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed">
            A showcase of premium hardware, sliding wardrobe profiles, and soft-close kitchen configurations installed in elite Tamil Nadu spaces.
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-heading font-bold rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent-gold border-accent-gold text-bg-main shadow-md"
                  : "border-white/10 text-text-muted hover:text-text-main hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer bg-bg-card border border-white/5 hover:border-accent-gold/20 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative aspect-[4/3]"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[6s] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Hover overlay and text */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg-main/80 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-accent-gold" size={18} />
                </div>

                {/* Narrative text (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-heading font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-text-main mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Component */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
              
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
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white z-50 transition-colors clickable"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white z-50 transition-colors clickable"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white z-50 transition-colors clickable"
              >
                <ChevronRight size={24} />
              </button>

              {/* Central Lightbox Image Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-sm overflow-hidden border border-white/10 z-40 bg-bg-card flex items-center justify-center"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Captions overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-xs uppercase tracking-widest text-accent-gold font-heading font-semibold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mt-1">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
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
