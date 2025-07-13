import styles from "@/styles/icons/Icon.module.scss";

export function Icon({ icon }) {
  const baseUrl = "/icons/";
  const validIcons = {
    arduino: {
      src: `${baseUrl}arduino.svg`,
      alt: "Arduino",
    },
    blender: {
      src: `${baseUrl}blender.svg`,
      alt: "Blender",
    },
    figma: {
      src: `${baseUrl}figma.svg`,
      alt: "Figma",
    },
    github: {
      src: `${baseUrl}github.svg`,
      alt: "Github",
    },
    illustrator: {
      src: `${baseUrl}illustrator.svg`,
      alt: "Adobe Illustrator",
    },
    indesign: {
      src: `${baseUrl}indesign.svg`,
      alt: "Adobe In Design",
    },
    photoshop: {
      src: `${baseUrl}photoshop.svg`,
      alt: "Adobe Photoshop",
    },
    react: {
      src: `${baseUrl}react.svg`,
      alt: "React",
    },
    typescript: {
      src: `${baseUrl}typescript.svg`,
      alt: "Type Script",
    },
  };

  const { src, alt } = validIcons[icon] ?? {
    src: `${baseUrl}no-icon.svg`,
    alt: "no icon found",
  };

  return <img className={styles["icon-logo"]} src={src} alt={alt} />;
}
