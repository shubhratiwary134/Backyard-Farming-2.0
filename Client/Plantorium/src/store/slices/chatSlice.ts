import { createSlice } from "@reduxjs/toolkit";

interface currentChatInterface {}
interface chatInterface {
  currentChat: currentChatInterface;
  chats: Object[];
  status: "idle" | "loading" | "completed";
  error: string | null;
}
const initialState: chatInterface = {
  currentChat: null,
  chats: [], // to minimize api calls for past chats
  status: "idle",
  error: null,
};
const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cre);
  },
});
export default chatSlice.reducer;
