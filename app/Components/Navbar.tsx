"use client";

import React, { useState } from "react";
import Link from "next/link";
import WishWallModal from "./WishWallModal";

/*
  Fixed Version:
  - Removed lucide-react dependency (was causing runtime null error)
  - Added lightweight inline SVG icons instead
  - Safe for Next.js + Vite + CRA environments
*/

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5">
      {children}
    </span>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 21s-6.716-4.35-9.193-7.272C.533 11.2 1.2 7.8 3.6 6.2c2.1-1.4 4.8-.6 6.4 1.2 1.6-1.8 4.3-2.6 6.4-1.2 2.4 1.6 3.067 5 0 7.528C18.716 16.65 12 21 12 21z" />
    </svg>
  );
}

function SimpleCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

export default function WeddingNavbar() {
  const [wishWallOpen, setWishWallOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold text-pink-600">
          <HeartIcon />
        <span>WedWishher</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="#home" className="flex items-center gap-2 hover:text-pink-600 transition">
            <Icon><SimpleCircleIcon /></Icon> Home
          </Link>

          <Link href="#story" className="flex items-center gap-2 hover:text-pink-600 transition">
            <Icon><SimpleCircleIcon /></Icon> Our Story
          </Link>

          <Link href="#gallery" className="flex items-center gap-2 hover:text-pink-600 transition">
            <Icon><SimpleCircleIcon /></Icon> Gallery
          </Link>

          <Link href="#events" className="flex items-center gap-2 hover:text-pink-600 transition">
            <Icon><SimpleCircleIcon /></Icon> Events
          </Link>

          <Link href="#wishes" className="flex items-center gap-2 hover:text-pink-600 transition">
            <Icon><SimpleCircleIcon /></Icon> Wishes
          </Link>
        </div>

        {/* CTA Button - opens Wish Wall modal */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => setWishWallOpen(true)}
            className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition shadow-md cursor-pointer"
          >
            Wish wall
          </button>
        </div>
      </div>

      <WishWallModal isOpen={wishWallOpen} onClose={() => setWishWallOpen(false)} />
    </nav>
  );
}
