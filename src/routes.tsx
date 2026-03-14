import App from '@app/App';
import Content from '@presentation/pages/content/content';
import Home from '@presentation/pages/home/home';
import Login from '@presentation/pages/login/login';
import Profile from '@presentation/pages/profile/profile';
import Register from '@presentation/pages/register/register';
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
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/content",
    element: <Content/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
]);