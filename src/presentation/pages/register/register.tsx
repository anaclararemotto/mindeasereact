import { Button } from "@presentation/components/button/button";
import { Input } from "@presentation/components/input/input";
import styles from './register.styles.module.scss'

function Register() {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container__brand"]}>
                    <h1 className={styles["container__brand__title"]}>MindEase</h1>
                    <h2 className={styles["container__brand__subtitle"]}>Cadastre-se</h2>
                </div>
                <div className={styles["container__input"]} >
                    <Input type="text" placeholder="Digite seu nome" />
                    <Input type="email" placeholder="Digite seu email" />
                    <Input type="date" placeholder="Digite sua data de nascimento" />
                    <Input type="password" placeholder="Confirme sua senha" />
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button label="Cadastrar" to="/login" />
                </div>
                <div className={styles["container__button"]}>
                    <Button label="Já possui uma conta? Login" transparent={true} to="/login"/>
                </div>
            </div>
        </>
    );
}

export default Register;
