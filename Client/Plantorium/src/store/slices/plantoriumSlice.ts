import { createSlice } from "@reduxjs/toolkit";
import { createAFarm, myFarms } from "../thunks/plantoriumThunk";
interface Farm {
  userId: string; // Reference to the User
  averageRainfall: number; // Average rainfall in mm
  soilType: string; // e.g., Humus, Loamy, Sandy, Alluvial
  soilColor: string; // e.g., Black, Brownish
  soilTexture: string; // e.g., Soft, Hard, Airy
  soilPH: number; // pH value of the soil (0 to 14)
  pastCrops: string[]; // List of crops grown in the past 3 years
  cropDiseases: string[]; // List of diseases that have affected crops
  affectedCrops: string[]; // List of crops affected by diseases
  waterSupply: string; // e.g., Channel, Tube Well, Other
  landArea: number; // Area of the land in acres or square meters
  createdAt?: Date; // Optional, defaults to Date.now
  Address: string; // Address of the Plantorium
  photos: string[]; // List of photo URLs
}

interface plantoriumInitialState {
  plantoriums: Farm[];
  status: "idle" | "pending" | "completed" | "failed";
  error: string | null;
}

const initialState: plantoriumInitialState = {
  plantoriums: [], // array to store the farms of the user
  status: "idle",
  error: null,
};
const plantoriumSlice = createSlice({
  name: "plantorium",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAFarm.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(createAFarm.fulfilled, (state, action) => {
        state.status = "completed";
        if (action.payload && action.payload.plantorium) {
          state.plantoriums.push(action.payload.plantorium);
        }
      })
      .addCase(createAFarm.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "failed to create A Farm";
      });

    builder
      .addCase(myFarms.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(myFarms.fulfilled, (state, action) => {
        state.status = "completed";
        state.plantoriums = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(myFarms.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.payload as string) || "failed to Fetch Users Farms";
      });
  },
});
export default plantoriumSlice.reducer;
