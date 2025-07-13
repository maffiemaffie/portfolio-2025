import styles from '@/styles/typography/ContactLink.module.scss';
import { Icon } from '../icons';

export function ContactLink({ icon, url, children }) {
  return (
    <a href={url} className={styles["contact-link"]}>
      <Icon icon={icon} />
      <span className={styles["content"]}>{children}</span>
    </a>
  );
};