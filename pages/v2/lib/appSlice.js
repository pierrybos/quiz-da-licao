import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urlVisitas: "",
  urlQuiz: "",
  exibir: false,
  showClock: true,
  limitTime: "10:00:00",
  timeRemain: "10:00:00",
  isFullScreen: false,
  alignToCenter: true,
  showQrCode: true,
  showVisitas: true,
  textoLicaoAcabou: false,
  audioEnable: true,
  play1min: false,
  play5min: false,
  file1min: false,
  file5min: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUrlVisitas(state, action) {
      state.urlVisitas = action.payload;
    },
    setUrlQuiz(state, action) {
      state.urlQuiz = action.payload;
    },
    setExibir(state, action) {
      state.exibir = action.payload;
    },
    setShowClock(state, action) {
      state.showClock = action.payload;
    },
    setLimitTime(state, action) {
      state.limitTime = action.payload;
    },
    setTimeRemain(state, action) {
      state.timeRemain = action.payload;
    },
    setIsFullScreen(state, action) {
      state.isFullScreen = action.payload;
    },
    setAlignToCenter(state, action) {
      state.alignToCenter = action.payload;
    },
    setShowQrCode(state, action) {
      state.showQrCode = action.payload;
    },
    setShowVisitas(state, action) {
      state.showVisitas = action.payload;
    },
    setTextoLicaoAcabou(state, action) {
      state.textoLicaoAcabou = action.payload;
    },
    setAudioEnable(state, action) {
      state.audioEnable = action.payload;
    },
    setPlay1Min(state, action) {
      state.play1min = action.payload;
    },
    setPlay5Min(state, action) {
      state.play5min = action.payload;
    },
    setFile1Min(state, action) {
      state.file1min = action.payload;
    },
    setFile5Min(state, action) {
      state.file5min = action.payload;
    },
  },
});

export const {
  setUrlVisitas,
  setUrlQuiz,
  setExibir,
  setShowClock,
  setLimitTime,
  setTimeRemain,
  setIsFullScreen,
  setAlignToCenter,
  setShowQrCode,
  setShowVisitas,
  setTextoLicaoAcabou,
  setAudioEnable,
  setPlay1Min,
  setPlay5Min,
  setFile1Min,
  setFile5Min,
} = appSlice.actions;

export default appSlice.reducer;
