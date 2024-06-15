import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      //            state.users = [...state.users, action.payload];
    },
    importState: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const { addUser, importState } = usersSlice.actions;
export default usersSlice.reducer;
