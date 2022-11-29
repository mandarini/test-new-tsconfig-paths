import { render } from '@testing-library/react';

import UiThree from './ui-three';

describe('UiThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiThree />);
    expect(baseElement).toBeTruthy();
  });
});
