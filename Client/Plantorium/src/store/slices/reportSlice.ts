import { createSlice } from "@reduxjs/toolkit";
import generateReportThunk from "../thunks/reportThunk";

const reportSlice = createSlice({
  name: "Report",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateReportThunk.pending, () => {
      console.log("generate report pending");
    });
    builder.addCase(generateReportThunk.fulfilled, (_, action) => {
      console.log(action.payload);
    });
    builder.addCase(generateReportThunk.rejected, () => {
      console.log("genrateReportEndpoint Rejected");
    });
  },
});
export default reportSlice.reducer;
