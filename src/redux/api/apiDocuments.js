// apiDocuments.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

export const apiDocuments = createAsyncThunk(
  'apiDocuments',
  async (ids, { rejectWithValue }) => {
    const requestData = {
      ids: ids,
    };

    try {
      const response = await axios.post('/documents', requestData);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Ошибка фетча документов');
      }
    } catch (error) {
      console.error('apiDocuments ошибка:', error.response);
      return rejectWithValue(error.response?.data);
    }
  },
);
