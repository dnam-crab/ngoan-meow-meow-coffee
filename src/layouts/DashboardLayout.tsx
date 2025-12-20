import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <AppShell padding="md">
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
