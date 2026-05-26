
"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FoldHorizontal } from "lucide-react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  alt?: string;
  label?: string;
  tagline?: string;
  index?: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  alt = "Before and after",
  label,
  tagline,
  index = "1",
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >

      {/* ── AFTER — full width, sits underneath */}
      <div className="absolute inset-0 ">
        <Image
          src={after}
          alt={`${alt} after`}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

            {/* ── BEFORE — clipped to left of slider position */}
            <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
            >
            {/* Match exact container size so image never shifts */}
            <div
                className="absolute inset-0"
                style={{ width: containerRef.current?.getBoundingClientRect().width ?? "100%" }}
            >
                <Image
                src={before}
                alt={`${alt} before`}
                fill
                className="object-cover"
                draggable={false}
                />
            </div>
            </div>

      {/* ── Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white/45 z-10 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      />

      {/* ── Drag handle */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 
          w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
        style={{ left: `${sliderPos}%` }}
      >
        <span className="text-[#e63b1f] text-[13px] font-bold select-none"><FoldHorizontal strokeWidth={1.5} /></span>
      </div>

      {/* ── Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)" }}
      />

      {/* ── Text content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 pointer-events-none">
        {label && (
          <h2 className="text-white text-[28px] font-bold leading-tight w-[220px]">
            {label}
          </h2>
        )}
        <div className="flex justify-between items-end pt-2 border-t border-white/20 text-[17px] leading-[23.8px]">
          <span className="text-white/60 tracking-widest">[ {index} ]</span>
          {tagline && <span className="text-white/80">{tagline}</span>}
        </div>
      </div>

    </div>
  );
}