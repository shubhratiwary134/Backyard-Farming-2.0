import { combineReducers } from "@reduxjs/toolkit";
import cropReducer from "./slices/cropsSlice";
import plantoriumReducer from "./slices/plantoriumSlice";
import userReducer from "./slices/userSlice";
import reportReducer from "./slices/reportSlice";
const rootReducer = combineReducers({
  crops: cropReducer,
  plantorium: plantoriumReducer,
  user: userReducer,
  report: reportReducer,
});
export default rootReducer;
