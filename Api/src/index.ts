import { Request, Response } from "express";
require("dotenv").config();
import { closeConnectionMongoDB, connectMongoDB } from "./Config/db";
const express = require("express");
const app = express();
const PORT = 3000;

// start server function that also handles the process termination logic

const startServer = async () => {
  await connectMongoDB();
  app.use(express.json()); // parse the JSON data into the request Format

  app.listen(PORT, () => {
    console.log("lets fucking go brother ");
  });

  // termination logic to close the connection

  process.on("SIGINT", async () => {
    await closeConnectionMongoDB();
    console.log("successfully disconnected");
    process.exit(0); // exit successful
  });

  process.on("SIGTERM", async () => {
    await closeConnectionMongoDB();
    process.exit(0); // exit successful
  });
};

startServer();
