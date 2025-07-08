import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    gmail: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{8}$/
    },
    age: {
      type: Number,
      required: true,
      min: 1
    }
  },
  {
    timestamps: true,
    strict: false
  }
);

export default model("client", clientSchema);
