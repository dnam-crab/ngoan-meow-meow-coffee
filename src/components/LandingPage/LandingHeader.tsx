import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";
import logo from "@/assets/logos/logo.svg";

export default function LandingHeader() {
  const navigate = useNavigate();
  const { data } = useAuth();
  const logoutMutation = useLogout();
  const user = data?.user;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const onClose = () => setAnchorEl(null);

  const onLogout = async () => {
    await logoutMutation.mutateAsync();
    onClose();
    navigate("/", { replace: true });
  };

  return (
    <Box
      className="w-full"
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
      }}
    >
      {/* Left */}
      <Typography fontWeight={800}>Ngoan Meow Meow Coffee</Typography>

      {/* Center */}
      <Box
        component="a"
        href="/"
        sx={{ display: "inline-flex", alignItems: "center" }}
      >
        <img src={logo} alt="Logo" width={80} height={80} />
      </Box>

      {/* Right */}
      <div>
        <Button
          variant="text"
          onClick={onOpen}
          endIcon={<KeyboardArrowDownIcon />}
          // Tailwind override cục bộ được nếu muốn:
          // className="!normal-case !text-blue-600"
        >
          Account
        </Button>

        <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
          {!user && (
            <MenuItem component={RouterLink} to="/login" onClick={onClose}>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          )}

          {user?.role === "ADMIN" && (
            <MenuItem
              onClick={() => {
                onClose();
                navigate("/dashboard");
              }}
            >
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              Dashboard
            </MenuItem>
          )}

          {user && <Divider />}

          {user && (
            <MenuItem onClick={onLogout} disabled={logoutMutation.isPending}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" color="error" />
              </ListItemIcon>
              <span className="text-red-600">Logout</span>
            </MenuItem>
          )}
        </Menu>
      </div>
    </Box>
  );
}
