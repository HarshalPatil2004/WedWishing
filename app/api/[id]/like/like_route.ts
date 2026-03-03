import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Wish } from "@/models/Wish";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  await Wish.findByIdAndDelete(id);

  return NextResponse.json({
    message: "Deleted successfully",
  });
}