import App from "@app/App";
import Challenge from "@presentation/pages/challenge/challenge";
import Content from "@presentation/pages/content/content";
import Home from "@presentation/pages/home/home";
import Login from "@presentation/pages/login/login";
import Matters from "@presentation/pages/matters/matters";
import Profile from "@presentation/pages/profile/profile";
import Signup from "@presentation/pages/signup/signup";
import Timer from "@presentation/pages/timer/timer";
import { createBrowserRouter } from "react-router-dom";

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/matters",
    element: <Matters />,
  },
  {
    path: "/content",
    element: <Content />,
  },
  {
    path: "/challenge",
    element: <Challenge />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
]);
