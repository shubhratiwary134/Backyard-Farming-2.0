import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createAFarm = createAsyncThunk(
  "/createAFarm",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/plantorium/createNew",
        {},
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("the error caught by the axios createAFarm thunk", error);
        return rejectWithValue(
          error.response?.data.message || "something went wrong"
        );
      }
      return rejectWithValue("unknown error occurred");
    }
  }
);
