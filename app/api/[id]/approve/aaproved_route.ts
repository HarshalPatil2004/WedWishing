import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Wish } from "@/models/Wish";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const updated = await Wish.findByIdAndUpdate(
    params.id,
    { approved: true },
    { new: true }
  );

  return NextResponse.json(updated);
}