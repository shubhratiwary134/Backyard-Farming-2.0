import {
  addMessageAndGetResponse,
  createChat,
  getChats,
} from "../Controllers/chatController";

const express = require("express");

const chatRoutes = express.Router();

chatRoutes.post("/create", createChat);
chatRoutes.post("/query", addMessageAndGetResponse);
chatRoutes.get("/getChats/:id", getChats);

export default chatRoutes;
