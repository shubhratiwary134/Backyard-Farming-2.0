import { AuthObject, clerkClient } from "@clerk/clerk-sdk-node";
import { Request, Response } from "express";

interface UserProfileRequest extends Request {
  auth?: AuthObject;
}
const User = require("../Models/UserModel");
export const getProfile = async (req: UserProfileRequest, res: Response) => {
  const clerkUserId = req.auth?.userId;
  // if the userId is not string we put a check since the getUser method wants a string .
  if (!clerkUserId || typeof clerkUserId !== "string") {
    return res.status(401).json({ message: "Unauthorized: Invalid user ID" });
  }
  const clerkUserProfile = await clerkClient.users.getUser(clerkUserId);
  if (!clerkUserProfile) {
    return res.status(404).json({ message: "The user not found" });
  }
  const userProfileFromDB = await User.findOne({ clerkUserId });
  if (!userProfileFromDB) {
    return res.status(404).json({ message: "The user not found in the DB" });
  }
  const completeUserProfile = {
    id: clerkUserProfile.id,
    email: clerkUserProfile.emailAddresses[0]?.emailAddress,
    firstName: clerkUserProfile.firstName,
    lastName: clerkUserProfile.lastName,
    cropPreferences: userProfileFromDB.cropPreferences,
    defaultAddress: userProfileFromDB.defaultAddress,
    createdAt: userProfileFromDB.createdAt,
    notifications: userProfileFromDB.notifications,
  };
  return res.status(200).json(completeUserProfile);
};

export const updateProfileMetadata = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in updating the profile" });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "the user not found" });
    }
    return res.status(200).json({ message: "user deleted successfully " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in deleting the profile" });
  }
};
