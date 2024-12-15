import { combineReducers } from "@reduxjs/toolkit";
import cropReducer from "./slices/cropsSlice";
import plantoriumReducer from "./slices/plantoriumSlice";
const rootReducer = combineReducers({
  crops: cropReducer,
  plantorium: plantoriumReducer,
});
export default rootReducer;
