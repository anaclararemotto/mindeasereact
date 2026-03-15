import { CardMatters } from "@presentation/components/card-matters/card-matters";
import { Header } from "@presentation/components/header/header";
import { CaseSensitive, Languages, Sigma } from "lucide-react";
import styles from "./matters.styles.module.scss"

function Matters() {
    
    return (
        <>
            <Header />
            <main className={styles["container"]}>
                <CardMatters bgColor="literatura" icon={CaseSensitive} title="Língua Portuguesa" />
                <CardMatters bgColor="ingles" icon={Languages} title="Língua Inglesa" />
                <CardMatters bgColor="espanhol" icon={Languages} title="Língua Espanhola" />
                <CardMatters bgColor="matematica" icon={Sigma} title="Matemática" />
            </main>
        </>
    );
}

export default Matters;
