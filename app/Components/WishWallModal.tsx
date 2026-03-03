"use client";

import { addWish } from "@/app/actions/wishActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface WishWallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishWallModal({
  isOpen,
  onClose,
}: WishWallModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  if (!isOpen) return null; // 👈 Important

  async function handleSubmit() {
    if (!name || !message) return;

    await addWish(name, message);
    router.refresh();
    setName("");
    setMessage("");
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          Send Your Blessing 💌
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Wish"
          className="w-full p-3 border rounded-lg mb-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Submit Wish
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}