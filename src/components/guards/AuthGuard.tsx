import { Navigate, useLocation } from "react-router-dom";
import { Center, Loader } from "@mantine/core";
import { useAuth } from "@/hooks/useAuth";

export type Role = "ADMIN" | "USER";

type Props = {
  children: React.ReactNode;
  allow?: Role[]; // ✅ thêm cái này
};

export default function AuthGuard({ children, allow }: Props) {
  const { data, isPending } = useAuth();
  const location = useLocation();

  if (isPending) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  // chưa login => về login
  if (!data?.user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  // có allow => check role
  if (allow && allow.length > 0) {
    const role = data.user.role as Role;
    if (!allow.includes(role)) return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}