"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  label?: string;
};

const images: GalleryImage[] = [
  { id: 1, src: "/assets/asset 5.png", alt: "Portrait 1", label: "EDITORIAL PORTRAIT" },
  { id: 2, src: "/assets/asset 6.png", alt: "Portrait 2", label: "URBAN EDITORIAL" },
  { id: 3, src: "/assets/asset 7.png", alt: "Portrait 3", label: "STUDIO PORTRAIT" },
  { id: 4, src: "/assets/asset 8.png", alt: "Portrait 4", label: "INTIMATE PORTRAIT" },
  { id: 5, src: "/assets/asset 9.png", alt: "Portrait 5", label: "CINEMATIC PORTRAIT" },
  { id: 6, src: "/assets/asset 10.png", alt: "Portrait 6", label: "BEAUTY EDITORIAL" },
];

export default function ExpandableGallery() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });
  const [isXl, setIsXl] = useState(true);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Track screen size
  useEffect(() => {
    const check = () => setIsXl(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const lerp = 0.1;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp;
      setRenderPos({ x: cursorPos.current.x, y: cursorPos.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const isExpanded = (id: number) => activeId === id;
  const showCustomCursor = hoveredId !== null && !isExpanded(hoveredId);

  useEffect(() => {
    if (!cursorRef.current) return;

    cursorRef.current.style.left = `${renderPos.x}px`;
    cursorRef.current.style.top = `${renderPos.y}px`;
  }, [renderPos]);

  // On smaller screens, only show first 4
  const visibleImages = isXl ? images : images.slice(0, 4);

  return (
    <div className={`relative w-full ${showCustomCursor ? "cursor-pointer" : "cursor-auto"}`}>

      {/* ── Custom Cursor ─────────────────────────────── */}
      {showCustomCursor && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative w-12 h-12">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60" />
            <span className="absolute inset-0 flex items-center justify-center text-white/60 text-base font-light leading-none">
              +
            </span>
          </div>
        </div>
      )}

      {/* ── XL — original horizontal row ─────────────── */}
      {isXl && (
        <div className="flex h-80 items-center gap-1 overflow-visible">
          {images.map((img) => {
            const expanded = isExpanded(img.id);
            return (
              <div
                key={img.id}
                onClick={() => handleClick(img.id)}
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative self-center overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded
                    ? "h-[385px] flex-[0_0_30%] cursor-default"
                    : "h-[268px] flex-1 cursor-pointer"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="40vw"
                  className={`object-cover transition-transform duration-500 ease-in-out ${
                    expanded ? "scale-100" : "scale-[1.03]"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 black-glow pointer-events-none z-10" />
                {img.label && (
                  <div
                    className={`absolute bottom-8 left-4 z-20 transition-all duration-300 ${
                      expanded ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                    }`}
                  >
                    <span className="text-white text-[15px] font-medium uppercase px-2.5 py-1.5">
                      [ {img.label.toUpperCase()} ]
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Below XL — 2x2 grid ──────────────────────── */}
      {!isXl && (
        <div className="grid grid-cols-2 gap-1">
          {visibleImages.map((img) => {
            const expanded = isExpanded(img.id);
            return (
              <div
                key={img.id}
                onClick={() => handleClick(img.id)}
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? "h-105 cursor-default" : "h-45 cursor-pointer"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="50vw"
                  className={`object-cover transition-transform duration-500 ease-in-out ${
                    expanded ? "scale-100" : "scale-[1.03]"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 black-glow pointer-events-none z-10" />
                {img.label && (
                  <div
                    className={`absolute bottom-8 left-4 z-20 transition-all duration-300 ${
                      expanded ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                    }`}
                  >
                    <span className="text-white text-[15px] font-medium uppercase px-2.5 py-1.5">
                      [ {img.label.toUpperCase()} ]
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
