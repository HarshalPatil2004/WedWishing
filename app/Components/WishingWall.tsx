/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import WishingWallModal from "./WishWallModal";
export default function WishingWall() {

  // ✅ Hooks MUST be inside component
  const [wishes, setWishes] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchWishes = async () => {
    try {
      const res = await fetch("/api/wishes");
      const data = await res.json();
      setWishes(data);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div>
      {/* Your existing UI here */}

      {wishes.map((wish) => (
        <div key={wish._id}>
          <h3>{wish.name}</h3>
          <p>{wish.message}</p>
          <p>❤️ {wish.likes}</p>
        </div>
      ))}

      <WishingWallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onWishAdded={fetchWishes}
      />
    </div>
  );
}