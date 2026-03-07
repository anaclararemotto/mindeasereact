// src/main/routes/routes.tsx
import App from '@app/App';
import Login from '@presentation/pages/login/login';
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
]);