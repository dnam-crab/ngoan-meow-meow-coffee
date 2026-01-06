import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const { data, isPending } = useAuth();

  if (isPending) {
    return (
      <div loading h="100vh">
      </div>
    );
  }

  if (data?.user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
