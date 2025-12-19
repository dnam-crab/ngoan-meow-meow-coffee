import { useQuery } from "@tanstack/react-query";
import { me } from "../services/auth";

export const AUTH_ME_QUERY_KEY = ["auth", "me"];

export function useAuthMe() {
  return useQuery({
    queryKey: AUTH_ME_QUERY_KEY,
    queryFn: me,
    retry: false,         
    staleTime: 5 * 60 * 1000, // 5 phút
  });
}
