"use client";

import { useState } from "react";
import WishWallModal from "./WishWallModal";

export default function WishingWallClient() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-linear-to-b from-white via-rose-50 to-pink-100 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-linear-to-r from-rose-600 to-pink-600 mb-4">
            Wedding Wishes 💌
          </h2>
          <p className="text-gray-600 text-lg">Share your heartfelt blessings with us</p>
        </div>

        {/* Add Wish Button - Only CTA */}
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="group relative px-10 py-5 text-lg bg-linear-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <span className="absolute inset-0 bg-linear-to-r from-pink-600 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-3">
              <span>💝</span>
              <span>Add Your Blessing</span>
              <span>💝</span>
            </span>
          </button>
        </div>

        {/* Info text */}
        <p className="text-gray-500 mt-8 text-sm">
          Click the button above to share your wishes. View all blessings on our Wish Wall page!
        </p>
      </div>

      {/* Modal */}
      <WishWallModal isOpen={open} onClose={() => setOpen(false)} />

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}