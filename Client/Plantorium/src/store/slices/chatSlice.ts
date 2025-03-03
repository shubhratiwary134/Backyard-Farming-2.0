import { createSlice } from "@reduxjs/toolkit";
import { postChatThunk } from "../thunks/chatThunk";

interface Message {
  role: "user" | "bot";
  text: string;
  timeStamp?: string;
}
interface currentChatInterface {
  currentChatId: string;
  currentMessages: Message[];
}
interface chatInterface {
  currentChat: currentChatInterface;
  chats: { chatId: string; messages: Message[] }[];
  status: "idle" | "loading" | "completed";
  error: string | null;
}
const initialState: chatInterface = {
  currentChat: {
    currentChatId: "",
    currentMessages: [],
  },
  chats: [], // to minimize api calls for past chats
  status: "idle",
  error: null,
};
const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postChatThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postChatThunk.fulfilled, (state, action) => {
        state.status = "completed";
        state.currentChat = action.payload.chat;
        state.chats.push(action.payload.chat);
      })
      .addCase(postChatThunk.rejected, (state, action) => {
        state.error = (action.payload as string) || "Error creating the chat";
      });
  },
});
export default chatSlice.reducer;
