export type User = {
  id: string;
  email: string;
  name?: string | null;
  role?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = { user: User };
export type MeResponse = { user: User };
export type LogoutResponse = { ok: true };
