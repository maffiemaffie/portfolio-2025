import styles from '@/styles/typography/Link.module.scss';

export function Link({ href, children }) {
  return (
    <a href={href} className={styles["link"]} target='_blank'>{children}</a>
  );
};