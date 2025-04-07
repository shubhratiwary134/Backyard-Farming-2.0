import { Request, Response } from "express";
import { Chat } from "../Models/ChatModel";
import axios from "axios";

const User = require("../Models/UserModel");
const AiBaseURL = process.env.AI_BASE_URL;
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
    const words = firstQuery.split(" ");
    // if greater than 15 we add ...
    const chatTitle =
      words.length > 7 ? words.slice(0, 7).join(" ") + "..." : words.join(" ");

    const chat = await Chat.create({
      userId,
      chatTitle,
      messages: [
        {
          role: "user",
          text: firstQuery,
        },
      ],
    });
    const simplifiedChat = {
      chatId: chat._id,
      chatTitle: chat.chatTitle,
      messages: chat.messages,
    };
    // can pass chat._id to the frontend
    return res
      .status(201)
      .json({ message: "chat created successfully", simplifiedChat });
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
    if (chat.messages.length > 1) {
      chat.messages.push({
        role: "user",
        text: query,
      });
    }
    // converting the array into string to pass as a payload
    const chatHistory = chat.messages
      .slice(-5)
      .map(
        (message) => `${message.role == "bot" ? "AI" : "User"}:${message.text}`
      )
      .join("\n");

    const payload = {
      question: `You are an AI chatbot. Use the conversation history for context to maintain coherence. 
  conversation History: 
  ${chatHistory}
  Current User Query:
  User: ${query}
  `,
    };
    const response = await axios.post(`${AiBaseURL}/api/v1/query`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    res.status(500).json({ message: `Internal Server Error : ${error}` });
  }
};

export const getChats = async (req: Request, res: Response) => {
  const userId = req.params.id;
  if (!userId) {
    return res
      .status(400)
      .json({ message: "invalid request userId not found" });
  }
  try {
    const chats = await Chat.find({ userId });
    if (!chats) {
      return res.status(404).json({ message: "no chats found for the user " });
    }
    // since we dont need complete object in the frontend with timestamps , we will simplify the chats array and send that to the frontend
    // for each chat object we return chatId, chatTitle and messages
    const simplifiedChats = chats.map((chat) => ({
      chatId: chat._id,
      chatTitle: chat.chatTitle,
      messages: chat.messages,
    }));
    return res.status(200).json({
      message: "successfully found chats for the user ",
      simplifiedChats,
    });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const getSpecificChat = async (req: Request, res: Response) => {
  const chatId = req.params.id;
  if (!chatId) {
    return res
      .status(400)
      .json({ message: "ChatId not found, invalid request" });
  }
  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res
        .status(404)
        .json({ message: "chat not found for this chatId" });
    }
    const newCurrentChat = {
      currentChatId: chat._id,
      currentChatTitle: chat.chatTitle,
      currentMessages: chat.messages,
    };
    return res
      .status(200)
      .json({ message: "successfully fetched the chat ", newCurrentChat });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const deleteSpecificChat = async (req: Request, res: Response) => {
  const chatId = req.params.id;
  if (!chatId) {
    return res
      .status(400)
      .json({ message: "ChatId not found, invalid request" });
  }
  try {
    const chat = await Chat.findByIdAndDelete(chatId);
    if (!chat) {
      return res
        .status(404)
        .json({ message: "chat not found for this chatId" });
    }
    return res
      .status(200)
      .json({ message: "chat successfully deleted", chatId });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};
