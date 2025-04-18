import { createSlice } from "@reduxjs/toolkit";
import { generateReportThunk, getReportThunk } from "../thunks/reportThunk";

interface reportInterface {
  reportText: string;
  reportStatus: "idle" | "loading" | "generated" | "error" | "notYetCreated";
  error: string | null;
}

const initialState: reportInterface = {
  reportText: "",
  reportStatus: "idle",
  error: null,
};

const reportSlice = createSlice({
  name: "Report",
  initialState: initialState,
  reducers: {
    setReportStatus: (state, action) => {
      state.reportStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generateReportThunk.pending, (state) => {
      state.reportStatus = "loading";
      state.error = null;
    });
    builder.addCase(generateReportThunk.fulfilled, (state, action) => {
      state.reportText = action.payload.reportText;
      state.reportStatus = "generated";
      state.error = null;
    });
    builder.addCase(generateReportThunk.rejected, (state, action) => {
      state.error = (action.payload as string) || "Error Creating Report";
      state.reportStatus = "error";
    });
    builder.addCase(getReportThunk.pending, (state) => {
      state.reportStatus = "loading";
      state.error = null;
    });
    builder.addCase(getReportThunk.fulfilled, (state, action) => {
      state.reportText = action.payload.reportText;
      state.reportStatus = "generated";
      state.error = null;
    });
    builder.addCase(getReportThunk.rejected, (state, action) => {
      if (
        typeof action.payload === "object" &&
        action.payload !== null &&
        "reportNotFound" in action.payload
      ) {
        state.reportStatus = "notYetCreated";
      } else {
        state.reportStatus = "error";
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Error fetching the report";
      }
    });
  },
});
export const { setReportStatus } = reportSlice.actions;
export default reportSlice.reducer;
