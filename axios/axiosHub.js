import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://192.168.1.40:4444/v1/',
    timeout: 5000, // Adjust as needed
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default instance;