import styles from "@/styles/layouts/SectionCover.module.scss";
import { Box } from "../containers";
import { useState } from "react";

export function SectionCover({
  backgroundColor,
  children,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      bigCorners
      backgroundColor={backgroundColor}
      className={styles["wrapper"]}
    >
      <header className={styles["section-cover"]}>{children}</header>
    </Box>
  );
}

export function AnimatedSectionCover({
  backgroundColor,
  defaultImage,
  hoverImage,
}) {
  const defaultImageElement = (
    <img src={defaultImage.src} alt={defaultImage.alt} />
  );
  const hoverImageElement = <img src={hoverImage.src} alt={hoverImage.alt} />;

  const [image, setImage] = useState(defaultImageElement);

  return (
    <SectionCover
      onMouseEnter={() => setImage(hoverImageElement)}
      onMouseLeave={() => setImage(defaultImageElement)}
      backgroundColor={backgroundColor}
    >
      {image}
    </SectionCover>
  );
}
