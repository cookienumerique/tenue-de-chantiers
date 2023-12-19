import Axios from 'axios';

Axios.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error)
);

Axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
