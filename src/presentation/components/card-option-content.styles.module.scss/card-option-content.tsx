import type { CardOptionProps } from "./card-option-content.types";
import styles from './card-option-content.styles.module.scss'

export function CardOption({
  label,
  description,
  href,
  icon: Icon,
}: CardOptionProps) {
  
  return (
    <button className={styles["card"]}>
      <a href={href} className={styles["card__container"]}  >
        {Icon && <Icon size={24} className={styles["card__container__color"]} />}
        <p className={styles["card__container__title"]}>{label }</p>
        <p className={styles["card__container__subtitle"]}>{description}</p>
      </a>
    </button>
  );
}
