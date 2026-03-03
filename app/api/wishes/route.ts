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

export async function DELETE() {
  try {
    await connectDB();
    await Wish.deleteMany({});
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete wishes:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
