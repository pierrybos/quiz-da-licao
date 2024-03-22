import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import users from "./usersSlice";
import counter from "./counterSlice";
import url from "./urlSlice";
import texto from "./textoSlice";
import timer from "./timerSlice";
import booleans from "./booleansSlice";
import stylization from "./stylizationSlice";

const combinedReducers = combineReducers({
  counter,
  users,
  url,
  texto,
  timer,
  booleans,
  stylization,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducers,
  });

export const wrapper = createWrapper(makeStore);
