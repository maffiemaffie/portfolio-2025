import styles from "@/styles/layouts/SectionCover.module.scss";
import colors from "@/styles/color-classes.module.scss";

export function SectionCover({ backgroundColor, children }) {
  const backgroundClass = colors[`background-${backgroundColor}`] ?? colors["background-custom"];

  return (
    <header
      className={`${styles["section-cover"]}
      ${backgroundClass}`}
      style={{ "--custom-color": backgroundColor }}
    >
      {children}
    </header>
  );
}