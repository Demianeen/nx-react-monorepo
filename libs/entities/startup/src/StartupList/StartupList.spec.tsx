import { render } from '@testing-library/react';

import StartupList from './StartupList';

describe('StartupList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StartupList />);
    expect(baseElement).toBeTruthy();
  });
});
