import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limitTime: "10:00",
};

export const limitTimeSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setLimitTime(state, action) {
      state.limitTime = action.payload;
    },
  },
});

export const { setLimitTime } = limitTimeSlice.actions;
export default limitTimeSlice.reducer;
