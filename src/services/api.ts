import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error: AxiosError) {
    console.error(error.message);
    switch (error.response?.status) {
      case 400:
        console.error("400エラーです");
        break;
      case 401:
        console.error("401エラーです");
        break;
      case 404:
        console.error("URL先が見つかりません");
        break;
      default:
        console.error("APIエラーです");
        break;
    }
  }
);
