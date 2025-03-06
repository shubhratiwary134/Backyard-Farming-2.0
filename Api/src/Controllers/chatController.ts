import { Request, Response } from "express";
import { Chat } from "../Models/ChatModel";
import axios from "axios";

const User = require("../Models/ChatModel");

export const createChat = async (req: Request, res: Response) => {
  const { userId, firstQuery } = req.body;

  if (typeof userId !== "string" || typeof firstQuery !== "string") {
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
    // can pass chat._id to the frontend
    return res.status(201).json({ message: "chat created successfully", chat });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error creating the chat ${error}` });
  }
};

export const addMessageAndGetResponse = async (req: Request, res: Response) => {
  const { chatId, query } = req.body;
  if (typeof chatId !== "string" || typeof query !== "string") {
    return res
      .status(400)
      .json({ message: "Invalid Fields: chatId and query must be strings" });
  }

  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res
        .status(404)
        .json({ message: "No Chat Found for the particular chatId" });
    }
    chat.messages.push({
      role: "user",
      text: query,
    });
    const payload = {
      question: query,
    };
    const response = await axios.post(
      "http://127.0.0.1:5000/api/v1/query",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseText = response.data.response;
    chat.messages.push({
      role: "bot",
      text: responseText,
    });
    await chat.save();
    return res
      .status(200)
      .json({ message: "Successfully added the message", responseText });
  } catch (error) {
    console.error("Error in addMessageAndGetResponse:", error);
    res.status(500).json({ message: `Internal Server Error : ${error}` });
  }
};
