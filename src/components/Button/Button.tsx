import React from 'react';
import './Button.scss';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  disabled = false,
  className = '',
  style = {},
  loading = false,
}) => {
  return (
    <button
      className={`button button--${color} button--${variant} button--${size} ${loading ? `button--isLoading` : `button-isNotLoading`} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}