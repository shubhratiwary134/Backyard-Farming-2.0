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
          withCredentials: true, // since our backend and frontend are running on different ports we need to add this so that our session cookies are sent without any problem
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

const getReport = createAsyncThunk("/getReport", async () => {});

export default generateReportThunk;
