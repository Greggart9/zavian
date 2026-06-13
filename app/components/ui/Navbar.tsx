"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid2X2, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = ["Home", "Projects", "Blogs", "About", "Contact"];
const mobileLinkDelays = [
  "delay-[180ms]",
  "delay-[225ms]",
  "delay-[270ms]",
  "delay-[315ms]",
  "delay-[360ms]",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const logoAnim = gsap
      .from(".logo-scroll-effect", {
        yPercent: -140,
        opacity: 0,
        paused: true,
        duration: 0.25,
        ease: "power2.out",
      })
      .progress(1);

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          logoAnim.play();
        } else {
          logoAnim.reverse();
        }
      },
    });

    return () => {
      trigger.kill();
      logoAnim.kill();
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-500 flex w-full items-start justify-between px-5 py-5 md:px-10 md:py-8">
      {/* Logo only has scroll effect */}
      <Link href="/" className="logo-scroll-effect">
        <Image
          src="/assets/asset 0.png"
          alt="Logo"
          width={80}
          height={60}
          sizes="80px"
        />
      </Link>

      {/* Nav links stay fixed */}
      <nav className="items-center gap-2 bg-black/80 px-2 py-1 hidden xl:flex shadow-xl backdrop-blur-md border-2 border-white">
        {navLinks.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase()}`}
            className="rounded-sm px-5 py-3 text-[20px] font-light leading-6.5 text-white transition-colors delay-150 duration-600 ease-in-out hover:text-custom1"
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* Small-screen menu */}
      <div className="relative xl:hidden">
        {!isMenuOpen && (
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-5 border-2 border-white bg-black/85 px-5 py-4 text-white shadow-xl backdrop-blur-md"
          >
            <span className="text-[17px] font-light leading-none">Menu</span>
            <Grid2X2 size={22} strokeWidth={2} />
          </button>
        )}

        <div
          className={`absolute right-0 top-0 w-70 origin-top-right border-2 border-white bg-black/90 px-8 py-8 shadow-xl backdrop-blur-md transition-all duration-500 ease-out ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-4 scale-95 opacity-0"
          }`}
        >
          <div
            className={`mb-8 flex items-center justify-between transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <span className="text-[17px] font-light leading-none text-white">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center text-white"
            >
              <Minus size={22} strokeWidth={2} />
            </button>
          </div>
          <div
            className={`mb-8 h-px w-full origin-left bg-white/20 transition-transform duration-500 ${
              isMenuOpen ? "scale-x-100 delay-150" : "scale-x-0"
            }`}
          />
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[17px] font-light leading-none text-white transition-all duration-500 hover:text-custom1 ${
                  isMenuOpen ? `translate-y-0 opacity-100 ${mobileLinkDelays[index]}` : "-translate-y-2 opacity-0 delay-0"
                }`}
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
