import { Header } from "@presentation/components/header/header";
import styles from "./profile.styles.module.scss";
import { CardOption } from "@presentation/components/card-option/card-option";
import { Hourglass, LibraryBig, LogOut, Newspaper, Wrench } from "lucide-react";
import CardProfile from "@presentation/components/card-profile/card-profile";

function Profile() {

    return (
        <>
            <Header />
            <main className={styles["container"]} >
                <CardProfile/>
               <CardOption icon={Wrench} label="Personalizar Estudo"/>
               <CardOption icon={LibraryBig} to="/" label="Conteúdos"/>
               <CardOption icon={Hourglass} label="Timer / Modo Foco"/>
               <CardOption icon={Newspaper} label="Newsletter"/>
               <CardOption icon={LogOut} label="Sair"/>
            </main>
        </>
    );
}

export default Profile;
