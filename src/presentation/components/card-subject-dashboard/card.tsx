import type { LucideIcon } from "lucide-react";
import styles from "./card.styles.module.scss";

type Subject =
  | "gramatica"
  | "literatura"
  | "redacao"
  | "matematica"
  | "biologia"
  | "historia"
  | "geografia"
  | "fisica"
  | "quimica"
  | "ingles"
  | "espanhol";

type CardProps = {
  icon: LucideIcon;
  label: string;
  bgColor?: Subject;
};

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

export function CardSubjectDashboard({
  icon: Icon,
  label,
  bgColor,
}: CardProps) {
  const content = <>{Icon && <Icon size={24} />}</>;
  const color = getColor(bgColor);

  return (
    <div
      className={styles["card"]}
      style={
        color ? ({ "--card-bg": color } as React.CSSProperties) : undefined
      }
    >
      <div>{content}</div>
      <div className={styles["card__line"]} />
      <p>{label}</p>
    </div>
  );
}
