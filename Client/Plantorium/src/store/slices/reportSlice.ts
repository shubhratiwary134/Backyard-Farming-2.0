import { createSlice } from "@reduxjs/toolkit";
import generateReportThunk from "../thunks/reportThunk";
interface reportIntialState {
  reportText: string;
  reportStatus: "loading" | "generated" | "notGenerated" | "error";
  error: string | null;
}

const initialState: reportIntialState = {
  reportText: "",
  reportStatus: "notGenerated",
  error: null,
};

const reportSlice = createSlice({
  name: "Report",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateReportThunk.pending, (state) => {
      state.reportStatus = "loading";
      state.error = null;
    });
    builder.addCase(generateReportThunk.fulfilled, (state, action) => {
      if (action.payload.reportExists) {
        state.reportText = action.payload.reportText;
        state.reportStatus = "generated";
      } else {
        state.reportText = "";
        state.reportStatus = "notGenerated";
      }
      state.error = null;
    });
    builder.addCase(generateReportThunk.rejected, (state, action) => {
      state.error = (action.payload as string) || "Error Creating Report";
      state.reportStatus = "error";
      console.log("genrateReportEndpoint Rejected");
    });
  },
});
export default reportSlice.reducer;
