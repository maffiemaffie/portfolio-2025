import styles from '@/styles/composite/Hero.module.scss';
import { LinedBox } from '../containers';
import { MiddleHighlight } from '../typography';

export function Hero() {
  return (
    <LinedBox bigCorners backgroundColor={"background"} borderColor={"primary"} className={styles['hero']}>
      <h1>
        <MiddleHighlight>
          Port
          <br />
          folio
        </MiddleHighlight>
      </h1>
      <span className={styles['year']}>
        2025
      </span>
    </LinedBox>
  );
};