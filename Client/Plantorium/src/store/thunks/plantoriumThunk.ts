import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createAFarm = createAsyncThunk(
  "/createAFarm",
  async (FarmFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/plantorium/createNew",
        FarmFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
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
