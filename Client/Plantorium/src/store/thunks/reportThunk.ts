import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//note whatever the thunk sends in the Return ---> that becomes the action.payload for the slice

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

const getReportThunk = createAsyncThunk(
  "/getReport",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/plantorium/getReport/${userId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message ||
            "Unable to fetch the Report due to some error "
        );
      }
    }
  }
);

export default generateReportThunk;
