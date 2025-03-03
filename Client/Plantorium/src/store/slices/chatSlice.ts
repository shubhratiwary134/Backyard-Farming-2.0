import { createSlice } from "@reduxjs/toolkit";

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
    builder.addCase(cre);
  },
});
export default chatSlice.reducer;
