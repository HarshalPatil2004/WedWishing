"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // ✅ ADDED (mobile menu toggle)
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-semibold text-gray-800">
          WedSite
        </div>

        {/* Desktop Nav Links */}
        {/* ✅ MODIFIED: Hidden on small screens */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-pink-600 transition duration-300">
            Home
          </Link>
          <Link href="#stories" className="hover:text-pink-600 transition duration-300">
            Our Stories
          </Link>
          <Link href="#gallery" className="hover:text-pink-600 transition duration-300">
            Gallery
          </Link>
        </div>

        {/* Right Section (Music + Mobile Menu) */}
        <div className="flex items-center gap-4">

          {/* Music Toggle (UNCHANGED) */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-xl transition hover:scale-110"
          >
            {isPlaying ? "🔊" : "🎵"}
          </button>

          {/* ✅ ADDED: Hamburger (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none transition-transform duration-300"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* ✅ ADDED: Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4 bg-white shadow-md text-gray-700 font-medium">

          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-600 transition"
          >
            Home
          </Link>

          <Link
            href="#stories"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-600 transition"
          >
            Our Stories
          </Link>

          <Link
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-600 transition"
          >
            Gallery
          </Link>

        </div>
      </div>
    </nav>
  );
}