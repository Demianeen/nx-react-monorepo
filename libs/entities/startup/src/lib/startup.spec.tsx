import { render } from '@testing-library/react';

import Startup from './startup';

describe('Startup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Startup />);
    expect(baseElement).toBeTruthy();
  });
});
