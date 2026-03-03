/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [wishes, setWishes] = useState<any[]>([]);

  const fetchAll = async () => {
    const res = await fetch("/api/wishes");
    const data = await res.json();
    setWishes(data);
  };

  const approveWish = async (id: string) => {
    await fetch(`/api/wishes/${id}/approve`, {
      method: "PATCH",
    });
    fetchAll();
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Moderation Panel</h1>

      {wishes.map((wish) => (
        <div key={wish._id} className="border p-4 mb-4 rounded">
          <h3 className="font-bold">{wish.name}</h3>
          <p>{wish.message}</p>

          <button
            onClick={() => approveWish(wish._id)}
            className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}