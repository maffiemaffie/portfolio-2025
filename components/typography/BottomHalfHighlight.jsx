import styles from "@/styles/typography/BottomHalfHighlight.module.scss";

export function BottomHalfHighlight({ children }) {
  return (
    <span className={styles["highlight-bottom-half"]}>
      <span className={styles["content"]}>{children}</span>
    </span>
  );
}
