import styles from "@/styles/composite/Bio.module.scss";
import {
  BottomHalfHighlight,
  DashedBox,
  LinedBox,
  ContactLink,
  StarHeader,
  IconList,
  Bold,
} from "@/components";

export function Bio() {
  return (
    <LinedBox
      bigCorners
      className={styles["wrapper"]}
      borderColor={"primary"}
      backgroundColor={"background"}
    >
      <article className={styles["bio"]}>
        <header>
          <h2>
            <BottomHalfHighlight>Hi Elia!</BottomHalfHighlight>
          </h2>
        </header>
        <DashedBox
          backgroundColor={"background"}
          className={styles["description"]}
        >
          Passionate developer/&#8203;designer with professional experience.
          Deeply curious and obsessed with the art of problem solving.
          Full-stack education with extended coursework in graphic design and XR
          media.
        </DashedBox>
        <figure>
          <img src={"/bio/elia.jpg"} alt="me, Elia Cohen" />
        </figure>
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
                icon={"github"}
                url={"https://github.com/maffiemaffie"}
              >
                github.com/maffiemaffie
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

        <article className={styles["software"]}>
          <h3>
            <StarHeader>software</StarHeader>
          </h3>
          <IconList
            icons={
              "react blender unity github figma node arduino typescript photoshop illustrator indesign"
            }
          ></IconList>
        </article>
        <article className={styles["education"]}>
          <h3>
            <StarHeader>education</StarHeader>
          </h3>
          <p>
            <Bold>Rochester Institute of Technology</Bold>
          </p>
          <p>
            <Bold>New Media Interactive Development BS</Bold>
          </p>
          <p>August 2021 - May 2026</p>
          <p>3.0 GPA</p>
        </article>
        <article className={styles["experience"]}>
          <h3>
            <StarHeader>experience</StarHeader>
          </h3>
          <p>
            <Bold>Code Platoon - Teaching Assistant</Bold>
            <br />
            January 2026 - May 2026
          </p>
          <p>
            Guided students learning full-stack development for the first time.
          </p>
          <p>
            Worked with a team of students to build a dashboard for organizing a
            classroom.
          </p>
          <p>
            <Bold>Looking For Group - Lead Full-Stack Developer</Bold>
            <br />
            August 2025 - December 2025
          </p>
          <p>
            Led a team of designers and developers building a social platform
            made for creatives.
          </p>
          <p>
            Crushed bugs and eliminated inherited tech-debt while building out
            new features.
          </p>
        </article>
        <article className={styles["awards"]}>
          <h3>
            <StarHeader>awards</StarHeader>
          </h3>
          <p>
            <Bold>Best Interactive or Experiential at Mode Summit 2025</Bold>
          </p>
          <p>Won as part of a team of 10 designers and developers.</p>
        </article>
      </article>
    </LinedBox>
  );
}
