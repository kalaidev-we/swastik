"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MessageSquare, X, Check, Sparkles, ShoppingBag } from "lucide-react";

// Predefined products list for enquiries
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
    { id: "aw1", name: "Fevicol Hi-Per Premium Wood Adhesive", brand: "Pidilite Fevicol" },
    { id: "aw2", name: "Multi-Purpose Neutral Silicone Sealant", brand: "Dow Corning" },
    { id: "aw3", name: "High-Strength Polyurethane (PU) Adhesive", brand: "Pidilite" },
    { id: "aw4", name: "Advanced Liquid Waterproofing Coating Membrane", brand: "Dr. Fixit" },
  ],
  "Modular Kitchen Fittings": [
    { id: "mk1", name: "Soft-Close Tandem Drawer Systems", brand: "Hettich / Ebco" },
    { id: "mk2", name: "Stainless Steel Wire Pull-out Kitchen Baskets", brand: "Ebco" },
    { id: "mk3", name: "Kitchen Corner Magic Carousel Tray", brand: "Hafele / Sleek" },
    { id: "mk4", name: "Pneumatic Soft-Open Cabinet Flap Lift Fitting", brand: "Hafele / Hettich" },
  ],
  "Wardrobe Fittings": [
    { id: "wf1", name: "Heavy-Duty Sliding Wardrobe Top-Hung Track", brand: "Hettich" },
    { id: "wf2", name: "Pull-Out Wardrobe Saree & Trouser Rack Organizer", brand: "Ebco" },
    { id: "wf3", name: "Motion-Sensor Led Wardrobe Hanging Rail", brand: "Hafele" },
    { id: "wf4", name: "Soft-Close Tie, Belt & Accessory Organizer", brand: "Ebco" },
  ],
  "Bathroom Door Fittings": [
    { id: "bd1", name: "Rust-Resistant SS 304 Grade Privacy Deadbolt", brand: "Europa / Godrej" },
    { id: "bd2", name: "Solid Brass Indicator Bathroom Lock (Occupied/Vacant)", brand: "Godrej" },
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
  },
  {
    name: "Hinges & Tower Bolts",
    description: "Heavy-duty durable fittings designed for long-term structural reliability.",
    tagline: "Smooth Motion & Strength",
    icon: "🔩",
  },
  {
    name: "Adhesives & Waterproofing",
    description: "Professional bonding and moisture protection solutions for solid build quality.",
    tagline: "Undivided Bonding Strength",
    icon: "🧪",
  },
  {
    name: "Modular Kitchen Fittings",
    description: "Modern kitchen accessories, soft-close drawers, and premium modular hardware.",
    tagline: "Smart Storage Layouts",
    icon: "🍳",
  },
  {
    name: "Wardrobe Fittings",
    description: "Elegant storage organizing accessories with smooth sliding functionality.",
    tagline: "Luxury Organizers",
    icon: "👔",
  },
  {
    name: "Bathroom Door Fittings",
    description: "Rust-resistant premium bathroom door accessories and hardware fittings.",
    tagline: "Anti-Corrosive Finish",
    icon: "🚿",
  },
  {
    name: "Construction Tools",
    description: "Professional-grade power tools, hand tools, and industrial equipment.",
    tagline: "Contractor Grade Precision",
    icon: "🛠️",
  },
  {
    name: "Flush Door Products",
    description: "Architectural aluminium profiles, edge bands, and door panel accessories.",
    tagline: "Minimal Profiles",
    icon: "🚪",
  },
];

