import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urlVisitas: "",
  urlQuiz: "",
  showVisitas: true,
  showQuiz: true,
  showLogoQuiz: true,
  showLogoVisitas: true,
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setUrlVisitas(state, action) {
      state.urlVisitas = action.payload;
    },
    setUrlQuiz(state, action) {
      state.urlQuiz = action.payload;
    },
    importState: (state, action) => {
      return {
        ...state,
        ...action.payload.url,
      };
    },
  },
});

export const { setUrlQuiz, setUrlVisitas, importState } = urlSlice.actions;

export default urlSlice.reducer;
