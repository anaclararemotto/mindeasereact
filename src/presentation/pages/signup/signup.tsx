import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@presentation/components/button/button";
import { Input } from "@presentation/components/input/input";

import styles from "./signup.styles.module.scss";
import { AUTH_MESSAGES } from "@domain/constants/AuthMessages";
import { AUTH_ERRORS } from "@domain/constants/AuthErrors";
import { FIREBASE_AUTH_ERRORS } from "@domain/constants/FirebaseErrors";

import { SignupUseCase } from "../../../application/usecases/SignupCase";
import { FirebaseAuthRepository } from "../../../infrastructure/firebase/FirebaseAuthRepository";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    const repository = new FirebaseAuthRepository();
    const signupUseCase = new SignupUseCase(repository);

    try {
      if (password !== confirmPassword) {
        alert(AUTH_MESSAGES.PASSWORDS_DO_NOT_MATCH);
        return;
      }

      const body_request = {
        name,
        birthDate: new Date(birthDate),
        email,
        password,
      };

      await signupUseCase.execute(body_request);

      alert(AUTH_MESSAGES.SIGNUP_SUCCESS);
      navigate("/login");
    } catch (error: any) {
      if (error.message === AUTH_ERRORS.SIGNUP_FIELDS_REQUIRED) {
        alert(AUTH_MESSAGES.FILL_REQUIRED_FIELDS);
        return;
      }

      if (error.code === FIREBASE_AUTH_ERRORS.EMAIL_ALREADY_IN_USE) {
        alert(AUTH_MESSAGES.EMAIL_ALREADY_IN_USE);
        return;
      }

      if (error.code === FIREBASE_AUTH_ERRORS.INVALID_EMAIL) {
        alert(AUTH_MESSAGES.INVALID_EMAIL);
        return;
      }

      if (error.code === FIREBASE_AUTH_ERRORS.WEAK_PASSWORD) {
        alert(AUTH_MESSAGES.WEAK_PASSWORD);
        return;
      }

      alert(AUTH_MESSAGES.SIGNUP_ERROR);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["container__brand"]}>
        <h1 className={styles["container__brand__title"]}>MindEase</h1>
        <h2 className={styles["container__brand__subtitle"]}>Cadastre-se</h2>
      </div>

      <div className={styles["container__input"]}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button label="Cadastrar" onClick={handleSignup} />
      </div>

      <div className={styles["container__button"]}>
        <Button label="Já possui uma conta? Login" transparent to="/login" />
      </div>
    </div>
  );
}

export default Signup;
