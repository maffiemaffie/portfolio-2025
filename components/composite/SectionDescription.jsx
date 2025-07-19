import styles from "@/styles/composite/SectionDescription.module.scss";
import { Box } from "../containers";

export function SectionDescription({ children, bigImage, smallImage }) {
  return (
    <Box bigCorners className={styles["wrapper"]} backgroundColor={"white"}>
      <article
        className={`${styles["section-description"]} 
          ${bigImage ? styles["big-image"] : ""} 
          ${smallImage ? styles["small-image"] : ""}
        `}
      >
        {children}
      </article>
    </Box>
  );
}

export function SectionDescriptionTitle({ children, size = "medium" }) {
  const sizes = {
    s: styles["small"],
    small: styles["small"],
    m: styles["medium"],
    medium: styles["medium"],
    l: styles["large"],
    large: styles["large"],
  };

  const validatedSize = sizes[size] ?? sizes["medium"];

  return (
    <header className={`${validatedSize} ${styles["title"]}`}>
      {children}
    </header>
  );
}

export function SectionDescriptionImage({ children }) {
  return <figure className={styles["figure"]}>{children}</figure>;
}

export function SectionDescriptionContent({ children }) {
  return <div className={styles["content"]}>{children}</div>;
}

export function SectionDescriptionList({ children }) {
  return <div className={styles["list"]}>{children}</div>;
}
