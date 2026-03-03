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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await addWish(name, message);

    if (result.success) {
      setSuccess(true);
      setName("");
      setMessage("");
      setTimeout(() => {
        router.refresh();
        setSuccess(false);
        onClose();
      }, 1500);
    } else {
      setError(result.error || "Failed to add wish");
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-linear-to-br from-white via-rose-50 to-pink-50 rounded-3xl shadow-2xl w-full max-w-md border border-rose-100 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-rose-500 to-pink-500 px-8 py-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-2">
            Share Your Blessing 💝
          </h2>
          <p className="text-rose-100 text-sm">Send your heartfelt wishes to the couple</p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          {success ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-serif text-rose-600 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your wish has been added to the wall</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  maxLength={50}
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition placeholder-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
                <p className="text-xs text-gray-500 mt-1">{name.length}/50</p>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Wish 💌
                </label>
                <textarea
                  placeholder="Share your blessings and wishes for the couple..."
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition resize-none placeholder-gray-400"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                />
                <p className="text-xs text-gray-500 mt-1">{message.length}/500</p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={loading || !name.trim() || !message.trim()}
                  className="flex-1 bg-linear-to-r from-rose-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:from-rose-600 hover:to-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting...
                    </span>
                  ) : (
                    "Send Wish ✨"
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-300 transition disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}