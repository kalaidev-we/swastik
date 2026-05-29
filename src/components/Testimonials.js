"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Navaneethabalan N Kuppusamy",
      role: "Homeowner",
      review: "Good customer service with huge product variety and experienced staff guidance. They helped me choose the right hydraulic hinges and brass handles for my new house.",
      rating: 5,
    },
    {
      name: "Sadhish Jay",
      role: "Architect & Contractor",
      review: "Unique modular kitchen products and quality hardware solutions. Swastik is my go-to choice for premium sliding rails and kitchen baskets in Erode.",
      rating: 5,
    },
    {
      name: "Shanmugasundharam Murugesan",
      role: "Builder",
      review: "Excellent collection of locks, handles and home hardware products. They have provided direct site delivery and warranty coordination for Godrej smart locks.",
      rating: 5,
    },
    {
      name: "Srimanjunathan",
      role: "Interior Designer",
      review: "Wide range of modern and antique hardware designs with affordable pricing. Their customer support team is extremely helpful with technical specifications.",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-bg-main relative">
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-heading font-bold text-accent-gold mb-3">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-main">
            Customer <span className="gold-gradient-text">Testimonials</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            Here is what architects, builders, and homeowners in Tamil Nadu say about Swastik Trading Company (Mr. Locks).
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto relative flex flex-col items-center">
          
          {/* Quote Mark */}
          <div className="mb-6 text-accent-gold/15">
            <Quote size={56} strokeWidth={1} />
          </div>

          <div className="w-full min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-black/5 p-8 md:p-12 rounded-2xl shadow-sm relative w-full text-center"
              >
                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-text-main text-base md:text-lg font-light leading-relaxed italic mb-8 font-body">
                  &quot;{reviews[activeIndex].review}&quot;
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-sm md:text-base font-heading font-bold text-text-main uppercase tracking-wider">
                    {reviews[activeIndex].name}
                  </h4>
                  <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">
                    {reviews[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-black/10 hover:border-text-main/40 text-text-muted hover:text-text-main bg-white shadow-sm transition-all duration-300 clickable"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-text-main w-6" : "bg-black/10"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-black/10 hover:border-text-main/40 text-text-muted hover:text-text-main bg-white shadow-sm transition-all duration-300 clickable"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
