import { http } from "../http";
import type { LoginPayload, LoginResponse, LogoutResponse, MeResponse } from "./auth.types";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const res = await http.post<LoginResponse>("/auth/login", payload);
  return res.data;
}

export async function me(): Promise<MeResponse> {
  const res = await http.get<MeResponse>("/auth/me");
  return res.data;
}

export async function logout(): Promise<LogoutResponse> {
  const res = await http.post<LogoutResponse>("/auth/logout");
  return res.data;
}
