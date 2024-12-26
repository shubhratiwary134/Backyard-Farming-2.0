import { createSlice } from "@reduxjs/toolkit";
import { createAFarm } from "../thunks/plantoriumThunk";
interface Farm {
  id: string;
  name: string;
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
        state.plantoriums.push(action.payload.plantorium);
      })
      .addCase(createAFarm.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "failed to create A Farm";
      });
  },
});
export default plantoriumSlice.reducer;
