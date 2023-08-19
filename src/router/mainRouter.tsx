import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
import Layout from "../components/common/Layout";
import HomeScereen from "../pages/Screen/HomeScereen";
import PrivateRoute from "./privateRouter";

export const mainRoute = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <HomeScereen />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
