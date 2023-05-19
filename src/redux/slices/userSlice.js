// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    accessToken: null,
    expire: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.expire = action.payload.expire;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.expire = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
