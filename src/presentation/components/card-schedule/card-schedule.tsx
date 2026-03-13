import styles from "./card-schedule.styles.module.scss";
import type { CardScheeduleProps } from "./card-schedule.types";


export function CardScheedule({
    hour,
    date,
    type,
    matter,
    priority,
}: CardScheeduleProps) {

    const color =
        priority === "low"
            ? "#04CB01"
            : priority === "medium"
                ? "#000000"
                : "#CB0101";

    const priorityMap = {
        high: "Alta",
        medium: "Média",
        low: "Baixa",
    };

    const translatedPriority = priorityMap[priority];

    return (
        <button className={styles["card"]}  >
            <div className={styles["card__inline"]}>
                <p className={styles["card__inline__hour"]}>{hour}</p>
                <p className={styles["card__inline__title"]}>{date}</p>
            </div>
            <div className={styles["card__inline"]}>
                <div>
                    <p className={styles["card__inline__title"]}>Tipo</p>
                    <p className={styles["card__inline__subtitle"]}>{type}</p>
                </div>
                <div>
                    <p className={styles["card__inline__title"]}>Matéria</p>
                    <p className={styles["card__inline__subtitle"]}>{matter}</p>
                </div>
            </div>
            <div  className={styles["card__inline"]}>
                <div>
                    <p className={styles["card__inline__title"]}>Prioridade</p>
                <p className={styles["card__inline__subtitle"]}
                    style={{ color }}>{translatedPriority}</p>
                </div>
            </div>
        </button>
    );
}