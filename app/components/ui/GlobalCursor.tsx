// components/ui/GlobalCursor.tsx
"use client";

import { CirclePlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function GlobalCursor() {
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

  return (
    <div
      className="fixed z-9998 pointer-events-none"
      style={{
        left: renderPos.x,
        top: renderPos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <CirclePlus className="text-custom1" strokeWidth={2} />
    </div>
  );
}