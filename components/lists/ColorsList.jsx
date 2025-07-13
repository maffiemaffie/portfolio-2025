import styles from "@/styles/lists/ColorsList.module.scss";
import colors from "@/styles/color-classes.module.scss";

export function ColorsList({ colors }) {
  const swatches = colors
    .split(" ")
    .map((color) => <ColorSwatch key={color} color={color} />);

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

function ColorSwatch({ color }) {
  return (
    <span
      className={`${styles["color-swatch"]} ${colors["background-custom"]}`}
      style={{ "--custom-color": color }}
    ></span>
  );
}
