import styles from './ui-three.module.css';

/* eslint-disable-next-line */
export interface UiThreeProps {}

export function UiThree(props: UiThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiThree!</h1>
    </div>
  );
}

export default UiThree;
