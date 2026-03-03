"use server";

import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";

interface WishType {
  _id: { toString(): string };
  name: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export async function addWish(name: string, message: string) {
  await connectDB();
  await Wish.create({ name, message });
}

export async function getWishes() {
  await connectDB();

  const wishes = await Wish.find()
    .sort({ createdAt: -1 })
    .lean<WishType[]>(); // ✅ typed lean

  return wishes.map((wish) => ({
    ...wish,
    _id: wish._id.toString(),
  }));
}