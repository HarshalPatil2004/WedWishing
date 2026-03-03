import mongoose, { Schema, model, models } from "mongoose";

export interface IWish {
  name: string;
  message: string;
  likes: number;
  approved: boolean;
  createdAt?: Date;
}

const wishSchema = new Schema<IWish>(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    likes: { type: Number, default: 0 },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Wish =
  models.Wish || model<IWish>("Wish", wishSchema);