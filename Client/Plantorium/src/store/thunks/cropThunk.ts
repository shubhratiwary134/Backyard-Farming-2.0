import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFamousCrops = createAsyncThunk(
  "/famousCrops",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/famousCrops", {
        withCredentials: true,
      });
      console.log("control reaches here");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("control reaches the error of thunk");
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
      return rejectWithValue("an unknown Error occurred");
    }
  }
);
