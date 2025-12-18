import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ví dụ http://localhost:4000
  withCredentials: true, // quan trọng cho cookie HttpOnly
  headers: { "Content-Type": "application/json" },
});
