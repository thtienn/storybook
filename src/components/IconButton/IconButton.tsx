import React from "react";
import './styles.scss'
import { IconButtonProps, IconButtonColors } from "./types";
import { StarIcon } from "../Misc";
import { Size, State } from "@/types";

export const IconButton: React.FC<IconButtonProps> = ({
    className,
    style,
    icon = <StarIcon />,
    size = Size.Medium,
    state = State.Enabled,
    color = IconButtonColors.Default,
    onClick

}: IconButtonProps) => {
    return (
        <button onClick={onClick} className={`icon-button icon-button--${size} icon-button--${state} icon-button--${color} ${className}`} style={style}>
            {icon}
        </button>
    )
}