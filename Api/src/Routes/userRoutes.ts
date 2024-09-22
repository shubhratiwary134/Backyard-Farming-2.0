import {
  deleteUser,
  getProfile,
  updateProfileMetadata,
} from "../Controllers/userController";

const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/profile", getProfile);
userRoutes.put("/:id", updateProfileMetadata);
userRoutes.delete("/:id", deleteUser);
export default userRoutes;
