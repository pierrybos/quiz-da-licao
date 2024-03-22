import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  outer: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementOuter: (state) => {
      state.outer += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, incrementOuter, decrement } = counterSlice.actions;

export default counterSlice.reducer;
