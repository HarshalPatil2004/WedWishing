"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { X, Music, Music2, Images, Sparkles } from "lucide-react"

const images = [
  { src: "/gallery/image1.jpg", quote: "A beautiful moment captured." },
  { src: "/gallery/image2.jpg", quote: "Cherished memories forever." },
  { src: "/gallery/image3.jpg", quote: "Love in every frame." },
  { src: "/gallery/image4.jpg", quote: "Together we shine." },
  { src: "/gallery/image5.jpg", quote: "Eternal happiness." },
  { src: "/gallery/image6.jpg", quote: "A day to remember." },
  { src: "/gallery/image7.jpg", quote: "Pure joy." },
  { src: "/gallery/image8.jpg", quote: "Heartfelt smiles." },
  { src: "/gallery/image9.jpg", quote: "Unforgettable times." },
  { src: "/gallery/image10.jpg", quote: "Blissful moments." },
  { src: "/gallery/image11.jpg", quote: "Love story continues." },
  { src: "/gallery/image12.jpg", quote: "Forever yours." },
]

export default function WeddingGallery() {
  const [selected, setSelected] = useState<string | null>(null)
  const [musicOn, setMusicOn] = useState(false)
  const [galleryImages, setGalleryImages] = useState(images)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 500], [0, -50])

  /* ✅ Shuffle only on client to prevent hydration mismatch */
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGalleryImages(shuffled)
  }, [])

  /* ✅ Music play/pause control */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (musicOn) {
      const playPromise = audio.play()
      playPromise?.catch(() => {
        console.log("Autoplay prevented")
      })
    } else {
      audio.pause()
    }
  }, [musicOn])

  /* ✅ Attempt autoplay once on mount */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const playPromise = audio.play()
    playPromise
      ?.then(() => setMusicOn(true))
      .catch(() => setMusicOn(false))
  }, [])

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-[#4b0f1e] via-[#6d1a2f] to-[#2b0a14] text-white overflow-hidden"
    >
      {/* Mandala Background */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 opacity-10 bg-[url('/mandala.svg')] bg-center bg-no-repeat bg-contain pointer-events-none"
      />

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,215,0,0.15),transparent_40%)] animate-pulse" />
      </div>

      {/* Gallery Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-white/50 shadow-2xl mb-6"
        >
          <Images className="w-10 h-10 text-[#4b0f1e]" strokeWidth={2} />
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg">
            Our Gallery
          </h2>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>

        <p className="text-yellow-200/90 text-lg md:text-xl italic font-serif max-w-2xl mx-auto">
          Cherished moments from our wedding — scroll to explore
        </p>
      </motion.div>

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music/wedding.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={() => setMusicOn(!musicOn)}
        className="hidden md:block fixed top-4 right-4 md:right-6 z-50 bg-yellow-600 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition"
        title={musicOn ? "Pause Music" : "Play Music"}
      >
        {musicOn ? <Music2 size={20} /> : <Music size={20} />}
      </button>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer break-inside-avoid"
            onClick={() => setSelected(img.src)}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={img.src}
                alt="Bride and Groom"
                width={500}
                height={700}
                className="rounded-2xl object-cover w-full h-auto transform group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm italic text-yellow-300">{img.quote}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white hover:text-yellow-400"
            >
              <X size={30} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
            >
              <Image
                src={selected}
                alt="Full View"
                width={1200}
                height={1600}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}