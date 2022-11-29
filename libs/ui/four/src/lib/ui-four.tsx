import styles from './ui-four.module.css';
import { UiThree } from '@beta4/ui/three';
import { sharedTwo } from '@beta4/shared/two';
import { sharedOne } from '@beta4/shared/one';

/* eslint-disable-next-line */
export interface UiFourProps {}

export function UiFour(props: UiFourProps) {
  console.log('I am in UI4 and I am calling sharedTwo', sharedTwo());
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiFour!</h1>
      <p>
        Message from sharedTwo in Lib: <em>{sharedTwo()}</em>
      </p>
      <p>
        Message from sharedOne in Lib: <em>{sharedOne()}</em>
      </p>
      <UiThree />
    </div>
  );
}

export default UiFour;
