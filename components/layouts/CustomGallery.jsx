import styles from "@/styles/layouts/CustomGallery.module.scss";
import { Box } from "../containers";

export function CustomGallery({ backgroundColor = "white", children }) {
  return (
    <Box
      bigCorners
      className={styles["custom-gallery"]}
      backgroundColor={backgroundColor}
    >
      {children}
    </Box>
  );
}

export function CustomGalleryRow({ columns, rowHeight, children }) {
  return (
    <div
      className={styles["row"]}
      style={{ "grid-template-columns": columns, "--row-height": rowHeight }}
    >
      {children}
    </div>
  );
}
