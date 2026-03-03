import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var _mongoose: MongooseGlobal | undefined;
}

const cached = global._mongoose ?? {
  conn: null,
  promise: null,
};

if (!global._mongoose) {
  global._mongoose = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}