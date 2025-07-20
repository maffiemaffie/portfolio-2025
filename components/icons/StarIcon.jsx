import styles from "@/styles/icons/StarIcon.module.scss";

export function StarIcon({ large, filled }) {
  if (!large)
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

  return (
    <svg
      className={`${styles["icon-star"]} ${filled ? styles["filled"] : ""} ${large ? styles["large"] : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125 126"
      fill="none"
    >
      <path
        d="M62.5001 0.550781L64.4823 17.2573C67.2049 40.2036 85.2966 58.2952 108.243 61.0178L124.949 63.0001L108.243 64.9823C85.2966 67.7049 67.2049 85.7966 64.4823 108.743L62.5001 125.449L60.5178 108.743C57.7952 85.7966 39.7036 67.7049 16.7573 64.9823L0.0507812 63.0001L16.7573 61.0178C39.7036 58.2952 57.7952 40.2036 60.5178 17.2573L62.5001 0.550781Z"
      />
    </svg>
  );
}
