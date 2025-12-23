import { Button } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/auth";
import { AUTH_ME_QUERY_KEY } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import background from "../../assets/images/landingpage/landing_background.webp";

export default function LandingPage() {
  const qc = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      qc.removeQueries({ queryKey: AUTH_ME_QUERY_KEY }); // hoặc invalidate
      navigate("/login", { replace: true });
    },
  });

  return (
    <div
      className="min-h-screen pt-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Button onClick={() => mutation.mutate()} loading={mutation.isPending}>
        Logout
      </Button>
    </div>
  );
}
