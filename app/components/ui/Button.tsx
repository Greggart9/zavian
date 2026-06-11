// components/ui/Button.tsx

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "black" | "white";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "black",
  className = "",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center overflow-hidden md:text-[20px] h-[58px] w-fit font-medium px-9 py-4 transition-all duration-200 group";

  const variants = {
    black: "bg-black border-2 border-white text-white hover:bg-linear-to-r from-[#333] to-black shadow-lg",
    white: "bg-white text-black",
  };

  const inner = (
    <>
      {/* Arrow that starts at left, hidden off-screen, slides in on hover */}
      <span
        className="
          absolute left-4 opacity-0 -translate-x-3
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 ease-out
        "
      >
        <ArrowRight />
      </span>

      {/* Text shifts right on hover to make room for incoming arrow */}
      <span
        className="
          relative transition-all duration-300 ease-out
          group-hover:translate-x-5
        "
      >
        {children}
      </span>

      {/* Arrow on the right, fades out on hover */}
      <span
        className="
          ml-2 opacity-100 translate-x-0
          group-hover:opacity-0 group-hover:translate-x-3
          transition-all duration-300 ease-out
        "
      >
        <ArrowRight strokeWidth={1} />
      </span>
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{inner}</Link>;
  }

  return <button onClick={onClick} className={classes}>{inner}</button>;
}