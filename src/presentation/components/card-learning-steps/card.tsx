import styles from "./card.styles.module.scss";

type CardProps = {
  number: string;
  title: string;
  content: string;
};

export function CardLeaningSteps({number, title, content}: CardProps) {
  return (
    <div className={styles['card']}>
        <div className={styles['card__number']}>{number}</div>
        <div className={styles['card__text']}>
            <h3 className={styles['card__text__title']}>{title}</h3>
            <p className={styles['card__text__content']}>{content}</p>
        </div>
    </div>
  );
}
