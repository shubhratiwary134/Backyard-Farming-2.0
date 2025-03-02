import { Request, Response } from "express";
import { Chat } from "../Models/ChatModel";

interface ChatRequestBody {
  userId: string;
  firstQuery: string;
}

export const createChat = async (req: Request, res: Response) => {
  const { userId, firstQuery } = req.body as ChatRequestBody;

  if (!userId) {
    return res
      .status(400)
      .json({ message: "No userId found , can't create chat" });
  }
  if (!firstQuery) {
    return res
      .status(400)
      .json({ message: "cannot create chat first message is empty " });
  }
  try {
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
