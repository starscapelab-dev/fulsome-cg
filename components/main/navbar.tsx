'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-black/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#home"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Fulsome CG Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Fulsome CG
            </span>
            <span className="text-xs text-gray-400 hidden lg:block">
              International VFX Academy
            </span>
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex flex-1 h-full flex-row items-center justify-center">
          <div className="flex items-center gap-6 h-auto border border-[rgba(255,138,61,0.38)] bg-[rgba(3,0,20,0.37)] px-6 py-3 rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-orange-400 transition-colors text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button & Social Icons (Web) */}
        <div className="hidden lg:flex flex-row items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Enroll Now
          </Link>
          <div className="flex gap-3">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="hover:scale-110 transition-transform"
              >
                <Icon className="h-5 w-5 text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-md border-t border-orange-500/20 p-6 flex flex-col items-center text-gray-300 lg:hidden shadow-xl">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-orange-400 transition text-center text-lg w-full py-2 hover:bg-orange-500/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="#contact"
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-gray-700">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="hover:scale-110 transition-transform"
              >
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};