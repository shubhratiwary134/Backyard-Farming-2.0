import {
  addMessageAndGetResponse,
  createChat,
} from "../Controllers/chatController";

const express = require("express");

const chatRoutes = express.Router();

chatRoutes.post("/create", createChat);
chatRoutes.post("/query", addMessageAndGetResponse);

export default chatRoutes;
