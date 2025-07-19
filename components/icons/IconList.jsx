import styles from "@/styles/lists/IconList.module.scss";
import { Icon } from "./Icon";

export function IconList({ icons }) {
  const iconElements = icons.split(" ").map((icon) => <li key={icon}><Icon icon={icon} /></li>);

  return <ul className={styles["icon-list"]}>{iconElements}</ul>;
}
