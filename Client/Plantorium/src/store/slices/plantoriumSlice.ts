import { createSlice } from "@reduxjs/toolkit";
import { createAFarm } from "../thunks/plantoriumThunk";
interface plantoriumInitialState {
  plantoriums: [];
  status: "idle" | "pending" | "completed" | "failed";
  error: string | null;
}
const initialState: plantoriumInitialState = {
  plantoriums: [], // array to store the farms of the user
  status: "idle",
  error: "null",
};
const plantoriumSlice = createSlice({
  name: "plantorium",
  initialState: initialState,
  reducers: {},
  extraReducers: () => {},
});
