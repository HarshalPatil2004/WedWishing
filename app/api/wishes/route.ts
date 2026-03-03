import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Wish } from "@/models/Wish";

export async function GET() {
  await connectDB();

  const wishes = await Wish.find({ approved: true })
    .sort({ createdAt: -1 });

  return NextResponse.json(wishes);
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.name || !body.message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const newWish = await Wish.create({
      name: body.name,
      message: body.message,
    });

    return NextResponse.json(newWish, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}