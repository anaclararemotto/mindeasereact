// src/main/routes/routes.tsx
import App from '@app/App';
import Content from '@presentation/pages/content/content';
import Home from '@presentation/pages/home/home';
import Login from '@presentation/pages/login/login';
import Register from '@presentation/pages/register/register';
import { createBrowserRouter } from 'react-router-dom';
// Importe suas páginas/templates aqui
// import { LoginPage } from '@/presentation/pages/login'; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Sua home ou layout principal
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
]);