"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    // Enable custom cursor styles
    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      if (ringRef.current) {
        // Delayed follow for the ring
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

    // Attach hover listeners to links and buttons
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
      {/* Small central dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-gold pointer-events-none z-9999 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-9998 transition-colors duration-300 ${
          hovered
            ? "border-accent-gold bg-accent-gold/10"
            : "border-text-main/30 bg-transparent"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
    </>
  );
}
