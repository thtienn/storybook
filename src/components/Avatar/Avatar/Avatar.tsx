import React from 'react';
import './Avatar.scss';

export interface AvatarProps {
    /**
     * Size of the avatar.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';

    /**
     * Additional class names for custom styling.
     */
    className?: string;

    /**
     * Additional styles for custom styling.
     */
    style?: React.CSSProperties;
    /**
     * Whether the avatar is circular.
     */
    type?: 'circular' | 'rounded' | 'square';
    /**
     * The source URL of the image for the avatar.
     */
    variant? : 'text' | 'icon' | 'image';
    /**
     * The content of the avatar, can be text, icon, or image.
     */
    content?: React.ReactNode;
    /**
     * The status dot.
     */
    badge?: boolean;
}

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