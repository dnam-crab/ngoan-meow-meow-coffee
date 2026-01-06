import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 2, // tương đương padding="md"
        backgroundColor: "#f5f5f5",
      }}
    >
      <Outlet />
    </Box>
  );
}
