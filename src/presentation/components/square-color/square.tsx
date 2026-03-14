import styles from "./square.styles.module.scss";

type SquareProps = {
  bgColor?: string; // HEX, rgb
};

export function Square({ bgColor }: SquareProps) {
  return (
    <div
      className={styles["square"]}
      style={
        bgColor ? ({ "--card-bg": bgColor } as React.CSSProperties) : undefined
      }
    />
  );
}
