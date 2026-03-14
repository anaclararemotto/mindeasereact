import App from '@app/App';
import Home from '@presentation/pages/home/home';
import Login from '@presentation/pages/login/login';
import Matters from '@presentation/pages/matters/matters';
import Signup from '@presentation/pages/signup/signup';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/sign-up",
    element: <Signup/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/matters",
    element: <Matters/>
  },
]);