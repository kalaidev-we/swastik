"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, Check, Sparkles, MessageSquare, X } from "lucide-react";

const CATEGORY_PRODUCTS = {
  "Locks & Handles": [
    { id: "lh1", name: "Premium Biometric Digital Smart Lock", brand: "Godrej / Hafele" },
    { id: "lh2", name: "Satin Brass Luxury Mortise Handle Set", brand: "Archis / Magnum" },
    { id: "lh3", name: "Architectural Antique Bronze Pull Handle", brand: "Royalmax" },
    { id: "lh4", name: "Heavy Duty Concealed Cylindrical Deadbolt", brand: "Europa" },
  ],
  "Hinges & Tower Bolts": [
    { id: "ht1", name: "Soft-Close Hydraulic Cabinet Hinges (3D Adjustment)", brand: "Hettich / Ebco" },
    { id: "ht2", name: "Heavy Duty Brass Ball Bearing Door Hinges", brand: "Magnum" },
    { id: "ht3", name: "Satin Finish Solid Brass Tower Bolt", brand: "Ajax" },
    { id: "ht4", name: "Concealed 180-Degree Pivot Hinge Set", brand: "Hafele" },
  ],
  "Adhesives & Waterproofing": [
    { id: "aw1", name: "Fevicol Hi-Per Wood Adhesive", brand: "Pidilite Fevicol" },
    { id: "aw2", name: "Multi-Purpose Neutral Silicone Sealant", brand: "Dow Corning" },
    { id: "aw3", name: "High-Strength Polyurethane (PU) Adhesive", brand: "Pidilite" },
    { id: "aw4", name: "Advanced Liquid Waterproofing Coating Membrane", brand: "Dr. Fixit" },
  ],
  "Modular Kitchen Fittings": [
    { id: "mk1", name: "Soft-Close Tandem Drawer Systems", brand: "Hettich / Ebco" },
    { id: "mk2", name: "Stainless Steel Wire Pull-out Kitchen Baskets", brand: "Ebco" },
    { id: "mk3", name: "Kitchen Magic Carousel Corner Tray", brand: "Hafele / Sleek" },
    { id: "mk4", name: "Pneumatic Soft-Open Cabinet Flap Lift Fitting", brand: "Hafele / Hettich" },
  ],
  "Wardrobe Fittings": [
    { id: "wf1", name: "Heavy-Duty Sliding Wardrobe Top-Hung Track", brand: "Hettich" },
    { id: "wf2", name: "Pull-Out Saree & Trouser Rack Organizer", brand: "Ebco" },
    { id: "wf3", name: "Motion-Sensor Led Hanging Rail", brand: "Hafele" },
    { id: "wf4", name: "Soft-Close Tie, Belt & Accessory Organizer", brand: "Ebco" },
  ],
  "Bathroom Door Fittings": [
    { id: "bd1", name: "Rust-Resistant SS 304 Grade Privacy Deadbolt", brand: "Europa / Godrej" },
    { id: "bd2", name: "Solid Brass Indicator Bathroom Lock", brand: "Godrej" },
    { id: "bd3", name: "Premium Glass-to-Glass Shower Hinge", brand: "Hafele" },
    { id: "bd4", name: "Satin Finish Anti-Corrosive Towel Ring", brand: "Ebco" },
  ],
  "Construction Tools": [
    { id: "ct1", name: "Professional Cordless Brushless Impact Drill 18V", brand: "Bosch" },
    { id: "ct2", name: "Heavy-Duty Electric Angle Grinder", brand: "Bosch" },
    { id: "ct3", name: "Laser Distance Meter Rangefinder 50m", brand: "Bosch" },
    { id: "ct4", name: "Premium Carbide Concrete Drill Bit Set", brand: "Bosch" },
  ],
  "Flush Door Products": [
    { id: "fd1", name: "Architectural Aluminium G-Profile Handles", brand: "Royalmax" },
    { id: "fd2", name: "Concealed Flush Pull Sliding Door Handle", brand: "Magnum" },
    { id: "fd3", name: "Premium PVC Edge Banding Strips", brand: "Rehau" },
    { id: "fd4", name: "Aluminum Air Ventilation Louver Grille", brand: "Ebco" },
  ],
};

