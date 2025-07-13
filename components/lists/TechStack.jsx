import styles from "@/styles/lists/TechStack.module.scss";
import { IconList } from "../icons";

export function TechStack({ technologies }) {
  return (
    <aside className={styles["tech-stack"]}>
      <h4>Tech Stack</h4>
      <span style={{ "font-size": "50px" }}>
        <IconList icons={technologies} />
      </span>
    </aside>
  );
}
