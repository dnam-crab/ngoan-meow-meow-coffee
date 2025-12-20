import { Group, Button, Menu, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { IconChevronDown, IconDashboard, IconLogin, IconLogout } from "@tabler/icons-react";
import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";

export default function LandingHeader() {
  const navigate = useNavigate();
  const { data } = useAuth();
  const logoutMutation = useLogout();

  const user = data?.user;

  const onLogout = async () => {
    await logoutMutation.mutateAsync();
    navigate("/", { replace: true });
  };

  return (
    <Group h="100%" px="md" justify="space-between">
      {/* Left */}
      <Text fw={800}>Ngoan Meow Meow Coffee</Text>

      {/* Right: Account menu */}
      <Menu shadow="md" width={200} position="bottom-end">
        <Menu.Target>
          <Button variant="subtle" rightSection={<IconChevronDown size={16} />}>
            Account
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          {!user && (
            <Menu.Item
              leftSection={<IconLogin size={16} />}
              component={Link}
              to="/login"
            >
              Login
            </Menu.Item>
          )}

          {user?.role === "ADMIN" && (
            <Menu.Item
              leftSection={<IconDashboard size={16} />}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Menu.Item>
          )}

          {user && (
            <Menu.Item
              color="red"
              leftSection={<IconLogout size={16} />}
              onClick={onLogout}
              disabled={logoutMutation.isPending}
            >
              Logout
            </Menu.Item>
          )}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
