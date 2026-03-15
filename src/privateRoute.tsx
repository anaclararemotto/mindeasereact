import { Navigate } from "react-router-dom";

import { FirebaseAuthRepository } from "./infrastructure/firebase/FirebaseAuthRepository";
import { IsAuthenticated } from "./application/hooks/is-authenticathed";

const authRepository = new FirebaseAuthRepository();
const isAuthenticated = new IsAuthenticated(authRepository);

export function PrivateRoute({ children }: any) {
  const authenticated = isAuthenticated.execute();

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
