"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.animate(
          {
            transform: `translate3d(${x - 16}px, ${y - 16}px, 0) scale(${hovered ? 1.5 : 1})`,
          },
          { duration: 250, fill: "forwards", easing: "ease-out" }
        );
      }
      
      if (hidden) {
        setHidden(false);
      }
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, select, textarea, [role='button'], .clickable");
      if (target) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [hovered, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Glowing neon-orange laser dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-accent-gold pointer-events-none z-9999 shadow-[0_0_10px_#FF6B00]"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
      {/* Trailing orange pointer scope ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-9998 transition-colors duration-300 ${
          hovered
            ? "border-accent-gold bg-accent-gold/15 shadow-[0_0_15px_rgba(255,107,0,0.3)]"
            : "border-accent-gold/40 bg-transparent"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
    </>
  );
}
