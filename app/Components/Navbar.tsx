"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Music, Music2 } from "lucide-react";

/*
  Fixed Version:
  - Removed lucide-react dependency (was causing runtime null error)
  - Added lightweight inline SVG icons instead
  - Safe for Next.js + Vite + CRA environments
  - CHANGES: Added responsive mobile dropdown menu with hamburger icon
  - ADDED: Music button on mobile (left side), Wish Wall link in navigation
*/

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5">
      {children}
    </span>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ADDED: Track music state for mobile button
  const [musicOn, setMusicOn] = useState(false);

  // ADDED: Sync music state with shared audio element
  useEffect(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (musicOn && audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay was prevented by browser");
        });
      }
    } else if (!musicOn && audio) {
      audio.pause();
    }
  }, [musicOn]);

  // ADDED: Handle mobile music button click
  const handleMobileMusic = () => {
    setMusicOn(!musicOn);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold text-pink-600">
          <Image src="/gallery/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span>WedWishher</span>
        </div>

        {/* Desktop Navigation Links - UNCHANGED */}
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

          <Link href="/wishwall" className="flex items-center gap-2 hover:text-pink-600 transition font-semibold text-pink-600">
            <Icon><SimpleCircleIcon /></Icon> Wish Wall
          </Link>
        </div>

        {/* Desktop CTA Button - UNCHANGED */}
        <div className="hidden md:block">
          <Link
            href="/wishwall"
            className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition shadow-md cursor-pointer font-semibold"
          >
            💌 Wish Wall
          </Link>
        </div>

        {/* ========== MOBILE MENU SECTION - CHANGES START HERE ========== */}
        {/* Mobile Menu Container */}
        <div className="md:hidden flex items-center gap-3">
          {/* ADDED: Music Button (Mobile) - LEFT SIDE */}
          <button
            onClick={handleMobileMusic}
            className="bg-yellow-600 text-white p-2 rounded-full hover:bg-yellow-700 transition shadow-lg"
            title={musicOn ? "Pause Music" : "Play Music"}
          >
            {musicOn ? <Music2 size={20} /> : <Music size={20} />}
          </button>

          {/* Hamburger Icon - RIGHT SIDE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-pink-600 focus:outline-none p-2 transition-transform duration-300"
            style={{ transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              /* X Icon */
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ========== MOBILE DROPDOWN MENU - SMOOTH ANIMATION ========== */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {/* Mobile Nav Links */}
            <Link
              href="#home"
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition duration-300 font-medium flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Home
            </Link>

            <Link
              href="#story"
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition duration-300 font-medium flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Our Story
            </Link>

            <Link
              href="#gallery"
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition duration-300 font-medium flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Gallery
            </Link>

            <Link
              href="#events"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Events
            </Link>

            <Link
              href="/wishwall"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-pink-600 hover:text-pink-700 bg-pink-50 transition duration-300 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>💌</span> Wish Wall
            </Link>

          </div>
        </div>
      )}
      {/* ========== MOBILE MENU SECTION - CHANGES END HERE ========== */}

    </nav>
  );
}
