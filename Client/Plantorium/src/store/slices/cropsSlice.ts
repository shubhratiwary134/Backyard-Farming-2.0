import { createSlice } from "@reduxjs/toolkit";
import { getFamousCrops } from "../thunks/cropThunk";
interface cropsInitialState {
  allFamousCrops: [];
  status: "idle" | "pending" | "completed" | "failed";
  error: string | null;
}
const initialState: cropsInitialState = {
  allFamousCrops: [],
  status: "idle",
  error: null,
};
const cropSlice = createSlice({
  name: "crops",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFamousCrops.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getFamousCrops.fulfilled, (state, action) => {
        state.status = "completed";
        state.allFamousCrops = action.payload;
      })
      .addCase(getFamousCrops.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "unknown error occurred ";
      });
  },
});
export default cropSlice.reducer;
