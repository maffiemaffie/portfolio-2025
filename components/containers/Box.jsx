import colors from "@/styles/color-classes.module.scss";
import styles from "@/styles/containers/Box.module.scss";

export function Box({ children, backgroundColor, className }) {
  return (
    <div
      className={`
        ${
          colors[`background-${backgroundColor}`] ?? colors[`background-white`]
        } 
        ${styles.box} 
        ${className ?? ""} `}
    >
      {children}
    </div>
  );
}
