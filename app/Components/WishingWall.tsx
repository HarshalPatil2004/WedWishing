"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useWishesContext } from "@/app/context/WishesContext"

export default function MessageWall() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const { addWish } = useWishesContext()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) return

    addWish(name, message)

    setName("")
    setMessage("")
  }

  return (
    <section id="wishes" className="relative py-24 px-6 bg-gradient-to-b from-[#2b0a14] via-[#4b0f1e] to-[#3b0a18] text-white overflow-hidden">

      {/* 🪔 Mandala Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/mandala.svg')] bg-center bg-no-repeat bg-contain pointer-events-none" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl text-yellow-400 font-serif mb-4">
          शुभेच्छा संदेश
        </h2>
        <p className="text-gray-300 italic">
          Leave Your Blessings for the Beautiful Couple
        </p>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-[#4b0f1e]/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-yellow-500/20 space-y-6"
      >
        {/* Name Input */}
        <div>
          <label className="block text-sm text-yellow-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2b0a14] border border-yellow-500/30 focus:outline-none focus:border-yellow-400 text-white"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm text-yellow-300 mb-2">
            Your Wishes
          </label>
          <textarea
            placeholder="Write your heartfelt wishes..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full p-3 rounded-lg bg-[#2b0a14] border border-yellow-500/30 focus:outline-none focus:border-yellow-400 text-white resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 transition rounded-lg font-semibold shadow-lg hover:scale-105 duration-300"
        >
          Send Blessings 💛
        </button>
      </motion.form>

      {/* Footer Blessing Line */}
      <div className="text-center mt-20">
        <p className="text-yellow-400 italic text-lg">
          "आपल्या आशीर्वादाने हा सोहळा अधिक मंगल होईल."
        </p>
        <p className="text-gray-400 mt-2">
          Your blessings make this sacred celebration complete.
        </p>
      </div>

    </section>
  )
}
