import { createSlice } from "@reduxjs/toolkit";

interface chatInterface {
  currentChat: {};
  chats: Object[];
  status: "idle" | "loading" | "completed";
  error: string | null;
}
const initialState: chatInterface = {
  currentChat: null,
  chats: [],
  status: "idle",
  error: null,
};
const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});
export default chatSlice.reducer;
