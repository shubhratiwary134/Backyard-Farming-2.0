import { getProfile } from "../Controllers/userController";

const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/profile", getProfile);
export default userRoutes;
