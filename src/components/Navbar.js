"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

const MENU_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Brands", href: "#brands" },
  { name: "Industries", href: "#industries" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = MENU_ITEMS.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(MENU_ITEMS[i].href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      setIsMobileMenuOpen(false);
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Swastik & Company, I would like to make an enquiry about your premium architectural hardware products.");
    window.open(`https://wa.me/919363528393?text=${message}`, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-bg-card/90 backdrop-blur-md border-b border-black/5 shadow-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group clickable"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Swastik & Company Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold font-heading tracking-widest text-text-main group-hover:text-accent-gold transition-colors duration-300">
              SWASTIK
            </span>
            <span className="text-[10px] tracking-[0.25em] text-accent-gold font-mono -mt-1 font-bold">
              & COMPANY
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {MENU_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs tracking-wider uppercase transition-all duration-300 relative py-1 font-mono font-bold clickable ${
                    activeSection === item.href.substring(1)
                      ? "text-accent-gold"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-gold rounded" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={openWhatsApp}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold hover:bg-accent-gold/90 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_14px_rgba(197,168,128,0.25)] clickable"
          >
            <PhoneCall size={14} className="text-white" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Mobile Menu Action trigger */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={openWhatsApp}
            className="p-2.5 rounded-full bg-accent-gold text-white hover:scale-105 transition-all duration-300 clickable"
            aria-label="WhatsApp Enquiry"
          >
            <PhoneCall size={14} className="text-white" />
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-main hover:text-accent-gold p-1 transition-colors duration-300 clickable"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[73px] bg-bg-card/98 backdrop-blur-lg z-45 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-[70vh] gap-6 px-6">
          {MENU_ITEMS.map((item) => (
            <li key={item.name} className="w-full text-center">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base tracking-widest uppercase font-mono font-bold block py-2 border-b border-black/5 clickable ${
                  activeSection === item.href.substring(1)
                    ? "text-accent-gold"
                    : "text-text-muted"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="w-full mt-4 flex justify-center">
            <button
              onClick={openWhatsApp}
              className="w-full max-w-xs flex items-center justify-center gap-2 py-3.5 bg-accent-gold text-white rounded-full font-mono font-bold uppercase tracking-widest transition-all duration-300 clickable"
            >
              <PhoneCall size={16} className="text-white" />
              <span>WhatsApp Chat</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
