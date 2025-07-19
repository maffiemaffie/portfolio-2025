import styles from "@/styles/layouts/SectionCover.module.scss";
import { Box } from "../containers";

export function SectionCover({ backgroundColor, children }) {
  return (
    <Box bigCorners backgroundColor={backgroundColor} className={styles["wrapper"]}>
      <header className={styles["section-cover"]}>{children}</header>
    </Box>
  );
}
