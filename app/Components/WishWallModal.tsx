"use client";

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
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit wish");
      }

      setName("");
      setMessage("");
      onClose();
    } catch (error) {
      console.error("Error submitting wish:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Send Your Wish 💖
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your wish..."
          className="w-full border rounded-lg p-2 mb-4"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}