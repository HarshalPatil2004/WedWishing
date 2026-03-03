"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { SerializedWish } from "@/app/actions/wishActions";

function formatDate(dateString?: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function WishWallPage() {
  const [wishes, setWishes] = useState<SerializedWish[] | null>(null);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const [clearing, setClearing] = useState(false);

  async function fetchWishes() {
    try {
      const res = await fetch("/api/wishes", { cache: "no-store" });
      if (!res.ok) {
        setWishes([]);
        return;
      }
      const data = await res.json();
      setWishes(data.wishes ?? []);
    } catch (err) {
      console.error("Failed to fetch wishes:", err);
      setWishes([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWishes();
    intervalRef.current = window.setInterval(fetchWishes, 8000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="w-full min-h-screen py-24 px-4 md:px-8 bg-linear-to-b from-white via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-6xl">💌</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-linear-to-r from-rose-600 to-pink-600 mb-4">
            Wish Wall
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of heartfelt blessings and wishes from our beloved family and friends
          </p>
        </div>

        {/* Exit / Back to Home button + Clear All */}
        <div className="text-center mb-8 flex items-center justify-center gap-4">
          <Link href="/" className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">
            ← Back to Home
          </Link>
          {wishes && wishes.length > 0 && (
            <button
              onClick={async () => {
                if (!confirm("Are you sure you want to delete ALL wishes? This cannot be undone.")) return;
                try {
                  setClearing(true);
                  const res = await fetch("/api/wishes", { method: "DELETE" });
                  const data = await res.json();
                  if (res.ok && data.success) {
                    setWishes([]);
                  } else {
                    alert("Failed to clear wishes");
                  }
                } catch (err) {
                  console.error(err);
                  alert("Failed to clear wishes");
                } finally {
                  setClearing(false);
                }
              }}
              disabled={clearing}
              className="inline-block px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition disabled:opacity-50"
            >
              {clearing ? "Clearing..." : "Clear All Wishes"}
            </button>
          )}
        </div>

        {/* Wishes Count */}
        {wishes && wishes.length > 0 && (
          <div className="text-center mb-12">
            <p className="text-lg font-semibold text-gray-700">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-500">
                {wishes.length}
              </span>
              <span className="text-gray-600 ml-3">{wishes.length === 1 ? "precious wish" : "precious wishes"} shared with us</span>
            </p>
          </div>
        )}

        {/* Wishes Grid */}
        {wishes && wishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishes.map((wish) => (
              <div key={wish._id} className="group relative h-full">
                {/* Card */}
                <div className="h-full bg-white rounded-3xl shadow-lg border border-rose-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden">
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-rose-400 via-pink-400 to-rose-300"></div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                    💝
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full relative">
                    {/* Name and Date */}
                    <div className="mb-6 pb-4 border-b border-rose-100">
                      <h3 className="text-2xl font-serif text-rose-700 mb-2">
                        {wish.name}
                      </h3>
                      {wish.createdAt && (
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                          📅 {formatDate(wish.createdAt)}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <p className="text-gray-700 leading-relaxed grow italic text-base">
                      &quot;{wish.message}&quot;
                    </p>

                    {/* Bottom decoration */}
                    <div className="flex gap-2 mt-6 pt-4 border-t border-rose-100">
                      <span>💕</span>
                      <span>✨</span>
                      <span>💍</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-rose-50 via-transparent to-pink-50 opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        ) : loading ? (
          <div className="text-center py-20 text-gray-500">Loading wishes…</div>
        ) : (
          /* Empty State */
          <div className="text-center py-32">
            <div className="text-8xl mb-8 animate-bounce">💫</div>
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              No Wishes Yet
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              Be the first to share your love and blessings with the newlyweds! Your words will brighten their special day.
            </p>
            <Link
              href="/#wishes"
              className="inline-block px-10 py-4 bg-linear-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-lg"
            >
              💝 Add Your Blessing
            </Link>
          </div>
        )}
      </div>

      {/* Note: custom keyframes removed to keep this a Server Component; Tailwind's `animate-bounce` is used instead. */}
    </section>
  );
}
