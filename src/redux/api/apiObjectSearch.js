// apiObjectSearch.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

export const apiObjectSearch = createAsyncThunk('apiObjectSearch', async () => {
  const formattedSearchData = localStorage.getItem('formattedSearchData');

  try {
    const response = await axios.post('/objectsearch', formattedSearchData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Ошибка фетча в ObjectSearch');
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
});
