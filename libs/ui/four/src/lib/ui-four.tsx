import styles from './ui-four.module.css';

/* eslint-disable-next-line */
export interface UiFourProps {}

export function UiFour(props: UiFourProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiFour!</h1>
    </div>
  );
}

export default UiFour;
