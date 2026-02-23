import Dashboard from "@/pages/app/Dashboard";
import Profile from "@/pages/app/Profile";
import Sessions from "@/pages/app/Sessions";
import Forget from "@/pages/auth/Forget";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Notfound from "@/pages/Notfound";
import { createBrowserRouter } from "react-router";

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
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/session",
    element: <Sessions />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
export default Router;
