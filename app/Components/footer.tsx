"use client"

import { motion } from "framer-motion"
import { Instagram, Camera } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 text-white overflow-hidden">

      {/* 🪔 Mandala Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/mandala.svg')] bg-center bg-no-repeat bg-contain pointer-events-none" />

      {/* Blessing Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-yellow-400 italic text-lg md:text-xl">
          "सुखी संसारासाठी मनःपूर्वक आशीर्वाद."
        </p>
        <p className="text-gray-400 mt-2">
          Wishing you a lifetime of love, joy, and togetherness.
        </p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 mb-10"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          className="bg-[#4b0f1e] p-4 rounded-full border border-yellow-500/30 hover:bg-yellow-600 transition duration-300 hover:scale-110 shadow-lg"
        >
          <Instagram className="text-white" size={24} />
        </a>

        <a
          href="https://snapchat.com"
          target="_blank"
          className="bg-[#4b0f1e] p-4 rounded-full border border-yellow-500/30 hover:bg-yellow-600 transition duration-300 hover:scale-110 shadow-lg"
        >
          <Camera className="text-white" size={24} />
        </a>
      </motion.div>

      {/* Divider */}
      <div className="w-32 h-[1px] bg-yellow-500 mx-auto mb-6 opacity-40" />

      {/* Signature Line */}
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Gift made with love & blessings
        </p>
        <p className="text-yellow-400 font-semibold mt-2">
          — By Your Brother 💛
        </p>
      </div>

    </footer>
  )
}
