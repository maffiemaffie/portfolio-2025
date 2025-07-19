import styles from "@/styles/layouts/Gallery.module.scss";
import colors from "@/styles/color-classes.module.scss";
import Image from "next/image";
import { Box } from "../containers";

export function Gallery({ src, alt, width, height, backgroundColor = "white" }) {
  const backgroundClass =
    colors[`background-${backgroundColor}`] ?? colors["background-custom"];

  return (
    <div
      className={`${styles["wrapper"]} ${backgroundClass}`}
      style={{ "--custom-color": backgroundColor }}
    >
      <Image
        className={styles["gallery"]}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
