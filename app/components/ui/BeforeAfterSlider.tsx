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

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSlider(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updateSlider(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full cursor-pointer select-none overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* AFTER — full width */}
      <Image
        src={after}
        alt={`${alt} after`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
        className="object-cover"
        draggable={false}
        priority
      />

      {/* BEFORE — clipped, but still full width */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <Image
          src={before}
          alt={`${alt} before`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
          className="object-cover"
          draggable={false}
          priority
        />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.75 bg-white/45"
        style={{ left: `${sliderPos}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
        style={{ left: `${sliderPos}%` }}
      >
        <span className="select-none text-[13px] font-bold text-[#e63b1f]">
          <FoldHorizontal strokeWidth={1.5} />
        </span>
      </div>

      {/* Bottom gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
        }}
      />

      {/* Text content */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6">
        {label && (
          <h2 className="w-55 text-[28px] font-normal leading-tight text-white">
            {label}
          </h2>
        )}

        <div className="flex items-end justify-between border-t border-white/20 pt-4 text-[17px] leading-[23.8px]">
          <span className="tracking-widest text-white/60">[ {index} ]</span>
          {tagline && <span className="text-white/80">{tagline}</span>}
        </div>
      </div>
    </div>
  );
}