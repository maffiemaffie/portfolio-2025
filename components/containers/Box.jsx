import colors from "@/styles/color-classes.module.scss";
import styles from "@/styles/containers/Box.module.scss";

export function Box({ children, backgroundColor, className, bigCorners }) {
  const backgroundClass =
    colors[`background-${backgroundColor}`] ?? colors["background-custom"];

  return (
    <div
      className={`
        ${backgroundClass} 
        ${styles.box} 
        ${className ?? ""} 
        ${bigCorners ? styles["big-corners"] : ""}
        `}
      style={{ "--custom-color": backgroundColor }}
    >
      {children}
    </div>
  );
}
