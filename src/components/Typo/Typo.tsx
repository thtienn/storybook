import './styles.scss';
import { TypoProps } from './types';
import React from 'react';
import { TypoVariant } from './types';

export const Typo: React.FC<TypoProps> = ({
    variant = TypoVariant.CUSTOM,
    className = '',
    style = {},
    content = '',
    gutter = false,
}) => {
    const Tag = 
        variant === TypoVariant.H1 ? 'h1' :
        variant === TypoVariant.H2 ? 'h2' :
        variant === TypoVariant.H3 ? 'h3' :
        variant === TypoVariant.H4 ? 'h4' :
        variant === TypoVariant.H5 ? 'h5' :
        variant === TypoVariant.H6 ? 'h6' :
        'span';

    return (
        <Tag
            className={`typo typo--${variant}${gutter ? ' typo--gutter' : ''} ${className}`}
            style={style}
        >
            {content}
        </Tag>
    );
};