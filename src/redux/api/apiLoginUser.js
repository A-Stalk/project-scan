// apiLoginUser.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

export const apiLoginUser = createAsyncThunk(
  'user/login',
  async ({ login, password }) => {
    try {
      const response = await axios.post('/account/login', { login, password });
      if (response.status === 200) {
        const { accessToken, expire } = response.data;
        return {
          accessToken: accessToken,
          expire: expire,
        };
      } else {
        throw new Error(response.status + ': ' + response.data.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  },
);
