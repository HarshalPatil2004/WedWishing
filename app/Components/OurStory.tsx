"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, MessageCircle, Sparkles, Crown } from "lucide-react";

/*
  Premium Our Story Component (Image-Free Version)
  - Maharashtrian Royal Maroon-Gold Theme
  - Animated Timeline (Framer Motion)
  - Decorative Royal Icons Instead of Images
  - Floating Glow Elements
  - Glassmorphism Cards
  - Elegant Serif Styling
*/

export default function OurStory() {
  const timeline = [
    {
      year: "The Beginning",
      title: "When Families Met",
      description:
        "In true Maharashtrian tradition, our story began through our families. What started as a simple meeting with warm smiles and tea slowly turned into a meaningful connection between two hearts.",
      icon: Users,
    },
    {
      year: "First Conversation",
      title: "Comfort & Understanding",
      description:
        "Their first conversation was simple yet unforgettable. There were no dramatic sparks, just a calm feeling that said — this feels right. Shared values and mutual respect laid the foundation.",
      icon: MessageCircle,
    },
    {
      year: "Growing Bond",
      title: "From Formal Talks to Forever",
      description:
        "With time, conversations grew longer and laughter grew louder. From discussing dreams to future responsibilities, their bond strengthened beautifully with every passing day.",
      icon: Heart,
    },
    {
      year: "Sakharpuda",
      title: "A Promise Sealed",
      description:
        "With blessings from both families, rings were exchanged and smiles were shared. The engagement marked not just a ceremony, but the beginning of a lifelong partnership.",
      icon: Sparkles,
    },
    {
      year: "3 April 2026",
      title: "The Wedding Day",
      description:
        "Surrounded by loved ones and divine blessings, Sanchita and Tejas begin their new journey — built on respect, understanding, laughter, and eternal companionship.",
      icon: Crown,
    },
  ];

  return (
    <section
      id="story"
      className="relative min-h-screen bg-gradient-to-b from-[#7a0000] via-[#a61c1c] to-[#fbe9e7] py-28 px-6 overflow-hidden"
    >
      {/* Soft Floating Glow Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-bold text-yellow-300 mb-6"
        >
          Where Families United, Two Hearts Found Forever
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-lg md:text-xl italic"
        >
          &quot;A marriage arranged by families, united by hearts.&quot;
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Vertical Timeline Line - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-yellow-200 h-full rounded-full shadow-lg"></div>

        <div className="space-y-12 md:space-y-24">
          {timeline.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Decorative Royal Icon Circle */}
                <div className="md:w-1/2 w-full flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 flex items-center justify-center shadow-2xl border-4 border-white"
                  >
                    <IconComponent className="w-20 h-20 text-maroon text-[#7a0000]" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 w-full">
                  <div className="backdrop-blur-xl bg-white/20 border border-yellow-300 shadow-2xl rounded-3xl p-10 hover:scale-105 transition duration-500">
                    <span className="text-sm text-yellow-300 font-semibold tracking-widest uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white mt-4 mb-6">
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ending Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-28 text-yellow-200 text-2xl md:text-3xl italic font-serif"
      >
        &quot;And so, our forever begins...&quot;
      </motion.div>

      {/* Scroll To Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-20 mb-10 text-center"
      >
        <p className="text-white text-lg md:text-xl mb-6 tracking-wide">
          From a beautiful arranged marriage blessed by our families to a lifetime of togetherness — continue the journey through our cherished moments
        </p>

        <a
          href="#gallery"
          className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 text-[#7a0000] font-semibold text-lg shadow-2xl hover:scale-105 transition duration-300"
        >
          Visit Our Gallery
        </a>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-6 text-yellow-300 text-3xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
