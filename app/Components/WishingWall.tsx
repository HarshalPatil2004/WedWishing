/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import WishingWallModal from "./WishWallModal";

interface Wish {
  _id?: string;
  name: string;
  message: string;
  createdAt?: string;
}

export default function WishingWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [open, setOpen] = useState(false);

  const fetchWishes = async () => {
    try {
      const res = await fetch("/api/wishes");
      const data = await res.json();
      setWishes(data);
    } catch (err) {
      console.error("Failed to fetch wishes", err);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-rose-700 mb-4">
          Wedding Wishing Wall 💍
        </h2>
        <p className="text-gray-600 mb-8">
          Leave your blessings and make their special day even brighter ✨
        </p>

        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-rose-600 text-white rounded-full shadow-lg hover:bg-rose-700 transition duration-300"
        >
          Leave a Wish
        </button>

        {/* Wishes Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {wishes.map((wish) => (
            <div
              key={wish._id}
              className="bg-white rounded-2xl shadow-md p-6 border border-rose-100 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-rose-700 mb-2">
                {wish.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {wish.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <WishingWallModal
          onClose={() => setOpen(false)}
          onWishAdded={fetchWishes}
        />
      )}
    </section>
  );
}