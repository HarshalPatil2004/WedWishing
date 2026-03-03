import mongoose, { Schema } from "mongoose";

const WishSchema = new Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Wish ||
  mongoose.model("Wish", WishSchema);