import { Schema, model } from "mongoose";

const reservationSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: true,
    },
    vehicle: {
      type: String,
    },
    service: {
      type: String,
    },
    status: {
      type: String,
    }
    
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("reservation", reservationSchema);
