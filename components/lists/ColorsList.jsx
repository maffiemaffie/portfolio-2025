import styles from "@/styles/lists/ColorsList.module.scss";
import colors from "@/styles/color-classes.module.scss";

export function ColorsList({ colors }) {
  const swatches = colors.split(" ").map((color, index) => {
    let borderColor;

    if (
      color.toLowerCase() === "#ffffff" ||
      color.toLowerCase() === "white" ||
      color.toLowerCase() === "#fff"
    )
      borderColor = colors.split(" ")[index - 1] ?? "black";
    return <ColorSwatch borderColor={borderColor} key={color} color={color} />;
  });

  return (
    <aside className={styles["colors-list"]}>
      <h4>Colors</h4>
      <ul>
        {swatches.map((swatch, index) => (
          <li key={index}>{swatch}</li>
        ))}
      </ul>
    </aside>
  );
}

function ColorSwatch({ color, borderColor }) {
  return (
    <span
      className={`${colors["border-custom"]} ${styles["color-swatch"]} ${colors["background-custom"]}`}
      style={{ "--custom-color": color, "--border-color": borderColor ?? color }}
    ></span>
  );
}
