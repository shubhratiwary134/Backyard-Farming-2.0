import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_ENDPOINT_BASE_URL;
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
        `${apiUrl}/api/user/Check-or-create-user`,
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
export const getStatus = createAsyncThunk(
  "/getStatus",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/api/user/status/${userId}`, {
        withCredentials: true,
      });
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
