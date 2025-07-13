import styles from '@/styles/typography/MiddleHighlight.module.scss';

export function MiddleHighlight({ children }) {
  return (
    <span className={styles["highlight-middle"]}>
      <span className={styles["content"]}>{children}</span>
    </span>
  );
};