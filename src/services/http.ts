import axios, { AxiosError, type AxiosInstance } from "axios";

export type ApiErrorBody = {
  message?: string;
};

export const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // sau này dùng cookie/session
  headers: {
    "Content-Type": "application/json",
  },
});

// (optional) export type để dùng chỗ khác
export type ApiAxiosError = AxiosError<ApiErrorBody>;
