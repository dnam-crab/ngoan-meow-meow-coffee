import { AppShell, Button, Group } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <div>Ngoan Meow Meow Coffee</div>
          <Button component={Link} to="/login">
            Login
          </Button>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
