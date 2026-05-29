"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    profession: "Homeowner",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    const whatsappMsg = `Hello Swastik & Company,\n\nI would like to make an enquiry:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Profession:* ${formData.profession}\n*Message:* ${formData.message || "N/A"}\n\nSent from your website contact form.`;
    
    const encodedMsg = encodeURIComponent(whatsappMsg);
    window.open(`https://wa.me/919363528393?text=${encodedMsg}`, "_blank");
    setFormSubmitted(true);
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=20,+Muthusamy+Street,+Sathy+Road,+Erode+-+638001", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-bg-main relative overflow-hidden border-t border-white/5">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-sheet opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-accent-gold mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Request an <span className="gold-gradient-text">Enquiry</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed font-body">
            Have questions about catalog pricing, brand discounts, or custom size orders? Send us details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch py-4">
          
          {/* Left Column: Contact Details & Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* Contact Details List (Steel Embossed Card) */}
            <div className="steel-embossed p-8 rounded-2xl relative overflow-hidden space-y-6">
              {/* corner rivets */}
              <span className="rivet absolute top-1.5 left-1.5" />
              <span className="rivet absolute top-1.5 right-1.5" />
              <span className="rivet absolute bottom-1.5 left-1.5" />
              <span className="rivet absolute bottom-1.5 right-1.5" />

              <h3 className="text-xl md:text-2xl font-bold font-heading text-text-main tracking-tight">
                Corporate Office
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold shadow-md">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">Address</h4>
                    <p className="text-sm text-text-main font-light leading-relaxed mt-1 font-body">
                      20, Muthusamy Street, Sathy Road, Erode - 638001
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold shadow-md">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">Phone Numbers</h4>
                    <p className="text-sm text-text-main font-light mt-1 font-body">
                      <span className="font-heading font-bold text-accent-gold">93635 28393</span> (Shop Enquiry) <br />
                      <span className="font-heading font-bold text-text-main">63749 76158</span> (Retail / Wholesale)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold shadow-md">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">Email Address</h4>
                    <p className="text-sm text-text-main font-light mt-1 break-all font-body">
                      swastiktradingcompany1991@gmail.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold shadow-md">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">Working Hours</h4>
                    <p className="text-sm text-text-main font-light mt-1 font-body">
                      Monday - Saturday | 9:30 AM - 8:00 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Card */}
            <div
              onClick={openGoogleMaps}
              className="steel-embossed hover:border-accent-gold/40 p-6 rounded-2xl shadow-xl group cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-end aspect-[2.1/1] select-none"
            >
              {/* corner rivets */}
              <span className="rivet absolute top-1.5 left-1.5 z-20" />
              <span className="rivet absolute top-1.5 right-1.5 z-20" />
              <span className="rivet absolute bottom-1.5 left-1.5 z-20" />
              <span className="rivet absolute bottom-1.5 right-1.5 z-20" />

              {/* Abstract map pattern in background */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,107,0,0.03)_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent" />
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div>
                  <h4 className="text-sm font-heading font-bold text-text-main group-hover:text-accent-gold transition-colors duration-300">
                    Find Us In Erode
                  </h4>
                  <p className="text-xs text-text-muted mt-1 font-light leading-none font-body">
                    Muthusamy St, Sathy Road
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-text-main bg-black/40 px-4 py-2 rounded border border-white/10 group-hover:bg-accent-gold group-hover:border-accent-gold group-hover:text-bg-main transition-colors shadow-md">
                  Open Maps
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Custom Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="steel-embossed p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* corner rivets */}
              <span className="rivet absolute top-1.5 left-1.5" />
              <span className="rivet absolute top-1.5 right-1.5" />
              <span className="rivet absolute bottom-1.5 left-1.5" />
              <span className="rivet absolute bottom-1.5 right-1.5" />

              <h3 className="text-xl md:text-2xl font-bold font-heading text-text-main mb-6 tracking-tight">
                Send Direct Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-black/35 border border-white/5 focus:border-accent-gold/50 rounded-lg py-3 px-4 outline-none text-sm font-body text-text-main transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g., +91 9876543210"
                    className="w-full bg-black/35 border border-white/5 focus:border-accent-gold/50 rounded-lg py-3 px-4 outline-none text-sm font-body text-text-main transition-colors"
                  />
                </div>

                {/* Profession */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="profession" className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">
                    I am a...
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full bg-black/35 border border-white/5 focus:border-accent-gold/50 rounded-lg py-3 px-4 outline-none text-sm font-body text-text-main transition-colors"
                  >
                    <option value="Homeowner" className="bg-bg-card">Homeowner / Residential Client</option>
                    <option value="Architect" className="bg-bg-card">Architect / Designer</option>
                    <option value="Builder" className="bg-bg-card">Builder / Developer</option>
                    <option value="Contractor" className="bg-bg-card">Contractor / Carpenter</option>
                    <option value="Retailer" className="bg-bg-card">Retailer / Sub-Dealer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-text-muted font-mono font-bold">
                    Message / Requirement Detail
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What fittings or products are you looking for? Mention sizes or brands if any."
                    className="w-full bg-black/35 border border-white/5 focus:border-accent-gold/50 rounded-lg py-3 px-4 outline-none text-sm font-body text-text-main transition-colors resize-none"
                  />
                </div>

                {/* Action Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent-gold hover:bg-accent-gold/90 text-bg-main rounded-lg font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)] clickable"
                >
                  <Send size={14} className="text-bg-main" />
                  <span>Send Enquiry Sheet</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-accent-gold font-mono mt-2 animate-pulse uppercase tracking-wider font-bold">
                    WhatsApp window triggered successfully
                  </p>
                )}

              </form>
            </div>
          </motion.div>

        </div>

      </div>

      {/* FLOATING WHATSAPP CTA WIDGET */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            const text = encodeURIComponent("Hello Swastik & Company, I would like to make an enquiry.");
            window.open(`https://wa.me/919363528393?text=${text}`, "_blank");
          }}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 relative group clickable"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageCircle size={28} className="fill-white text-[#25D366]" />
          
          {/* Tooltip on Hover (Steel plate style) */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 steel-embossed text-text-main text-[10px] font-mono font-bold tracking-widest uppercase py-2.5 px-4 rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
            <span className="rivet absolute top-1 left-1" />
            <span className="rivet absolute top-1 right-1" />
            <span className="rivet absolute bottom-1 left-1" />
            <span className="rivet absolute bottom-1 right-1" />
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </section>
  );
}
