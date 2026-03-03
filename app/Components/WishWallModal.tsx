"use client"

import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useWishesContext } from "@/app/context/WishesContext"

interface WishWallModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WishWallModal({ isOpen, onClose }: WishWallModalProps) {
  const { wishes } = useWishesContext()

  if (typeof document === "undefined") return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 overflow-y-auto isolate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl max-h-[calc(100vh-2rem)] my-auto overflow-hidden rounded-2xl bg-gradient-to-b from-[#4b0f1e] to-[#2b0a14] border border-yellow-500/30 shadow-2xl flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-6 bg-[#4b0f1e]/95 backdrop-blur-sm border-b border-yellow-500/20">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-yellow-400">
                शुभेच्छा संदेश
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-yellow-500/20 text-white transition"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Wishes list - full width, centered content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col items-center">
              {wishes.length === 0 ? (
                <p className="text-center text-gray-400 italic py-12 w-full">
                  No blessings yet. Be the first to send your wishes!
                </p>
              ) : (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {wishes.map((wish) => (
                    <motion.div
                      key={wish.createdAt}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#2b0a14]/80 p-5 rounded-xl border border-yellow-500/20 min-h-[100px]"
                    >
                      <p className="text-yellow-400 font-semibold">{wish.name}</p>
                      <p className="text-gray-300 mt-2 italic text-sm line-clamp-3">"{wish.message}"</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
