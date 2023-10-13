import axios from 'axios';

const BASE_URL = 'http://localhost:8000/trip';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // over 5 minutes stop calling
});

axiosInstance.interceptors.request.use((config) => {
  // Get accessToken from local storage
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['x-access-token'] = accessToken;
  }

  return config;
});

export default axiosInstance;
