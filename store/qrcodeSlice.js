import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizTitle: "Acesse o Quiz pelo QRCode",
  quizSubtitle: "Use a câmera do seu celular",
  quizTextSize: "",
  quizImageSize: "",
  quizQrcodeSize: "",
  quizQrcodeColor: "",
  quizTextColor: "",
  quizLink: "",
  quizShowQrcode: true,
  quizShowText: true,
  quizShowImage: true,
  visitantesTitle: "Primeira vez?",
  visitantesSubtitle:
    "Aponte sua câmera para o link abaixo e vamos manter contato!",
  visitantesTextSize: "",
  visitantesImageSize: "",
  visitantesQrcodeSize: "",
  visitantesQrcodeColor: "",
  visitantesTextColor: "",
  visitantesLink: "",
  visitantesShowQrcode: true,
  visitantesShowText: true,
  visitantesShowImage: true,
};

export const qrcode = createSlice({
  name: "qrcode",
  initialState,
  reducers: {
    setQuizTitle: (state, action) => {
      state.quizTitle = action.payload;
    },
    setQuizSubtitle: (state, action) => {
      state.quizSubtitle = action.payload;
    },
    setQuizTextSize: (state, action) => {
      state.quizTextSize = action.payload;
    },
    setQuizImageSize: (state, action) => {
      state.quizImageSize = action.payload;
    },
    setQuizQrcodeSize: (state, action) => {
      state.quizQrcodeSize = action.payload;
    },
    setQuizColor: (state, action) => {
      state.quizQrcodeColor = action.payload;
    },
    setQuizTextColor: (state, action) => {
      state.quizTextColor = action.payload;
    },
    setQuizLink: (state, action) => {
      state.quizLink = action.payload;
    },
    setQuizShowQrcode: (state, action) => {
      state.quizShowQrcode = action.payload;
    },
    setQuizShowImage: (state, action) => {
      state.quizShowImage = action.payload;
    },
    setQuizShowText: (state, action) => {
      state.quizShowText = action.payload;
    },
    setVisitantesTitle: (state, action) => {
      state.visitantesTitle = action.payload;
    },
    setVisitantesSubtitle: (state, action) => {
      state.visitantesSubtitle = action.payload;
    },
    setVisitantesTextSize: (state, action) => {
      state.visitantesTextSize = action.payload;
    },
    setVisitantesImageSize: (state, action) => {
      state.visitantesImageSize = action.payload;
    },
    setVisitantesQrcodeSize: (state, action) => {
      state.visitantesQrcodeSize = action.payload;
    },
    setVisitantesColor: (state, action) => {
      state.visitantesQrcodeColor = action.payload;
    },
    setVisitantesTextColor: (state, action) => {
      state.visitantesTextColor = action.payload;
    },
    setVisitantesLink: (state, action) => {
      state.visitantesLink = action.payload;
    },
    setVisitantesShowQrcode: (state, action) => {
      state.visitantesShowQrcode = action.payload;
    },
    setVisitantesShowImage: (state, action) => {
      state.visitantesShowImage = action.payload;
    },
    setVisitantesShowText: (state, action) => {
      state.visitantesShowText = action.payload;
    },
  },
});
export const {
  setQuizTitle,
  setQuizSubtitle,
  setQuizTextSize,
  setQuizImageSize,
  setQuizQrcodeSize,
  setQuizColor,
  setQuizTextColor,
  setQuizLink,
  setVisitantesTitle,
  setVisitantesSubtitle,
  setVisitantesTextSize,
  setVisitantesImageSize,
  setVisitantesQrcodeSize,
  setVisitantesColor,
  setVisitantesTextColor,
  setVisitantesLink,
  setQuizShowText,
  setQuizShowQrcode,
  setQuizShowImage,
  setVisitantesShowText,
  setVisitantesShowQrcode,
  setVisitantesShowImage,
} = qrcode.actions;

export default qrcode.reducer;
