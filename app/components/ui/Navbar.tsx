"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = ["Home", "Projects", "Blogs", "About", "Contact"];

const Navbar = () => {
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
        self.direction === -1 ? logoAnim.play() : logoAnim.reverse();
      },
    });

    return () => {
      trigger.kill();
      logoAnim.kill();
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-500 flex w-full items-center justify-between px-10 py-8">
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
      <nav className="flex items-center gap-2 bg-black/80 px-2 py-1 shadow-xl backdrop-blur-md border-2 border-white">
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
    </header>
  );
};

export default Navbar;