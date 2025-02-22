import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const generateReportThunk = createAsyncThunk(
  "/generateReportThunk",
  async (
    { userId, crop }: { userId: string; crop: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/plantorium/generateReport",
        { userId, crop },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.message;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message ||
            "error while fetching the API /generateReport"
        );
      }
    }
  }
);

export default generateReportThunk;
