"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react"

export interface Wish {
  name: string
  message: string
  createdAt: string
}

interface WishesContextType {
  wishes: Wish[]
  addWish: (name: string, message: string) => void
}

const WishesContext = createContext<WishesContextType | null>(null)

export function WishesProvider({ children }: { children: ReactNode }) {
  const [wishes, setWishes] = useState<Wish[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("wedding_wishes")
    if (stored) {
      setWishes(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes))
  }, [wishes])

  const addWish = useCallback((name: string, message: string) => {
    const newWish: Wish = {
      name,
      message,
      createdAt: new Date().toISOString(),
    }
    setWishes((prev) => [newWish, ...prev])
  }, [])

  return (
    <WishesContext.Provider value={{ wishes, addWish }}>
      {children}
    </WishesContext.Provider>
  )
}

export function useWishesContext() {
  const ctx = useContext(WishesContext)
  if (!ctx) {
    throw new Error("useWishesContext must be used within WishesProvider")
  }
  return ctx
}
