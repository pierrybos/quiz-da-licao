import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizColor: "#1e3666",
  quizColorLight: "#f4f4f6",
  quizQrSize: 300,
  quizLogoSize: 272,
  visitanteLogoSize: 272,
  quizTextSize: 1,
  visitanteColor: "#1e3666",
  visitanteColorLight: "#f4f4f6",
  visitanteQrSize: 300,
  visitanteTextSize: 1,
  timerTextColor: "#1e3666",
  leftSideBarWidth: 30,
  leftSideBarPosition: 10,
  leftSideBarTopPosition: 5,
  fontSizeTimerPlace: 1,
  centerSideBarWidth: 50,
  centerSideBarMarginTop: 5,
  centerBackgroundColor: { r: 99, g: 99, b: 99, a: 100 },
  centerSideBarLeft: 50,
  leftBackgroundColor: { r: 99, g: 99, b: 99, a: 100 },
  leftSideBarMarginTop: 50,
  leftSideBarLeft: 50,
  rightBackgroundColor: { r: 99, g: 99, b: 99, a: 100 },
  rightSideBarMarginTop: 50,
  rightSideBarRight: 50,
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
    setLeftSideBarTopPosition(state, action) {
      state.leftSideBarTopPosition = action.payload;
    },
    setVisitanteLogoSize(state, action) {
      state.visitanteLogoSize = action.payload;
    },
    setQuizLogoSize(state, action) {
      state.quizLogoSize = action.payload;
    },

    setCenterSideBarWidth(state, action) {
      state.centerSideBarWidth = action.payload;
    },
    setCenterSideBarMarginTop(state, action) {
      state.centerSideBarMarginTop = action.payload;
    },
    setCenterBackgroundColor(state, action) {
      state.centerBackgroundColor = action.payload;
    },
    setCenterSideBarLeft(state, action) {
      state.centerSideBarLeft = action.payload;
    },
    setLeftBackgroundColor(state, action) {
      state.leftBackgroundColor = action.payload;
    },
    setLeftSideBarMarginTop(state, action) {
      state.leftSideBarMarginTop = action.payload;
    },
    setLeftSideBarLeft(state, action) {
      state.leftSideBarLeft = action.payload;
    },
    setRightBackgroundColor(state, action) {
      state.rightBackgroundColor = action.payload;
    },
    setRightSideBarMarginTop(state, action) {
      state.rightSideBarMarginTop = action.payload;
    },
    setRightSideBarRight(state, action) {
      state.rightSideBarRight = action.payload;
    },
    setRightSideBarWidth(state, action) {
      state.rightSideBarWidth = action.payload;
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
  setLeftSideBarTopPosition,
  setVisitanteLogoSize,
  setQuizLogoSize,
  setCenterSideBarWidth,
  setCenterSideBarMarginTop,
  setCenterBackgroundColor,
  setCenterSideBarLeft,
  setLeftBackgroundColor,
  setLeftSideBarMarginTop,
  setLeftSideBarLeft,
  setRightBackgroundColor,
  setRightSideBarMarginTop,
  setRightSideBarRight,
  setRightSideBarWidth,
} = stylization.actions;

export default stylization.reducer;

/**
 * 
 * setShowQuizRightPlace
: 
{fn: undefined}
setShowRightPlace
: 
{fn: undefined}
setShowTimerRightPlace
: 
{fn: undefined}
setShowVisitantesRightPlace
: 
{fn: undefined}
 */
