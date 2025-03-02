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

const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  messages: [messageSchema],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Added a hook that runs before the saving of the document to set the current TimeStamp for the Updated at
chatSchema.pre("save", function (next) {
  // with "save" we tell the mongoose to run this before the operation of "saving"
  this.updatedAt = new Date();
  // with next() middleware we tell mongo to continue with the saving
  next();
});

export const Chat = mongoose.model("Chat", chatSchema);
