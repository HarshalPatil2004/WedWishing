"use client";

import { useState } from "react";
import WishWallModal from "./WishWallModal";

interface Wish {
  _id: string;
  name: string;
  message: string;
}

interface Props {
  wishes: Wish[];
}

export default function WishingWallClient({ wishes }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white text-center">
      <h2 className="text-5xl font-serif text-rose-600 mb-10">
        Wedding Wishes 💌
      </h2>

      <button
        onClick={() => setOpen(true)}
        className="bg-pink-600 text-white px-5 py-2 rounded-full"
      >
        Open Wish Wall
      </button>

      <WishWallModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      <div className="grid md:grid-cols-3 gap-8 mt-12 px-8">
        {wishes.map((wish) => (
          <div
            key={wish._id}
            className="bg-white p-6 rounded-2xl shadow-md border border-rose-100"
          >
            <h3 className="text-xl font-semibold text-rose-700 mb-2">
              {wish.name}
            </h3>
            <p className="text-gray-700">{wish.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}