import App from "@app/App";
import Challenge from "@presentation/pages/challenge/challenge";
import Content from "@presentation/pages/content/content";
import ForgotPassword from "@presentation/pages/forgot-password/forgot-password";
import Home from "@presentation/pages/home/home";
import Login from "@presentation/pages/login/login";
import Matters from "@presentation/pages/matters/matters";
import { Newsletter } from "@presentation/pages/newsletter/newsletter";
import Profile from "@presentation/pages/profile/profile";
import Signup from "@presentation/pages/signup/signup";
import Timer from "@presentation/pages/timer/timer";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/matters",
    element: (
      <PrivateRoute>
        <Matters />
      </PrivateRoute>
    ),
  },
  {
    path: "/content",
    element: (
      <PrivateRoute>
        <Content />
      </PrivateRoute>
    ),
  },
  {
    path: "/challenge",
    element: (
      <PrivateRoute>
        <Challenge />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
     path: "/newsletter",
      element:
     <PrivateRoute>
    <Newsletter/>
    </PrivateRoute>
  },
{
      path: "/timer",
    element: (
      <PrivateRoute>
        <Timer />
      </PrivateRoute>
    ),
  },
]);
