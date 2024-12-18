import { createSlice } from "@reduxjs/toolkit";
import { checkAndAddUserInTheDBThunk } from "../thunks/userThunk";
interface initialStateInterface {
  currentUser: object | null;
  status: "idle" | "completed" | "failed" | "pending";
  hasChecked: boolean;
  error: string | null;
}
const initialState: initialStateInterface = {
  currentUser: null,
  status: "idle",
  hasChecked: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setHasChecked(state, action) {
      state.hasChecked = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAndAddUserInTheDBThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(checkAndAddUserInTheDBThunk.fulfilled, (state, action) => {
        state.status = "completed";
        state.currentUser = action.payload;
        state.hasChecked = true;
      })
      .addCase(checkAndAddUserInTheDBThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) || "something went wrong";
      });
  },
});
export const { setHasChecked } = userSlice.actions;
export default userSlice.reducer;
