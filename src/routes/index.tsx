import React from "react";
import type { RouteObject } from "react-router-dom"
import { Navigate } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";               // layout có Header + Outlet
import DashboardLayout from "@/layouts/DashboardLayout";   // layout dashboard (sidebar + Outlet)

import LandingPage from "@/pages/LandingPage/LandingPage";
import LoginPage from "@/pages/Login/LoginPage";

import GuestGuard from "@/components/guards/GuestGuard";
import AuthGuard from "@/components/guards/AuthGuard";

import DashboardPage from "@/pages/Dashboard/DashboardPage";

export const routes: RouteObject[] = [
  /**
   * PUBLIC AREA (Landing + Login)
   */
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "login",
        element: (
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        ),
      },
    ],
  },

  /**
   * ADMIN AREA (Dashboard)
   */
  {
    path: "/dashboard",
    element: (
      <AuthGuard allow={["ADMIN"]}>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      // sau này thêm:
      // { path: "bookings", element: <BookingsPage /> },
      // { path: "cats", element: <CatsPage /> },
    ],
  },

  /**
   * FALLBACK
   */
  { path: "*", element: <Navigate to="/" replace /> },
];
