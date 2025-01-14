// import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button', { name: /button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Button');
  });

  it('renders with a provided label', () => {
    render(<Button label="Click Me!" />);
    const buttonElement = screen.getByRole('button', { name: /click me!/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    const buttonElement = screen.getByRole('button', { name: /click/i });
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies a variant class', () => {
    render(<Button label="Variant" variant="secondary" />);
    const buttonElement = screen.getByRole('button', { name: /variant/i });
    expect(buttonElement).toHaveClass('prism-button--secondary');
  });
});
