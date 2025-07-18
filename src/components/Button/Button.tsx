import React from 'react';
import './Button.scss';
import { ButtonProps, ButtonColors } from './types';
import { Size, Variant, State } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = ButtonColors.Primary,
  variant = Variant.Contained,
  size = Size.Medium,
  className = '',
  style = {},
  loading = false,
  state = State.Enabled
}) => {
  return (
    <button
      className={`button button--${color} button--${variant} button--${size} ${loading ? `button--isLoading` : `button-isNotLoading`}  button--${state} ${className}`}
      onClick={onClick}
      disabled={state === 'disabled'}
      style={style}
    >
      {loading ?
      <div className={`button__loading-state`}>
        <div className={`button__loading-state__spinner`}></div> 
        <div className={`button__loading-state__loading`}>LOADING</div>
      </div>
        
        : children
      }
    </button>
  );
}