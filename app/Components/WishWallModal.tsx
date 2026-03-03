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

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!name || !message) return;

    await fetch("/api/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    setName("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-96">
        <h2 className="text-xl font-bold mb-4">Send Your Wish 💖</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your wish..."
          className="border p-2 w-full mb-4 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}