import { Navigate } from "react-router-dom";
import { Center, Loader } from "@mantine/core";
import { useAuthMe } from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const { data, isLoading, isError } = useAuthMe();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  if (isError || !data?.user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
