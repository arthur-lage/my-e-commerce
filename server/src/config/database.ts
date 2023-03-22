import mongoose from "mongoose";

export async function connectDatabase() {
  await mongoose.connect(String(process.env.DATABASE_URL));
}
