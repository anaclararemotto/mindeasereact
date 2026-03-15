import { Link } from "react-router-dom";
import type { CardMatters, Subject } from "./card-matters.types";
import styles from "./card-matters.styles.module.scss"
import { ChevronRight } from "lucide-react";



  const SUBJECT_COLORS: Record<Subject, string> = {
  gramatica: "#E1CCFF",
  literatura: "#E1CCFF",
  redacao: "#E1CCFF",
  matematica: "#D4DDF3",
  biologia: "#C2E2C7",
  historia: "#D0B6AF",
  geografia: "#B9E8DD",
  fisica: "#B0DBE0",
  quimica: "#CCD7FF",
  ingles: "#FFCCCC",
  espanhol: "#FFE5CC",
};

const getColor = (subject?: Subject) => {
  if (!subject) return undefined;
  return SUBJECT_COLORS[subject];
};

export function CardMatters({
  to,
  icon: Icon,
  title,
   bgColor,
}: CardMatters) {
  const color = getColor(bgColor);
  const content = (
    < >
        <div className={styles["container-content"]}>
        {Icon && <Icon size={24} />}
      <span>{title}</span>
      </div>
      <ChevronRight/>
    </>
  );

  if (to) {
    return (
      <Link style={
        color ? ({ "--card-bg": color } as React.CSSProperties) : undefined
      } to={to} className={styles["card-container"]} >
        {content}
      </Link>
    );
  }
  return (
    <button style={
        color ? ({ "--card-bg": color } as React.CSSProperties) : undefined
      } className={styles["card-container"]} >
      {content}
    </button>
  );
}
