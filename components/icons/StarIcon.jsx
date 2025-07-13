import styles from "@/styles/icons/StarIcon.module.scss";

export function StarIcon({filled}) {
  return (
    <svg
      className={`${styles["icon-star"]} ${filled ? styles["filled"] : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      fill="none"
    >
      <path d="M17.5 5.88184C19.6781 11.1324 23.8667 15.3217 29.1172 17.5C23.867 19.6781 19.6781 23.867 17.5 29.1172C15.3217 23.8667 11.1324 19.6781 5.88184 17.5C11.1327 15.3218 15.3218 11.1327 17.5 5.88184Z" />
    </svg>
  );
}