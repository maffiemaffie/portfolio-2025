import styles from "@/styles/composite/Hero.module.scss";
import { LinedBox } from "../containers";
import { MiddleHighlight } from "../typography";
import { StarIcon } from "../icons";

export function Hero() {
  return (
    <LinedBox
      bigCorners
      backgroundColor={"background"}
      borderColor={"primary"}
      className={styles["hero"]}
    >
      <h1>
        <MiddleHighlight>
          <StarIcon large filled/>
          Port
          <br />
          folio
          <StarIcon large filled/>
        </MiddleHighlight>
      </h1>
      <span className={styles["year"]}>2025</span>
    </LinedBox>
  );
}
