import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@presentation/components/button/button";
import { Input } from "@presentation/components/input/input";

import { FirebaseAuthRepository } from "../../../infrastructure/firebase/FirebaseAuthRepository";
import { SendPasswordReset } from "../../../application/usecases/ResetPasswordUseCase";

import styles from "./forgot-password.styles.module.scss";

const authRepository = new FirebaseAuthRepository();
const sendPasswordReset = new SendPasswordReset(authRepository);

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword() {
    try {
      setLoading(true);

      await sendPasswordReset.execute(email);

      alert("Email de recuperação enviado!");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["container__brand"]}>
        <h1 className={styles["container__brand__title"]}>MindEase</h1>
        <h2 className={styles["container__brand__subtitle"]}>
          Redefinir senha
        </h2>
      </div>

      <div className={styles["container__input"]}>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <Button
          label="Enviar código de recuperação"
          onClick={handleResetPassword}
          disabled={loading}
        />
      </div>

      <div className={styles["container__button"]}>
        <Link to="/login">
          <Button label="Voltar para login" transparent />
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
