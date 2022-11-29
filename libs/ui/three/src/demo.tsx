/*
 * This a a demo file that can be helpful when developing components by serving and interacting with them in the browser.
 */

import * as ReactDOM from 'react-dom/client';
import { UiThree } from './index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<UiThree />);
