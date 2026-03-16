import { NextResponse } from "next/server";
import { getWishes } from "@/app/actions/wishActions";
import { connectDB } from "@/lib/mongodb";
import Wish from "@/models/Wish";


export async function GET() {
  try {
    const wishes = await getWishes();
    return NextResponse.json({ wishes });
  } catch (err) {
    console.error("Failed to fetch wishes:", err);
    return NextResponse.json({ wishes: [] }, { status: 500 });
  }
}
