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
  showQuizCenterPlace: false,
  showVisitantesCenterPlace: false,
  showTimerCenterPlace: false,
  showCenterPlace: false,
  showQuizLeftPlace: false,
  showVisitantesLeftPlace: false,
  showTimerLeftPlace: false,
  leftSideBarWidth: 0,
  leftSideBarLeft: 0,
  showRightPlace: false,
  showQuizRightPlace: false,
  showVisitantesRightPlace: false,
  showTimerRightPlace: false,
  fullScreen: false,
  audioGender: true,
};

export const booleansSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    setAudioGender: (state, action) => {
      state.audioGender = action.payload;
    },
    setFullScreen: (state, action) => {
      state.fullScreen = action.payload;
    },
    setShowQuizCenterPlace: (state, action) => {
      state.showQuizCenterPlace = action.payload;
    },
    setShowVisitantesCenterPlace: (state, action) => {
      state.showVisitantesCenterPlace = action.payload;
    },
    setShowTimerCenterPlace: (state, action) => {
      state.showTimerCenterPlace = action.payload;
    },
    setShowCenterPlace: (state, action) => {
      console.log(action);
      state.showCenterPlace = action.payload;
    },
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
    setShowQuizLeftPlace: (state, action) => {
      state.showQuizLeftPlace = action.payload;
    },
    setShowLeftPlace: (state, action) => {
      state.showLeftPlace = action.payload;
    },
    setShowTimerLeftPlace: (state, action) => {
      state.showTimerLeftPlace = action.payload;
    },

    setShowVisitantesLeftPlace: (state, action) => {
      state.showVisitantesLeftPlace = action.payload;
    },
    setShowQuizRightPlace(state, action) {
      state.showQuizRightPlace = action.payload;
    },
    setShowRightPlace(state, action) {
      state.showRightPlace = action.payload;
    },
    setShowTimerRightPlace(state, action) {
      state.showTimerRightPlace = action.payload;
    },
    setShowVisitantesRightPlace(state, action) {
      state.showVisitantesRightPlace = action.payload;
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
  setShowQuizCenterPlace,
  setShowVisitantesCenterPlace,
  setShowTimerCenterPlace,
  setShowCenterPlace,
  setShowQuizLeftPlace,
  setShowLeftPlace,
  setShowTimerLeftPlace,
  setShowVisitantesLeftPlace,
  setShowQuizRightPlace,
  setShowRightPlace,
  setShowTimerRightPlace,
  setShowVisitantesRightPlace,
  setFullScreen,
  setAudioGender,
} = booleansSlice.actions;
export default booleansSlice.reducer;
