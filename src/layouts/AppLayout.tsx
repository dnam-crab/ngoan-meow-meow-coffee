import { Outlet, Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

export default function AppLayout() {
  const HEADER_H = 60;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ height: HEADER_H, justifyContent: "center" }}
      >
        <Toolbar
          sx={{
            minHeight: HEADER_H,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={800}>Ngoan Meow Meow Coffee</Typography>
          <Button component={RouterLink} to="/login" variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
