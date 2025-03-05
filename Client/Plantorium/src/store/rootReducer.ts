import { combineReducers } from "@reduxjs/toolkit";
import cropReducer from "./slices/cropsSlice";
import plantoriumReducer from "./slices/plantoriumSlice";
import userReducer from "./slices/userSlice";
import reportReducer from "./slices/reportSlice";
import chatReducer from "./slices/chatSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist config is used to configure the reducer for the reportReducer to store the states in the localStorage
const persistConfig = {
  key: "report",
  storage,
};
const rootReducer = combineReducers({
  crops: cropReducer,
  plantorium: plantoriumReducer,
  user: userReducer,
  report: persistReducer(persistConfig, reportReducer),
  chat: chatReducer,
});
export default rootReducer;
