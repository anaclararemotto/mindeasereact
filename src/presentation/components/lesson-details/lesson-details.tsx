import { Header } from "@presentation/components/header/header";
import { ArrowLeft, Download, PlayCircle } from "lucide-react";
import styles from "./lesson-details.styles.module.scss";
import type { LessonDetailsProps } from "./lesson-details.types";



export function LessonDetails({ data, onBack }: LessonDetailsProps) {
    return (
        <>
            <Header />
            <main className={styles["container"]}>
                <button onClick={onBack} className={styles["back-button"]}>
                    <ArrowLeft size={20} /> Voltar
                </button>

                <section className={styles["video-section"]}>
                    <div className={styles["video-wrapper"]}>
                        {data.videoUrl ? (
                            <iframe
                                src={data.videoUrl}
                                title={data.lessonTitle}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className={styles["no-video"]}>
                                <PlayCircle size={48} />
                                <p>Vídeo em breve</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className={styles["info-section"]}>
                    <h1 className={styles["lesson-title"]}>{data.lessonTitle}</h1>
                    <span className={styles["subject-tag"]}>{data.title}</span>
                    
                    <div className={styles["description-box"]}>
                        <h3 className={styles["lesson-subtitle"]}>Sobre a aula</h3>
                        <p>{data.description}</p>
                    </div>

                    {data.ebookUrl && (
                        <a href={data.ebookUrl} download className={styles["download-button"]}>
                            <Download size={20} />
                            Baixar E-book da Aula
                        </a>
                    )}
                </section>
            </main>
        </>
    );
}