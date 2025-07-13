import styles from "@/styles/typography/StarHeader.module.scss";
import { StarIcon } from "../icons";

export function StarHeader({ children }) {
  return (
    <span className={styles["star-header"]}>
      <StarIcon filled />
      <span className={styles["content"]}>{children}</span>
      <StarIcon />
    </span>
  );
}
