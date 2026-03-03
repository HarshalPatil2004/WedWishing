import mongoose, { Schema, model, models } from "mongoose";

export interface IWish {
  name: string;
  message: string;
  likes: number;
  createdAt?: Date;
}

const wishSchema = new Schema<IWish>(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Wish =
  models.Wish || model<IWish>("Wish", wishSchema);