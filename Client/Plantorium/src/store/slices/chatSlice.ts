import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deleteChat,
  getAllChats,
  getResponseThunk,
  getSpecificChat,
  postChatThunk,
} from "../thunks/chatThunk";
import { v4 as uuidv4 } from "uuid";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}
interface currentChatInterface {
  currentChatId: string;
  currentChatTitle: string;
  currentMessages: Message[];
}
interface chatInterface {
  currentChat: currentChatInterface;
  chats: { chatId: string; chatTitle: string; messages: Message[] }[];
  status: "idle" | "loading" | "completed";
  error: string | null;
}
const initialState: chatInterface = {
  currentChat: {
    currentChatId: "",
    currentChatTitle: "",
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
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postChatThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postChatThunk.fulfilled, (state, action) => {
        state.status = "completed";
        state.currentChat = {
          currentChatId: action.payload.simplifiedChat.chatId,
          currentChatTitle: action.payload.simplifiedChat.chatTitle,
          currentMessages: action.payload.simplifiedChat.messages,
        };
        state.chats.push(action.payload.simplifiedChat);
        state.error = null;
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
    builder
      .addCase(getAllChats.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.status = "completed";
        state.chats = action.payload.simplifiedChats;
        state.error = null;
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Error Getting the Response";
      });
    builder
      .addCase(getSpecificChat.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getSpecificChat.fulfilled, (state, action) => {
        state.status = "completed";
        state.currentChat = action.payload.newCurrentChat;
        state.error = null;
      })
      .addCase(getSpecificChat.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Error Getting the Response";
      });
    builder
      .addCase(deleteChat.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.status = "completed";
        state.chats = state.chats.filter(
          (chat) => chat.chatId !== action.payload.chatId
        );
      })
      .addCase(deleteChat.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Error Getting the Response";
      });
  },
});
export const { addQueryToCurrentChat, setCurrentChat } = chatSlice.actions;
export default chatSlice.reducer;
