import styles from "@/styles/typography/Bold.module.scss";

export function Bold({ children }) {
  return <span className={styles["bold"]}>{children}</span>;
}
