"use client"

import { useEffect, useState } from "react"

export interface Wish {
  name: string
  message: string
  createdAt: string
}

export function useWishes() {
  const [wishes, setWishes] = useState<Wish[]>([])

  // Load wishes from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("wedding_wishes")
    if (stored) {
      setWishes(JSON.parse(stored))
    }
  }, [])

  // Save wishes to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes))
  }, [wishes])

  const addWish = (name: string, message: string) => {
    const newWish: Wish = {
      name,
      message,
      createdAt: new Date().toISOString(),
    }

    setWishes((prev) => [newWish, ...prev])
  }

  return { wishes, addWish }
}
