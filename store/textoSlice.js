import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titleUrlQuiz: "Acesse o Quiz pelo QRCode",
  subTitleUrlQuiz: "Use a câmera do seu celular",
  titleUrlVisitas: "Primeira vez?",
  subTitleUrlVisitas:
    "Aponte sua câmera para o link abaixo e vamos manter contato!",
  titleCounterTimeRemainA: "A Lição da Escola Sabatina",
  titleCounterTimeRemainB: "Termina em",
  titleCounterTimeOffA: "A Lição da Escola Sabatina",
  titleCounterTimeOffB: "TERMINOU HÁ",
};

export const textoSlice = createSlice({
  name: "texto",
  initialState,
  reducers: {
    setTitleUrlQuiz(state, action) {
      state.titleUrlQuiz = action.payload;
    },
    setTitleUrlVisitas(state, action) {
      state.titleUrlVisitas = action.payload;
    },
    setTitleCounterTimeRemainA(state, action) {
      state.titleCounterTimeRemainA = action.payload;
    },
    setTitleCounterTimeRemainB(state, action) {
      state.titleCounterTimeRemainB = action.payload;
    },
    setTitleCounterTimeOffA(state, action) {
      state.titleCounterTimeOffA = action.payload;
    },
    setTitleCounterTimeOffB(state, action) {
      state.titleCounterTimeOffB = action.payload;
    },
    setSubTitleUrlQuiz(state, action) {
      state.subTitleUrlQuiz = action.payload;
    },
    setSubTitleUrlVisitas(state, action) {
      state.subTitleUrlVisitas = action.payload;
    },
    importState: (state, action) => {
      return {
        ...state,
        ...action.payload.texto,
      };
    },
  },
});

export const {
  setTitleUrlQuiz,
  setTitleUrlVisitas,
  setTitleCounterTimeRemainA,
  setTitleCounterTimeRemainB,
  setTitleCounterTimeOffA,
  setTitleCounterTimeOffB,
  setSubTitleUrlQuiz,
  setSubTitleUrlVisitas,
  importState,
} = textoSlice.actions;

export default textoSlice.reducer;
