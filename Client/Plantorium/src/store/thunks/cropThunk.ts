import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFamousCrops = createAsyncThunk(
  "/famousCrops",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/famousCrops`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
      return rejectWithValue("an unknown Error occurred");
    }
  }
);
