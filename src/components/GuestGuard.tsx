import { Navigate } from "react-router-dom";
import { Center, Loader } from "@mantine/core";
import { useAuthMe } from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const { data, isLoading } = useAuthMe();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  if (data?.user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
