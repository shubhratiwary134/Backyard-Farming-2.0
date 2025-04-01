import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//note whatever the thunk sends in the Return ---> that becomes the action.payload for the slice

export const generateReportThunk = createAsyncThunk(
  "/generateReportThunk",
  async (
    { userId, crop }: { userId: string; crop: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_ENDPOINT_BASE_URL
        }/api/plantorium/generateReport`,
        { userId, crop },
        {
          withCredentials: true, // since our backend and frontend are running on different ports we need to add this so that our session cookies are sent without any problem
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
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

export const getReportThunk = createAsyncThunk(
  "/getReport",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_ENDPOINT_BASE_URL
        }/api/plantorium/getReport/${userId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          return rejectWithValue({ reportNotFound: true });
        }
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch the report."
        );
      }
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);
