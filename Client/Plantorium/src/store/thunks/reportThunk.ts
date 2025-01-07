import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const generateReportThunk = createAsyncThunk(
  "/generateReportThunk",
  async (crop, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/plantorium/generateReport",
        crop,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.crop);
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
