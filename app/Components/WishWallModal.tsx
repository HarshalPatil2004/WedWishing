"use client";

import { useState } from "react";

export default function WishWallModal({
  close,
}: {
  close: () => void;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
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

        <button
          onClick={handleSubmit}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}