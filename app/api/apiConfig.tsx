import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.141.226:3000', // Replace with your backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
