import styles from "@/styles/containers/DashedBox.module.scss";
import colors from "@/styles/color-classes.module.scss";
import { Box } from "./Box";

export function LinedBox({
  children,
  backgroundColor,
  borderColor,
  className,
  bigCorners,
}) {
  return (
    <Box
      backgroundColor={backgroundColor}
      className={`${styles["lined-box"]} 
        ${colors[`border-${borderColor}`] ?? "border-primary"} 
        ${className ?? ""}`}
      bigCorners={bigCorners}
    >
      {children}
    </Box>
  );
}
