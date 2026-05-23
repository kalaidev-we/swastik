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

    // Format message for WhatsApp
    const whatsappMsg = `Hello Swastik & Company,\n\nI would like to make an enquiry:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Profession:* ${formData.profession}\n*Message:* ${formData.message || "N/A"}\n\nSent from your website contact form.`;
    
    const encodedMsg = encodeURIComponent(whatsappMsg);
    
    // Open WhatsApp
    window.open(`https://wa.me/919363528393?text=${encodedMsg}`, "_blank");
    setFormSubmitted(true);
  };

  const openGoogleMaps = () => {
    // Open Muthusamy Street Erode on Google Maps
    window.open("https://maps.google.com/?q=20,+Muthusamy+Street,+Sathy+Road,+Erode+-+638001", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-bg-card relative border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-accent-gold mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-main">
            Request an <span className="gold-gradient-text">Enquiry</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl font-light text-sm md:text-base leading-relaxed">
            Have questions about catalog pricing, brand discounts, or custom size orders? Send us details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact Details & Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-10"
          >
            {/* Contact Details List */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-text-main tracking-tight">
                Corporate Office
              </h3>
              
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent-gold/5 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">Address</h4>
                    <p className="text-sm text-text-main font-light leading-relaxed mt-1">
                      20, Muthusamy Street, Sathy Road, Erode - 638001
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent-gold/5 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">Phone Numbers</h4>
                    <p className="text-sm text-text-main font-light mt-1">
                      <span className="font-heading font-bold text-accent-gold">93635 28393</span> (Shop Enquiry) <br />
                      <span className="font-heading font-bold text-text-main">63749 76158</span> (Retail / Wholesale)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent-gold/5 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">Email Address</h4>
                    <p className="text-sm text-text-main font-light mt-1 break-all">
                      swastiktradingcompany1991@gmail.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent-gold/5 flex items-center justify-center border border-white/5 flex-shrink-0 text-accent-gold">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">Working Hours</h4>
                    <p className="text-sm text-text-main font-light mt-1">
                      Monday - Saturday | 9:30 AM - 8:00 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Google Maps Click Card */}
            <div
              onClick={openGoogleMaps}
              className="glass-panel hover:glass-panel-glow p-6 rounded-md border-white/5 shadow-lg group cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-end aspect-[2/1] select-none"
            >
              {/* Fake abstract map lines in background */}
              <div className="absolute inset-0 bg-[radial-gradient(#1c1f26_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent" />
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div>
                  <h4 className="text-sm font-heading font-bold text-text-main group-hover:text-accent-gold transition-colors duration-300">
                    Find Us In Erode
                  </h4>
                  <p className="text-xs text-text-muted mt-1 font-light leading-none">
                    Muthusamy St, Sathy Road
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest font-heading font-bold text-accent-gold bg-accent-gold/10 px-3 py-1.5 rounded-full border border-accent-gold/20">
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
            <div className="glass-panel hover:glass-panel-glow p-8 md:p-10 rounded-md border-white/5 shadow-2xl transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-text-main mb-6 tracking-tight">
                Send Direct Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">
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
                    className="w-full bg-bg-main/60 border border-white/10 focus:border-accent-gold/40 rounded-sm py-3 px-4 outline-none text-sm font-body text-text-main transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">
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
                    className="w-full bg-bg-main/60 border border-white/10 focus:border-accent-gold/40 rounded-sm py-3 px-4 outline-none text-sm font-body text-text-main transition-colors"
                  />
                </div>

                {/* Profession / Role */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="profession" className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">
                    I am a...
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full bg-bg-main border border-white/10 focus:border-accent-gold/40 rounded-sm py-3 px-4 outline-none text-sm font-body text-text-main transition-colors"
                  >
                    <option value="Homeowner">Homeowner / Residential Client</option>
                    <option value="Architect">Architect / Designer</option>
                    <option value="Builder">Builder / Developer</option>
                    <option value="Contractor">Contractor / Carpenter</option>
                    <option value="Retailer">Retailer / Sub-Dealer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-text-muted font-heading font-semibold">
                    Message / Requirement Detail
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What fittings or products are you looking for? Mention sizes or brands if any."
                    className="w-full bg-bg-main/60 border border-white/10 focus:border-accent-gold/40 rounded-sm py-3 px-4 outline-none text-sm font-body text-text-main transition-colors resize-none"
                  />
                </div>

                {/* Action Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-accent-gold hover:bg-accent-gold/90 text-bg-main rounded-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md clickable"
                >
                  <Send size={16} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-accent-gold font-heading mt-2 animate-pulse">
                    Thank you! WhatsApp window opened with your filled details.
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
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 relative group clickable"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageCircle size={28} className="fill-white text-[#25D366]" />
          
          {/* Tooltip on Hover */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-bg-card border border-white/10 text-text-main text-xs font-heading font-bold tracking-wider uppercase py-2 px-4 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </section>
  );
}
