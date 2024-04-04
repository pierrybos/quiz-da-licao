import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limitTime: "10:00",
  showTimer: true,
  timerTitle: "A Lição da Escola Sabatina",
  timerSubtitle: "Termina em",
  timerRemainTitle: "A Lição da Escola Sabatina",
  timerRemainSubtitle: "TERMINOU HÁ",
  timerTextSize: 1,
  audioEnable: true,
  timerTextColor: { r: 99, g: 99, b: 99, a: 100 },
};

export const limitTimeSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setLimitTime(state, action) {
      state.limitTime = action.payload;
    },
    setShowTimer(state, action) {
      state.showTimer = action.payload;
    },
    setAudioEnable(state, action) {
      state.audioEnable = action.payload;
    },
    setTimerTextSize(state, action) {
      state.timerTextSize = action.payload;
    },
    setTimerTextColor(state, action) {
      state.timerTextColor = action.payload;
    },
    setTimerTitle(state, action) {
      state.timerTitle = action.payload;
    },
    setTimerSubtitle(state, action) {
      state.timerSubtitle = action.payload;
    },
    setTimerTitleRemain(state, action) {
      state.timerRemainTitle = action.payload;
    },
    setTimerSubtitleRemain(state, action) {
      state.timerRemainSubtitle = action.payload;
    },
  },
});

export const {
  setLimitTime,
  setShowTimer,
  setAudioEnable,
  setTimerTextSize,
  setTimerTextColor,
  setTimerTitle,
  setTimerSubtitle,
  setTimerTitleRemain,
  setTimerSubtitleRemain,
} = limitTimeSlice.actions;
export default limitTimeSlice.reducer;
