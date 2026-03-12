import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@presentation/components/button/button";
import { Input } from "@presentation/components/input/input";


import styles from "./login.styles.module.scss";
import { AUTH_ERRORS } from "@domain/constants/AuthErrors";
import { FirebaseAuthRepository } from "../../../infrastructure/firebase/FirebaseAuthRepository";
import { LoginUseCase } from "../../../application/usecases/LoginUseCase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authRepository = new FirebaseAuthRepository();
  const loginUseCase = new LoginUseCase(authRepository);

  const handleLogin = async () => {
    try {
      await loginUseCase.execute(email, password);
      navigate("/home");
    } catch (error: any) {
      if (error.message === AUTH_ERRORS.EMAIL_PASSWORD_REQUIRED) {
        alert("Preencha email e senha");
        return;
      }

      alert("E-mail ou senha inválidos");
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["container__brand"]}>
        <h1 className={styles["container__brand__title"]}>MindEase</h1>
        <h2 className={styles["container__brand__subtitle"]}>
          Entre com sua conta
        </h2>
      </div>

      <div className={styles["container__input"]}>
        <Input
          type="email"
          placeholder="Digite seu email"
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <Button label="Entrar" onClick={handleLogin} />
      </div>

      <div className={styles["container__buttons"]}>
        <Button label="Esqueci minha senha" transparent />
        <Button
          label="Ainda não possui uma conta? Cadastre-se"
          transparent
          to="/signup"
        />
      </div>
    </div>
  );
}

export default Login;
