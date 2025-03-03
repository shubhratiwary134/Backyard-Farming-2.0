import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getResponseThunk, postChatThunk } from "../thunks/chatThunk";
import { v4 as uuidv4 } from "uuid";
interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
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
  reducers: {
    //reducer to add the query in the messages of current chat
    addQueryToCurrentChat(state, action: PayloadAction<string>) {
      const query: Message = {
        id: uuidv4(),
        role: "user",
        text: action.payload,
      };
      state.currentChat.currentMessages.push(query);
    },
  },
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
    builder
      .addCase(getResponseThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getResponseThunk.fulfilled, (state, action) => {
        const botResponse: Message = {
          id: uuidv4(),
          role: "bot",
          text: action.payload.responseText,
        };
        state.currentChat.currentMessages.push(botResponse);
        state.status = "completed";
      })
      .addCase(getResponseThunk.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Error Getting the Response";
      });
  },
});
export default chatSlice.reducer;
