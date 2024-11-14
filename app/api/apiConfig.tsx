import axios from 'axios';
//require('dotenv').config();

//129.101.71.41
//  baseURL: 'http://192.168.141.226:3000', // Replace with your backend URL

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // Replace with your backend URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
