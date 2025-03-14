import {
  addMessageAndGetResponse,
  createChat,
  getChats,
  getSpecificChat,
} from "../Controllers/chatController";

const express = require("express");

const chatRoutes = express.Router();

chatRoutes.post("/create", createChat);
chatRoutes.post("/query", addMessageAndGetResponse);
chatRoutes.get("/getChats/:id", getChats);
chatRoutes.get("/getSpecificChat/:id", getSpecificChat);
export default chatRoutes;
