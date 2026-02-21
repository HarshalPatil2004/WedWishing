"use client";

import React, { useState } from "react";
import Link from "next/link";
import WishWallModal from "./WishWallModal";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5">
      {children}
    </span>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 21s-6.716-4.35-9.193-7.272C.533 11.2 1.2 7.8 3.6 6.2c2.1-1.4 4.8-.6 6.4 1.2 1.6-1.8 4.3-2.6 6.4-1.2 2.4 1.6 3.067 5 0 7.528C18.716 16.65 12 21 12 21z" />
    </svg>
  );
}

export default function WeddingNavbar() {
  const [wishWallOpen, setWishWallOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-pink-600">
          <HeartIcon />
          <span>WedWishher</span>
        </div>

        {/* Desktop Nav Links (UNCHANGED) */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-pink-600 transition">
            Home
          </Link>
          <Link href="#story" className="hover:text-pink-600 transition">
            Our Story
          </Link>
          <Link href="#gallery" className="hover:text-pink-600 transition">
            Gallery
          </Link>
          <Link href="#events" className="hover:text-pink-600 transition">
            Events
          </Link>
          <Link href="#wishes" className="hover:text-pink-600 transition">
            Wishes
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* ✅ KEEP ONLY THIS MUSIC BUTTON (Rightmost one preserved) */}
          {/* <button
            onClick={toggleMusic}
            className="text-pink-600 hover:text-pink-800 transition text-xl"
          >
            {isPlaying ? "🔊" : "🎵"}
          </button> */}

          {/* Desktop Wish Button (UNCHANGED) */}
          <div className="hidden md:block">
            <button
              onClick={() => setWishWallOpen(true)}
              className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition shadow-md"
            >
              Wish Wall
            </button>
          </div>

          {/* ✅ ADDED: Mobile Hamburger Button */}
          {/* Appears only on small screens and positioned RIGHT of music button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none text-2xl"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </div>

      {/* ✅ ADDED: Mobile Dropdown Menu (Responsive Only) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">

          <Link href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>

          <Link href="#story" onClick={() => setIsMenuOpen(false)}>
            Our Story
          </Link>

          <Link href="#gallery" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>

          <Link href="#events" onClick={() => setIsMenuOpen(false)}>
            Events
          </Link>

          <Link href="#wishes" onClick={() => setIsMenuOpen(false)}>
            Wishes
          </Link>

          <button
            onClick={() => {
              setWishWallOpen(true);
              setIsMenuOpen(false);
            }}
            className="w-full bg-pink-600 text-white px-5 py-2 rounded-full mt-4"
          >
            Wish Wall
          </button>

        </div>
      </div>

      <WishWallModal
        isOpen={wishWallOpen}
        onClose={() => setWishWallOpen(false)}
      />
    </nav>
  );
}