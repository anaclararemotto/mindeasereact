import { CardScheedule } from "@presentation/components/card-schedule/card-schedule";
import { Header } from "@presentation/components/header/header";
import { AlarmClock, ChevronRight, Hourglass, LibraryBig, Newspaper } from "lucide-react";
import styles from "./content.styles.module.scss"
import { CardOption } from "@presentation/components/card-option-content.styles.module.scss/card-option-content";

function Content() {

    return (
        <>
            <Header />
            <main className={styles["container"]} >
                <div className={styles["container__inline-container"]} >
                    <div className={styles["container__inline-container__column"]}>
                        <div className={styles["container__inline-container__column__inline"]}>
                            <AlarmClock className={styles["container__inline-container__column__inline__title"]} />
                            <p className={styles["container__inline-container__column__inline__title"]}>Cronograma do dia</p>
                        </div>
                        <p className={styles["container__inline-container__column__subtitle"]}>Veja o que está planejado para hoje.</p>
                    </div>
                    <a href=""><ChevronRight /></a>
                </div>
                <div className={styles["container__carouselContainer"]}>
                    <div className={styles["container__carouselContainer__carouselContent"]}>
                        <CardScheedule type="Revisão" hour="7:00" date="25/03/2026" matter="Matemática" priority="high" />
                        <CardScheedule type="Revisão" hour="7:00" date="25/03/2026" matter="Matemática" priority="low" />
                        <CardScheedule type="Revisão" hour="7:00" date="25/03/2026" matter="Matemática" priority="medium" />
                    </div>
                </div>
                <CardOption icon={LibraryBig} label="Conteúdo" href="/matters" description="Escolha o conteúdo e avance no estudo."/>
                <CardOption icon={Hourglass} label="Timer/Modo Foco" description="Hora de focar e estudar com intenção."/>
                <CardOption icon={Newspaper} label="Newsletter" description="Fique por dentro das atualidades."/>
            </main>
        </>
    );
}

export default Content;
