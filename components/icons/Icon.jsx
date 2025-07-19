import styles from "@/styles/icons/Icon.module.scss";

export function Icon({ icon }) {
  const baseUrl = "/icons/";
  const validIcons = {
    arduino: {
      src: `${baseUrl}arduino.svg`,
      alt: "Arduino",
    },
    behance: {
      src: `${baseUrl}behance.svg`,
      alt: "Behance",
    },
    blender: {
      src: `${baseUrl}blender.svg`,
      alt: "Blender",
    },
    email: {
      src: `${baseUrl}envelope.svg`,
      alt: "E mail",
    },
    express: {
      src: `${baseUrl}express.svg`,
      alt: "Express",
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
    lastfm: {
      src: `${baseUrl}lastdotfm.svg`,
      alt: "Last FM",
    },
    linkedin: {
      src: `${baseUrl}linkedin.svg`,
      alt: "Linked In",
    },
    mongodb: {
      src: `${baseUrl}mongodb.svg`,
      alt: "Mongo DB",
    },
    musicbrainz: {
      src: `${baseUrl}musicbrainz.svg`,
      alt: "music brainz",
    },
    nextjs: {
      src: `${baseUrl}nextdotjs.svg`,
      alt: "Next JS",
    },
    node: {
      src: `${baseUrl}nodedotjs.svg`,
      alt: "Node JS",
    },
    photoshop: {
      src: `${baseUrl}photoshop.svg`,
      alt: "Adobe Photoshop",
    },
    react: {
      src: `${baseUrl}react.svg`,
      alt: "React",
    },
    redis: {
      src: `${baseUrl}redis.svg`,
      alt: "Redis",
    },
    typescript: {
      src: `${baseUrl}typescript.svg`,
      alt: "Type Script",
    },
    unity: {
      src: `${baseUrl}unity.svg`,
      alt: "Unity",
    },
  };

  const { src, alt } = validIcons[icon] ?? {
    src: `${baseUrl}no-icon.svg`,
    alt: "no icon found",
  };

  return <img className={styles["icon-logo"]} src={src} alt={alt} />;
}
