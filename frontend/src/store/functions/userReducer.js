import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInuser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.loggedInuser = action.payload;
    },
    logout: (state) => {
      state.loggedInuser = {};
    },
  },
});

export const { logIn, logout } = userSlice.actions;
export default userSlice.reducer;
