import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./button.styles.module.scss";

type ButtonProps = {
  label: string;
  to?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  transparent?: boolean;
  disabled?: boolean;
};

export function Button({
  label,
  to,
  onClick,
  icon: Icon,
  transparent = false,
  disabled = false,
}: ButtonProps) {
  const className = `
  ${styles.button}
  ${transparent ? styles["button--transparent"] : ""}
  ${disabled ? styles["button--disabled"] : ""}
`;

  const content = (
    <>
      <span>{label}</span>
      {Icon && <Icon size={24} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
