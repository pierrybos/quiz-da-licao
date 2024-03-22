import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizColor: "#1e3666",
  quizColorLight: "#f4f4f6",
  quizQrSize: 300,
  quizTextSize: 1,
  visitanteColor: "#1e3666",
  visitanteColorLight: "#f4f4f6",
  visitanteQrSize: 300,
  visitanteTextSize: 1,
  timerTextColor: "#1e3666",
  leftSideBarWidth: 30,
  leftSideBarPosition: 10,
  fontSizeTimerPlace: 1,
};

export const stylization = createSlice({
  name: "stylization",
  initialState,
  reducers: {
    setQuizColor(state, action) {
      state.quizColor = action.payload;
    },
    setQuizQrSize(state, action) {
      state.quizQrSize = action.payload;
    },
    setQuizTextSize(state, action) {
      state.quizTextSize = action.payload;
    },
    setVisitanteColor(state, action) {
      state.visitanteColor = action.payload;
    },
    setVisitanteQrSize(state, action) {
      state.visitanteQrSize = action.payload;
    },
    setVisitanteTextSize(state, action) {
      state.visitanteTextSize = action.payload;
    },
    setTimerTextColor(state, action) {
      state.timerTextColor = action.payload;
    },
    setFontSizeTimerPlace(state, action) {
      state.fontSizeTimerPlace = action.payload;
    },
    setLeftSideBarWidth(state, action) {
      state.leftSideBarWidth = action.payload;
    },
    setLeftSideBarPosition(state, action) {
      state.leftSideBarPosition = action.payload;
    },
  },
});

export const {
  setQuizColor,
  setQuizQrSize,
  setQuizTextSize,
  setVisitanteColor,
  setVisitanteQrSize,
  setVisitanteTextSize,
  setTimerTextColor,
  setFontSizeTimerPlace,
  setLeftSideBarWidth,
  setLeftSideBarPosition,
} = stylization.actions;

export default stylization.reducer;
