import React from "react";
import { BadgesProps, BadgesColors, BadgesVariant} from "./types";
import './styles.scss';

export const Badges: React.FC<BadgesProps> = ({
    className = '',
    style = {},
    variant = BadgesVariant.Standard,
    color = BadgesColors.Default,
    content,
    component
} : BadgesProps) => {
    return (
        <div className={`badges badges--${variant} ${component ? `badges--isComponent` : `isNotComponent`} ${className}`} style={style}>
            <div className={`badges__content badges__content--${color} ${variant === BadgesVariant.Standard ? 'badges__content--standard' : `badges__content--dot`}`}>
                {variant === BadgesVariant.Standard && content }
            </div>
            {component}
        </div>
    )
}