import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import userRoutes from "./userRoutes";
import plantoriumRoutes from "./PlantoriumRoutes";

const express = require("express");

const privateRouter = express.Router();

// we first check the authentication for the private routes
privateRouter.use(ClerkExpressWithAuth());

privateRouter.use("/user", userRoutes);
privateRouter.use("/plantorium", plantoriumRoutes);
export default privateRouter;
