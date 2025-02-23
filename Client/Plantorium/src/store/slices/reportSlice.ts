import { createSlice } from "@reduxjs/toolkit";
import generateReportThunk from "../thunks/reportThunk";
interface reportIntialState {
  reportText: string;
  status: "idle" | "pending" | "completed" | "failed";
  error: string | null;
}

const initialState: reportIntialState = {
  reportText: "",
  status: "idle",
  error: null,
};

const reportSlice = createSlice({
  name: "Report",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateReportThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(generateReportThunk.fulfilled, (state, action) => {
      state.status = "completed";
      state.reportText = action.payload.reportText;
    });
    builder.addCase(generateReportThunk.rejected, (state, action) => {
      state.error = (action.payload as string) || "Error Creating Report";
      console.log("genrateReportEndpoint Rejected");
    });
  },
});
export default reportSlice.reducer;
