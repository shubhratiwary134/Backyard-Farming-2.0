import { combineReducers } from "@reduxjs/toolkit";
import cropReducer from "./slices/cropsSlice";
import plantoriumReducer from "./slices/plantoriumSlice";
import userReducer from "./slices/userSlice";
const rootReducer = combineReducers({
  crops: cropReducer,
  plantorium: plantoriumReducer,
  user: userReducer,
});
export default rootReducer;
