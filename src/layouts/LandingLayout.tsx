import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import LandingHeader from "@/components/LandingPage/LandingHeader";
// import logo from "@/assets/logos/logo.svg";

export default function LandingLayout() {
  return (
    <AppShell
      header={{
        height: 60,
        offset: false,
      }}
      padding={0}
      styles={{
        header: { backgroundColor: "transparent", borderBottom: "none" },
        main: { padding: 0 },
      }}
    >
      <AppShell.Header>
        <LandingHeader />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
