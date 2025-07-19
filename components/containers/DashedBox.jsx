import styles from "@/styles/containers/DashedBox.module.scss";
import { LinedBox } from "./LinedBox";

export function DashedBox({
  children,
  backgroundColor,
  borderColor,
  bigCorners,
  className,
}) {
  return (
    <LinedBox
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      className={`${styles["dashed-box"]} ${className ?? ""}`}
      bigCorners={bigCorners}
    >
      {children}
    </LinedBox>
  );
}
