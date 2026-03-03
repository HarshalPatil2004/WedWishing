import mongoose, { Schema, model, models } from "mongoose";

export interface IWish {
  name: string;
  message: string;
  createdAt?: Date;
}

const wishSchema = new Schema<IWish>(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Wish = models.Wish || model<IWish>("Wish", wishSchema);