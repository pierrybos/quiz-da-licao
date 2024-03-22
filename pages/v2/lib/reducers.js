// reducers.js
import { combineReducers } from "redux";
import { reducer } from "./appSlice";

const rootReducer = combineReducers({
  app: reducer,
});

export default rootReducer;
