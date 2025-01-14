import { render } from '@testing-library/react';

import PrismKit from './prism-kit';

describe('PrismKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrismKit />);
    expect(baseElement).toBeTruthy();
  });
});
