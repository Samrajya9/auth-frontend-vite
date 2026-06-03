import axios from "axios";
import type {
  AxiosInstance,
} from "axios";
import { envConfig } from "../config/env.config";

// ── Create Axios Instance ────────────────────────────────────────────────
const axiosInstance: AxiosInstance = axios.create({
  baseURL: envConfig.apiBaseUrl,
  timeout: envConfig.apiTimeout,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Include cookies for cross-origin requests

});

// ── Request Interceptor ───────────────────────────────────────────────────
// axiosInstance.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {

//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// ── Response Interceptor ──────────────────────────────────────────────────
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     const status = error.response?.status;

//     if (status === 401) {
//       // hard redirect (simple but effective)
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;