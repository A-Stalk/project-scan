// apiAccInfo.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

export const apiAccInfo = createAsyncThunk(
  'accInfo/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/account/info');
      if (response.status !== 200) {
        return response.data;
      }
      const data = response.data;
      return data.eventFiltersInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
