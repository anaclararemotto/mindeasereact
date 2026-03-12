import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./card-option.styles.module.scss";

type CardProps = {
  label: string;
  to?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  transparent?: boolean;
  disabled?: boolean;
};

export function CardOption({
  label,
  to,
  onClick,
  icon: Icon,
}: CardProps) {
  const content = (
    <>
      <div className={styles["card__container"]}>
        {Icon && <Icon size={24} className={styles["card__container__color"]} />}
      <span className={styles["card__container__color"]}>{label}</span>
      </div>
      <ChevronRight size={24} className={styles["card__container__color"]}/>
    </>
  );

  if (to) {
    return (
      <Link to={to} >
        {content}
      </Link>
    );
  }
  return (
    <button className={styles["card"]} onClick={onClick} >
      {content}
    </button>
  );
}
