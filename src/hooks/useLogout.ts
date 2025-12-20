import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_ME_QUERY_KEY } from "@/hooks/useAuth";
import { logout } from "@/services/auth";

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await logout();
    },
    onSuccess: () => {
      queryClient.setQueryData(AUTH_ME_QUERY_KEY, null);
    },
  });
}
