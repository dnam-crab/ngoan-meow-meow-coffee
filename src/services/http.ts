import axios, { AxiosError, type AxiosInstance } from "axios";
import { ENV } from "../constants/index";

export type ApiErrorBody = {
  message?: string;
};

export const http: AxiosInstance = axios.create({
  baseURL: ENV.apiBaseUrl,
  withCredentials: true, // sau này dùng cookie/session
  headers: {
    "Content-Type": "application/json",
  },
});

// (optional) export type để dùng chỗ khác
export type ApiAxiosError = AxiosError<ApiErrorBody>;
