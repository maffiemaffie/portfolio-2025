import styles from '@/styles/composite/BusinessCards.module.scss';
import { Box } from '../containers';
import Image from "next/image";

export function BusinessCards({ src, alt, width, height }) {
  return (
    <Box bigCorners className={styles["wrapper"]} backgroundColor={"transparent"}>
      <Image
        className={styles["business-cards"]}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Box>
  );
};