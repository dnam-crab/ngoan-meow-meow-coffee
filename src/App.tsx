import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/routes";

export default function App() {
  const router = createBrowserRouter(routes);
  console.count("App render");

  return <RouterProvider router={router} />;
}
