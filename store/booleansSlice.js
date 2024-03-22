import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showTimer: true,
  showLogoQuiz: true,
  showQRCodeQuiz: true,
  showQRCodeVisitantes: true,
  showLogoVisitantes: true,
  showTextoQuiz: true,
  showTextoVisitantes: true,
  audioEnable: true,
  showBothQr: false,
  showQrVisitantesPlace: false,
  showQrQuizPlace: true,
  showFullScreen: false,
};

export const booleansSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    setShowTimer: (state, action) => {
      state.showTimer = !state.showTimer;
    },
    setShowBothQr: (state, action) => {
      state.showBothQr = !state.showBothQr;
    },
    setDisplayPlaceQuiz: (state, action) => {
      state.showQrQuizPlace = true;
    },
    setHidePlaceQuiz: (state, action) => {
      state.showQrQuizPlace = false;
    },
    setDisplayPlaceVisitantes: (state, action) => {
      state.showQrVisitantesPlace = true;
    },
    setHidePlaceVisitantes: (state, action) => {
      state.showQrVisitantesPlace = false;
    },
    setShowQrVisitantesPlace: (state, action) => {
      state.showQrVisitantesPlace = !state.showQrVisitantesPlace;
    },
    setShowQrQuizPlace: (state, action) => {
      state.showQrQuizPlace = !state.showQrQuizPlace;
    },
    setShowLogoQuiz: (state, action) => {
      state.showLogoQuiz = !state.showLogoQuiz;
    },
    setShowQRCodeQuiz: (state, action) => {
      state.showQRCodeQuiz = !state.showQRCodeQuiz;
    },
    setShowLogoVisitantes: (state, action) => {
      state.showLogoVisitantes = !state.showLogoVisitantes;
    },
    setShowQRCodeVisitantes: (state, action) => {
      state.showQRCodeVisitantes = !state.showQRCodeVisitantes;
    },
    setShowTextoQuiz: (state, action) => {
      state.showTextoQuiz = !state.showTextoQuiz;
    },
    setShowTextoVisitantes: (state, action) => {
      state.showTextoVisitantes = !state.showTextoVisitantes;
    },
    setAudioEnable: (state, action) => {
      state.audioEnable = !state.audioEnable;
    },
    setShowFullScreen: (state, action) => {
      state.showFullScreen = !state.showFullScreen;
    },
    displayShowFullScreen: (state, action) => {
      state.showFullScreen = true;
    },
    hideShowFullScreen: (state, action) => {
      state.showFullScreen = false;
    },
  },
});

export const {
  setShowTimer,
  setShowLogoQuiz,
  setShowBothQr,
  setShowLogoVisitantes,
  setShowTextoQuiz,
  setAudioEnable,
  setShowQRCodeQuiz,
  setShowQRCodeVisitantes,
  setShowTextoVisitantes,
  setDisplayPlaceQuiz,
  setDisplayPlaceVisitantes,
  setHidePlaceQuiz,
  setHidePlaceVisitantes,
  setShowFullScreen,
  displayShowFullScreen,
  hideShowFullScreen,
} = booleansSlice.actions;
export default booleansSlice.reducer;
