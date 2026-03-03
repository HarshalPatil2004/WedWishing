import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Wish } from "@/models/Wish";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const updatedWish = await Wish.findByIdAndUpdate(
    params.id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  return NextResponse.json(updatedWish);
}