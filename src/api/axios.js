import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const useLocal = false;

const localAuthToken = 'bG9jYWxjbGllbnQ6bG9jYWxzZWNyZXQ=';
const devAuthToken = 'ZGV2Y2xpZW50OmRldnNlY3JldA==';
const authToken = useLocal ? localAuthToken : devAuthToken;

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
});

const axiosMain = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  timeoutErrorMessage: 'Timeout',
});

axiosMain.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosMain;