const CATEGORIES = [
  {
    name: "Locks & Handles",
    description: "Premium locks, smart security systems and elegant handles for modern spaces.",
    tagline: "High Security & Elegance",
    icon: "🔑",
    image: "/product_locks.png",
  },
  {
    name: "Hinges & Tower Bolts",
    description: "Heavy-duty durable fittings designed for long-term structural reliability.",
    tagline: "Smooth Motion & Strength",
    icon: "🔩",
    image: "/product_hinges.png",
  },
  {
    name: "Adhesives & Waterproofing",
    description: "Professional bonding and moisture protection solutions for solid build quality.",
    tagline: "Undivided Bonding Strength",
    icon: "🧪",
    image: "/product_adhesives.png",
  },
  {
    name: "Modular Kitchen Fittings",
    description: "Modern kitchen accessories, soft-close drawers, and premium modular hardware.",
    tagline: "Smart Storage Layouts",
    icon: "🍳",
    image: "/product_kitchen.png",
  },
  {
    name: "Wardrobe Fittings",
    description: "Elegant storage organizing accessories with smooth sliding functionality.",
    tagline: "Luxury Organizers",
    icon: "👔",
    image: "/product_wardrobe.png",
  },
  {
    name: "Bathroom Door Fittings",
    description: "Rust-resistant premium bathroom door accessories and hardware fittings.",
    tagline: "Anti-Corrosive Finish",
    icon: "🚿",
    image: "/product_bathroom.png",
  },
  {
    name: "Construction Tools",
    description: "Professional-grade power tools, hand tools, and industrial equipment.",
    tagline: "Contractor Grade Precision",
    icon: "🛠️",
    image: "/product_tools.png",
  },
  {
    name: "Flush Door Products",
    description: "Architectural aluminium profiles, edge bands, and door panel accessories.",
    tagline: "Minimal Profiles",
    icon: "🚪",
    image: "/product_doors.png",
  },
];

const SYNONYMS = {
  "glue": "Adhesives & Waterproofing",
  "fevicol": "Adhesives & Waterproofing",
  "bond": "Adhesives & Waterproofing",
  "water": "Adhesives & Waterproofing",
  "leak": "Adhesives & Waterproofing",
  "waterproof": "Adhesives & Waterproofing",
  "seal": "Adhesives & Waterproofing",
  "handle": "Locks & Handles",
  "lock": "Locks & Handles",
  "key": "Locks & Handles",
  "biometric": "Locks & Handles",
  "smart": "Locks & Handles",
  "pull": "Locks & Handles",
  "hinge": "Hinges & Tower Bolts",
  "bolt": "Hinges & Tower Bolts",
  "tower": "Hinges & Tower Bolts",
  "latch": "Hinges & Tower Bolts",
  "soft": "Hinges & Tower Bolts",
  "hydraulic": "Hinges & Tower Bolts",
  "kitchen": "Modular Kitchen Fittings",
  "drawer": "Modular Kitchen Fittings",
  "basket": "Modular Kitchen Fittings",
  "tandem": "Modular Kitchen Fittings",
  "hettich": "Modular Kitchen Fittings",
  "cabinet": "Modular Kitchen Fittings",
  "wardrobe": "Wardrobe Fittings",
  "sliding": "Wardrobe Fittings",
  "rail": "Wardrobe Fittings",
  "hanger": "Wardrobe Fittings",
  "closet": "Wardrobe Fittings",
  "bath": "Bathroom Door Fittings",
  "shower": "Bathroom Door Fittings",
  "rust": "Bathroom Door Fittings",
  "toilet": "Bathroom Door Fittings",
  "tool": "Construction Tools",
  "drill": "Construction Tools",
  "grinder": "Construction Tools",
  "bosch": "Construction Tools",
  "saw": "Construction Tools",
  "measure": "Construction Tools",
  "door": "Flush Door Products",
  "profile": "Flush Door Products",
  "aluminium": "Flush Door Products",
  "edge": "Flush Door Products",
  "flush": "Flush Door Products",
};

