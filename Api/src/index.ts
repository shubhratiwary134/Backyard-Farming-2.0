import { Request, Response } from "express";
require("dotenv").config();
import { closeConnectionMongoDB, connectMongoDB } from "./Config/db";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "https://backyard-farming-2-0.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
// start server function that also handles the process termination logic
const startServer = async () => {
  await connectMongoDB();
  app.use(cors(corsOptions));
  app.use(express.json()); // parse the JSON data into the request Format
  //Public Routes that don't require the authentication for the access
  app.use("/public", PublicRoutes);
  //Protected Routes that require the authentication
  app.use("/api", PrivateRoutes);
  app.listen(PORT, () => {
    console.log("Server connected to port 3000 ");
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
