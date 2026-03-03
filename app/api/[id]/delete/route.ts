import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Wish } from "@/models/Wish";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  await Wish.findByIdAndDelete(params.id);

  return NextResponse.json({
    message: "Deleted successfully",
  });
}