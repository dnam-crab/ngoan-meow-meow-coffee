import { Button } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/auth";
import { AUTH_ME_QUERY_KEY } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const qc = useQueryClient();
  const navigate = useNavigate();

  const m = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      qc.removeQueries({ queryKey: AUTH_ME_QUERY_KEY }); // hoặc invalidate
      navigate("/login", { replace: true });
    },
  });

  return (
    <div>
      <Button onClick={() => m.mutate()} loading={m.isPending}>
        Logout
      </Button>
    </div>
  );
}
