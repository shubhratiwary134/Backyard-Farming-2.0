import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  name: {
    type: String, // name of the user
    required: true,
  },
  cropPreferences: [
    {
      type: String, // array of the users CropPreferences
    },
  ],
  defaultAddress: {
    street: String, //Address of the User
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  createdAt: {
    type: Date, //User created at ?
    default: Date.now,
  },
  notifications: {
    type: Boolean, //If the user has opted for weekly notifications or not
    default: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
