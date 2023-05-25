import axios from 'axios';
import { API_URL } from '../../data';

const token = localStorage.getItem('accessToken');

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
