import React from 'react';
import './styles.scss';
import { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = ({
    size = 'md',
    className = '',
    style = {},
    type = 'circular',
    variant = 'text',
    content,
    badge = false,
}) => {
    
    return (
        <div className={`avatar avatar--${size} avatar--${type} avatar--${variant} ${className}`} style={style}>
            {variant === 'image' && <img src={content as string} alt="Avatar" />}
            {variant === 'icon' && <span className="icon">{content}</span>}
            {variant === 'text' && <span className="text">{content}</span>}
            {badge && <span className="badge"></span>}
        </div>
    );
}