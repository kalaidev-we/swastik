"use client";

import { useState } from "react";
import { Download, ArrowUp } from "lucide-react";

export default function Footer() {
  const [downloadState, setDownloadState] = useState("idle");
  const [downloadInput, setDownloadInput] = useState("");

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!downloadInput) return;

    setDownloadState("loading");
    
    setTimeout(() => {
      setDownloadState("done");
      
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "Swastik_Catalog_2026.pdf");
      alert("Swastik Product Catalogue downloaded successfully! (Simulated)");
      setDownloadInput("");
      setDownloadState("idle");
    }, 1500);
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919363528393",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.791-4.382 9.794-9.782.002-2.618-1.01-5.078-2.852-6.921-1.843-1.843-4.294-2.856-6.915-2.857-5.407 0-9.799 4.388-9.802 9.789-.001 1.558.411 3.082 1.196 4.436L1.87 21.056l4.777-1.902zm11.398-6.17c-.3-.149-1.776-.876-2.046-.974-.27-.099-.467-.149-.662.149-.195.297-.756.974-.926 1.17-.17.196-.341.22-.641.072-1.036-.517-1.771-.855-2.477-2.062-.186-.319-.186-.513-.037-.663.134-.135.3-.347.45-.52.15-.173.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.149-.662-1.596-.91-2.19-.243-.584-.487-.5-.662-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.776-.726 2.025-1.427.25-.7.25-1.3.175-1.427-.075-.128-.27-.227-.57-.376z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-bg-main relative pt-20 pb-8 border-t border-black/5 overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-sheet opacity-25 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
        
        {/* Brand Section */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 group clickable"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Swastik & Company Logo"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading tracking-widest text-text-main group-hover:text-accent-gold transition-colors duration-300">
                SWASTIK
              </span>
              <span className="text-[11px] tracking-[0.25em] text-accent-gold font-mono -mt-1 font-bold">
                & COMPANY
              </span>
            </div>
          </a>
          <p className="text-xs text-text-muted leading-relaxed max-w-sm mt-2 font-light font-body">
            Erode&apos;s premier destination for high-end architectural hardware, modular drawer channels, security locks, and specialized wood adhesives. Elevating residential and commercial projects since 1991.
          </p>

          {/* Social Links (Steel Embossed circle links) */}
          <div className="flex gap-3 mt-4">
            {socialLinks.map((social, idx) => {
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full steel-embossed hover:border-accent-gold/40 text-text-muted hover:text-accent-gold flex items-center justify-center transition-all duration-300 clickable relative"
                  title={social.name}
                >
                  <span className="rivet absolute top-0.5 left-0.5 scale-50 opacity-40" />
                  {social.svg}
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-widest text-text-main font-mono font-bold mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { name: "About Legacy", id: "about" },
              { name: "Our Products", id: "products" },
              { name: "Trusted Brands", id: "brands" },
              { name: "Sectors Served", id: "industries" },
              { name: "Real Projects", id: "projects" },
              { name: "Testimonials", id: "testimonials" },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-xs text-text-muted hover:text-accent-gold transition-colors duration-300 font-light block py-0.5 clickable"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-widest text-text-main font-mono font-bold mb-6">
            Fittings Range
          </h4>
          <ul className="space-y-3">
            {[
              "Smart Digital Locks",
              "Architectural Handles",
              "Hydraulic Cabinet Hinges",
              "Soft-Close Drawers",
              "Plywood Adhesives",
              "Bathroom Glass Fittings",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, "products")}
                  className="text-xs text-text-muted hover:text-accent-gold transition-colors duration-300 font-light block py-0.5 clickable"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Catalogue Lead Generation */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-text-main font-mono font-bold mb-2">
              Sourcing Catalogue
            </h4>
            <p className="text-xs text-text-muted leading-relaxed font-light font-body">
              Enter your email address to receive our comprehensive 2026 digital product catalog containing Hettich, Ebco, and Hafele specification indexes.
            </p>
          </div>

          <form onSubmit={handleDownloadSubmit} className="relative w-full flex items-center">
            <input
              type="email"
              placeholder="name@company.com"
              value={downloadInput}
              onChange={(e) => setDownloadInput(e.target.value)}
              required
              className="w-full bg-white border border-black/10 focus:border-accent-gold/50 rounded-lg py-3.5 pl-4 pr-16 outline-none text-xs text-text-main tracking-wider font-body transition-colors"
            />
            <button
              type="submit"
              disabled={downloadState === "loading"}
              className="absolute right-1 w-10 h-10 rounded-md bg-accent-gold hover:bg-accent-gold/90 text-white font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center clickable disabled:opacity-50"
              aria-label="Download Catalogue"
            >
              {downloadState === "loading" ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Download size={14} className="text-white" />
              )}
            </button>
          </form>
          {downloadState === "done" && (
            <p className="text-xs text-accent-gold font-mono -mt-3 animate-pulse uppercase tracking-wider font-bold">
              Download starting...
            </p>
          )}
        </div>

      </div>

      {/* Copyright & Scroll Top Row */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left relative z-10">
        <p className="text-[10px] text-text-muted font-mono tracking-wider">
          © 2026 Swastik Trading Company. All Rights Reserved. | Designed with Raw Industrial Modern (Light) theme.
        </p>
        
        <button
          onClick={handleScrollTop}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors font-mono font-bold clickable"
        >
          <span>Back to Top</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
