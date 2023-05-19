// authAPI.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  expire: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.expire = action.payload.expire;
    },
    logout: state => {
      state.accessToken = null;
      state.expire = null;
    },
  },
});

export const selectAccessToken = state => state.auth.accessToken;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
