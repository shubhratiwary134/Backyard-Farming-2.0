import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postChatThunk = createAsyncThunk(
  "/createChat",
  async (
    { userId, firstQuery }: { userId: string; firstQuery: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/chat/create",
        { userId, firstQuery },
        {
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
      return rejectWithValue("unknown error");
    }
  }
);

export const getResponseThunk = createAsyncThunk(
  "/getResponseThunk",
  async (chatId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/chat/query",
        chatId,
        {
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
      return rejectWithValue("unknown error");
    }
  }
);
