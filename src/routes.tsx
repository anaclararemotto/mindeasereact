<<<<<<< HEAD
import App from "@app/App";
import Challenge from "@presentation/pages/challenge/challenge";
import Content from "@presentation/pages/content/content";
import ForgotPassword from "@presentation/pages/forgot-password/forgot-password";
import Home from "@presentation/pages/home/home";
import Login from "@presentation/pages/login/login";
import Matters from "@presentation/pages/matters/matters";
import Profile from "@presentation/pages/profile/profile";
import Signup from "@presentation/pages/signup/signup";
import Timer from "@presentation/pages/timer/timer";
import { PrivateRoute } from "./privateRoute";
import { createBrowserRouter } from "react-router-dom";
import { Newsletter } from "@presentation/pages/newsletter/newsletter";
=======
import App from '@app/App';
import Challenge from '@presentation/pages/challenge/challenge';
import Content from '@presentation/pages/content/content';
import Home from '@presentation/pages/home/home';
import Login from '@presentation/pages/login/login';
import { Newsletter } from '@presentation/pages/newsletter/newsletter';
import Matters from '@presentation/pages/matters/matters';
import Profile from '@presentation/pages/profile/profile';
import Signup from '@presentation/pages/signup/signup';
import { createBrowserRouter } from 'react-router-dom';
>>>>>>> 4ca44a8cec963348c05f4837d06b1d6a0dcec783

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
    element: <Newsletter/>
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
