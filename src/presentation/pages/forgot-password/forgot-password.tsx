
import { Button } from "@presentation/components/button/button";
import { Input } from "@presentation/components/input/input";

import styles from "./forgot-password.styles.module.scss";


function ForgotPassword() {
  

  return (
    <div className={styles["container"]}>
      <div className={styles["container__brand"]}>
        <h1 className={styles["container__brand__title"]}>MindEase</h1>
        <h2 className={styles["container__brand__subtitle"]}>Redefinir senha</h2>
      </div>

      <div className={styles["container__input"]}>
        <Input
          type="email"
          placeholder="Digite seu email"
        />


        <Button label="Enviar código de recuperação"  />
      </div>

      <div className={styles["container__button"]}>
        <Button label="Não recebeu o código? Clique aqui" transparent />
      </div>
    </div>
  );
}

export default ForgotPassword;
