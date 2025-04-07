import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormValueForThunk } from "../../Types/FarmFormTypes";

export const createAFarm = createAsyncThunk(
  "/createAFarm",
  async (FarmFormData: FormValueForThunk, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      formData.append("averageRainfall", String(FarmFormData.averageRainfall));
      formData.append("soilType", FarmFormData.soilType);
      formData.append("soilColor", FarmFormData.soilColor);
      formData.append("soilTexture", FarmFormData.soilTexture);
      formData.append("soilPH", String(FarmFormData.soilPH));
      formData.append("waterSupply", FarmFormData.waterSupply);
      formData.append("landArea", String(FarmFormData.landArea));
      formData.append("Address", String(FarmFormData.Address));
      formData.append("pastCrops", JSON.stringify(FarmFormData.pastCrops));
      formData.append(
        "cropDiseases",
        JSON.stringify(FarmFormData.cropDiseases)
      );
      formData.append(
        "affectedCrops",
        JSON.stringify(FarmFormData.affectedCrops)
      );
      formData.append("userId", FarmFormData.userId);
      FarmFormData.Photos.forEach((file) => {
        formData.append("Photos", file);
      });

      const response = await axios.post(`/api/plantorium/createNew`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
export const myFarm = createAsyncThunk(
  "/myFarm",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/plantorium/user/${userId}`, {
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
