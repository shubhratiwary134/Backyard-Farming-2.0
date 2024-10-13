import { combineReducers } from "@reduxjs/toolkit";
import cropReducer from "./slices/cropsSlice";

const rootReducer = combineReducers({
  crops: cropReducer,
});
export default rootReducer;
