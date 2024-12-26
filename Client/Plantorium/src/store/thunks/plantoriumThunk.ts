import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormValueForThunk } from "../../Types/FarmFormTypes";

export const createAFarm = createAsyncThunk(
  "/createAFarm",
  async (FarmFormData: FormValueForThunk, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/plantorium/createNew",
        FarmFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "something went wrong"
        );
      }
      return rejectWithValue("unknown error occurred");
    }
  }
);
