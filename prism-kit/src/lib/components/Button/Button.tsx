import React from 'react';
import styles from './Button.module.css'; // or a CSS module, or styled-components, etc.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text displayed on the button */
  label?: string;
  /** The children of the button */
  children?: React.ReactNode;
  /** Visual style of the button */
  variant?: 'primary' | 'secondary';
  /** Additional styles to apply to the button */
  style?: React.CSSProperties;
  /** Function to call when the button is clicked */
  onClick?: () => void;
}

/**
 * A reusable button component
 */
export const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={`${styles['prism-button']} ${
        styles[`prism-button--${variant}`]
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
