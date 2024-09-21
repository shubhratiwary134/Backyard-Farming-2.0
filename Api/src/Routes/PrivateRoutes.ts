import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import userRoutes from "./userRoutes";

const express = require("express");

const privateRouter = express.Router();

const clerkConfig = {
  apiKey: process.env.CLERK_SECRET_KEY,
  apiVersion: 2,
};

// we first check the authentication for the private routes
privateRouter.use(ClerkExpressWithAuth());

privateRouter.use("/user", userRoutes);
export default privateRouter;
