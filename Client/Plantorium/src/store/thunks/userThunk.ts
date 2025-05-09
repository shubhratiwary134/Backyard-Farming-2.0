import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserDataType {
  name: string;
  clerkUserId: string;
  email: string | undefined;
}

export const checkAndAddUserInTheDBThunk = createAsyncThunk(
  "/checkAndAddUserInTheDatabase",
  async (userData: UserDataType, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/Check-or-create-user",
        userData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "something went wrong"
        );
      }
      return rejectWithValue("unknown error arrived");
    }
  }
);
