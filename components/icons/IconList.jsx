import styles from "@/styles/lists/IconList.module.scss";
import { Icon } from "./Icon";

export function IconList({ icons }) {
  const iconElements = icons.split(" ").map((icon) => <Icon key={icon} icon={icon} />);

  return <ul className={styles["icon-list"]}>{iconElements}</ul>;
}
