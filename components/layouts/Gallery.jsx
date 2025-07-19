import styles from "@/styles/layouts/Gallery.module.scss";
import Image from "next/image";
import { Box } from "../containers";

export function Gallery({
  src,
  alt,
  width,
  height,
  backgroundColor = "white",
}) {
  return (
    <Box
      bigCorners
      className={`${styles["wrapper"]}`}
      backgroundColor={backgroundColor}
    >
      <Image
        className={styles["gallery"]}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Box>
  );
}
