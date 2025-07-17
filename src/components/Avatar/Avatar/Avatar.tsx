import React from 'react';
import './styles.scss';
import { AvatarProps, AvatarVariant, AvatarSize } from './types';
import { BadgesColors, BadgesVariant } from '@/components/Badges';
import { Badges } from '@/components/Badges';

export const Avatar: React.FC<AvatarProps> = ({
    className = '',
    style = {},
    size = AvatarSize.Md,
    badge = false,
    variant = AvatarVariant.Circular,
    onClick,
    src,
    alt = '',
    children,
    color = "rgba(189, 189, 189, 1)"
}: AvatarProps) => {

    return (
    <div className={`avatar-container avatar-container--${size} avatar-container--${variant} ${className}`} style={{...style, backgroundColor: color}} onClick={onClick}>
            {
                src ? <img src={src} alt={alt} className={`avatar-container__image avatar-container__image--${size} avatar-container__image--${variant}`} onClick={onClick} />
                    : children ? <div className={`avatar-container__content avatar-container__content--${size} avatar-container__content--${variant}`} onClick={onClick}>
                        {children}
                    </div>
                        : <div className={`avatar-container__placeholder avatar-container__placeholder--${size}
                    avatar-container__placeholder--${variant}`} onClick={onClick}>
                            ?
                        </div>
            }
            {badge && <Badges color={BadgesColors.Success} variant={BadgesVariant.Dot} className={`avatar-container__badge avatar-container__badge--${size}`} />}
        </div>
    )
}