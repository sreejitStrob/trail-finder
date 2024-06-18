import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.40:4444/v1/', // Replace with your API base URL
  timeout: 10000, // Optional, set a timeout for requests
});

// You can set up interceptors if needed
// instance.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     // For example, you can add authentication headers here
//     config.headers.Authorization = `Bearer ${yourAuthToken}`;
//     return config;
//   },
//   error => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  response => response,
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;