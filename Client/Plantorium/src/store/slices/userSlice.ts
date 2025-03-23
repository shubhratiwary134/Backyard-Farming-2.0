import { createSlice } from "@reduxjs/toolkit";
import { checkAndAddUserInTheDBThunk, getStatus } from "../thunks/userThunk";
interface initialStateInterface {
  currentUser: object | null;
  status: "idle" | "completed" | "failed" | "pending";
  hasChecked: boolean;
  hasFarm: boolean;
  error: string | null;
}
const initialState: initialStateInterface = {
  currentUser: null,
  status: "idle",
  hasChecked: false,
  hasFarm: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setHasChecked(state, action) {
      state.hasChecked = action.payload;
    },
    setHasFarm(state, action) {
      state.hasFarm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAndAddUserInTheDBThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(checkAndAddUserInTheDBThunk.fulfilled, (state, action) => {
        state.status = "completed";
        state.currentUser = action.payload.user;
        setHasChecked(true);
      })
      .addCase(checkAndAddUserInTheDBThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "something went wrong";
      });
    builder
      .addCase(getStatus.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.status = "completed";
        state.hasFarm = action.payload.hasFarm;
        state.error = null;
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "something went wrong";
      });
  },
});
export const { setHasChecked } = userSlice.actions;
export default userSlice.reducer;
