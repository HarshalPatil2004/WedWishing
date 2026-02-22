"use client"

import { motion } from "framer-motion"

const events = [
  {
    titleMarathi: "साखरपुडा",
    titleEnglish: "Sakharpuda",
    date: "27 January 2026",
    time: "12:30 PM",
    venue: "Gajanan Mandir Devasthan, Galbardi, Mohpa",
    description:
      "The beautiful beginning of two families coming together with sweetness and blessings.",
    quoteMarathi: "गोड सुरुवात, आयुष्यभर साथ.",
    quoteEnglish: "A sweet beginning for a lifetime together."
  },
  {
    titleMarathi: "हळद समारंभ",
    titleEnglish: "Haldi Ceremony",
    date: "1 April 2026",
    time: "7:00 PM",
    venue: "Bride's Residence",
    description:
      "A joyful ritual filled with turmeric, laughter, and the warmth of loved ones.",
    quoteMarathi: "हळदीचा रंग, आयुष्यभर आनंद.",
    quoteEnglish: "May this sacred glow bring lifelong happiness."
  },
  {
    titleMarathi: "मेहेंदी",
    titleEnglish: "Mehendi Ceremony",
    date: "31 March 2026",
    time: "10:00 AM",
    venue: "Bride's Residence",
    description:
      "Intricate henna designs symbolizing love, prosperity, and new beginnings.",
    quoteMarathi: "मेहेंदीचे रंग, प्रेमाची उमंग.",
    quoteEnglish: "The colors of henna reflect the joy of love."
  },
  {
    titleMarathi: "लग्न सोहळा",
    titleEnglish: "Wedding Ceremony",
    date: "3 April 2026",
    time: "12:30 PM",
    venue: "Shirbhate Sabhagruha, Kalmeshwar, Nagpur",
    description:
      "Sacred rituals, Mangalashtak chanting, Antarpat tradition, and the union of two souls.",
    quoteMarathi: "दोन जीव, एक हृदय.",
    quoteEnglish: "Two souls united as one heart."
  },
  {
    titleMarathi: "रिसेप्शन",
    titleEnglish: "Reception",
    date: "4 April 2026",
    time: "7:00 PM",
    venue: "Rekhade Vidyalaya, Pipla (Kinkhede)",
    description:
      "An elegant evening to celebrate love, blessings, and cherished memories with family and friends.",
    quoteMarathi: "आपल्या उपस्थितीने सोहळा पूर्ण होईल.",
    quoteEnglish: "Your gracious presence will make this celebration complete."
  }
]

export default function Events() {
  return (
    <section id="events" className="relative py-24 px-6 bg-gradient-to-b from-[#3b0a18] via-[#4b0f1e] to-[#2b0a14] text-white overflow-hidden">

      {/* 🪔 Decorative Mandala Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/mandala.svg')] bg-center bg-no-repeat bg-contain pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl text-yellow-400 font-serif mb-4">
          शुभ विवाह सोहळा
        </h2>
        <p className="text-gray-300 italic">
          Wedding Ceremonies & Sacred Celebrations
        </p>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-yellow-600 max-w-4xl mx-auto space-y-16">

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="ml-10 relative"
          >
            {/* Golden Dot */}
            <div className="absolute -left-[34px] top-3 w-6 h-6 bg-yellow-500 rounded-full shadow-lg border-4 border-[#3b0a18]" />

            {/* Event Card */}
            <div className="bg-[#4b0f1e]/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-yellow-500/20">

              <h3 className="text-2xl text-yellow-300 font-semibold">
                {event.titleMarathi}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {event.titleEnglish}
              </p>

              <p className="text-sm text-gray-300 mb-2">
                📅 {event.date} | ⏰ {event.time}
              </p>

              <p className="text-sm text-gray-400 mb-4">
                📍 {event.venue}
              </p>

              <p className="mb-4 text-gray-200 leading-relaxed">
                {event.description}
              </p>

              {/* Cultural Quote */}
              <div className="border-t border-yellow-500/20 pt-4">
                <p className="italic text-yellow-400">
                  {'"'}{event.quoteMarathi}{'"'}
                </p>
                <p className="italic text-gray-400 text-sm mt-1">
                  {event.quoteEnglish}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Family Blessings Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <p className="text-yellow-400 italic text-lg">
          &quot;कुटुंबाच्या आशीर्वादाने नवजीवनाची सुंदर सुरुवात.&quot;
        </p>
        <p className="text-gray-400 mt-2">
          With the blessings of our beloved families, we begin this sacred journey.
        </p>
      </motion.div>

    </section>
  )
}
