"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white via-rose-50 to-pink-100 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-rose-100">
        <div className="text-6xl mb-6">🥂</div>
        <h2 className="text-3xl font-serif text-rose-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8 italic">
          &quot;True love never runs smooth, and neither does code sometimes.&quot;
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-linear-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
