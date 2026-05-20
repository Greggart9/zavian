"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";

const navLinks = ["Home", "Projects", "Blogs", "About", "Contact"];

const Navbar = () => {
  return (
       <header className="w-full flex items-center justify-between ">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/asset 0.png"
          alt="Logo"
          width={80}
          height={60}
        />
      </Link>

      {/* Nav pill */}
      <nav className="bg-black  px-2 py-1 flex items-center gap-1 shadow-xl">
        {navLinks.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase()}`}
            className={`
              text-white text-[20px] leading-6.5 font-light px-5 py-3 rounded-sm
              transition-colors delay-150 duration-600 ease-in-out hover:text-custom1
              ${link === "Home" ? "bg-white/5" : ""}
            `}
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar