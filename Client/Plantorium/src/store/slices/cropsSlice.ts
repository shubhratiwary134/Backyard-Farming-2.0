import { createSlice } from "@reduxjs/toolkit";
interface cropInitialState {
  name: string;
  description: string;
}
const initialState: cropInitialState = {
  name: "",
  description: "",
};
const cropSlice = createSlice({
  name: "crops",
  initialState: initialState,
  reducers: {},
});
export default cropSlice.reducer;
