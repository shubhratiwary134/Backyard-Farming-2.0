import { Request, Response } from "express";
import { Chat } from "../Models/ChatModel";

const User = require("../Models/ChatModel");

interface ChatRequestBody {
  userId: string;
  firstQuery: string;
}

export const createChat = async (req: Request, res: Response) => {
  const { userId, firstQuery } = req.body as ChatRequestBody;

  if (!userId || !firstQuery) {
    return res.status(400).json({
      message: "Invalid request - missing fields: (userId) or (firstQuery)",
    });
  }

  try {
    const userExists = await User.findOne({ clerkUserId: userId });
    if (!userExists) {
      return res
        .status(404)
        .json({ message: "User not found — invalid clerkUserId" });
    }
    const chat = await Chat.create({
      userId,
      messages: [
        {
          role: "user",
          text: firstQuery,
        },
      ],
    });
    return res.status(201).json({ message: "chat created successfully", chat });
  } catch (err) {
    return res.status(500).json({ message: `error creating the chat ${err}` });
  }
};
