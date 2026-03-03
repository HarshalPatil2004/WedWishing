/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import WishWallModal from "./WishWallModal";

interface Wish {
  _id: string;
  name: string;
  message: string;
  likes: number;
  createdAt: string;
}

export default function WishingWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [open, setOpen] = useState(false);

  const fetchWishes = async () => {
    const res = await fetch("/api/wishes");
    const data = await res.json();
    setWishes(data);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleLike = async (id: string) => {
    const res = await fetch(`/api/wishes/${id}/like`, {
      method: "PATCH",
    });
    const updated = await res.json();

    setWishes((prev) =>
      prev.map((w) => (w._id === id ? updated : w))
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Wedding Wishing Wall 💍✨
      </h1>

      <button
        onClick={() => setOpen(true)}
        className="bg-pink-500 text-white px-6 py-2 rounded-lg"
      >
        Add Wish
      </button>

      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {wishes.map((wish, index) => (
          <div
            key={wish._id}
            className="bg-white shadow-xl rounded-2xl p-6 w-72 floating-card"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <h3 className="font-bold text-lg">{wish.name}</h3>
            <p className="mt-2">{wish.message}</p>

            <button
              onClick={() => handleLike(wish._id)}
              className="mt-4 text-pink-500 font-semibold"
            >
              ❤️ {wish.likes}
            </button>
          </div>
        ))}
      </div>

      {open && (
        <WishWallModal
          onClose={() => {
            setOpen(false);
            fetchWishes();
          } } isOpen={false}        />
      )}
    </div>
  );
}