import Dashboard from "@/pages/app/Dashboard";
import Profile from "@/pages/app/Profile";
import Sessions from "@/pages/app/Sessions";
import Forget from "@/pages/auth/Forget";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Notfound from "@/pages/Notfound";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/auth/ProtectedRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget",
    element: <Forget />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/session",
    element: (
      <ProtectedRoute>
        <Sessions />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
      <ProtectedRoute>
        <Notfound />
      </ProtectedRoute>
    ),
  },
]);
export default Router;
