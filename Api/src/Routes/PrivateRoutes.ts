import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import userRoutes from "./userRoutes";

const express = require("express");

const privateRouter = express.Router();



// we first check the authentication for the private routes
privateRouter.use(ClerkExpressWithAuth());

privateRouter.use("/user", userRoutes);
export default privateRouter;
