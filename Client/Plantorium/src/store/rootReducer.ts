import { combineReducers } from "@reduxjs/toolkit";
import cropReducer from "./slices/cropsSlice";
import plantoriumReducer from "./slices/plantoriumSlice";
import userReducer from "./slices/userSlice";
import reportReducer from "./slices/reportSlice";
import chatReducer from "./slices/chatSlice";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

// persist config is used to configure the reducer for the reportReducer to store the states in the sessionStorage
const persistConfig = {
  key: "report",
  storage: sessionStorage,
};
const persistConfigChat = {
  key: "chat",
  storage: sessionStorage,
};
const rootReducer = combineReducers({
  crops: cropReducer,
  plantorium: plantoriumReducer,
  user: userReducer,
  report: persistReducer(persistConfig, reportReducer),
  chat: persistReducer(persistConfigChat, chatReducer),
});
export default rootReducer;
