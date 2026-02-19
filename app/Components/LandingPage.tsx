"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const weddingDate = new Date("2026-04-03T12:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = calculateTimeLeft();

        // Only update if value changes (prevents infinite re-render)
        if (
          prev.days !== next.days ||
          prev.hours !== next.hours ||
          prev.minutes !== next.minutes ||
          prev.seconds !== next.seconds
        ) {
          return next;
        } else {
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white px-6"
    >
      {/* Couple Names */}
      <h1 className="text-5xl md:text-7xl font-bold text-pink-700 mb-4">
        Sanchita ❤️ Tejas
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Are Getting Married
      </p>

      {/* Wedding Date */}
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        3 April 2026 | 12:30 PM | Nagpur, Maharashtra
      </p>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>

      {/* Tagline */}
      <p className="text-lg md:text-xl italic text-gray-700 max-w-2xl">
        &ldquo;Two hearts, one soul, and a lifetime of love.&rdquo;
      </p>

      {/* Scroll Down Indicator */}
      <div className="mt-16 animate-bounce text-pink-600 text-sm">
        ↓ Scroll to know our story ↓
      </div>
    </section>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-28 md:w-36">
      <p className="text-3xl md:text-4xl font-bold text-pink-600">
        {String(value).padStart(2, "0")}
      </p>
      <p className="text-gray-600 mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
}
