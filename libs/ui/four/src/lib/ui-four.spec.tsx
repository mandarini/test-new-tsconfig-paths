import { render } from '@testing-library/react';

import UiFour from './ui-four';

describe('UiFour', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiFour />);
    expect(baseElement).toBeTruthy();
  });
});
