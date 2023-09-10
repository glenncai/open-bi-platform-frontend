import axios from 'axios';
import { HttpResProps } from '@/lib/type';
import { getToken } from '@/utils';

const httpAuthClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
  },
  timeout: 10000,
});

httpAuthClient.interceptors.request.use(
  config => {
    // Exclude signin and signup routes from setting Authorization header
    if (!(config.url?.endsWith('/signin') || config.url?.endsWith('/signup'))) {
      config.headers['Authorization'] = `Bearer ${getToken()}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpAuthClient.interceptors.response.use(
  response => {
    const responseData = (response.data as HttpResProps) || {};
    return responseData as any;
  },
  error => {
    const { response } = error;

    if (response) {
      // Request was made and server responded with status not in 2xx range
      const { message } = response.data;
      return Promise.reject(message);
    }

    // Something else happened while making the request
    return Promise.reject(error);
  }
);

export default httpAuthClient;
