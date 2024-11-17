import axios from 'axios';
require('dotenv').config();
//require('dotenv').config();

//129.101.71.41
//  baseURL: 'http://192.168.141.226:3000', // Replace with your backend URL

const axiosInstance = axios.create({
  baseURL: `http://${process.env.DB_HOST}:3000/`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
