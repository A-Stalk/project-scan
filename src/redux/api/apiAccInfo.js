// apiAccInfo.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

const MAX_RETRY_COUNT = 3;

export const apiAccInfo = createAsyncThunk(
  'accInfo/fetch',
  async (_, { rejectWithValue }) => {
    let retryCount = 0;
    while (retryCount < MAX_RETRY_COUNT) {
      try {
        const response = await axios.get('/account/info');
        if (response.status !== 200) {
          return response.data;
        }
        const data = response.data;
        return data.eventFiltersInfo;
      } catch (error) {
        if (error.resonse && error.response.status === 401) {
          retryCount++;
          continue;
        }
        return rejectWithValue(error.message);
      }
    }
  },
);
