// apiHistograms.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

export const apiHistograms = createAsyncThunk(
  'apiHistograms',
  async (_, { getState }) => {
    const { formattedSearchData } = getState().formData;

    try {
      const response = await axios.post(
        '/objectsearch/histograms',
        formattedSearchData,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Ошибка фетча гистограмм');
      }
    } catch (error) {
      throw new Error(error);
    }
  },
);
