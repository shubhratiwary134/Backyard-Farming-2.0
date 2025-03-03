import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "bot"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // Clerk user ID used for referencing
      ref: "User",
      required: true,
    },
    messages: [messageSchema],
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
