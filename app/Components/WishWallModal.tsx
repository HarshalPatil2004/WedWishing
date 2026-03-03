"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onWishAdded: () => void;
}

export default function WishingWallModal({
  isOpen,
  onClose,
  onWishAdded,
}: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 Only added this line for visibility control
  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!name || !message) return;

    setLoading(true);

    try {
      await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      onWishAdded();
      onClose();
    } catch (err) {
      console.error("Error submitting wish", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        <h3 className="text-2xl font-serif text-rose-700 text-center mb-6">
          Send Your Blessings 💖
        </h3>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your beautiful message..."
          rows={4}
          className="w-full mb-4 px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition duration-300"
        >
          {loading ? "Sending..." : "Submit Wish"}
        </button>
      </div>
    </div>
  );
}