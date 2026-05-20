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

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

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

  return (
    <div className="relative w-full" style={{ cursor: showCustomCursor ? "pointer" : "auto" }}>

      {/* ── Custom Cursor ─────────────────────────────── */}
      {showCustomCursor && (
        <div
          className="fixed z-9999 pointer-events-none"
          style={{
            left: renderPos.x,
            top: renderPos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-14 h-14">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-3 border-l-3 border-white/60" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-3 border-r-3 border-white/60" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-3 border-l-3 border-white/60" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-3 border-r-3 border-white/60" />
            <span className="absolute inset-0 flex items-center justify-center text-white/60 text-base font-light leading-none">
              +
            </span>
          </div>
        </div>
      )}

      {/* ── Gallery Row ───────────────────────────────── */}
      <div
        className="flex gap-1 items-center"
        style={{
          height: "320px",
          overflow: "visible",
        }}
      >
        {images.map((img) => {
          const expanded = isExpanded(img.id);

          return (
            <div
              key={img.id}
              onClick={() => handleClick(img.id)}
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                flex: expanded ? "0 0 30%" : "1 1 0%",
                height: expanded ? "385px" : "268px",
                alignSelf: "center",
                cursor: expanded ? "default" : "none",
              }}
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 ease-in-out"
                style={{ transform: expanded ? "scale(1)" : "scale(1.03)" }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 black-glow pointer-events-none z-10" />

              {/* Label — visible only when expanded */}
              {img.label && (
                <div
                  className="absolute left-4 bottom-8 z-20 transition-all duration-300"
                  style={{
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  <span className="text-white text-[15px] z-200 font-medium uppercase px-2.5 py-1.5">
                    [ {img.label.toUpperCase()} ]
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}