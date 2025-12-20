import React from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import LandingLayout from '@/layouts/LandingLayout'; // layout có Header Landing + Outlet
// import AppLayout from "@/layouts/AppLayout"; // layout có Header + Outlet
import DashboardLayout from "@/layouts/DashboardLayout"; // layout dashboard (sidebar + Outlet)

import LandingPage from "@/pages/LandingPage/LandingPage";
import LoginPage from "@/pages/Login/LoginPage";

import GuestGuard from "@/components/guards/GuestGuard";
import AuthGuard from "@/components/guards/AuthGuard";

import DashboardPage from "@/pages/Dashboard/DashboardPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingLayout />, // ✅ có Header Landing
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/login",
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard allow={["ADMIN"]}>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [{ index: true, element: <DashboardPage /> }],
  },
  /**
   * FALLBACK
   */
  { path: "*", element: <Navigate to="/" replace /> },
];