// NLP Synonyms for mock AI search routing
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

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Enquiry Modal States
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [checkedProducts, setCheckedProducts] = useState({});

  // AI-powered Natural Language query matching logic
  const { filteredCategories, isAiSearch } = useMemo(() => {
    let list = CATEGORIES;
    let isAiDetected = false;

    // Filter by Tab Selection
    if (activeCategory !== "All") {
      list = list.filter((cat) => cat.name === activeCategory);
    }

    // Filter by Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      let matchedCategories = new Set();

      // 1. Direct Text Matching on Category Name / Description
      list.forEach((cat) => {
        if (
          cat.name.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q) ||
          cat.tagline.toLowerCase().includes(q)
        ) {
          matchedCategories.add(cat.name);
        }
      });

      // 2. Synonyms Matching (Mock AI NLP mapping)
      Object.keys(SYNONYMS).forEach((keyword) => {
        if (q.includes(keyword)) {
          matchedCategories.add(SYNONYMS[keyword]);
          isAiDetected = true;
        }
      });

      // 3. Search inside product items to link back to categories
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
    // Reset checked products for this category
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

    let text = `Hello Swastik & Company, I am interested in the following products under *${selectedCategoryName}*:\n\n`;
    chosenProducts.forEach((p, idx) => {
      text += `${idx + 1}. *${p.name}* (Brand: ${p.brand})\n`;
    });
    text += `\nPlease let me know about pricing, availability, and delivery options in Erode. Thanks!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919363528393?text=${encodedText}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-bg-main relative">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-accent-gold mb-3">
            Collections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Premium <span className="gold-gradient-text">Product Collections</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed">
            Click on any collection category to browse specific products and request an instant WhatsApp quotation.
          </p>
        </div>

        {/* AI Search & Filter Panel */}
        <div className="glass-panel p-6 rounded-md mb-12 flex flex-col md:flex-row gap-6 justify-between items-center border-white/5 shadow-xl">
          
          {/* Smart Search Bar */}
          <div className="relative w-full md:max-w-md flex items-center">
            <input
              type="text"
              placeholder="AI Smart Search (e.g., glue, hettich, smart locks, hinges)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-main/80 text-text-main border border-white/10 focus:border-accent-gold/50 rounded-sm py-3 pl-11 pr-20 outline-none text-sm tracking-wide font-body transition-colors"
            />
            <Search className="absolute left-4 text-text-muted" size={18} />
            
            {/* AI Status Badge */}
            {searchQuery && (
              <div className="absolute right-3 flex items-center gap-1 bg-accent-gold/15 border border-accent-gold/20 px-2 py-0.5 rounded-full text-[10px] text-accent-gold font-heading font-medium">
                {isAiSearch ? (
                  <>
                    <Sparkles size={10} className="animate-spin" />
                    <span>AI Parsed</span>
                  </>
                ) : (
                  <span>Direct Match</span>
                )}
              </div>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-heading font-bold rounded-sm border transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-accent-gold border-accent-gold text-bg-main"
                  : "border-white/10 text-text-muted hover:text-text-main hover:border-white/20"
              }`}
            >
              All Collections
            </button>
            {CATEGORIES.slice(0, 4).map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setSearchQuery("");
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-heading font-bold rounded-sm border transition-all duration-300 ${
                  activeCategory === cat.name
                    ? "bg-accent-gold border-accent-gold text-bg-main"
                    : "border-white/10 text-text-muted hover:text-text-main hover:border-white/20"
                }`}
              >
                {cat.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                layout
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCardClick(cat.name)}
                className="glass-panel hover:glass-panel-glow p-6 rounded-md flex flex-col justify-between aspect-[5/4] sm:aspect-square relative overflow-hidden group cursor-pointer border-white/5 transition-all duration-300 clickable select-none"
              >
                {/* Gold glowing accent border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent-gold/30 rounded-md transition-all duration-300" />
                
                {/* SVG/Emoji Overlay Icon */}
                <div className="flex justify-between items-start">
                  <span className="text-3xl filter drop-shadow-[0_2px_8px_rgba(200,155,60,0.2)]">
                    {cat.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold bg-accent-gold/10 px-2.5 py-1 rounded-full font-heading font-medium border border-accent-gold/10">
                    Browse
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-main tracking-tight group-hover:text-accent-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] tracking-widest text-text-muted uppercase font-heading font-semibold mt-1">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-text-muted font-light leading-relaxed mt-3 line-clamp-3">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-md border-white/5">
            <p className="text-text-muted font-heading text-base">
              No categories found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-xs uppercase tracking-wider text-accent-gold hover:text-white font-heading font-bold transition-colors"
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
            
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategoryName(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-bg-card border border-white/10 w-full max-w-lg rounded-md overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-start bg-bg-main/50">
                <div>
                  <span className="text-[10px] tracking-widest text-accent-gold uppercase font-heading font-bold">
                    Enquire Collection
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-text-main tracking-tight mt-1">
                    {selectedCategoryName}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCategoryName(null)}
                  className="p-1 rounded-full text-text-muted hover:text-text-main transition-colors clickable"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body: Selectable Products Checklist */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4">
                <p className="text-xs text-text-muted leading-relaxed">
                  Select the products you are interested in. We will compile them into a pre-formatted WhatsApp text message for an instant quotation.
                </p>

                <div className="space-y-2 mt-4">
                  {(CATEGORY_PRODUCTS[selectedCategoryName] || []).map((p) => {
                    const isChecked = !!checkedProducts[p.id];
                    return (
                      <div
                        key={p.id}
                        onClick={() => handleCheckboxChange(p.id)}
                        className={`flex items-center justify-between p-4 rounded-sm border cursor-pointer select-none transition-all duration-300 ${
                          isChecked
                            ? "bg-accent-gold/5 border-accent-gold"
                            : "bg-bg-main/40 border-white/5 hover:border-white/10"
                        }`}
                      >
                        <div>
                          <p className="text-sm font-heading font-semibold text-text-main">
                            {p.name}
                          </p>
                          <p className="text-[10px] tracking-wider text-text-muted uppercase mt-0.5">
                            Brand: {p.brand}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                            isChecked
                              ? "bg-accent-gold border-accent-gold text-bg-main"
                              : "border-white/20 bg-transparent"
                          }`}
                        >
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-white/10 flex flex-col gap-3 bg-bg-main/50">
                <button
                  onClick={sendWhatsAppEnquiry}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent-gold hover:bg-accent-gold/90 text-bg-main rounded-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md clickable"
                >
                  <MessageSquare size={18} />
                  <span>Enquire via WhatsApp</span>
                </button>
                <button
                  onClick={() => setSelectedCategoryName(null)}
                  className="w-full py-2.5 text-xs font-heading font-bold uppercase tracking-widest text-text-muted hover:text-text-main transition-colors clickable"
                >
                  Cancel
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
