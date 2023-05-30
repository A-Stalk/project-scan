// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { apiLoginUser } from '../api/apiLoginUser';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  expire: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    ...initialState,
    ...JSON.parse(localStorage.getItem('user')),
  },
  reducers: {
    logoutProcess: state => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.expire = null;
      state.user = null;
      localStorage.removeItem('root');
      localStorage.clear();
    },
  },
  extraReducers: builder => {
    builder.addCase(apiLoginUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.expire = action.payload.expire;
      state.user = {
        name: 'Андрей A_Stalk',
        avatar: '@/assets/ava_example.jpg',
        tariff: 'Beginner',
      };
      localStorage.setItem('user', JSON.stringify(state));
      localStorage.setItem('accessToken', state.accessToken);
    });
  },
});

export const { logoutProcess } = userSlice.actions;

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectAccessToken = state => state.user.accessToken;
export const selectExpire = state => state.user.expire;
export const selectUser = state => state.user.user;

export default userSlice.reducer;
