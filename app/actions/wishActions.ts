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

export interface SerializedWish {
  _id: string;
  name: string;
  message: string;
  createdAt?: string;
}

// Validation helper
function validateWish(name: string, message: string): { valid: boolean; error?: string } {
  if (!name || !message) {
    return { valid: false, error: "Name and message are required" };
  }
  if (name.trim().length < 2) {
    return { valid: false, error: "Name must be at least 2 characters" };
  }
  if (message.trim().length < 5) {
    return { valid: false, error: "Message must be at least 5 characters" };
  }
  if (name.length > 50) {
    return { valid: false, error: "Name must be less than 50 characters" };
  }
  if (message.length > 500) {
    return { valid: false, error: "Message must be less than 500 characters" };
  }
  return { valid: true };
}

// Sanitize message and disallow obvious code/import injection
function sanitizeMessage(message: string): { ok: boolean; sanitized?: string; error?: string } {
  const trimmed = message.trim();
  const lowered = trimmed.toLowerCase();

  const blacklist = ["import ", "require(", "<script", "</script", "onerror=", "onclick=", "src=", "fetch("];
  for (const p of blacklist) {
    if (lowered.includes(p)) {
      return { ok: false, error: "Message contains disallowed content" };
    }
  }

  // Escape HTML entities to prevent markup injection
  const escaped = trimmed
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  return { ok: true, sanitized: escaped };
}

export async function addWish(name: string, message: string): Promise<{ success: boolean; error?: string; wish?: SerializedWish }> {
  try {
    // Validate input
    const validation = validateWish(name, message);
    if (!validation.valid) {
      return { success: false, error: validation.error };
    }

    // Sanitize message and reject disallowed content
    const sanitizedResult = sanitizeMessage(message);
    if (!sanitizedResult.ok) {
      return { success: false, error: sanitizedResult.error };
    }

    const finalMessage = sanitizedResult.sanitized!;

    await connectDB();
    
    const wish = await Wish.create({
      name: name.trim(),
      message: finalMessage,
    });

    return {
      success: true,
      wish: {
        _id: wish._id.toString(),
        name: wish.name,
        message: wish.message,
        createdAt: wish.createdAt?.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error adding wish:", error);
    return { success: false, error: "Failed to add wish. Please try again." };
  }
}

export async function getWishes(): Promise<SerializedWish[]> {
  try {
    await connectDB();

    const wishes = await Wish.find()
      .sort({ createdAt: -1 })
      .lean<WishType[]>();

    return wishes.map((wish) => ({
      _id: wish._id.toString(),
      name: wish.name,
      message: wish.message,
      createdAt: wish.createdAt?.toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching wishes:", error);
    return [];
  }
}

export async function deleteWish(wishId: string): Promise<{ success: boolean; error?: string }> {
  try {
    await connectDB();
    
    const result = await Wish.findByIdAndDelete(wishId);
    
    if (!result) {
      return { success: false, error: "Wish not found" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting wish:", error);
    return { success: false, error: "Failed to delete wish" };
  }
}