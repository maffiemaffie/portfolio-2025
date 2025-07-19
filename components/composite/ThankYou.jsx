import styles from "@/styles/composite/ThankYou.module.scss";
import { LinedBox } from "../containers";
import { MiddleHighlight } from "../typography";
import { ContactLink } from "../typography";

export function ThankYou() {
  return (
    <LinedBox
      bigCorners
      backgroundColor={"background"}
      borderColor={"primary"}
      className={styles["thank-you"]}
    >
      <h2>
        <MiddleHighlight>Thank You!</MiddleHighlight>
      </h2>
      <aside className={styles["contacts"]}>
        <ul>
          <li>
            <ContactLink
              icon={"behance"}
              url={"https://www.behance.net/eliacr"}
            >
              behance.net/eliacr
            </ContactLink>
          </li>
          <li>
            <ContactLink icon={"email"} url={"mailto:eliacramos@yahoo.com"}>
              eliacramos@yahoo.com
            </ContactLink>
          </li>
          <li>
            <ContactLink
              icon={"linkedin"}
              url={"https://linkedin.com/in/maffier"}
            >
              linkedin.com/in/maffier
            </ContactLink>
          </li>
        </ul>
      </aside>
      <span className={styles["year"]}>2025</span>
    </LinedBox>
  );
}
