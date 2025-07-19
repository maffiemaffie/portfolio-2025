import styles from '@/styles/typography/ContactLink.module.scss';
import { Icon } from '../icons';
import Link from 'next/link';

export function ContactLink({ icon, url, children }) {
  return (
    <Link href={url} className={`${styles["contact-link"]}`}>
      <Icon icon={icon} />
      <span className={styles["content"]}>{children}</span>
    </Link>
  );
};