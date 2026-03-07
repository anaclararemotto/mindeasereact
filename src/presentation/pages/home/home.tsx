import { CardOption } from "@presentation/components/card-option/card-option";
import { ContinueStudyingCard } from "@presentation/components/continue-studying-card/continue-studying-card";
import { Header } from "@presentation/components/header/header";
import { CalendarDays, Goal } from "lucide-react";
import HomeIllustration from "../../../assets/home-image.svg";
import styles from "./home.styles.module.scss"

function Home() {
    const isNewUser = true;
    const mockData = {
        videoId: "aqz-KE-bpKQ",
        title: isNewUser ? "Bem-vinda ao MindEase!" : "Continuar Estudando",
        description: isNewUser
            ? "Comece sua jornada com este vídeo de introdução."
            : "Retome exatamente de onde parou, um estudo de cada vez."
    };
    return (
        <>
            <Header />
            <main className={styles["container"]}>
                <div className={styles["container__wellcome"]}>
                    <h1 className={styles["container__wellcome__title"]}>Olá Joana!</h1>
                    <p className={styles["container__wellcome__subtitle"]}>Começe devagar e siga no seu tempo</p>
                </div>
                <img
                    src={HomeIllustration}
                    width="100%"
                    alt="Mulher estudando com simbolos matematicos, graficos e planetas ao redor"
                />
                <ContinueStudyingCard
                    isFirstAccess={isNewUser}
                    youtubeVideoId={mockData.videoId}
                    title={mockData.title}
                    description={mockData.description}
                    onClick={() => console.log("Card clicado!")}
                />
                <CardOption label="Cronograma do dia" icon={CalendarDays} />
                <CardOption label="Desafio de hoje" icon={Goal} />
            </main>
        </>
    );
}

export default Home;
