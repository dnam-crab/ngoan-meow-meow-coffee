import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Box } from "@mui/material";
import LandingHeader from "@/components/LandingPage/LandingHeader";
// import logo from "@/assets/logos/logo.svg";

export default function LandingLayout() {
  const HEADER_H = 60;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Header overlay */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: HEADER_H,
          justifyContent: "center",
          backgroundColor: "transparent",
          borderBottom: "none",
        }}
      >
        <Toolbar sx={{ minHeight: HEADER_H }}>
          <LandingHeader />
        </Toolbar>
      </AppBar>

      {/* Main starts from top (background full-bleed) */}
      <Box component="main" sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
