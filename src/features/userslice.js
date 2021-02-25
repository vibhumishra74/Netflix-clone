import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: {
    users: null,
  },
  reducers: {
    login: (state, action) => {
      state.users = action.payload;
    },
    logout: (state) => {
      state.users = null;
    },
  },
});

export const { login, logout } = userslice.actions;

export const selectuser = (state) => state.user.users;
export default userslice.reducer;
