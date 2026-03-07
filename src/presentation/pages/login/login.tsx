import { Button } from "@presentation/components/button/button";
import { Input } from "@presentation/components/input/input";
import styles from './login.styles.module.scss'

function Login() {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["container__brand"]}>
                    <h1 className={styles["container__brand__title"]}>MindEase</h1>
                    <h2 className={styles["container__brand__subtitle"]}>Entre com sua conta</h2>
                </div>
                <div className={styles["container__input"]} >
                    <Input type="email" placeholder="Digite seu email" />
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button label="Entrar" />
                </div>
                <div className={styles["container__buttons"]}>
                    <Button label="Esqueci minha senha" transparent={true} />
                    <Button label="Ainda não possui uma conta? Cadastre-se" transparent={true} />
                </div>
            </div>
        </>
    );
}

export default Login;
