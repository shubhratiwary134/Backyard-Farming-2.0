import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_ENDPOINT_BASE_URL;

export const postChatThunk = createAsyncThunk(
  "/createChat",
  async (
    { userId, firstQuery }: { userId: string; firstQuery: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/chat/create`,
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
  async (
    { chatId, query }: { chatId: string; query: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/chat/query`,
        { chatId, query },
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

export const getAllChats = createAsyncThunk(
  "/getAllChats",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/chat/getChats/${userId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "something went wrong"
        );
      }
      return rejectWithValue("Unknown Error occurred ");
    }
  }
);

export const getSpecificChat = createAsyncThunk(
  "/getSpecificChat",
  async (chatId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/chat/getSpecificChat/${chatId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "something went wrong"
        );
      }
      return rejectWithValue("Unknown Error occurred ");
    }
  }
);

export const deleteChat = createAsyncThunk(
  "/deleteChat",
  async (chatId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/api/chat/deleteChat/${chatId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "something went wrong"
        );
      }
      return rejectWithValue("Unknown Error occurred ");
    }
  }
);
