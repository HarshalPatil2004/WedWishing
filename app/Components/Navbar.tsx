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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative top-0 left-0 w-full backdrop-blur-md shadow-md z-50">
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

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-pink-600 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-6 py-4 space-y-4">

            <Link
              href="#home"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="#story"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>

            <Link
              href="#gallery"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="#events"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>

            <Link
              href="#wishes"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Wishes
            </Link>

          </div>
        </div>
      )}   {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="#home"
              className="block flex items-center gap-2 text-gray-700 hover:text-pink-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Home
            </Link>

            <Link
              href="#story"
              className="block flex items-center gap-2 text-gray-700 hover:text-pink-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Our Story
            </Link>

            <Link
              href="#gallery"
              className="block flex items-center gap-2 text-gray-700 hover:text-pink-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Gallery
            </Link>

            <Link
              href="#events"
              className="block flex items-center gap-2 text-gray-700 hover:text-pink-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Events
            </Link>

            <Link
              href="#wishes"
              className="block flex items-center gap-2 text-gray-700 hover:text-pink-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon><SimpleCircleIcon /></Icon> Wishes
            </Link>

            <div className="pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setWishWallOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition shadow-md cursor-pointer"
              >
                Wish wall
              </button>
            </div>
          </div>
        </div>
      )}

      <WishWallModal isOpen={wishWallOpen} onClose={() => setWishWallOpen(false)} />
    </nav>
  );
}
