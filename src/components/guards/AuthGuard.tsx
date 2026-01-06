import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";

export type Role = "ADMIN" | "USER";

type Props = {
  children: React.ReactNode;
  allow?: Role[];
};

export default function AuthGuard({ children, allow }: Props) {
  const { data, isPending } = useAuth();
  const location = useLocation();

  if (isPending) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!data?.user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (allow && allow.length > 0) {
    const role = data.user.role as Role;
    if (!allow.includes(role)) return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