// Parallax scroll component to shift cards at staggered speeds
function ParallaxCard({ children, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Alternating scroll offset heights (stagger columns)
  const offset = index % 2 === 0 ? 30 : -30;
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={cardRef} style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [checkedProducts, setCheckedProducts] = useState({});

  const selectedCategory = useMemo(() => {
    return CATEGORIES.find((cat) => cat.name === selectedCategoryName);
  }, [selectedCategoryName]);

  const { filteredCategories, isAiSearch } = useMemo(() => {
    let list = CATEGORIES;
    let isAiDetected = false;

    if (activeCategory !== "All") {
      list = list.filter((cat) => cat.name === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      let matchedCategories = new Set();

      list.forEach((cat) => {
        if (
          cat.name.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q) ||
          cat.tagline.toLowerCase().includes(q)
        ) {
          matchedCategories.add(cat.name);
        }
      });

      Object.keys(SYNONYMS).forEach((keyword) => {
        if (q.includes(keyword)) {
          matchedCategories.add(SYNONYMS[keyword]);
          isAiDetected = true;
        }
      });

      Object.keys(CATEGORY_PRODUCTS).forEach((catName) => {
        CATEGORY_PRODUCTS[catName].forEach((p) => {
          if (p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)) {
            matchedCategories.add(catName);
            isAiDetected = true;
          }
        });
      });

      list = CATEGORIES.filter((cat) => matchedCategories.has(cat.name));
    }

    return { filteredCategories: list, isAiSearch: isAiDetected };
  }, [searchQuery, activeCategory]);

  const handleCardClick = (categoryName) => {
    setSelectedCategoryName(categoryName);
    setCheckedProducts({});
  };

  const handleCheckboxChange = (productId) => {
    setCheckedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const sendWhatsAppEnquiry = () => {
    const productsInCat = CATEGORY_PRODUCTS[selectedCategoryName] || [];
    const chosenProducts = productsInCat.filter((p) => checkedProducts[p.id]);

    if (chosenProducts.length === 0) {
      alert("Please select at least one product to enquire.");
      return;
    }

    let text = `Hello Swastik & Company,\n\nI am interested in the following products under *${selectedCategoryName}*:\n\n`;
    chosenProducts.forEach((p, idx) => {
      text += `${idx + 1}. *${p.name}* (Brand: ${p.brand})\n`;
    });
    text += `\nPlease let me know about pricing, availability, and delivery options in Erode. Thanks!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919962470959?text=${encodedText}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-bg-main relative overflow-hidden border-b border-black/5">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-sheet opacity-25 pointer-events-none" />

      {/* Background glow highlights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-accent-gold mb-3">
            Collections Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Premium Hardware <span className="gold-gradient-text">& Solutions</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            Browse through our architectural sourcing lists. Select a collection card to customize a direct WhatsApp enquiry sheet.
          </p>
        </div>

        {/* AI Search & Filter Panel (Steel Plate Style) */}
        <div className="steel-embossed p-6 rounded-2xl mb-16 flex flex-col lg:flex-row gap-6 justify-between items-center relative overflow-hidden">
          {/* Rivets decoration */}
          <span className="rivet absolute top-1.5 left-1.5" />
          <span className="rivet absolute top-1.5 right-1.5" />
          <span className="rivet absolute bottom-1.5 left-1.5" />
          <span className="rivet absolute bottom-1.5 right-1.5" />

          {/* Smart Search Bar */}
          <div className="relative w-full lg:max-w-md flex items-center">
            <input
              type="text"
              placeholder="AI search e.g., smart locks, adhesives, tandem drawer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-text-main border border-black/10 focus:border-accent-gold/50 rounded-lg py-3.5 pl-11 pr-24 outline-none text-xs md:text-sm tracking-wide font-mono transition-colors"
            />
            <Search className="absolute left-4 text-text-muted" size={16} />
            
            {/* AI Status Badge */}
            {searchQuery && (
              <div className="absolute right-3 flex items-center gap-1 bg-accent-gold/10 border border-accent-gold/30 px-2.5 py-1 rounded-full text-[9px] text-accent-gold font-mono font-bold">
                {isAiSearch ? (
                  <>
                    <Sparkles size={10} className="animate-spin text-accent-gold" />
                    <span>AI PARSED</span>
                  </>
                ) : (
                  <span>DIRECT</span>
                )}
              </div>
            )}
          </div>

          {/* Quick Filters (Monospace tab-like buttons) */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end">
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className={`px-4 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold rounded border transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-accent-gold border-accent-gold text-white shadow-md"
                  : "border-black/10 text-text-muted hover:text-text-main hover:border-black/20"
              }`}
            >
              All Items
            </button>
            {CATEGORIES.slice(0, 5).map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setSearchQuery("");
                }}
                className={`px-4 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold rounded border transition-all duration-300 ${
                  activeCategory === cat.name
                    ? "bg-accent-gold border-accent-gold text-white shadow-md"
                    : "border-black/10 text-text-muted hover:text-text-main hover:border-black/20"
                }`}
              >
                {cat.name.replace(" & Waterproofing", "").replace(" Fittings", "").replace(" & Tower Bolts", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid (with Parallax Layout Shift) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 py-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => (
              <ParallaxCard key={cat.name} index={idx}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleCardClick(cat.name)}
                  className="steel-embossed hover:border-accent-gold/45 rounded-2xl flex flex-col relative overflow-hidden group cursor-pointer transition-all duration-300 h-full min-h-[380px] sm:min-h-[420px] clickable select-none bg-white border border-black/5 shadow-sm hover:shadow-lg"
                >
                  {/* Category Image Header */}
                  <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-bg-main border-b border-black/5">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Icon badge */}
                    <span className="absolute bottom-3 left-4 text-2xl filter drop-shadow-md bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center border border-black/5 shadow-sm">
                      {cat.icon}
                    </span>
                  </div>

                  {/* Micro Border Glow */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent-gold/10 rounded-2xl transition-all duration-300 pointer-events-none" />
                  
                  {/* Rivets at corners */}
                  <span className="rivet absolute top-1.5 left-1.5 z-10" />
                  <span className="rivet absolute top-1.5 right-1.5 z-10" />
                  <span className="rivet absolute bottom-1.5 left-1.5 z-10" />
                  <span className="rivet absolute bottom-1.5 right-1.5 z-10" />

                  {/* Content details */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[9px] tracking-[0.15em] text-accent-gold uppercase font-mono font-bold block mb-1">
                        {cat.tagline}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-text-main tracking-tight group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-text-muted font-light leading-relaxed mt-2 line-clamp-3 font-body">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/5 flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-accent-gold font-mono font-bold">
                        Browse Range
                      </span>
                      <span className="text-xs text-text-muted group-hover:text-accent-gold font-bold transition-colors">
                        ➔
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ParallaxCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 steel-embossed rounded-2xl relative overflow-hidden">
            <span className="rivet absolute top-1.5 left-1.5" />
            <span className="rivet absolute top-1.5 right-1.5" />
            <span className="rivet absolute bottom-1.5 left-1.5" />
            <span className="rivet absolute bottom-1.5 right-1.5" />

            <p className="text-text-muted font-mono text-sm">
              No categories found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-[10px] uppercase tracking-widest text-accent-gold hover:text-text-main font-mono font-bold transition-colors"
            >
              Clear Filters & Search
            </button>
          </div>
        )}
      </div>

      {/* Dynamic Enquiry Modal */}
      <AnimatePresence>
        {selectedCategoryName && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Overlay (Dark frosted background) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategoryName(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Modal Box (Tactile Steel Plate) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative steel-embossed w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] border border-black/5"
            >
              {/* Rivets Decoration inside Modal */}
              <span className="rivet absolute top-2 left-2 z-20" />
              <span className="rivet absolute top-2 right-2 z-20" />
              <span className="rivet absolute bottom-2 left-2 z-20" />
              <span className="rivet absolute bottom-2 right-2 z-20" />

              {/* Header Banner */}
              {selectedCategory && (
                <div className="relative w-full h-32 overflow-hidden border-b border-black/5 bg-bg-main shrink-0">
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
                  
                  {/* Floating close button */}
                  <button
                    onClick={() => setSelectedCategoryName(null)}
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors clickable z-20"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute bottom-4 left-6 pr-12 z-10 text-white">
                    <span className="text-[8px] tracking-[0.2em] text-accent-gold uppercase font-mono font-bold block mb-0.5">
                      {selectedCategory.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading tracking-tight leading-tight">
                      {selectedCategory.name}
                    </h3>
                  </div>
                </div>
              )}

              {/* Body: Selectable Products Checklist */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
                <p className="text-xs text-text-muted leading-relaxed font-body">
                  Select item configurations to compile. We will format a direct technical query with genuine brands to fetch current dealer pricing in Erode.
                </p>

                <div className="space-y-2 mt-4">
                  {(CATEGORY_PRODUCTS[selectedCategoryName] || []).map((p) => {
                    const isChecked = !!checkedProducts[p.id];
                    return (
                      <div
                        key={p.id}
                        onClick={() => handleCheckboxChange(p.id)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-300 ${
                          isChecked
                            ? "bg-accent-gold/10 border-accent-gold shadow-sm"
                            : "bg-white border-black/5 hover:border-black/10"
                        }`}
                      >
                        <div className="flex items-center gap-3 pr-2">
                          {/* Product Thumbnail */}
                          <div className="w-12 h-12 rounded-lg overflow-hidden border border-black/5 bg-bg-main shrink-0 relative">
                            <img
                              src={selectedCategory?.image}
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-heading font-semibold text-text-main leading-snug">
                              {p.name}
                            </p>
                            <p className="text-[9px] tracking-widest text-text-muted uppercase mt-0.5 font-mono">
                              Brand Spec: {p.brand}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 ${
                            isChecked
                              ? "bg-accent-gold border-accent-gold text-white"
                              : "border-black/10 bg-transparent"
                          }`}
                        >
                          {isChecked && <Check size={12} strokeWidth={3} className="text-white" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-black/5 flex flex-col gap-3 bg-black/5 shrink-0">
                <button
                  onClick={sendWhatsAppEnquiry}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent-gold hover:bg-accent-gold/90 text-white rounded-lg font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md clickable"
                >
                  <MessageSquare size={14} className="text-white" />
                  <span>Send Enquiry Sheet</span>
                </button>
                <button
                  onClick={() => setSelectedCategoryName(null)}
                  className="w-full py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted hover:text-text-main transition-colors clickable"
                >
                  Dismiss
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
