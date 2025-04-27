import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_ENDPOINT_BASE_URL;

export const getFamousCrops = createAsyncThunk(
  "/famousCrops",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/public/famousCrops`, {
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
