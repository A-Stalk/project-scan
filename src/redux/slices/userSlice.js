// userSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from './authAPI';

export const login = createAsyncThunk('auth/login', async credentials => {
  console.log('Logging in with credentials:', credentials);

  const response = await authAPI.login(credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    accessToken: null,
    expire: null,
    error: null,
  },

  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.expire = null;
    },
    extraReducers: {
      [login.pending]: state => {
        state.status = 'loading';
      },
      [login.fulfilled]: (state, action) => {
        state.status = 'success';
        state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        state.expire = action.payload.expire;
      },
      [login.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
